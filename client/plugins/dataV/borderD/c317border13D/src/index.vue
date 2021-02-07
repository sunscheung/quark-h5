<template>
  <div class="qk-border13D">
    <dv-border-box-13
        :color="colorD"
        style="width:100%;height:100%"
        :key="key"></dv-border-box-13>
  </div>
</template>

<script>
export default {
  name: "C317Border13D", // 这个名字很重要，它就是未来的标签名
  props: {
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(35, 95, 167)'])
    }
  },
  data() {
    return {
      key:1
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver(() => {
      this.key++
    });
    resizeObserver.observe(document.querySelector(".qk-border13D"));
  }
};
</script>

<style lang="scss" scoped>
.qk-border13D {
  width: "100%";
  height: "100%";
}
</style>
