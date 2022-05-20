<template>
  <div class="nation">
    <Card ntype="测试到底怎么比较好看"></Card>
<!--     <Card ntype="治愈数量:" :total=totallist.heal :addition=todaylist.heal></Card>
    <Card ntype="死亡数量:" :total=totallist.dead :addition=todaylist.dead></Card>
    <Card ntype="累计数量:" :total=totallist.confirm :addition=todaylist.confirm></Card>
    <Card ntype="现有数量:" :total=totallist.confirm-totallist.dead-totallist.heal :addition=todaylist.storeConfirm></Card>
    <Card ntype="境外输入:" :total=totallist.input :addition=todaylist.input></Card>
    <Card ntype="无症状感染者:" :total=symnum.noSymptom :addition=symnum.incrNoSymptom></Card> -->
<!--     <ul>
      <li v-for="item in datalist">
        {{item}}
      </li>
    </ul> -->
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
