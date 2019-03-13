const Emitter = require('events');
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra');
const util = require('./util')
const server = require('./server')

function Fcm (lib, cwd){
	this.dir = { lib, cwd }
}

Fcm.prototype = {
	call(cmd){
		if(!cmd) {
			util.log.warn('please enter "init" or "build"')
			return;
		}
		let _cmd;
		['init','build','server'].forEach(name=>{
			if(cmd.length===1){
				(cmd === name.charAt(0)) && (_cmd = name)
			}else{
				(cmd === name) && (_cmd = name)
			}
		})
		_cmd && this[_cmd]()
		this.cmd = _cmd
	},
	server(){
		const dist = path.resolve(this.dir.cwd, 'dist')
		const config = path.resolve(this.dir.cwd,'config.json')
		let port
    if(fs.existsSync(config)){
    	port = require(config).port
    }
    try {
    	server({
    		root:dist,
    		default:`index${config.extName||'.html'}`
    	}).listen(port||8080)
    	
    	util.log.success(`visit http://localhost:${port||8080}`);
    } catch (err) {
      console.log(err);
    }
	},

	init(){
		const usrConfigPath = path.resolve(this.dir.cwd,'config.json')
	  if(fs.existsSync(usrConfigPath)){
	  	util.log.error('Error:项目已经存在，请删除项目后重新创建！')
	  	process.exit(1); 
	  }
		this.dir.tpl = path.join(this.dir.lib,'../tpl')
		fse.copySync(this.dir.tpl, this.dir.cwd);
		util.log.success('project is inited');
	}
}
Object.assign(Fcm.prototype, require('./build'))
module.exports = Fcm