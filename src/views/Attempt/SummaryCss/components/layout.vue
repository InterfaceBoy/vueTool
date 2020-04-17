<!--
 * @Author: 何元鹏
 * @Date: 2019-09-18 16:37:46
 * @LastEditors  : 何元鹏
 * @LastEditTime : 2019-12-18 16:38:01
 * @Description: file content
 -->
<template>
  <div class="layout">
    <div class="grail">
      <div class="hd">经典的圣杯布局</div>
      <div class="bd">
        <div class="middle">middle</div>
        <div class="left">left</div>
        <div class="right">right</div>
      </div>
      <div class="footer">footer</div>
    </div>

    <div class="wrapper2">
      <div class="hd">经典的双飞翼布局</div>
      <div class="middle">
        <div class="inside">middle</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
      <div class="footer">footer</div>
    </div>
    <div class="blog">
      <div class="header">未来布局之星Grid</div>
      <div class="content">Content</div>
      <div class="sidebar">Sidebar</div>
      <div class="content1">Content1</div>
      <div class="sidebar1">Sidebar1</div>
      <div class="footer">Footer</div>
    </div>
    <div class="layout-flex">
      <div class="flex-left">第一部分</div>
      <div class="flex-conter">第二部分</div>
      <div class="flex-right">第三部分</div>
    </div>
  </div>
</template>

<script>
export default {
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
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  .layout-flex {
    display: flex;
    .flex-left {
      width: 200px;
      height: 300px;
      background-color: red;
    }
    .flex-conter {
      flex: 1;
      background-color: #0c9;
    }
    .flex-right {
      width: 200px;
      height: 300px;
      background-color: #78a7df;
    }
  }
  .grail {
    .hd {
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #eee;
      color: #0c9;
      font-size: 18px;
    }
    .bd {
      /*左右栏通过添加负的margin放到正确的位置了，此段代码是为了摆正中间栏的位置*/
      padding: 0 200px 0 180px;
      height: 100px;
    }
    .middle {
      float: left;
      width: 100%; /*左栏上去到第一行*/
      height: 100px;
      background: orange;
    }
    .left {
      float: left;
      width: 180px;
      height: 100px;
      margin-left: -100%;
      background: #0c9;
      /*中间栏的位置摆正之后，左栏的位置也相应右移，通过相对定位的left恢复到正确位置*/
      position: relative;
      left: -180px;
    }
    .right {
      float: left;
      width: 200px;
      height: 100px;
      margin-left: -200px;
      background: #0c9;
      /*中间栏的位置摆正之后，右栏的位置也相应左移，通过相对定位的right恢复到正确位置*/
      position: relative;
      right: -200px;
    }
    .footer {
      clear: both; /*记得清楚浮动*/
      height: 50px;
      background: #666;
      text-align: center;
    }
  }
  .wrapper2 {
    margin-top: 100px;
    .hd {
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #eee;
      color: #0c9;
      font-size: 18px;
    }
    .middle {
      float: left;
      width: 100%; /*左栏上去到第一行*/
      height: 100px;
      background: orchid;
    }
    .left {
      float: left;
      width: 180px;
      height: 100px;
      margin-left: -100%;
      background: #0c9;
    }
    .right {
      float: left;
      width: 200px;
      height: 100px;
      margin-left: -200px;
      background: #0c9;
    }

    /*给内部div添加margin，把内容放到中间栏，其实整个背景还是100%*/
    .inside {
      margin: 0 200px 0 180px;
      height: 100px;
    }
    .footer {
      clear: both; /*记得清楚浮动*/
      height: 50px;
      background: #666;
      text-align: center;
    }
  }
  .blog {
    display: grid;
    grid-template-columns: 200px auto auto 200px; // repeat(4, 200px)
    grid-template-rows: 100px 200px 100px;
    gap: 10px;
    margin-top: 100px;
    border: 1px solid gold;

    .header {
      grid-row: 1 / 2;
      grid-column: 1 / 5;
      background: #df7b78;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
    .content {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
      background: #78a7df;
    }
    .content1 {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      background: orange;
    }
    .sidebar {
      grid-row: 2 / 3;
      grid-column: 3 / 4;
      background: #87c6b1;
    }
    .sidebar1 {
      grid-row: 2 / 3;
      grid-column: 4 / 5;
      background: burlywood;
    }

    .footer {
      grid-row: 3 / 4;
      grid-column: 1 / 5;
      background: #f1df99;
    }
  }
}
</style>
