const Swig    = require('swig');
Swig.setDefaults({cache: false});
const minify  = require('html-minifier').minify;

function parseSeo(page){

  let keywords=page.site.keywords||''
  let description = page.site.description||''

  let arr = []
  // 文章或单页
  if(page.type=='post'||page.type=="page"){
    arr.push(page.info.title)

    // 关键词
    if(page.info.keywords){
      keywords = page.info.keywords
    }else if(page.info.tags){
      keywords = page.info.tags.split(' ').join(',')
    }

    // 描述
    if(page.info.description){
      description = page.info.description
    }

  }else{
    let _title=''
    // 排除首页
    if(page.type!='home'){
      _title+=page.title
    }
    // 页码
    if(page.pagination.count){
      if(page.pagination.active>1){
        _title+=`[${page.pagination.active}]`
      }
    }
    if(_title!=''){
      arr.push(_title)
    }

    // 关键词
    if(page.keywords){
      keywords = page.keywords
    }
    // 描述
    if(page.description){
      description = page.description
    }
  }

  

  // 标题
  if(page.site.title){
    arr.push(page.site.title)
  }
  // 副标题
  if(page.site.subtitle){
    arr.push(page.site.subtitle)
  }
  let title = arr.join(' - ');

  page.seo = {
    title,
    keywords,
    description
  }
}

module.exports = {
  render(page){

    let template = this.templates[page.template];
    if(!template) {
      throw new Error(`模板文件 "${page.template}" 不存在！`);
    }
    
    try {
      // 预编译模板
      let compiler = Swig.compile(template.content,{
        filename:template.path
      })

      parseSeo(page);
      
      // 渲染页面
      let html = compiler(page)

      // 是否压缩页面
      if(this.config.minify){
        html= minify(html,{
          // 默认值false；是否去掉注释
          removeComments: true,
          // 默认值false；是否去掉空格
          collapseWhitespace: true,

          // 是否压缩html里的js
          minifyJS:true,

          // 是否压缩html里的css
          minifyCSS:true
        });
      }
      page.html = html
    } catch (err) {
      console.log(err);
    }
  }
}