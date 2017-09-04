
module.exports = class extends think.Logic {
  indexAction() {
    var app = new Koa();
    var login =require('login')
app.use(login());
  }
};
