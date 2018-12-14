<template>
  <div id="app">
    <Header></Header>
    <router-view />   
    <!-- <Tabbar></Tabbar> -->
  </div>
</template>

<script>
  import Header from '@/components/common/header';
  import Tabbar from '@/components/common/tabbar';
export default {
  name: 'App',
  components:{
       Header,
       // Tabbar
      }
}
</script>

<style>
@import 'assets/icon/iconfont.css';
.icon {
   width: 0.2rem; height: 0.1rem;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
*{
  margin: 0;padding: 0;
}
ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
