<!--
 * @Author: 何元鹏
 * @Date: 2019-09-16 16:56:41
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-09-14 11:37:51
 * @Description: file content
 -->
<template>
  <div class="vue-list">
    <ul class="left-nav">
      <li>
        <router-link to="/father">父子组件通讯</router-link>
      </li>
      <li>
        <router-link to="/StateCommunication">VueX</router-link>
      </li>
      <li>
        <router-link to="/liQuorTree">liQuorTree</router-link>
      </li>
      <li>
        <router-link to="/observable">observable</router-link>
      </li>
      <li>
        <router-link to="/testTable">testTable</router-link>
      </li>
    </ul>
    <router-view class="right-content" />
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
.vue-list {
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 15% 70% 5%;
  .left-nav {
    li {
      list-style: none;
      padding: 1rem;
    }
  }
  .right-content {
    position: relative;
  }
}
</style>
