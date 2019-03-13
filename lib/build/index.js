const util = require('../util')

const exp = {
	build(){
		new Promise(()=>{
			// 创建
			this.create()
			// 解析
			this.parse()
			// 编译
			this.compile()
			// 渲染
			this.dist()
		}).catch(err=>{
			util.log.error(err)
		})
	}
}
Object.assign(
	exp,
	// 渲染
	require('./render'),
	// 路由
	require('./router'),
	// 配置
	require('./creater'),
	// 解析
	require('./parser'),
	// 编译
	require('./compiler'),
	// 打包
	require('./dister')
)

module.exports = exp