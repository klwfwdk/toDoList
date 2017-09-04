
module.exports = class extends think.Logic {
  indexAction() {
    var Koa = require('koa');
    var app = new Koa();
    var login =require('login')
app.use(login());
  }
};
