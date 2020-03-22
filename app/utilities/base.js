// ============================================================
// setStorageSync
// 仅支持对象
// 
// 理解
// 1. 获取未设置的存储，返回值为 null，所以当解析不报错时也返回 null
// 
// ============================================================
export const localStorageV = {
  setItem: function (key, paramsObject) {
    try {
      wx.setStorageSync(key, paramsObject);
      return true;

    } catch (err) {
      console.log('localStorageV setItem: ' + key);
      console.log(err);
      return false;
    }
  },
  getItem: function (key) {
    let result = null;

    try {
      result = wx.getStorageSync(key);
      return result;

    } catch (err) {
      console.log('localStorageV getItem: ' + key);
      console.log(err);
      return result;
    }
  }
};