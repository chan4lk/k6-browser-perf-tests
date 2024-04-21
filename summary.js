import { htmlReport } from "https://raw.githubusercontent.com/chan4lk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data, {debug: true}),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}