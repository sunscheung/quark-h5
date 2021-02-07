/**
 * images lib 相关
 * @param app
 * @returns {{corsproxy(): Promise<void>}}
 */
module.exports = app => ({
	/**
	 * 获取我的图片列表
	 * @returns {Promise<void>}
	 */
	async getMyImages(){
		const { $service, $helper } = app;
		const imageList = await $service.image.getMyImages();
		$helper.returnBody(true, imageList)
	},
	/**
	 * 上传我的图片
	 * @returns {Promise<void>}
	 */
	async uploadImage(){
		const { ctx, $service, $helper } = app;
		let userData = ctx.userData;
		// 时间戳
		let timestamps = (new Date().getTime()).toString();
		let file = ctx.request.files.file;
		let fileResult = await $service.file.upload(file, 'image_lib/' + userData.username + '/' + timestamps);
		const imageData = await $service.image.addImage(fileResult.url);
		$helper.returnBody(true, imageData)
	},
	/**
	 * 删除我的图片
	 */
	async deleteImage() {
		const { ctx, $service, $helper } = app;
		let {data} = ctx.request.body;
		await $service.file.delete(data.url);
		await $service.image.deleteImage(data._id);
		$helper.returnBody(true)
	}
})
