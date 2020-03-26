import { connect } from "../../libs/dva-giga/connect.js";
import { store } from "../../libs/dva-giga/store.js";
import model from "./model.js";

function initData () {
  this.dispatch({
    type: `${model.namespace}/rMain`,
    payload: {
      pageIndex: 0,
      pageSize: 10,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });

  this.dispatch({
    type: `${model.namespace}/rMain`,
    payload: {
      pageIndex: 0,
      pageSize: 20,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });

  this.dispatch({
    type: `${model.namespace}/rMain`,
    payload: {
      pageIndex: 0,
      pageSize: 30,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });

  this.dispatch({
    type: `${model.namespace}/rMain`,
    payload: {
      pageIndex: 0,
      pageSize: 40,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });

  /*  
  this.dispatch({
    type: `${model.namespace}/rGet`,
    payload: {
      pageIndex: 0,
      pageSize: 6,
      recommendChannel: 1,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });
  */

  this.dispatch({
    type: `${model.namespace}/rGetOrder`,
    payload: {
      pageIndex: 0,
      pageSize: 20,
    },
    callback: () => {
      // console.log(this.data);
    }
  });
}

Page(
  connect(model)({

    data: {},

    onReceiveProps(nextData) {
      // console.log('onReceiveProps', nextData);
      /*
      const data = {};
      if (nextData.a !== this.data.a) {
        data = { ...data, a: nextData.a };
      }
      if (nextData.b !== this.data.b) {
        data = { ...data, b: nextData.b };
      }
      this.setData(data);
      */
    },

    onLoad(options) {
      // wx.showNavigationBarLoading();

      /*
      wx.getUserInfo({
        withCredentials: true,
        lang: 'zh_CN',
        success(res) {
          // {
          //   encryptedData: "dOI2wBDrrgSZPA+A8xZmfxtj2sKKUgu0DA6tKqg5JzXEJXwCwFh1K9uCJ7udTqGtV54Qihp6iMtqnzT1G7TCpPHF/MW4Hj1L5bK42Q/dbdGa6S9hl6vnDG/EhH6vxUNDlOcKGx3bnT7XYso1R1XlWaHx+QF3BW7U8EaQoRKBwUgqNw3qXsW+no8+TwkpcKburtfKX8t5eyxtujxIq9yo3BeHA48gpRoKEft9W1bF39FUXmC2XsUzUvX+SuNw3nMzTKa7d+Lp7DfA3eb4da2bzo6iD1T8Q/HB2BIj0ukOHtFns4V+vOZQXeoxyk+pZNyvBM+FLoOpjDuAuLHfDBsIWNRcBzCfPZDdVeI00mbfvBvVPJdmU7fHGHLCKpqTziVoU3Fp58hDuJgoYPSm215ujHyHZ6s5AqvuRKeQc8EksNAUS9OVsNBPhlkYr5/dIDlsk86LuJ1cw3yOs670V03SYbtgVWUq9ZE7e9Rur8TCBU5sWa3UkY4RAxfZ/yuvInbe2auPjbv8fqOho1M5glp0ciupKVejCyvffOsVdWdDqn0="
          //   errMsg: "getUserInfo:ok"
          //   iv: "CVYY3yT/KGIJwdYh3pDjeQ=="
          //   rawData: "{"nickName":"皮宫庭","gender":1,"language":"zh_CN","city":"Shenzhen","province":"Guangdong","country":"China","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIpgFnCkkdFBeaIJpSHCSKWrkw0CdKtKUiaqVhztU5BMszTU5CMKw44Kyphic2k6pYUOgNEPvsaEAYA/132"}"
          //   signature: "583149064a70c29753e9a6c40203df9b2b29f0e2"
          //   userInfo: {nickName: "皮宫庭", gender: 1, language: "zh_CN", city: "Shenzhen", province: "Guangdong", …}
          // }
          console.log('success', res);
        },
        fail(res) {
          console.log('fail', res);
        },
        complete(res) {
          console.log('complete', res);
        }
      });
      */

      /*
      wx.authorize({
        scope: 'scope.userInfo',
        success(res) {
          console.log('success', res);
        },
        fail(res) {
          console.log('fail', res);
        },
        complete(res) {
          console.log('complete', res);
        }
      });
      */
    },

    onReady() {
      /*
      console.log("onReady");
      */
    },

    onShow() {
      /*
      console.log("onShow");
      */
      initData.call(this);
    },

    onHide() {
      /*
      console.log("onHide");
      */
    },

    onUnload() {},

    onPullDownRefresh() {},

    onReachBottom() {},

    onShareAppMessage() {},

    onTap() {
      initData.call(this);
    },

  })
);
