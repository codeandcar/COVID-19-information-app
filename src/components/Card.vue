<template>
  <div class="card">
    <div class="totalfont">{{ ntype }}{{ total }}</div>
    <div class="todayfont">较昨日+{{ addition }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    ntype: String,
    total: Number,
    addition: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  margin-left: 40px;

}
.totalfont{
  font-size: 1.5rem;
  line-height: 2rem;
}
.todayfont{
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight:400;
}
</style>
