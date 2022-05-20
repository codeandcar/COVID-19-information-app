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
  width:250px;
  box-shadow:0 4px 8px 0 #aaa;
  border-radius: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.totalfont{
  	font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 400;
}
.todayfont{
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight:400;
}
</style>
