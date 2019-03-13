const path = require('path')
const fs = require('fs')
const fse = require('fs-extra');
const util = require('../util')
const rm = require('rimraf')

module.exports = {
	dist(){
		rm(this.dir.dist.root, err => {
			if (err) throw err
			// 首页
			this.distIndex()
			// 单页
			this.distPages()
			// 文章
			this.distPosts()
			// 分类
			this.distCategories()
			// 标签
			this.distTags()
			// 文件
			this.distStatics()
			// rss
			this.distRss()
			util.log.success('> disted')
		})
	},
	distIndex(){
		let page = {
			name:'home',
			title:'首页',
			pageSize:this.config.pageSize
		}
		let pagePath = this.router('home',page)
		Object.assign(page,pagePath,this.data)
		page.posts = this.data.list
		page.template = 'index'
		page.type = 'home'
		this.distSplitPages(page)
	},
	distPages(){
		const pages = this.data.pages
		pages.forEach(page=>{
			fse.outputFileSync(page.path,page.html);
			this.distCopyAssets(page)
		})
	},
	// 复制主题静态文件
	distStatics(){
		fse.copySync(this.dir.source.static, this.dir.dist.static)
	},
	// 复制文章静态文件
	distCopyAssets(page){
		let filePath = path.dirname(page.sourcePath)
		let assetsPath = path.resolve(this.dir.dist.assets,page.id)
		fse.copySync(filePath, assetsPath)
	},
	distPosts(){
		const pages = this.data.posts
		pages.forEach(page=>{
			fse.outputFileSync(page.path,page.html)
			this.distCopyAssets(page)
		})
	},
	distCategories(){
		const pages = this.data.categories

		for(let name in pages) {
			let page = pages[name]
			let posts = page.posts
			page.template = 'list'
			page.pageSize = this.config.pageSize
			Object.assign(page,this.data)
			page.posts = posts
			page.type = 'category'
			this.distSplitPages(page)
		}
	},
	distTags(){
		const pages = this.data.tags
		for(let name in pages) {
			let page = pages[name]
			let posts = page.posts
			page.template = 'list'
			page.pageSize = this.config.pageSize
			Object.assign(page,this.data)
			page.posts = posts
			page.type = 'tag'
			this.distSplitPages(page)
		}
	},
	distRss(){
		let rss = util.rss(this.data.site,this.data.posts)
		fse.outputFileSync(this.dir.dist.rss,rss);
	},
	// 分页渲染
	distSplitPages(page){
		let total = page.posts.length;
		let size = page.pageSize||5
		let pages = util.chunk(page.posts,size);
    let count = pages.length;
    let type = page.type

    pages.forEach((posts,active)=>{
    	active++
    	let pagination = {
    		active,
    		total,
    		count,
    		size,
    		pages:[]
    	}

    	// 上一页
    	let prev = active-1
      if(prev > 0){
      	pagination.prev = {
      		num:prev
      	}
      	// 第2页的上一页为首页
      	if(active===2){
    			pagination.prev.url = this.router(`${type}`,{name:page.name}).url
    		}else{
    			pagination.prev.url = this.router(`${type}_posts`,{ pageNum:prev, name:page.name}).url
    		}
      }

      // 下一页
      let next = active+1
      if(next <= count){
      	pagination.next = {
      		url:this.router(`${type}_posts`,{ pageNum:next, name:page.name}).url,
      		num:next
      	}
      }



      let pageArray = util.pager(count,active,5);

      pageArray.forEach( num => {
      	let isActive
      	let url
      	if(num===active){
      		isActive = true
      	}
      	if(num!='...'){
      		// 第一页为首页
      		if(num===1){
      			url = this.router(`${type}`,{name:page.name}).url
      		}else{
      			url = this.router(`${type}_posts`,{ pageNum:num, name:page.name}).url
      		}
      	}
      	pagination.pages.push({
      		active:isActive,
      		url,
      		num
      	})
      })


      let child = {
      	type,
      	name:page.name,
      	title:page.title,
      	description:page.description,
      	slogen:page.slogen,
      	keywords:page.keywords,
        pagination,
        template:page.template||type
      };

      // 路由信息
      let pageRoute = this.router(`${type}_posts`,{ pageNum:active, name:page.name})

      Object.assign(child,pageRoute,this.data)
      child.posts = posts

      this.render(child)

      // 首页
      if(active===1) {
        fse.outputFileSync(page.path,child.html);
      }

      // 分页
      if(count>1 && active>1){
      	page.pageNum = active.toString()
	      let pagePath = this.router(`${type}_posts`,page).path
	      fse.outputFileSync(pagePath,child.html);
      }
    })
	}
}