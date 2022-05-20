<template>
  <div id="app">
    <div class="title">新冠疫情信息查询</div>
    <router-view />
    <van-tabbar v-model="active" routo>
      <van-tabbar-item repalce to="/" icon="home-o">全国疫情</van-tabbar-item>
      <van-tabbar-item repalce to="/local" icon="search">省份疫情</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less">
.title{
  width:100%;
  height: 200px;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-size: 1.875rem;
  line-height: 2.25rem;
  
}
#app {
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:url(./assets/1.jpeg);
  background-size: cover;
}
</style>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>


