const Base = require('./base.js');
const request = require('request');
const http = require('http');
const CONSUMER_KEY = "b7a21a56f032455afa67";
const CONSUMER_SECRET = "c29bd25a4543859e69bb8b68b2e30afe705e98bf";
module.exports = class extends think.Controller {

  //login action
  async loginAction() {

    let path = "http://github.com/login/oauth/authorize";
    path += '?client_id=' + 'b7a21a56f032455afa67';
    path += '&scope=' + 'user:email';
    path += '&state=' + 'dataStr';
    //转发到授权服务器
    this.redirect(path);

  };
  async loginAfterAction(req, resp) {
    let coded = this.ctx.param('code');
    let state = this.ctx.param('state');
    var headers = this.ctx.headers;
    var path = '/login/aouth/access_token';
    headers.host = "github.com"
    // console.log(coded);
    path += "?client_id:" + CONSUMER_KEY;
    path += "&client_secret:" + CONSUMER_SECRET;
    path += "&code:" + coded;
    var opts = {
      hostname: "github.com",
      port: '443',
      path: path,
      headers: headers,
      method: 'POST'
    }
    var k = http.req(opts, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (data) {
        var args = data.split('&');
        var tokenInfo = args[0].split('=');
        var token = tokenInfo[1];
      })
    }
   
    ); console.log(token);

  }
}