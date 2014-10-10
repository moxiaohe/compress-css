var compressCss = require('./lib/')

compressCss('test/style.css', function(){
	console.log('style.css compressed OK!');
});