<!--button.vue-->
<template>
  <div class="qk-scrollRankingD">
    <dv-scroll-ranking-board
        :config="config"
        style="width:100%;height:100%"
        :key="key"/>
  </div>
</template>

<script>
export default {
  name: "C317ScrollRankingD", // 这个名字很重要，它就是未来的标签名
  props: {
  },
  data() {
    return {
      config:{
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 45
          },
          {
            name: '漯河',
            value: 29
          }
        ]
      },
      key:1
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver(() => {
      this.key++
    });
    resizeObserver.observe(document.querySelector(".qk-scrollRankingD"));
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
.qk-scrollRankingD {
  width: "100%";
  height: "100%";
}
</style>
