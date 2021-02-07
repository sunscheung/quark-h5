<template>
  <el-form-item style="margin:0">
    <div v-if="title.type">
      字体颜色：
      <el-color-picker
          style="margin-right: 4px;top: 8px"
          size="mini"
          v-model="title.titleColor"
      ></el-color-picker>
      <br/>字体大小：<el-input-number
        v-model="title.titleSize"
        :min="1"
        :max="100"
        :step="2"
        controls-position="right"
        size="mini"
        style="width: 80px;"
    ></el-input-number>
      &nbsp;&nbsp;粗细大小：<el-input-number
        v-model="title.fontWeight"
        :min="1"
        :max="1000"
        :step="100"
        controls-position="right"
        size="mini"
        style="width: 80px;"
    ></el-input-number>
    </div>
    <div>
      标题宽度：<el-input-number
        v-model="title.titleWidth"
        :min="1"
        :max="1000"
        :step="10"
        controls-position="right"
        size="mini"
        style="width: 100px;"
          ></el-input-number>
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-titleD",
  props: {
    titleD: Object,
  },
  data() {
    return {
      title: {}
    }
  },
  mounted() {
    this.title = this.titleD;
  },
  watch: {
    titleD() {
      this.title = this.titleD;
    },
    title() {
      // TODO 这里传递值
      this.$emit("update:titleD", this.title);
    },
  },
}
</script>

<style lang="less" scoped>
</style>
