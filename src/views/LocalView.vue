<template>
  <div class="local">
    <form action="/">
      <van-search
        v-model="local"
        placeholder="请输入搜索地名"
        shape="round"
      />
    </form>
    <div v-for="item in locallist" v-show="item.name==local">
      <Card ntype="治愈数量:" :total="item.total.heal" :addition="item.today.heal"></Card>
      <Card ntype="死亡数量:" :total="item.total.dead" :addition="item.today.dead"></Card>
      <Card ntype="累计数量:" :total="item.total.confirm" :addition="item.today.confirm"></Card>
      <Card ntype="现有数量:" :total="item.total.confirm-item.total.heal-item.total.dead" :addition="item.today.storeConfirm"></Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      local: "",
      locallist: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      let that = this;
      this.$ajax
        .get("wuhan/app/data/list-total")
        .then(function (res) {
          //console.log(res.data.data.areaTree[2]);
          that.locallist = res.data.data.areaTree[2].children;
          //console.log(that.locallist);
        })
        .catch(function (res) {
          console.log(res);
        });
    },
  },
};
</script>
