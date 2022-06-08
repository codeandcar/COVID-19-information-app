<template>
  <div id="app">
    <div class="title">
      <div>新冠疫情信息查询</div>
    </div>
    <!-- 导航栏 -->
    <div class="content">
    <van-tabbar v-model="active" routo>
      <van-tabbar-item repalce to="/" icon="home-o">全国疫情</van-tabbar-item>
      <van-tabbar-item repalce to="/local" icon="search">省份疫情</van-tabbar-item>
      <van-tabbar-item repalce to="/other" icon="weapp-nav">国家疫情</van-tabbar-item>
    </van-tabbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
.title{
  width:100%;
  height: 20%;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-size: 1.875rem;
  line-height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items:center;
}
#app {
  width:100%;
  height: 100%;
  background:url(./assets/background.png );
  background-size:contain;
  background-repeat: no-repeat;
  background-position-x: center;
}
</style>

<script>
export default {
  data() {
    return {
      active: 0,//打开app时默认在第一个页面
    };
  },
};
</script>


