const Base = require('./base.js');
module.exports = class extends think.Controller {
  //login action
  async loginAction(){
      var path = "https://github.com/login/OAuth/authorize";
      path += '?client_id=' + 'b7a21a56f032455afa67';
     // path += '&scope='+OAuthConfig.GITHUB_CLIENT_SCOPE;
      path += '&state='+ 'dataStr';
      //转发到授权服务器
     this.redirect(path);
  };
  }