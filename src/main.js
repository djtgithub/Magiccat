// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/rem.js'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store'
import Cookies from 'js-cookie';
import FastClick from 'fastclick';
FastClick.attach(document.body);
Vue.prototype.Cookies = Cookies
Vue.use(Mint);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  methods:{
    getPath(){
    console.log(1111)
   }
  },
  watch: {

　$route(to, from) {
	console.log(to.meta.index)
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){

        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }

      
    },
    '$route':function(to){
      console.log(1111)
      // if(to.meta.header==true){
      //   // alert(1)
      //   this.$store.commit('SET_HEADER',true);
      //   this.Cookies.set('SET_HEADER',true);
      // }else{
      //   this.$store.commit('SET_HEADER',false);
      //   this.Cookies.set('SET_HEADER',false);
      // }
    }
　 },
  template: '<App/>'
})
