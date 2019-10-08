(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(n,e,t){var content=t(148);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("64b30acf",content,!1,{sourceMap:!1})},147:function(n,e,t){"use strict";var o=t(145);t.n(o).a},148:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,'body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}h1,h2,h3,p{margin:0 0 .5em}ol,ul{text-align:left;text-align:initial;margin:0 0 .5em .5em}img,video{max-width:80vw;max-height:60vh;border-radius:.5vw}blockquote{font-family:cursive;font-size:.6em;text-align:left;text-align:initial;background:hsla(0,0%,88.2%,.75);padding:.5em 1em;border-radius:.5vw}kbd{display:inline-block;padding:.1em .3em;color:#555;text-align:center;min-width:1em;height:1.5em;line-height:1.5;vertical-align:baseline;background-color:#fcfcfc;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:.2em;box-shadow:inset 0 -1px 0 #bbb}a{font-size:.75em}small{font-size:.6em}code{font-size:.75em}credits{position:absolute;right:2vw;bottom:2vh;font-size:16px;font-style:italic;color:grey}credits:before{content:"Credits: "}.slide-content{text-align:left;text-align:initial;line-height:1.25}',""])},149:function(n,e,t){"use strict";t(97);var o=t(146),r=t(152),c=t.n(r),l=(t(25),t(14),t(51),t(155),t(26),t(96),t(153),t(154),{components:{MarkDisplay:o.a},props:{content:String},methods:{setTitle:function(n){var title=n.title;setTimeout((function(){document.title=title||"My Slides"}))}},created:function(){var n=location.search;n.length>1&&(this.src=n.substr(1))},mounted:function(){var main=this.$refs.main;new c.a(this.$el).on("swipe",(function(n){if("mouse"!==n.pointerType)switch(n.direction){case c.a.DIRECTION_LEFT:return void main.goNext();case c.a.DIRECTION_RIGHT:return void main.goPrev()}})),joyCon.start(),joyCon.on("keydown",(function(n){switch(n.code){case"left":case"down":case"A":case"B":case"plus":case"SR-L":case"SR-R":return void main.goNext();case"right":case"up":case"X":case"Y":case"minus":case"SL-L":case"SL-R":return void main.goPrev()}}))}}),d=(t(147),t(18)),component=Object(d.a)(l,(function(){var n=this.$createElement;return(this._self._c||n)("MarkDisplay",{ref:"main",attrs:{markdown:this.content,autoBaseUrl:"",autoBlankTarget:"",autoFontSize:"",keyboardCtrl:"",urlHashCtrl:"",supportPreview:""},on:{title:this.setTitle}})}),[],!1,null,null,null);e.a=component.exports},163:function(n,e,t){var content=t(377);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("c99275ae",content,!1,{sourceMap:!1})},376:function(n,e,t){"use strict";var o=t(163);t.n(o).a},377:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,"body{margin:0;overflow:hidden}",""])},413:function(n,e,t){"use strict";t.r(e);var o=t(150),r=t.n(o),c=(t(151),t(146)),l=t(149);Object(c.b)((function(code){return r.a.highlightAuto(code).value||code}));var d={components:{Slides:l.a},data:function(){return{content:'## 挖掘鍵盤的潛能\n\n赵锦江 ModernWeb 2019\n\n\x3c!--\n\n挖掘鍵盤的潛能\n\n現今很多 Ｗeb 上的用戶交互基本都被觸屏和滑鼠所佔領，但實際上鍵盤操作一直被我們低估甚至忽略。\n本主題會嘗試整理介紹使用者交互中鍵盤的相關用例，並展示相應的前端實現。\n\n--\x3e\n\n----\n\n<div style="position: absolute; z-index: 1; font-size: 0.5em; right: 5vw; bottom: 10vh;">\n  <img class="icon" src="./github.svg"> Jinjiang\n  <img class="icon" src="./twitter.svg"> zhaojinjiang\n  <img class="icon" src="./mail.svg"> zhaojinjiang@me.com\n</div>\n\n<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex;">\n  <iframe height="100vh" style="width: 50vw; height: 100vh;" scrolling="no" src="//codepen.io/Jinjiang/embed/OYWJwX/" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>\n  <iframe height="100vh" style="width: 50vw; height: 100vh;" scrolling="no" src="//codepen.io/Jinjiang/embed/XQGmOR/" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>\n</div>\n\n----\n\n\x3c!-- Today\'s topic is about keyboard. --\x3e\n\n这份主题是和 <kbd>键盘</kbd> 有关的\n\n----\n\n\x3c!-- style: background-image: url(touch.jpg), url(mouse.jpg); background-position: -50vw 0, 0 0; --\x3e\n\n\x3c!-- All we interact with web (UI) today is more like touching or mousing. --\x3e\n\n我们今天的人机交互基本都是以鼠标和触控操作为主的。\n\n----\n\n\x3c!-- style: background-image: url(vr.jpg), url(watch.jpg); background-position: -50vw 0, 20vw 0; --\x3e\n\n\x3c!-- And there are many more smart ways to interact with machines. --\x3e\n\n并且还在不断产生更多更加智能的人机交互方式。\n\n----\n\n\x3c!-- Keyboard is less used anymore. --\x3e\n\n<kbd>键盘</kbd> 操作越来越少被使用和讨论到。\n\n----\n\n\x3c!-- backgroundImage: virtual-keyboard.png --\x3e\n\x3c!-- style: background-size: contain; --\x3e\n\n\x3c!-- But why we can not live without keyboard? --\x3e\n\n但是 <kbd>键盘</kbd> 真的能够完全被这些交互方式所取代吗？\n\n----\n\n\x3c!-- As a discovery,\n\nplease do not care about the agenda...\n\nJust start! --\x3e\n\n这是一个“探索性”的话题，请跟随我们一起开始吧！\n\n----\n\n\x3c!-- The most commonly used cases is: --\x3e\n\n<kbd>键盘</kbd> 最最最常见的用例：\n\n- `<input />`\n- `onchange`\n- `oninput`\n\n----\n\n\x3c!-- _code sample: password validation_ --\x3e\n\n_代码示例：密码强度检测_\n\n[演示](demo-1.html)\n\n----\n\n\x3c!-- Sometimes it\'s not enough. --\x3e\n\n有的时候这样的 <kbd>键盘</kbd> 操控还不足够\n\n----\n\n\x3c!-- Introduce more microinteractions --\x3e\n\n让我们引入更多的“微交互”：\n\n- `onkeypress`\n- `onkeydown`\n- `onkeyup`\n\n----\n\n\x3c!-- _code sample: enter to submit_ --\x3e\n\n_代码示例：通过 <kbd>回车键</kbd> 提交表单_\n\n[演示](demo-2.html)\n\n----\n\n\x3c!-- What does `keyCode` mean? --\x3e\n\n这里的 `keyCode` 是什么含义？\n\n----\n\n> Returns a Number representing a system and implementation dependent numerical code identifying the unmodified value of the pressed key.\n\n<credits><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode">KeyboardEvent.keyCode - MDN</a></credits>\n\n----\n\n> Returns a Number representing a system and implementation dependent <mark>numerical code identifying the unmodified value of the pressed key</mark>.\n\n<credits><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode">KeyboardEvent.keyCode - MDN</a></credits>\n\n----\n\n\x3c!-- backgroundImage: keycode-table.png --\x3e\n\x3c!-- style: background-size: contain; --\x3e\n\n&nbsp;\n\n----\n\n\x3c!-- backgroundImage: keycode-deprecated.png --\x3e\n\nWait ...\n\n----\n\n\x3c!-- backgroundImage: keycode-deprecated.png --\x3e\n\nWhy deprecated?\n\n----\n\n\x3c!-- Because we have some new APIs. --\x3e\n\n因为现在我们有了新的 API！\n\n----\n\n- `KeyboardEvent.key` <small><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key">MDN</a></small>\n- `KeyboardEvent.code` <small><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code">MDN</a></small>\n\n[演示](demo-2-2.html)\n\n----\n\n\x3c!-- How to understand `key` & `code`? --\x3e\n\n### How?\n\n如何理解 `key` 和 `code`？\n\n----\n\n- `key` - <mark>表面上</mark>想输入的内容\n- `code` - <mark>实际上</mark>按下的物理按键\n\n----\n\n### 就好像……\n\n----\n\n\x3c!-- backgroundImage: key-bg.png --\x3e\n\x3c!-- style: background-position: right bottom; --\x3e\n\n\x3c!-- ### Key - what you want to do --\x3e\n\n### 表面上\n\n----\n\n\x3c!-- backgroundImage: code-bg.jpg --\x3e\n\x3c!-- style: background-size: contain; color: black --\x3e\n\n\x3c!-- ### Code - what you actually do --\x3e\n\n### 实际上\n\n<credits>https://condenaststore.com/featured/on-the-internet-peter-steiner.html</credits>\n\n----\n\n![](keyboard-layout.svg)\n\n\x3c!-- Case of `key`: Arrow Keys --\x3e\n\n适用 `key` 的例子：<kbd>方向键</kbd>\n\n----\n\n![](keyboard-layout.svg)\n\n\x3c!-- Case of `code`: Ctrl + A/a --\x3e\n\n适用 `code` 的例子：<kbd>Ctrl</kbd> + <kbd>A/a</kbd>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(code-values.png), url(key-values.png); background-position: 0 0, 0 50vh, 0 0; --\x3e\n\n\x3c!-- MDN key/code Sheets --\x3e\n\n参考 MDN 的 `key`/`code` 映射表\n\n[key values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)\n[code values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)\n\n\n----\n\n\x3c!-- Is there any smarter way?\n\n(for key shortcuts) --\x3e\n\n对于常用的 <kbd>键盘</kbd> 快捷键，有没有更加直接有效的用法？\n\n----\n\n\x3c!-- style: background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(vue-keyboard-over.png); background-size: contain; --\x3e\n\n### `<vue-keyboard-over>`\n\n[演示](https://jiongks.name/vue-keyboard-over/) [原始码](https://github.com/Jinjiang/vue-keyboard-over/blob/master/src/keyboard-over.vue#L41:L80)\n\n----\n\n\x3c!-- So let\'s talk a little bit about key shortcuts btw. --\x3e\n\n再多讨论一些 <kbd>键盘</kbd> 快捷键的内容……\n\n----\n\n\x3c!-- Why key shortcuts important and irreplaceable? --\x3e\n\n为什么 <kbd>键盘</kbd> 快捷键一直非常重要且无法被忽略或替代？\n\n----\n\n\x3c!-- - Less intuition.\n- More efficiency.\n\nGood for high frequency interactions. --\x3e\n\n用较弱的直观性换来更高的操作<mark>效率</mark>\n\n通常适用于产品的<mark>重度</mark>核心用户需要完成的<mark>高频</mark>操作\n\n----\n\n\x3c!-- style: background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(mac.jpg), url(windows.jpg); background-position: 0 0, 41vw 0, 0vw 0; background-size: cover, cover, contain; --\x3e\n\n### 举一些常见的例子\n\n<div style="min-width: 75vw; display: flex; justify-content: space-around;">\n  <ul>\n    <li>Ctrl + C/V/X</li>\n    <li>Ctrl + W</li>\n    <li>Alt + F4</li>\n  </ul>\n  <ul>\n    <li>⌘ + C/V/X</li>\n    <li>⌘ + W</li>\n    <li>⌘ + Q</li>\n  </ul>\n</div>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(mac.jpg); --\x3e\n\n⌘ + `,`\n\n----\n\n\x3c!-- style: background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(mac.jpg); --\x3e\n\n- ⌘ + ⇧ + `[`\n- ⌘ + ⇧ + `]`\n\n----\n\n### Why?\n\n为什么我们需要 `key` & `code`？\n\n----\n\n\x3c!-- Control everything in web app, not only text input. --\x3e\n\n提供更宽广的 <kbd>键盘</kbd> 操控能力，而不仅仅是输入文本。\n\n----\n\n\x3c!-- What else to control except the shortcuts like above? --\x3e\n\n除了快捷键之外，<kbd>键盘</kbd> 还可以能拿来“操控”什么呢？\n\n----\n\n\x3c!-- 1. Tab Nav --\x3e\n\n1. <kbd>TAB</kbd> 键导航\n\n[示例](demo-3.html)\n\n----\n\n\x3c!-- 2. Enter/Space/Esc Nav --\x3e\n\n2. <kbd>Enter/Space/Esc</kbd> 导航\n\n[示例](demo-4.html)\n\n----\n\n\x3c!-- 3. Arrow Nav --\x3e\n\n3. <kbd>方向键</kbd> 导航\n\n[示例](demo-5.html)\n\n----\n\n\x3c!-- 4. More complicated ctrl --\x3e\n\n4. 更复杂的操控\n\n[示例](https://w3c.github.io/aria-practices/examples/listbox/listbox-scrollable.html)\n\n----\n\n\x3c!-- 5. Finally, key shortcuts --\x3e\n\n5. 最后，再看一个快捷键的示例\n\n[示例](https://5mkxjq5l1x.codesandbox.io)\n[原始码](https://codesandbox.io/s/5mkxjq5l1x)\n\n----\n\n\x3c!-- ## Some Futher Thinkings --\x3e\n\n## 一些延伸思考\n\n----\n\n\x3c!-- todo: accessible lift in taipei --\x3e\n\n### 1. Accessibility\n\n(可访问性/信息无障碍化)\n\n----\n\n### 2. Place-onas\n\n----\n\n![](placeonas-1.png)\n\n<credits>[What voice UI is good for (and what it isn\'t) | Inside Intercom](https://www.intercom.com/blog/benefits-of-voice-ui/)</credits>\n\n----\n\n![](placeonas-2.png)\n\n<credits>[What voice UI is good for (and what it isn\'t) | Inside Intercom](https://www.intercom.com/blog/benefits-of-voice-ui/)</credits>\n\n----\n\n\x3c!-- style: background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(cross-device-ux.png); --\x3e\n\n\n\x3c!-- 3. understanding interactions better --\x3e\n\n### 3. 更好的理解人机交互\n\n\x3c!-- decouple interactions for each kind of input/output from same information or requirement --\x3e\n\n将人机交互解耦为两层\n\n1. 信息和需求的种类\n2. 不同设备或平台  \n   对应的输入输出的种类\n\n----\n\n\x3c!-- 4. today component-based UI architecture make it more operable --\x3e\n\n### 4. 今天基于组件化的 UI 架构使其变得更加可行\n\n----\n\n\x3c!-- ### Actually, in 2008 ... --\x3e\n\n### 实际上，早在 2008 年……\n\n![](w3c-wai-aria.png)\n\n<credits>[W3C Accessible Rich Internet Application (WAI-ARIA)- 4 February 2008](https://w3c.github.io/aria/)</credits>\n\n----\n\n\x3c!-- style: background-image: url(vr.jpg), url(watch.jpg); background-position: -50vw 0, 20vw 0; color: black; --\x3e\n\n\x3c!-- 5. help you to think about next generation input/output/devices for the future --\x3e\n\n### 5. 帮助我们去探索未来各式各样的设备的人机交互方式\n\n----\n\n### One More Thing\n\nGamePad API + Switch JoyCon\n\n----\n\n# Thanks\n\n<div style="font-size: 0.5em;">\n  <img class="icon" src="./github.svg"> Jinjiang\n  <img class="icon" src="./twitter.svg"> zhaojinjiang\n  <img class="icon" src="./mail.svg"> zhaojinjiang@me.com\n</div>\n\n\x3c!--\n\nMDN - keyCode\n  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode\nMDN - key\n  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key\nMDN - code\n  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code\nMDN - key/code sheets\n  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values\n  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values\n\n--\x3e\n\n<style>\n.slide-content {\n  background-image: url(keyboard.jpg);\n}\n.icon { height: 1em; vertical-align: middle; }\n</style>\n'}}},m=(t(376),t(18)),component=Object(m.a)(d,(function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})}),[],!1,null,null,null);e.default=component.exports}}]);