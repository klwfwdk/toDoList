module.exports = (options, app) => {
  const querystring = require('querystring');
  const http = require('http');
  /*const CONSUMER_KEY = "b7a21a56f032455afa67";
  const CONSUMER_SECRET = "c29bd25a4543859e69bb8b68b2e30afe705e98bf";*/
  return (ctx, next) => {
console.log(options.CONSUMER_SECRET);
    return next();
  };
};
