<template>
    <ve-pie :data="chartDataV"
            :width="resize.width+'px'"
            :height="resize.height+'px'"
    ></ve-pie>
</template>

<script>
export default {
  name: "C317PieV", // 这个名字很重要，它就是未来的标签名
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
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      })
    }
  }
};
</script>
