<template>
<div class="page-data-list">
  <div class="page-search-wrapper bg-white">
    <el-tabs v-model="pageMode" @tab-click="handlePageModeClick">
      <el-tab-pane :name="item.value" :disabled="item.disabled" v-for="(item, index) in dataModeList" :key="index">
        <div slot="label"><span class="nav-tabs-label">{{item.label}}</span></div>
      </el-tab-pane>
    </el-tabs>
  </div>
  <imageData v-if="pageMode==='image'" />
  <notFundData v-if="pageMode==='data'"/>
</div>
</template>

<script>
  import imageData from '@client/components/image-data'
  import notFundData from '@client/components/notFundData'
	export default {
		components: {
			notFundData,
      imageData
    },
    data() {
      return {
        loading: false,
        pageList: [],
        myCount: 0,
        shareCount: 0,
        dataModeList: [],
        pageMode: 'image',
        previewId: '',
      }
    },
    created() {
      this.dataModeList = this.$config.dataModeList;
    },
    methods:{
      /**
       * 切换页面类型
       * */
      handlePageModeClick(val) {
        this.pageMode = val.name;
      }
    }
	}
</script>

<style scoped>
.page-data-list{
  height: 100%;
}

.nav-tabs-label {
  display: inline-block;
  padding: 0 16px;
  height: 60px;
  line-height: 60px;
}

.page-search-wrapper {
  padding: 0;

}
</style>
<style lang="scss">
.page-data-list {
  .page-search-wrapper {
    .el-tabs__header {
      margin: 0;
    }
    .el-tabs__nav-wrap {
      padding: 0 30px;
    }
  }
}
</style>
