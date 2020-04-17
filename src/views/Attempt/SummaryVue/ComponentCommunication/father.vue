<!--
 * @Author: 何元鹏
 * @Date: 2019-09-16 16:18:48
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-16 17:17:12
 * @Description: 父组件
 -->
<template>
  <div class="father">
    <AHtml></AHtml>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import AHtml from "./components/A.vue";
export default {
  props: {},
  data() {
    return {
      msg: "123",
      mag: "456"
    };
  },
  provide: {
    name: "何元鹏"
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    changeA() {
      // 获取到子组件A
      console.log(this.$children[0]);
      this.$children[0].messageB = "父组件传值给你了哦";
    }
  },
  components: {
    AHtml
  }
};
</script>

<style scoped lang="scss">
.father {
  width: 100%;
}
</style>
