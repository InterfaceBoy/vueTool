<!--
 * @Author: 何元鹏
 * @Date: 2019-09-16 16:47:24
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-19 14:00:34
 * @Description: file content
 -->
<template>
  <div>{{names}}</div>
</template>

<script>
export default {
  props: {},
  inject: ["name"],
  data() {
    return {
      names: this.name
    };
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
</style>
