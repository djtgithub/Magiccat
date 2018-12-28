<template lang="html">
  <keep-alive>
    <div style="background: #fff;" ref="wrapper" class="main-body newsList" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
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
      <div ref="header" :class="{fixed:isclass}">
        <div class="jishi_tit">
          集市广场
        </div>
        <div class="select">
          <ul>
            <li :class="{active:isActive==0}" @click="changClass(isActive=0,0)">稀有度</li>
            <li :class="{active:isActive==1}" @click="changClass(isActive=1,4)">价格</li>
            <li :class="{active:isActive==2}" @click="changClass(isActive=2,4)">时间</li>
            <li class="bdl">筛选<i class="iconfont">&#xe611;</i></li>
          </ul>
        </div>
      </div>
      <mt-loadmore :top-method="loadTop" ref="loadmore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div class="jishi_cont">
          <ul>
            <li v-for="item in Content">
              <div class="col l"><img :src="item.imgUrl" /> </div>
                <div class="col r">
                  <div class="bigtit">{{item.name}}<span v-text="item.attributes"></span></div>
                  <div class="numbering" v-text="item.Numbering">19840630</div>
                  <div class="price">{{item.money}}猫币</div>
                  <div class="label">
                    <span v-for="lable in item.label">{{lable}}</span>
                  </div>
                </div>
            </li>
          </ul>
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
      isclass: false

    }
  },
  methods: {
    changClass: function(isActive, str) {
      this.num = 3;
      this.flag = false;
      this.loadjishi(str);
    },
    loadTop() {
      this.loadFrist();
    },
    loadFrist() {
      this.num = 4;
      this.loadjishi(this.num);
      this.allLoaded = false;
    },
    // 加载更多
    loadMore() {
      this.loading = true;
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
      }
      this.loadjishi(this.num += 1);
    },
    // 上拉加载
    // loadBottom() {
    //   this.loadMore();
    // },
    // // 下来刷新加载
    // loadFrist() {
    //   this.num = 4;
    //   this.loadjishi(this.num);
    //   this.allLoaded = false;
    // },
    // // 加载更多
    // loadMore() {
    //   if (this.num++ >= this.Contentlength) {
    //     this.allLoaded = true; // 若数据已全部获取完毕
    //     this.$toast({
    //       message: '没有更多数据了',
    //       position: 'bottom',
    //       duration: 5000
    //     })
    //   }
    //   this.$refs.loadmore.onBottomLoaded();
    //   this.loadjishi(this.num++);
    // },
    //获取集市广场内容
    loadjishi(num) {
      var that = this;
      fetch({
        url: 'jishi_content?filter={"where":{},"skip":0,"limit":' + num + '}',
        method: 'get'
      }).then(function(res) {
        if (res.status == 200 && res.statusText == 'OK') {
          that.$refs.loadmore.onTopLoaded();
          that.Content = res.data;
        }
      }).catch(function(rep) {
        that.$toast((rep.response.data).error.message);
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
      } else {
        that.isclass = false;
      }

      if (scrollTop + getWindowHeight == documentScrollHeight) {
        that.loadMore();
      }
    }
  },
  created() {
    this.loadFrist();
    //获取轮播图
    var that = this;
    //获取集市广场内容
    this.loadjishi(this.num);
    //统计内容的数据length
    fetch({
      url: 'jishi_content/count',
      method: 'get'
    }).then(function(res) {
      if (res.status == 200 && res.statusText == 'OK') {
        that.Contentlength = res.data.count;
      }
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
<style scoped>
@import '../../assets/icon/iconfont.css';

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
  padding: 0 0.21rem 0.2rem;
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
  /* overflow-y: auto; */
}

.fixed {
  position: fixed;
  z-index: 9;
  border-bottom: 1px solid #ccc;
  width: 100%;
  background: #fff;
  top: 0;
  transition: 1s linear;
  /* 过渡属性 */
  transition-property: width;
  /*all:表示所有属性*/
  /* 过渡属性,必须设置过渡时间才会生效 */
  transition-duration: 1s;
  /* 过渡持续时间 */
  transition-timing-function: ease-out;
  /* 动画变幻速度 ease:减速(默认)  linear:匀速  ease-in:加速 ease-out:减速  ease-in-out:先加速后减速 */
  transition-delay: 1s;
  /* 动画延迟 */
  transition: all 1s ease-in-out 0s;
  /* 常用的简写方式 */

}

</style>
