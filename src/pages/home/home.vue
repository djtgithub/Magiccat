<template lang="html">
  <div>
    <div class="home_header">
      <div class="page-search">
        <div class="mint-search">
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
          <img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=e6cb69522534349b6b066885f9eb1521/91ef76c6a7efce1b5ef04082a251f3deb58f659b.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://c.hiphotos.baidu.com/image/h%3D300/sign=d4c9df02d7b44aed464eb8e4831d876a/bf096b63f6246b605ee26e3ce6f81a4c500fa28e.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="http://a.hiphotos.baidu.com/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    我是首页
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from '@/components/common/tabbar';
export default {
  components: {
    Tabbar
  }
}

</script>
<style>
.home_header {
  height: 20px;
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
</style>
