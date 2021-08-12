<!--
 * @Autor: 何元鹏
 * @Date: 2020-04-16 15:55:15
 * @LastEditors: 何元鹏
 * @LastEditTime: 2021-07-21 10:00:04
 * @Author: 何元鹏
 * @Description: file content
 -->
<template>
  <Table
    row-key="id"
    :load-data="handleLoadData"
    :columns="columns16"
    :data="data13"
    border
  ></Table>
</template>
<script>
export default {
  data() {
    return {
      columns16: [
        {
          title: "产业园区名称",
          key: "name",
          tree: true,
        },
        {
          title: "土地供应",
          key: "age",
        },
        {
          title: "土地征收",
          key: "address",
        },
      ],
      data13: [
        {
          id: "101",
          name: "锦江区园区",
          age: 24,
          address: "London No. 1 Lake Park",
          _loading: false,
          children: [],
        },
      ],
    };
  },
  methods: {
    breadthQuery(tree, id) {
      let stark = [];
      stark = stark.concat(tree);

      while (stark.length) {
        let temp = stark.shift();
        if (temp.children) {
          stark = stark.concat(temp.children);
        }
        if (temp.id === id) {
          return temp;
        }
      }
      console.log(stark);
    },
    handleLoadData(item, callback) {
      const s = this.breadthQuery(this.data13, item.id);
      console.log(s);
      s.children = [
        {
          id: item.id + 1,
          name: "柳江工业园",
          age: 18,
          address: "New York No. 1 Lake Park",
          _loading: false,
          children: [],
        },
      ];
      console.log(s);

      callback(s.children);
    },
  },
};
</script>

