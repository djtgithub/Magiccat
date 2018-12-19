<template lang="html">
  <div>
    <div class="head" @click="goback" >
    	<span><i class="mintui mintui-back"></i></span>
    </div>
    <div class="loginwrap">
      <div class="photo">
        <div class="phpoto_img">
          <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2527767901,3131898055&fm=58&bpow=720&bpoh=1080" />
  		</div>
        </div>
        <div class="input_col">
          <mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="username"></mt-field>
        </div>
        <div class="input_col">
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <div class="golink">
          <router-link to="/register">我要注册</router-link>
          <router-link to="/forgotpwd">忘记密码</router-link>
        </div>
        <div class="btn">
          <mt-button type="primary" class="mint-button mint-button--primary mint-button--large">登录</mt-button>
        </div>
        <div class="other">
        	其他登录方式
        </div>
        <ul class="ullist">
        	<li>
        		<div>
        			<i class="iconfont">&#xe631;</i>
        		</div>
        	</li>
        	<li>
        		<div>
        			<i class="iconfont">&#xe604;</i>
        		</div>
        	</li>
        	<li>
        		<div>
        			<i class="iconfont">&#xe64c;</i>
        		</div>
        	</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:''

    }
  },
   methods: {
    goback: function() {
      this.$router.go(-1);
    }
  }
}

</script>
<style>
@import '../../assets/icon/iconfont.css';

* {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}

.head {
  height: 0.57rem;
}
.head span{
    height: 100%;
    line-height: 0.57rem;
    text-align: left;
    float: left;
    margin-left: 0.28rem;
}

.photo {
  height: 2.97rem;

  position: relative;
}

.photo .phpoto_img {
  width: 1.61rem;
  height: 1.61rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;

}

.photo .phpoto_img img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.loginwrap {
  width: 80%;
  margin: 0 auto;

}

.input_col {
  height: 0.86rem;
}

.btn {
  width: 4.8rem;
  height: 0.8rem;
  margin: 0.48rem auto 0;
}

.btn .mint-button--primary {
  background: #ff9d16;
}

.btn .mint-button--primary .mint-button-text {
  font-size: 0.3rem;
}

.golink {
  padding-top: 0.28rem;
  display: flex;
}

.mint-field .mint-cell-title {
  width: 0.76rem;
}

.golink a {
  flex: 1;
  text-align: left;
  text-decoration: none;
}

.golink a:nth-child(2) {
  text-align: right;
}

.other{
	margin-top:0.9rem; 
	position: relative;
}
.other:after{
   content: '';
   position: absolute;
   top: 50%;
   right: 0;
   height: 1px;
   width:1.7rem;
   background: #ccc;
}
.other:before{
   content: '';
   position: absolute;
   top: 50%;
   left: 0;
   height: 1px;
   width:1.7rem;
   background: #ccc;
}
.ullist{
	height: 0.78rem;
	width: 4.34rem;
	margin: 0.6rem auto 0;
	display: flex;
}
.ullist li{
  flex: 1;
  text-align: center;

}
.ullist li div{
	width: 0.78rem;
	height: 0.78rem;
	border-radius: 50%;
	background: #dcdcdc;
    margin: 0 auto;
    position: relative;
}
.ullist li div i{
	    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.mint-cell-wrapper{
  background: #fff;
  border-bottom: 1px solid #ccc;
}

</style>
