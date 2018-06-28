
var express = require('express');
var path = require('path');
var compression = require('compression');
var httpProxy = require('http-proxy');

var app  = new express();
var port = 8089;

app.use(compression());


var apiProxy = httpProxy.createProxyServer();

//这里拦截所有的请求 找出所有是当前图片的
// app.use(function (req, res, next) {
//
//     if(req.url.indexOf('/images/') > -1){
//         res.redirect("http://web.resource.zhonghuajinfu.com" + req.url + "?imageslim");
//     } else {
//         next();
//     }
// });

app.use(express.static(path.join(__dirname,'dist')));

app.all("/web/*", function(req, res){
    // apiProxy.web(req, res, { target: 'http://39.108.141.132:9091' });
    apiProxy.web(req, res, { target: 'http://120.79.144.109:8080' })
});

app.listen(port,function(error){
    if(error){
        console.error(error);
    } else {
        console.log("===> listen on port %s.Open up http://localhost:%s/ in your browser.",port,port );
    }
})