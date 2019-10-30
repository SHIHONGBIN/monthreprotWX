import request from '../utils/request';

export function query() {
  return request('/api/users');
}

//首页数据
export function querys() {
  var url = ''
  if (window.location.href.indexOf("guojiacf") > -1) {
    url = "https://api.guojiacf.com/api/report/GetReportModel";
  } else {
    url = "http://api.pingdainet.com/api/report/GetReportModel";
  }
  var postData = {
    body: JSON.stringify({"Year": 2019,"Month": 10}),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  }
  return request(url, postData);
}