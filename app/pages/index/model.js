import { rGetProjectList, rGetRecommendList, rGetPayOrderList } from "../../netapi/index/index";

const indexState = {
  erroractions: { refresh: true, back: true, index: true },
};

export default {
  namespace: "pages/index",

  state: indexState,

  effects: {
    *rMain({ payload, callback }, { fork, join, cancel, call, put, select, take }) {
      // 前面的请求不完成，后面请求不发送，如：表单提交
      // if (task) { return; }

      // const action = yield take('pages/index/rMain');
      // console.log('action', action);

      const task = yield fork(rGetProjectList, payload);
      
      if (task) {
        console.log('task', task);
        // yield cancel(task);
      }

      const response = yield join(task);

      if (response.code !== 0) {
        yield put({ type: "save", payload: { error: response } });  
      }
      
      yield put({ type: "save", payload: { entity: response } });
      
      callback && callback(response);
    },
    *rGet({ payload, callback }, { call, put, select }) {
      const response = yield call(rGetRecommendList, payload);

      if (response.code !== 0) {
        yield put({ type: "save", payload: { error: response } });  
      }
      
      yield put({ type: "save", payload: { entity: response } });
      
      callback && callback(response);
    },
    *rGetOrder({ payload, callback }, { call, put, select }) {
      // 取消前面的请求，只关注最后的请求，如：搜索
      const response = yield call(rGetPayOrderList, payload);

      if (response.code !== 0) {
        yield put({ type: "save", payload: { error: response } });  
      }
      
      yield put({ type: "save", payload: { entity: response } });
      
      callback && callback(response);
    }
  },

  reducers: {
    clean() {
      return indexState;
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
