(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{157:function(n,e,o){var content=o(193);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(60).default)("fb8ae9c6",content,!1,{sourceMap:!1})},192:function(n,e,o){"use strict";var r=o(157);o.n(r).a},193:function(n,e,o){(n.exports=o(59)(!1)).push([n.i,"body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}",""])},199:function(n,e,o){"use strict";o.r(e);var r=o(140),l={components:{Slides:r.a},data:function(){return{content:'\x3c!-- title: 我为什么选择 Vue.js --\x3e\n\x3c!-- style: background-image: linear-gradient(#ffffffcc, #ffffffcc), url(./bg.jpg); background-position: 0 0; background-size: cover; --\x3e\n\n# 我为什么选择 <img class="svg-icon" src="./vue.svg">\n\n<small>赵锦江 - ModernWeb 2018</small>\n\n<comment>背景图来自 Vue Meetup</comment>\n\n----\n\n\x3c!-- style: background-image: url(./me.jpg); background-position: left center; background-size: contain; padding-left: 60vw; --\x3e\n\n<img src="./avatar-2.png" style="border-radius: 50%;" />\n\n赵锦江<br />\nJinjiang<br />\n勾<small>三</small>股<small>四</small><br />\n&nbsp;\n\n<comment><img class="svg-icon" src="./vue.svg"> <s><img class="svg-icon" src="./w3c.svg"></s> <img class="svg-icon-small" src="./aliyun.svg"> ⚽️ 🎹 杭州</comment>\n\n----\n\n今天的话题和 <img class="svg-icon-large" src="./vue.svg"> 有关\n\n# 旧闻 + 新闻\n\n----\n\n* 旧闻：选择 <img class="svg-icon-large" src="./vue.svg"> 的心路历程\n* 新闻：2018 <img class="svg-icon-large" src="./vue.svg"> 最新动态\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./2013-flat-vs-real-design.jpg); background-position: center center; background-size: cover; --\x3e\n\n<comment>http://www.flatvsrealism.com/</comment>\n\n# Story 2013\n\n----\n\n\x3c!-- Zepto --\x3e\n\n## 背景\n\n* 我刚刚入职手机淘宝不久\n* Mobile App 刚刚起步\n* Mobile Web：Zepto\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./mobile-phone.jpg); background-position: 0 0; background-size: cover; --\x3e\n\n### 如何把 web app 的模式带到 mobile web/app？\n\n<comment>pexels.com</comment>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff99, #ffffff99), url(./backbone.png); background-position: 0 0; background-size: cover; --\x3e\n\n### [Backbone.js](http://backbonejs.org) 如何？\n\n当时 MVC 框架对于前端来说都还是很高级的东西\n\n----\n\n来看一段真实的代码\n\n----\n\n![code sample](./code-sample-1.png)\n\n----\n\n![code sample](./code-sample-2.png)\n\n----\n\n![code sample](./code-sample-3.png)\n\n----\n\n![code sample](./code-sample-4.png)\n\n----\n\n### *问题被规模放大*\n\n大量重复繁琐的代码\n\n----\n\n并不是最理想的解法\n\n一定还可以更简单直接\n\n----\n\n同时……\n\n### MVVM 架构逐渐进入视野\n\n----\n\n### MVVM 架构\n\n```\n[View] (presentation)\n ↑messages ↓commands ↑↓data-bindings\n[ViewModel] (unsaved data)\n ↑↓sync\n[Model] (data)\n```\n\n----\n\n### *对问题的思考*\n\n* 引入 MVVM 架构\n* 先引入 data-binding\n* 更多的约定 -> 简单直接的语法\n* 体积要小，执行效率要高\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffffcc, #ffffffcc), url(./ng-ko.png); background-position: 0 0; background-size: cover; --\x3e\n\n### 当时 data-binding 的主流方案\n\n* ng: digest / dirty check\n* ko: JSON -> `observable(...)`\n\n----\n\n### 我的想法\n\n* 简洁：保持 JSON 的格式\n* 高效：No dirty check\n\n<small>尽量通过 `Object.defineProperty` 响应</small>\n\n----\n\n\x3c!-- /jinjiang.zjj/lib-noble --\x3e\n\n于是我启动了一个内部的小项目\n\n解决数据响应问题\n\n----\n\n\x3c!-- /jinjiang.zjj/lib-noble/blob/master/lib/w.js --\x3e\n\n### 截取一小段代码注释\n\n<small>\n<pre><code>/**\n * 为一个数据对象设置无法被枚举的 `__watchers__` 属性。\n * 用来记录这个 `data` 对象上所有的监听器。\n * @private\n *\n * @param  {object} data\n */</code></pre>\n</small>\n\n----\n\n\x3c!-- /jinjiang.zjj/lib-noble/blob/master/lib/a.js --\x3e\n\n### 截取一小段代码注释\n\n<small>\n<pre><code>/**\n * 将数组 `arr` 进行可监听初始化。\n * 使其项目发生改变时触发事件，\n * 主要受影响的接口有：\n * `push`, `pop`, `shift`, `unshift`, `sort`, `reverse`；\n * 另外由于封装 `arr[index]` 和 `length` 有一定难度，\n * 故将这部分操作改为 `setItem(index, value)` 和 `setLength(length)`。\n * @alias module:W.formatArray\n * @function\n *\n * @param  {array} arr\n */</code></pre>\n</small>\n\n----\n\n### *关键实现原理*\n\n* `Object.defineProperty`\n* `__watchers__`\n* `setItem()` + `setLength()`\n\n----\n\n\x3c!-- https://github.com/vuejs/vue/blob/v0.10.0/src/observer.js#L35:L47 --\x3e\n\x3c!-- style: background-image: url(./vue-0.10.png); background-position: center center; background-size: cover; --\x3e\n\n与此同时，我发现了 <img class="svg-icon-large" src="./vue.svg"> [v0.10](https://github.com/vuejs/vue/blob/v0.10.0/src/observer.js#L35:L47)\n\n----\n\n### *关键实现原理*\n\n* `Object.defineProperty`\n* `__emitter__`\n* `&dollar;set()` + `&dollar;remove()`\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./1-me-too.jpg); background-position: center center; background-size: cover; --\x3e\n\n## 不谋而合 👻\n\n<comment>pexels.com</comment>\n\n----\n\n* 不谋而合的“认同感”\n* 框架和 API 设计也有很多想法一致\n* 极简主义 小巧高性能\n* 比自己 (还没) 写的更成熟可靠\n\n----\n\n所以我选择了 <img class="svg-icon-large" src="./vue.svg">\n\nThat\'s it?\n\n----\n\n其实不然……\n\n我还没有和团队讨论 <img class="svg-icon-large" src="./vue.svg">\n\n----\n\n当我兴奋的把 <img class="svg-icon-large" src="./vue.svg">\n\n拿给同事们看的时候……\n\n----\n\n> 问：这是哪家公司做的？\n>\n> 我：🤔\n>\n> 问：它真的比 Google 做出来的东西🐂吗？\n>\n> 我：😳\n>\n> 问：它值得我花时间学吗？\n>\n> 我：😓\n>\n> 问：太棒了！所以我选择 Zepto\n>\n> 我：🙀\n\n----\n\n后来大家还是没有选择 <img class="svg-icon-large" src="./vue.svg"> ☹️\n\n----\n\n只有我自己不甘心\n\n默默坚持用了下去 🧐\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./2014-material.png); background-position: 0 0; background-size: cover; --\x3e\n\n# Story 2014\n\n----\n\n\x3c!-- /jinjiang.zjj/tool-json-butler --\x3e\n\x3c!-- http://jsonmate.com --\x3e\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./json-mate.png); background-position: 0 0; background-size: cover; --\x3e\n\n### 用 <img class="svg-icon-large" src="./vue.svg"> 做的第一个项目\n\n内部项目：JSON Butler\n\n用在桌面端可视化编辑 JSON 数据\n\n(类似 jsonmate)\n\n<comment>jsonmate</comment>\n\n----\n\n<img class="svg-icon-large" src="./vue.svg"> 的特点和优势完全发挥了出来\n\n项目进展异常顺利\n\n----\n\n\x3c!-- style: background-image: url(./json-butler-code.png); background-position: 0 0; background-size: cover; --\x3e\n\n### 当时的代码组织方式\n\n* 所有的 template 放在一起\n* 所有的 JS 放在一起\n* 所有的 CSS 放在一起\n\n----\n\n### *问题被规模放大*\n\n随着项目的发展，代码的可维护性受到极大的挑战\n\n----\n\n### *问题被规模放大*\n\n修改同一个组件的行为和样式要同时在两个不同的大目录里找文件\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./webcomponents.png); background-position: 0 0; background-size: cover; --\x3e\n\n与此同时\n\n我通过 <img class="svg-icon-large" src="./w3c.svg"> HTML 中文兴趣组\n\n发现了 Web Components\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./webcomponents.png); background-position: 0 0; background-size: cover; --\x3e\n\n### 以及一个新的 JS 框架 [Polymer](https://www.polymer-project.org/1.0/docs/)\n\n1. 万物皆组件 (tag)\n2. 每个组件各放置 HTML/CSS/JS\n3. 通过打包工具构建在一起\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./zorro-html.png); background-position: 0 0; background-size: cover; --\x3e\n\n自己根据这个思路做了个 side project：[zorro-html](http://zorro-html.github.io)\n\n<small>基于 Polymer (Web Components 思想) 复刻 Bootstrap</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./polymer.png); background-position: 0 0; background-size: cover; --\x3e\n\n### *问题被规模放大*\n\nPolymer 组件的[代码](https://github.com/zorro-html/z-panel/blob/master/z-panel.html)还是信息密度不够高，有很多不得已重复和繁琐的写法\n\n----\n\n### *对问题的思考*\n\n一、未来的 web app\n\nUI 都是由组件组合出来的\n\n----\n\n### *对问题的思考*\n\n二、每个组件一个文件，里面就一小段 `<template>`、一小段 `<style>` 和一小段 `<script>`\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./vue-loader.png); background-position: center center; background-size: contain; --\x3e\n\n<small>You may guess what I\'ve found next:</small>\n\n### vue-loader\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./1-me-too.jpg); background-position: center center; background-size: cover; --\x3e\n\n## 不谋而合<sup>2</sup> 👻\n\n<comment>pexels.com</comment>\n\n----\n\n我迫不及待的把 <img class="svg-icon-large" src="./vue.svg">\n\n再次推荐给团队\n\n----\n\n所以我们选择了 <img class="svg-icon-large" src="./vue.svg">?\n\nHappy Ending?\n\n----\n\n> 勾股，你说的这个东西确实不错，但是用起来还是挺麻烦的，有好多工作要准备。你看人家 Google 的东西都是一整套的，拿来就能用，而且大家相互不用多说就都会用。\n\n----\n\n### *问题被规模放大*\n\n我们需要的不仅仅是一个好的框架，而是一整套方案，包括库、工具、文档、流程设计、布道等等。\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./2015-apple-watch.png); background-position: top center; background-size: cover; --\x3e\n\n# Story 2015\n\n----\n\n### 开始丰富工程基础和布道\n\n<small>\n<ul>\n  <li>《NPM+CommonJS 不好意思 我们来晚了》</li>\n  <li>《Just‐vue vue+webpack 工程落地》</li>\n  <li>《无线前端的图片相关工作流程梳理》</li>\n  <li>《Vue.js 码源学习笔记》</li>\n  <li>……</li>\n</ul>\n</small>\n\n----\n\n<small>并有幸请来了作者尤雨溪做交流</small>\n\n![](./meet-evanyou.jpg)\n\n----\n\n经过自己不断的努力，手机淘宝前端团队终于有越来越多的人选择了 <img class="svg-icon-large" src="./vue.svg">\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./think-about-vue.png); background-position: center center; background-size: auto; --\x3e\n\n经过这次深度学习和实践 <img class="svg-icon-large" src="./vue.svg">\n\n也产生了一些自己的想法\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./think-about-vue.png); background-position: center center; background-size: auto; --\x3e\n\n### *对问题的思考*\n\n1、模板的实现也许可以脱离 document fragment 因为 dom 操作比 JavaScript 运算要慢得多\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./think-about-vue.png); background-position: center center; background-size: auto; --\x3e\n\n### *对问题的思考*\n\n2、如果把模板的解析工作尽可能多的提前处理好，那么 runtime 可以更小更快\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./think-about-vue.png); background-position: center center; background-size: auto; --\x3e\n\n### *对问题的思考*\n\n3、对 template -> JSON 的抽象也许能够使得 Vue 的开发体验移植到其它各类 UI 编程的场景中。\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff33, #ffffff33), url(./vue-native-weibo-before.png); background-position: center center; background-size: auto; --\x3e\n\n# Story 2015<sup><small>6月</small></sup>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff33, #ffffff33), url(./vue-native-weibo-before.png); background-position: center center; background-size: auto; --\x3e\n\n<img class="svg-icon-large" src="./vue.svg"> + Native? 🤔\n\n----\n\n\x3c!-- style: background-color: #333; background-image: linear-gradient(#ffffff88, #ffffff88), url(./shenjs.png); background-position: center center; background-size: contain; --\x3e\n\n参加了深圳某 JS 会议\n\n碰到了很多同行 也再次碰到了尤雨溪\n\n----\n\n从大家的交流中得到了很多启发和鼓励\n\n也坚定了自己的想法\n\n----\n\n发起了一个内部试验项目\n\n尝试将当时的 <img class="svg-icon-large" src="./vue.svg"> 和\n\n手机淘宝的 native 技术\n\n进行改造和融合\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./vue-native-email.png); background-position: 0 0; background-size: cover; --\x3e\n\n会后连夜设计了\n\nJS bridge API 的第一个版本\n\n----\n\n\x3c!-- style: background-color: #EB1440; background-image: url(./1111.png); background-position: 130% 125%; background-size: 50%; --\x3e\n\n最终成品：[Weex](https://weex.apache.org/)\n\n2015-11-11 <img src="./tmall.png" /> “首发”\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff33, #ffffff33), url(./vue-native-weibo-after.png); background-position: center center; background-size: auto; --\x3e\n\n终于有人知道我做什么了😂\n\n----\n\n所以 <img src="./tmall.png" /> 也选择了 <img class="svg-icon-large" src="./vue.svg">-like\n\n<small>for mobile app only</small>\n\n----\n\n那么 mobile web + desktop？\n\n<img class="svg-icon-large" src="./vue.svg"> 了解一下 🤪\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff33, #ffffff33), url(./2016-pokemon-alphago.jpg); background-position: center center; background-size: cover; --\x3e\n\n# Story 2016\n\n----\n\n大家仍会对 <img class="svg-icon-large" src="./vue.svg"> 的能力提出质疑……\n\n----\n\n### 最关键的一个问题\n\n> 问：能否支持 IE8？\n>\n> 我：也许可以 &%\\*&dollar;\\#@ 试试看……\n\n----\n\n事情不了了之……\n\n----\n\n但在我心里这实际上是一个\n\n### “昨天的问题”\n\n----\n\n事实证明在当年年末\n\n包括 <img src="./tmall.png" /> 在内的多条产品线\n\n放弃了对 IE8 的支持……\n\n----\n\n在 2016 年\n\n我有幸加入了 <img class="svg-icon-large" src="./vue.svg"> 团队 🎉\n\n有了更多交流的机会\n\n----\n\n紧接着 <img class="svg-icon-large" src="./vue.svg"> v2.0 启动\n\n并于同年正式发布\n\n----\n\n### <img class="svg-icon-large" src="./vue.svg"> v2.0\n\n* virtual-DOM\n* 更多编译时 + 更小运行时\n* 跨平台渲染支持\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./1-me-too.jpg); background-position: center center; background-size: cover; --\x3e\n\n## <s>不</s>有谋<s>而</s>有合 👻\n\n<comment>pexels.com</comment>\n\n----\n\n与此同时……\n\n<img src="./tmall.png" /> 全年的几个大型活动\n\n基于 Weex 顺利完成\n\n----\n\n年底到了，大家再一次坐下来谈\n\n<img class="svg-icon-large" src="./vue.svg"> 了解一下 🤪\n\n----\n\n> 我们觉得 <img class="svg-icon-large" src="./vue.svg"> 能力完全没问题\n>\n> 但是生态不够繁荣……\n\n----\n\n在我看来这又是一个\n\n### “昨天的问题”\n\n而且……\n\n----\n\n* 去年的问题：核心能力\n* 今年的问题：周边生态\n\n----\n\n> 我：我现在没有办法给你一个繁荣的生态，\n>\n> 但我打赌你明年不会再问这个问题了\n\n----\n\n最终 <img src="./tmall.png" /><sup>\\*</sup>选择了 <img class="svg-icon-large" src="./vue.svg">\n\n<small>\\*面向消费者端业务</small>\n\n----\n\n稍微多说一点……\n\n<small>所以 2017 年 <img class="svg-icon" src="./vue.svg"> 的 ecosystem 发展得怎么样呢？</small>\n\n----\n\n<img class="svg-icon-large" src="./vue.svg"> 团队把发展 ecosystem\n\n作为 2017 年的重心之一\n\n----\n\n\x3c!-- logo --\x3e\n\n### 越来越多的合作\n\n<small>TypeScript / PWA / VSCode / Apollo / RxJS / Firebase / StoryBook / ...</small>\n\n----\n\n### 越来越多的库和工具\n\n<small>Nuxt / Element / Vuetify / vue-i18n / ...</small>\n\n<small>https://curated.vuejs.org<br />https://github.com/vuejs/awesome-vue</small>\n\n----\n\n### 越来越多的用户\n\n<small>GitLab / Apple / NASA / IBM / Amazon / Weibo / 滴滴 / 快手 / ...</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff66, #ffffff66), url(./fb-vue.png); background-position: left top; background-size: cover; --\x3e\n\nand (yes) facebook\n\n----\n\n\x3c!-- style: background-color: #f9f9f9; background-image: url(./vue-conf.png); background-position: top center; background-size: contain; --\x3e\n\n&nbsp;\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff66, #ffffff66), url(./vue-members.png); background-position: top left; background-size: cover; --\x3e\n\n会上的很多人后来都成为了团队的一员\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#6666, #6666), url(./team.png); background-position: top left; background-size: cover; --\x3e\n\n团队不断壮大\n\n![](./member-sean.png) ![](./member-gregg.png) ![](./member-sarah.png)\n\n----\n\n<img class="svg-icon-large" src="./vue.svg"> Ecosystem 2017\n\n* 更多的合作\n* 更多的库和工具\n* 更多的用户\n* 更蓬勃的社区\n\n----\n\n### That\'s why <img class="svg-icon-large" src="./vue.svg">\n\n----\n\n### But why why?\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./1-me-too.jpg); background-position: center center; background-size: cover; --\x3e\n\n### 1 不谋而合的认同感\n\n<small>“放弃”自研，帮助别人一起做到更好，这同样是很酷的事情</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./2-standard.jpg); background-position: center center; background-size: cover; --\x3e\n\n### 2 尊重标准 对新技术敏感\n\n<small>意味着更多的借力、和更多人更快速达成共识、更强的生命力</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./3-dev-x.jpg); background-position: center center; background-size: cover; --\x3e\n\n### 3 尊重开发者的习惯\n\n<small>关注开发者体验<br>「机器不是主人，是工具，而真正的主人应该是"人"」</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./4-scalable.jpg); background-position: center center; background-size: cover; --\x3e\n\n### 4 不知疲倦的思考<br>下一个可能会被放大的问题\n\n<small>和被放大的需求、业务、设计、技术、工程管理问题等一起成长</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./5-final-state.jpg); background-position: center center; background-size: cover; --\x3e\n\n### 5 保持绝对的简单和优雅\n\n<small>始终努力寻找你能想象到的技术的最终形态</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff88, #ffffff88), url(./6-core.jpg); background-position: center center; background-size: cover; --\x3e\n\n### 6 永远对核心的品质保持专注\n\n<small>great community and ecosystem always<br>follows great low-level core naturally</small>\n\n----\n\n### 总结\n\n* 关注问题和解法 -> 创造价值\n* 尊重习惯/优雅/简单 -> 开发体验\n* 尊重标准/关注新技术 -> 生命力\n* 探求终极形态 -> 脱颖而出\n* 专注核心 -> 社区/生态的源动力\n\n----\n\n\x3c!-- style: background-color: #000; background-image: url(./josephj-marked.png); background-position: center center; background-size: contain; --\x3e\n\n<comment>https://www.slideshare.net/josephj/webrebuild</comment>\n\n----\n\n\x3c!-- style: background-color: #000; background-image: url(./kwz-best.png); background-position: center center; background-size: contain; --\x3e\n\n<comment>木曜4超玩</comment>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff66, #ffffff66), url(./bg.jpg); background-position: 0 0; background-size: cover; --\x3e\n\n### State of <img class="svg-icon-large" src="./vue.svg"> 2018\n\n----\n\n\x3c!-- style: background-image: url(./cli.png); background-position: 0 0; background-size: contain; padding-left: 30vw; --\x3e\n\n<small>\n<ul>\n  <li>开箱即用，可零配置打开一个文件</li>\n  <li>比 v2 更好的脚手架模板</li>\n  <li>可以把所有配置信息写在同一个文件里</li>\n  <li>通过自身插件系统进行扩展</li>\n  <li>支持构建 native web components</li>\n</ul>\n</small>\n\n----\n\n\x3c!-- style: background-image: url(./vuepress.png); background-position: 0 0; background-size: contain; padding-left: 30vw; --\x3e\n\n<small>\n<ul>\n  <li>Markdown + Vue 撰写内容</li>\n  <li>高效研发 + 高性能运行</li>\n  <li>多年文档经验积累，有很多贴心的细节</li>\n</ul>\n</small>\n\n----\n\n### Vue@next\n\n<small>\n<ul>\n  <li>面向 ES2015+“现代浏览器”</li>\n  <li>基于 Proxy 重写数据响应系统</li>\n  <li>和 v2 保持同步更新</li>\n</ul>\n</small>\n\n----\n\n### Vue@3.0\n\n尽情期待\n\n----\n\n### 文档\n\n<small>\n<ul>\n  <li>guide：问题 -> 方案</li>\n  <li>api：方案 -> 问题</li>\n  <li>style guide：约定俗成</li>\n  <li>cookbook：涵盖更多更丰富的场景和辅助内容</li>\n</ul>\n</small>\n\n----\n\n### 其它\n\n<small>\n<ul>\n  <li>Vue Loader v15：配置方式更合理、SFC 规范独立</li>\n  <li>Vue UI：已经用在了 Vue CLI v3 上</li>\n  <li>Vue Test Utils：支持 Jest、Mocha 等多种测试框架</li>\n</ul>\n</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff33, #ffffff33), url(./london.png); background-position: 0 0; background-size: cover; --\x3e\n\n### 官方线下活动\n\n<small>\n<ul>\n  <li>Vue.js Summit - 8月底 圣保罗</li>\n  <li>Vue.js London - 9月下旬 伦敦</li>\n  <li>Vue Fes Japan - 11月初 东京</li>\n</ul>\n</small>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffff33, #ffffff33), url(./news.png); background-position: 0 0; background-size: cover; --\x3e\n\n### [Vue.js News](https://news.vuejs.org)\n\n100+ newsletters\n\n----\n\n\x3c!-- style: background-image: linear-gradient(#ffffffcc, #ffffffcc), url(./books.jpg); background-position: center center; background-size: cover; --\x3e\n\n# Thanks\n\n<div style="font-size: 0.5em;">\n  <img class="svg-icon" src="./weibo.svg"> 勾<small>三</small>股<small>四</small>\n  <img class="svg-icon" src="./github.svg"> Jinjiang\n  <img class="svg-icon" src="./twitter.svg"> zhaojinjiang\n  <img class="svg-icon" src="./mail.svg"> zhaojinjiang@me.com\n</div>\n\n<small>希望大家能来 [OpenCollective](https://opencollective.com/vuejs) 多多支持 <img class="svg-icon" src="./vue.svg"></small>\n\n<style>\n.svg-icon { height: 1em; vertical-align: middle; }\n.svg-icon-small { height: 0.75em; vertical-align: middle; }\n.svg-icon-large { height: 2em; vertical-align: middle; }\ns { display: inline-block; position: relative; }\ns::after { content: ""; position: absolute; top: 50%; left: 0; right: 0; height: 0.1em; background: currentColor; }\nlarge { font-size: 2em; }\ncomment { display: block; position: absolute; bottom: 5%; right: 5%; color: grey; font-size: 3.5vh; }\n</style>\n'}}},c=(o(192),o(17)),component=Object(c.a)(l,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);e.default=component.exports}}]);