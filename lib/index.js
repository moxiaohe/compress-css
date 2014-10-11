var fs = require('fs');

function compresssCss(fileName, callback){
	// 未指定文件？
	if(!fileName){
		console.log('You must input a css file!');
	}

	// file exists?
	fs.exists(fileName,function(exists){
		if(!exists){
			console.log('%s is not exists!', fileName);
			return;
		}

		//is css file?
		var reg = /\.css$/i;
		if(!reg.test(fileName)){
			console.log('%s is not a css file!', fileName);
			return;
		}

		//read file
		fs.readFile(fileName, function(err, data){
			if(err){
				throw err;
			}
			var content = data.toString(),
				result = content.replace(/\/\*[\W\w]*?\*\//g, '')
								.replace(/\r\n/g, '')
								.replace(/\t/g, '')
								.replace(/\s{0,}{\s{0,}/g, '{')
								.replace(/\s{0,};\s{0,}/g, ';')
								.replace(/\s{0,}:\s{0,}/g, ':')
								.replace(/\s{0,}}\s{0,}/g, '}');//依次是删除注释、空行、tab缩进、{}:;前后的空格


			//get newFileName
			newFileName = fileName.replace(/\.css$/i, '.min.css');

			// write new file
			fs.writeFile(newFileName, result, function(err){
				if(err){
					throw err;
				}
				console.log('New css file writed OK!');

				//exec callback function
				if(callback){
					callback();
				}
			});
		})
	});
}

module.exports = compresssCss;