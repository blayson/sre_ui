import Vue from "vue";
import Vuex from "vuex";
import { state } from "@/store/state";
import { getters } from "@/store/getters";
import { actions } from "@/store/actions";
import { mutations } from "@/store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
