/* 接口 */
import { URL_WX_LOGIN } from "./RestApiUrls";
import { checkWhiteList } from "./RestApiWhiteList";
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

// 静默登录次数限制
let loginSilentNumber = 0;

// 是否正在登录
let logining = false;

// 登录中等待的请求
const loginingWait = [];

// 错误对应的意思
const errorMap = {
  LoginCancel: '登录取消',
  LoginError: '登录错误',
  LoginFail: '登录失败',
  UrlError: '地址错误',
  ServerError: '服务错误',
  OtherError: '其他错误',
};

// 错误时，伪造返回结果
function MockResponse(error, code) {
  // debugger;

  return {
    code: code || -999,
    message: error,
    data: errorMap[error] || '网络错误，请求被阻止',
  };
}

// 处理异常
function handleCatch(tag, options, error) {
  // debugger;

  if (error === 'NoToken' || error === 'InvalidToken') {
    // debugger;
    
    // 登录次数达到限制
    if (loginSilentNumber >= 2) {
      return MockResponse('LoginLimit');
    }

    // 设置静默登录次数
    loginSilentNumber += 1;

    // 静默登录
    return loginSilent(options);

  } else if (error === 'LoginFail') {
    // debugger;

    // 登录失败返回特殊的code
    return MockResponse(error, -9999);

  } else {
    // debugger;

    // 返回模拟响应
    return MockResponse(error);
  }

}

// 静默登录
function loginSilent(options) {
  return wx.wxp.login()
    .then(res => {
      // debugger;

      const { code, errMsg } = res;

      if (errMsg !== 'login:ok') {
        throw 'LoginError';
      }

      return login(code)
        .then(token => {
          // debugger;

          // 设置 token 以重新发起请求
          options.header['HOS-USER-TICKET'] = token + 1;

          // 重新发起所有等待的请求
          loginingWait.forEach(item => {
            item();
          })

          // 重新发起请求
          return request(options);
        });
    })
    .catch(error => {
      // debugger;

      // 这个 catch 存在的原因是，当调用接口失败会直接进入这里。并且根据 error 的数据类型，统一返回字符串形式的错误

      if (typeof error === 'string') {
        // debugger;

        // 1. 接收上一个 then 的 throw 值，继续 throw
        throw error;

      } else {
        // debugger;

        // 2. 暂时不知道什么时候会报错
        throw 'LoginError';
      }
    });
}

// 登录
function login(code) {
  // debugger;

  // 城市
  const { currentCity, locationCity, defaultCity } = syncVarIterator.getter(localStorageV.getItem(KEY_USER_SETTING), 'city');
  const city = currentCity || locationCity || defaultCity;
  
  // 登录请求的参数
  const options = {
    url: `${URL_WX_LOGIN}?city=${city}&code=${code}`,
    method: 'GET',
  };

  // 发送登录请求
  return request(options)
    .then(res => {
      // debugger;

      // 登录请求响应成功
      // TODO: 后台登录失败不应该返回 code = 0
      if (res.code === 0 && res.data.token) {
        // // debugger;

        // 登录成功
        const token = res.data.token;

        // 保存到本地存储
        localStorageV.setItem(KEY_USER_SETTING, Object.assign({ ...localStorageV.getItem(KEY_USER_SETTING) }, { token }));

        return token;

      } else {
        // debugger;

        throw 'LoginFail';
      }

    })
    .catch((error) => {
      // debugger;

      // 这个 catch 存在的原因是，当网络错误或请求被阻止会直接进入这里。并且根据 error 的数据类型，统一返回字符串形式的错误

      if (typeof error === 'string') {
        // debugger;

        // 1. 接收上一个 then 的 throw 值，继续 throw
        throw error;

      } else {
        // debugger;

        // 2. 如果上一个 then 报错，继续 throw
        throw 'LoginFail';
      }
    });
}

// 请求封装
function request(options) {
  return wx.wxp.request(options)
    .then(response => {
      // debugger;

      if ([200].includes(response.statusCode)) {
        // debugger;

        // 响应成功直接返回，不做统一提示
        // 可能的去处：
        // 1. 正常请求，直接返回到请求发起的地方
        // 2. 登录请求，去到发送登录请求的地方
        return response.data;

      } else if ([401, 403].includes(response.statusCode)) {
        debugger;
        throw 'InvalidToken';

      } else if ([404].includes(response.statusCode)) {
        // debugger;
        throw 'UrlError';

      } else if ([500].includes(response.statusCode)) {
        // debugger;
        throw 'ServerError';

      } else {
        // debugger;
        throw 'OtherError';
      }
    })
    .catch(error => {
      // debugger;

      // 这个 catch 存在的原因是，当网络错误或请求被阻止会直接进入这里。并且根据 error 的数据类型，统一返回字符串形式的错误

      if (typeof error === 'string') {
        // debugger;

        // 1. 接收上一个 then 的 throw 值，继续 throw
        throw error;

      } else {
        // debugger;

        // 2. 网络错误或请求被阻止，如跨域
        throw error.message;
      }

    })
}

// 请求入口
function requestEntry(options) {
  // debugger;

  // 请求头
  const header = {};

  // token
  let token = false;


  // 包含在白名单中的请求
  if (checkWhiteList(options.url)) {
    token = true;

  } else {
    // 获取 token 值
    token = syncVarIterator.getter(localStorageV.getItem(KEY_USER_SETTING), 'token');

    // 设置
    header['HOS-USER-TICKET'] = token;
  }

  // 设置为登录中
  if (Boolean(token) === false) {
    logining = true;
  }

  // 最终请求参数
  options = { ...options, header };

  return new Promise((resolve, reject) => {
    if (token) {
      // debugger;

      // 当有 token 时，直接发起请求，过程中可能会有 token 失效的问题，这种情况将根据请求的结果进行处理
      resolve(request(options));

    } else {
      // debugger;

      // 当无 token 时，进入 catch01 处，这也是 catch01 存在的原因
      reject('NoToken');
    }
  })
    .catch(handleCatch.bind(null, 'catch01', options))
    .catch(handleCatch.bind(null, 'catch02', options));
}

// 登录等待
function loginingWaitPromise(url, callback) {
  // debugger;
  
  // 登录中，并且不在白名单
  if (logining && checkWhiteList(url) === false) {
    // debugger;

    return new Promise((resolve, reject) => {
      // debugger;

      // 添加到等待数组
      loginingWait.push(resolve);
    })
      .then(res => {
        // debugger;

        // 登录后调用
        return callback();
      });
  }

  // 无需等待，直接调用
  return callback();
}

const rpcService = {
  rGet: (url, extend) => {
    return loginingWaitPromise(url, () => requestEntry(Object.assign({ url }, { extend }, { method: "GET" })));
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

    return loginingWaitPromise(url, () => requestEntry(Object.assign({ url }, { extend }, { method: "POST", data: dataString })));
  },
  rPut: (url, data, extend) => {
    return loginingWaitPromise(url, () => requestEntry(Object.assign({ url }, { extend }, { method: "PUT", data: JSON.stringify(data) })));
  },
  rDelete: (url, extend) => {
    return loginingWaitPromise(url, () => requestEntry(Object.assign({ url }, { extend }, { method: "DELETE" })));
  }
};

export default rpcService;
