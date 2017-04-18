//获取命令行传入的端口号
const args = process.argv;
const portArg = args.find(function(arg){
  return arg.indexOf('--port') >= 0;
})
const port = portArg && portArg.split('=')[1] || 80;

module.exports = port;