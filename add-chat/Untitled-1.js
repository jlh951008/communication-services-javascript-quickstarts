const fetch = require("node-fetch");
var myHeaders = new fetch.Headers();
myHeaders.append("Cookie", "MUIDB=30FDC658A9696A552689D43EA8696B75");

var formdata = new fetch.FormData();
formdata.append("user", "{\"user_id\":\"isssaaac\",\"user_access_token\":\"\"}");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://realestatelandlordservice.bing-wholepage.microsoft-testing-falcon.io/api/v1/get_user_info", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));