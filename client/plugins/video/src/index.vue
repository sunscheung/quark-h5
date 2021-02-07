<!--
 * @Author: 张旭
 * @Date: 2021-01-14 16:06:59
 * @LastEditTime: 2021-02-03 17:18:27
-->
<!--test.vue-->
<template>
  <div class="qk-video" style={style}>
    <div v-if="useIframe" ref="iframeWrapper"><img :src="playIcon" width="100%" height="100%" />
    </div>
      <video v-else playsinline="true" webkit-playsinline="" width="100%" height="100%" :poster="playIcon" ref="videoTag" controls>
            <source type="video/mp4" src="src" />
      </video>
  </div>
</template>

<script>
  import playIcon from './play.svg'
	export default {
		name: 'QkVideo', // 这个名字很重要，它就是未来的标签名<qk-video></qk-video>
		props: {
			src: {
        type: String,
        default: `http://vali-g1.cp31.ott.cibntv.net/youku/6974b3209cb4b71f9b75e5575/03000801005FFEF8B29121C28EBD90CF83767B-57E7-4325-9471-52590A4DF8ED.mp4?sid=161234382000010009297_00_B8cd75d0aa59fe8c2cdefaa50317ecf34&sign=7fed9358780c878809985163e9fa2629&ctype=50&si=183&psid=bebeb3480475b6a5a788feadd2b0f86247dbb`,
        editor: {
          type: 'lbs-video-gallery',
          label: '视频2',
          props: {
            type: 'textarea'
          }
        }
      },
      disabled: { 
        label: 'disabled',
        type: Boolean,
        default: false
      },
      useIframe: { 
        label: '使用iframe',
        type: Boolean,
        default: false
      },
      iframeSrc: {
        default: '',
        label: 'iframe 地址',
        props: {
          type: 'textarea',
          placeholder: '只有使用iframe打开的时候，这个才有效'
        },
        extra: () => {
          return '「使用iframe」打开的时候，这个才有效；上传视频请忽略该配置'
        }
      }
    },
    watch: {
      src () {
        this.appendIframe()
      },
      disabled () {
        this.appendIframe()
      },
      useIframe () {
        this.appendIframe()
      },
      iframeSrc () {
        this.appendIframe()
      }
    },
    mounted () {
      this.appendIframe()
    },
    methods: {
      appendIframe () {
        if (this.useIframe && this.iframeSrc) {
          this.$refs.iframeWrapper && (this.$refs.iframeWrapper.innerHTML = this.iframeSrc)
        }
      }
    },
    data(){
			return {
				playIcon: playIcon
      }
    }
	}
</script>

<style lang="scss" scoped>
.qk-video {
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
