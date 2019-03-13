---
title:文章2
desc:测试简介
template:post
date:2018-11-06
tags:技术 无聊

---

在我印象中，乙一一直是一位传奇「作家」，他的作品并不多，但只要搜索「日本有哪些著名推理作家」，他总是很容易进入视线。

这是一位没有流派的作家，你也可以理解为：我不觉得他的作品适合被划分到哪个流派。这一点，东野圭吾也是一样。不同的是，东野圭吾是一个尽可能尝试多种类型的试验派作家。乙一，则是贯彻如一的味道，哪怕纵横现实与幻想。拿起他的文字，读完后，头脑里、心肺里沉淀着久久不能散去的味道，一嗅，便知来自乙一。

<!-- more -->

``` javascript
const rMatter = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/
const rExcerpt = /<!--+\s*more\s*--+>/i;

const marked = require('marked')
marked.setOptions({
  gfm: true,
  langPrefix: 'language-'
})

function matter(source) {
	let ret,data,excerpt
  let content = source.replace(/\r/g,'')
  if (rMatter.test(content)){
    const match = content.match(rMatter);
    data = match[2]
    content = match[3] || ''
  }

  content = marked(content)

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
    return ret
  }
  data = data.trim()+'\n'
  let info = {}
  const matchs = data.match(/(.*)\n/g);
  matchs.forEach( match => {
    match = match.trim()
    let arr = match.split(':')
    info[arr[0]] = arr[1].replace('\n','')
  })
  if(!info.date){
    info.date = new Date();
  }
  ret.info = info
  return ret
}

module.exports = matter
```

文章正文