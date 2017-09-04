const Base = require('./base.js');
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
    const request = require('request');
    const CONSUMER_KEY = "b7a21a56f032455afa67";
    const CONSUMER_SECRET = "c29bd25a4543859e69bb8b68b2e30afe705e98bf";
    var qs = require('querystring')
      , oauth =
        {
          callback: 'http://mysite.com/callback/'
          , consumer_key: CONSUMER_KEY
          , consumer_secret: CONSUMER_SECRET
        }
      , url = 'http://github.com/login/oauth/authorize'
      ;
    request.get({ url: url, oauth: oauth }, function (e, r, body) {
      // Ideally, you would take the body in the response
      // and construct a URL that a user clicks on (like a sign in button).
      // The verifier is only available in the response after a user has
      // verified with twitter that they are authorizing your app.
      var access_token = qs.parse(body)
        , oauth =
          {
            consumer_key: CONSUMER_KEY
            , consumer_secret: CONSUMER_SECRET
            , token: access_token.oauth_token
            , verifier: access_token.oauth_verifier
          }
        , url = 'https://github.com/login/oauth/access_token'
        ;
      request.post({ url: url, oauth: oauth }, function (e, r, body) {
        var perm_token = qs.parse(body)
          , oauth =
            {
              consumer_key: CONSUMER_KEY
              , consumer_secret: CONSUMER_SECRET
              , token: perm_token.oauth_token
              , token_secret: perm_token.oauth_token_secret
            }
          , url = 'https://api.github.com/user?access_token='
          , params =
            {
              screen_name: perm_token.screen_name
              , user_id: perm_token.user_id
            }
          ;
        url += qs.stringify(params)
        request.get({ url: url, oauth: oauth, json: true }, function (e, r, user) {
          console.log(user)
        })
      })
    })
  }
}