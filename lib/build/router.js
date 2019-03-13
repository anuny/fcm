const path = require('path')
const util = require('../util')
const Url = require('url')

const routes = {

	// 首页
	home:'index',

	// 首页分页 
	home_posts:'p/[pageNum]',

	// 单页
	page:'[name]',

	// 文章
	post:'post/[id]',

	// 分类
	category:'[name]/index',

	// 分类分页
	category_posts:'[name]/p/[pageNum]',

	// 标签
	tag:'tag/[name]/index',

	// 标签分页
	tag_posts:'tag/[name]/p/[pageNum]',

	// 归档
	archive:'archive/[name]/index',

	// 归档分页
	archive_posts:'archive/[name]/p/[pageNum]'
}

module.exports = {
	router(type, page){
		let route = routes[type]
		if(route){
			let filePath = route.replace(/\[(.*?)\]/g, (match, key) => page[key]) + this.config.extName;
			let url = filePath
			let parser = path.parse(url)

			if(parser.name === 'index'){
				url = url.replace(`${parser.base}`,'')
			}

			url = Url.resolve(this.config.site.url,url)

			let id = page.id || util.md5(url)

			return {

				// 页面UID
				id,

				// 页面路径
				path:path.resolve(this.dir.dist.root, filePath),

				// 页面地址
				url
			}
		}
	}
}