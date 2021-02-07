<template>
  <el-form-item label="图表标题：">
    <el-input
        placeholder="在这里修改标题内容"
        v-model="tempText"
    >
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-titleV",
  props: {
    titleV: Object,
  },
  data() {
    return {
      tempText: this.titleV.text,
    };
  },
  watch: {
    titleV() {
      this.tempText = this.titleV.text;
    },
    tempText() {
      let title= {
        text: this.tempText,
        x: "middle", //在图片中的x轴位置 left, right, middle
        y: "bottom", //在图片中的y轴位置 top, bottom
        textAlign: "center", //整体（包括 text 和 subtext）的水平对齐 auto, left, right, center
        textStyle: {
          fontSize: 12,
        }
      }
      // TODO 这里传递值
      this.$emit("update:titleV", title);
    }
  },
};
</script>

<style scoped>
</style>
