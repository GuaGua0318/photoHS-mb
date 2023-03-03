import axios from "axios";

//创建一个实例
const instance = axios.create({
  baseURL:'http://localhost:3000'
  // baseURL:'https://www.photohs.top.'
})

//拦截器-请求拦截
instance.interceptors.request.use((config) => {
  let token = localStorage.getItem('token');
  if(token){
    config.headers = {
      'Authorization':`Bearer ${token}`
    }
  }
  return config;
},(err) => {
  return Promise.reject(err);
});

//拦截器-响应拦截
instance.interceptors.response.use((res) => {
  return res;
},(err) => {
  return Promise.reject(err);
  localStorage.removeItem("token");
  localStorage.removeItem("info")
})

export default instance;