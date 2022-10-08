import axios from "axios";

export function request(config) {
  // 创建 axios 实例
  const instance = axios.create({
    baseURL: '',
    timeout: '',
    headers: {},
  });

  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    console.log(error);
  })

  instance.interceptors.response.use(response => {
    return response;
  }, error => {
    console.log(error);
  })
}
