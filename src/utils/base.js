/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 13:59:26
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-03-23 21:38:59
 * @Description: file content
 */

/**
 * 递归tree数组，按照liquor-tree组件特定的格式返回树数据
 * @param {Array} treeData
 * @param {String} text字段的别名
 * @param {String} childrenStr字段的别名
 * @returns {Array} data
 */
export const convertTreeArray = treeData => {
  function convertTree(data) {
    const result = [];
    // 遍历 tree
    data.forEach(item => {
      const data = { value: item.id, text: item.attrs.attrs.qymc.name };
      const text = item.attrs.attrs.qymc.name;
      const isBatch = item.count > 0 ? true : false;
      let children = [];
      // 如果有子节点，递归
      result.push({
        text,
        isBatch: isBatch,
        children: children,
        checkbox: true,
        filter: {
          plainList: true
        },
        data,
        state: {
          expanded: false
        }
      });
    });
    console.log(result);
    return result;
  }
  return convertTree(treeData);
};

let cnum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
export function numberToChineseCharacter(number) {
  let s = "";
  number = "" + number; // 数字转为字符串
  for (let i = 0; i < number.length; i++) {
    s += cnum[parseInt(number.charAt(i))];
  }
  return s;
}
