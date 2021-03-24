import api from "@/services/api";

export default {
  namespaced: true,

  state: {
    items: [],
    isEmpty: true
  },

  mutations: {},

  actions: {
    async ["loadData"]({ state }) {
      state.items = await api.get("/all").then((response) => response.data);

      state.isEmpty = !!state.items.length;
    }
  },
  gettets: {}
};
