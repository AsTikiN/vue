export default {
  namespaced: true,
  state: {
    isLoggined: false,
    accounts: [{ id: 1, login: "admin@site.com", password: "Qaz123" }],
  },
  getters: {
    login: (state) => state.isLoggined,
    accounts: (state) => state.accounts,
  },
  mutations: {
    setLogin(state, loginStatus) {
      state.isLoggined = loginStatus;
    },
  },
  actions: {},
};
