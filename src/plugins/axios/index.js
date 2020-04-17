/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 15:37:03
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-16 15:37:03
 * @Description: file content
 */
import getConfig from "@/utils/getConfig";
import HttpRequest from "./httpRequest";
// axios.defaults.withCredentials = true;
import notice from "@/utils/notice";

import axios from "axios";

const instanceMap = {
  // 系统基础服务
  base: null
};

const getInstance = async (instanceName = "base") => {
  const { config } = await getConfig();
  const { API, API_FILE_DIR } = config;
  const BASEURL = API + API_FILE_DIR || "";
  // 避免重复实例化
  !instanceMap.base &&
    (instanceMap.base = new HttpRequest({
      BASEURL
    }));
  return instanceMap[instanceName];
};

/**
 * get方法
 * @param {String} url [请求的url地址]
 * @param {String} serviceName [请求服务名和服务描述(和swagger对应)]
 * @param {Object} params [请求时携带的参数] (可选)
 */
const get = (
  axiosInstance,
  url,
  serviceName = "未知服务",
  params = {},
  showError = true
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method: "get",
      params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        showError && notice.error(error);
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};

/**
 * post方法
 * @param {String} url [请求的url地址]
 * @param {String} serviceName [请求服务名和服务描述(和swagger对应)]
 * @param {Object} params [请求时携带的参数] (可选)
 * @param {Object} headers [请求时的请求头信息] （可选）
 */
const post = (
  axiosInstance,
  url,
  serviceName = "未知服务",
  params = {},
  headers = {},
  showError = true
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method: "post",
      // data: qs.stringify(params)
      data: params,
      headers: headers
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        showError && notice.error(error);
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};

/**
 * put方法
 * @param {string} url [请求的url地址]
 * @param {string} serviceName [请求服务名与服务描述(与swagger一致)]
 * @param {Object} params [请求是携带的参数(可选)]
 */
const put = (
  axiosInstance,
  url,
  serviceName = "未知服务",
  params = {},
  showError = true
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method: "put",
      data: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        showError && notice.error(error);
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};

/**
 * delete方法
 * @param {string} url [请求url]
 * @param {string} serviceName [请求服务名和服务描述(与swagger一致)]
 * @param {Object} params [请求携带参数(可选)]
 */

const Delete = (
  axiosInstance,
  url,
  serviceName = "未知服务",
  params = {},
  showError = true
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method: "delete",
      data: params,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        showError && notice.error(error);
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};
// 基础get请求
export const GET = async (url, serviceName, params, showError) => {
  const baseService = await getInstance();
  return get(baseService, url, serviceName, params, showError);
};

// 单点登录get请求（为了区分其他基础的get请求）
export const LOGINGET = async (url, serviceName, params) => {
  const baseService = await getInstance("authentication");
  return get(baseService, url, serviceName, params);
};

// 基础post请求
export const POST = async (url, serviceName, params, headers, showError) => {
  const baseService = await getInstance();
  return post(baseService, url, serviceName, params, headers, showError);
};

// 基础put请求
export const PUT = async (url, serviceName, params) => {
  const baseService = await getInstance();
  return put(baseService, url, serviceName, params);
};

// 基础delete请求
export const DELETE = async (url, serviceName, params) => {
  const baseService = await getInstance();
  return Delete(baseService, url, serviceName, params);
};

export const JGET = async (url, serviceName) => {
  try {
    const res = await HttpRequest.get(url);
    return res.data;
  } catch (error) {
    throw new Error(`请求---${serviceName}---失败`);
  }
};

const requestForDownload = async (
  method,
  url,
  serviceName,
  params,
  headers
) => {
  const { config } = await getConfig();
  const { API, API_FILE_DIR } = config;
  const BASEURL = API + API_FILE_DIR || "";
  return new Promise((resolve, reject) => {
    const dataKey = method === "get" ? "params" : "data";
    axios({
      baseURL: BASEURL,
      url,
      method: method,
      [dataKey]: params,
      headers: headers,
      responseType: "blob"
    })
      .then(res => {
        const { headers, data } = res;
        const type = data.type;
        if (type.includes("application/json")) {
          // 如果是json类型，则说明下载出错，需要提取错误信息
          const fileReader = new FileReader();
          fileReader.onload = e => {
            const { message } = JSON.parse(e.target.result);
            reject(message);
            notice.error(message);
          };
          fileReader.readAsText(data);
        } else {
          const reg = /filename=(\S.*?\.\w+)$/;
          const fileInfo = headers["content-disposition"];
          const filename = fileInfo && fileInfo.match(reg);
          resolve({
            blob: data,
            name: filename ? decodeURI(filename[1]) : "DistTemplate"
          });
        }
      })
      .catch(error => {
        reject(error);
        throw new Error(`请求---${serviceName}---接口失败`);
      });
  });
};

// 针对于下载的post请求
export const DOWNLOAD_POST = async (url, serviceName, params, headers) => {
  return requestForDownload("post", url, serviceName, params, headers);
};
// 针对于下载文件接口的GET请求
export const DOWNLOAD_GET = async (url, serviceName, params, headers) => {
  return requestForDownload("get", url, serviceName, params, headers);
};
