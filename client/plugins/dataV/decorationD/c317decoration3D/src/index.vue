<!--button.vue-->
<template>
    <dv-decoration-3
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}"/>
</template>

<script>
export default {
  name: "C317Decoration3D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 50,
        width: 200
      })
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(35, 95, 167)'])
    }
  }
};
</script>
