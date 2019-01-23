import axios from 'axios';
import store from '../store';
import Vue from 'vue';
import qs from 'qs';
import Cookies from 'js-cookie';
import { Indicator } from 'mint-ui';

// Vue.$Indicator=Vue.prototype.Indicator = Indicator;

axios.defaults.timeout = 5000; //超时终止请求
// axios.defaults.baseURL = 'https://d.apicloud.com/mcm/api/'; //配置请求地址
// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'http://192.168.109.6:3001/'
axios.defaults.withCredentials = true
// requese 拦截器
axios.interceptors.request.use(config => {
  
  // var now = Date.now();
  // var appkey = sha1("A6082069061619" + 'UZ' + "04C51A3A-DA51-356A-9B37-C10E9036FBDE" + 'UZ' + now) + '.' + now;
  // config.headers = {
  //   "X-APICloud-AppId": "A6082069061619",
  //   "X-APICloud-AppKey": appkey
  // };

  config.data = config.data;
  //打开loading
  Indicator.open({
    text: 'loading....',
    spinnerType: 'fading-circle'
  });

  return config;

}, error => {
	return Promise.reject(error);
  console.log(error);
})



//response拦截器 
axios.interceptors.response.use(response => {

  //关闭loading
    Indicator.close();
  return response;

}, error => {
   Indicator.close();

Indicator.open('网络不佳，稍后再试...');
setTimeout(function(){
  Indicator.close();
},500)

    console.log(error)

  return Promise.reject(error);

})

export default axios;
