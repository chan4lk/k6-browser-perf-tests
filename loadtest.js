// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {}

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export default function main() {
  let response

  group(
    'page_1 - https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
    function () {
      response = http.get('https://k6.io/docs/page-data/app-data.json', {
        headers: {
          referer:
            'https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get(
        'https://k6.io/docs/4a1b70f9c7b45ab0ea7070ddafb8eb8c620f4bba-dc82287a7aace82d4daf.js',
        {
          headers: {
            referer:
              'https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://k6.io/docs/component---src-templates-docs-guides-js-d477a31be440aee18e49.js',
        {
          headers: {
            referer:
              'https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get('https://k6.io/docs/page-data/sq/d/1297623504.json', {
        headers: {
          referer:
            'https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get('https://k6.io/docs/page-data/sq/d/224560566.json', {
        headers: {
          referer:
            'https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.get('https://k6.io/docs/page-data/app-data.json', {
        headers: {
          referer:
            'https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })

      response = http.post(
        'https://px.ads.linkedin.com/wa/',
        '{"pids":[4981058],"scriptVersion":142,"time":1713594018320,"domain":"k6.io","url":"https://k6.io/docs/test-authoring/create-tests-from-recordings/using-the-browser-recorder/","pageTitle":"Using the browser recorder","websiteSignalRequestId":"1b486aae-a86d-53fb-d4ca-426ba939cde1","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":31},"isLinkedInApp":false,"hem":null,"signalType":"CLICK","href":"/docs/get-started/installation/","domAttributes":{"elementSemanticType":null,"elementValue":null,"elementType":null,"tagName":"A","backgroundImageSrc":null,"imageSrc":null,"imageAlt":null,"innerText":"Installation","elementTitle":null,"cursor":"pointer"},"innerElements":null,"elementCrumbsTree":[{"tagName":"div","nthChild":1,"id":"___gatsby"},{"tagName":"div","nthChild":0,"id":"gatsby-focus-wrapper"},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--wrapper--2ad53"]},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--sidebar--b0281"]},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--sidebar-list--f4a20"]},{"tagName":"div","nthChild":2,"classes":["doc-layout-module--sidebar-section--7c385"]},{"tagName":"div","nthChild":1,"classes":["doc-layout-module--sidebar-node-children--9103b"]},{"tagName":"div","nthChild":1,"classes":["doc-layout-module--sidebar-node--a1b42"]},{"tagName":"a","nthChild":0,"classes":["doc-layout-module--sidebar-node-title--a3241"],"attributes":{"href":"/docs/get-started/installation/"}}],"isFilteredByClient":false}',
        {
          headers: {
            accept: '*',
            'content-type': 'text/plain;charset=UTF-8',
            referer: 'https://k6.io/',
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )

  group('page_2 - https://k6.io/docs/get-started/installation/', function () {
    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":142,"time":1713594018391,"domain":"k6.io","url":"https://k6.io/docs/get-started/installation/","pageTitle":"Using the browser recorder","websiteSignalRequestId":"bde642cb-5e18-08a2-8526-cc19e640d9bf","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":31},"isLinkedInApp":false,"hem":null,"signalType":"PAGE_VISIT"}',
      {
        headers: {
          accept: '*',
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://fonts.gstatic.com/s/robotomono/v23/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vvtSM1J-gEPT5Ese09hHSh0mQ.woff2',
      {
        headers: {
          origin: 'https://k6.io',
          referer: 'https://fonts.googleapis.com/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://status.k6.io/api/v2/status.json', {
      headers: {
        referer: 'https://k6.io/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/data/jobs-positions.json', {
      headers: {
        referer: 'https://k6.io/docs/get-started/installation/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://go2.grafana.com/index.php/form/getForm?munchkinId=356-YFG-389&form=1420&url=https%3A%2F%2Fk6.io%2Fdocs%2Fget-started%2Finstallation%2F&callback=jQuery37103879267608856303_1713593859796&_=1713593859798',
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ndrfbfzecr-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.14.2)%3B%20Browser%20(lite)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.38.1)%3B%20JS%20Helper%20(3.11.1)&x-algolia-api-key=d31db030bd93c2aade72a72ab1045411&x-algolia-application-id=NDRFBFZECR',
      {
        '{"requests":[{"indexName":"prod_k6_docs","params":"facets': '[]',
        filters: 'en',
        highlightPostTag: '</ais-highlight-0000000000>',
        highlightPreTag: '<ais-highlight-0000000000>',
        query: '',
        tagFilters: '"}]}',
      },
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/docs/favicon-32x32.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9', {
      headers: {
        referer: 'https://k6.io/docs/get-started/installation/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/docs/page-data/app-data.json', {
      headers: {
        referer: 'https://k6.io/docs/get-started/installation/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://k6.io/docs/page-data/get-started/installation/troubleshooting/page-data.json',
      {
        headers: {
          referer: 'https://k6.io/docs/get-started/installation/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://analytics.google.com/g/collect?v=2&tid=G-H2LHZ4M8SN&gtm=45je44h0v9126796651za200&_p=1713593857742&_gaz=1&gcd=13l3l3l3l1&npa=0&dma=0&cid=151721141.1713593859&ul=en-us&sr=1536x864&ir=1&uaa=x86&uab=64&uafvl=Chromium%3B124.0.6367.61%7CGoogle%2520Chrome%3B124.0.6367.61%7CNot-A.Brand%3B99.0.0.0&uamb=0&uam=&uap=Windows&uapv=15.0.0&uaw=0&are=1&pae=1&pscdl=noapi&_eu=EEA&_s=3&dl=https%3A%2F%2Fk6.io%2Fdocs%2Fget-started%2Finstallation%2F&dr=https%3A%2F%2Fk6.io%2Fdocs%2Ftest-authoring%2Fcreate-tests-from-recordings%2Fusing-the-browser-recorder%2F&sid=1713593858&sct=1&seg=1&dt=Installation&en=page_view&_et=3250&tfd=162865&uafvl=Chromium%3B124.0.6367.61%7CGoogle%2520Chrome%3B124.0.6367.61%7CNot-A.Brand%3B99.0.0.0',
      null,
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google.lk/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-H2LHZ4M8SN&cid=151721141.1713593859&gtm=45je44h0v9126796651za200&aip=1&dma=0&gcd=13l3l3l3l1&npa=0&z=560321789',
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":142,"time":1713594019472,"domain":"k6.io","url":"https://k6.io/docs/get-started/installation/","pageTitle":"Installation","websiteSignalRequestId":"71e13650-61a0-c42d-b4bb-17fdd1d1590b","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":31},"isLinkedInApp":false,"hem":null,"signalType":"CLICK","href":"/docs/get-started/installation/troubleshooting/","domAttributes":{"elementSemanticType":null,"elementValue":null,"elementType":null,"tagName":"A","backgroundImageSrc":null,"imageSrc":null,"imageAlt":null,"innerText":"Troubleshooting","elementTitle":null,"cursor":"pointer"},"innerElements":null,"elementCrumbsTree":[{"tagName":"div","nthChild":1,"id":"___gatsby"},{"tagName":"div","nthChild":0,"id":"gatsby-focus-wrapper"},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--wrapper--2ad53"]},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--sidebar--b0281"]},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--sidebar-list--f4a20"]},{"tagName":"div","nthChild":2,"classes":["doc-layout-module--sidebar-section--7c385"]},{"tagName":"div","nthChild":1,"classes":["doc-layout-module--sidebar-node-children--9103b"]},{"tagName":"div","nthChild":1,"classes":["doc-layout-module--sidebar-node--a1b42"]},{"tagName":"div","nthChild":2,"classes":["doc-layout-module--sidebar-node-children--9103b"]},{"tagName":"div","nthChild":0,"classes":["doc-layout-module--sidebar-node--a1b42"]},{"tagName":"a","nthChild":0,"classes":["doc-layout-module--sidebar-node-title--a3241"],"attributes":{"href":"/docs/get-started/installation/troubleshooting/"}}],"isFilteredByClient":false}',
      {
        headers: {
          accept: '*',
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ndrfbfzecr-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.14.2)%3B%20Browser%20(lite)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.38.1)%3B%20JS%20Helper%20(3.11.1)&x-algolia-api-key=d31db030bd93c2aade72a72ab1045411&x-algolia-application-id=NDRFBFZECR',
      {
        '{"requests":[{"indexName":"prod_k6_docs","params":"facets': '[]',
        filters: 'en',
        highlightPostTag: '</ais-highlight-0000000000>',
        highlightPreTag: '<ais-highlight-0000000000>',
        query: '',
        tagFilters: '"}]}',
      },
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_3 - https://k6.io/docs/get-started/installation/troubleshooting/', function () {
    response = http.post(
      'https://o175050.ingest.sentry.io/api/5289132/envelope/?sentry_key=f46b8e24a5374539ba179e52835913e3&sentry_version=7&sentry_client=sentry.javascript.gatsby%2F7.21.1',
      '{"sent_at":"2024-04-20T06:20:19.567Z","sdk":{"name":"sentry.javascript.gatsby","version":"7.21.1"}}\n{"type":"session"}\n{"sid":"d7ac34cae1314435b258d48b874fd2a6","init":false,"started":"2024-04-20T06:17:38.165Z","timestamp":"2024-04-20T06:20:19.575Z","status":"exited","errors":0,"attrs":{"release":"01a0976c8208f37f80bf16ec2c5ee60582e54a35","environment":"production","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://o175050.ingest.sentry.io/api/5289132/envelope/?sentry_key=f46b8e24a5374539ba179e52835913e3&sentry_version=7&sentry_client=sentry.javascript.gatsby%2F7.21.1',
      '{"sent_at":"2024-04-20T06:20:19.568Z","sdk":{"name":"sentry.javascript.gatsby","version":"7.21.1"}}\n{"type":"session"}\n{"sid":"4a8cab930d284fdea816476f6e7ed08a","init":true,"started":"2024-04-20T06:20:19.575Z","timestamp":"2024-04-20T06:20:19.575Z","status":"ok","errors":0,"attrs":{"release":"01a0976c8208f37f80bf16ec2c5ee60582e54a35","environment":"production","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"}}',
      {
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://px.ads.linkedin.com/wa/',
      '{"pids":[4981058],"scriptVersion":142,"time":1713594019574,"domain":"k6.io","url":"https://k6.io/docs/get-started/installation/troubleshooting/","pageTitle":"Installation","websiteSignalRequestId":"bbbd27bb-50c8-06b9-a9af-58d11f64dd37","isTranslated":false,"liFatId":"","liGiant":"","misc":{"psbState":31},"isLinkedInApp":false,"hem":null,"signalType":"PAGE_VISIT"}',
      {
        headers: {
          accept: '*',
          'content-type': 'text/plain;charset=UTF-8',
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://status.k6.io/api/v2/status.json', {
      headers: {
        referer: 'https://k6.io/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/data/jobs-positions.json', {
      headers: {
        referer: 'https://k6.io/docs/get-started/installation/troubleshooting/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://go2.grafana.com/index.php/form/getForm?munchkinId=356-YFG-389&form=1420&url=https%3A%2F%2Fk6.io%2Fdocs%2Fget-started%2Finstallation%2Ftroubleshooting%2F&callback=jQuery37103879267608856303_1713593859796&_=1713593859799',
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ndrfbfzecr-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.14.2)%3B%20Browser%20(lite)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.38.1)%3B%20JS%20Helper%20(3.11.1)&x-algolia-api-key=d31db030bd93c2aade72a72ab1045411&x-algolia-application-id=NDRFBFZECR',
      {
        '{"requests":[{"indexName":"prod_k6_docs","params":"facets': '[]',
        filters: 'en',
        highlightPostTag: '</ais-highlight-0000000000>',
        highlightPreTag: '<ais-highlight-0000000000>',
        query: '',
        tagFilters: '"}]}',
      },
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://ndrfbfzecr-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.14.2)%3B%20Browser%20(lite)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.38.1)%3B%20JS%20Helper%20(3.11.1)&x-algolia-api-key=d31db030bd93c2aade72a72ab1045411&x-algolia-application-id=NDRFBFZECR',
      {
        '{"requests":[{"indexName":"prod_k6_docs","params":"facets': '[]',
        filters: 'en',
        highlightPostTag: '</ais-highlight-0000000000>',
        highlightPreTag: '<ais-highlight-0000000000>',
        query: '',
        tagFilters: '"}]}',
      },
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://k6.io/docs/page-data/get-started/page-data.json', {
      headers: {
        origin: 'https://k6.io',
        referer: 'https://k6.io/docs/get-started/installation/troubleshooting/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://k6.io/docs/page-data/get-started/page-data.json', {
      headers: {
        referer: 'https://k6.io/docs/get-started/installation/troubleshooting/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://k6.io/docs/component---src-templates-docs-breadcrumb-stub-js-942a2231e6220b923c48.js',
      {
        headers: {
          referer: 'https://k6.io/docs/get-started/installation/troubleshooting/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://analytics.google.com/g/collect?v=2&tid=G-H2LHZ4M8SN&gtm=45je44h0v9126796651za200&_p=1713593857742&gcd=13l3l3l3l1&npa=0&dma=0&cid=151721141.1713593859&ul=en-us&sr=1536x864&ir=1&uaa=x86&uab=64&uafvl=Chromium%3B124.0.6367.61%7CGoogle%2520Chrome%3B124.0.6367.61%7CNot-A.Brand%3B99.0.0.0&uamb=0&uam=&uap=Windows&uapv=15.0.0&uaw=0&are=1&pae=1&pscdl=noapi&_eu=EEA&_s=4&dl=https%3A%2F%2Fk6.io%2Fdocs%2Fget-started%2Finstallation%2Ftroubleshooting%2F&dr=https%3A%2F%2Fk6.io%2Fdocs%2Fget-started%2Finstallation%2F&sid=1713593858&sct=1&seg=1&dt=Troubleshooting&en=page_view&_et=1177&tfd=169058&uafvl=Chromium%3B124.0.6367.61%7CGoogle%2520Chrome%3B124.0.6367.61%7CNot-A.Brand%3B99.0.0.0',
      null,
      {
        headers: {
          referer: 'https://k6.io/',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
