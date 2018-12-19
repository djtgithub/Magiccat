<template >
  <div class="message">
    <Header ></Header>
        <div class="wo_list">
      <ul class="ul_list">
        <li>
        <router-link to="/message" >
            <div class="aui-list-item-inner aui-list-item-arrow">
              
              <i class="iconfont">&#xe606;</i>
              <div class="aui-list-item-title">系统消息</div>
              <div class="aui-list-item-right">
                <div class="aui-badge" style="position:relative;top:0; left:0">8</div>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe641;</i>
            <div class="aui-list-item-title">订单消息</div>
            <div class="desc">签到领猫币</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe681;</i>
            <div class="aui-list-item-title">莱斯</div>
            <div class="desc">邀请送猫币</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe609;</i>
            <div class="aui-list-item-title">蓝迪</div>
            <div class="aui-list-item-right">
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
.wo_list {
  background: #f6f6f6;
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

.aui-list-item-arrow:before {
  content: '';
  width: 0.18rem;
  height: 0.18rem;
  position: absolute;
  top: 50%;
  right: 0.34rem;
  background: transparent;
  border: 1px solid #dddddd;
  border-top: none;
  border-right: none;
  z-index: 2;
  -webkit-border-radius: 0;
  border-radius: 0;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg) translateY(50%);
}

.aui-list-item-title {
  width: 3.37rem;
  font-size: 0.18rem;
  position: relative;
  color: #212121;
  text-align: left;
  margin-left: 0.1rem;
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
  margin-left: 2.25rem;
  width: 1.2rem;
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
  width: 0.63rem;
  color: #e98c09;
}

</style>
