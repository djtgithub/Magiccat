<template lang="html">
  <keep-alive>
    <div style="background: #fff;" ref="wrapper" class="main-body newsList" infinite-scroll-disabled="loading" infinite-scroll-distance="10" @scroll="handleScroll">
      <div class="home_header" ref="header" :class="{fixed:isclass}">
        <div class="home_header_l" :class="{iswhite:iswhite}">
          <router-link to="/address">
            <i class="iconfont iconmap">&#xe60f;</i>
            <span class="maptxt" v-text="this.store.state.user.address">北京</span>
            <i class="iconfont xiangxiajiantou">&#xe673;</i>
          </router-link>
        </div>
        <div class="home_header_r">
          <div class="page-search">
            <router-link to="/search">
              <div class="mint-searchbar">
                <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input type="search" placeholder="请输入要搜索的内容" class="mint-searchbar-core"></div>
                <a class="mint-searchbar-cancel" style="display: none;">取消</a>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div class="home_swiper">
          <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in Carousel">
              <img :src="item.imgUrl" v-lazy="item.imgUrl" />
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="jishi_tit">
          集市广场
        </div>
        <div class="select">
          <ul>
            <li :class="{active:isActive==0}" @click="changClass(isActive=0,0)">稀有度</li>
            <li :class="{active:isActive==1}" @click="changClass(isActive=1,2)">价格</li>
            <li :class="{active:isActive==2}" @click="changClass(isActive=2,2)">时间</li>
            <li class="bdl">筛选<i class="iconfont">&#xe611;</i></li>
          </ul>
        </div>
        <div class="jishi_cont">
          <ul>
            <li v-for="item in Content" :id="item.gid">
              <router-link :to="{name:'Detail',params:{id:item.gid}}">
                <div class="col l"><img :src="item.imgUrl" /> </div>
                  <div class="col r">
                    <div class="bigtit">{{item.name}}<span v-text="item.attributes"></span></div>
                    <div class="numbering" v-text="item.Numbering">19840630</div>
                    <div class="price">{{item.money}}猫币</div>
                    <div class="label">
                      <span v-for="lable in item.lable">{{lable}}</span>
                    </div>
                  </div>
              </router-link>
            </li>
          </ul>
          <div v-show="flag" class="dixian">我是有底线的</div>
        </div>
      </mt-loadmore>
    </div>
  </keep-alive>
</template>
<script>
import fetch from '../../utils/fetch';
export default {

  data() {
    return {
      isActive: false,
      datas: [],
      //可以进行上拉
      allLoaded: false,
      //是否自动触发上拉函数
      isAutoFill: false,
      wrapperHeight: 0,
      courrentPage: 0,
      Carousel: [],
      Content: [],
      num: 3,
      Contentlength: 0,
      flag: false,
      isclass: false,
      iswhite: false

    }
  },
  methods: {
    changClass: function(isActive, str) {
      // this.allLoaded = false;
      this.num = 2;
      this.flag = false;
      this.Content = '';
      this.loadjishi(str);
    },
    loadTop() {
      this.loadFrist();
      this.flag = false;
    },
    loadFrist() {
      this.num = 4;
      this.loadjishi(this.num);
      this.allLoaded = false;
    },
    // 加载更多
    loadMore() {
      // console.log(this.Contentlength);
      this.loading = true;
      console.log(this.num);
      if (this.num >= this.Contentlength) {
        this.loading = false;
        this.flag = true;
        // 若数据已全部获取完毕
        this.$toast({
          message: '没有更多数据了',
          position: 'bottom',
          duration: 1000
        })
        this.loading = false;
        return false;
      }else{
         this.flag = false;
      }
      this.loadjishi(this.num += 1);
    },
    //获取集市广场内容
    loadjishi(num) {
      var that = this;
      var filter={
        "skip":0,
        "limit": num 
      }
      fetch({
        // url: 'jishi_content?filter={"where":{},"skip":0,"limit":' + num + '}',
        url: 'jishi_content?filter='+JSON.stringify(filter),
        method: 'get'
      }).then(function(res) {
        if (res.data.code == 200 ) {
          that.$refs.loadmore.onTopLoaded();
          that.Content = res.data.data;
          that.Contentlength = res.data.totall;
        }
      }).catch(function(rep) {
        console.log(rep)
        // that.$toast('Network Error');
      });
    },
    handleScroll() {
      var that = this;
      //滚动条在y轴上的滚动距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //文档的总高度
      var documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //浏览器窗口的高度
      var getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (scrollTop > 10) {
        that.isclass = true;
        that.iswhite = true;
      } else {
        that.isclass = false;
        that.iswhite = false;
      }

      if (scrollTop + getWindowHeight == documentScrollHeight) {
        that.loadMore();
      }
    }
  },
  created() {
    // this.loadFrist();
    //获取轮播图
    var that = this;

    fetch({
      url: 'Carousel_map',
      method: 'get'
    }).then(function(res) {
      if (res.data.code==200) {
        that.Carousel = res.data.data;
      }
    }).catch(function(rep) {
      // that.$toast((rep.response.data).error.message);
    });

    //获取集市广场内容
    this.loadjishi(this.num);
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  activated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
<style scoped>
@import '../../assets/icon/iconfont.css';

.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  /* overflow: scroll; */
}

* {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}

.home_header {
  height: 0.78rem;
  overflow: hidden;
  width: 100%;
  background: #fff;
}

.home_swiper {
  height: 3rem;
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

 .home_header_l a{
  color: #666;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 0.5rem;
  color: #666;
}
.maptxt a i.iconfont{
   color: #666;
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
  border-radius: 1rem;
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
  border-radius: 1rem;
}

.mint-searchbar-core {
  text-indent: 0.1rem;
  background: #f6f6f6 !important;
  border-radius: 1rem;
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

.jishi_cont ul li a {
  display: -webkit-box;
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
  bottom: -0.07rem;
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

.newsList {
  max-height: 100vh;
  /* overflow-y: scroll; */
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.dixian {
  margin-top: 0.2rem;
  position: relative;
}

.dixian:after {
  content: '';
  width: 30%;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 50%;
  right: 6%;
  transform: translateY(-50%);
}

.dixian:before {
  content: '';
  width: 30%;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
}

.fixed {
  position: fixed;
  z-index: 9;
  /* border-bottom: 1px solid #ccc; */
  width: 100%;
  background: rgba(0, 0, 0, .7);
  top: 0;
  transition: 2s linear;
  /* 过渡属性 */
  transition-property: width;
  /*all:表示所有属性*/
  /* 过渡属性,必须设置过渡时间才会生效 */
  transition-duration: 2s;
  /* 过渡持续时间 */
  transition-timing-function: ease-out;
  /* 动画变幻速度 ease:减速(默认)  linear:匀速  ease-in:加速 ease-out:减速  ease-in-out:先加速后减速 */
  transition-delay: 2s;
  /* 动画延迟 */
  transition: all 2s ease-in-out 0s;
  /* 常用的简写方式 */

}

.iswhite {
  color: #fff !important;
}
.iswhite a .maptxt{
  color: #fff;
}
.iswhite a{
  color: #fff;
}

</style>
