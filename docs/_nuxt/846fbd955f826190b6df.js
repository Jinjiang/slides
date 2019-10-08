(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(n,e,t){var content=t(148);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("64b30acf",content,!1,{sourceMap:!1})},147:function(n,e,t){"use strict";var o=t(145);t.n(o).a},148:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,'body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}h1,h2,h3,p{margin:0 0 .5em}ol,ul{text-align:left;text-align:initial;margin:0 0 .5em .5em}img,video{max-width:80vw;max-height:60vh;border-radius:.5vw}blockquote{font-family:cursive;font-size:.6em;text-align:left;text-align:initial;background:hsla(0,0%,88.2%,.75);padding:.5em 1em;border-radius:.5vw}kbd{display:inline-block;padding:.1em .3em;color:#555;text-align:center;min-width:1em;height:1.5em;line-height:1.5;vertical-align:baseline;background-color:#fcfcfc;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:.2em;box-shadow:inset 0 -1px 0 #bbb}a{font-size:.75em}small{font-size:.6em}code{font-size:.75em}credits{position:absolute;right:2vw;bottom:2vh;font-size:16px;font-style:italic;color:grey}credits:before{content:"Credits: "}.slide-content{text-align:left;text-align:initial;line-height:1.25}',""])},149:function(n,e,t){"use strict";t(97);var o=t(146),r=t(152),l=t.n(r),c=(t(25),t(14),t(51),t(155),t(26),t(96),t(153),t(154),{components:{MarkDisplay:o.a},props:{content:String},methods:{setTitle:function(n){var title=n.title;setTimeout((function(){document.title=title||"My Slides"}))}},created:function(){var n=location.search;n.length>1&&(this.src=n.substr(1))},mounted:function(){var main=this.$refs.main;new l.a(this.$el).on("swipe",(function(n){if("mouse"!==n.pointerType)switch(n.direction){case l.a.DIRECTION_LEFT:return void main.goNext();case l.a.DIRECTION_RIGHT:return void main.goPrev()}})),joyCon.start(),joyCon.on("keydown",(function(n){switch(n.code){case"left":case"down":case"A":case"B":case"plus":case"SR-L":case"SR-R":return void main.goNext();case"right":case"up":case"X":case"Y":case"minus":case"SL-L":case"SL-R":return void main.goPrev()}}))}}),d=(t(147),t(18)),component=Object(d.a)(c,(function(){var n=this.$createElement;return(this._self._c||n)("MarkDisplay",{ref:"main",attrs:{markdown:this.content,autoBaseUrl:"",autoBlankTarget:"",autoFontSize:"",keyboardCtrl:"",urlHashCtrl:"",supportPreview:""},on:{title:this.setTitle}})}),[],!1,null,null,null);e.a=component.exports},167:function(n,e,t){var content=t(385);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("a13a93ee",content,!1,{sourceMap:!1})},384:function(n,e,t){"use strict";var o=t(167);t.n(o).a},385:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,"body{margin:0;overflow:hidden}",""])},408:function(n,e,t){"use strict";t.r(e);var o=t(150),r=t.n(o),l=(t(151),t(146)),c=t(149);Object(l.b)((function(code){return r.a.highlightAuto(code).value||code}));var d={components:{Slides:c.a},data:function(){return{content:'## Making Your <img style="height: 1.5em; vertical-align: middle;" src="./vue.svg" /> App Accessible\n\n@勾三股四\n\nVue core team & AlibabaCloud\n\n----\n\n### Agenda 议程\n\n* background 背景\n* web standards 规范\n* strategy 策略\n* utils & demo 工具 & 示例\n\n----\n\n### Background 背景\n\n* ♿️ / 🌐 = 15%\n* 2-4% severely so 相对严重\n* 👁 图像 👣 行动 👂 声音 🧠 认知\n* or ...\n\n----\n\n### Background 背景\n\n... normal people in such a situation\n\n... 常人在上述方面的特殊环境下\n\n👤 / 🌐 ≈ 100%\n\n----\n\n### Background 背景\n\nSo it\'s actually meaningful for EVERYONE.\n\n所以这是对每个人都有意义的事情。\n\n----\n\n### Background 背景\n\n| 👁 | 👣 | 👂 | 🧠 |\n| --- | --- | --- | --- |\n| 🖥 🔎 | 🖱 📱 ⌨️<br />🎮 🖊 🎛 | 🔈 🎙 | layout 布局<br />content 内容<br />details 细节 |\n\n----\n\n### 👣 Motor 关于行动\n\n* PC: mouse 鼠标 only?\n* Mobile: touch 触控 only?\n* TV: remote control 遥控器 only?\n* Keyboard ≈ efficiency 效率\n\n----\n\n### 👣 Motor 关于行动\n\nCreativities 交互创新: Apple Pencil, Voice 语音, Finger ID, Face ID ...\n\nAny backup 有备选方案吗?\n\n----\n\n### Web Standards 标准\n\n* [WCAG](https://www.w3.org/TR/WCAG21/): Web Pages 网页\n* [UAAG](https://www.w3.org/TR/UAAG20/): Browsers 浏览器, Screen Readers\n* [ATAG](https://www.w3.org/TR/ATAG20/): CMS, WYSIWYG 所见即得工具\n\n----\n\n### Web Standards 标准\n\n* [WAI-ARIA](https://w3c.github.io/aria/): Web App 富应用\n* widget, role, props, states\n\n<small>highly recommended to read<br />强烈推荐深入学习</small>\n\n----\n\n![Screenshot of getbootstrap.com](./screenshot-bootstrap.png)  \n<small>via getbootstrap.com</small>\n\n----\n\n![Screenshot of getbootstrap.com](./screenshot-bootstrap-2.png)  \n<small>via getbootstrap.com</small>\n\n----\n\n![W3C class diagram of the relationships described in the role data model](https://www.w3.org/TR/wai-aria-1.2/img/rdf_model.png)  \n<small>[Big SVG Picture](https://www.w3.org/TR/wai-aria-1.2/img/rdf_model.png)</small>\n\n----\n\n![Screen Reader / Browser Combinations](./a11y-survey-combinations.png)  \n<small>https://webaim.org/projects/screenreadersurvey7/#browsercombos</small>\n\n----\n\n### Strategy 实践策略\n\n1. Atoms 原子组件\n1. Groups 组件容器\n1. Relationships 业务关系描述\n1. App Layout 应用框架\n\n<small><i>灵感源自 inspired from: [atomic design](http://atomicdesign.bradfrost.com)</i></small>\n\n----\n\n### Strategy 1: Atoms\n\n* HTMLElement: tag name, attrs\n* Component: role, props, states, tabindex\n\n<small>use them properly 把它们的语义用好用对</small>\n\n----\n\n```html\n<label for="foo">\n  Foo\n</label>\n<input\n  id="foo"\n  type="checkbox"\n  checked\n/>\n```\n\n----\n\n```html\n<div id="label">\n  Foo\n</div>\n<div\n  tabindex="0"\n  role="checkbox"\n  aria-labelledby="label"\n  aria-checked="true"\n  class="checkbox"\n></div>\n```\n\n----\n\n#### Btw you would<br />use _ARIA_ a lot from now on ...\n\n接下来你会用到好多 _ARIA_\n\n----\n\n### Strategy: Atoms\n\nSupply text alternatives: icons, images, photos, charts ...\n\n提供必要的文本替代品\n\n----\n\n### Strategy 1: Atoms\n\nSupply long description for some short text\n\n为一些缩写或简短的文字<br />配以更详细的描述\n\n----\n\n### Strategy 2: Groups\n\nmenu / tree / list / table / grid / ...\n\n<small>a [treegrid example](https://w3c.github.io/aria-practices/examples/treegrid/treegrid-1.html) via W3C</small>\n\n----\n\n*All above could be encapsulated by a component.*\n\n*上述两方面内容均可封装在组件库内*\n\nby component lib authors.\n\n----\n\n### Strategy 3:<br />Relationships\n\n* `aria-flowto`\n* `aria-controls`, `aria-owns`\n* `aria-activedescendant`\n* `aria-errormessage`\n\n<small>interaction logic 描述交互逻辑关系</small>\n\n----\n\n<small>a [listbox example](https://w3c.github.io/aria-practices/examples/listbox/listbox-scrollable.html) via W3C</small>\n\n----\n\n### Strategy 3:<br />Relationships\n\n* `aria-labeledby`\n* `aria-describedby`\n* `aria-details`\n\n<small>descriptions more than label<br />更多的文本描述关系</small>\n\n----\n\n*The relationships should be specified with business logic together.*\n\n*这部分关系描述是需要业务研发团队根据实际情况来完成的*\n\nby business dev team.\n\n----\n\n### Strategy 4: Layout\n\n* landmarks 应用全局布局\n* "skip to content" 开门见山\n* current 路由描述\n\n----\n\n### Strategy 4: Layout\n\n* [live region(s)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 实时播报\n\n<small>to announce dynamic content changes through assistive technologies<br />\n用来通过读屏软件播报动态内容的变化</small>\n\n----\n\n*It should be supplied in the scaffold.*\n\n*这部分内容应该封装在应用脚手架内*\n\nby scaffold generator/authors.\n\n----\n\n### Strategy: 总结\n\n* Atoms, Groups: component lib 组件库\n* Relationships: business team 业务团队\n* App Layout: scaffold 脚手架\n\n----\n\n## So ...\n\n----\n\n### Routines 常规操作\n\n* `role`, `aria-*` 特性\n* ID refs 全局唯一引用\n* `tabindex`, focus control 焦点控制\n* modal dialog 模态对话框\n* keyboard shortcuts 快捷键\n* live region 实时播报\n\n----\n\n### That\'s Why I Wrote\n\n## [Vue A11y Utils](https://jinjiang.github.io/vue-a11y-utils/)\n\n----\n\n## Let\'s Demo Now\n\n----\n\n### Example 1:<br />`<VueAria>` Component &<br />`MixinId` Mixin<br />`MixinTravel` Mixin\n\n[open](https://codesandbox.io/embed/3yvly4zzlq?module=%2Fsrc%2FApp.vue)\n\n----\n\n### Example 2:<br />`<VueAria>` Component &<br />`MixinId` Mixin<br />`<VueFocusTrap>` Component\n\n[open](https://codesandbox.io/embed/4x0r6kprkw?module=%2Fsrc%2FApp.vue)\n\n----\n\n### Example 3:<br />`MixinShortcuts` Mixin\n\n[open](https://codesandbox.io/embed/5mkxjq5l1x?module=%2Fsrc%2FApp.vue)\n\n----\n\n### Example 4:<br />`<VueLive>` Component\n\n[open](https://codesandbox.io/embed/w7jx205nll?module=%2Fsrc%2FApp.vue)\n\n----\n\n## You can see the docs here:\n\nhttps://jinjiang.github.io/vue-a11y-utils/\n\n----\n\n## And more examples:\n\nhttps://jinjiang.github.io/vue-a11y-examples/\n\n----\n\n### Conclusions 总结\n\n* background 背景\n* web standards 规范\n* strategy 策略\n* utils & demo 工具 & 示例\n\n----\n\n### And don\'t forget 额外的\n\n* pushing designer for 推动设计团队\n  * accessible color pattern 配色方案\n  * accessible interactions 交互改进\n* testing 测试\n* continuous iterations 持续迭代\n\n----\n\n### References\n\n* [Vue Accessibility Guide (wip PR)](https://github.com/vuejs/vuejs.org/pull/1002)\n* [Element](https://github.com/ElemeFE/element), [VEUI](https://github.com/ecomfe/veui), [eslint plugin](https://github.com/maranran/eslint-plugin-vue-a11y)\n* W3C [aria](https://w3c.github.io/aria/) & [practices](https://w3c.github.io/aria-practices/)\n\n----\n\n# Thanks\n\n<img style="height: 1em; vertical-align: middle;" src="./github.svg" /> jinjiang\n✉️ zhaojinjiang@me.com\n\n\x3c!--\nresources:\n- vue.svg\n- screenshot-bootstrap.png\n- screenshot-bootstrap-2.png\n- a11y-survey-combinations.png\n- github.svg\n--\x3e\n'}}},m=(t(384),t(18)),component=Object(m.a)(d,(function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})}),[],!1,null,null,null);e.default=component.exports}}]);