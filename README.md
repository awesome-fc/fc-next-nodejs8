# fc-next-nodejs8
<a name="WNjE0"></a>
## 背景

next.js 是一种 React 的服务端渲染框架，且 next.js 集成度极高，框架自身集成了 webpack、babel、express 等，使得开发者可以仅依赖 next、react、react-dom 就可以非常方便的构建自己的 SSR React 应用，开发者甚至都不用像以前那样关心路由。<br />
<br />next.js 的高度集成性，使得我们很容易就能实现代码分割、路由跳转、热更新以及服务端渲染和前端渲染。<br />
<br />next.js 可以与 express、koa 等服务端结合使用。为了能让 next.js 在函数计算运行，首先需要让 next.js <br />在 express 中运行起来，然后再移植 express 到函数计算中运行。express 应用移植相关文章：

- [开发函数计算的正确姿势——移植 Express](https://yq.aliyun.com/articles/703320)
- [移植 express.js 应用到函数计算](https://yq.aliyun.com/articles/703317)
- [next.js 运行在 express 中](https://spectrum.chat/zeit/now/custom-express-server-next-js-example~f4c2214d-03d1-4df6-9a9a-e3346c7b9bec)

现在，我们提供了一个 fun 模块，通过该模板，三分钟就可以让 next.js 应用在函数计算中运行起来。效果如下：

![nextjs](https://yqfile.alicdn.com/c6678a13034445ee0b888eb79c7e9267bb359b3d.gif)

<a name="j8nW7"></a>
## 快速开始

<a name="f0WMI"></a>
#### 1. 安装 node

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
nvm install 8
```

<a name="akT1c"></a>
#### 2. 安装 fun 工具

```bash
npm install @alicloud/fun -g
```

fun 工具的某些子命令可能会用到 docker，所以你需要安装好 docker，具体参考文档：[Fun 安装教程](https://github.com/aliyun/fun/blob/master/docs/usage/installation-zh.md)。

<a name="buYgl"></a>
#### 3. 通过 fun 模板生成项目

```bash
fun init -n demo https://github.com/muxiangqiu/fc-next-nodejs8.git
```

项目生成好后，在根目录下有个 README.md 文件，阅读该文件可以帮你快速了解项目骨架为你做了什么，以及相关的命令。具体详情：[README.md](https://github.com/muxiangqiu/fc-next-nodejs8/blob/master/%7B%7B%20projectName%20%7D%7D/README.md)。

<a name="7UWYu"></a>
#### 4. 安装依赖

```bash
cd demo # 切换到项目根下面，后面的所有命令，都是在项目根下面执行
npm install
```

<a name="Bm8eG"></a>
#### 5. 本地运行 next.js

```bash
npm run dev
```

<a name="A5hhg"></a>
#### 6. 编译 next.js 

```bash
npm run build
```

<a name="5nJzC"></a>
#### 7. next.js 在本地函数中运行

```bash
npm run start
```

<a name="LVQl9"></a>
#### 8. 部署函数到云端

部署函数的时候需要用到 AK 等下信息，可以通过 `fun config` 来配置，如果配置过请忽略，部署函数命令如下：
```bash
npm run deploy
```


<a name="87qCK"></a>
## 小结

该模板默认提供的是 http 触发器方式触发函数，同时也提供了 API 网关方式触发函数，只是与 API 网关的代码被注释掉了而已，其中，template.yml 文件与 API 网关相关的配置也被注释掉了。在模板项目中，提供了两个比较重要的文件：server.js 和 fc.js。server.js 负责 next.js 与 express 对接；fc.js 负责 express 与 express 对接。这两个文件一般情况下不需要修改。接下来，你就可以按照 next.js 标准方式开发 next.js 应用了。

<a name="MsAnv"></a>
## 相关链接

- [Fun Init 自定义模板](https://yq.aliyun.com/articles/674364)
- [移植 express.js 应用到函数计算](https://yq.aliyun.com/articles/703317)
- [开发函数计算的正确姿势——移植 Express](https://yq.aliyun.com/articles/703320)
- [开发函数计算的正确姿势 —— 使用 Fun Init 初始化项目](https://yq.aliyun.com/articles/674363)
- [next.js 运行在 express 中](https://spectrum.chat/zeit/now/custom-express-server-next-js-example~f4c2214d-03d1-4df6-9a9a-e3346c7b9bec)