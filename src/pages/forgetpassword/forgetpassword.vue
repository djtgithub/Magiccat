<template lang="html">
  <div>
    <div class="head" @click="goback">
      <span><i class="mintui mintui-back"></i></span>
    </div>
    <div class="loginwrap">
      
        <div class="input_col">
          <a class="mint-cell mint-field">
           <div class="mint-cell-left"></div> 
           <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                  <i class="iconfont">&#xe64f;</i>
              </div> 
              <div class="mint-cell-value">
                <input placeholder="请输入用户名" type="text" class="mint-field-core" v-model="logindata.username"> 
                <div class="mint-field-clear" style="display: none;">
                  <i class="mintui mintui-field-error"></i>
                </div> 
                <span class="mint-field-state is-default">
                  <i class="mintui mintui-field-default"></i></span> 
                  <div class="mint-field-other"></div>
              </div> 
            </div> 
            <div class="mint-cell-right"></div>
          </a>
        </div>
        <div class="input_col">
          <a class="mint-cell mint-field">
           <div class="mint-cell-left"></div> 
           <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                  <i class="iconfont">&#xe601;</i>
              </div> 
              <div class="mint-cell-value">
                <input placeholder="请输入您的邮箱" type="text" class="mint-field-core" v-model="logindata.email"> 
                <div class="mint-field-clear" style="display: none;">
                  <i class="mintui mintui-field-error"></i>
                </div> 
                <span class="mint-field-state is-default">
                  <i class="mintui mintui-field-default"></i></span> 
                  <div class="mint-field-other"></div>
              </div> 
            </div> 
            <div class="mint-cell-right"></div>
          </a>
        </div>
        <div class="btn">
          <mt-button type="primary" class="mint-button mint-button--primary mint-button--large" @click="login">确定发送</mt-button>
        </div>
      
      </div>
    </div>
</template>
<script>
import fetch from '../../utils/fetch';
export default {
  data() {
    return {
      logindata: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    goback: function() {
      this.$router.go(-1);
    },
    login() {
      const that = this;
      //登录验证
      if (this.logindata.username == '' || this.logindata.email == '') {
        that.$toast({
          message: '用户名或邮箱不能为空',
          position: 'bottom',
          duration: 5000
        });
        return false;
      }

      const data = {
        "username": this.logindata.username,
        "email": this.logindata.email
      }
      //登录请求
      return fetch({
        url: 'user/resetRequest',
        method: 'post',
        data
      }).then(function(res) {

        if(res.status==200 &&res.statusText=='OK'){
          that.$toast(res.data.msg+'请查收');
          setTimeout(function(){
             that.$router.push({name:'Login'});
          },1000)
         }else{
           that.$toast(res.message);
         }

      }).catch(function(rep) {
          that.$toast((rep.response.data).error.message);
      });

    }
  },
  created() {
    //输入框输入文字页面会被顶起来，输入框失去焦点之后页面回复原位
    $(document).on('focusout', function() {
      $(window).scrollTop(0);
    });
  }
}

</script>
<style scoped>
@import '../../assets/icon/iconfont.css';

* {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}

.head {
  height: 0.57rem;
}

.head span {
  height: 100%;
  line-height: 0.57rem;
  text-align: left;
  float: left;
  margin-left: 0.28rem;
}

.photo {
  height: 2.67rem;

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

.other {
  margin-top: 0.9rem;
  position: relative;
}

.other:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  height: 1px;
  width: 1.7rem;
  background: #ccc;
}

.other:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 1.7rem;
  background: #ccc;
}

.ullist {
  height: 0.78rem;
  width: 4.34rem;
  margin: 0.6rem auto 0;
  display: flex;
}

.ullist li {
  flex: 1;
  text-align: center;

}

.ullist li div {
  width: 0.78rem;
  height: 0.78rem;
  border-radius: 50%;
  background: #dcdcdc;
  margin: 0 auto;
  position: relative;
}

.ullist li div i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mint-cell-wrapper {
  background: #fff;
  border-bottom: 1px solid #ccc;
}

</style>
