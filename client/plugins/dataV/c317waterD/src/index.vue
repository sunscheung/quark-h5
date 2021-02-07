<!--button.vue-->
<template>
  <div class="qk-waterD">
    <dv-water-level-pond
        :config="config"
        style="width:100%;height:100%"
        :key="key"/>
  </div>
</template>

<script>
export default {
  name: "C317WaterD", // 这个名字很重要，它就是未来的标签名
  props: {
  },
  data() {
    return {
      config:{
        data: [66]
      },
      key:1
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver(() => {
      this.key++
    });
    resizeObserver.observe(document.querySelector(".qk-waterD"));
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
.qk-waterD {
  width: "100%";
  height: "100%";
}
</style>
