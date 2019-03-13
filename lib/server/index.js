const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const mime = require('mime');

module.exports = function(opt){
	return http.createServer(function(request, response){

	  //获取输入的url解析后的对象
	  let pathName = url.parse(request.url).pathname;

	  pathName = decodeURI(pathName);

	  if (pathName.endsWith('/') || path.extname(pathName) === '') {
      pathName = url.resolve(pathName,opt.default)
    }

    let ext = path.extname(pathName);
    ext = ext ? ext.slice(1) : 'unknown';

    let contentType = mime.getType(ext) || "text/plain";

	  //获取资源文件绝对路径
	  const filePath = path.join(opt.root, pathName)
	  //异步读取file
	  fs.readFile(filePath, 'binary', function(err, fileContent){
	    if(err){
	      response.writeHead(404, { "content-type": "text/html" })
	      response.end('<h1>404 Not Found</h1>')
	    }else{
	    	response.writeHead(200, { "content-type": contentType+';charset=utf8' });
	      response.write(fileContent, 'binary')
	      response.end()
	    }
	  })
	})
}
