const indexState = {
  entity: {
    phone: "13421307097"
  }
};

export default {
  namespace: "pages/index",

  state: indexState,

  effects: {
    *rGet({ payload }, { call, put, select }) {
      const response = yield call()
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
