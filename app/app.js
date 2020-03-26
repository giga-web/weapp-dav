/* 开源-工具 */
import { promisifyAll, promisify } from "miniprogram-api-promise";
/* 自研-工具 */
import { localStorageV } from './utilities/base';
import { KEY_USER_SETTING, USER_DEFAULT_SETTING } from "./constants/customer";
/* 数据 */
import { store, addAsyncModel } from "./libs/dva-giga/store.js";
import model from "./pages/model.js";

// 全局 model
addAsyncModel(model);

// 小程序接口 promis 化
const wxp = {};
promisifyAll(wx, wxp);
wx.wxp = wxp;

App({
  onLaunch(options) {
    // 设置用户默认设置
    if (Boolean(localStorageV.getItem(KEY_USER_SETTING)) === false) {
      localStorageV.setItem(KEY_USER_SETTING, USER_DEFAULT_SETTING);
    }
  }
});
