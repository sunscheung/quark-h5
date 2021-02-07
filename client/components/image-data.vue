<template>
  <div class="components-image-libs-wrapper">
    <div class="components-image-libs">
      <div class="image-lib-side-bar">

      </div>
      <div class="image-lib-inner">
        <div class="image-lib-btn">
          <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :before-upload="beforeUpload"
              accept="jpg,png,gif"
              :show-file-list="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip marginL20">只能上传jpg/png/gif文件，且不超过2M</span>
          </el-upload>
        </div>
        <el-scrollbar class="image-list-wrapper scroll-wrapper" v-if="imageList.length">
          <div class="image-item" v-for="(item, index) in imageList" :key="index" @click="handleImageClick(item)">
            <img :src="item.url" alt="">
          </div>
        </el-scrollbar>
        <NotFundData v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import NotFundData from "@/components/notFundData";
export default {
  name: "image-data",
  components: {NotFundData},
  data() {
    return {
      uploading: false,
      hasLoadData: false,
      imageList: [],
      selectId: ''
    }
  },
  created() {
    this.getMyImages();
  },
  methods: {
    beforeUpload(file) {
      if (file.size > 1 * 1024 * 1024) {
        this.$message.error('不能超过1M！')
        return;
      }
      let temp1 = file.name.split('.')
      let temp = temp1[temp1.length - 1]
      if (!['jpg', 'png', 'gif'].includes(temp)) {
        this.$message.error('请上传jpg/png/gif文件')
        return false;
      }
      this.uploadImages(file);
      return false;
    },
    //上传图片
    uploadImages(file) {
      let params = new FormData()
      params.append('file', file);
      this.uploading = true;
      this.$API.uploadImage(params).then(res => {
        this.uploading = false;
        this.imageList.splice(0, 0, res.body)
      }).catch(() => {
        this.uploading = true;
      })
    },
    //获取图片
    getMyImages() {
      this.hasLoadData = true;
      this.$API.getMyImages().then(res => {
        this.imageList = res.body || [];
      })
    },
    /**
     * 点击图片
     * @param url
     */
    handleImageClick(url) {
      this.delete(url);
    },
    // 删除
    delete(data) {
      this.$alert('确认删除该图片？删除后，部分页面图片可能无法显示?', '操作提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$API.deleteImage({data: data}).then(() => {
          this.$message.success('删除成功！');
          this.getMyImages();
          this.$emit('refresh')
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.image-list-wrapper{
  height: 100%;
  padding-top: 40px;
  .image-item{
    width: 180px;
    height: 180px;
    float: left;
    background: #eee 50%/contain no-repeat;
    cursor: pointer;
    justify-content:center;
    align-items:center;
    display: flex;
    transition: all 0.28s;
    margin: 5px;
    &:hover{
      box-shadow: 0 0 16px 0 rgba(0,0,0,.16);
      transform: translate3d(0,-2px,0);
    }
    img{
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }

  }
}
</style>
<style lang="scss">
.components-image-libs-wrapper{
  padding: 32px;
}
</style>
