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


// 正式
// ====================================================
export const INTERFACE_DOMAIN = 'https://zmj.kaisasso.com/';
// ====================================================


export default {};
