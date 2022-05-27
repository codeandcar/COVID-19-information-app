<template>
  <div class="card">
    <div class=total>
      <div class="totalfont">{{ ntype }}</div>
      <div class="totalnum">{{ total }}</div>
    </div>
    <div class="today">较昨日+{{ addition }}</div>
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
.total {
  display: flex;
  justify-content: left;
}
.totalfont{
  font-size: 1.5rem;
  line-height: 2rem;
}
.totalnum{
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.today{
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight:400;
}
</style>
