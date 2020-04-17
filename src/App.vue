<!--
 * @Author: 何元鹏
 * @Date: 2019-09-04 13:51:08
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-22 17:09:30
 * @Description: App文件配置页
 -->
<template>
  <div id="app">
    <div class="nva-home">
      <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1">
          <Icon type="ios-paper" />
          <router-link to="/html">Html</router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-people" />
          <router-link to="/css">Css</router-link>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-stats" />
          <router-link to="/vue">Vue</router-link>
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-construct" />
          <router-link to="/javaScript">JavaScript</router-link>
        </MenuItem>
      </Menu>
    </div>

    <router-view class="nva-router" />
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
<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
  .nva-home {
    height: 65px;
    line-height: 65px;
    position: absolute;
    right: 1rem;
  }
  .nva-router {
    padding-top: 65px;
    width: 100%;
    height: 100%;
  }
}
</style>
