<template lang="html">
  <div class="home_swiper">
      <mt-swipe :auto="0"  :show-indicators="false" :continuous="false" >
        <mt-swipe-item>
          <img src="../../assets/yindao/img1.png"/>
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/yindao/img2.png"/>
        </mt-swipe-item>
        <mt-swipe-item>
              <img src="../../assets/yindao/img3.png"/>
        </mt-swipe-item>
        <mt-swipe-item>
              <img src="../../assets/yindao/img4.png"  @click="add"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
export default {
 methods:{
        add:function(){
           this.$store.commit('SET_LOADING',false);
           this.Cookies.set('Loading',false);
        }
      }
}

</script>
<style scoped="scoped">

*{
  margin: 0;padding: 0;
}
.home_swiper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
