<template lang="html">
	<div class="home_header">
		<div class="home_header_r">
        <div class="page-search">
          <div class="mint-searchbar">
            <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input  type="search" placeholder="请输入要搜索的内容" class="mint-searchbar-core" v-on:input="serach()"></div>
            <a class="mint-searchbar-cancel" style="display: none;">取消</a>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
  export default{
     methods:{
      serach:function(){
        console.log('222')
      }
     }

  }


</script>
<style scoped>
.home_header {
  height: 0.78rem;
  overflow: hidden;
}
  .home_header_r {
  float: right;
  width: 97.5%;
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

</style>