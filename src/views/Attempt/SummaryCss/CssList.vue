<!--
 * @Author: 何元鹏
 * @Date: 2019-09-18 11:31:57
 * @LastEditors: 何元鹏
 * @LastEditTime: 2021-07-14 11:20:44
 * @Description: file content
 -->
<template>
  <div class="css-list">
    <ul>
      <li>
        <router-link to="/example">阴影</router-link>
      </li>

      <li>
        <router-link to="/layout">布局</router-link>
      </li>
      <li></li>
    </ul>
    <iframe
      width="100%"
      height="100%"
      src="http://localhost:9096/#/YZT/OneMap/DistMap"
      id="iframe"
    ></iframe>
    <router-view class="css-style" />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    const iFrame = document.getElementById("iframe");

    // iframe加载完毕后再发送消息，否则子页面接收不到message

    iFrame.onload = function () {
      // iframe加载完立即发送一条消息
      iFrame.contentWindow.postMessage({ msg: "MessageFromIndexPage" }, "*");
    };
    window.parent.postMessage("子页面发送的消息", "*");
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
.css-list {
  display: grid;
  grid-template-columns: 10rem auto 2rem;
  grid-template-rows: 2rem auto 2rem;
  ul {
    grid-row: 2 / 3;
    grid-column: 1/2;
    li {
      list-style: none;
      padding: 1rem;
    }
  }
  .css-style {
    grid-row: 2 / 3;
    grid-column: 2/3;
  }
}
</style>
