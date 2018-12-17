<template lang="html">
  <div  >
    <div class="wo_header">
      <div class="shezhi"><i class="iconfont">&#xe827;</i></div>
      <div class="wo_headerbox">
      	<div class="photo">
      		<img src="http://c.hiphotos.baidu.com/image/h%3D300/sign=d4c9df02d7b44aed464eb8e4831d876a/bf096b63f6246b605ee26e3ce6f81a4c500fa28e.jpg" alt="">
      	</div>
      	<div style="color:#232323; line-height: 0.46rem;font-size:0.28rem;">阿拉丁神灯</div>
      	<div>18893462426</div>
      </div>
    </div>
    <div class="wo_list">
      <ul class="ul_list">
        <li>
    	  <router-link to="/message">
	          <div class="aui-list-item-inner aui-list-item-arrow">
	          	
	            <i class="iconfont">&#xe606;</i>
	            <div class="aui-list-item-title">消息</div>
	            <div class="aui-list-item-right">
	              <div class="aui-badge" style="position:relative;top:0; left:0">8</div>
	            </div>
	          </div>
          </router-link>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe641;</i>
            <div class="aui-list-item-title">每日签到</div>
            <div class="desc">签到领猫币</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe681;</i>
            <div class="aui-list-item-title">邀请好友</div>
            <div class="desc">邀请送猫币</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
      </ul>
      <ul class="ul_list">
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe609;</i>
            <div class="aui-list-item-title">我的猫咪</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe608;</i>
            <div class="aui-list-item-title">育儿箱</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe68f;</i>
            <div class="aui-list-item-title">我的订单</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe60c;</i>
            <div class="aui-list-item-title">我的猫币</div>
            <div class="desc" style="color: #e98c09;">1000.00</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
        <li>
          <div class="aui-list-item-inner aui-list-item-arrow">
            <i class="iconfont">&#xe61c;</i>
            <div class="aui-list-item-title">关于魔力猫</div>
            <div class="aui-list-item-right">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Tabbar from '@/components/common/tabbar';
export default {
  components: {
    Tabbar
  }
}

</script>
<style scoped>

.wo_header {
  height: 2.93rem;
  background: #fe8f00;
  box-sizing: border-box;
  padding-top: 1rem;

}
.shezhi{
    position: absolute;
    top: 0.13rem;
    right: 0.32rem;
    color: #fff;
}

.wo_headerbox {
  width: 89%;
  height: 1.76rem;
  background: #fff;
  margin: 0 auto;
  box-shadow: #968e8e 0px 0px 11px;
  border-radius: 0.2rem;
  position: relative;
  padding-top: 0.72rem;
   box-sizing: border-box;
}
.photo{
	width: 1.15rem;
	height: 1.15rem;
	background: #ccc;
	border-radius: 50%;
	position: absolute;
	top: -0.52rem;
	left: 50%;
	transform: translateX(-50%);
	box-sizing: border-box;
	border: 2px solid #fff;

}
.photo img{
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
}

.wo_list {
  background: #f6f6f6;
  padding-bottom: 0.6rem;
}

.wo_list .ul_list {
  margin-bottom: 0.24rem;
  padding: 0 0.25rem;
  background: #fff;
}

.wo_list .ul_list li {
  overflow-x: hidden;
  height: 0.78rem;
  border-bottom: 1px solid #ccc;
}

.aui-list-item-inner.aui-list-item-arrow {
  overflow: hidden;
  padding-right: 0.05rem;
}

.aui-list-item-inner {
  position: relative;
  min-height: 0.78rem;
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
