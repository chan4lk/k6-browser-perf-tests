import { browser } from 'k6/experimental/browser';
import { check, sleep } from 'k6';
import { handleSummary as baseSummary } from './summary.js';

export function handleSummary(data) {
  return baseSummary(data);
}

export const options = {
  discardResponseBodies: true,
  thresholds: {
    'browser_web_vital_lcp': ['p(99.9) < 1000'],
    'browser_web_vital_lcp{test_type:website}': ['p(99)<500'],
  },
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      tags: { test_type: 'website' },
      options: {
        browser: {
          type: 'chromium',
        }
      },
      stages: [
        { duration: '30s', target: 10 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default async function () {
    const page = browser.newPage();

    try {
      await page.goto('https://test.k6.io/browser.php');
      sleep(1);
    } finally {
      page.close();
    }
}
