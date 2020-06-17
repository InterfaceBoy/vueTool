module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false
    }],
    // 新增一些重要rules
    // 要求使用 let 或 const 而不是 var
    "no-var": 2,
    // 注释前空格
    "spaced-comment": ["error", "always"],
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 要求或禁止 var 声明中的初始化(初值)
    "init-declarations": 0,
    // 禁用 eval()
    "no-eval": 2,
    // 要求 for-in 循环中有一个 if 语句
    "guard-for-in": 2,
    // 禁止重复声明变量
    "no-redeclare": 2,
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
