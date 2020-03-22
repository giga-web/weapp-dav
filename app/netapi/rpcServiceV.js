/* 接口 */
import { URL_WX_LOGIN } from "./RestApiUrls";
/* 自研-工具 */
import { localStorageV } from '../utilities/base';
import { syncVarIterator } from "../utilities/util";
import { KEY_USER_SETTING } from "../constants/customer";

/**
 * 约定：
 * 1. 没有统一提示（如：接口调用异常时的全局提示），所有的异常提示在页面内处理
 * 2. 调用时，当前页面应该有一个引导请求，通常如果一个页面的某个请求需要登录，此请求为引导请求
 * 3. 
 */

// 白名单
const whiteList = [
  '/icbp-php-web/auth/login',
];

// 错误对应的意思
const errorMap = {
  LoginCancel: '登录取消',
  LoginError: '登录错误',
  UrlError: '地址错误',
  ServerError: '服务错误',
  OtherError: '其他错误',
};

// 错误时，伪造返回结果
function MockResponse(error) {
  // debugger;

  return {
    code: -999,
    message: error,
    data: errorMap[error] || '网络错误，请求被阻止',
  };
}

// 处理异常
function handleCatch(tag, options, error) {
  // debugger;

  if (error === 'NoToken' || error === 'InvalidToken') {
    // debugger;

    // 需要登录
    return loginModal(options);

  } else {
    // debugger;

    // 返回模拟响应
    return MockResponse(error);
  }

}

// 请求封装
function request(options) {
  return wx.wxp.request(options)
    .then(({ data }) => {
      return data;
    })
    .catch(e => {
      // 因网络等原因请求失败提示
      console.log("网络问题", e);
    });
}

// 请求入口
function requestEntry(options) {
  // debugger;

  // 请求头
  const header = {};

  // token
  let token = false;

  // 不包含在白名单中的请求
  if (whiteList.includes(options.url)) {
    token = true;

  } else {
    // 获取 token 值
    token = syncVarIterator.getter(localStorageV.getItem(KEY_USER_SETTING), 'token');

    // 设置
    header['HOS-USER-TICKET'] = token;
  }

  // 最终请求参数
  options = { ...options, header };

  return new Promise((resolve, reject) => {
    if (token) {
      resolve(request(options));
    } else {
      reject();
    }
  })
    .then(res => {
      if ([404].includes(res.status)) {
        throw "UrlError";

      } else if (res.code == -1) {
        // TODO: 401
        throw "401";
      }

      return res;
    })
    .catch(error => {
      // console.log(error);

      return MockResponse(error);
    })
    .then(res => {
      return res;
    });
}

const rpcService = {
  rGet: (url, extend) => {
    return requestEntry(Object.assign({ url }, { extend }, { method: "GET" }));
  },
  rPost: (url, data, extend) => {
    let dataString = '';

    if (extend && extend.header && extend.header['Content-Type'] === 'application/x-www-form-urlencoded') {
      // 表单方式的值
      dataString = queryString.stringify(data);
    } else {
      // JSON方式的值
      dataString = JSON.stringify(data);
    }

    return requestEntry(Object.assign({ url }, { extend }, { method: "POST", data: dataString }));
  },
  rPut: (url, data, extend) => {
    return requestEntry(Object.assign({ url }, { extend }, { method: "PUT", data: JSON.stringify(data) }));
  },
  rDelete: (url, extend) => {
    return requestEntry(Object.assign({ url }, { extend }, { method: "DELETE" }));
  }
};

export default rpcService;
