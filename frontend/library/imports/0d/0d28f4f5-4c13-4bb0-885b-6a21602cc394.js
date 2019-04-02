"use strict";
cc._RF.push(module, '0d28fT1TBNLsIhbaiFgLMOU', 'conf');
// plugin_scripts/conf.js

"use strict";

if (CC_DEBUG) {
  var backendAddress = {
    PROTOCOL: 'https',
    HOST: 'bgmoba.lokcol.com',
    PORT: "443",
    WS_PATH_PREFIX: "/tsrht"
  };

  /*
  var wechatAddress = {
    PROTOCOL: "http",
    HOST: "58.87.122.61",
    PORT: "8089",
    PROXY: "",
    APPID_LITERAL: "appid=wx5432dc1d6164d4e",
  };
  */

  /*
  var backendAddress = {
    PROTOCOL: 'http',
    HOST: 'localhost',
    PORT: "9992",
    WS_PATH_PREFIX: "/tsrht",
  };
  */

  // var wechatAddress = {
  //   PROTOCOL: "http",
  //   HOST: "localhost",
  //   PORT: "8089",
  //   PROXY: "",
  //   APPID_LITERAL: "appid=wx5432dc1d6164d4e",
  // };

  var wechatAddress = {
    PROTOCOL: "https",
    HOST: "open.weixin.qq.com",
    PORT: "",
    PROXY: "",
    APPID_LITERAL: "appid=wxe7063ab415266544"
  };
} else {
  /*
  var backendAddress = {
    PROTOCOL: 'http',
    HOST: '192.168.31.139',
    PORT: "9992",
    WS_PATH_PREFIX: "/tsrht",
  };
  */

  var backendAddress = {
    PROTOCOL: 'https',
    HOST: 'tsrht.lokcol.com',
    PORT: "443",
    WS_PATH_PREFIX: "/tsrht"
  };

  var wechatAddress = {
    PROTOCOL: "https",
    HOST: "open.weixin.qq.com",
    PORT: "",
    PROXY: "",
    APPID_LITERAL: "appid=wxe7063ab415266544"
  };
}

window.language = "zh";
window.backendAddress = backendAddress;
window.wechatAddress = wechatAddress;

cc._RF.pop();