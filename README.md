##compress-css
A tool for compress css file!

###How to use?

You need a Nodejs environment and NPM tool.

Then you can:
```
1. execute `npm install -g compress-css`;
2. when the package install successful, run the command `compress-css [the full path of the css file,liked:G:/project/style.css]` 
3. you can get a new file in the folder of the old css file, named ***.min.css
```

###What can we do?
for example,you han a css file named style.css like this:

```
/*
	This is a css file.
*/
p{ 
	margin: 4px    ;    
	text-indent: 12px;
	background:url(images/test.jpg) left top no-repeat;
	_background :     none;/* background ruls for shie6 */
}
span {
	margin : 4px ; 
	text-indent: 12px;
	background:url(images/test.jpg) left top no-repeat;
	_background: none;/* background ruls for shie6 */
 } 
```

when you compress it use the compress-css tool, you can get the compressed file named style.min.css,
content are those:
```
p{margin:4px;text-indent:12px;background:url(images/test.jpg) left top no-repeat;_background:none}span{margin:4px;text-indent:12px;background:url(images/test.jpg) left top no-repeat;_background:none}
``` 

###About author?
```
name:moxiaohe
work at:suning.com
email:21557622#qq.com(you know)
oh!welcome to contact me talk about F2E! 
```


