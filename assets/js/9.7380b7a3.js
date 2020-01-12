(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{180:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("前端项目部署的环境往往是多环境的,最熟悉的例如:测试环境,生产环境。不同的环境下往往api接口的域名地址是不同的,那麽就会存在一个问题,不同环境下项目打包部署前都需要我们去手动更改域名地址,岂不是很麻烦,甚至会出现忘记更改或者关系搞反的情况,那怎么办呢?莫慌,今天就来唠唠vue分环境打包这些事。")]),t._v(" "),t._m(2),t._v(" "),e("ul",[e("li",[t._v("vue-cli 2.x版本分环境打包步骤可以"),e("a",{attrs:{href:"http://blog.hecun.site/vue/vue%E5%A4%9A%E7%8E%AF%E5%A2%83%E6%89%93%E5%8C%85.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("猛戳这里"),e("OutboundLink")],1),t._v(".一位同事写的一篇关于vue-cli 2.x多环境下打包的文章,绝对是干货中的战斗机,所以就尽量不再重复造轮子,今天我们还是以vue-cli 3.0版本下的分环境打包方式为主。")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),e("br"),t._v(" "),e("span",[t._v("        ")]),t._v("2. 在项目根目录添加文件.env.'名称' 文件,我这里就是.env.dev文件\n"),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),e("ul",[e("li",[t._v("有几个值得关注的地方,在这里说明一哈 "),e("br"),t._v("\n1.vue-cli 3.0 多环境下打包主要得益于其对项目根目录下.env文件的支持,这部分可以"),e("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("戳这里"),e("OutboundLink")],1),t._v("查看官方文档,很详细,很是干货.")])]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("br"),t._v("\n---------------------------------一条华丽的分割线---------------------------------\n"),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前端项目之vue分环境打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端项目之vue分环境打包","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端项目之vue分环境打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-cli-2-x-分环境打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-2-x-分环境打包","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli 2.x 分环境打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vue-cli-3-0-分环境打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3-0-分环境打包","aria-hidden":"true"}},[this._v("#")]),this._v(" vue-cli 3.0 分环境打包")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("首先还是老规矩,能用代码说明的问题,绝不多bb一句,so,我们就开始,直接上代码吧。"),s("br"),this._v("\n1.package.json添加命令")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本地运行，会把process.env.NODE_ENV的值设置为'development'(默认)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build:dev"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode dev"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//dev模式下打包(测试服打包)，会把process.env.NODE_ENV的值设置为'.env.dev文件中NODE_ENV声明的值'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build"')]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//正式服打包，会把process.env.NODE_ENV的值设置为'production'(默认)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticStyle:{"background-color":"#E6A23C","border-radius":"6px",padding:"20px",color:"rgba(255,255,255,0.7)"}},[this._v("\n    注意:"),s("br"),this._v('\n           1.命令"build:dev"是可以自定义的,不是固定写法,例如你可以完全声明成"build-dev"等任何其他字段.'),s("br"),this._v("\n            2.--mode '名称'  必须与以下步骤2中的.env.'名称' 的'模式名称'字段保持一致,这里是必须滴.\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/19/16b6d14f4e8b7482?w=372&h=420&f=png&s=8131",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("以下为.env.dev文件中定义的环境变量(分环境打包依赖于该自定义的环境变量来实现)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/19/16b6d336cde4d7e7?w=478&h=812&f=png&s=27717",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span"),this._v("3.多环境下的应用(以不同生产环境下的api接口域名地址举例)")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" env "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_TITLE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseURL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("env "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" env "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build_dev'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testURL "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/19/16b6d39b8a3afbfd?w=1113&h=561&f=png&s=38912",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span"),this._v("4.打包"),s("br")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npm run build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dev "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("测试服打包")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json 中定义"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnpm run build 正式服打包\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("不同打包命令下会加载其对应模式下的环境变量,这样我们就通过改变process.env.NODE_ENV和process.env.VUE_APP_TITLE 区分打包环境,来实现分环境下项目打包.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" notes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("步骤2.env文件中NODE_ENV环境变量的值可以是'development','production','test',在这里我将其定义为'production'是因为开webpack打包时针对process.env.NODE_ENV===''production''和其他情况打出来的包结构和大小都不一样,这个有兴趣的小伙伴可以分别打包尝试下,就会一目了然.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("至此vue-cli 3.0中项目分环境打包方式就基本完毕,以下是小弟思考的关于小程序实现类似于分环境动态切换接口域名的方案,可以讨论讨论,嘿嘿.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"小程序分环境动态切换域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序分环境动态切换域名","aria-hidden":"true"}},[this._v("#")]),this._v(" 小程序分环境动态切换域名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/6/19/16b6d68189455eb6?w=776&h=447&f=png&s=26879",alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("小程序中__wxConfig.envVersion可以用来区分小程序体验版，开发板，正式版.\nenvVersion 类型为字符串")]),t._v(" "),e("p",[t._v("envVersion: 'develop',    //开发版")]),t._v(" "),e("p",[t._v("envVersion: 'trial',          //体验版")]),t._v(" "),e("p",[t._v("envVersion: 'release',     //正式版")]),t._v(" "),e("p",[t._v("这样我们就可以变通的来实现小程序中动态切换域名,避免手动注释切换的方式.")]),t._v(" "),e("h2",{attrs:{id:"end"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#end","aria-hidden":"true"}},[t._v("#")]),t._v(" END")]),t._v(" "),e("p",[e("strong",[t._v("不积跬步，无以至千里；不积小流，无以成江海。")])])])])}],!1,null,null,null);s.default=a.exports}}]);