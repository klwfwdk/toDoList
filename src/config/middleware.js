const path = require('path');
const isDev = think.env === 'development';

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {}
  },
  {
    handle: 'router',
    options: {}
  },
  {
    handle: 'login', 
    enable: true,
    options: {   // 当前中间件需要的配置
      CONSUMER_KEY : "b7a21a56f032455afa67",
      CONSUMER_SECRET : "c29bd25a4543859e69bb8b68b2e30afe705e98bf"
    }},
  'logic',
  'controller'
];
