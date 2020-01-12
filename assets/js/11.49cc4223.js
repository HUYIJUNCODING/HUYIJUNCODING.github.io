(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{182:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("ul",[n("li",[t._v("这部分可以按照官网的 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速上手"),n("OutboundLink")],1),t._v(" 来初始化项目,我使用的是npm方式")])]),t._v(" "),t._m(4),n("p",[t._v("至此,项目初始化工作就已完毕,包括上面的初始化项目结构目录,后面步骤中会对目录进行进一步完善,不过都是些按需配置的工作.")]),t._v(" "),n("hr"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),n("p",[t._v("至此项目你已经完成一半了,关于配置这里我重点说几个点,也是我在实现过程中遇到了问题的地方.")]),t._v(" "),n("div",{staticStyle:{"background-color":"rgba(255,255,255,0.5)",padding:"20px","border-radius":"6px"}},[n("strong",[t._v("1. favicon存放位置(别问我为神马,n多次失败后的经验,嘿嘿嘿!!!) ")]),n("br"),t._v(" "),t._m(8),t._v(" "),t._m(9),n("p",[t._v("     vuePress官方给出了两种不同的方式,可以"),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/default-theme-config/#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("戳这里"),n("OutboundLink")],1),t._v(",但是还是觉得有瑕疵,如果将两种方式结合起来使用,会有何化学效果,bling,bling,bling.\n因此config.js文件中的sidebar配置方式就产生了,使用后发现确实很棒,确认过眼神,是我想要的,bling,bling,bling.\n预览实现的效果,请"),n("a",{attrs:{href:"https://huyijuncoding.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前往我的blog"),n("OutboundLink")],1),t._v(".\n")]),t._v(" "),n("strong",[t._v("3. navbar模块")]),t._v(" "),n("p",[t._v("    navbar对应的模块放在docs文件夹根目录下,即与.vuepress同级,各模块以文件夹的形式建立,例如我这里的blog,  space.每一个文件下可以有一个README.md文件,也可以没有,没有的话,在navbar关联路径时候需要特定指定某一个子.md文件,避免navbar切换后\n内容为空,因为默认会找该模块下的README.md文件.\n")])]),n("p"),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",{staticStyle:{color:""}},[t._v("然后 Repository name 就填写为：GITHUBUSERNAME.github.io ,以我的为例子就是 HUYIJUNCODING.github.io,同样贴出来一张图")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[t._v("这个仓库存放本地项目代码,以后的修改均在这里进行.")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),n("p",[t._v("--------------------------------------------------一条华丽的分割线-------------------------------------------------------")]),t._v(" "),t._m(37),t._v(" "),n("p",[t._v("☀️ .md 文件中引用vue组件方法")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("局部引用"),n("br"),t._v("\n该引用方法不会覆盖当前页面,按需引入,局部展示,实例请"),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("前往文档"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("p",[t._v("❄️ 全局默认样式覆盖,颜色常量设置")]),t._v(" "),t._m(40),t._m(41),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("🌟 "),n("a",{attrs:{href:"https://www.webfx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuePress中可以使用的Emoji集合"),n("OutboundLink")],1),t._v(" "),n("br"),t._v("\n💥 "),n("a",{attrs:{href:"https://www.appinn.com/markdown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown语法资源"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"利用vuepress搭建个人博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用vuepress搭建个人博客","aria-hidden":"true"}},[this._v("#")]),this._v(" 利用vuePress搭建个人博客")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("最近抽空学习了一下vuePress来搭建一个个人博客,在整个过程中感受颇多,特此罗列,方便交流进步!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"step1-初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step1-初始化项目","aria-hidden":"true"}},[this._v("#")]),this._v(" step1 (初始化项目)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("目前vuePress官方已经发布两个版本0.x and 1.x，在使用过程中发现1.x存在一些问题。例如:项目不能热更新config.js文件中的更改，navbar显示异常等问题，因此小弟建议使用0.x。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("   1. npm install -g vuepress (全局安装vuePress)\n\n   2. mkdir 项目名称 (新建项目文件夹. 可以右键手动新建，也可以使用 mkdir 命令新建)\n\n   3. npm init -y (进入刚新建的项目文件夹,初始化项目)\n\n   4. 在项目文件夹根目录创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹,components 文件夹,override.styl文件,style.styl文件和 config.js 文件，初始项目结构如下所示：\n\n        vuepressBlog //项目文件夹\n        ├─── docs\n        │   ├──── README.md //一般用来做首页\n        │   └──── .vuepress //用于存放全局的配置、组件、静态资源等\n        |      ├── components //该目录中的 Vue 组件将会被自动注册为全局组件\n        │      ├── public // 静态资源目录\n        |      ├── override.styl //用于重写默认颜色常量，或者设置新的 stylus 颜色常量。(定义的样式常量可以在vue组件中直接使用)\n        |      ├── style.styl //会被自动应用的全局样式文件,具有比默认样式更高的优先级(需要覆盖的默认样式代码写在该文件里)\n        │      └── config.js  //配置文件的入口文件(即配置性的东西基本在这配置)\n        └── package.json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"step2-项目配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step2-项目配置","aria-hidden":"true"}},[this._v("#")]),this._v(" step2 (项目配置)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("这部分工作我们在config.js文件中做,不要问我为神马,规定,规定,规定,重要的事情说三遍!!!\n能用代码呈现的问题,我一般尽量不去bb,所以,直接贴config.js文件中的代码,直接可以复制去用的.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Stone\\'s blog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//博客标题")]),t._v("\n    description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我的个人博客'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//个人描述")]),t._v("\n    head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入到当前页面的 HTML <head> 中的标签")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加一个自定义的 favicon(网页标签的图标)")]),t._v("\n        rel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/x-icon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        href"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./favicon.ico'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apple-touch-icon'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./favicon.ico'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//适配移动端ico")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是部署到github相关的配置")]),t._v("\n    markdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lineNumbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码块显示行号")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    themeConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nav"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导航栏配置")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/'默认为docs文件夹下的README.md文件")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Space'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/space/'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitHub'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://github.com/HUYIJUNCODING'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端daily'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sidebar"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 侧边栏名称\n            collapsable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可折叠")]),t._v("\n            children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/javaScript/one'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文章地址")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/javaScript/two'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'框架相关'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            collapsable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/framework/vuepressBlog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'工具收藏'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            collapsable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/tools/one'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/blog/tools/two'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/space/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'诗和远方'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            collapsable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/space/poetryAndDistance/one'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'谝闲传'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            collapsable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/space/talk/one'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 侧边栏配置")]),t._v("\n      sidebarDepth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 侧边栏显示2级")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("    存放目录:  .vuepress -> public/favicon.ico\n\n    引用方式:  config.js文件中 href: './favicon.ico'\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2. sidebar配置方式 ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在 package.json 文件里添加两个启动命令")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("🐵此时此刻我的心情是激动地,✨,✨,✨ 那种,为啥嘞,因为 "),s("code",[this._v("npm run dev")]),this._v("项目🚀")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("本地启动项目: npm run dev\n\n打包项目: npm run build\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("到这里项目就基本完成,下来呢就是一些业务逻辑方面或者根据个人喜好锦上添花的工作,总之,基础落成,下来就剩coding的事了(写博客文章的事情,需自身去修行完成)!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"step3-部署上线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step3-部署上线","aria-hidden":"true"}},[this._v("#")]),this._v(" step3 (部署上线)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("走到这一步的小伙伴们一定是coding完成了或者基本差不多了,那麽下来我们将项目部署到GitHub上,这样仰慕你的小伙伴就可以线上访问到你的博客啦.")])]),this._v(" "),s("li",[s("p",[this._v("方式很多种,我这里只以GitHub为例 (其实我只会这个😂 😂 😂)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"登录-github-新建两个仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录-github-新建两个仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 登录 Github 新建两个仓库")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("新建仓库一： "),s("strong",[this._v("GITHUBUSERNAME.github.io（不用克隆到本地）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("这里的 GITHUBUSERNAME 是你的GitHub名称,是你的GitHub名称,是你的GitHub名称,很重要的事情说三遍,只能必须完全相同,为了更具体说明,我贴一张图.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blogs/gitHubName.png",alt:"GitHub名称",title:"GitHub名称"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blogs/createStore.png",alt:"博客部署仓库",title:"博客部署仓库"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("ok,第一个仓库就新建好了,该仓库不用clone到本地,不用做任何操作,所有代码的修改都在第二个仓库中进行,这个仓库后面关联后只是用来存放线上发布的代码的,即dist目录下的文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("新建仓库二：   "),s("strong",[this._v("这里的仓库名可以随便起,例如:blog.github.io（克隆到本地）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("如果是自己从头搭建的，那就将当前博客项目根目录下的内容拷贝到仓库二，并在仓库本地根目录下创建 deploy.sh 文件，内容如下：")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("#"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("env sh\n\n# 确保脚本抛出遇到的错误\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n\ngit init\ngit add "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\ngit commit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\ngit push "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这句需要配置自己的仓库地址,除过这句代码,其他均复制粘贴即可")]),t._v("\n\ncd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("贴出来我的仓库目录来说明")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blogs/mulu.png",alt:"合并目录",title:"合并目录"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("修改deploy.sh文件(上面代码其实已经体现,不过为了说明其重要性,在这里单独再拿出来说明哈)")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("git push "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f git@github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就上面这句代码,如果你想要部署到 https://USERNAME.github.io上,你需要将USERNAME替换成你的GitHub名称,例如我的替换成 HUYIJUNCODING,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即git push -f git@github.com:HUYIJUNCODING/HUYIJUNCODING.github.io.git master")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("到这里有的小伙伴会疑惑那仓库一和仓库二如何做到关联呢,很好,如果你有这个疑问,那我这个时候就一本正经的告诉你,刚才修改的这个地方就是解决这个问题的,用来"),s("strong",[this._v(" 关联两个仓库")]),this._v(",仓库一就类似于我们的线上服务器,仓库二用于本地开发.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在 package.json 文件夹中添加发布命令")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//运行项目")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打包项目")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发布项目")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"publish"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs && bash deploy.sh"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打包发布一步完成(自定义的命令,为了将打包和发布合并成一步执行)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"一座蒂花之秀落成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一座蒂花之秀落成","aria-hidden":"true"}},[this._v("#")]),this._v(" 🎉 一座蒂花之秀落成!")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("发布命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run deploy  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅仅发布项目,如果代码有更新,该操作前需要npm run build下")]),t._v("\n打包发布命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run publish "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先打包项目,再发布项目,就不需要再单独执行一次npm run build")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("完成后就可以运行自己的项目啦,这里是我的地址: "),s("a",{attrs:{href:"https://huyijuncoding.github.io/",target:"_blank"}},[this._v("https://huyijuncoding.github.io/")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blogs/construct.png",alt:"项目结构目录",title:"项目结构目录"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("以为我bb完了,对吗?怎么可能,对啊,当然还没有,哈哈哈!,下面是一些友情提示和福利")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("页面覆盖引用"),s("br"),this._v("\n该引用方法会覆盖当前整个页面(除过navbar),因此展示内容都在.vue组件里面写,跟我们写vue代码就一样了.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blogs/yinru.png",alt:".md文件引入vue组件",title:"覆盖引入组件"}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" override"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("styl "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用于重写默认颜色常量，或者设置新的 stylus 颜色常量。(定义的样式常量可以在vue组件中直接使用)")]),t._v("\n style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("styl "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会被自动应用的全局样式文件,具有比默认样式更高的优先级(需要覆盖的默认样式代码写在该文件里)")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("当我们需要覆盖vuePress中一些默认样式,例如,navbar,sidebar字体颜色,背景色等就可以在style.styl文件中直接重写,\n当需要定义些或者重写颜色常量,就可以在override.tyl中设置然后在.vue组件中直接使用.")])])}],!1,null,null,null);s.default=e.exports}}]);