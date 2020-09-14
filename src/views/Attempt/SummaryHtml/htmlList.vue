<!--
 * @Author: 何元鹏
 * @Date: 2019-10-22 14:43:34
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-09-14 14:32:38
 * @Description: file content
 -->
<template>
  <div class="html-list">
    <div class="list-tag">
      <Menu
        mode="vertical"
        theme="light"
        active-name="5"
      >
        <MenuItem name="1">
          <p @click="handleTag(1)">投票功能</p>
        </MenuItem>
        <MenuItem name="2">
          <p @click="handleTag(2)">功能测试</p>
        </MenuItem>
        <!-- <MenuItem name="3">
          <p @click="handleTag(3)">上传pdf预览</p>
        </MenuItem>
        <MenuItem name="4">
          <p @click="handleTag(4)">远程pdf预览</p>
        </MenuItem>-->
        <MenuItem name="5">
          <p @click="handleTag(5)">XML文件解析</p>
        </MenuItem>
        <MenuItem name="6">
          <p @click="handleTag(6)">树型表格</p>
        </MenuItem>
      </Menu>
    </div>
    <div class="list-componets">
      <voting v-if="listTagShow === 1"></voting>
      <tool v-if="listTagShow === 2"></tool>
      <download v-if="listTagShow === 3"></download>
      <pdfDownload v-if="listTagShow === 4"></pdfDownload>
      <perviewXML v-if="listTagShow === 5"></perviewXML>
      <tableTerr v-if="listTagShow === 6"></tableTerr>
    </div>
  </div>
</template>

<script>
/*   组件 */
import voting from "@/views/Attempt/SummaryHtml/components/voting.vue";
import tool from "@/views/Attempt/SummaryHtml/components/tool.vue";
// import download from "@/views/Attempt/SummaryHtml/components/download.vue";
// import pdfDownload from "@/views/Attempt/SummaryHtml/components/pdfDownload.vue";
import perviewXML from "@/views/Attempt/SummaryHtml/components/perviewXML.vue";
import tableTerr from "@/views/Attempt/SummaryHtml/components/table.vue";
export default {
  props: {},
  data() {
    return {
      listTagShow: 6
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleTag(id) {
      this.listTagShow = id;
    }
  },
  components: { voting, tool, download, pdfDownload, perviewXML, tableTerr }
};
</script>

<style scoped lang="scss">
.html-list {
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 20% 80%;
  .list-tag {
  }
  .list-componets {
  }
}
</style>
