<template>
  <div class="local">
    <div class="cardlist">
      <form action="/">
        <van-search
          v-model="local"
          placeholder="请输入搜索省份"
          shape="round"
        />
      </form>
      <div v-for="item in locallist" v-show="item.name == local">
        <Card
          ntype="治愈数量:"
          :total="item.total.heal"
          :addition="item.today.heal"
        ></Card>
        <hr />
        <Card
          ntype="死亡数量:"
          :total="item.total.dead"
          :addition="item.today.dead"
        ></Card>
        <hr />
        <Card
          ntype="累计数量:"
          :total="item.total.confirm"
          :addition="item.today.confirm"
        ></Card>
        <hr />
        <Card
          ntype="现有数量:"
          :total="item.total.confirm - item.total.heal - item.total.dead"
          :addition="item.today.storeConfirm"
        ></Card>
      </div>
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

<style scoped>
.local {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardlist{
  width: 80%;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
