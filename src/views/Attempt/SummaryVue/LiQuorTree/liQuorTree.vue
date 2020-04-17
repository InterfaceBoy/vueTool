<!--
 * @Author: 何元鹏
 * @Date: 2019-10-10 10:54:54
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-23 15:30:01
 * @Description: file content
 -->
<template>
  <div class="li-quor-Tree">
    <div class="search">
      <Input
        v-model="text"
        :icon="iconDown"
        :id="value"
        @on-focus="handleFocus"
        @on-click="handleIconClick"
      />
      <!-- <Icon type="ios-arrow-back" /> -->
    </div>
    <div class="example" v-if="liQuortreeShow">
      <div class="example-description">
        <Input
          type="text"
          search
          placeholder="请输入搜索内容"
          v-model="searchListModel"
          @on-search="handleSearchMethod"
        />
      </div>
      <div class="example-tree">
        <Spin v-if="searchLoading" :fix="true"></Spin>
        <ul class="search-list" v-if="searchSwitchtree">
          <li
            v-for="(option, index) in searchListData"
            :key="index"
            :value="option.id"
            :class="{caterv:option.id ===isActive,searchSelected:searchSelectedActive}"
            @click="handleListClick(option.id,$event)"
          >{{option.attrs.attrs.qymc.name}}</li>
        </ul>
        <LiquorTree
          v-else
          ref="treeRef"
          :data="tableTreeData"
          :filter="treeFilter2"
          :options="treeOptions2"
          @node:checked="handleNodeChecked"
          @node:unchecked="handleNodeUnchecked"
        >
          <div slot-scope="{ node }" class="node-container" @mouseup.stop="stopTree">
            <div class="node-text">{{ node.text }}</div>
          </div>
        </LiquorTree>
      </div>
    </div>
  </div>
</template>

<script>
import LiquorTree from "liquor-tree";
import { convertTreeArray } from "@/utils/base";
import { getRegionBaseList, getRegionBaseSearch } from "@/api";
export default {
  props: {},
  data() {
    return {
      iconDown: "ios-arrow-back",
      value: [],
      text: "",
      isActive: 0,
      liQuortreeShow: false,
      treeData2: [],
      treeOptions2: {
        checkbox: true,
        filter: {
          plainList: true
        },
        async fetchData(node) {
          const res = await getRegionBaseList(node.data.value);
          return convertTreeArray(res);
        }
      },
      treeFilter2: "",
      SelectionArray: [],
      searchListModel: "",
      searchListModelArray: [],
      searchListData: "",
      searchLoading: false,
      searchSwitchtree: false,
      searchSelectedActive: false,
      //
      searchEcho: {
        text: [],
        value: []
      },
      //
      treeEcho: {
        text: [],
        value: []
      }
    };
  },
  computed: {
    // 表格树数据
    tableTreeData() {
      let data = convertTreeArray(this.treeData2);
      return data;
    }
  },
  created() {},
  async mounted() {
    this.treeData2 = await getRegionBaseList(-1);
  },
  watch: {},
  methods: {
    handleIconClick() {
      this.liQuortreeShow
        ? ((this.iconDown = "ios-arrow-back"), (this.liQuortreeShow = false))
        : ((this.iconDown = "ios-arrow-down"), (this.liQuortreeShow = true));
    },
    // 点击首层input框
    handleFocus() {
      this.liQuortreeShow
        ? 0
        : ((this.iconDown = "ios-arrow-down"), (this.liQuortreeShow = true));
    },
    /* 搜索功能点击list */
    handleListClick(id, data) {
      let name = data.currentTarget.innerHTML;
      data.currentTarget.style.background = "#eee";
      // 第一次筛选：选出当前数组中相同的数据
      let s = this.searchListModelArray.filter(item => {
        return item.value === id;
      });
      // 第二次筛选：数组去重，并取消list选中状态
      if (s.length) {
        this.searchListModelArray = this.searchListModelArray.filter(item => {
          return item.value !== id;
        });
        data.currentTarget.style.background = "#fff";
      } else {
        this.searchListModelArray.push({ text: name, value: id });
      }
      // 回显数据拼接
      let echoDisplay = this.searchListModelArray.map(item => {
        return item.text;
      });
      let echoId = this.searchListModelArray.map(item => {
        return item.value;
      });
      this.searchEcho = { text: echoDisplay, value: echoId };
      this.text = [...this.treeEcho.text, ...this.searchEcho.text].toString();
      this.value = [...this.treeEcho.value, ...this.searchEcho.value];
    },
    // 开启搜索功能
    async handleSearchMethod(searchText) {
      this.searchSwitchtree = true;
      if (searchText) {
        this.searchLoading = true;
        try {
          const res = await getRegionBaseSearch(0, 30, searchText);
          this.searchListData = res.data;
          this.searchLoading = false;
        } catch (error) {
          console.log(error);
        }
      } else {
        this.searchListData = [];
        this.searchSwitchtree = false;
      }
    },
    // tree的点击（多选选中）
    handleNodeChecked() {
      this.SelectionArray = this.$refs.treeRef
        .findAll({
          state: { checked: true }
        })
        .map(element => {
          return { text: element.data.text, value: element.data.value };
        });
      let treeEchoText = this.SelectionArray.map(item => {
        return item.text;
      });
      let treeEchoValue = this.SelectionArray.map(item => {
        return item.value;
      });
      this.treeEcho = {
        text: treeEchoText,
        value: treeEchoValue
      };
      this.text = [...this.searchEcho.text, ...this.treeEcho.text].toString();
      this.value = [...this.searchEcho.value, ...this.treeEcho.value];
    },
    // 多选选中取消
    handleNodeUnchecked(data) {
      this.SelectionArray = this.SelectionArray.filter(element => {
        return element.value !== data.data.value;
      });
      this.text = this.SelectionArray.map(item => {
        return item.text;
      }).toString();
      this.value = this.SelectionArray.map(item => {
        return item.value;
      });
    }
  },
  components: {
    LiquorTree
  }
};
</script>

<style scoped lang="scss">
.li-quor-Tree {
  width: 24rem;
  height: 100%;
  flex-basis: 49%;
  .example {
    box-sizing: border-box;
    border: 1px solid #eee;
    margin-top: 5px;
    .example-tree {
      position: absolute;
      width: 100%;
      height: 20rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .search-list {
      li {
        padding: 0.5rem 1rem;
        cursor: pointer;
        &:hover {
          background-color: #f7f2e7;
        }
      }
      .caterv {
        background-color: #f7f2e7;
      }
      .searchSelected {
        background-color: #eee;
      }
    }
    .example-description {
      width: 90%;
      margin: 1rem auto;
    }
  }
}

.tree-highlights .tree-node.matched > .tree-content {
  background: #f7f2e7;
}

.node-info {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
