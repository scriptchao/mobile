# mobile
my first mobile repository
## 在远程git服务器上创建一个代码仓库
1. 点击repositories选项卡
2. 点击右侧的new按钮
3. 输入该代码仓库的基本j信息
4. 完成创建

## 将此代码仓库克隆到本地
1. 在git shell命令行中使用`git clone URL` 克隆至本地 默认在克隆至命令行当前d所在文件夹中

## 作为nmp项目初始化
1. cd进入当前项目，然后在cmd命令行中使用npm init,根据提示完成package.json的创建，其中git repository 选项的值就是当前项目git仓库地址

## 创建node_modules文件夹
1. 后续通过npm install的依赖将会自动安装到这个文件夹中

## 配置产品环境以及开发环境的文件架构
1. node_modules

## 创并编辑.gitignore文件
1. 忽略一些不必要提交到代码仓库的开发环境代码等，比如node.modules文件夹以及开发环境文件夹develop是不需要提交到代码仓库中的，c则可以将这两个文件夹名称添加至.gitignore中

## 安装并使用构建工具gulp
1. `npm install gulp --save-dev` y通过npm安装gulp构建工具，并且添加为开发环境的l依赖
2. 创建gugulpfile.js文件至项目根目录，通过仿照gulp所在的github仓库提供的内容进行 编辑图片压缩，js压缩以及stylus编译并压缩和监听文件变化的任务
3. 全局安装gulp使之成为可以被cmd命令 执行的软件 `npm install gulp -g`
4. `npm install 开发模块名称 --save-dev` 安装gulpfile.js中所需要的开发模块的依赖
5. cmd命令执行gulp

## 将本地c初始化好的整个i项目通过git推送至远程代码仓库

1. 在git shell中使用`git add *`将项目中所有未被.gitignore的文件添加至即将上传至本地仓库的缓冲区
2. `git status`查看缓冲区的即将被上传的文件
3. （\*）`git reset`g如果发现`git add`操作j添加有误，可以使用此命令回退
4. `git commit -m 'this is my first mobile project'`提交代码至本地并且书写提示注释
5. `git pull`如果远程仓库进行了修改，才需要将远程代码仓库中修改的内容同步拉取至本地代码仓库
6. `git push`提交代码至远程仓库
