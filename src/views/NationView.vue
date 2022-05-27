<template>
  <div class="nation">
    <Card ntype="治愈数量:" :total="totallist.heal" :addition="todaylist.heal"></Card><hr>
    <Card ntype="死亡数量:" :total="totallist.dead" :addition="todaylist.dead"></Card><hr>
    <Card ntype="累计数量:" :total="totallist.confirm" :addition="todaylist.confirm"></Card><hr>
    <Card ntype="现有数量:" :total="totallist.confirm-totallist.dead-totallist.heal" :addition="todaylist.storeConfirm"></Card><hr>
    <Card ntype="境外输入:" :total="totallist.input" :addition="todaylist.input"></Card><hr>
    <Card ntype="无症状感染者:" :total="symnum.noSymptom" :addition="symnum.incrNoSymptom"></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'NationView',
  components: {
    Card
  },

  mounted(){
    this.loadData();
  },
  data() {
    return {
      totallist:[],
      todaylist:[],
      symnum:[]
    };
  },
  methods: {
      loadData(){
        let that = this;
        this.$ajax.get("wuhan/app/data/list-total")
        .then(function(res){
          //console.log(res.data);
          that.totallist=res.data.data.chinaTotal.total;
          that.todaylist=res.data.data.chinaTotal.today;
          that.symnum=res.data.data.chinaTotal.extData;
        })
        .catch(function(res){
          console.log(res);
        })
      } 
  }
}

</script>

<style scoped>
.nation{
  width:90%;
  height:60%;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  }
  hr{
    --tw-divide-x-reverse: 40;
    border-right-width: calc(8px * var(--tw-divide-x-reverse));
    border-left-width: calc(8px * calc(1 - var(--tw-divide-x-reverse)));
		--tw-divide-opacity: 1;
    border-color: rgba(209, 213, 219, var(--tw-divide-opacity));
  }
</style>