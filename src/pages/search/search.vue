<template lang="html">
  <div>
    <div class="home_header">
      <div class="home_header_r">
        <div class="page-search">
          <div class="mint-searchbar">
            <div class="mint-searchbar-inner"><i class="mintui mintui-search"></i> <input type="search" placeholder="请输入要搜索的内容" class="mint-searchbar-core" value="" v-model="inputtxt" v-on:input="serach()"></div>
            <a class="mint-searchbar-cancel" @click="goback">取消</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <ul class="search_list">
        <li v-for="item in Content">
          <router-link :to="{name:'Detail',params:{id:item.gid}}">{{item.name}}</router-link>
        </li>
      </ul>
      <div v-text="wrap" style="margin-top: 0.2rem;"></div>
    </div>
  </div>
</template>
<script>
import fetch from '../../utils/fetch';
export default {
  data() {
    return {
      inputtxt: '',
      Content: {},
      wrap:''
    }
  },
  methods: {
     goback: function() {
      this.$router.go(-1);
    },
    serach: function() {
      if (this.inputtxt == '') {
         this.wrap="请输入您要找的内容";
        return false;
      }
      var that = this;
      var filter = {
        "where": {
          "name": { "like": "%" + this.inputtxt + "%" }
        }
      }
      fetch({
        url: 'jishi_content?filter=' + encodeURIComponent(JSON.stringify(filter)),
        method: 'get'
      }).then(function(res) {
        if (res.status == 200 && res.statusText == 'OK') {
          console.log('sadasd' + JSON.stringify(res))
          if(res.data.length==0){
            that.wrap="非常抱歉，没有搜索到您要找的内容";
          }else{
            that.Content = res.data;
            that.wrap="";
          }
          

        }
      }).catch(function(rep) {
        that.$toast((rep.response.data).error.message);
      });
    }
  },created(){
    this.wrap="请输入您要找的内容";
  }

}

</script>
<style scoped>
.home_header {
  height: 0.78rem !important;
  overflow: hidden;
}

.home_header_r {
  float: right;
  width: 97.5%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.page-search {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0.24rem;
  width: 89%;
}

.mint-searchbar-inner {
  border-radius: 1rem;
  background: #f6f6f6 !important;
  height: 0.5rem;
  padding: 0;
}

.mint-searchbar {
  padding: 0;
  transform: translate(-50% -50%);
  background: #fff !important;
}

.mint-searchbar-core {
  text-indent: 0.1rem;
  background: #f6f6f6 !important;
}

.search_list {
  border-top: 1px solid #ccc;
}

.search_list li {
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: left;
  text-indent: 0.4rem;
  border-bottom: 1px solid #ccc;

}

.search_list li a {
  color: #666;
  font-size: 0.2rem;
  display: block;
}

</style>
