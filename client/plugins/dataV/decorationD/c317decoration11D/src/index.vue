<template>
    <dv-decoration-11
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
      {{text}}
    </dv-decoration-11>
</template>

<script>
export default {
  name: "C317Decoration11D", // 这个名字很重要，它就是未来的标签名
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
