<template>
    <dv-decoration-7
        style="width:100%;height:100%"
        :color="colorD"
        :key="key">
        {{text}}
    </dv-decoration-7>
</template>

<script>
export default {
  name: "C317Decoration7D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 50,
        width: 200
      })
    },
    text: {
      type: String,
      default: "内容",
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(35, 95, 167)'])
    }
  }
};
</script>
