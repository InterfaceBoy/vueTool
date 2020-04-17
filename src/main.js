/*
 * @Author: 何元鹏
 * @Date: 2019-09-04 15:21:35
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-03-23 22:51:18
 * @Description: file content
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "view-design";
import ElementUI from "element-ui";

import x2js from "x2js"; // xml数据处理插件
Vue.prototype.$x2js = new x2js(); // 创建x2js对象，挂到vue原型上

// UI组件库引入
Vue.use(iView);
Vue.use(ElementUI);
import "./registerServiceWorker";

// 浏览器样式reset css
import "./style/reset.scss";
// 引入element-ui的样式
import "element-ui/lib/theme-chalk/index.css";
// 引入iview的css
import "view-design/dist/styles/iview.css";
// 引入样式
import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";

// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
// 全局组件注册
import "@/components";

Vue.config.productionTip = false;

Vue.config.errorHandler = function(err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err);
  console.log(vm);
  console.log(info);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
