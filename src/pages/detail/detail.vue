<template lang="html">
  <div>
    <div data-v-7bcd8dab="">
      <header data-v-7bcd8dab="" class="mint-header" style="font-size: 0.3rem !important;">
        <div class="mint-header-button is-left" @click="goback"><a data-v-7bcd8dab=""><button data-v-7bcd8dab="" class="mint-button mint-button--default mint-button--normal"><span
							 class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text"></label></button></a></div>
        <h1 class="mint-header-title" v-text="Content.name">详情页</h1>
        <div class="mint-header-button is-right"></div>
      </header>
    </div>
    <div class="home_swiper">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in Content.detailCourse">
          <img :src="item" v-lazy="item" />
				</mt-swipe-item>
      </mt-swipe>
    </div>
    <div>
      <p>价格￥:{{Content.money}}</p>
      <p>说明:{{Content.txt}}</p>
      <p>介绍：{{Content.introducion}}</p>
    </div>
    <div  class="col r">
      <div  class="bigtit">英短虎斑猫<span>稀有</span></div>
      <div  class="numbering">1032200234</div>
      <div  class="price">1500猫币</div>
      <div  class="label"><span >第二代</span><span>0分钟</span><span>休息中</span></div>
    </div>
    <div class="tabbar">
      <ul>
        <li><a @click="addcartshopping">加入购物车</a></li>
        <li><a href="">立即购买</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import fetch from '../../utils/fetch';
export default {
  data() {
    return {
      Content: {
        "id": "5c21bbb04e5518d532af1e82",
        "txt": "数据得好好优化一下",
        "imgUrl": "http://doudouc.club/static/Magiccat/images/jishi/cat3.jpg",
        "detailCourse": ["http://doudouc.club/static/Magiccat/images/jishi/cat1.jpg",
          "http://doudouc.club/static/Magiccat/images/jishi/cat1.jpg"
        ],
        "createdAt": "2018-12-25T05:10:08.625Z",
        "updatedAt": "2018-12-26T08:20:18.147Z",
        "gid": null
      }
    }
  },
  created() {
    console.log(this.$route.params.id)
    let id = this.$route.params.id;
    if (id != '' && id != undefined) {
      this.$store.commit('SET_GID', id);
      this.Cookies.set('gid', id);
      this.getDetail(id);
    } else {
      var gid = this.store.state.user.gid;
      this.getDetail(gid);
    }
  },
  methods: {
    goback: function() {
      this.$router.go(-1);
    },
    getDetail: function(id) { //通过商品id获取商品详情
      var that = this;
      var filter = {
        "id": id
      }
      fetch({
        url: 'jishi_detail?filter=' + JSON.stringify(filter),
        method: 'get'
      }).then(function(res) {
        console.log('sdasd' + JSON.stringify(res.data.data))

        if (res.data.code == 200) {
          that.Content = (res.data).data;
          // console.log('32423' + JSON.stringify(that.Content))
        }
      }).catch(function(rep) {
        console.log(rep);
        that.$toast((rep.response.data).error.message);
      });
    },
    addcartshopping: function() { //加入购物车
      const that = this;

      var filter = {
        "where": {
          "gid": "5c21f4b70cf9f25c7ee90539"
        }
      }
      //加入购物车
      return fetch({
        url: 'shopping_cart?filter=' + encodeURIComponent(JSON.stringify(filter)),
        method: 'get',
      }).then(function(res) {

        if (res.status == 200 && res.statusText == 'OK') {

          if (res.data.length != 0) {
            //有数据直接修改
            that.changeaddcart_shoping();
          } else {
            //没有数据去添加
            that.changeadd();
          }
          // console.log(res.data);
          // that.$toast({
          //    message: '查找成功',
          //    position: 'bottom',
          //    duration: 5000
          //  });
          // that.$toast({
          //   message: '添加成功',
          //   position: 'bottom',
          //   duration: 5000
          // });
          //注册成功后 跳转到登录页面
        } else {

          that.$toast('添加失败');

        }

      }).catch(function(rep) {
        that.$toast((rep.response.data).error.message);
      });
    },
    changeaddcart_shoping: function() {
      const that = this;
      const data = {
        "count": 30,
        "_method": "put"
      }
      return fetch({
        url: 'shopping_cart/5c21f4b70cf9f25c7ee90539',
        method: 'post',
        data: data
      }).then(function(res) {
        console.log(res.data);

      }).catch(function(rep) {
        that.$toast((rep.response.data).error.message);
      });
    },
    changeadd: function() {

    }
  }
}

</script>
<style scoped>
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

.mint-header {
  background: #fff;
  color: #ccc;
  height: 0.9rem;
}

.mint-header-button.is-left {
  text-indent: 0.3rem;
}

.mint-header-button.is-left i {
  font-size: 0.3rem;
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

.tabbar {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: red;
}

.tabbar ul {
  display: flex;
  height: 100%;
}

.tabbar ul li {
  flex: 1;
  height: 100%;
}

.tabbar ul li a {
  height: 100%;
  align-items: center;
  display: inline-flex;
  color: #fff;
  font-size: 0.3rem;
}

.tabbar ul li:nth-child(1) {
  background-image: linear-gradient(to right, #FFC500, #FF9402)
}

.tabbar ul li:nth-child(2) {
  background-image: linear-gradient(to right, #FF7A00, #FE560A);
}

</style>
