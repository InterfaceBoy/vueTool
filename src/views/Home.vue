<!--
 * @Author: 何元鹏
 * @Date: 2019-09-04 13:51:08
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-03-30 09:51:23
 * @Description: 首页
 -->
<template>
  <div class="home">
    <div class="home-header">天行健，君子当自强不息</div>

    <div class="home-center">
      <div class="implement">
        <router-link to="/vue">GO</router-link>
      </div>
    </div>
    <div class="home-footer">
      <span>Copyright © heyp 2019 all right reserved</span>
      <span>当前时间： 2019-07-30 15:50:08</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  background: url("../assets/timg.jpeg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &-header {
    padding: 4rem 3rem;
    font-size: 2rem;
    font-family: cursive;
    color: #eee;
    font-weight: 600;
  }
  &-center {
    display: flex;
    flex: 1;
    justify-content: center;
    .implement {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      color: #eee;
      position: relative;
      border-radius: 100%;
      background-color: antiquewhite;
      // background: url("../assets/timg.jpeg") no-repeat center/cover;
      &::after {
        position: absolute;
        left: 0;
        top: 10%;
        z-index: -1;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        background: inherit;
        filter: blur(10px) brightness(80%) opacity(0.8);
        content: "";
        transform: scale(0.95);
      }
    }
  }
  &-footer {
    display: inline-flex;
    background-color: goldenrod;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    opacity: 0.6;
    span {
      color: #fff;
    }
  }
}
</style>
