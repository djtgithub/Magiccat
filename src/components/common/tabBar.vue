<template >
  <div class="tabbar">
    <ul>
      <li><router-link to="/jishi">  <i class="iconfont">&#xe613;</i><div>集市</div></router-link></li>
      <li><router-link to="/fanyu">  <i class="iconfont">&#xe62a;</i><div>繁育</div></router-link></li>
      <li><router-link to="/wo">  <i class="iconfont">&#xe606;</i><div>我</div></router-link></li>
    </ul>

  </div>
  <!-- <mt-tabbar v-model="selected">
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
        
  </mt-tabbar> -->


<!--   <mt-tabbar v-model="selected">
        <mt-tab-item id="集市"  @click="fngourl('/jishi')">
            <i class="iconfont">&#xe613;</i>
            <div>集市</div>
       </mt-tab-item>
       <mt-tab-item id="繁育">
         <i class="iconfont">&#xe613;</i>
         <div>繁育</div>
      </mt-tab-item>
      <mt-tab-item id="我">
         <i class="iconfont">&#xe613;</i>
         <div>我</div>
      </mt-tab-item>
        
  </mt-tabbar> -->
</template>
<script>
export default {
	data(){
		return {
			selected:true
		}
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
.tabbar{
  width: 100%;
  height: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
}
.tabbar ul{
  display: flex;
      height: 100%;
}
.tabbar ul li{
  flex: 1;
  font-size: 0.2rem;
  height: 100%;
}
.tabbar ul li a{
  display: block;
  height: 100%;
  text-decoration: none;
  color: #ccc;
}
.tabbar ul li a.is-active{
  color: red;
}

.tabbar ul li a .iconfont{
        margin: 5% 0 0 0;
    display: block;
}

.mint-tabbar > .mint-tab-item.is-selected{
  background: #fff;
  position: relative;
}
.mint-tabbar > .mint-tab-item.is-selected:after{
  content: '';
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
