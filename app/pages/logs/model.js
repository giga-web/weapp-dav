const logsState = {};

export default {
  namespace: "pages/logs",

  state: logsState,

  effects: {},

  reducers: {
    clean() {
      return logsState;
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
