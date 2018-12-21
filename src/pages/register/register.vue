<template lang="html">
  <div>
    <div class="head" @click="goback">
      <span><i class="mintui mintui-back"></i></span>
    </div>
    <div class="loginwrap">
      <div class="photo">
        <div class="phpoto_img">
          <img src="../../assets/register/photo.jpg" />
        </div>
        </div>
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
        <div class="input_col">
          <a class="mint-cell mint-field">
           <div class="mint-cell-left"></div> 
           <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                  <i class="iconfont">&#xe632;</i>
              </div> 
              <div class="mint-cell-value">
                <input placeholder="请输入密码" type="password" class="mint-field-core" v-model="logindata.password"> 
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
        <div class="golink">
          <router-link to="/login">已有账号，直接登录</router-link>
        </div>
        <div class="btn">
          <mt-button type="primary" class="mint-button mint-button--primary mint-button--large" @click="login">注册</mt-button>
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
        password: '',
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
      if (this.logindata.username == '' || this.logindata.password == '' || this.logindata.email == '') {
        that.$toast({
          message: '用户名或密码或邮箱不能为空',
          position: 'bottom',
          duration: 5000
        });
        return false;
      }

      const data = {
        "username": this.logindata.username,
        "password": this.logindata.password,
        "email": this.logindata.email
      }
      //登录请求
      return fetch({
        url: 'user',
        method: 'post',
        data
      }).then(function(res) {

        if (res.status == 200 && res.statusText == 'OK') {
          that.$toast({
            message: '注册成功',
            position: 'bottom',
            duration: 5000
          });
          //注册成功后 跳转到登录页面
          that.$router.push({ path: '/login' });
        } else {
          if ((res.data).error.status == '202') {
            that.$toast('该用户名已经存在');
          } else {
            that.$toast('注册失败');
          }
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
  text-align: left;
  text-decoration: none;
}

.mint-cell-wrapper {
  background: #fff;
  border-bottom: 1px solid #ccc;
}

</style>
