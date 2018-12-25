<template>
  <div class="message">
    <div>
      <mt-header title="消息" style="  font-size: 0.3rem !important;">
        <a slot="left" @click="goback" >
          <mt-button icon="back" ></mt-button>
        </a>
      </mt-header>
    </div>
    <div class="wo_list">
      <ul class="ul_list">
        <li>
          <router-link to="/message">
            <div class="aui-list-item-inner aui-list-item-arrow">
              <i class="iconfont"><img src="../../assets/message/xiaoxi.png" alt="" /></i>
              <div class="aui-list-item-title"><p>系统消息</p><p>看喵喵就送回家</p></div>
              <div class="aui-list-item-right">
                <p>17:00</p>
               <p> <i class="iconfont">&#xe606;</i></p>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont"><img src="../../assets/message/dingdan.png" alt="" /></i>
            <div class="aui-list-item-title"><p>订单消息</p><p>您选择繁育的魔力猫19840622已交货</p></div>
            <div class="aui-list-item-right">
               <p>09:00</p>
               <p> <i class="iconfont">&#xe606;</i></p>
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont"><img src="../../assets/message/dingdan.png" alt="" /></i>
            <div class="aui-list-item-title"><p>莱斯</p><p>好的</p></div>
            <div class="aui-list-item-right">
               <p>09:00</p>
                <p> <i class="iconfont">&#xe606;</i></p>
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont"><img src="../../assets/message/dingdan.png" alt="" /></i>
            <div class="aui-list-item-title"><p>蓝迪</p><p>[图片]</p></div>
            <div class="aui-list-item-right">
               <p>09:00</p>
                <p> <i class="iconfont">&#xe606;</i></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from '@/components/common/header';
export default {
  data() {
    return {}
  },
  components: {
    Header,
  },
  methods: {
    
    goback: function() {
      this.$router.go(-1);
    }
  }
}

</script>
<style scoped>
ul,
li {
  list-style: none;
}

.message {
 width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
}

.wo_list {
  padding-bottom: 0.6rem;
}

.wo_list .ul_list {
  margin-bottom: 0.24rem;
  padding: 0 0.25rem;
  background: #fff;
  border-top: 1px solid #ccc;
}

.wo_list .ul_list li {
  overflow-x: hidden;
  height: 1.23rem;
  border-bottom: 1px solid #ccc;
}

.aui-list-item-inner.aui-list-item-arrow {
  overflow: hidden;
  padding-right: 0.05rem;
}

.aui-list-item-inner {
  position: relative;
  min-height: 1.23rem;
  padding-right: 0.75rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}


.aui-list-item-title {
  font-size: 0.18rem;
  position: relative;
  color: #212121;
  text-align: left;
  margin-left: 0.1rem;
  flex: 4;
  /* max-width: 3rem; */
}

.aui-list-item-title p{
    max-width: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.aui-list-item-right,
.aui-list-item-title-row em {
  max-width: 50%;
  position: relative;
  font-size: 0.16rem;
  color: #757575;
  margin-left: 0.25rem;
}

.aui-list-in .aui-list-item-inner:after {
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  display: block;
  content: '';
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}

.aui-list-item-right,
.aui-list-item-title-row em {
  position: relative;
  font-size: 0.16rem;
  color: #757575;
  /* margin-left: 2.25rem; */
      flex: 1;
}

.aui-list-item-right .aui-badge,
.aui-list .aui-list-item-right .aui-dot {
  display: inherit;
}

.aui-badge {
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  line-height: 0.28rem;
  font-size: 0.16rem;
  color: #ffffff;
  background-color: #ff2600;
  border-radius: 50%;
  position: absolute;
  top: 0.2rem;
  left: 60%;
  z-index: 99;
}

.desc {
  display: inline-block;
  width: auto;
  height: 0.25rem;
  line-height: 0.26rem;
  font-size: 0.16rem;
  position: absolute;
  right: 10%;
}

.aui-list-item-inner.aui-list-item-arrow .iconfont {
  width: 0.82rem;
  height: 0.82rem;
  border-radius: 100%;
      flex: 1;
}
.aui-list-item-inner.aui-list-item-arrow .iconfont img{
  display: block;
   width: 100%;
   height: 100%;
   border-radius: 100%;
}
.mint-header-title{
  font-size: 0.3rem !important;
}
</style>
