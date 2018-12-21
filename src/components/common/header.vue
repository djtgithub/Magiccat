<template lang="html">
  <div>
    <mt-header title="消息" style="  font-size: 0.3rem !important;">
      <a slot="left" @click="goback" >
        <mt-button icon="back" ></mt-button>
      </a>
    </mt-header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    }

  },
  methods: {
    goback: function() {
      this.$router.go(-1);
    }
  }
}

</script>
<style scoped>
.mint-header {
  width: 100%;
  background: #fff;
  color: #666;
}
.mint-header .mint-header-title{
  font-size: 0.3rem !important;
}
</style>
