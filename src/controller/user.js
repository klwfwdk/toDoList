const Base = require('./base.js');
const Koa = require('koa');
var app = new Koa;
//const login = require('login');

module.exports = class extends Base {
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
        console.log(headers);
        var path = '/login/aouth/access_token';
        headers.host = "github.com"
        // console.log(coded);
        var contents = querystring.stringify({
          client_id: CONSUMER_KEY,
          client_secret: CONSUMER_SECRET,
          code: coded
        })
    console.log(contents);
        var opts = {
          hostname: "github.com",
          //port: '443',
          path: path,
          headers: headers,
          method: 'POST'
        }
        var req = http.request(opts, function (res) {
          res.setEncoding('utf8');
          res.on('data', function (data) {
            var args = data.split('&');
            var tokenInfo = args[0].split('=');
            var token = tokenInfo[1];
            console.log(token);
          })
        }
        );
        req.write(contents);
        req.end;
      }
};
