/*
 * @Author: 何元鹏
 * @Date: 2019-09-04 15:21:35
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-04 15:21:35
 * @Description: file content
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {}
});
