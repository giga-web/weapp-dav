const namespace = 'zmj';

// ====================================================
// 个人设置
export const KEY_USER_SETTING = namespace + '_' + 'usersetting';
export const USER_DEFAULT_SETTING = {
  city: {
    defaultCity: '深圳',
    selectedCity: undefined,
    locationCity: undefined,
  },
  token: undefined,
};
// ====================================================


// ====================================================
// 个人信息
export const KEY_USER_INFO = namespace + '_' + 'userinfo';
// ====================================================



/*
// 测试
// ====================================================
// 签章地址
export const SIGNATURE_URL = 'https://zmjtest.kaisasso.com/report/pubilc/qiyuesuo/qiyuesuo.html';
// ====================================================

// ====================================================
export default {
  INTERFACE_DOMAIN_DEV: 'https://zmjtest.kaisasso.com/',
  INTERFACE_DOMAIN_PRD: 'https://zmjtest.kaisasso.com/',

  INTERFACE_PREFIX: '',

  IMAGE_SERVICE:"https://hos-1254241854.file.myqcloud.com/icon/weapp/",

  WEBSOCKET_DOMAIN_DEV: 'wss://zmjtest.kaisasso.com/', // 测试环境
  WEBSOCKET_DOMAIN_PRD: 'wss://zmjtest.kaisasso.com/',
};
// ====================================================
*/



// 正式
// ====================================================
// 签章地址
export const SIGNATURE_URL = 'https://zmj.kaisasso.com/report/pubilc/qiyuesuo/qiyuesuo.html';
// ====================================================

// ====================================================
export default {
  INTERFACE_DOMAIN_DEV: 'https://zmj.kaisasso.com/',
  INTERFACE_DOMAIN_PRD: 'https://zmj.kaisasso.com/', // 正式环境

  INTERFACE_PREFIX: '',
  IMAGE_SERVICE:"https://hos-1254241854.file.myqcloud.com/icon/weapp/",

  WEBSOCKET_DOMAIN_DEV: 'wss://zmj.kaisasso.com/', // 正式环境
  WEBSOCKET_DOMAIN_PRD: 'wss://zmj.kaisasso.com/', // 正式环境
};
// ====================================================

