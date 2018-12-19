<template lang="html">
  <div style="background: #fff;">
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
    <div class="jishi_tit">
      繁育中心
    </div>
    <div class="select">
      <ul>
        <li :class="{active:isActive==0}"  @click="changClass(isActive=0)">稀有度</li>
        <li :class="{active:isActive==1}"  @click="changClass(isActive=1)">价格</li>
        <li :class="{active:isActive==2}"  @click="changClass(isActive=2)">时间</li>
        <li class="bdl">筛选<i class="iconfont">&#xe611;</i></li>
      </ul>
    </div>
    <div class="jishi_cont">
      <ul>
        <li>
          <div class="col l"><img src="../../assets/img/cat1.jpg" /> </div>
            <div class="col r">
              <div class="bigtit">英短折耳猫 <span>可爱</span></div>
              <div class="numbering">19840630</div>
              <div class="price">2000.00猫币</div>
              <div class="label">
                <span>第二代</span>
                <span>0分钟</span>
                <span>休息中</span>
              </div>
            </div>
        </li>
        <li>
          <div class="col l"><img src="../../assets/img/cat2.jpg" /> </div>
            <div class="col r">
              <div class="bigtit">英短折耳猫 <span>可爱</span></div>
              <div class="numbering">19840630</div>
              <div class="price">2000.00猫币</div>
              <div class="label">
                <span>第二代</span>
                <span>0分钟</span>
                <span>休息中</span>
              </div>
            </div>
        </li>
        <li>
          <div class="col l"><img src="../../assets/img/cat3.jpg" /> </div>
            <div class="col r">
              <div class="bigtit">英短折耳猫 <span>可爱</span></div>
              <div class="numbering">19840630</div>
              <div class="price">2000.00猫币</div>
              <div class="label">
                <span>第二代</span>
                <span>0分钟</span>
                <span>休息中</span>
              </div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isActive:false
    }
  },
  methods:{
    changClass:function(isActive,str){
       console.log('切换数据');
       // isActive=str
    }
  }
}

</script>
<style>
@import '../../assets/icon/iconfont.css';

* {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}

.home_header {
  height: 0.78rem;
  overflow: hidden;
}

.home_swiper {
  height: 200px;
}

.mint-swipe-item {
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

.jishi_tit {
  height: 0.43rem;
  line-height: 0.43rem;
  color: #303030;
  font-size: 0.36rem;
  text-align: left;
  text-indent: 0.21rem;
  margin-top: 0.3rem;

}

.select {
  height: 0.78rem;
  border-bottom: 1px solid #f8f8f8;
  padding: 0 0.21rem;
}

.select ul {
  display: flex;
}

ul li {
  list-style: none;
}

.select ul li {
  flex: 1;
  font-size: 0.27rem;
  line-height: 0.78rem;
  text-align: center;
  position: relative;
}

.select ul li.bdl:after {
  content: '';
  width: 1px;
  height: 0.16rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  background: #ccc;
}

.select ul li.active:after {
  content: '';
  width: 0.47rem;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background: #e09b10;

}

.jishi_cont {
  padding: 0 0.21rem 1rem;
}

.jishi_cont ul li {
  height: 1.9rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 0.2rem 0;
}

.jishi_cont ul li div.col {
  height: 100%;
}

.jishi_cont ul li div.l {
  width: 2.07rem;
  border-radius: 0.05rem;
}

.jishi_cont ul li div.r {
  padding: 0.16rem 0;
  flex: 1;
  text-align: left;
  padding-left: 0.26rem;
}

.jishi_cont ul li div.l img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.05rem;
}

.bigtit {
  font-size: 0.26rem;
  color: #161616;
  margin-bottom: 0.15rem;

}

.bigtit span {
  padding: 0.02rem 0.1rem;
  background: #ffb75a;
  font-size: 0.15rem;
  color: #fff;
  margin-left: 0.1rem;
  position: relative;
}

.bigtit span:after {
  content: '';
  width: 0;
  height: 0;
  border-left: 0.1rem solid transparent;
  border-right: 0.1rem solid transparent;
  border-top: 0.1rem solid #ffb75a;
  position: absolute;
  bottom: -0.1rem;
  left: 50%;
  transform: translateX(-50%);
}

.numbering {
  font-size: 0.19rem;
  color: #5e5e5e;
  margin-bottom: 0.15rem;
}

.price {
  font-size: 0.17rem;
  color: #a6a6a6;
  margin-bottom: 0.15rem;
}

.label {
  font-size: 0.16rem;
  color: #a6a6a6;
}

.label span {
      display: inline-block;
    padding: 0 0.1rem;
    line-height: 0.28rem;
    height: 0.28rem;
    border: 1px solid #ccc;
    margin-right: 0.14rem;
}

</style>
