import Taro from '@tarojs/taro';
import { store } from 'src/store';
import { syncVarIterator } from 'src/utilities/util';
import { KEY_USER_SETTING } from 'src/Constant';

function request(options) {
  const { extend } = options;

  let token = syncVarIterator.getter(store.getState(), 'global.loginData.token');

  if (Boolean(token) === false) {
    token = syncVarIterator.getter(Taro.getStorageSync(KEY_USER_SETTING), 'token');
  }
 
  // 头部
  const header = {
    'HOS-USER-TICKET': token,
  };

  if (extend && extend.contentType) {
    header['content-type'] = extend.contentType;
  }

  // 最终请求参数
  const requestOptions = { ...options, header };

  return Taro.request(requestOptions)
    .then((response) => {
      const { data } = response;

      // 不处理返回值，原样返回
      if (extend && extend.noHandleResponse === true) {
        return data;
      }

      // 统一处理
      const { code, message } = data;

      // 成功返回数据
      if (code === 0) {
        return data.data;

      // 不成功提示，并返回undefined
      } else {

        if (extend && extend.noToast) {
        } else {
          Taro.showToast({
            title: message,
            icon: 'none',
            duration: 3000,
          });
        }

        return;
      }
    })
    .catch((e) => {
      // 因网络等原因请求失败提示
      console.log(e);

      if (extend && extend.noToast) {
      } else {
        Taro.showToast({
          title: '请求失败',
          icon: 'none',
          duration: 3000,
        });
      }
    });
}

const rpcService = {
  rGet: (url, extend) => {
    return request(Object.assign({ url }, { extend }, { method: 'GET' }));
  },
  rPost: (url, data, extend) => {
    return request(Object.assign({ url }, { extend }, { method: 'POST', data: JSON.stringify(data) }));
  },
  rPut: (url, data, extend) => {
    return request(Object.assign({ url }, { extend }, { method: 'PUT', data: JSON.stringify(data) }));
  },
  rDelete: (url, extend) => {
    return request(Object.assign({ url }, { extend }, { method: 'DELETE' }));
  },
};

export default rpcService;