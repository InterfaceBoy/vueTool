<!--
 * @Author: 何元鹏
 * @Date: 2019-09-16 17:20:35
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-18 10:23:23
 * @Description:VueX通讯
 -->
<template>
  <div class="state-communication">
    <h1>VueX通讯: 统计点击次数{{count}}</h1>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    count() {
      this.$store.commit("increment");
      return this.$store.state.count;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.state-communication {
  width: 100%;
  height: 100%;
}
</style>
