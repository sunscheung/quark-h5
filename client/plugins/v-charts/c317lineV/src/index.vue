<!--button.vue-->
<template>
    <ve-line
      :data="chartDataV"
      :extend="chartExtend"
      :width="resize.width+'px'"
      :height="resize.height+'px'">
    </ve-line>
</template>

<script>
export default {
  name: "C317LineV", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 350,
        width: 480
      })
    },
    titleV: {
      type: Object,
      default: () => ({
          text: "标题",
          x: "middle", //在图片中的x轴位置 left, right, middle
          y: "bottom", //在图片中的y轴位置 top, bottom
          textAlign: "center", //整体（包括 text 和 subtext）的水平对齐 auto, left, right, center
          textStyle: {
            fontSize: 12,
          },
        }),
    },
    chartDataV: {
      type: Object,
      default: () => ({
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      }),
    },
  },
  data() {
    return {
      chartExtend: {
        title: this.titleV,
      }
    };
  },
  watch: {
    titleV(v_title) {
      // TODO 对象监听
      this.chartExtend.title = v_title;
    }
  }
};
</script>
