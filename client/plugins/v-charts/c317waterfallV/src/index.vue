<template>
    <ve-waterfall :data="chartDataV"
                  :width="resize.width+'px'"
                  :height="resize.height+'px'"
    ></ve-waterfall>
</template>

<script>
export default {
  name: "C317WaterfallV", // 这个名字很重要，它就是未来的标签名
  props: {
    resize: {
      type: Object,
      default: () => ({
        height: 360,
        width: 380
      })
    },
    chartDataV: {
      type: Object,
      default: () => ({
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
      })
    }
  }
};
</script>
