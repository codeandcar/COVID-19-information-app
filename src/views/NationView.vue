<template>
  <div class="nation">
    <div class="cardlist">
      <Card
        ntype="治愈数量:"
        :total="totallist.heal"
        :addition="todaylist.heal"
      ></Card>
      <hr />
      <Card
        ntype="死亡数量:"
        :total="totallist.dead"
        :addition="todaylist.dead"
      ></Card>
      <hr />
      <Card
        ntype="累计数量:"
        :total="totallist.confirm"
        :addition="todaylist.confirm"
      ></Card>
      <hr />
      <Card
        ntype="现有数量:"
        :total="totallist.confirm - totallist.dead - totallist.heal"
        :addition="todaylist.storeConfirm"
      ></Card>
      <hr />
      <Card
        ntype="境外输入:"
        :total="totallist.input"
        :addition="todaylist.input"
      ></Card>
      <hr />
      <Card
        ntype="无症状者:"
        :total="symnum.noSymptom"
        :addition="symnum.incrNoSymptom"
      ></Card>
      </van-row>
    </div>
    <div class="deadline">
      截止时间：{{deadline}}
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "NationView",
  components: {
    Card,
  },
  mounted() {
    this.loadData()
    // console.log(this.deadline)
  },
  data() {
    return {
      totallist: [],
      todaylist: [],
      symnum: [],
      deadline:"",
    };
  },
  methods: {
    loadTime(num) {
      //时间戳数据处理
      let date = new Date(num);
      // console.log(date);
      //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM; //月补0
      let d = date.getDate();
      d = d < 10 ? "0" + d : d; //天补0
      let h = date.getHours();
      h = h < 10 ? "0" + h : h; //小时补0
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m; //分钟补0
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s; //秒补0
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s; 
      //  console.log(this.deadline);
    },
    loadData() {
      let that = this;
      this.$ajax
        .get("wuhan/app/data/list-total")
        .then(function (res) {
          // console.log(res.data);
          that.totallist = res.data.data.chinaTotal.total;
          that.todaylist = res.data.data.chinaTotal.today;
          that.symnum = res.data.data.chinaTotal.extData;
          that.deadline=that.loadTime(res.data.timestamp);
          // console.log(that.deadline)
        })
        .catch(function (res) {
          console.log(res);
        });
    },
    
  },
};
</script>

<style scoped>
.nation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}
.cardlist{
  width:80%;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.deadline{
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight:400;
}
</style>