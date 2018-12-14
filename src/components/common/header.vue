 <template lang="html">
 <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈"  v-show="flag">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
 
</mt-header>
 </template>

 <script>
    export default {
    	data(){
    		return{
    			flag:false
    		}
    		
    	}
  }
</script>

 <style >

</style>