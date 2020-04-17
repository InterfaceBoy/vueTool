/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 15:59:34
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-16 15:59:34
 * @Description: file content
 */
export default fn => {
  const cacheMap = new Map();
  return () => {
    let hit = cacheMap.get(fn);
    if (!hit) {
      const data = fn();
      cacheMap.set(fn, data);
      return data;
    }
    return hit;
  };
};
