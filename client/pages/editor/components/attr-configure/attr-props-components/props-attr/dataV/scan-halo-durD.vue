<template>
  <el-form-item style="margin:0">
    扫描动画时长(秒)：
    <el-input-number
        v-model="scanHaloDur.scanDur"
        @change="change1"
        :precision="1"
        :step="0.1"
        :min="0.1"
        controls-position="right"
        size="mini"
        style="width: 90px;"
    ></el-input-number>
    <br/>
    光晕动画时长(秒)：
    <el-input-number
        v-model="scanHaloDur.haloDur"
        @change="change2"
        :precision="1"
        :step="0.1"
        :min="0.1"
        controls-position="right"
        size="mini"
        style="width: 90px;"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-scanHaloDurD",
  props: {
    scanHaloDurD: Object,
  },
  data() {
    return {
      scanHaloDur:this.scanHaloDurD
    }
  },
  methods:{
    change1(d){
      this.scanHaloDur.scanDur=d
    },
    change2(d){
      this.scanHaloDur.haloDur=d
    }
  },
  watch: {
    scanHaloDurD() {
      this.scanHaloDur = this.scanHaloDurD;
    },
    scanHaloDur() {
      // TODO 这里传递值
      this.$emit("update:scanHaloDurD", this.scanHaloDur);
    },
  },
}
</script>

<style lang="less" scoped>
</style>
