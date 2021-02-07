<template>
  <div class="page-data-detail">
    <div v-for="(d,index) in pageData">
      <el-card>
        <div slot="header">
          <span>{{ '数据'+index }}</span>
        </div>
        <el-input :placeholder="JSON.stringify(d, null, '\t')"
                  type="textarea"
                  :rows="8"></el-input>
      </el-card>
    </div>
    <notFundData v-if="pageData.length===0"/>
  </div>
</template>

<script>
	import notFundData from '@client/components/notFundData'
	export default {
		components: {
			notFundData
		},
    data() {
      return {
        id: '',
        pageList:[],
        pageData:[],
      }
    },
    created() {
      this.id = this.$route.query.id || '';
      this.initPageData();
    },
    methods:{
      /**
       * 获取指定页面的数据
       */
      initPageData() {
        this.$API.getPageDetail({pageId: this.id}).then(res => {
          this.pageList=res.body.pages;
          this.getPageData(this.pageList);
        }).catch(() => {
        })
      },
      getPageData(pageList){
        let data=[];
        pageList.forEach(item=> {
          item.elements.forEach(ele => {
            if (ele.propsValue.chartDataV) {
              data.push({
                name: ele.uuid,
                data: ele.propsValue.chartDataV
              })
            }
          })
        })
        this.pageData=data;
      }
    }
	}
</script>

<style scoped>
  .page-data-list{
    height: 100%;
  }
</style>
