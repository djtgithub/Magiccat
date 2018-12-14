<template lang="html">
  <div>
    <div class="home_header">
      <div class="home_header_l">
        <i class="iconfont iconmap">&#xe60f;</i>
        <span class="maptxt">北京</span>
        <i class="iconfont xiangxiajiantou">&#xe673;</i>
      </div>
      <div class="home_header_r">
        <div class="page-search">
          <div class="mint-searchbar">
            <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input type="search" placeholder="搜索" class="mint-searchbar-core"></div>
            <a class="mint-searchbar-cancel" style="display: none;">取消</a>
          </div>
        </div>
      </div>
    </div>
    <div class="home_swiper">
      <mt-swipe :auto="2000">
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
    <div class="jishi_tit">
      集市广场
    </div>
    <div class="select">
       <ul>
         <li class="active">稀有度</li>
         <li>价格</li>
         <li>时间</li>
         <li class="bdl">筛选<i class="iconfont">&#xe611;</i></li>
       </ul>
    </div>
    <div class="jishi_cont">
      <ul>
        <li>
          1111
        </li>
        <li>
          2222
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}

</script>
<style>
@import '../../assets/icon/iconfont.css';

* {
  margin: 0;
  padding: 0;
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

.home_header_r {
  float: right;
  width: 77.5%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.page-search {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0.24rem;
  width: 89%;
}

.mint-searchbar-inner {
  border-radius: 1rem;
  background: #f6f6f6 !important;
  height: 0.5rem;
}

.mint-searchbar {
  padding: 0;
  transform: translate(-50% -50%);
  background: #fff !important;
}

.mint-searchbar-core {
  text-indent: 0.1rem;
  background: #f6f6f6 !important;
}

.mint-swipe-item img {
  display: block;
  width: 100%;
  height: 100%;
}

.jishi_tit{
  height: 0.43rem;
  line-height: 0.43rem;
  color: #303030;
  font-size: 0.36rem;
  text-align: left;
  text-indent: 0.21rem;
  margin-top: 0.3rem;

}

.select{
  height: 0.78rem;
  /* background: red; */
  border-bottom: 1px solid #f8f8f8;
  padding: 0 0.21rem;
}
.select ul{
 display: flex;
}
 ul li{
  list-style: none;
 }
.select ul li{
  flex: 1;
  font-size: 0.27rem;
  line-height: 0.78rem;
  text-align: center;
  position: relative;
}
.select ul li.bdl:after{
  content: '';
  width: 1px;
  height: 0.16rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  background: #ccc;
}
.select ul li.active:after{
  content: '';
  width: 0.47rem;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background: #e09b10;

}
 .jishi_cont{
  padding:0 0.21rem;
 }
 .jishi_cont ul li{
    box-sizing: border-box;
    height: 1.9rem;
    border-bottom: 1px solid #ccc;
    display: flex;
 }
 
</style>
