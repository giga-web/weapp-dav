import { store, addAsyncModel } from "./libs/dva-giga/store.js";
import { promisifyAll, promisify } from "miniprogram-api-promise";

const wxp = {};
promisifyAll(wx, wxp);
wx.wxp = wxp;

App({});
