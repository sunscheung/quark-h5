<template>
    <ve-gauge :data="chartDataV"
              :width="resize.width+'px'"
              :height="resize.height+'px'">
    </ve-gauge>
</template>

<script>
export default {
  name: "C317GaugeV", // 这个名字很重要，它就是未来的标签名
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
        columns: ['type', 'a', 'b', 'value'],
        rows: [
          { type: '速度',  a: 1, b: 2 ,value: 80,}
        ]
      })
    }
  }
};
</script>
