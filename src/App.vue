<template>
  <div id="app">
    <h1>新冠疫情查询</h1>
    <router-view />
    <van-tabbar v-model="active" routo>
      <van-tabbar-item repalce to="/" icon="home-o">全国疫情</van-tabbar-item>
      <van-tabbar-item repalce to="/local" icon="search">地方疫情</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
