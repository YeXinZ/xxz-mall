const fs = require("fs"); //操作本地文件，多用于构建多项目，按需引入
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引入
const productionGzipExtensions = /\\.(js|css|json|txt|html|ico|svg)(\\?.\*)?$/i; // 开启gzip压缩， 按需写入
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  devServer: {
    open: false, //服务器启动后打开浏览器
    port: 3000, //指定端口号
    host: "127.0.0.1", //指定要使用的主机
    https: false, //默认情况下，将通过HTTP为dev-server提供服务
    hotOnly: false, //启用热模块替换
  },
  assetsDir: "static", //存放打包后的文件夹
  publicPath: "/",
  outputDir: "dist", // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存
  productionSourceMap: false, //是否生成对应map文件（未被压缩加密的代码），设置为 false 以加速生产环境构建
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          // 生成文件的路径，也可以与webpakc打包的一致。
          // 下面这句话非常重要！！！
          // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
          staticDir: path.join(__dirname, "dist"),
          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: ["/", "/about"],
          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new Renderer({
            inject: {
              foo: "bar",
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: "render-event",
          }),
        }),
        //压缩
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8,
        }),
      ],
    };
  },
  // webpack配置
  chainWebpack: () => {},
  css: {
    // css的处理
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    extract: true,
    sourceMap: false, //是有开启css source map(为 true 之后可能会影响构建的性能)
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_variable.scss";
        `,
      },
    },
  },
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {},
};
