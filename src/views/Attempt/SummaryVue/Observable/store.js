import Vue from "vue";

export let store = Vue.observable({ count: 40, name: "李四" });
export let mutations = {
  setCount(count) {
    store.count = count;
  },
  changeName(name) {
    store.name = name;
  },
};
