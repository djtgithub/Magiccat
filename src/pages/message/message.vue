<template >
  <div class="message">
    <Header ></Header>
    消息
  </div>

</template>
<script>
    import Header from '@/components/common/header';
export default {
	data(){
		return {
		}
	},components:{
       Header,
    },methods:{
    // fngourl:function(ul){
    //   alert(url)
    // }
  }
}

</script>
<style scoped>

ul,li{
  list-style: none;
}
.message{
	background: red;
  height: 13rem;
  width: 100%;
}

</style>
