<!--button.vue-->
<template>
  <div class="qk-percentD">
    <dv-percent-pond
        :config="config"
        style="width:100%;height:100%"
        :key="key"/>
  </div>
</template>

<script>
export default {
  name: "C317PercentD", // 这个名字很重要，它就是未来的标签名
  props: {
  },
  data() {
    return {
      config:{
        value: 66
      },
      key:1
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver(() => {
      this.key++
    });
    resizeObserver.observe(document.querySelector(".qk-percentD"));
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
.qk-percentD {
  width: "100%";
  height: "100%";
}
</style>
