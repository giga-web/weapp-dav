import { store, addAsyncModel } from "./store.js";

const { dispatch } = store;

function autoReceiveProps(namespace, state) {
  const currentData = state[namespace];

  let data = {};
  for (const key in currentData) {
    if (currentData.hasOwnProperty(key)) {
      if (currentData[key] !== this.data[key]) {
        data = { ...data, [key]: currentData[key] };
      }
    }
  }

  // 主请求的加载状态
  try {
    const loading = state.loading.effects[namespace + '/rMain'];
    if (this.data.loading !== loading) {
      data.loading = loading;
      // console.log(loading);
    }
  } catch (err) {
    console.log(err);
  }

  this.setData(data);

  this.onReceiveProps && this.onReceiveProps(state);
}

export const connect = model => {
  return pageObject => {
    return {

      ...pageObject,

      dispatch,

      lifetimes: {
        ...pageObject.lifetimes,

        created() {
          addAsyncModel(model);
          this.setData(model.state);
          pageObject.lifetimes.created.call(this, options);  
        }
      }
      /*
      onLoad(options) {
        addAsyncModel(model);
        this.setData(model.state);
        pageObject.onLoad.call(this, options);
      },

      onUnload() {
        dispatch({ type: `${model.namespace}/clean` });
        pageObject.onUnload.call(this);
      },

      onShow() {
        // console.log("onShow");
        global.namespaces[model.namespace] = autoReceiveProps.bind(this, model.namespace);
        pageObject.onShow.call(this);
      },

      onHide() {
        // console.log("onHide");
        delete global.namespaces[model.namespace];
        pageObject.onHide.call(this);
      },
      */

    };
  };
};
