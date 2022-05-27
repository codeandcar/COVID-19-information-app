<template>
  <div id="app">
    <div class="title">
      <div>新冠疫情信息查询</div>
    </div>
    <router-view />
    <!-- <div>helloworld</div> -->
    <van-tabbar v-model="active" routo>
      <van-tabbar-item repalce to="/" icon="home-o">全国疫情</van-tabbar-item>
      <van-tabbar-item repalce to="/local" icon="search">省份疫情</van-tabbar-item>
      <van-tabbar-item repalce to="/other" icon="search">他国疫情</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less">
.title{
  width:100%;
  height: 190px;
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
  background:url(./assets/background.png );
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

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


