<template>
  <div class="tabbar">
    <ul>
      <li>
        <router-link to="/jishi"> <i class="iconfont">&#xe613;</i>
          <div>集市</div>
        </router-link>
      </li>
      <li>
        <router-link to="/fanyu"> <i class="iconfont">&#xe62a;</i>
          <div>繁育</div>
        </router-link>
      </li>
      <li>
        <router-link to="/wo"> <i class="iconfont">&#xe607;</i>
          <div>我</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: true
    }
  },
  methods: {
    // fngourl:function(ul){
    //   alert(url)
    // }
  }
}

</script>
<style scoped>
ul,
li {
  list-style: none;
}

.tabbar {
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
  height: 0.8rem;
  position: fixed;
  bottom: 0;
      left: 50%;
    transform: translateX(-50%);
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  background: #fff;
  z-index: 3;
}

.tabbar ul {
  display: flex;
  height: 100%;
}

.tabbar ul li {
  flex: 1;
  font-size: 0.2rem;
  height: 100%;
}

.tabbar ul li a {
  display: block;
  height: 100%;
  text-decoration: none;
  color: #ccc;
}

.tabbar ul li a.is-active {
  color: red;
}

.tabbar ul li a .iconfont {
  margin: 5% 0 0 0;
  display: block;
}

.mint-tabbar>.mint-tab-item.is-selected {
  background: #fff;
  position: relative;
}

.mint-tabbar>.mint-tab-item.is-selected:after {
  content: '';
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
