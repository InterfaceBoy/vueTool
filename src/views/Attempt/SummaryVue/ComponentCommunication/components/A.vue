<!--
 * @Author: 何元鹏
 * @Date: 2019-09-16 16:19:37
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-09-16 16:55:02
 * @Description: file content
 -->
<template>
  <div>
    <h1>{{messageA}}</h1>
    <h2>{{messageB}}</h2>
    <p>获取父组件的值为: {{parentVal}}</p>
    <p>{{name}}</p>
    <div class="som-som">
      子组件的子组件：
      <Aa></Aa>
    </div>
  </div>
</template>

<script>
import Aa from "./Aa.vue";
export default {
  props: {},
  inject: ["name"],
  data() {
    return {
      messageA: "我是一号子组件",
      messageB: "我是二号子组件",
      name: this.name
    };
  },

  computed: {
    parentVal() {
      console.log(this.$parent.msg);
      return this.$parent.msg + this.$parent.mag;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: { Aa }
};
</script>

<style scoped lang="scss">
.som-som {
  border: 1px solid red;
}
</style>
