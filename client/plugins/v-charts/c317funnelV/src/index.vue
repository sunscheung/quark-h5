<template>
    <ve-funnel :data="chartDataV"
               :width="resize.width+'px'"
               :height="resize.height+'px'">
    </ve-funnel>
</template>

<script>
export default {
  name: "C317FunnelV", // 这个名字很重要，它就是未来的标签名
  props: {
    resize: {
      type: Object,
      default: () => ({
        height: 360,
        width: 430
      })
    },
    chartDataV: {
      type: Object,
      default: () => ({
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 600 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 100 }
        ]
      })
    }
  }
};
</script>
