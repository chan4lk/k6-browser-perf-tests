 har-to-k6 new-recording_115040.har -o loadtest.js
 set "K6_BROWSER_HEADLESS=false" && k6 run loadtest.js
 k6 run --out json=test_results.json base.js 
