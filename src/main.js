// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/rem.js'
import Mint from 'mint-ui';
import { toast } from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store'
import Cookies from 'js-cookie';
import FastClick from 'fastclick';
import $ from 'jquery';
FastClick.attach(document.body);
Vue.prototype.Cookies = Cookies;
Vue.$toast =Vue.prototype.$toast = toast;
Vue.use(Mint);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//图片懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//无限加载数据
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

Vue.config.productionTip = false;

//引入公共加密js
var sha1 =require('./assets/js/sha1.js')
Vue.prototype.sha1 = sha1;



import './assets/css/common.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  methods:{
    getPath(){
   }




   
  },
  watch: {

　$route(to, from) {
	console.log(to.meta.index)
      //如果to索引大于
      //
      //
      //
      //
      //rom索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){

        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }

      
    },
    '$route':function(to){
			
			if(this.$route.query.stuts=='true' ||this.$route.query.stuts==true ){
				this.$route.query.stuts=true;
			}else{
				this.$route.query.stuts=false;
			}
			
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
