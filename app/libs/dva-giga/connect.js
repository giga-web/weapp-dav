import { store, addAsyncModel } from "./store.js";
const { dispatch } = store;

function autoReceiveProps(namespace, nextData) {
  console.log(this);
  // debugger;
  console.log(namespace);
  console.log(nextData);

  let data = {};
  for (const key in nextData) {
    if (nextData.hasOwnProperty(key)) {
      if (nextData[key] !== this.data[key]) {
        data = { ...data, [key]: nextData[key] };
      }
    }
  }
  this.setData(data);

  this.onReceiveProps && this.onReceiveProps(data);
}

export const connect = model => {
  return pageObject => {
    return {
      ...pageObject,
      dispatch,

      onLoad(options) {
        addAsyncModel(model);
        global._event_.on(model.namespace, autoReceiveProps.bind(this));
        autoReceiveProps.call(this, model.namespace, model.state);
        pageObject.onLoad.call(this, options);
      },
      onUnload() {
        dispatch({ type: `${model.namespace}/clean` });
        global._event_.removeListener(model.namespace, autoReceiveProps.bind(this));
        pageObject.onUnload.call(this);
      }
    };
  };
};
