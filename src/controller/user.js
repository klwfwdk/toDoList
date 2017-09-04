const Base = require('./base.js');
const request = require('request');
const CONSUMER_KEY = "b7a21a56f032455afa67";
const CONSUMER_SECRET = "c29bd25a4543859e69bb8b68b2e30afe705e98bf";
module.exports = class extends think.Controller {

  //login action
  async loginAction() {

    /*let path = "http://github.com/login/oauth/authorize";
   path += '?client_id=' + 'b7a21a56f032455afa67';
   path += '&scope=' + 'user:email';
   path += '&state=' + 'dataStr';
   //转发到授权服务器
   this.redirect(path);

 };
 async PostAction() {
   var querystring = require('querystring');
   var request = require('request');
   let coded = this.ctx.param('code');
  // console.log(coded);
   var k = request.post('https://github.com/login/oauth/access_token', {
     from: {
       client_id: "b7a21a56f032455afa67",
       client_secret: "c29bd25a4543859e69bb8b68b2e30afe705e98bf",
       code: coded,
     }
   }, function (error, response, body) {
     if (!error) {
       console.log(this.ctx.post());
     }
   }
   );
  
 }*/
    
    var url = 'http://github.com/login/oauth/authorize';
      url +="?client_id="+CONSUMER_KEY;
      //url +="?scope="+"user:email";
      ;
      this.redirect(url);
  }
  async PostAction(){
    let coded = this.ctx.param('code');
    var oauth={
      client_id: "b7a21a56f032455afa67",
      client_secret: "c29bd25a4543859e69bb8b68b2e30afe705e98bf",
      code: coded
    }
    request.post({url:'https://github.com/login/oauth/access_token',oauth:oauth},function (e,r,body) {
      this.body=r;
      //console.log(body);
      console.log(r);
    })
  }
}