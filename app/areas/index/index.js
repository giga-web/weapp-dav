import { connect } from "../../libs/dva-giga/connect.js";
import { store } from "../../libs/dva-giga/store.js";
import model from "./model.js";
// const logsmodel = require("/pages/model.js");
// import logsmodel from "pages/model.js";

// console.log(logsmodel);

// addAsyncModel(index);
// const { dispatch } = store;

Page(
  connect(model)({
    data: {
      error: { code: -999, message: "服务错误" },
      onRefresh: undefined
    },
    onReceiveProps(nextData) {
      console.log(nextData);
      const data = {};
      if (nextData.a !== this.data.a) {
        data = { ...data, a: nextData.a };
      }
      if (nextData.b !== this.data.b) {
        data = { ...data, b: nextData.b };
      }
      this.setData(data);
    },
    onLoad(options) {
      // console.log(this);
      // console.log("onLoad", options, global);
      this.dispatch({
        type: `${model.namespace}/rGet`,
        payload: {
          pageIndex: 0,
          pageSize: 10,
          city: "深圳市"
        },
        callback: () => {
          console.log(this.data);
        }
      });
    },
    onReady() {
      console.log("onReady");
      // this.setData({ onRefresh: this.onTap });
    },
    onShow() {
      console.log("onShow");
    },
    onHide() {
      console.log("onHide");
    },
    onUnload() {},
    onPullDownRefresh() {},
    onReachBottom() {},
    onShareAppMessage() {},

    onTap() {
      this.dispatch({
        type: `${model.namespace}/rGet`,
        payload: {
          pageIndex: 0,
          pageSize: 10,
          city: "深圳市"
        },
        callback: () => {
          console.log(this.data);
          console.log(store.getState());
        }
      });
    },
    onChange() {
      this.setData({ source: [5, 6, 7, 8, 9] });
    }
  })
);

/*
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
*/
