import { rGetProjectList, rGetRecommendList, rGetPayOrderList } from "../../netapi/index/index";

const indexState = {
  erroractions: { refresh: true, back: true, index: true },
};

export default {
  namespace: "pages/index",

  state: indexState,

  effects: {
    /*
    // 废掉以前的请求，保留最新的请求，例如：搜索
    rMain: [
      function *rMainInternal({ payload, callback }, { call, put, select }) {
        const response = yield call(rGetProjectList, payload);

        console.log(response);

        if (response.code !== 0) {
          yield put({ type: "save", payload: { error: response } });  
        }
        
        yield put({ type: "save", payload: { entity: response } });
        
        callback && callback(response);
      },
      { type: 'takeLatest' }
    ],
    // 每次都发送请求，并接收每次的结果
    rMain: [
      function *rMainInternal({ payload, callback }, { call, put, select }) {
        const response = yield call(rGetProjectList, payload);

        console.log(response);

        if (response.code !== 0) {
          yield put({ type: "save", payload: { error: response } });  
        }
        
        yield put({ type: "save", payload: { entity: response } });
        
        callback && callback(response);
      },
      { type: 'takeEvery' }
    ],
    */
    // 等待请求完成，才能再次发送请求，例如：表单提交
    *rMain({ payload, callback }, { call, put, select }) {
      const response = yield call(rGetProjectList, payload);

      console.log(response);

      if (response.code !== 0) {
        yield put({ type: "save", payload: { error: response } });  
      }
      
      yield put({ type: "save", payload: { mainData: response } });
      
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
