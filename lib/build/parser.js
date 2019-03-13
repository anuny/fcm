const glob = require('glob');
const path = require('path')
const fs   = require('fs')
const util = require('../util')

module.exports = {
	parse(){
		// 单页
		this.parsePages()
		// 文章
		this.parsePosts()
		util.log.success('> parsed');
	},
	parsePages(){
		let files = glob.sync(`${this.dir.source.pages}/*/index.md`)
	  files.forEach( file => {
	    const page = this.parseMd(file)
	    let route = this.router('page',page)
	    Object.assign(page,route)
	    this.data.pages.push(page)
	    this.data.count.page++
	  });
	},
	parsePosts(){
		let files = glob.sync(`${this.dir.source.posts}/*/*/index.md`)
	  files.forEach( file => {

	    
	    const dirname =  path.dirname(file)
	    const paths = dirname.split('/')

	    // 草稿
	    const fileName = paths[paths.length-1]
	    if(fileName.indexOf('@')===0){
	    	return
	    }

	    const post = this.parseMd(file)

	    // 分类为文件夹名称
	    post.category = paths[paths.length-2]

	    let route = this.router('post',post)
	    Object.assign(post,route)

	    this.parseCategory(post)
    	this.parseTag(post)
    	this.parseArchives(post)

      this.data.posts.push(post)
      this.data.count.post++
	  });

	  // 文章排序
	  this.data.posts = this.data.posts.sort((a,b)=>{
			let dateA = a.info.dater.date.stamp
			let dateB = a.info.dater.date.stamp
			return dateA<dateB
		});

	  // 渲染文章时，需要初步获取全部文章信息
		this.data.posts.forEach(post=>{
			this.data.categories[post.category].postIds.push(post.id)
			this.data.categories[post.category].postCahe.push(post)
		})

	},
	parseCategory(post){
		let name = post.category
		if(!this.data.categories[name]){
	    this.data.categories[name] = {
	    	name,
	    	postCahe:[],
	    	postIds:[],
	      posts:[],
	    }
	    this.data.count.category++
	  }
	  // 分类配置
		let configDir = path.resolve(`${this.dir.source.posts}`,name,'config.json')
		if(!fs.existsSync(configDir)){
			throw new Error(`"${configDir}" 文件不存在！`)
		}

	  let _config = require(configDir);
	  
	  // 分类路由
	  let route = this.router('category',this.data.categories[name])
	  Object.assign(this.data.categories[name],_config,route)
	},
	parseTag(post){
		let tags = post.info.tags

	  if(tags){
	    tags = tags.split(' ')
	  }else{
	  	tags = []
	  	post.tags = tags
	  }

	  tags.forEach(name=>{
	    if(!this.data.tags[name]){
	      this.data.tags[name]={
	      	name,
	      	title:name,
	      	posts:[]
	      }
	      let route = this.router('tag',this.data.tags[name])
	      Object.assign(this.data.tags[name],route)
	      this.data.count.tag++
	    }
	    post.tags = tags||[]
	  })
	},
	parseArchives(post){
		// 解析 archives
  	let daterInfo = post.info.dater.date.info
  	let dateArry = [daterInfo.year,daterInfo.month,daterInfo.day]
    let name = daterInfo.year

    if(!this.data.archivesMap[name]){
	    this.data.archivesMap[name] = {
	    	title:name,
	    	name,
	      posts:[]
	    }

	    let route = this.router('archive',this.data.archivesMap[name])
	    Object.assign(this.data.archivesMap[name],route)

	    this.data.archives.push({
	    	title:name,
	    	dater:util.dater(dateArry.join('-')),
	      dateArry,
	      name
	    });

	    this.data.count.archive++
	  }
	  post.archive = name
	},
	// 解析markdown
	parseMd(file){
		file = path.resolve(file)
		const parser = path.parse(file)
		const filePath = parser.dir.replace(this.dir.cwd,'')
	  let source  = fs.readFileSync(file).toString()
	  // 根据路径生成唯一UID
	  const id = util.md5(filePath)
	  const dirArr = parser.dir.split(path.sep)

	  // 替换静态资源地址
	  source = source.replace(/{{+\s*assets\s*}}/g,`${this.config.site.url}assets/${id}`)

	  // 解析内容信息
	  const page = util.matter(source);

	  // 文章name为文件夹名称
	  page.name = dirArr[dirArr.length-1]
	  page.id = id

	  page.sourcePath = file

	  // 日期格式化
    page.info.dater = util.dater(page.info.date)

    // 个性化模板
    page.template = page.info.template
	  return page
	}
}