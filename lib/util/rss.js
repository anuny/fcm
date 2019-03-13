function rss(site,posts) {
  let date = new Date().toString()
  let xml = `
  <?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/">
    <channel>
    <title>${site.title}</title>
    <link>${site.url}</link>
    <atom:link href="${site.rss}" rel="self" type="application/rss+xml" />
    <language>zh-CN</language>
    <description>${site.description}</description>
    <lastBuildDate>${site.lastBuildDate||date}</lastBuildDate>
    <pubDate>${site.pubDate||date}</pubDate>
  `;
  posts.forEach(post=>{
    xml+=`
    <item>
    <title>${post.info.title}</title>
    <link>${post.url}</link>
    <guid>${post.id}</guid>
    <pubDate>${post.info.dater.date.string}</pubDate>`
    if(post.author){
      if(post.author.email){
        xml+=`<author>${post.author.email}</author>`
      }
      if(post.author.name){
        xml+=`<dc:creator>${post.author.name}</dc:creator>`
      }
    }
    xml+=`
    <description><![CDATA[
      ${post.info.description||post.content.substring(0,20)}
    ]]></description>
    <content:encoded xml:lang="zh-CN"><![CDATA[
      ${post.content}
    ]]></content:encoded>
    </item>`;
  })
  xml+= '</channel></rss>'
  return xml.trim()
}

module.exports = rss