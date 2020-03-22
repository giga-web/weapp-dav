import { connect } from "../../libs/dva-giga/connect";

const mapStateToProps = state => {
  console.log('logs mapStateToProps');
  return { ...state };
};

/*
Page(
  connect(mapStateToProps)({
    data: {},
    onLoad(options) {
      console.log('logs onLoad');
    },
    onReady() {
      console.log('logs onReady');
    },
    onShow() {
      console.log('logs onShow');
    },
    onHide() {
      console.log('logs onHide');
    },
    onUnload() {},
    onPullDownRefresh() {},
    onReachBottom() {},
    onShareAppMessage() {}
  })
);
*/