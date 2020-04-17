/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 15:37:03
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-16 15:37:03
 * @Description: file content
 */
import axios from "axios";
/**
 * @class HttpRequest
 * @param {Object} options { BASEURL, TIMEOUT }
 * @description 基于axios二次封装类，提供给不同地址实例使用
 * 目前有三个实例（基础，dataeye，mock），共用一种拦截器
 */
export default class HttpRequest {
  constructor({ BASEURL, TIMEOUT = 300000 }) {
    this.config = {
      baseURL: BASEURL,
      timeout: TIMEOUT,
      headers: {
        "Cache-Control": "no-cache"
      }
    };
    this.instance = axios.create(this.config);
    // 安装拦截器
    this.interceptors();
    return this.instance;
  }
  // 拦截器
  interceptors(instance = this.instance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // TODO: 未来请求可能需要加token
        // if (store.getters.token) {
        // 请求头携带token
        //   config.headers["XZ-Token"] = getToken();
        // }
        return config;
      },
      error => {
        // 请求失败
        Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        const { status } = response;
        if (status === 200) {
          const { data } = response;
          const { code, message } = data;
          // TODO
          // 后端约定状态码
          // 服务器不发异常，需要手动判断捕获
          if (code !== 1000) {
            if (code == undefined) {
              return Promise.resolve(data);
            } else {
              return Promise.reject(message);
            }
          }
          return Promise.resolve(data);
        } else {
          // TODO: status不为200情况
          return Promise.reject(status);
        }
      },
      error => {
        // axios捕获服务器异常
        return Promise.reject(error.message);
      }
    );
  }
  getInstance() {
    return this.instance;
  }
  static get(url) {
    return axios.get(url);
  }
}
