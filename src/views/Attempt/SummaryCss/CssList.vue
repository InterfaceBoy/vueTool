<!--
 * @Author: 何元鹏
 * @Date: 2019-09-18 11:31:57
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-19 11:28:19
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
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
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
