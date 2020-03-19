import { rGetProjectList } from "../../netapi/index/index";

const indexState = {
  entity: {
    phone: "13421307097"
  }
};

export default {
  namespace: "pages/index",

  state: indexState,

  effects: {
    *rMain({ payload, callback }, { call, put, select }) {
      const response = yield call(rGetProjectList, payload);
      if (response.code !== 0) {
        yield put({ type: "save", payload: { entity: response } });
      }
      callback && callback(response);
      // console.log(response);
      // yield put({ type: "save", payload: { entity: { phone: "13425110801" } } });
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
