<template lang="html">
  <div>
    <!-- <transition :name="transitionName" mode="in-out">  -->
      <keep-alive>
      <router-view class="child-view"   v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    <!-- </transition  >  -->

    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/common/tabbar';
export default {
  data(){
    return {
       transitionName: 'slide-right'  
    }
  },  watch: {

　$route(to, from) {
  // console.log(to.meta.index)
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){

        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
　 },
  components: {
    Tabbar
  }
}

</script>
<style scoped>
@import '../../assets/icon/iconfont.css';



.home_header {
  height: 0.78rem;
  overflow: hidden;
}

.home_swiper {
  height: 200px;
}

.mint-swipe-item {
  background: red;
  line-height: 14;
}

.mint-swipe-indicators .is-active {
  background: blue !important;
  opacity: 1;
}

.home_header_l {
  float: left;
  width: 22.5%;
  height: 100%;
  position: relative;
}

.iconmap {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.24rem;
}

.maptxt {
  font-size: 0.2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.6rem;
}

.xiangxiajiantou {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.04rem;
}


.mint-swipe-item img {
  display: block;
  width: 100%;
  height: 100%;
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
  transition: all 100ms;
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
