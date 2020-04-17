/*
 * @Author: 何元鹏
 * @Date: 2019-09-04 13:51:08
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-12-17 16:49:10
 * @Description: file content
 */
import Vue from "vue";

import Router from "vue-router";

import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/html",
      name: "html",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/Attempt/SummaryHtml/htmlList.vue"
        )
    },

    {
      path: "/css",
      name: "css",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/Attempt/SummaryCss/CssList.vue"
        ),
      redirect: {
        name: "example"
      },
      children: [
        {
          path: "/example",
          name: "example",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/Attempt/SummaryCss/components/example.vue"
            )
        },
        {
          path: "/layout",
          name: "layout",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/Attempt/SummaryCss/components/layout.vue"
            )
        }
      ]
    },
    {
      path: "/javaScript",
      name: "javaScript",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/Attempt/SummaryEs/javaScript.vue"
        )
    },
    {
      path: "/vue",
      name: "vue",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/Attempt/SummaryVue/VueList.vue"
        ),
      redirect: {
        name: "father"
      },
      children: [
        {
          path: "/father",
          name: "father",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/Attempt/SummaryVue/ComponentCommunication/father.vue"
            )
        },
        {
          path: "/StateCommunication",
          name: "StateCommunication",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/Attempt/SummaryVue/VueX/StateCommunication.vue"
            )
        },
        {
          path: "/liQuorTree",
          name: "liQuorTree",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/Attempt/SummaryVue/LiQuorTree/liQuorTree.vue"
            )
        }
      ]
    }
  ]
});
