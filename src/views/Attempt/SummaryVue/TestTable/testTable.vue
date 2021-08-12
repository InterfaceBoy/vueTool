<template>
  <div
    class="draggable"
    style="padding: 20px"
  >
    <el-table
      row-key="id"
      :data="tableData"
      style="width: 100%"
      border
    >
      <el-table-column
        v-for="(item,index) in oldList"
        :key="`col_${index}`"
        :prop="newList[index].prop"
        :label="item.label"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from "sortablejs";

export default {
  mounted() {
    this.oldList = JSON.parse(JSON.stringify(this.tableConfig.tableItems));
    this.newList = JSON.parse(JSON.stringify(this.tableConfig.tableItems));
    this.columnDrop();
    this.rowDrop();
  },
  data() {
    return {
      oldList: [],
      newList: [],
      tableData: [
        {
          id: 1,
          name: "李一",
          gender: "男",
          age: 30,
          job: "会计",
        },
        {
          id: 2,
          name: "王二",
          gender: "未知",
          age: 18,
          job: "无业游民",
        },
        {
          id: 3,
          name: "张三",
          gender: "男",
          age: 50,
          job: "老板",
        },
      ],
      tableConfig: {
        tableItems: [
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "性别",
            prop: "gender",
          },
          {
            label: "年龄",
            prop: "age",
          },
          {
            label: "工作",
            prop: "job",
          },
        ],
      },
    };
  },
  methods: {
    // 行拖拽
    rowDrop() {
      // 此时找到的元素是要拖拽元素的父容器
      const tbody = document.querySelector(
        ".draggable .el-table__body-wrapper tbody"
      );
      const _this = this;
      Sortable.create(tbody, {
        //  指定父元素下可被拖拽的子元素
        draggable: ".draggable .el-table__row",
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    // 列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(
        ".draggable .el-table__header-wrapper tr"
      );
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.newList[evt.oldIndex];
          this.newList.splice(evt.oldIndex, 1);
          this.newList.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.test-table {
}
</style>
