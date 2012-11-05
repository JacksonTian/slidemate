slidemate 幻灯片伴侣
=================
## 来源
slidemate可以将符合一定规则的markdown文件生成为幻灯片。
## 安装
通过npm安装即可，注意带`-g`标志，如果没有权限，请加`sudo`：
```
npm install slidemate -g
```
## 使用
```
slidemate -f ./README.md
```
该命令会在文档的目录下生成slides目录，打开其中的index.html即可查看生成的幻灯片。  
你也可以通过`-o`指定输出目录。如：
```
slidemate -f ./README.md -o ~/output/
```
您可以点击[README](http://html5ify.com/slidemate)，查看本README.md生成的幻灯片。
## License
The MIT license。请自由享用。
