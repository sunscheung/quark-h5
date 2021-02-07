<template>
    <dv-border-box-9
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
    </dv-border-box-9>
</template>

<script>
export default {
  name: "C317Border9D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 370,
        width: 930
      })
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(217,0,255)'])
    }
  }
};
</script>
