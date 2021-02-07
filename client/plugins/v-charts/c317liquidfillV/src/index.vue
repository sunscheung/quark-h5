<template>
    <ve-liquidfill :data="chartDataV"
                   :width="resize.width+'px'"
                   :height="resize.height+'px'"
    ></ve-liquidfill>
</template>

<script>
export default {
  name: "C317LiquidfillV", // 这个名字很重要，它就是未来的标签名
  props: {
    resize: {
      type: Object,
      default: () => ({
        height: 340,
        width: 380
      })
    },
    chartDataV: {
      type: Object,
      default: () => ({
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6
        }]
      })
    }
  }
};
</script>
