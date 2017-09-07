const Base = require('./base.js');
const Koa = require('koa');
var app = new Koa;
var https = require("https")
const querystring = require('querystring')
//const login = require('login');
const option = {
  CONSUMER_KEY: "b7a21a56f032455afa67",
  CONSUMER_SECRET: "c29bd25a4543859e69bb8b68b2e30afe705e98bf"
}
module.exports = class extends Base {
  async loginAction() {
    let path = "http://github.com/login/oauth/authorize";
    path += '?client_id=' + 'b7a21a56f032455afa67';
    path += '&scope=' + 'user:email';
    path += '&state=' + 'dataStr';
    //转发到授权服务器
    this.redirect(path);

  };
  /*async*/ loginAfterAction() {
    return this.display();
  }
};
