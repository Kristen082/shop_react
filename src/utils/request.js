import axios from 'axios'


let request = axios.create({
    timeout:1000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let arr=['/buyer/user/captcha','/buyer/user/login','/buyer/user/register']
    return arr.includes(config.url)?config:{
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    };
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default {
    get(url,data){
        return request.get(url,{params:data})
    },
    post(url,data){
        return request.post(url,data)
    }
}