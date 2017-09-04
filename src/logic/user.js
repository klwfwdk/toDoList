module.exports = class extends think.Logic {
  indexAction() {
var opt={
  CONSUMER_KEY = "b7a21a56f032455afa67",
  CONSUMER_SECRET = "c29bd25a4543859e69bb8b68b2e30afe705e98bf"
}
this.use(login(opt));
  }
};
