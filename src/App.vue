<template>
  <div id="app">
    <Header ></Header>
    <router-view />   
    <Yindao v-if="this.$store.state.app.loading==='true'"></Yindao>
  </div>
</template>

<script>
  import Header from '@/components/common/header';
  import Yindao from '@/pages/yindao/yindao';
export default {
  name: 'App',
  data(){
    return {
       yindao:this.$store.state.app.loading
    }
   
  },
  components:{
       Header,
      },
      methods:{
        
      },mounted(){
        // this.yindao=this.$store.state.app.loading;
        // console.log(this.$store.state.app.loading)
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
