const path = require('path')
const fs = require('fs')
const glob = require('glob');
const util = require('../util')
const url = require('url')
const crypto = require('crypto')
const md5 = function(str){
 const crypto_md5 = crypto.createHash('md5');
 crypto_md5.update(str, 'utf8');
 return crypto_md5.digest('hex');
}

module.exports = {
  create(){
    const usrConfigPath = path.resolve(this.dir.cwd,'config.json')
    if(fs.existsSync(usrConfigPath)){
      // 配置
      this.creatConfig(usrConfigPath)
      // 数据
      this.creatData()
      // 模板
      this.createTheme()
    }else{
      throw new Error('配置文件不存在！');
    }
    util.log.success('> created');
  },

  // 获取所有模板并缓存
  createTheme(){
    this.templates = {}

    if(!fs.existsSync(this.dir.theme)){
      throw new Error(`主题目录："${this.dir.theme}" 不存在！`);
    }

    glob.sync(`${this.dir.theme}/*.html`).forEach(file=>{
      const fileName = path.basename(file, '.html')
      const content = fs.readFileSync(file).toString()
      this.templates[fileName] = { path:file, content }
    })
  },
  creatData(){
    this.data = {
      // 首页列表
      list:[],
      // 单页
      pages:[],
      // 文章
      posts:[],
      // 标签
      tags:{},
      // 分类
      categories:{},
      // 归档
      archivesMap:{},
      // 归档
      archives:[],
      // 站点信息
      site: this.config.site,
      // 菜单
      menus:this.config.menus,
      // 统计
      count:{
        page:0,
        post:0,
        tag:0,
        category:0,
        archive:0
      },
      author:this.config.author,
      updateTime:util.dater().format('YYYY-MM-DD hh:mm:ss:ms')
    }
    // 静态资源URL
    this.data.site.assets = this.config.site.url + 'assets'

    this.data.site.rss = url.resolve(this.config.site.url,'rss.xml')

  },
  creatConfig(usrConfigPath){
    // 默认配置
    const configPath = path.resolve(this.dir.lib, '../tpl/config.json')
    const config = require(configPath)

    // 用户配置
    const usrConfig = require(usrConfigPath)
    Object.assign(config,usrConfig)

    if(config.author.avatar=='gravatar' && config.author.mail){
      config.author.avatar = `//www.gravatar.com/avatar/${md5(config.author.mail)}?s=300&r=G&d=`
    }

    this.config = config

    // 路径设置
    Object.assign(this.dir,{
      source:{
        // 单页源码路径
        pages : path.resolve(this.dir.cwd, 'pages'),

        // 文章源码路径
        posts : path.resolve(this.dir.cwd, 'posts'),

        // 模板静态文件
        static : path.resolve(this.dir.cwd, 'theme', config.theme, 'static')
      },
      
      dist:{

        // 打包路径
        root: path.resolve(this.dir.cwd, 'dist'),

        // 页面静态文件路径
        assets: path.resolve(this.dir.cwd, 'dist/assets'),

        // 模板静态文件路径
        static:path.resolve(this.dir.cwd, 'dist/assets/static'),

        rss:path.resolve(this.dir.cwd, 'dist/rss.xml'),
      },

      // 模板路径
      theme : path.resolve(this.dir.cwd, 'theme', config.theme),
    })

    // 菜单
    if(this.config.menus){
      this.config.menus.forEach(menu=>{
        if(menu.type == 'home'){
          menu.url = this.config.site.url
        }
        if(menu.type == 'page'){
          menu.url = url.resolve(this.config.site.url,menu.name+this.config.extName)
        }
      })
    }
  }
}