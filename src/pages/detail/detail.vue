<template lang="html">
  <div>
    <div data-v-7bcd8dab=""><header data-v-7bcd8dab="" class="mint-header" style="font-size: 0.3rem !important;"><div class="mint-header-button is-left"><a data-v-7bcd8dab=""><button data-v-7bcd8dab="" class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text"></label></button></a></div> <h1 class="mint-header-title">消息</h1> <div class="mint-header-button is-right"></div></header></div>
    <!-- <router-view></router-view>	 -->
详情页
  </div>
</template>
<script>
  import fetch from '../../utils/fetch';
export default {
  created(){
     console.log(this.$route.params.id)
     let id=this.$route.params.id;
     // let id='5c21bbb04e5518d532af1e82'
     this.getDetail(id);
  },
   methods:{
     getDetail:function(id){
var that=this;
var filter = {
   // "include":{"gid":"authorPointer"}
        "where":{'id':id},
         "include":["gidPointer"]
}
    fetch({
          // url: 'jishi_detail/'+id+'/relation',
           url: 'jishi_detail?filter=' + encodeURIComponent(JSON.stringify(filter)),
          method: 'get'
        }).then(function(res) {
          console.log(JSON.stringify(res))
          if (res.status == 200 && res.statusText == 'OK') {
            that.Content = res.data;
          }
        }).catch(function(rep) {
          console.log(rep);
          that.$toast((rep.response.data).error.message);
        });



     }
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

.mint-header{
  background: #fff;
  color: #ccc;
}
</style>
