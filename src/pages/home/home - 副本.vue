<template lang="html">
  <div>
    <div class="home_header">
     <div class="home_header_l"> 
      <i class="iconfont iconmap">&#xe60f;</i>
      <span class="maptxt">北京</span>
      <i class="iconfont xiangxiajiantou">&#xe673;</i>
    </div>
     <div  class="home_header_r">
        <div class="page-search">
          <div class="mint-searchbar">
            <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input type="search" placeholder="搜索" class="mint-searchbar-core"></div>
            <a class="mint-searchbar-cancel" style="display: none;">取消</a>
          </div>
      </div>
     </div>
    </div>
    <div class="home_swiper">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <img src="../../assets/img/img1.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="../../assets/img/img2.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>   
           <img src="../../assets/img/img3.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
 
    我是首页
   
  </div>
</template>
<script>
export default {
 
}

</script>
<style>
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
