/*
 * @Author: 张旭
 * @Date: 2020-12-14 17:30:59
 * @LastEditTime: 2021-01-15 16:22:32
 */
module.exports = {
	port: 4000,
	mongodb: {
		url: 'mongodb://localhost:27017/quark',
		options: {}
	},
	middleware:['handlerError'],
	jwt: {secret: 'huangwei9527'},
	crypto: {secret: '#*#*huangwei9527*#*#'},
	baseUrl: ''
}
