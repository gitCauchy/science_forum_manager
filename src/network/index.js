import axios from "axios";

export function request(config, success, failure) {
  // 创建 axios 实例
  const instance = axios.create({
    baseURL: '',
    timeout: '',
    headers: {},
  });
  instance.interceptors.response.use(response => {
    return response.data;
  }, error => {
    console.log(error);
  })
  return instance(config);
}
