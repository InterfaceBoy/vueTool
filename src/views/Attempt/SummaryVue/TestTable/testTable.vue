<template>
  <div class="test-table">
    <Table
      :columns="columns"
      :data="data"
      border
      :span-method="handleSpan"
    ></Table>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "testTable",
  // 组件参数 接收来自父组件的数据
  props: {
    cs: {
      type: String,
      default: () => ""
    }
  },
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      columns: [
        {
          key: "region",
          title: "地区"
        },
        {
          key: "index",
          title: "序号"
        },
        {
          key: "js1",
          title: "允许建设区1"
        },
        {
          key: "js2",
          title: "允许建设区2"
        },
        {
          key: "js3",
          title: "允许建设区3"
        }
      ],
      data: [
        {
          region: "旌阳区",
          index: 1,
          js1: "11",
          js2: "23",
          js3: "12"
        },
        {
          region: "旌阳区",
          index: 2,
          js1: "2",
          js2: "111",
          js3: "1234"
        },
        {
          region: "旌阳区",
          index: 3,
          js1: "3",
          js2: "34445",
          js3: "5"
        },
        {
          region: "旌阳区",
          index: 4,
          js1: "21312",
          js2: "224353",
          js3: "5435"
        },
        {
          region: "罗江区",
          index: 1,
          js1: "11",
          js2: "23",
          js3: "12"
        },
        {
          region: "广汉市",
          index: 1,
          js1: "1we w1",
          js2: "23",
          js3: "12"
        },
        {
          region: "中江县",
          index: 1,
          js1: "7",
          js2: "2773",
          js3: "12321"
        }
      ]
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    // 被整理的数组中相同region的元素需放在一块，否则还要再整理数据（暂未处理）
    integratedData(data) {
      let that = this;
      // 获取所有的不同年龄值
      let arrId = [];
      data.forEach(i => {
        !arrId.includes(i.region) ? arrId.push(i.region) : arrId;
      });
      // 提前为每个年龄值设置跨行数为0
      let arrObj = [];
      arrId.forEach(j => {
        arrObj.push({
          id: j,
          num: 0
        });
      });
      // 计算每个年龄的可跨行数
      data.forEach(k => {
        arrObj.forEach(l => {
          k.region === l.id ? l.num++ : l.num;
        });
      });
      data.forEach(m => {
        arrObj.forEach((n, index) => {
          if (m.region === n.id) {
            if (arrId.includes(m.region)) {
              m.mergeCol = n.num;
              arrId.splice(arrId.indexOf(m.region), 1);
            } else {
              m.mergeCol = 0;
            }
          }
        });
      });
      console.log(data);
      return data;
    },
    // 只针对相同region字段合并列，region位于第一列，columnIndex为0
    handleSpan({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return {
          rowspan: row.mergeCol === 0 ? 0 : row.mergeCol,
          colspan: row.mergeCol === 0 ? 0 : 1
        };
      }
    }
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {
    this.data = this.integratedData(this.data);
  },
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {}
};
</script>

<style scoped lang="scss">
.test-table {
}
</style>
