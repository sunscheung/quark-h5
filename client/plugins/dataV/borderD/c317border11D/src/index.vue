<!--button.vue-->
<template>
    <dv-border-box-11
        :title="text"
        titleColor="#7ec699"
        :titleWidth="titleD.titleWidth"
        :color="colorD"
        :style="{width:resize.width+'px',height:resize.height+'px'}">
    </dv-border-box-11>
</template>

<script>
export default {
  name: "C317Border11D", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 370,
        width: 930
      })
    },
    text: {
      type: String,
      default: "内容",
    },
    titleD:{
      type:Object,
      default:()=>({
        titleWidth:250,
        titleSize:28,
        titleColor:'#7ec699',
        fontWeight:700,
        type:false
      })
    },
    colorD:{
      type:Array,
      default:()=>(['rgb(79, 210, 221)', 'rgb(35, 95, 167)'])
    }
  }
};
</script>
