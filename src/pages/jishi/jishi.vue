<template lang="html">
  <div style="background: #fff;" ref="wrapper" class="main-body" :style="{ height: (wrapperHeight-50) + 'px' }">
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
        <mt-swipe-item v-for="item in Carousel">
          <img :src="item.imgUrl"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="jishi_tit">
      集市广场
    </div>
    <div class="select">
      <ul>
        <li :class="{active:isActive==0}" @click="changClass(isActive=0,0)">稀有度</li>
        <li :class="{active:isActive==1}" @click="changClass(isActive=1,1)">价格</li>
        <li :class="{active:isActive==2}" @click="changClass(isActive=2,2)">时间</li>
        <li class="bdl">筛选<i class="iconfont">&#xe611;</i></li>
      </ul>
    </div>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
      <div class="jishi_cont">
        <ul>
          <li v-for="item in Content">
            <div class="col l"><img :src="item.imgUrl" /> </div>
              <div class="col r">
                <div class="bigtit" >{{item.name}}<span v-text="item.attributes"></span></div>
                <div class="numbering" v-text="item.Numbering">19840630</div>
                <div class="price" >{{item.money}}猫币</div>
                <div class="label" >
                  <span v-for="lable in item.label">{{lable}}</span>
                </div>
              </div>
          </li>
        </ul>
      </div>
    </mt-loadmore>
  </div>
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
      Content:[],
      num:3
    }
  },
  methods: {
    changClass: function(isActive, str) {
      console.log('切换数据');
      this.loadjishi(str);
      // isActive=str
    },
    loadTop() {
      this.loadFrist();
    },
    // 上拉加载
    loadBottom() {
      this.loadMore();
    },
    // 下来刷新加载
    loadFrist() {
      this.loadjishi(2);
      this.allLoaded = false;
      // window.location.reload()

      // setTimeout(() => {
      //   let lastValue = this.datas[this.datas.length - 1];
      //   if (lastValue < 40) {
      //     for (let i = 1; i <= 10; i++) {
      //       this.datas.push(lastValue + i);
      //     }
      //   } else {
      //     this.allLoaded = true;
      //   }
      //   this.courrentPage = 0;
      //   this.allLoaded = false; // 可以进行上拉
      //   // this.datas = response.data.message;
      //   this.$refs.loadmore.onTopLoaded();
      // }, 1500);


    },
    // 加载更多
    loadMore() {
      console.log('加载更多');
      // this.num=this.num++;
       console.log(this.num++)
       if(this.num++>=5){
           this.allLoaded = true; // 若数据已全部获取完毕
       }
       this.$refs.loadmore.onBottomLoaded();
      this.loadjishi(this.num++);
      // this.Content=this.Content+this.Content;
      // this.$axios
      //   .get("goodslist.json")
      //   .then(response => {
      //     // concat数组的追加
      //     this.datas = this.datas.concat(response.data.message);
      //     if (this.courrentPage > 2) {
      //       this.allLoaded = true; // 若数据已全部获取完毕
      //     }
      //     this.courrentPage++;
      //     this.$refs.loadmore.onBottomLoaded();
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     alert("网络错误，不能访问");
      //   });
      // setTimeout(() => {
      //   let lastValue = this.datas[this.datas.length - 1];
      //   if (lastValue < 40) {
      //     this.allLoaded = true;
      //     for (let i = 1; i <= 10; i++) {
      //       this.datas.push(lastValue + i);
      //     }
      //   } else {
      //     this.allLoaded = true;
      //   }

      //   this.$refs.loadmore.onTopLoaded();
      // }, 1500);
    },
    //获取集市广场内容
    loadjishi(num){
      console.log(num)
       var that = this;
        fetch({
      url: 'jishi_content?filter={"where":{},"skip":0,"limit":'+num+'}',
      method: 'get'
    }).then(function(res) {
       console.log(res.data.length)
      if (res.status == 200 && res.statusText == 'OK') {
        that.$refs.loadmore.onTopLoaded();
            that.Content=res.data;
      }
    }).catch(function(rep) {
      that.$toast((rep.response.data).error.message);
    });
    }

  },
  created() {
    this.loadFrist();
    //获取轮播图
    var that = this;
     fetch({
      url: 'Carousel_map',
      method: 'get'
    }).then(function(res) {
      if (res.status == 200 && res.statusText == 'OK') {
        that.Carousel = res.data;
      }
    }).catch(function(rep) {
      that.$toast((rep.response.data).error.message);
    });
   //获取集市广场内容
    this.loadjishi(this.num);

  },
  mounted() {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  }
}

</script>
<style>
@import '../../assets/icon/iconfont.css';

.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
}

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


</style>
