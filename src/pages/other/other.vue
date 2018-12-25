<template lang="html">
  <div>
    <router-view></router-view>	
其他页
  </div>
</template>
<script>
export default {
 components:{
      }
}

</script>
<style scoped>
@import '../../assets/icon/iconfont.css';
*{
  margin: 0;padding: 0;
}
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
.mint-swipe-indicators .is-active{
  background: blue !important;
  opacity: 1;
}

.home_header_l{
 float: left;
 width: 22.5%;
 height: 100%;
 position: relative;
}
.iconmap{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.24rem;
}
.maptxt{
    font-size: 0.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.6rem;
}
.xiangxiajiantou{
   position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.04rem;
}
.home_header_r{
 float: right;
 width: 77.5%;
 height: 100%;
 overflow: hidden;
 position: relative;
}
.page-search{
      position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0.24rem;
    width: 89%;
}
.mint-searchbar-inner{
border-radius: 1rem;
  background: #f6f6f6 !important;
  height: 0.5rem;
  }
.mint-searchbar{
  padding:0;
  transform:translate(-50% -50%);
  background: #fff !important;
}
.mint-searchbar-core{
  text-indent: 0.1rem;
   background: #f6f6f6 !important;
}

.mint-swipe-item img{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
