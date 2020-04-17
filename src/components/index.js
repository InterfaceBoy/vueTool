/*
 * @Author: 何元鹏
 * @Date: 2019-09-19 15:48:21
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-19 15:48:21
 * @Description: file content
 */
import Vue from "vue";

const ctx = require.context(".", true, /index\.js/);
ctx.keys().forEach(componentPath => {
  // 避免加载此index.js
  if (!componentPath.startsWith("./index.js")) {
    const module = ctx(componentPath);
    const component = module.default || module;
    Vue.component(component.name, component);
  }
});
