const globalState = {};

export default {
  namespace: "global",

  state: globalState,

  effects: {
    *rLogin({ payload, callback }, { call, put, select }) {
      console.log('rLogin');
      /*
      const response = yield call(rGetRecommendList, payload);

      if (response.code !== 0) {
        yield put({ type: "save", payload: { error: response } });  
      }
      
      yield put({ type: "save", payload: { entity: response } });
      
      */
      callback && callback(false);
    },
  },

  reducers: {
    clean() {
      return globalState;
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
