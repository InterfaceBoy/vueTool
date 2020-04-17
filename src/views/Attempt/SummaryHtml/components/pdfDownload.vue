<!--
 * @Author: 何元鹏
 * @Date: 2019-12-16 19:27:01
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-12-16 20:14:53
 * @Description: file content
 -->
<template>
  <div>
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="loadingTask"
      :page="i"
      style="display: inline-block; width: 100%"
    ></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf
  },
  data() {
    return {
      numPages: undefined
    };
  },
  computed: {
    loadingTask() {
      return pdf.createLoadingTask("/static/maytest.pdf");
    }
  },
  mounted() {
    this.loadingTask.then(pdf => {
      this.numPages = pdf.numPages;
    });
  }
};
</script>
