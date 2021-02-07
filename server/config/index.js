module.exports = {
	port: 4000,
	mongodb: {
		url: 'mongodb://localhost:27017/C317DataUI',
		options: {}
	},
	middleware:['handlerError'],
	jwt: {secret: 'C317'},
	crypto: {secret: '#*#*C317*#*#'},
	baseUrl: ''
}
