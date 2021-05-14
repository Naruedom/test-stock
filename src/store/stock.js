export default {
  namespaced: true,
  state: {
    stocks: [
      {
        id: 11547889,
        name: 'Frozen',
        imageUrl: 'http://via.placeholder.com/100x100?text=A',
      },
      {
        id: 35468187,
        name: 'Yogurt',
        imageUrl: 'http://via.placeholder.com/100x100?text=B',
      },
      {
        id: 86038152,
        name: 'Ice cream',
        imageUrl: 'http://via.placeholder.com/100x100?text=C',
      },
      {
        id: 8068094,
        name: 'sandwich',
        imageUrl: 'http://via.placeholder.com/100x100?text=D',
      },
      {
        id: 2578189,
        name: 'Ice',
        imageUrl: 'http://via.placeholder.com/100x100?text=E',
      },
    ],
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
  mutations: {
    ADD(state, payload) {
      let stock = payload;
      stock.id = Math.floor(Math.random() * 900000);
      state.stocks = [...state.stocks, stock];
    },
    EDIT(state, payload) {
      let index = state.stocks.findIndex(x => x.id == payload.id);
      state.stocks[index] = payload;
    },
    DELETE(state, payload) {
      state.stocks = state.stocks.filter(x => x.id != payload.id);
      console.log(state.stocks);
    },
  },
  actions: {
    add({ commit }, payload) {
      commit("ADD", payload)
    },
    edit({ commit }, payload) {
      commit("EDIT", payload)
    },
    delete({ commit }, payload) {
      commit("DELETE", payload)
    }
  },
};
