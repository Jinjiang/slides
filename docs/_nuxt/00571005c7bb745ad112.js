(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(n,e,t){var content=t(191);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(60).default)("f3d53036",content,!1,{sourceMap:!1})},190:function(n,e,t){"use strict";var o=t(156);t.n(o).a},191:function(n,e,t){(n.exports=t(59)(!1)).push([n.i,"body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}",""])},200:function(n,e,t){"use strict";t.r(e);var o=t(140),l={components:{Slides:o.a},data:function(){return{content:'# Weex vs. Web\n\n----\n\n## Agenda\n\n* Weex 中的 Web 标准\n* Weex 中的 Web 研发模式\n* 其它注意事项\n\n----\n\n# Web 标准\n\n----\n\n# HTML\n\n----\n\n### HTML elements\n\n100 个左右 [link](https://www.w3.org/TR/2012/WD-html-markup-20120315/elements.html#elements)\n\n----\n\n### Weex Components\n\n\\~15\n\n`<div>` `<scroller>` `<list>` `<cell>` `<refresh>` `<loading>` `<text>` `<image>` `<input>` `<textarea>` `<switch>` `<slider>` `<indicator>` `<video>` `<a>` `<web>`\n\n----\n\n### 缺失的内容\n\n* 块级语义化标签\n* 内联文本标签\n* 表单类标签\n\n----\n\n### 块级语义化标签\n\n```\n<template>\n  <section>\n    <text>Hello World</text>\n  </section>\n</template>\n```\n\n----\n\n### 实际的效果\n\n```\n<template>\n  <div>\n    <text>Hello World</text>\n  </div>\n</template>\n```\n\n----\n\n### 内联语义化标签\n\n```\n<template>\n  <strong>Hello World</strong>\n</template>\n```\n\n----\n\n### 实际的效果\n\n```\n<template>\n  <text style="font-weight: bold;">\n    Hello World\n  </text>\n</template>\n```\n\n----\n\n### 表单类标签\n\n* `<input>`\n* `<textarea>`\n* `radio -> <image> + <text>`\n* `checkbox -> <switch>`\n* `<select> -> picker`\n\n----\n\nUsing Vue `<template>`\n\n----\n\n### Demo\n\nHow to use HTML\n\n----\n\n### 富文本组件 wip [link](https://github.com/alibaba/weex/issues/835)\n\n----\n\n# CSS\n\n----\n\n### 命题维度\n\n* 选择器\n* 属性名\n* 属性值 (和单位)\n\n----\n\n### 特点\n\n* 单个 class 选择器 (CSS in JS 最佳实践)\n* 支持伪类 wip [link](https://github.com/alibaba/weex/issues/942)\n* 属性支持情况 [link](https://weex-project.io/cn/references/web-standards.html)\n* 支持 PostCSS / CSS Next\n\n----\n\n### Demo\n\nHow to write CSS\n\n----\n\n# JavaScript\n\n----\n\n* ES -> Babel / Polyfill [link](https://weex-project.io/cn/references/web-standards.html)\n* Native DOM APIs [link](https://weex-project.io/cn/references/native-dom-api.html)\n* Device APIs [link](https://weex-project.io/cn/references/web-standards.html)\n\n----\n\n因为 Weex 在运行时\n\n## 只有一个\n\nJavaScript 引擎实例\n\n----\n\n所以我们必须面对\n\n## 长效内存泄漏\n\n的问题\n\n----\n\n### 目前我们采取的措施\n\n* 强制 `"use strict"`\n* 强制 `Object.freeze` 全局变量\n* and ...\n\n----\n\n## JS Service\n\nwip [link](https://github.com/alibaba/weex/issues/1938)\n\n----\n\n* 在多实例中统一管理\n* 拥有完整的生命周期管理\n* 甚至跨多种 JS 框架统一管理\n\n----\n\n## 能力、数据和内存\n\n得到有效管理和增强\n\n----\n\n### 脑洞比较大……\n\nPolyfill、AMD 实现、第三方库引入、native 回调函数管理、全局数据共享、全局路由管理、Worker...\n\n----\n\n### Demo\n\nHow to use AMD with JS Service\n\n----\n\n额外的，基于\n\n## Vue 2.0\n\n开发习惯几乎一致\n\n差异整理 [link](https://weex-project.io/cn/references/vue/index.html)\n\n----\n\n\x3c!--\n## Vue 2.0\ntemplate/style/script\n--\x3e\n\n## 传统 Hybrid 扩展？\n\n尽请关注我们今天的最后一个分享\n\n----\n\n# 研发模式\n\n----\n\n## 单页研发，多页聚合\n\n----\n\n# SPA?\n\nsingle-page application\n\n----\n\n## SPA 的优势\n\n* 避免多个页面重复加载资源\n* 自定义专场效果\n* 几乎没有页面之间的等待\n* 全局数据共享、全局状态共享\n\n----\n\n## 其实用 SPA 也有纠结\n\n* 首次打开的开销\n* 内存管理问题\n* 原生路由的配合、开放规则的应对\n* 所有页面必须基于相同的 JS 框架\n\n----\n\n## What Weex Do?\n\n----\n\n* 每个页面一个 JS bundle\n* 可以支持原生的转场效果\n* 运行时优化、缓存和预加载\n* 通过 JS Service 进行资源复用\n* 通过 JS Service 进行全局数据/状态管理\n\n----\n\n* 页面秒开\n* 子团队 / 个人可以自由选择 JS 框架\n* 为内存管理提供更好的引导\n* 支持原生 & 开放规则的路由\n\n----\n\n## Goodbye SPA\n\n----\n\n# 工程研发\n\n----\n\n## 初始化项目\n\n* `weex-toolkit`\n* `vue-cli`\n\n----\n\n## 开发\n\n前端主流编辑器均可\n\n----\n\n## 调试\n\n端上预览、hot-reload、devtool\n\n----\n\n## 测试\n\nMacaca (wip) / ESLint\n\n----\n\n## 打包\n\nwebpack / babel / postcss ……  \n除此之外还有很多选择\n\n----\n\n## 发布\n\n搭建、发布、缓存推送  \n沿用 Web 研发的最佳实践\n\n----\n\n## 监控\n\n埋点，曝光埋点、交互埋点  \n沿用 Web 研发的最佳实践\n\n----\n\n### Demo\n\n一个典型的 Weex 项目\n\n----\n\n# 构建整个 App\n\n----\n\n* 组件生态和市场\n* `weex-pack`\n\n尽请关注我们今天的最后一个分享\n\n----\n\n# 其它注意事项\n\n----\n\n* 长列表性能优化 `<list>` / `<cell>`\n* 流式渲染 `append="tree|node"`\n* View 嵌套层级不宜过多 < 10\n* HTML5 版本支持范围比 Native 大\n* 推荐 Devtool 真机调试\n* issues / gitter welcome！\n\n----\n\n# Thanks\n'}}},r=(t(190),t(17)),component=Object(r.a)(l,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);e.default=component.exports}}]);