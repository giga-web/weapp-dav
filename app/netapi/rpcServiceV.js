import Taro from '@tarojs/taro';
import { syncVarIterator } from 'src/utilities/util';
import { KEY_USER_SETTING } from 'src/Constant';
import { URL_WX_LOGIN } from './RestApiUrls';

function request(options) {
  return Taro.request(options)
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      // 因网络等原因请求失败提示
      console.log('网络问题', e);
    });
}

function requestV(options) {
  const token = syncVarIterator.getter(Taro.getStorageSync(KEY_USER_SETTING), 'token');

  // 头部
  const header = {
    'HOS-USER-TICKET': token,
  };

  // 最终请求参数
  options = { ...options, header };

  return new Promise((resolve, reject) => {
    if (token) {
      resolve(request(options));
    } else {
      reject();
    }
  })
    .then((res) => {
      console.log(res);
      if (res.code == -1) { // TODO: 401
        throw '401';
      }
      return res;
    })
    .catch((error) => {
      console.log(error);
      // 登录
      return Taro.login()
        .then((res) => {
          const { defaultCity, currentCity, locationCity } = syncVarIterator.getter(Taro.getStorageSync(KEY_USER_SETTING), 'city');
          const city = currentCity || locationCity || defaultCity;

          return request({
            url: `${URL_WX_LOGIN}?city=${city}&code=${res.code}`,
          });
        })
        .then((res) => {
          console.log(res);
          options.header['HOS-USER-TICKET'] = res.data.token;
          return request(options);
        });
    })
    .then((res) => {
      return res;
    });
}

const rpcService = {
  rGet: (url, extend) => {
    return requestV(Object.assign({ url }, { extend }, { method: 'GET' }));
  },
  rPost: (url, data, extend) => {
    return requestV(Object.assign({ url }, { extend }, { method: 'POST', data: JSON.stringify(data) }));
  },
  rPut: (url, data, extend) => {
    return requestV(Object.assign({ url }, { extend }, { method: 'PUT', data: JSON.stringify(data) }));
  },
  rDelete: (url, extend) => {
    return requestV(Object.assign({ url }, { extend }, { method: 'DELETE' }));
  },
};

export default rpcService;
