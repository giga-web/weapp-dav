import { connect } from "../../libs/dva-giga/connect.js";
import { store } from "../../libs/dva-giga/store.js";
import model from "./model.js";
import { debounce } from '../../utilities/util.js'

function initData () {
  this.dispatch({
    type: `${model.namespace}/rGet`,
    payload: {
      pageIndex: 0,
      pageSize: 10,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });
}

Page(
  connect(model)({

    data: {
      count: 0, // 点赞数累加
      text: '火箭炮*1'
    },
    onLikeTap: function() {
      this.setData({
        count: this.data.count + 1
      });
    },
    onRocketTap: function () {
      const run = () => {
        let animation = wx.createAnimation({
          //动画持续时间，单位ms，默认值 400
          duration: 2000,
          /**
           * http://cubic-bezier.com/#0,0,.58,1  
           *  linear  动画一直较为均匀
           *  ease    从匀速到加速在到匀速
           *  ease-in 缓慢到匀速
           *  ease-in-out 从缓慢到匀速再到缓慢
           * 
           *  http://www.tuicool.com/articles/neqMVr
           *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
           *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
           */
          timingFunction: 'ease',
          transformOrigin: 'center center 0',
          //延迟多长时间开始
          delay: 0,
        });
        animation.rotate(-20).scale(2.5).translate(100, -200).opacity(1).step()
        // 输出动画
        this.setData({
          ani: animation.export()
        })
        // 每次回到初始状态的时间太久, 添加多一个动画实例
        let animation2 = wx.createAnimation({
          duration: 0,
          timingFunction: 'ease',
          transformOrigin: 'center center 0',
        })
        // 回到初始状态，否则多次点击操作动画只能执行一次
        setTimeout(() => {
          animation2.rotate(0).scale(0).translate(0,0).opacity(0).step()
          this.setData({
            ani: animation2.export()
          })
        }, 2000);
        this.handleAniText()
      }
      // 防抖
      debounce(run, 500)()
    },
    handleAniText: function () {
      const animation = wx.createAnimation({
        duration: 1200,
        timingFunction: 'ease',
        transformOrigin: 'center center 0',
        delay: 100
      });
      animation.scale(1.4).translate(0, -150).opacity(0.8).step()
      this.setData({
        aniText:  animation.export()
      })
      let animation2 = wx.createAnimation({
        delay: 0,
        timingFunction: 'step-start',
      })
      setTimeout(() => {
        animation2.scale(0).translate(0, 0).opacity(0).step()
        this.setData({
          aniText: animation2.export()
        })
      }, 1200);
    },
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
