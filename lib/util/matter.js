//const rMatter = /^(={3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/
const rMatter = /<!--\n([\s\S\r\n]*?)\n--+>/i
const rExcerpt = /<!--+\s*more\s*--+>/i;
const marked = require('marked')
// const prism = require('prismjs');

marked.setOptions({
  // GitHub标准
  gfm: true,

  // 回车换行
  breaks:true,
  langPrefix: 'language-',
  // highlight(code, lang) {
  //   console.log(prism.highlight(code, Prism.languages[lang], lang));
  //   return prism.highlight(code, Prism.languages[lang], lang)
  // }
})

function matter(source) {
	let ret,data,excerpt
  let content = source.replace(/\r/g,'')

  content = content.replace(rMatter,($1,$2,$3)=>{
    data = $2
    return ''
  })

  // 获取文章信息
  // if (rMatter.test(content)){
    
  //   const match = content.match(rMatter);
  //   console.log(match);

    
  //   data = match[2]
  //   content = match[3] || ''
  // }

  // 编译
  content = marked(content)

  // 获取more标记
  if (rExcerpt.test(content)) {
    content = content.replace(rExcerpt, (match, index) => {
      excerpt = content.substring(0, index).trim();
      return ''
    });
  }

  ret = {
    source,
  	content,
  	excerpt
  }

  if (!data){
    ret.info = {
      title:'无标题文档',
      date:new Date()
    }
    return ret
  }
  data = data.trim()+'\n'

  

  let info = {}
  const matchs = data.match(/(.*)\n/g);

  matchs.forEach( match => {
    match = match.trim()
    let arr = match.split(':')
    let name=arr.shift();
    name = name.trim();
    let value = arr.join(':')
    value = value.trim()
    info[name] = value.replace('\n','')
  })

  if(!info.date){
    info.date = new Date();
  }
  ret.info = info
  return ret
}

module.exports = matter