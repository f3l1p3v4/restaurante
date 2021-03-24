import Vue from "vue";
import Vuex from "vuex";
import headerVisible from "./modules/headerVisible";
import menuItems from "./modules/menuItems";
import popUp from "./modules/popUp";
import shoppingBasket from "./modules/shoppingBasket";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    headerVisible,
    menuItems,
    popUp,
    shoppingBasket
  }
});
