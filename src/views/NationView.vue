<template>
  <div class="nation">
    <Card ntype="确诊数量:" ></Card>
    <Card ntype="治愈数量:"></Card>
    <Card ntype="死亡数量:"></Card>
    <Card ntype="现有数量:"></Card>
    <Card ntype="境外输入:"></Card>
    <Card ntype="无症状感染者:"></Card>
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
  methods: {
      loadData(){
        this.$ajax.get("wuhan/app/data/list-total")
        .then(function(res){
          console.log(res.data);
        })
        .catch(function(res){
          console.log(res);
        })
      } 
  }
}

</script>
