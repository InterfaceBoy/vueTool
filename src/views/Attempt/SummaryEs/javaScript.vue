<!--
 * @Author: 何元鹏
 * @Date: 2019-09-04 15:16:47
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-03-16 09:54:23
 * @Description: file content
 -->
<template>
  <div class="javaScript">
    <h1>javaScript</h1>
    <ul>
      <li @click="testFunction">1、判断JavaScript数据类型</li>
      <li @click="testImplicit">2、隐式类型转换以及转换原则</li>
      <li @click="testCall">3、call函数使用</li>
      <li>
        4、随机抽奖(在50名观众中抽取5名幸运者)
        <Button type="primary" shape="circle" @click="logoGo">GO</Button>
        <div v-for="(item,index) in prizeWinner" :key="index">
          <span>{{item}}</span>
        </div>
      </li>
      <li>
        5、去掉字符串中间的空格
        <Button type="primary" shape="circle" @click="handleBlankSpace">GO</Button>
        <div>{{blankSpace}}</div>
      </li>
      <li>
        6、去除字符串中最后一个指定的字符
        <Button type="primary" shape="circle" @click="handleLastSpace">GO</Button>
        <div>{{lastSpace}}</div>
      </li>
      <button @click="ces">11111</button>
      <button @click="ces1">我在做题</button>
    </ul>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      // 获奖者
      prizeWinner: [],
      // 带空格字符串
      blankSpace: "    带    空 格字    符   串   ",
      // 问句字符串
      lastSpace: "是帅小伙吗？"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    testFunction() {
      //   判断
      console.log(
        typeof 1, // number
        typeof "1", // string
        typeof true, // boolean
        typeof undefined, // undefined
        typeof null //  object
      );
      let obj = {};
      obj instanceof Object; // true

      let arr = [];
      arr instanceof Array; // true

      let now = new Date();
      now instanceof Date; // true

      let func = function() {};
      func instanceof Function; // true

      let str = "string";
      let PDstr = str instanceof String; // false
      console.log(PDstr);

      let num1 = 1;
      let num2 = new Number(1);
      let numB = Object.prototype.toString.call(num1) == "[object Number]"; // true
      Object.prototype.toString.call(num2) == "[object Number]"; // true
      console.log(numB);
      let att = [];
      Object.prototype.toString.call(att) == "[object Array]"; // true

      let attf = function() {};
      let attfFn = Object.prototype.toString.call(attf) == "[object Function]"; // true
      console.log(attfFn);

      function A() {}
      let a = new A();
      Object.prototype.toString.call(a) == "[object Object]"; // true

      console.log("constructor", [].constructor === Array);
      console.log({}.constructor === Object);
      console.log("string".constructor === String);
      console.log((123).constructor === Number);
      console.log(true.constructor === Boolean);
    },
    testImplicit() {
      let test;
      test = null;
      if (!test) {
        console.log("非空字符串会转换成true，空字符串会转换成false", !test);
      }
      test = "";
      if (!test) {
        console.log("''和null都是空字符串", !test);
      }
      test = 0;
      if (!test) {
        console.log("非0会转换成true，0会转换成false", !test);
      }
      test = {};
      if (test) {
        console.log("任何对象都会转成true", !test);
      }
    },
    testCall() {
      const sum = function sum(a, b) {
        return a + b;
      };

      const sumByCall = function(a, b) {
        return sum.call(this, a, b);
      };

      const sumByApply = function(a, b) {
        return sum.apply(this, [a, b]);
      };

      const sumByApplyArguments = function(a, b) {
        console.log(a, b);
        return sum.apply(this, arguments);
      };
      console.log("sum 求和", sum(2, 7));
      console.log("sumByCall 求和", sumByCall(2, 7));
      console.log("sumByApply 求和", sumByApply(2, 7));
      console.log("sumByApplyArguments 求和", sumByApplyArguments(2, 7));
    },
    logoGo() {
      function buildArray(arr, length, min, max) {
        let num = Math.max(min, Math.ceil(Math.random() * max));
        if (!arr.includes(num)) {
          arr.push(num);
        }
        return arr.length === length ? arr : buildArray(arr, length, min, max);
      }
      let result = buildArray([], 5, 0, 50);
      console.table(result);
      this.prizeWinner = result;
    },
    handleBlankSpace() {
      function trim(str) {
        let reg = /\s+/g,
          trimStr;
        if (typeof str === "string") {
          trimStr = str.replace(reg, "");
        }
        return trimStr;
      }
      this.blankSpace = trim(this.blankSpace);
    },
    handleLastSpace() {
      let reg = new RegExp(`${"吗"}(?=([^${"吗"}]*)$)`);
      this.lastSpace = this.lastSpace.replace(reg, "");
      return this.lastSpace;
    },
    ces() {
      let a = 1,
        b = 2,
        c = 6;
      if (a === 1 && b === 2 && c !== 3) {
        console.log("c=3");
      } else if (a !== 1 && b === 2 && c === 3) {
        console.log("a=1");
      } else if (a === 1 && b !== 2 && c === 3) {
        console.log("b=2");
      }

      const shuzhi =
        (a === 1 && b === 2 && c !== 3 && "111") ||
        (a !== 1 && b === 2 && c === 3 && "222") ||
        (a === 1 && b !== 2 && c === 3 && "333");
      console.log(shuzhi);
    },
    ces1() {
      let arrayCes = [
        { id: 1, caption: "颜色", types: ["黑", "灰"] },
        { id: 2, caption: "材质", types: ["猪皮"] },
        { id: 3, caption: "大小", types: ["23", "34"] }
      ];
      let a = [];
      const result = arrayCes.reduce((accumulator, item, index) => {
        console.log(accumulator, item, index);
        let s;
        for (let i = 0; item.types.length > i; i++) {
          s = {
            // ...accumulator,
            [item.id]: item.types[i]
          };
          a.push(s);
        }
        return a;
      }, {});

      console.log(result);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.javaScript {
  padding: 5rem 2rem 0;
  ul {
    li {
      list-style-type: none;
      padding: 1rem 0;
    }
  }
}
</style>
