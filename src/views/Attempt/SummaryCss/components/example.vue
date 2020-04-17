<!--
 * @Author: 何元鹏
 * @Date: 2019-09-04 15:16:55
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-19 11:02:17
 * @Description: css样式尝试实例
 -->
<template>
  <div class="example">
    <div>
      <h2>阴影</h2>
      <div class="box-shadow"></div>
    </div>

    <h2>内部CSS3 盒阴影</h2>
    <div class="css-box-shadow"></div>
    <h2>外部CSS3 盒阴影</h2>
    <div class="css-box-shadow1"></div>
    <h2>CSS3 鲜艳的输入</h2>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "css1",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.example {
  height: 100%;
  position: relative;
  .box-shadow {
    background-color: #ff8020;
    width: 5em;
    height: 3em;
  }
  .box-shadow:after {
    content: "";
    width: 4em;
    height: 1px;
    margin-top: 2.75em;
    margin-left: 0.5em;
    display: block;
    position: absolute;

    z-index: -1;
    -webkit-box-shadow: 0px 0px 8px 2px #000000;
    -moz-box-shadow: 0px 0px 8px 2px #000000;
    box-shadow: 0px 0px 8px 2px #000000;
  }
  .css-box-shadow {
    width: 4em;
    height: 4em;
    background-color: #eee;
    -moz-box-shadow: inset 2px 0 4px #000;
    -webkit-box-shadow: inset 2px 0 4px #000;
    box-shadow: inset 2px 0 4px #000;
  }
  .css-box-shadow1 {
    width: 4em;
    height: 4em;
    background-color: #eee;
    -webkit-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.52);
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.52);
  }
  input[type="text"],
  textarea {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #ddd;
  }
  input[type="text"]:focus,
  textarea:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }
}
</style>
