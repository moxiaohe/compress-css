#!/usr/bin/env node

var compressCss = require('../lib/'),
	fileName = process.argv[2];

compressCss(fileName, function(){
	console.log('style.css compressed OK!');
});