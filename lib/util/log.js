const chalk = require('chalk')

function log(msg){
	console.log(msg);
}

log.warn = (msg)=>{
	console.log(chalk.yellow(msg));
}
log.error = msg => {
	console.log(chalk.red(msg));
}
log.success = msg => {
	console.log(chalk.green(msg));
}

module.exports = log