<template>
  <div class="card">
    <div class=total>
      <div class="totalfont">{{ ntype }}</div>
      <div class="totalnum">{{ total }}</div>
      <div class="today">较昨日+{{ addition }}</div>
    </div>
    
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
  align-items: flex-end;
  flex-wrap:wrap;
}
.totalfont{
  width:110px;
  height: 35px;
  margin-right: 10px;
  font-size: 1.5rem;
  line-height: 2rem;
}
.totalnum{
  width:120px;
  height: 35px;
  margin-right: 15px;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.today{
  width:130px;
  height: 25px;
  font-size: 1.125rem;
line-height: 1.75rem;
  font-weight:400;
  --tw-text-opacity: 1;
color: rgba(107, 114, 128, var(--tw-text-opacity));
}
</style>
