<template>
    <dv-capsule-chart
        :config="config"
        :style="{width:resize.width+'px',height:resize.height+'px'}"
      />
</template>

<script>
export default {
  name: "C317CapsuleD", // 这个名字很重要，它就是未来的标签名
  props: {
    resize:{
      type:Object,
      default:()=>({
        height: 180,
        width: 280
      })
    }
  },
  data() {
    return {
      config: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
      }
    }
  }
};
</script>
