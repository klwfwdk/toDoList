const Base = require('./base.js');

module.exports = class extends Base {
  __before() {
    console.log("hello");
    console.log(this.ctx.url)
  }
  indexAction() {
    this.body = 'hello world';
    console.log('hello world');
  }
  _call() {
    this.body = '不存在'
  }
};
