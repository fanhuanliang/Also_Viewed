import http from 'k6/http';
import { Rate } from 'k6/metrics';
import { sleep, check} from 'k6';

let errorRate = new Rate('errorRate');

export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 300 },
    { duration: '10s', target: 300 },
    { duration: '10s', target: 400 },
    { duration: '10s', target: 400 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    'errorRate': ['rate < 0.1' ]
  }
};

export default function () {
  const id = Math.floor(Math.random() * 10000000);
  const baseUrl = 'http://localhost:1337/api;'
  let responses = http.batch([
    [
      'GET',
      `${baseUrl}/top-picks/fetch/${id}`,
      null,
    ],
    [
      'GET',
      `${baseUrl}/api/ultimately-bought/fetch/${id}`,
      null,
    ],
  ]);
  // let success = check(responses, {
  //   "status is 200" : r => r.status === 200
  // })
  // if (!success) {
  //   errorRate.add(true);
  // } else {
  //   errorRate.add(false);
  // }
  // sleep(0.5);
  errorRate.add(responses.status >= 400)
}