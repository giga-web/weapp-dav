// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html [生命周期 2020-03-16]
// components/error.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    error: {
      type: Object
    },
    actions: {
      type: Object,
      value: {}
    }
  },

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
    // 刷新
    onRefresh() {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];

      page.onShow();
    },

    // 返回
    onBack() {
      const pages = getCurrentPages();

      // 只有一页时，能返回
      if (pages.length <= 1) { return; }

      wx.navigateBack();
    },

    // 回到首页
    onIndex() {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];

      // 在首页时，不跳转
      if (page.route === 'pages/index/index') { return; }

      // 首页不存在时，不跳转
      // TODO

      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  }
});
