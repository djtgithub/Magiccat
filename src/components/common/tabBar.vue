<template lang="html">
  <mt-tabbar v-model="selected">
    <mt-tab-item id="外卖">
      <img slot="icon" src="../../assets/logo.png">
    集市
  </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../../assets/logo.png">
    繁育
  </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../../assets/logo.png">
    我
  </mt-tab-item>
        
  </mt-tabbar>
</template>
<script>
export default {
	data(){
		return {
			selected:true
		}
	}
}

</script>
<style>
</style>
