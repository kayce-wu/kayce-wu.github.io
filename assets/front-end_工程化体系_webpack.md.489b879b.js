import{_ as s,c as n,o as a,a as l}from"./app.64019df4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"front-end/工程化体系/webpack.md"}'),p={name:"front-end/工程化体系/webpack.md"},e=l(`<h5 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h5><blockquote><p>webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。</p><p>在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理。</p><p>它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)</p><p>详情请访问：<a href="https://v4.webpack.docschina.org/" target="_blank" rel="noreferrer">https://v4.webpack.docschina.org/</a></p></blockquote><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220703194410747.png" alt="image-20220703194410747"></p><p><strong>webpack五个核心概念</strong></p><p><em><strong>1 Entry</strong></em></p><p>入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。</p><p><em><strong>2 Output</strong></em></p><p>输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。</p><p><em><strong>3 Loader</strong></em></p><p>Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件 (webpack 自 身 只 理 解</p><p>JavaScript、JSON)</p><p><em><strong>4 Plugins</strong></em></p><p>插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，</p><p>一直到重新定义环境中的变量等。</p><p><em><strong>5 Mode</strong></em></p><p>模式(Mode)指示 webpack 使用相应模式的配置。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220703194615590.png" alt="image-20220703194615590"></p><h5 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-hidden="true">#</a></h5><h6 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h6><p>1、初始化 package.json</p><p>​ 输入指令:</p><p>​ npm init</p><p>2、下载并安装 webpack</p><p>​ 输入指令:</p><p>​ npm install webpack@4.41.6 webpack-cli@3.3.11 -g （这是为了执行包的终端命令,webpack-cli的作用应该是处理打包的文件）</p><p>​ npm install webpack@4.41.6 webpack-cli@3.3.11 -D (这不是必须的，但是如果没有，那么项目就会去全局寻找，如果项目发给别人运行，就无法保证webpack版本一致)</p><p>​ <code>建议以这种方式安装（推荐）：</code></p><p>​ npm install webpack@4.41.6 webpack-cli@3.3.11 -D</p><p>​ 然后使用npx webpack运行</p><p>​ 为什么要局部和全局两次安装呢？</p><p>​ 答：</p><p>​ 全局安装的目的是为了可以使用webpack命令，这个命令它会去全局去找，不会在局部中的.bin找，我们也可以不全局安装，使用npx webpack也行，</p><p>​ 局部安装：局部安装是为了保存到package.json中，所以没有什么用，而全局安装是不会记录在项目package.json中的，</p><p>验证：当我局部和全局都安装webpack了,我在局部安装的webpack脚本加上一句</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301041437-165684898882132.png" alt="image-20210301041436910" style="zoom:67%;"><p>全局安装的webpack脚本也加上一句</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301041603-165684898882133.png" alt="image-20210301041602966" style="zoom:67%;"><p>执行命令webpack</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210301041758-165684898882131.png" alt="image-20210301041758167"></p><h6 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-hidden="true">#</a></h6><ol><li><p>创建文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210312180403-165684901491835.png" alt="image-20210226133412510"></p></li><li><p>运行指令</p><p>开发环境指令：webpack ./src/index.js -o ./build/built.js --mode=development</p><p>​ <code>功能：webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成</code></p><p>​ <code>浏览器能识别的语法。</code></p><p>生产环境指令：webpack ./src/index.js -o ./build/built.js --mode=production</p><p>功能：在开发配置功能上多一个功能，压缩代码。</p><p>index.js代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import data from &#39;./data.json&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">function add(x, y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return x + y;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(add(1, 2));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210312180357-165684901491834.png" alt="image-20210226133313700"></p></li><li><p>结论</p><p>webpack 能够编译打包 js 和 json 文件。</p><p>能将 es6 的模块化语法转换成浏览器能识别的语法。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210312180411-165684901491836.png" alt="image-20210226133751605"></p><p>能压缩代码。</p></li><li><p>问题</p><p>不能编译打包 css、img 等文件。</p><p>不能将 js 的 es6 基本语法转化为 es5 以下语法。</p><p>注：这时候webpack只能打包js/json，还不需要配置webpack配置，我们可以通过命令行配置出入口</p></li></ol><h5 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-hidden="true">#</a></h5><blockquote><p>module中的rules是从上到下执行的，rules中的use数组是从下到上执行的，plugin需要导入依赖，loader则不需要</p></blockquote><h6 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-hidden="true">#</a></h6><p><strong>创建基础配置文件</strong></p><ol><li><p>创建文件 webpack.config.js (作用：<code>当你运行webpakc指令时，指示webpack干哪些活</code>)</p></li><li><p>目录结构</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imglVoPnfz73Kx8Hb4.png" alt="image-20211026010016371"></p></li><li><p>配置内容如下</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     // node 内置核心模块，用来处理路径问题</span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 入口文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 输出配置 </span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 输出文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 输出文件路径配置,__dirname nodejs的变量，代表当前文件的目录绝对路径，这个配置的作用是会在当前目录(执行webpack命令的路径)下生成build文件夹，用于存放打包生成的资源</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">         //静态文件打包存放的目录。静态文件是指 img 的src ,link ，script 标签等所指向的文件。publicPath 是相对于path 所在的路径。是一个相对路径。</span></span>
<span class="line"><span style="color:#A6ACCD;">         //publicPath: &#39;./&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       //开发环境 </span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li><p>运行指令: webpack</p><p>在当前目前下新建了build文件夹，并且生成了built.js</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgYAw1L3MNcWoGu5B.png" alt="image-20211026005949869"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img8zb9vIRqWiD4JYT.png" alt="image-20211026010045313"></p></li></ol><p><strong>4. 结论: 此时功能与上节一致</strong></p><h6 id="publicpath" tabindex="-1">publicPath <a class="header-anchor" href="#publicpath" aria-hidden="true">#</a></h6><blockquote><p>静态文件打包存放的目录。静态文件是指 img 的src ,link ，script 标签等所指向的文件。publicPath 是相对于path 所在的路径。是一个相对路径。</p><p>这句话可能不太好理解，接下来一步步分析</p></blockquote><p>我们先来看下下面html文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgJ8rCOEn79Mg2e5b.png" alt="image-20211107232124411"></p><p>再来看下webpack的一些配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 问题：默认处理不了html中img图片</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.(jpg|png|gif)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 使用一个loader</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 下载 url-loader file-loader</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 当图片体积大于 8192 字节时，默认会使用 file- loader</span></span>
<span class="line"><span style="color:#A6ACCD;">             // （虽然代码没有配置 file - loader，但还是需要使用 npm i file - loader - D 安装），</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 并且会将配置的选项传递给 file - loader（也就是说上面可以配置 name、outputPath 等选项）</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 图片大小小于8kb，就会被base64处理</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 优点: 减少请求数量（减轻服务器压力）</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 缺点：图片体积会更大（文件请求速度更慢）</span></span>
<span class="line"><span style="color:#A6ACCD;">               limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 解析时会出问题：[object Module]</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 解决：关闭url-loader的es6模块化，使用commonjs解析</span></span>
<span class="line"><span style="color:#A6ACCD;">               esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 给图片进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">               // [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#A6ACCD;">               // [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;img&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 要使用多个loader处理用use</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后我们看下打包后的html</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgvBJ8tCykbOom4uF.png" alt="image-20211107232408194" style="zoom:80%;"><p><code>我们可以发现webpack并不在乎我们编写代码时的资源路径是多少，这个路径只是便于webpack找到对应的资源文件，</code></p><p><code>然后把资源文件复制到配置好的地方，如果我们配置了outputPath则会放置与outputPath，否则直接放在根目录，</code></p><p><code>然后我们引入资源文件的路径也会被改写，从../src/img/angular.jpg变成了img/9a4a32dc0c.jpg</code></p><p>那么output中的publicPath有什么作用呢？</p><p>我们加上publicPath看下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">         publicPath: &#39;/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>再次打包看下</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgAkU8peSInO1xiYF.png" alt="image-20211107233005925" style="zoom:80%;"><p>原来publicPath就是会在资源路径前缀加上去，/代表了服务器根目录，所以我们必须在服务器把build部署为根路径，否则会报错，</p><p>但是可以省略，或者写成&#39;./&#39;就好了，不过vue-cli的生产模式应该默认就是&#39;/&#39;，我们如果直接以live serve这种插件运行则会报错，因为这个插件的根目录是</p><p>以编译器打开的整个目录为服务器根目录的，所以这时我们可以通过把publicPath设为&#39;./&#39;解决该问题</p><p>详情可以参考：<a href="https://cli.vuejs.org/zh/config/#publicpath" target="_blank" rel="noreferrer">https://cli.vuejs.org/zh/config/#publicpath</a></p><h5 id="打包css-less资源" tabindex="-1">打包css/less资源 <a class="header-anchor" href="#打包css-less资源" aria-hidden="true">#</a></h5><ol><li><p>创建文件</p></li><li><p>下载安装 loader 包</p><p>打包css: npm i css-loader style-loader -D</p><p>打包less: npm i css-loader style-loader less-loader@5.0.0 less -D</p></li><li><p>修改配置文件</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       webpack.config.js  webpack的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">         作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // resolve用来拼接绝对路径的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // webpack配置</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 入口起点</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 输出</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 输出文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 输出路径</span></span>
<span class="line"><span style="color:#A6ACCD;">         // __dirname nodejs的变量，代表当前文件的目录绝对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       // loader的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 详细loader配置</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 不同文件必须配置不同loader处理</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 匹配哪些文件</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 使用哪些loader进行处理</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               // use数组中loader执行顺序：从右到左，从下到上 依次执行</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 创建style标签，将js中的样式资源插入进行，添加到head中生效</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;style-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 将css文件变成commonjs模块加载js中，里面内容是样式字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;css-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;style-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 将less文件编译成css文件</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 需要下载 less-loader和less</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       // plugins的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 详细plugins的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 模式</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;, // 开发模式</span></span>
<span class="line"><span style="color:#A6ACCD;">       // mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>运行指令: webpack</li></ol><h5 id="打包-html-资源" tabindex="-1">打包 HTML 资源 <a class="header-anchor" href="#打包-html-资源" aria-hidden="true">#</a></h5><ol><li><p>创建文件</p></li><li><p>下载安装 plugin 包</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev html-webpack-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>修改配置文件</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       loader: 1. 下载   2. 使用（配置loader）</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: 1. 下载  2. 引入  3. 使用</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     //打包html文件</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           // loader的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         // plugins的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">         // html-webpack-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 需求：需要有结构的HTML文件</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 复制 &#39;./src/index.html&#39; 文件，并自动引入打包输出的所有资源（JS/CSS）,默认复制到output目录</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4.运行指令: webpack</p><h5 id="打包图片资源" tabindex="-1">打包图片资源 <a class="header-anchor" href="#打包图片资源" aria-hidden="true">#</a></h5><ol><li><p>创建文件</p></li><li><p>下载安装 loader 包</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev html-loader@0.5.5 url-loader file-loader </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>修改配置文件</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         	//将HTML导出为字符串。当编译器需要时，HTML被最小化。</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 问题：默认处理不了html中img图片</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.(jpg|png|gif)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 使用一个loader</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 下载 url-loader file-loader</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 当图片体积大于 8192 字节时，默认会使用 file- loader</span></span>
<span class="line"><span style="color:#A6ACCD;">             // （虽然代码没有配置 file - loader，但还是需要使用 npm i file - loader - D 安装），</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 并且会将配置的选项传递给 file - loader（也就是说上面可以配置 name、outputPath 等选项）</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 图片大小小于8kb，就会被base64处理</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 优点: 减少请求数量（减轻服务器压力）</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 缺点：图片体积会更大（文件请求速度更慢）</span></span>
<span class="line"><span style="color:#A6ACCD;">               limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 解析时会出问题：[object Module]</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 解决：关闭url-loader的es6模块化，使用commonjs解析</span></span>
<span class="line"><span style="color:#A6ACCD;">               esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 给图片进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">               // [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#A6ACCD;">               // [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                // 输出文件夹，相对于build文件下</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;imgs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 要使用多个loader处理用use</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>运行指令: webpack</li></ol><p>注：这样能处理html和css中的图片</p><h5 id="打包vue组件" tabindex="-1">打包Vue组件 <a class="header-anchor" href="#打包vue组件" aria-hidden="true">#</a></h5><p>1、初始化项目</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgsmRUvexaQ9DpyNj.png" alt="image-20211114153529618"></p><p>2、安装所需依赖</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm i vue-loader vue-template-compiler -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3、在webpack.config.js配置文件中，添加vue-loader的配置项如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 注意这里引入路径</span></span>
<span class="line"><span style="color:#A6ACCD;">     const VueLoaderPlugin = require(&#39;vue-loader/lib/plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       //编译模式</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: path.join(__dirname, &#39;./main.js&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: path.join(__dirname, &quot;./dist&quot;),//输出文件的存放路径</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;bundle.js&#39;//输出文件的名称</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           filename: &#39;index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 虽然我也不知道为什么需要配置这行，但就是要配置</span></span>
<span class="line"><span style="color:#A6ACCD;">         new VueLoaderPlugin()</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       //所有第三方文件模块的匹配规则</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         	 { test: /\\.vue$/, use: &#39;vue-loader&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">           { test: /\\.css$/, use: [&#39;style-loader&#39;, &#39;css-loader&#39;] },</span></span>
<span class="line"><span style="color:#A6ACCD;">           { test: /\\.js$/, use: &#39;babel-loader&#39;, exclude: /node_modules/ },</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>运行效果：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgoz6TLmUlbcNhuZV.png" alt="image-20211114155418398"></p><h5 id="打包其他资源" tabindex="-1">打包其他资源 <a class="header-anchor" href="#打包其他资源" aria-hidden="true">#</a></h5><ol><li>创建文件</li></ol><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220422-165685003482948.png" alt="image-20210226142039333" style="zoom:80%;"><ol start="2"><li>修改配置文件</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          //!处理其他资源</span></span>
<span class="line"><span style="color:#A6ACCD;">      	 {</span></span>
<span class="line"><span style="color:#A6ACCD;">        		exclude: /\\.(js|css|less|html|jpg|png|gif|vue)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">       		 loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       		 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 当加载的图片小于limit时，会将图片编译成base64字符串形式</span></span>
<span class="line"><span style="color:#A6ACCD;">               //当加载的土拍你大于limit时，需要使用file-loader模块进行加载</span></span>
<span class="line"><span style="color:#A6ACCD;">               // [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#A6ACCD;">               //[name]是指原来的名字</span></span>
<span class="line"><span style="color:#A6ACCD;">               // [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[name].[hash:8].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 输出文件夹，相对于build文件下</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">     	 }</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 打包其他资源(除了html/js/css资源以外的资源)</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>运行指令: webpack</li></ol><h5 id="配置devserver" tabindex="-1">配置devserver <a class="header-anchor" href="#配置devserver" aria-hidden="true">#</a></h5><ol><li>创建文件</li></ol><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220426-165685003482946.png" alt="image-20210226142228647" style="zoom:80%;"><p>安装 npm i webpack-dev-server -D</p><ol start="2"><li>修改配置文件</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           // loader的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理less资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理css资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.(jpg|png|gif)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 关闭es6模块化</span></span>
<span class="line"><span style="color:#A6ACCD;">               esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;imgs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理html中img资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理其他资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             exclude: /\\.(html|js|css|less|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         // plugins的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       开发环境配置：能让代码运行</span></span>
<span class="line"><span style="color:#A6ACCD;">         运行项目指令：</span></span>
<span class="line"><span style="color:#A6ACCD;">           webpack 会将打包结果输出出去</span></span>
<span class="line"><span style="color:#A6ACCD;">           npx webpack-dev-server 只会在内存中编译打包，没有输出</span></span>
<span class="line"><span style="color:#A6ACCD;">       */</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 这里最好和项目构建后路径一样，把打包生成的目录设为根目录，只不过是模拟生成的而已</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 这里是根目录，静态资源都是相对于这个路径的</span></span>
<span class="line"><span style="color:#A6ACCD;">         contentBase: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 启动它gzip压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">         compress: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">         port: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 自动打开浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">         open: true</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>运行指令: npx webpack-dev-server</li></ol><p>webpack-dev-server还有其他很多妙用：比如代理处理跨域、热替换等等</p><p>1、代理处理跨域</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326090205-165685003482947.png" alt="image-20210326090205349" style="zoom:67%;"><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     //解决跨域问题</span></span>
<span class="line"><span style="color:#A6ACCD;">       devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         proxy: {  //配置跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">           &#39;/api&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             target: &#39;http://121.121.67.254:8185/&#39;,  //这里后台的地址模拟的;应该填写你们真实的后台接口</span></span>
<span class="line"><span style="color:#A6ACCD;">             changeOrigin: true,  //允许跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">             pathRewrite: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时</span></span>
<span class="line"><span style="color:#A6ACCD;">                 实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api</span></span>
<span class="line"><span style="color:#A6ACCD;">                */</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;^/api&#39;: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果是vue项目，我们应该写在vue.config.js中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       //解决跨域问题</span></span>
<span class="line"><span style="color:#A6ACCD;">       devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         proxy: {  //配置跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">           &#39;/api&#39;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             target: &#39;http://121.121.67.254:8185/&#39;,  //这里后台的地址模拟的;应该填写你们真实的后台接口</span></span>
<span class="line"><span style="color:#A6ACCD;">             changeOrigin: true,  //允许跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">             pathRewrite: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时</span></span>
<span class="line"><span style="color:#A6ACCD;">                 实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api</span></span>
<span class="line"><span style="color:#A6ACCD;">                */</span></span>
<span class="line"><span style="color:#A6ACCD;">               //这里是取出api</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;^/api&#39;: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>注意：如果使用代理，那么axios请求就不需要写域名和ip了，否则还会报错</code></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210326084618-165685003482945.png" alt="image-20210326084618241"></p><p><code>需要把域名端口去掉，或者加上和网页运行的域名端口，而不是服务器的域名和端口，服务器的端口和域名，代理会进行处理转发</code></p><p>热替换下面介绍</p><h5 id="开发环境配置" tabindex="-1">开发环境配置 <a class="header-anchor" href="#开发环境配置" aria-hidden="true">#</a></h5><p>1.创建文件</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210505220429-165685003482949.png" alt="image-20210226142313243" style="zoom:80%;"><ol start="2"><li><p>修改配置文件</p><p>webpack.config.js</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           // loader的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理less资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理css资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [&#39;style-loader&#39;, &#39;css-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.(jpg|png|gif)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 关闭es6模块化</span></span>
<span class="line"><span style="color:#A6ACCD;">               esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;imgs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理html中img资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 处理其他资源</span></span>
<span class="line"><span style="color:#A6ACCD;">             exclude: /\\.(html|js|css|less|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         // plugins的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       开发环境配置：能让代码运行</span></span>
<span class="line"><span style="color:#A6ACCD;">         运行项目指令：</span></span>
<span class="line"><span style="color:#A6ACCD;">           webpack 会将打包结果输出出去</span></span>
<span class="line"><span style="color:#A6ACCD;">           npx webpack-dev-server 只会在内存中编译打包，没有输出</span></span>
<span class="line"><span style="color:#A6ACCD;">       */</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         contentBase: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 启动它gzip压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">         compress: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">         port: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 自动打开浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">         open: true</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>package.json</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     {</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;name&quot;: &quot;development&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;description&quot;: &quot;开发环境搭建&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;build&quot;: &quot;webpack&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;serve&quot;: &quot;webpack-dev-server&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;css-loader&quot;: &quot;^5.1.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;file-loader&quot;: &quot;^5.1.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;html-loader&quot;: &quot;^0.5.5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;html-webpack-plugin&quot;: &quot;^3.2.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;less&quot;: &quot;^4.1.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;less-loader&quot;: &quot;^5.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;style-loader&quot;: &quot;^2.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;url-loader&quot;: &quot;^3.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;webpack&quot;: &quot;^4.41.6&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;webpack-cli&quot;: &quot;^3.3.11&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;webpack-dev-server&quot;: &quot;^3.10.3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>运行指令: npx webpack-dev-server 打包使用webpack</p><h5 id="生产环境" tabindex="-1">生产环境 <a class="header-anchor" href="#生产环境" aria-hidden="true">#</a></h5><h6 id="提取css-less成单独文件" tabindex="-1">提取css/less成单独文件 <a class="header-anchor" href="#提取css-less成单独文件" aria-hidden="true">#</a></h6><ol><li><p>下载安装包</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302141929-165685142800351.png" alt="image-20210302141928999"></p></li></ol><p>2.下载插件</p><p>​ npm install --save-dev mini-css-extract-plugin</p><ol start="3"><li>修改配置文件</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">               // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">               // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">               MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;css-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">               // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">               // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">               MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">           filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4 .运行指令: webpack</p><h6 id="css兼容性处理" tabindex="-1">css兼容性处理 <a class="header-anchor" href="#css兼容性处理" aria-hidden="true">#</a></h6><p>1.创建文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302144903-165685142800350.png" alt="image-20210302144902972"></p><p>2.下载 loader</p><p>npm install --save-dev postcss-loader postcss-preset-env</p><p>3.修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">               // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">               // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">               MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               //css兼容性处理</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                     // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                     require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               }</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">               // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">               // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">               MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">               // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 ident: &#39;postcss&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">                 plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                     // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                     require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">           filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li><p>修改 package.json</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 做兼容性处理需要在package.json定义该字段，以指示postcss插件如何做兼容性处理</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;browserslist&quot;: { </span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;development&quot;: [ &quot;last 1 chrome version&quot;, &quot;last 1 firefox version&quot;, &quot;last 1 safari version&quot; ],</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;production&quot;: [ &quot;&gt;0.2%&quot;, &quot;not dead&quot;, &quot;not op_mini all&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者安装autoprefixer（自动添加前缀插件） npm i autoprefixer</p><p>在根目录新建 <code>postcss.config.js</code> ,并添加如下代码之后，写的css会自动根据Can i use里的数据添加不同前缀了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     plugins: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      autoprefixer({</span></span>
<span class="line"><span style="color:#A6ACCD;">            browsers: [&quot;last 5 version&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }),</span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;postcss-px-to-viewport&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度.</span></span>
<span class="line"><span style="color:#A6ACCD;">          viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度.(也可以不配置)</span></span>
<span class="line"><span style="color:#A6ACCD;">          unitPrecision: 5, // 保留几位小数，指定\`px\`转换为视窗单位值的小数位数（很多时候无法整除）</span></span>
<span class="line"><span style="color:#A6ACCD;">          viewportUnit: &#39;vw&#39;, // 指定需要转换成的视窗单位，建议使用vw</span></span>
<span class="line"><span style="color:#A6ACCD;">          selectorBlackList: [&#39;tab-bar&#39;, &#39;tab-bar-item&#39;,&#39;shopping-cart-bottom-bar&#39;], // 指定不需要转换的类</span></span>
<span class="line"><span style="color:#A6ACCD;">          minPixelValue: 1, // 小于或等于\`1px\`不转换为视窗单位.</span></span>
<span class="line"><span style="color:#A6ACCD;">          mediaQuery: false // 允许在媒体查询中转换\`px\`</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果是vue-cli4，则需要在根目录下配置.browserslistrc，</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[production staging]</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; 1%</span></span>
<span class="line"><span style="color:#A6ACCD;">ie 10</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[development]</span></span>
<span class="line"><span style="color:#A6ACCD;">last 1 chrome version</span></span>
<span class="line"><span style="color:#A6ACCD;">last 1 firefox version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>postcss.config.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;autoprefixer&#39;: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>运行指令: webpack</p></li></ol><h6 id="压缩css" tabindex="-1">压缩css <a class="header-anchor" href="#压缩css" aria-hidden="true">#</a></h6><p>1.创建文件</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302152141-165685142800353.png" alt="image-20210302152140533"></p><ol start="2"><li><p>下载安装包</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev optimize-css-assets-webpack-plugin </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">          // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">          // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    //处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    //把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">    new OptimizeCssAssetsWebpackPlugin()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>运行指令npx webpack</p></li></ol><h6 id="js语法检查" tabindex="-1">js语法检查 <a class="header-anchor" href="#js语法检查" aria-hidden="true">#</a></h6><p>1.创建文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302154538-165685142800352.png" alt="image-20210302154538295"></p><ol start="2"><li>下载安装包</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><p>修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">          // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">          // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      /*语法检查： eslint-loader eslint 注意：只检查自己写的源代码，第三方的库是不用检查的 </span></span>
<span class="line"><span style="color:#A6ACCD;">      npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import</span></span>
<span class="line"><span style="color:#A6ACCD;">      设置检查规则： package.json 中 eslintConfig 中设置~</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;eslintConfig&quot;: { &quot;extends&quot;: &quot;airbnb-base&quot; } airbnb --&gt; eslint-config-airbnb-base eslint-plugin-import eslint */</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 自动修复 eslint 的错误 </span></span>
<span class="line"><span style="color:#A6ACCD;">          fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    //处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    //把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">    new OptimizeCssAssetsWebpackPlugin()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>配置 package.json</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 使用airbnb-base的语法规则，</span></span>
<span class="line"><span style="color:#A6ACCD;">/* </span></span>
<span class="line"><span style="color:#A6ACCD;">	eslint不认识window、navigator全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">	解决：需要修改package.json中的eslintConfig配置</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;env&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			&quot;browser&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;eslintConfig&quot;: { &quot;extends&quot;: &quot;airbnb-base&quot;, &quot;env&quot;: { &quot;browser&quot;: true } }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>或者使用.eslintrc文件（支持JSON和YAML两种语法）</p><p><strong>.eslintrc 文件示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;env&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;browser&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;globals&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;angular&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;camelcase&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;curly&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;brace-style&quot;: [2, &quot;1tbs&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;quotes&quot;: [2, &quot;single&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;semi&quot;: [2, &quot;always&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;space-in-brackets&quot;: [2, &quot;never&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;space-infix-ops&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>eslintrc 放在项目根目录，则会应用到整个项目；如果子目录中也包含 .eslintrc 文件，则子目录会忽略根目录的配置文件，应用该目录中的配置文件。这样可以方便地对不同环境的代码应用不同的规则。</p><p><code>详情请访问：</code><a href="https://www.jianshu.com/p/ad6784d028aa" target="_blank" rel="noreferrer">https://www.jianshu.com/p/ad6784d028aa</a></p><p><strong>在js中忽略某部分js代码语法检查：</strong></p><ol><li><p>关闭段落校验</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* eslint-disable */</span></span>
<span class="line"><span style="color:#A6ACCD;">some code</span></span>
<span class="line"><span style="color:#A6ACCD;">some code</span></span>
<span class="line"><span style="color:#A6ACCD;">/* eslint-enable */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>关闭当前行校</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">some code // eslint-disable-line</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>关闭下一行校验</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// eslint-disable-next-line</span></span>
<span class="line"><span style="color:#A6ACCD;">some code</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol></li><li><p>运行指令: npx webpack</p></li></ol><h6 id="js兼容性处理" tabindex="-1">js兼容性处理 <a class="header-anchor" href="#js兼容性处理" aria-hidden="true">#</a></h6><p>1.创建文件</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img20210302160842-165685142800354.png" alt="image-20210302160841263"></p><ol start="2"><li>下载安装包</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/polyfill core-js </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><p>修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./main.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">          // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">          // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">          // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">          MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">                // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">                require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;less-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      /*语法检查： eslint-loader eslint 注意：只检查自己写的源代码，第三方的库是不用检查的 </span></span>
<span class="line"><span style="color:#A6ACCD;">      npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import</span></span>
<span class="line"><span style="color:#A6ACCD;">      设置检查规则： package.json 中 eslintConfig 中设置~</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;eslintConfig&quot;: { &quot;extends&quot;: &quot;airbnb-base&quot; } airbnb --&gt; eslint-config-airbnb-base eslint-plugin-import eslint */</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 优先执行 </span></span>
<span class="line"><span style="color:#A6ACCD;">        enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 自动修复 eslint 的错误 </span></span>
<span class="line"><span style="color:#A6ACCD;">          fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //js兼容性处理</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // npm install --save- dev babel - loader @babel/core @babel/preset - env @babel/polyfill core-js</span></span>
<span class="line"><span style="color:#A6ACCD;">           // npm install --save- dev babel - loader @babel/core @babel/preset - env @babel/polyfill core-js</span></span>
<span class="line"><span style="color:#A6ACCD;">          /*  </span></span>
<span class="line"><span style="color:#A6ACCD;">            js兼容性处理：babel-loader @label/core @babel/preset-env</span></span>
<span class="line"><span style="color:#A6ACCD;">            1. 基本js兼容性处理 --&gt; @babel/preset-env</span></span>
<span class="line"><span style="color:#A6ACCD;">                问题：只能转换基本语法，如promise不能转换</span></span>
<span class="line"><span style="color:#A6ACCD;">            2. 全部js兼容性处理 --&gt; @babel/polyfill（不推荐）</span></span>
<span class="line"><span style="color:#A6ACCD;">                问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~</span></span>
<span class="line"><span style="color:#A6ACCD;">            3. 需要做兼容性处理的就做：按需加载  --&gt; core-js</span></span>
<span class="line"><span style="color:#A6ACCD;">          */</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 预设：指示 babel 做怎么样的兼容性处理 </span></span>
<span class="line"><span style="color:#A6ACCD;">          presets: [[&#39;@babel/preset-env&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 按需加载 </span></span>
<span class="line"><span style="color:#A6ACCD;">            useBuiltIns: &#39;usage&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 指定 core-js 版本 </span></span>
<span class="line"><span style="color:#A6ACCD;">            corejs: { version: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 指定兼容性做到哪个版本浏览器 </span></span>
<span class="line"><span style="color:#A6ACCD;">            targets: { chrome: &#39;60&#39;, firefox: &#39;60&#39;, ie: &#39;9&#39;, safari: &#39;10&#39;, edge: &#39;17&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }]]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    //处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    //把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">    new OptimizeCssAssetsWebpackPlugin()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><p>4、运行</p><p>​ npx webpack</p><h6 id="js压缩" tabindex="-1">js压缩 <a class="header-anchor" href="#js压缩" aria-hidden="true">#</a></h6><p>1.创建文件</p><p>2、修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     // 生产环境下会自动压缩 js 代码 </span></span>
<span class="line"><span style="color:#A6ACCD;">     mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>运行指令: npx webpack</p><h6 id="html压缩" tabindex="-1">html压缩 <a class="header-anchor" href="#html压缩" aria-hidden="true">#</a></h6><p>1.创建文件</p><p>2、修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 压缩 html 代码 </span></span>
<span class="line"><span style="color:#A6ACCD;">      minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 移除空格 </span></span>
<span class="line"><span style="color:#A6ACCD;">        collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 移除注释</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeComments: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="生产环境配置" tabindex="-1">生产环境配置 <a class="header-anchor" href="#生产环境配置" aria-hidden="true">#</a></h6><p>配置</p><p>webpack.config.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">//把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义nodejs环境变量：决定使用browserslist的哪个环境,这个browserslist是处理js兼容性使用的</span></span>
<span class="line"><span style="color:#A6ACCD;">p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">//复用Loader</span></span>
<span class="line"><span style="color:#A6ACCD;">const commonCssLoader = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 创建style标签，将样式放入</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &#39;style-loader&#39;, </span></span>
<span class="line"><span style="color:#A6ACCD;">  // 这个loader取代style-loader。作用：提取js中的css成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 将css文件整合到js文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //!css兼容性处理</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      plugins: () =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">        // postcss 的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">        require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: [&#39;./main.js&#39;, &#39;./src/index.html&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      //!css处理</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [...commonCssLoader]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //!less处理</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [...commonCssLoader, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //!js语法检查</span></span>
<span class="line"><span style="color:#A6ACCD;">      /*语法检查： eslint-loader eslint 注意：只检查自己写的源代码，第三方的库是不用检查的 </span></span>
<span class="line"><span style="color:#A6ACCD;">      npm install --save-dev eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import</span></span>
<span class="line"><span style="color:#A6ACCD;">      设置检查规则： package.json 中 eslintConfig 中设置~</span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;eslintConfig&quot;: { &quot;extends&quot;: &quot;airbnb-base&quot; } airbnb --&gt; eslint-config-airbnb-base eslint-plugin-import eslint */</span></span>
<span class="line"><span style="color:#A6ACCD;">      /*</span></span>
<span class="line"><span style="color:#A6ACCD;">        正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">        当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#A6ACCD;">        比如js则要先执行eslint 再执行babel, 可以使用enforce： &#39;pre&#39;指示该loader优先执行 </span></span>
<span class="line"><span style="color:#A6ACCD;">      */</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 优先执行 </span></span>
<span class="line"><span style="color:#A6ACCD;">        enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 自动修复 eslint 的错误 </span></span>
<span class="line"><span style="color:#A6ACCD;">          fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //!js兼容性处理</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // npm install --save- dev babel - loader @babel/core @babel/preset - env @babel/polyfill core-js</span></span>
<span class="line"><span style="color:#A6ACCD;">          /*  </span></span>
<span class="line"><span style="color:#A6ACCD;">            js兼容性处理：babel-loader @label/core @babel/preset-env</span></span>
<span class="line"><span style="color:#A6ACCD;">            1. 基本js兼容性处理 --&gt; @babel/preset-env</span></span>
<span class="line"><span style="color:#A6ACCD;">                问题：只能转换基本语法，如promise不能转换</span></span>
<span class="line"><span style="color:#A6ACCD;">            2. 全部js兼容性处理 --&gt; @babel/polyfill（不推荐）</span></span>
<span class="line"><span style="color:#A6ACCD;">                问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~</span></span>
<span class="line"><span style="color:#A6ACCD;">            3. 需要做兼容性处理的就做：按需加载  --&gt; core-js</span></span>
<span class="line"><span style="color:#A6ACCD;">          */</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 预设：指示 babel 做怎么样的兼容性处理 </span></span>
<span class="line"><span style="color:#A6ACCD;">          presets: [[&#39;@babel/preset-env&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 按需加载 </span></span>
<span class="line"><span style="color:#A6ACCD;">            useBuiltIns: &#39;usage&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 指定 core-js 版本 </span></span>
<span class="line"><span style="color:#A6ACCD;">            corejs: { version: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 指定兼容性做到哪个版本浏览器 </span></span>
<span class="line"><span style="color:#A6ACCD;">            targets: { chrome: &#39;60&#39;, firefox: &#39;60&#39;, ie: &#39;9&#39;, safari: &#39;10&#39;, edge: &#39;17&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }]]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //将HTML导出为字符串。当编译器需要时，HTML被最小化。</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 问题：默认处理不了html中img图片</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.(jpg|png|gif)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 使用一个loader</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 下载 url-loader file-loader</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 当图片体积大于 8192 字节时，默认会使用 file- loader</span></span>
<span class="line"><span style="color:#A6ACCD;">        // （虽然代码没有配置 file - loader，但还是需要使用 npm i file - loader - D 安装），</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 并且会将配置的选项传递给 file - loader（也就是说上面可以配置 name、outputPath 等选项）</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 图片大小小于8kb，就会被base64处理</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 优点: 减少请求数量（减轻服务器压力）</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 缺点：图片体积会更大（文件请求速度更慢）</span></span>
<span class="line"><span style="color:#A6ACCD;">          limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 解析时会出问题：[object Module]</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 解决：关闭url-loader的es6模块化，使用commonjs解析</span></span>
<span class="line"><span style="color:#A6ACCD;">          esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 给图片进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">          // [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#A6ACCD;">          // [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 输出文件夹，相对于build文件下</span></span>
<span class="line"><span style="color:#A6ACCD;">          outputPath: &#39;imgs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      //!处理其他资源</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /\\.(js|css|less|html|jpg|png|gif|vue)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 当加载的图片小于limit时，会将图片编译成base64字符串形式</span></span>
<span class="line"><span style="color:#A6ACCD;">          //当加载的土拍你大于limit时，需要使用file-loader模块进行加载</span></span>
<span class="line"><span style="color:#A6ACCD;">          // [hash:10]取图片的hash的前10位</span></span>
<span class="line"><span style="color:#A6ACCD;">          //[name]是指原来的名字</span></span>
<span class="line"><span style="color:#A6ACCD;">          // [ext]取文件原来扩展名</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;[name].[hash:8].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 输出文件夹，相对于build文件下</span></span>
<span class="line"><span style="color:#A6ACCD;">          outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    //!处理html模板</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 压缩 html 代码 </span></span>
<span class="line"><span style="color:#A6ACCD;">      minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 移除空格 </span></span>
<span class="line"><span style="color:#A6ACCD;">        collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 移除注释</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeComments: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    //!把css从js抽离成单独文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 对输出的css文件进行重命名</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    //! 压缩 css </span></span>
<span class="line"><span style="color:#A6ACCD;">    new OptimizeCssAssetsWebpackPlugin()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 生产环境下会自动压缩 js 代码</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>package.json</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;production&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;@babel/core&quot;: &quot;^7.13.8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;@babel/polyfill&quot;: &quot;^7.12.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;@babel/preset-env&quot;: &quot;^7.13.9&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;babel-loader&quot;: &quot;^8.2.2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;core-js&quot;: &quot;^3.9.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;css-loader&quot;: &quot;^5.1.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eslint&quot;: &quot;^7.21.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eslint-config-airbnb-base&quot;: &quot;^14.2.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eslint-loader&quot;: &quot;^4.0.2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eslint-plugin-import&quot;: &quot;^2.22.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;file-loader&quot;: &quot;^6.2.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;html-loader&quot;: &quot;^0.5.5&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;html-webpack-plugin&quot;: &quot;^3.2.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;less&quot;: &quot;^4.1.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;less-loader&quot;: &quot;^5.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;mini-css-extract-plugin&quot;: &quot;^0.9.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;optimize-css-assets-webpack-plugin&quot;: &quot;^5.0.4&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;postcss-loader&quot;: &quot;^3.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;postcss-preset-env&quot;: &quot;^6.7.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;style-loader&quot;: &quot;^2.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;url-loader&quot;: &quot;^4.1.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;webpack&quot;: &quot;^4.41.6&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;webpack-cli&quot;: &quot;^3.3.11&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;eslintConfig&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;extends&quot;: &quot;airbnb-base&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;env&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;browser&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>.browerslistrc</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[production staging]</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; 1%</span></span>
<span class="line"><span style="color:#A6ACCD;">ie 10</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[development]</span></span>
<span class="line"><span style="color:#A6ACCD;">last 1 chrome version</span></span>
<span class="line"><span style="color:#A6ACCD;">last 1 firefox version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="性能优化" tabindex="-1">性能优化 <a class="header-anchor" href="#性能优化" aria-hidden="true">#</a></h6><blockquote><p>webpack性能优化可分为开发环境性能优化和生成环境优化，两个环境优化主要从以下方面入手：</p><p>开发环境优化：</p><p>​ 1、优化打包构建速度</p><p>​ 2、优化代码调试</p><p>生产环境性能优化：</p><p>​ 1、优化打包构建速度</p><p>​ 2、优化代码运行的性能</p></blockquote><h5 id="开发环境性能优化" tabindex="-1">开发环境性能优化 <a class="header-anchor" href="#开发环境性能优化" aria-hidden="true">#</a></h5><blockquote><p>1、HMR</p><p>2、source-map</p></blockquote><h6 id="优化打包构建速度" tabindex="-1">优化打包构建速度 <a class="header-anchor" href="#优化打包构建速度" aria-hidden="true">#</a></h6><blockquote><p>HMR：hot module replacement 热模块替换/模块热替换</p><p>作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块极大提升构建速度</p></blockquote><p>配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> //入口</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: [&#39;./main.js&#39;, &#39;./src/index.html&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这需要和项目构建后路径一样，把打包生成的目录设为根目录，只不过是模拟生成的而已</span></span>
<span class="line"><span style="color:#A6ACCD;">    contentBase: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 启动gzip压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">    port: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 自动打开浏览器</span></span>
<span class="line"><span style="color:#A6ACCD;">    open: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    //! 开启 HMR 功能 </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 当修改了 webpack 配置，新配置要想生效，必须重新开启webpack 服务 </span></span>
<span class="line"><span style="color:#A6ACCD;">    /*</span></span>
<span class="line"><span style="color:#A6ACCD;">      HMR: hot module replacement 热模块替换 / 模块热替换</span></span>
<span class="line"><span style="color:#A6ACCD;">        作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） </span></span>
<span class="line"><span style="color:#A6ACCD;">          极大提升构建速度</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">          样式文件：可以使用HMR功能：因为style-loader内部实现了~</span></span>
<span class="line"><span style="color:#A6ACCD;">          js文件：默认不能使用HMR功能 --&gt; 需要修改js代码，添加支持HMR功能的代码</span></span>
<span class="line"><span style="color:#A6ACCD;">            注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。</span></span>
<span class="line"><span style="color:#A6ACCD;">          html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）</span></span>
<span class="line"><span style="color:#A6ACCD;">            解决：修改entry入口，将html文件引入entry: [&#39;./main.js&#39;, &#39;./src/index.html&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    hot: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果js需要处理的话（暂时还没完全理解）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import res from &#39;./src/js/index&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import print from &quot;./src/js/print&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import print2 from &quot;./src/js/print2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import &#39;./src/css/index.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import &#39;./src/css/index.less&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import &#39;./src/others/iconfont.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     document.write(&#39;hello world&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(&#39;21323&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     //为了可以自动隔离js更新，我们使用</span></span>
<span class="line"><span style="color:#A6ACCD;">     if (module.hot) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 一旦 module.hot 为true，说明开启了HMR功能。 --&gt; 让HMR功能代码生效a</span></span>
<span class="line"><span style="color:#A6ACCD;">       const files = require.context(&#39;./src/js&#39;, true, /\\.js$/);</span></span>
<span class="line"><span style="color:#A6ACCD;">       console.log(files);</span></span>
<span class="line"><span style="color:#A6ACCD;">       files.keys().map(key =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(&#39;./src/js&#39;+key.replace(&#39;.&#39;,&#39;&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">         module.hot.accept(&#39;./src/js&#39; + key.replace(&#39;.&#39;, &#39;&#39;), function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。</span></span>
<span class="line"><span style="color:#A6ACCD;">           // 会执行后面的回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">           // console.log(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">           // key.replace(&#39;./js&#39;, &#39;&#39;)()</span></span>
<span class="line"><span style="color:#A6ACCD;">           // console.log(key.replace(&#39;./js&#39;, &#39;&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">           console.log(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">         });</span></span>
<span class="line"><span style="color:#A6ACCD;">       })</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="优化代码调试" tabindex="-1">优化代码调试 <a class="header-anchor" href="#优化代码调试" aria-hidden="true">#</a></h6><blockquote><p>source-map：一种提供源代码到构建后代码映射技术（如果代码出错了，通过映射可以追踪源代码错误）</p></blockquote><p>配置:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: [&#39;./src/js/index.js&#39;, &#39;./src/index.html&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      // loader的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理less资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理css资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.(jpg|png|gif)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 关闭es6模块化</span></span>
<span class="line"><span style="color:#A6ACCD;">          esModule: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">          outputPath: &#39;imgs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理html中img资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 处理其他资源</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /\\.(html|js|css|less|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // plugins的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    contentBase: resolve(__dirname, &#39;build&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    port: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    open: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    hot: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  //source-map配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  devtool: &#39;eval-source-map&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>source-map详细介绍：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*</span></span>
<span class="line"><span style="color:#A6ACCD;">  source-map: 一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    source-map：外部</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码准确信息 和 源代码的错误位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    inline-source-map：内联</span></span>
<span class="line"><span style="color:#A6ACCD;">      只生成一个内联source-map</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码准确信息 和 源代码的错误位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    hidden-source-map：外部</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码错误原因，但是没有错误位置</span></span>
<span class="line"><span style="color:#A6ACCD;">      不能追踪源代码错误，只能提示到构建后代码的错误位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    eval-source-map：内联</span></span>
<span class="line"><span style="color:#A6ACCD;">      每一个文件都生成对应的source-map，都在eval</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码准确信息 和 源代码的错误位置</span></span>
<span class="line"><span style="color:#A6ACCD;">    nosources-source-map：外部</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码准确信息, 但是没有任何源代码信息</span></span>
<span class="line"><span style="color:#A6ACCD;">    cheap-source-map：外部</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码准确信息 和 源代码的错误位置 </span></span>
<span class="line"><span style="color:#A6ACCD;">      只能精确的行</span></span>
<span class="line"><span style="color:#A6ACCD;">    cheap-module-source-map：外部</span></span>
<span class="line"><span style="color:#A6ACCD;">      错误代码准确信息 和 源代码的错误位置 </span></span>
<span class="line"><span style="color:#A6ACCD;">      module会将loader的source map加入</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    内联 和 外部的区别：1. 外部生成了文件，内联没有 2. 内联构建速度更快</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    开发环境：速度快，调试更友好</span></span>
<span class="line"><span style="color:#A6ACCD;">      速度快(eval&gt;inline&gt;cheap&gt;...)</span></span>
<span class="line"><span style="color:#A6ACCD;">        eval-cheap-souce-map</span></span>
<span class="line"><span style="color:#A6ACCD;">        eval-source-map</span></span>
<span class="line"><span style="color:#A6ACCD;">      调试更友好  </span></span>
<span class="line"><span style="color:#A6ACCD;">        souce-map</span></span>
<span class="line"><span style="color:#A6ACCD;">        cheap-module-souce-map</span></span>
<span class="line"><span style="color:#A6ACCD;">        cheap-souce-map</span></span>
<span class="line"><span style="color:#A6ACCD;">	 // 建议使用优先级</span></span>
<span class="line"><span style="color:#A6ACCD;">      --&gt; eval-source-map  / eval-cheap-module-source-map</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    生产环境：源代码要不要隐藏? 调试要不要更友好</span></span>
<span class="line"><span style="color:#A6ACCD;">      内联会让代码体积变大，所以在生产环境不用内联</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 隐藏源代码模式</span></span>
<span class="line"><span style="color:#A6ACCD;">      nosources-source-map 全部隐藏</span></span>
<span class="line"><span style="color:#A6ACCD;">      hidden-source-map 只隐藏源代码，会提示构建后代码错误信息</span></span>
<span class="line"><span style="color:#A6ACCD;">	 // 不考虑隐藏源代码建议使用优先级</span></span>
<span class="line"><span style="color:#A6ACCD;">      --&gt; source-map / cheap-module-souce-map</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="生产环境性能优化" tabindex="-1">生产环境性能优化 <a class="header-anchor" href="#生产环境性能优化" aria-hidden="true">#</a></h5><h6 id="优化打包构建速度-1" tabindex="-1">优化打包构建速度： <a class="header-anchor" href="#优化打包构建速度-1" aria-hidden="true">#</a></h6><h6 id="oneof" tabindex="-1">oneOf <a class="header-anchor" href="#oneof" aria-hidden="true">#</a></h6><blockquote><p>module的Oneof配置提高loader匹配效率，使匹配到一个loader后，后面就不会再继续匹配了</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // 定义nodejs环境变量：决定使用browserslist的哪个环境</span></span>
<span class="line"><span style="color:#A6ACCD;">     p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // 复用loader</span></span>
<span class="line"><span style="color:#A6ACCD;">     const commonCssLoader = [</span></span>
<span class="line"><span style="color:#A6ACCD;">       MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 还需要在package.json中定义browserslist</span></span>
<span class="line"><span style="color:#A6ACCD;">         loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 在package.json中eslintConfig --&gt; airbnb</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 优先执行</span></span>
<span class="line"><span style="color:#A6ACCD;">             enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 以下loader只会匹配一个</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 注意：不能有两个配置处理同一种类型文件，所以把eslint-loader提出了完美解决了问题</span></span>
<span class="line"><span style="color:#A6ACCD;">             oneOf: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [...commonCssLoader]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [...commonCssLoader, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               /*</span></span>
<span class="line"><span style="color:#A6ACCD;">                 正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">                 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#A6ACCD;">                   先执行eslint 在执行babel</span></span>
<span class="line"><span style="color:#A6ACCD;">               */</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   presets: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                     [</span></span>
<span class="line"><span style="color:#A6ACCD;">                       &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                       {</span></span>
<span class="line"><span style="color:#A6ACCD;">                         useBuiltIns: &#39;usage&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                         corejs: {version: 3},</span></span>
<span class="line"><span style="color:#A6ACCD;">                         targets: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                           chrome: &#39;60&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                           firefox: &#39;50&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                         }</span></span>
<span class="line"><span style="color:#A6ACCD;">                       }</span></span>
<span class="line"><span style="color:#A6ACCD;">                     ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                   ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.(jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   outputPath: &#39;imgs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   esModule: false</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 exclude: /\\.(js|css|less|html|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               }</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           filename: &#39;css/built.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new OptimizeCssAssetsWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">             removeComments: true</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="缓存" tabindex="-1"><strong>缓存</strong> <a class="header-anchor" href="#缓存" aria-hidden="true">#</a></h6><blockquote><p>babel缓存： cacheDirectory:true --&gt;让第二次打包构建速度更快 文件资源缓存： hash:每次webpack构建时会生成一个唯一的hash值 问题：因为js和css使用同一个hash值，如果重新打包会导致所有的缓存失效（可能我只改动了一个文件） chunkhash:根据chunk生成的hash值。如果打包来源于同一个chunk,name hash值就一样。 问题：可能js和css还是一样的，因为css在js中被引入的，同属于一个chunk。（所以根据入口文件引入的文件都会生成一个chunk) contenthash（推荐）:根据文件内容生成hash值，不同文件不一样 --&gt;让代码上线运行缓存更好使用</p></blockquote><p>1 创建文件</p><p>​ <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgnE2w3sumjX6QLyi.png" alt="image-20211101200236915"></p><ol start="2"><li><p>修改配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义nodejs环境变量：决定使用browserslist的哪个环境</span></span>
<span class="line"><span style="color:#A6ACCD;">p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 复用loader</span></span>
<span class="line"><span style="color:#A6ACCD;">const commonCssLoader = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 还需要在package.json中定义browserslist</span></span>
<span class="line"><span style="color:#A6ACCD;">    loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 当项目重新构建时，利用文件hash不一致，让强制缓存失效，从而得到更新</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;js/built.[contenthash:10].js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 在package.json中eslintConfig --&gt; airbnb</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 优先执行</span></span>
<span class="line"><span style="color:#A6ACCD;">        enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 以下loader只会匹配一个</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 注意：不能有两个配置处理同一种类型文件，所以把eslint-loader提出了完美解决了问题</span></span>
<span class="line"><span style="color:#A6ACCD;">        oneOf: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            use: [...commonCssLoader]</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            use: [...commonCssLoader, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          /*</span></span>
<span class="line"><span style="color:#A6ACCD;">            正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#A6ACCD;">              先执行eslint 在执行babel</span></span>
<span class="line"><span style="color:#A6ACCD;">          */</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              presets: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                [</span></span>
<span class="line"><span style="color:#A6ACCD;">                  &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    useBuiltIns: &#39;usage&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    corejs: { version: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">                    targets: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                      chrome: &#39;60&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                      firefox: &#39;50&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                  }</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]</span></span>
<span class="line"><span style="color:#A6ACCD;">              ],</span></span>
<span class="line"><span style="color:#A6ACCD;">              // babel缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">              cacheDirectory: true</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.(jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">              name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              outputPath: &#39;imgs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              esModule: false</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          {</span></span>
<span class="line"><span style="color:#A6ACCD;">            exclude: /\\.(js|css|less|html|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">            loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 当项目重新构建时，利用文件hash不一致，让强制缓存失效，从而得到更新</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;css/built.[contenthash:10].css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new OptimizeCssAssetsWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeComments: true</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h6 id="多进程打包" tabindex="-1">多进程打包 <a class="header-anchor" href="#多进程打包" aria-hidden="true">#</a></h6><blockquote><p>开启多进程打包，提升打包速度，但是开启进程需要一定时间，如果是比较小的项目，使开启多进程打包反而会适得其反</p></blockquote><p>安装依赖</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     npm i thread-loader -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const WorkboxWebpackPlugin = require(&#39;workbox-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       PWA: 渐进式网络开发应用程序(离线可访问)</span></span>
<span class="line"><span style="color:#A6ACCD;">         workbox --&gt; workbox-webpack-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // 定义nodejs环境变量：决定使用browserslist的哪个环境</span></span>
<span class="line"><span style="color:#A6ACCD;">     p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // 复用loader</span></span>
<span class="line"><span style="color:#A6ACCD;">     const commonCssLoader = [</span></span>
<span class="line"><span style="color:#A6ACCD;">       MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 还需要在package.json中定义browserslist</span></span>
<span class="line"><span style="color:#A6ACCD;">         loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.[contenthash:10].js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 在package.json中eslintConfig --&gt; airbnb</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 优先执行</span></span>
<span class="line"><span style="color:#A6ACCD;">             enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 以下loader只会匹配一个</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 注意：不能有两个配置处理同一种类型文件</span></span>
<span class="line"><span style="color:#A6ACCD;">             oneOf: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [...commonCssLoader]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [...commonCssLoader, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               /*</span></span>
<span class="line"><span style="color:#A6ACCD;">                 正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">                 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#A6ACCD;">                   先执行eslint 在执行babel</span></span>
<span class="line"><span style="color:#A6ACCD;">               */</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                   /* </span></span>
<span class="line"><span style="color:#A6ACCD;">                     开启多进程打包。 </span></span>
<span class="line"><span style="color:#A6ACCD;">                     进程启动大概为600ms，进程通信也有开销。</span></span>
<span class="line"><span style="color:#A6ACCD;">                     只有工作消耗时间比较长，才需要多进程打包</span></span>
<span class="line"><span style="color:#A6ACCD;">                   */</span></span>
<span class="line"><span style="color:#A6ACCD;">                   {</span></span>
<span class="line"><span style="color:#A6ACCD;">                     loader: &#39;thread-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                       workers: 2 // 进程2个</span></span>
<span class="line"><span style="color:#A6ACCD;">                     }</span></span>
<span class="line"><span style="color:#A6ACCD;">                   },</span></span>
<span class="line"><span style="color:#A6ACCD;">                   {</span></span>
<span class="line"><span style="color:#A6ACCD;">                     loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                       presets: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                         [</span></span>
<span class="line"><span style="color:#A6ACCD;">                           &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                           {</span></span>
<span class="line"><span style="color:#A6ACCD;">                             useBuiltIns: &#39;usage&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                             corejs: { version: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">                             targets: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                               chrome: &#39;60&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                               firefox: &#39;50&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                             }</span></span>
<span class="line"><span style="color:#A6ACCD;">                           }</span></span>
<span class="line"><span style="color:#A6ACCD;">                         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">                       // 开启babel缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">                       // 第二次构建时，会读取之前的缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">                       cacheDirectory: true</span></span>
<span class="line"><span style="color:#A6ACCD;">                     }</span></span>
<span class="line"><span style="color:#A6ACCD;">                   }</span></span>
<span class="line"><span style="color:#A6ACCD;">                 ]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.(jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   outputPath: &#39;imgs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   esModule: false</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 exclude: /\\.(js|css|less|html|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               }</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           filename: &#39;css/built.[contenthash:10].css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new OptimizeCssAssetsWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">             removeComments: true</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new WorkboxWebpackPlugin.GenerateSW({</span></span>
<span class="line"><span style="color:#A6ACCD;">           /*</span></span>
<span class="line"><span style="color:#A6ACCD;">             1. 帮助serviceworker快速启动</span></span>
<span class="line"><span style="color:#A6ACCD;">             2. 删除旧的 serviceworker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">             生成一个 serviceworker 配置文件~</span></span>
<span class="line"><span style="color:#A6ACCD;">           */</span></span>
<span class="line"><span style="color:#A6ACCD;">           clientsClaim: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">           skipWaiting: true</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       devtool: &#39;source-map&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="externals" tabindex="-1">externals <a class="header-anchor" href="#externals" aria-hidden="true">#</a></h6><blockquote><p>官网文档解释的很清楚，就是webpack可以不处理应用的某些依赖库，使用externals配置后，依旧可以在代码中通过CMD、AMD或者window/global全局的方式访问。</p><p>怎么理解呢？我们先通过官网说的那个jquery的案例来理解。</p><p>有时我们希望我们通过script引入的库，如用CDN的方式引入的jquery，我们在使用时，依旧用require的方式来使用，但是却不希望webpack将它又编译进文件中。</p></blockquote><p>但是我们希望我们通过script引入的库，如用CDN的方式引入的jquery，我们在使用时，依旧用require的方式来使用，但是却不希望webpack将它又编译进文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"> 	&lt;script src=&quot;http://code.jquery.com/jquery-1.12.0.min.js&quot;&gt;&lt;/script&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>jquery的使用如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	// 我们不想这么用</span></span>
<span class="line"><span style="color:#A6ACCD;">	// const $ = window.jQuery</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 而是这么用const $ = require(&quot;jquery&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	$(&quot;#content&quot;).html(&quot;&lt;h1&gt;hello world&lt;/h1&gt;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这时，我们便需要配置externals</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       externals: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 拒绝jQuery被打包进来</span></span>
<span class="line"><span style="color:#A6ACCD;">         jquery: &#39;jQuery&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>我们可以看看编译后的文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     ({</span></span>
<span class="line"><span style="color:#A6ACCD;">        0: function(...) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            var jQuery = require(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">            /* ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        1: function(...) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 很明显这里是把window.jQuery赋值给了module.exports</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 因此我们便可以使用require来引入了。</span></span>
<span class="line"><span style="color:#A6ACCD;">          module.exports = jQuery;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">          /* ... */</span></span>
<span class="line"><span style="color:#A6ACCD;">     });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>但是，我们还是得在html手动引入Cdn的</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;title&gt;webpack&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;h1 id=&quot;title&quot;&gt;hello html&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="dll" tabindex="-1">dll <a class="header-anchor" href="#dll" aria-hidden="true">#</a></h6><blockquote><p>使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包</p><p>也就是让webpack这个命令不打包某些库，让我们手动通过webpack --config webpack.dll.js更新</p></blockquote><p>安装依赖库</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">	npm i add-asset-html-webpack-plugin -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>配置：</p><p>webpack.dll.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包</span></span>
<span class="line"><span style="color:#A6ACCD;">         当你运行 webpack 时，默认查找 webpack.config.js 配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">         需求：需要运行 webpack.dll.js 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">           --&gt; webpack --config webpack.dll.js</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 最终打包生成的[name] --&gt; jquery</span></span>
<span class="line"><span style="color:#A6ACCD;">         // [&#39;jquery&#39;] --&gt; 要打包的库是jquery</span></span>
<span class="line"><span style="color:#A6ACCD;">         jquery: [&#39;jquery&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;[name].js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;dll&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">         library: &#39;[name]_[hash]&#39; // 打包的库里面向外暴露出去的内容叫什么名字</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 打包生成一个 manifest.json --&gt; 提供和jquery映射</span></span>
<span class="line"><span style="color:#A6ACCD;">         new webpack.DllPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           name: &#39;[name]_[hash]&#39;, // 映射库的暴露的内容名称</span></span>
<span class="line"><span style="color:#A6ACCD;">           path: resolve(__dirname, &#39;dll/manifest.json&#39;) // 输出文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>当我们执行webpack --config webpack.dll.js就会生成mainfest.json和单独打包的库，mainfest.json的作用是告诉webpack哪些文件可以忽略打包</p><p>webpack.config.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const AddAssetHtmlWebpackPlugin = require(&#39;add-asset-html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;built.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~</span></span>
<span class="line"><span style="color:#A6ACCD;">         new webpack.DllReferencePlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           manifest: resolve(__dirname, &#39;dll/manifest.json&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 将某个文件打包输出去，并在html中自动引入该资源</span></span>
<span class="line"><span style="color:#A6ACCD;">         new AddAssetHtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           filepath: resolve(__dirname, &#39;dll/jquery.js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>由于某些库是单独打包的，所以并不在bulit.js中，也不会自动引入，所以我们需要依赖add-asset-html-webpack-plugin这个库来帮我们自动引入</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img249TNQiBYzhn3Uf.png" alt="image-20211107212720457"></p><h6 id="优化代码运行的性能" tabindex="-1">优化代码运行的性能： <a class="header-anchor" href="#优化代码运行的性能" aria-hidden="true">#</a></h6><h6 id="缓存-hash-chunkhash-contenthash" tabindex="-1">缓存(hash-chunkhash-contenthash) <a class="header-anchor" href="#缓存-hash-chunkhash-contenthash" aria-hidden="true">#</a></h6><h6 id="tree-shaking" tabindex="-1">tree shaking <a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a></h6><blockquote><p>去除无用代码, 减少代码体积，但是当在package.json中配置&quot;sideEffects&quot;: false则表示对所有的文件都执行tree shaking,</p><p>这样就有可能会导致css和@babel/polyfill文件被误删，产生副作用</p><p>使用前提：1、必须使用ES6模块化 2、开启production模式</p></blockquote><p><strong>一、tree shaking是什么？</strong></p><p>创建一个math.js文件，math.js文件中会导出两个函数：</p><p>math.js:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 导出add函数</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 导出minus函数</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minus</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>然后在index.js中导入并调用add函数：</p><p>index.js:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">add</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./math.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>然后进行打包：</p><p>打开打包后的main.js，可以发现math.js中的minus函数也被打包进了main.js中：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-bcb13b5dcec712043e6dd9274ee16fea_720w.jpg" alt="img"></p><p>可是在index.js文件中根本就不需要调用minus函数。</p><p>那么就应该把minus从main.js中剔除掉，或者说把minus看作树上枯黄的叶子，应该把它从树上摇落，这就是tree shaking，一种把无用代码“摇落”的功能！</p><p><strong>二、在开发模式下开启tree shaking</strong></p><p>要在开发模式下开启tree shaking，就要首先配置webpack.config.js文件：</p><p>webpack.config.js:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> CleanWebpackPlugin </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">devtool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cheap-module-eval-source-map</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                   </span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name].js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                 </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)   </span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/template.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HotModuleReplacementPlugin</span><span style="color:#A6ACCD;">()               </span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">optimization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">                 </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">usedExports</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;">// 在开发模式中开启tree shaking</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">devServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">contentBase</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                   </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">8080</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                            </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">hot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">              </span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">hotOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">           </span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                     </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                         </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpg</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                                     </span><span style="color:#F07178;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">                         </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                         </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                                 </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">babel-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                             </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">                         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                     ]    </span></span>
<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>任何导入的文件都会收到tree shaking的影响，所以一些导入时会执行特殊行为的代码，它们不是仅仅暴露一个export或多个export（<strong>副作用</strong>），比如polyfill，就会被tree shaking给删除。另外，css文件，也会因为这种原因被tree shaking删除。</p><p>为了避免这种无意的删除，就需要在package.json中对sideEffects选项进行设置：</p><p>package.json:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack-demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">private</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">sideEffects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@babel/polyfill</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.css</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">Error: no test specified</span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;"> &amp;&amp; exit 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">bundle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">watch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack --watch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">server</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack-dev-server</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">license</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ISC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@babel/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^7.6.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@babel/preset-env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^7.6.3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">autoprefixer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^9.6.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">babel-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^8.0.6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">clean-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">css-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.2.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">file-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.2.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">html-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.2.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">node-sass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.12.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">postcss-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">sass-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^8.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">style-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">url-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^2.1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.39.3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack-cli</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.3.7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">webpack-dev-server</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.8.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@babel/polyfill</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^7.6.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">core-js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^3.3.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">install</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^0.13.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">npm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^6.12.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>现在全部设置完毕，进行打包：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-b21fad4dfc17ec91b73aaf041b13ff67_720w.jpg" alt="img"></p><p>再次打开main.js，可以发现tree shaking就生效了：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-d34b226cd2a5f34d75c5c875c310289f_720w.jpg" alt="img"></p><p>但是开发模式下并不会把没用的代码删掉，因为如果删掉的话回导致调试困难，比如source map提示的行数不对应等。</p><p><strong>二、在生产模式下开启tree shaking</strong></p><p>在生产模式下就不要optimization选项进行设置了，因为webpack会在生产模式下默认打开tree shaking。</p><p>所以把webpack.config.js修改成：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HtmlWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> CleanWebpackPlugin </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> webpack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;">// 生产模式</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">devtool</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cheap-module-eval-source-map</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                   </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[name].js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                 </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)   </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HtmlWebpackPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">          </span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/template.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">HotModuleReplacementPlugin</span><span style="color:#A6ACCD;">()               </span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">devServer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">contentBase</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./dist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                   </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">8080</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                            </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">hot</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">              </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">hotOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">           </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">(</span><span style="color:#C3E88D;">png</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">svg</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">jpg</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">gif</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#F07178;">limit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">css-loader</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">babel-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                ]    </span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>进行打包：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-ff6c4a1aa95ffcef2c6cb35b890eee3f_720w.jpg" alt="img"></p><p>再打开main.js文件就可以发现只剩下add函数的相关代码：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgv2-00e62fe184fe8ca98ad4da400cd72418_720w.png" alt="img"></p><p>而minus函数相关的代码没有被打包到main.js中。</p><h6 id="code-split" tabindex="-1">code split <a class="header-anchor" href="#code-split" aria-hidden="true">#</a></h6><blockquote><p>代码分离（codeSplit）是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。</p><p>代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。</p></blockquote><p><strong>方式一</strong></p><p>在 webpack 中可以定义多入口，将不同的入口文件打包为不同的 chunk</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img3iT7CRQ2cuXSAO4.png" alt="img"></p><p>构建后的 文件中有两个单独的 js</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606163645530-561456213.png" alt="img"></p><p><strong>方式二</strong></p><p>webpack 中 optimization 配置 还可以 将node_modules中代码单独打包一个chunk最终输出，如果是多入口，可以 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606164355985-1262234522.png" alt="img"></p><p>当在 index.js 和 test.js 两个入口文件中都引入 jQury 时，webpack 将公共的 jQuery 单独打包为一个 chunk</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606164936402-1837182916.png" alt="img"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606164954908-1912835539.png" alt="img"></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img1743698-20200606165012764-577933963.png" alt="img"></p><p><strong>方式三（重要）</strong></p><blockquote><p>通过 js 代码，可以让指定某个文件被单独打包成一个 chunk，</p><p>如在 index.js 中通过 import 语法而不需要配置webpack.config.js，将引入的 test.js 单独打包为一个 chunk，</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     function add(x, y) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return x + y;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">     // eslint-disable-next-line</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(&quot;1+1=&quot;, add(1, 1))</span></span>
<span class="line"><span style="color:#A6ACCD;">	/*</span></span>
<span class="line"><span style="color:#A6ACCD;">       通过js代码，让某个文件被单独打包成一个chunk</span></span>
<span class="line"><span style="color:#A6ACCD;">       import动态导入语法：能将某个文件单独打包</span></span>
<span class="line"><span style="color:#A6ACCD;">       webpackChunkName: 可以配置chunk的部分名称以便于区分</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">     import(/*webpackChunkName: &#39;test&#39;*/&#39;./test&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;">         .then(({ count }) =&gt; { //count 结构赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">             // eslint-disable-next-line</span></span>
<span class="line"><span style="color:#A6ACCD;">             console.log(&quot;test.js加载成功，10-2等于：&quot;,count(10, 2));</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">         .catch(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // eslint-disable-next-line</span></span>
<span class="line"><span style="color:#A6ACCD;">             console.log(&#39;文件加载失败~&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">         });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>构建后的文件中，test被单独打包：</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgM9YAiak16xlNXWb.png" alt="img"></p><p>常用于路由文件引入：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220703230721679.png" alt="image-20220703230721679" style="zoom:67%;"><h6 id="懒加载-预加载" tabindex="-1">懒加载/预加载 <a class="header-anchor" href="#懒加载-预加载" aria-hidden="true">#</a></h6><blockquote><p>懒加载,是在进入这个方法时才加载,文件test进行第一次加载并执行里面的代码</p><p>预加载:会在使用之前加载js文件(js文件先加载了,但是并不会去执行代码)，等其他资源加载完毕，浏览器空闲了，再偷偷加载资源</p><p>​ 当点击按钮进入该方法时,加载的是该文件的缓存,同时去执行test文件的内容</p><p>正常加载: 可以认为是并行加载(同一时间加载多个文件)</p></blockquote><p>不需要安装依赖</p><p>使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(&#39;index.js 文件被加载了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">document.getElementById(&#39;btn&#39;).onclick= function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //懒加载~:当文件需要使用时才加载</span></span>
<span class="line"><span style="color:#A6ACCD;">    //import(/*webpackChunkName:&#39;test&#39;*/&#39;./test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    //预加载 webpackPrefetch:true 会在使用之前加载js文件(js文件先加载了,但是并不会去执行代码)，等其他资源加载完毕，浏览器空闲了，再偷偷加载资源</span></span>
<span class="line"><span style="color:#A6ACCD;">    import(/*webpackChunkName:&#39;test&#39; ,webpackPrefetch:true */&#39;./test&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}test.jsconsole.log(&#39;test.js文件被加载了&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="pwa" tabindex="-1">pwa <a class="header-anchor" href="#pwa" aria-hidden="true">#</a></h6><blockquote><p>PWA: 渐进式网络开发应用程序（离线可访问）</p><p>​ workbox --&gt; workbox-webpack-plugin</p><p>在webpack中通过workbox插件实现，也就是 workbox-webpack-plugin</p></blockquote><p>安装依赖：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">      npm i workbox-webpack-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用：</p><p>webpack.config.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const WorkboxWebpackPlugin = require(&#39;workbox-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       PWA: 渐进式网络开发应用程序(离线可访问)</span></span>
<span class="line"><span style="color:#A6ACCD;">         workbox --&gt; workbox-webpack-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // 定义nodejs环境变量：决定使用browserslist的哪个环境</span></span>
<span class="line"><span style="color:#A6ACCD;">     p<wbr>rocess.env.NODE_ENV = &#39;production&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // 复用loader</span></span>
<span class="line"><span style="color:#A6ACCD;">     const commonCssLoader = [</span></span>
<span class="line"><span style="color:#A6ACCD;">       MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">       &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       {</span></span>
<span class="line"><span style="color:#A6ACCD;">         // 还需要在package.json中定义browserslist</span></span>
<span class="line"><span style="color:#A6ACCD;">         loader: &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           ident: &#39;postcss&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           plugins: () =&gt; [require(&#39;postcss-preset-env&#39;)()]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">     ];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">       entry: &#39;./src/js/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         filename: &#39;js/built.[contenthash:10].js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">         path: resolve(__dirname, &#39;build&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 在package.json中eslintConfig --&gt; airbnb</span></span>
<span class="line"><span style="color:#A6ACCD;">             test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 优先执行</span></span>
<span class="line"><span style="color:#A6ACCD;">             enforce: &#39;pre&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             loader: &#39;eslint-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">             options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">               fix: true</span></span>
<span class="line"><span style="color:#A6ACCD;">             }</span></span>
<span class="line"><span style="color:#A6ACCD;">           },</span></span>
<span class="line"><span style="color:#A6ACCD;">           {</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 以下loader只会匹配一个</span></span>
<span class="line"><span style="color:#A6ACCD;">             // 注意：不能有两个配置处理同一种类型文件</span></span>
<span class="line"><span style="color:#A6ACCD;">             oneOf: [</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [...commonCssLoader]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 use: [...commonCssLoader, &#39;less-loader&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               /*</span></span>
<span class="line"><span style="color:#A6ACCD;">                 正常来讲，一个文件只能被一个loader处理。</span></span>
<span class="line"><span style="color:#A6ACCD;">                 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：</span></span>
<span class="line"><span style="color:#A6ACCD;">                   先执行eslint 在执行babel</span></span>
<span class="line"><span style="color:#A6ACCD;">               */</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   presets: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                     [</span></span>
<span class="line"><span style="color:#A6ACCD;">                       &#39;@babel/preset-env&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                       {</span></span>
<span class="line"><span style="color:#A6ACCD;">                         useBuiltIns: &#39;usage&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                         corejs: { version: 3 },</span></span>
<span class="line"><span style="color:#A6ACCD;">                         targets: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                           chrome: &#39;60&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                           firefox: &#39;50&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                         }</span></span>
<span class="line"><span style="color:#A6ACCD;">                       }</span></span>
<span class="line"><span style="color:#A6ACCD;">                     ]</span></span>
<span class="line"><span style="color:#A6ACCD;">                   ],</span></span>
<span class="line"><span style="color:#A6ACCD;">                   // 开启babel缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">                   // 第二次构建时，会读取之前的缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">                   cacheDirectory: true</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.(jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   limit: 8 * 1024,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   name: &#39;[hash:10].[ext]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   outputPath: &#39;imgs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                   esModule: false</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;html-loader&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">               },</span></span>
<span class="line"><span style="color:#A6ACCD;">               {</span></span>
<span class="line"><span style="color:#A6ACCD;">                 exclude: /\\.(js|css|less|html|jpg|png|gif)/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 loader: &#39;file-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                 options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                   outputPath: &#39;media&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">               }</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       },</span></span>
<span class="line"><span style="color:#A6ACCD;">       plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">         new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           filename: &#39;css/built.[contenthash:10].css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new OptimizeCssAssetsWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">           template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">           minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">             removeComments: true</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">         }),</span></span>
<span class="line"><span style="color:#A6ACCD;">         new WorkboxWebpackPlugin.GenerateSW({</span></span>
<span class="line"><span style="color:#A6ACCD;">           /*</span></span>
<span class="line"><span style="color:#A6ACCD;">             1. 帮助serviceworker快速启动</span></span>
<span class="line"><span style="color:#A6ACCD;">             2. 删除旧的 serviceworker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">             生成一个 serviceworker 配置文件~</span></span>
<span class="line"><span style="color:#A6ACCD;">           */</span></span>
<span class="line"><span style="color:#A6ACCD;">           clientsClaim: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">           skipWaiting: true</span></span>
<span class="line"><span style="color:#A6ACCD;">         })</span></span>
<span class="line"><span style="color:#A6ACCD;">       ],</span></span>
<span class="line"><span style="color:#A6ACCD;">       mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">       devtool: &#39;source-map&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在入口Js中注册service-worker</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     import { mul } from &#39;./test&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     import &#39;../css/index.css&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     function sum(...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       return args.reduce((p, c) =&gt; p + c, 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     // eslint-disable-next-line</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(mul(2, 3));</span></span>
<span class="line"><span style="color:#A6ACCD;">     // eslint-disable-next-line</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(sum(1, 2, 3, 4));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     /*</span></span>
<span class="line"><span style="color:#A6ACCD;">       1. eslint不认识 window、navigator全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">         解决：需要修改package.json中eslintConfig配置</span></span>
<span class="line"><span style="color:#A6ACCD;">           &quot;env&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             &quot;browser&quot;: true // 支持浏览器端全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">           }</span></span>
<span class="line"><span style="color:#A6ACCD;">        2. sw代码必须运行在服务器上</span></span>
<span class="line"><span style="color:#A6ACCD;">           --&gt; nodejs</span></span>
<span class="line"><span style="color:#A6ACCD;">           --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             npm i serve -g</span></span>
<span class="line"><span style="color:#A6ACCD;">             serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 注册serviceWorker</span></span>
<span class="line"><span style="color:#A6ACCD;">     // 处理兼容性问题</span></span>
<span class="line"><span style="color:#A6ACCD;">     if (&#39;serviceWorker&#39; in navigator) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       window.addEventListener(&#39;load&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">         navigator.serviceWorker</span></span>
<span class="line"><span style="color:#A6ACCD;">           .register(&#39;/service-worker.js&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">           .then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             console.log(&#39;sw注册成功了~&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           })</span></span>
<span class="line"><span style="color:#A6ACCD;">           .catch(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">             console.log(&#39;sw注册失败了~&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           });</span></span>
<span class="line"><span style="color:#A6ACCD;">       });</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意：service-worker只能在https服务器下或者localhost使用</p><p>这样即使离线也能访问网页了</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgd75cweJKqP1knLj.png" alt="image-20211104002209080" style="zoom:67%;"><p>因为网页文件已经缓存下来了</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgn8pjCK7wAP4ukmQ.png" alt="image-20211104002255849" style="zoom:50%;"><p>详情请访问：<a href="https://www.jianshu.com/p/768be2733872" target="_blank" rel="noreferrer">https://www.jianshu.com/p/768be2733872</a></p><h6 id="项目体积优化" tabindex="-1">项目体积优化： <a class="header-anchor" href="#项目体积优化" aria-hidden="true">#</a></h6><h6 id="使用cdn引入" tabindex="-1">使用CDN引入 <a class="header-anchor" href="#使用cdn引入" aria-hidden="true">#</a></h6><p><strong>前言</strong> CDN（内容分发网络）指请求资源的方式，即通过script头去请求对应的脚本资源的一种方式，项目里配置之后不需要通过npm包管理工具去下载配置的包。 目的：将引用的外部js、css文件剥离开来，不编译到vendor.js中，而是用资源的形式引用，这样浏览器可以使用多个线程异步将vendor.js、外部的js等加载下来，达到加速首页展示效果。</p><ol><li>在vue.config.js进行配置 本人对vue、vuex、vue-router、axios、element-ui、echarts进行了cdn引用。（请求element-ui、echarts的cdn较慢）</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">  //生产环境标记</span></span>
<span class="line"><span style="color:#A6ACCD;">  const IS_PRODUCTION = p<wbr>rocess.env.NODE_ENV === &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  //配置引用cdn的js、css地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  const cdn = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      css: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      js: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.2/vue-router.min.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://unpkg.com/element-ui@2.13.2/lib/index.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //配置打包时使用CDN节点（加入externals外部扩展）， 忽略打包的第三方库</span></span>
<span class="line"><span style="color:#A6ACCD;">  //左面放package.json中的扩展的名称,右面放项目依赖的名称(项目初始化要用的名称)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const externals = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 属性名称 vue, 表示遇到 import xxx from &#39;vue&#39; 这类引入 &#39;vue&#39;的，不去 node_modules 中找，而是去找全局变量 Vue（其他的为VueRouter、Vuex、axios、ELEMENT、echarts，注意全局变量是一个确定的值，不能修改为其他值，修改为其他大小写或者其他值会报错，若有异议可留言）</span></span>
<span class="line"><span style="color:#A6ACCD;">      vue: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;vue-router&#39;: &#39;VueRouter&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      vuex: &#39;Vuex&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      axios: &#39;axios&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;element-ui&#39;: &#39;ELEMENT&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;echarts&#39;: &#39;echarts&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  chainWebpack(config) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (IS_PRODUCTION) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              config.plugin(&#39;html&#39;).tap(args =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  args[0].cdn = cdn</span></span>
<span class="line"><span style="color:#A6ACCD;">                  return args</span></span>
<span class="line"><span style="color:#A6ACCD;">              })</span></span>
<span class="line"><span style="color:#A6ACCD;">              //视为一个外部库，而不将它打包进来</span></span>
<span class="line"><span style="color:#A6ACCD;">              config.externals(externals)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }      </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2.在public/index.html文件配置 使用 webpack中自带的插件 html插件进行配置，在 index.html 中增加判断，是否使用 CDN， htmlWebpackPlugin.options 使用的是vue.config中的config.plugin(&#39;html&#39;)的插件属性。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    &lt;!-- 使用CDN的CSS文件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;% for (var i in</span></span>
<span class="line"><span style="color:#A6ACCD;">       htmlWebpackPlugin.options.cdn&amp;&amp;htmlWebpackPlugin.options.cdn.css) { %&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;link href=&quot;&lt;%= htmlWebpackPlugin.options.cdn.css[i] %&gt;&quot; rel=&quot;preload&quot; as=&quot;style&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;link href=&quot;&lt;%= htmlWebpackPlugin.options.cdn.css[i] %&gt;&quot; rel=&quot;stylesheet&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;% } %&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;!-- 使用CDN加速的JS文件，配置在vue.config.js下 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;% for (var i in</span></span>
<span class="line"><span style="color:#A6ACCD;">       htmlWebpackPlugin.options.cdn&amp;&amp;htmlWebpackPlugin.options.cdn.js) { %&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       &lt;script src=&quot;&lt;%= htmlWebpackPlugin.options.cdn.js[i] %&gt;&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;% } %&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3.易出错点</p><ol><li><p>Router is not defined <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img10863986f2694a28b5f36601c1976c8b.png" alt="在这里插入图片描述"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/img7a085daa60154d79b99e9d114eb56ef9.png" alt="在这里插入图片描述"><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgf0847ab5240b44aab83ca4bd700899b2.png" alt="在这里插入图片描述"> 解决方案： 将Router 改为 ‘VueRouter’</p></li><li><p>Uncaught TypeError: Illegal constructor <img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imga6036ad48d344387bc0431d3886e6062.png" alt="在这里插入图片描述"> 解决方案：修改externals 中‘&#39;element-ui’的value</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    const externals = {</span></span>
<span class="line"><span style="color:#A6ACCD;">     &#39;element-ui&#39;: &#39;ELEMENT&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ol><h6 id="开启gzip压缩" tabindex="-1">开启gzip压缩 <a class="header-anchor" href="#开启gzip压缩" aria-hidden="true">#</a></h6><p><strong>一、背景</strong></p><blockquote><p>在使用vue-cli3搭建项目的时候，当使用npm run build进行生产环境打包的时候会发现有以下显示：</p><p>我们可以看到Gzipped那一列，也就是编译生成后的每一个文件都会有对应的Gzipped文件，</p><p>并且比原文件小了不止3倍，这无疑会大大节省服务器的网络带宽。那什么是gzip呢？</p></blockquote><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpeGFt,size_16,color_FFFFFF,t_70.png" alt="截图"></p><p><strong>二、认识gzip</strong></p><p><strong>1、什么是gzip</strong></p><blockquote><p>gzip是GNUzip的缩写，最早用于UNIX系统的文件压缩。HTTP协议上的gzip编码是一种用来改进web应用程序性能的技术，</p><p>web服务器和客户端（浏览器）必须共同支持gzip。目前主流的浏览器：Chrome、firefox、IE等都支持该协议。常见的服务器如Apache，Nginx，IIS同样支持gzip。</p></blockquote><p><strong>2、gzip工作原理</strong></p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpeGFt,size_16,color_FFFFFF,t_70-1656944803871143.png" alt="gzip工作原理"></p><p>**1)**浏览器请求url，并在request header中设置属性accept-encoding：gzip，表明浏览器支持gzip。</p><p>**2)**服务器收到浏览器发送的请求之后，判断浏览器是否支持gzip，如果支持gzip，则向浏览器传送压缩过的内容，不支持则向浏览器发送未经压缩的内容。</p><p>一般情况下，浏览器和服务器都支持gzip，response headers返回包含content-encoding: gzip。</p><p>**3)**浏览器接收到服务器的响应之后判断内容是否被压缩，如果被压缩则解压缩显示页面内容。</p><p>下面我们打开taobao查看一下示例（google）：</p><p>从上图的Content-Encoding那一列我们可以看到，前面三个文件都使用的是gzip文件。 下面再放一张网络图(我自己查看的时候Request Headers没有Accept-Encoding这一项emmm很尴尬)，可以更清晰。</p><p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgwatermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpeGFt,size_16,color_FFFFFF,t_70-1656944889638145.png" alt="淘宝截图"></p><p><strong>3、哪些文件可以进行gzip压缩</strong> gzip 可以压缩所有的文件，但是这不代表我们要对所有文件进行压缩，我们写的代码（css,js）之类的文件会有很好的压缩效果，但是图片之类文件则不会被 gzip 压缩太多，因为它们已经内置了一些压缩，一些文件（比如一些已经被压缩的像.zip文件那种）再去压缩可能会让生成的文件体积更大一些。当然已经很小的文件也没有去压缩的必要了。</p><p><strong>三、如何配置</strong><strong>1、为什么前端要配置</strong> 看起来只需要服务端参与：当浏览器请求时，服务器实时压缩文件然后返回。那为什么还要前端去参与呢？ 每次请求服务端都要压缩然后返回信息回来，会增加服务器开销，压缩等级越高越消耗cpu。</p><p>我们在 Webpack打包时就直接生成高压缩等级的文件，作为静态资源放在服务器上，就会高效很多。</p><p><strong>2、如何生成gzip文件</strong> webpack中的compression-webpack-plugin就能帮我们完成这个事情。 简单配置如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// vue.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const CompressionWebpackPlugin = require(&#39;compression-webpack-plugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    configureWebpack: config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	plugin: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        		/* 压缩文件，并生产gzip文件 */</span></span>
<span class="line"><span style="color:#A6ACCD;">              new CompressionPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">                filename: &#39;[path][base].gz&#39;, // 生成的文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">                algorithm: &#39;gzip&#39;, // 类型</span></span>
<span class="line"><span style="color:#A6ACCD;">                test: new RegExp(&#39;\\\\.(js|css)$&#39;), // 匹配规则</span></span>
<span class="line"><span style="color:#A6ACCD;">                threshold: 1024, // 字节数 只处理比这个大的资源</span></span>
<span class="line"><span style="color:#A6ACCD;">                minRatio: 0.8, // 压缩率 只有比这个小的才会处理</span></span>
<span class="line"><span style="color:#A6ACCD;">                // deleteOriginalAssets: true // 删除原文件</span></span>
<span class="line"><span style="color:#A6ACCD;">              }),</span></span>
<span class="line"><span style="color:#A6ACCD;">        	]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">运行npm run build打包生成后，就可以发现生成了额外的.gz文件。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>四、nginx开启gzip功能</p><p>​ 当gzip文件已经生成了，我们只需要在nginx下配置以下一句即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gzip_static on;   // 其中gzip_static on这个属性是静态加载本地的gz文件。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220704223708226.png" alt="image-20220704223708226" style="zoom:67%;"><p><strong>需要注意的问题：</strong></p><ul><li><p>优化是对资源分配的平衡，压缩需要cpu来参与计算，所以开启压缩是需要与cpu开销问题一起来综合考虑。不能一味追求高压缩比。比如当文件很大时，压缩文件会带来明显延迟，系统CPU也会产生瞬间冲上去。</p></li><li><p><code>html、js、json、css</code>等，开启压缩，会给网站带来明显的优化效果。 而针对大文件的情况，要么事先手工压缩好，要通过其它方式提供服务，不建议在<code>nginx</code>中开启对大文件的压缩。</p></li></ul><p><strong>当然，我们也可以采用服务器进行gzip压缩</strong></p><p>浏览器请求xx.js文件时，服务器对xx.js文件进行gzip压缩后传输给浏览器</p><p>前端不用进行任何配置，也不用webpack生成gz文件，服务器进行处理，拿nginx举例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 开启gzip</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">    # 设置缓冲区大小</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_buffers 4 16k;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    #压缩级别官网建议是6</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_comp_level 6;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    #压缩的类型</span></span>
<span class="line"><span style="color:#A6ACCD;">    gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       8462;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   dist;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面有一些关于gzip的配置，首先是开启gzip，设置缓冲区大小，压缩的等级，需要压缩的文件等（如果需要更详细的配置，可以查看nginx的配置文档），看下效果：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220704230117094.png" alt="image-20220704230117094" style="zoom:67%;"><p>响应头中会携带gzip压缩配置，每次请求xx.js文件，服务器都会进行实时压缩。</p><p>两种方案的优缺点：</p><p>1、webpack打包，然后直接使用静态的gz，缺点就是打包后文件体积太大，但是不耗服务器性能； 2、使用nginx在线gzip，缺点就是耗性能，需要实时压缩，但是vue打包后的文件体积小。</p><p>这里可能有些同学就要问题，我想在有gz文件的时候进行静态压缩，不存在gz文件的时候进行在线压缩而不是加载源文件，要怎么做呢？</p><p>简单，两种配置都写上即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gzip on;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_static on;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_types text/plain text/html text/css application/x-javascript text/xml application/xml application/xml+rss text/javascript;  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>首先，gzip_static的优先级高，会先加载静态gz文件，当同目录下不存在此文件的时候，会执行在线压缩的命令。</p><p>有些小伙伴就会纳闷，既然都开启的情况下，我们怎么区分使用了静态加载还是在线压缩呢？ 响应头的Content-Edcoding:gzip表示gzip压缩已经生效，而Etag中只有简单字符表示静态资源加载，而前面带 W/ 表示启动了在线压缩。看下图：</p><img src="https://webpon-img.oss-cn-guangzhou.aliyuncs.com/imgimage-20220704230422925.png" alt="image-20220704230422925" style="zoom:50%;"><p>五、检测网站 如何去检测某个网站有没有开启gzip压缩，压缩比例是多少呢等等信息，这里提供一个快捷检查网站：站长工具</p><h6 id="去除无用代码" tabindex="-1">去除无用代码 <a class="header-anchor" href="#去除无用代码" aria-hidden="true">#</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 去除无用代码</span></span>
<span class="line"><span style="color:#A6ACCD;">new TerserPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">    terserOptions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    warnings: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    drop_console: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    drop_debugger: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    pure_funcs: [&#39;console.log&#39;, &quot;console.table&quot;] // 删除console</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-hidden="true">#</a></h6><h5 id="webpack配置详解" tabindex="-1">webpack配置详解 <a class="header-anchor" href="#webpack配置详解" aria-hidden="true">#</a></h5><h5 id="不同环境不同配置" tabindex="-1">不同环境不同配置 <a class="header-anchor" href="#不同环境不同配置" aria-hidden="true">#</a></h5><blockquote><p>实际项目中，往往不同环境有不同的构建需求。比如开发、测试和生产环境对应的后端接口地址不同，生产环境需要进行代码混淆、压缩等。</p><p>因此，往往还需要将webpack配置分成多个</p></blockquote><p>安装webpack-merge，用于合并配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     npm install webpack-merge --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>拆分webpack.config.js为以下几个配置：</p><p>基础配置 webpack.base.config.js：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">     const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const webpack = require(&#39;webpack&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     const ROOT_PATH = path.resolve(__dirname);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const SRC_PATH = path.resolve(ROOT_PATH, &#39;src&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">     const BUILD_PATH = path.resolve(ROOT_PATH, &#39;dist&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">         entry: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             index: path.resolve(SRC_PATH, &#39;index.jsx&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             path: BUILD_PATH,</span></span>
<span class="line"><span style="color:#A6ACCD;">             filename: &#39;js/[name].[hash:5].js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             extensions: [&#39;.js&#39;, &#39;.jsx&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">         },</span></span>
<span class="line"><span style="color:#A6ACCD;">         module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">             loaders: [</span></span>
<span class="line"><span style="color:#A6ACCD;">                 {</span></span>
<span class="line"><span style="color:#A6ACCD;">                     test: /\\.jsx?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     loaders: [&#39;eslint-loader&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                     include: SRC_PATH,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     enforce: &#39;pre&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }, {</span></span>
<span class="line"><span style="color:#A6ACCD;">                     test: /\\.jsx?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     loaders: [&#39;babel-loader&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                     include: SRC_PATH,</span></span>
<span class="line"><span style="color:#A6ACCD;">                     exclude: path.resolve(ROOT_PATH, &#39;node_modules&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">             ]</span></span>
<span class="line"><span style="color:#A6ACCD;">         }</span></span>
<span class="line"><span style="color:#A6ACCD;">     };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,371),o=[e];function c(t,C,r,A,i,D){return a(),n("div",null,o)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
