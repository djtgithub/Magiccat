<template>
  <div id="app">
    <!-- <Header ></Header> -->
    <!-- <transition :name="transitionName" mode="in-out">  -->
        <router-view class="child-view"/>  
    <!-- </transition> -->
    <Yindao v-if="this.$store.state.app.loading==='true'"></Yindao>
  </div>
</template>

<script>
  import Header from '@/components/common/header';
  import Yindao from '@/pages/yindao/yindao';
export default {
  name: 'App',
  data(){
    return {
       yindao:this.$store.state.app.loading,
       transitionName: 'slide-left',  // 默认动态路由变化为slide-right
       // Header
    }
   
  },
  components:{
       // Header,
      },
      methods:{
        
      },mounted(){
        // this.yindao=this.$store.state.app.loading;
        // console.log(this.$store.state.app.loading)
      },watch: {
　  }

}
</script>

<style>
@import 'assets/icon/iconfont.css';
.icon {
   width: 0.2rem; height: 0.1rem;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
*{
  margin: 0;padding: 0;
  font-size: 0.2rem;
}
a{
  text-decoration: none;
}
ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   -webkit-overflow-scrolling: touch;
}


.child-view{
　　width: 100%; 
　　height: 100%; 　　
    transition: all .5s cubic-bezier(.55,0,.1,1); 
}

/*路由切换动画*/
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 1000ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
   transition: 0.5s linear;
}
.slide-right-leave-active {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
  transition:all 0.5s;
  z-index: 9999;
}
.slide-left-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
   transition:all 0.5s;
}
.slide-left-leave-active {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
  transition:all 0.5s ;
  z-index: 9999;
}


</style>
