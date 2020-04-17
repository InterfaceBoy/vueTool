/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 15:37:38
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-16 15:59:20
 * @Description: file content
 */
import axios from "axios";

import cachedFn from "./cachedFn";

export default cachedFn(async () => {
  try {
    const { data } = await axios.get("static/appConfig.json");
    const env = process.env.NODE_ENV;
    window.__VERSION__ = data.VERSION;
    return {
      config: data[env]
    };
  } catch (error) {
    console.log(error);
    return Promise.reject("无法读取配置文件的信息，请检测是否配置正确！");
  }
});
