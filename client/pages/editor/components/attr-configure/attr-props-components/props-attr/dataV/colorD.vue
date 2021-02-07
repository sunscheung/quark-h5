<template>
  <el-form-item label="修改颜色：">
    <div v-for="(item,index) in color">
      <el-color-picker
          style="float: left;margin-right: 4px;top: 6px"
          size="mini"
          v-model="color[index]"
      ></el-color-picker>
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-colorD",
  props: {
    colorD: Array,
  },
  data() {
    return {
      color:this.colorD
    }
  },
  watch: {
    colorD() {
      this.color = this.colorD;
    },
    color() {
      // TODO 这里传递值
      this.$emit("update:colorD", this.color);
    },
  },
}
</script>

<style lang="less" scoped>
</style>
