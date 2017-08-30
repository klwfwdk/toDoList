const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.body='hello world';
    console.log('hello world');
  }
};
