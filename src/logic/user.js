
module.exports = class extends think.Logic {
  indexAction() {
    var login =require('login')
this.use(login());
  }
};
