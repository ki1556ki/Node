var url = require('url');

var urlStr = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%ED%8C%9D%EC%BD%98';

var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log('query -> ' + curUrl.query);

var curStr = url.format(curUrl);
console.log('url -> ' + curStr);


var quertstring = require('querystring');
var params = quertstring.parse(curUrl.query);
console.log('검색어 : ' + params.query);
