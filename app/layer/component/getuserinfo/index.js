// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html [生命周期 2020-03-16]




Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() {
      // console.log(this.data);
    },
    // 在组件实例进入页面节点树时执行
    attached() {},
    // 在组件在视图层布局完成后执行
    ready() {
      // console.log(this);
      // console.log(this.data);
    },
    // 在组件实例被移动到节点树另一个位置时执行
    moved() {},
    // 在组件实例被从页面节点树移除时执行
    detached() {},
    // 每当组件方法抛出错误时执行
    error(error) {}
  },

  pageLifetimes: {
    // 组件所在的页面被展示时执行
    show() {},
    // 组件所在的页面被隐藏时执行
    hide() {},
    // 组件所在的页面尺寸变化时执行
    resize(size) {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGotUserInfo(e) {
      // 允许
      if (e.detail.errMsg === 'getUserInfo:ok') {
        /*
        {
          "nickName":"皮宫庭",
          "gender":1,"language":"zh_CN",
          "city":"深圳",
          "province":"广东",
          "country":"中国",
          "avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIpgFnCkkdFBeaIJpSHCSKWrkw0CdKtKUiaqVhztU5BMszTU5CMKw44Kyphic2k6pYUOgNEPvsaEAYA/132"
        }
        */

        // 注册

        return;
      }
      
      // 拒绝
      this.onRefuseLogin();
    },

    // 拒绝登录
    onRefuseLogin() {
      // 返回
      const pages = getCurrentPages();

      // 只有一页时，不能返回
      if (pages.length <= 1) {
        // TODO: 返回首页，如果是首页则不跳转，按道理首页是不能出现需要登录才能访问
        return;
      }

      wx.navigateBack();
    },
  }
});
