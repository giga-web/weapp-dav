import { rGetProjectList, rGetRecommendList, rGetPayOrderList } from "../../netapi/index/index";

const indexState = {
  erroractions: { refresh: true, back: true, index: true },
};

export default {
  namespace: "pages/index",

  state: indexState,

  effects: {
    *rMain({ payload, callback }, { call, put, select }) {
      const response = yield call(rGetProjectList, payload);

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
