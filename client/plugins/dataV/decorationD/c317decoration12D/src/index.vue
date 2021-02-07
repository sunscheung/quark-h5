<!--button.vue-->
<template>
    <dv-decoration-12
        :color="colorD"
        :scanDur="scanHaloDurD.scanDur"
        :haloDur="scanHaloDurD.haloDur"
        :style="{width:resize.width+'px',height:resize.height+'px'}"/>
</template>

<script>
export default {
  name: "C317Decoration12D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 155,
        width: 155
      })
    },
    scanHaloDurD:{
      type:Object,
      default:()=>({
        scanDur:3,
        haloDur:2
      })
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(40,105,253)', 'rgb(35, 95, 167)'])
    }
  }
};
</script>
