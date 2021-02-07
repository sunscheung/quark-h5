<template>
  <div class="qk-digitalD">
    <dv-digital-flop
        :config="config"
        style="width:100%;height:100%"
        :key="key"/>
  </div>
</template>

<script>
export default {
  name: "C317DigitalD", // 这个名字很重要，它就是未来的标签名
  props: {
  },
  data() {
    return {
      config:
          {
            number: [100],
            content: '{nt}个'
          },
      key:1
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver(() => {
      this.key++
    });
    resizeObserver.observe(document.querySelector(".qk-digitalD"));
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
.qk-digitalD {
  width: "100%";
  height: "100%";
}
</style>
