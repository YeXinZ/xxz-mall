import axios from "axios";
import { Message } from "element-ui";
import store from "../store";
import { getToken } from "./auth"; //获取到token

//创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

let token = getToken(); //获取token

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (token) {
      //每次请求都需要带上token去请求接口
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    switch (error.response.status) {
      case 405:
        Message.error(error.response.info);
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      service
        .get(url, {
          params: params,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },

  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post(url, params) {
    return new Promise((resolve, reject) => {
      service
        .post(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
};
