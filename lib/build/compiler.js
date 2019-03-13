const path = require('path')
const fs = require('fs')
const util = require('../util')

module.exports = {
	compile(){
		// 渲染文章
		this.compilePost()
		// 渲染单页
		this.compilePages()
		util.log.success('> compiled')
	},
	compilePages(){
		const pages = this.data.pages
		pages.forEach(page=>{
			if(!page.template){
				page.template = 'page'
			}
			page.type = 'page'
	    Object.assign(page,this.data)
			this.render(page)
		})
	},
	compilePost(){
		const datas = this.data
		const pages = datas.posts
		const pageLen = pages.length

		pages.forEach(page=>{
			let prev;
			let next;
			let category = page.category
			let tags = page.tags
			let archive = page.archive

			if(!page.template){
				page.template = 'post'
			}

			page.type = 'post'

			page.category = datas.categories[category]

			page.tag=[]
			tags.forEach(tag=>page.tag.push(datas.tags[tag]))

	    let index = page.category.postIds.indexOf(page.id)
	   
	    // 上一篇
	    page.prev = page.category.postCahe[index-1]

	    // 下一篇
	    page.next = page.category.postCahe[index+1]

	    Object.assign(page,this.data)

			// 渲染
			this.render(page)

			// 分类
			datas.categories[category].posts.push(page)

			// 归档
			datas.archivesMap[archive].posts.push(page)

			// 标签
			tags.forEach(tag=>{
				datas.tags[tag].posts.push(page)
			})

			// 首页
	    if(this.config.filter.indexOf(category) === -1){
	      datas.list.push(page);
	    }

		})

	  // 归档排序
    datas.archives = datas.archives.sort((a,b)=>{
			let dateA = a.dater.date.stamp
			let dateB = b.dater.date.stamp
			return dateA<dateB
		});

    datas.archives.forEach(archive=>{
			archive.posts = datas.archivesMap[archive.name].posts
		})
	}
}