(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{159:function(n,e,t){var content=t(378);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(67).default)("5effe22e",content,!1,{sourceMap:!1})},377:function(n,e,t){"use strict";var o=t(159);t.n(o).a},378:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,"body{margin:0;overflow:hidden}",""])},398:function(n,e,t){"use strict";t.r(e);var o=t(146),r=t.n(o),l=(t(147),t(145)),m=t(148);Object(l.b)(function(code){return r.a.highlightAuto(code).value||code});var c={components:{Slides:m.a},data:function(){return{content:'# {CSS}\n\n----\n\n## 个人简介\n\n* 赵锦江\n* [W3C HTML 中文兴趣组](http://www.w3.org/html/ig/zh/)\n* 无线事业部 阿里巴巴 杭州\n* [@勾三股四](http://weibo.com/mx006)\n* [jiongks.name](http://jiongks.name)\n\n----\n\n# {My CSS Conf 1}\n\n----\n\n## 2015-01-10 Beijing\n\n![](./images/my-css-conf-1-4.jpg)\n\n----\n\n## A Lightening Talk\n\nIt\'s really lighten but...\n\n![](./images/my-css-conf-1-5.jpg)\n\n----\n\n## A Lightening Talk\n\n![](./images/your-css-conf-1-2.png)\n\n----\n\n## A Lightening Talk\n\n![](./images/your-css-conf-1-3.png)\n\n----\n\n## Resources\n\n- [CSS Scoping in Web Components](http://jiongks.name/slides/css-scoping/)\n- screencast: [lighting talk](http://www.tudou.com/programs/view/8bvwGHaL6T4/)\n- screencast: [more details](http://www.tudou.com/programs/view/dz4aXjDFnLw/)\n\n----\n\n## http://zorro.io\n\n![](./images/zorro.png)\n\n----\n\n## That\'s the Future\n\n![](./images/future.jpg)\n\n----\n\n## But ... Reality\n\n![](./images/unhappy1.jpg)\n\n----\n\n# {Our Team Memos}\n\n----\n\n## Why Talk About Memos?\n\nThat\'s practice stories we have learned in the past\n\n![](https://gtms03.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png)\n\n----\n\n## Why Talk About Memos?\n\nAnd hope to inspire you success in reality\n\n![](./images/happy.jpg)\n\n----\n\n## Story is Cheap?\n\n## "Show Me the **Code!**"\n\n----\n\n## Story is Cheap?\n\nPeople need really *general* lessons, not by-company/by-team/by-closed ones or which means nothing to themselves\n\n----\n\n## Story is Cheap?\n\nSo our stuff is just pure, no deps, and (will be soon) open-sourced\n\n----\n\n# Agenda\n\n* screens\n* images\n* conventions\n\n----\n\n# Screens\n\n----\n\n## DailyFrontEnd\n\n![](./images/screens.png)\n\n----\n\n## DailyFrontEnd\n\n![](./images/screensizes.jpg)\n\n----\n\n## DailyFrontEnd\n\n![](./images/galaxy-phones.jpg)\n\n----\n\n### DailyFrontEnd\n\n![](./images/suprised.png)\n\n----\n\n## All Kinds of Devices\n\n- different size\n- different DPR\n- "surprised" devices\n\n----\n\n## Flexible Web Design\n\n![](./images/flexible.jpg)\n\n----\n\n## Flexible Web Design\n\n![](./images/flexible-en.jpg)\n\n----\n\n## Flexible Web Design\n\n[![](./images/flexible-author.png)](https://css-tricks.com/five-questions-with-zoe-mickley-gillenwater/)\n\n----\n\n## Flexible Web Design\n\n> 现在,拿起你手中正在阅读的这本书,调整它的大小,以便更易于阅读。\n\n----\n\n## tips\n\n## **Break by-self**\n\n![](./images/broken.jpg)\n\n----\n\n## lib.flexible\n\n![](./images/rem.png)\n\n----\n\n## lib.flexible\n\n1: assume device width is fixed\n\n- just one width-fixed PSD file\n- length unit = `<width>` / `10rem`\n\n----\n\n## lib.flexible\n\n![](./images/px.png)\n\n----\n\n## lib.flexible\n\n2: if you want to show more in larger screen\n\n- dpr related length\n- e.g. font size \\*= dpr\n\n[github](https://github.com/amfe/lib-flexible)\n\n----\n\n# Responsive\n\n----\n\n## For Screen Height\n\nset some breakpoints\n\n- 4:3\n- 16:9\n- and ...\n\n----\n\n## Webview Bar\n\n![](./images/webviewbar.png)\n\n----\n\n## Vertical Responsive\n\n![](./images/responsive.png)\n\n----\n\n## How About iPad/Laptop?\n\n![](./images/ipad.png)\n\n----\n\n## How About iPad/Laptop?\n\nSadly say, few successful case around ...\n\n----\n\n## Challenges\n\n- different teams\n- different business\n- different *entrance*\n\n----\n\n## tips\n\n## **Choose the right one, not the "best".**\n\n----\n\n## tips\n\n## **Use the "power" of it, not everything.**\n\n----\n\n# Images\n\n----\n\n## Workflow\n\n![](./images/ata.png)\n\n----\n\n## Workflow\n\n![](./images/workflow-old.png)\n\n----\n\n## Workflow\n\n- crop from `*.psd` file\n- export to images folder\n- write html/css/javascript code\n  - adjust image size and quality\n- deploy (upload)\n  - separate images from code\n\n----\n\n## Three Matters\n\n- file size\n- display size\n- (quality)\n\n----\n\n## Three Matters\n\n![file size, display size, quality](./images/imgimgimg.png)\n\n----\n\n## Our Improvement\n\nWe make lots of efforts on it\n\n----\n\n## Our Improvement\n\nsearching for Photoshop plugins\n\n----\n\n## Our Improvement\n\nImage CDN: custom size and quality by url suffix\n\n----\n\n## Our Improvement\n\n`lib.img`: automatically get the url\n\n----\n\n## Our Improvement\n\n![](./images/px2rem.png)\n\n----\n\n## Our Improvement\n\n`px2rem`: parse `*px` to `*rem`\n\n[npm](https://www.npmjs.com/package/px2rem)\n\n----\n\n## Our Improvement\n\n![](./images/img4dpr.png)\n\n----\n\n## Our Improvement\n\n`gulp-img4dpr`: separate bg image url for each dpr\n\n(will be open-sourced soon)\n\n----\n\n## The Problem\n\n## But It\'s not cool...\n\n----\n\n## The Problem\n\n## as all above *fragmented*\n\n----\n\n## The Better Solution\n\nWe put them together finally\n\n----\n\n## The Better Solution\n\n![](./images/workflow-now.jpg)\n\n----\n\n## The Better Solution\n\n![](./images/things.png)\n\n----\n\n## The Better Solution\n\n![](./images/result.png)\n\n----\n\n# Yes We Use PostCSS\n\n----\n\n## Easy to Collect\n\n![](./images/postcss.png)\n\n----\n\n## Easy to Integrate\n\n- gulp\n- grunt\n- webpack\n- ...\n\n----\n\n## tips\n\n## **Just focus on the Scenes, not a single feature.**\n\n----\n\n## tips\n\n## **Find a good platform which can transfer you to everywhere.**\n\n----\n\n# Conventions\n\n----\n\n## Conventions\n\n> We need same coding style! same tools! same editor ...\n\n----\n\n## Follow the Edge\n\n> I want to try React.js, CSS Next ...\n\n----\n\n## So the Problem is\n\nHow to follow conventions and new technologies at the same time?\n\n----\n\n## But Actually\n\nFirst, following the same conventions in a group is not necessary, but be in a repo.\n\n----\n\n## But Actually\n\nSecond, many projects dies very fast.\n\n----\n\n## Our Strategy\n\n- *No* forced team conventions\n- Build a *generator marketplace*\n\n----\n\n## "Adam"\n\n![](./images/adam.png)\n\n----\n\n## "Adam"\n\n![](./images/templates.png)\n\n----\n\n## "Adam": Intro\n\n- a simple project generator cli\n- and adam marketplace service\n- easily find, use, create and fork generators with git repos\n\n----\n\n## "Adam": Rules\n\nEvery person could create its own generator and influence more people to use.\n\n----\n\n## "Adam": Benefits\n\n- The edge parts could be imported easily.\n- And the good parts will be applied much.\n\n----\n\n## "Adam": Reality\n\nYou must have ability to work fine with all kinds of popular tools, coding styles, frameworks, solutions ... now.\n\n----\n\n## tips\n\n## **Find the keypoint clearly and always keep walking fast!**\n\n----\n\n# Tips Review\n\n----\n\n## tips\n\n**Break by-self**\n\n----\n\n## tips\n\n**Just focus on the Scenes, not a single feature.**\n\n----\n\n## tips\n\n**Find a good platform which can transfer you to everywhere.**\n\n----\n\n## tips\n\n**Choose the right one, not the "best".**\n\n----\n\n## tips\n\n**Use the "power" of it, not everything.**\n\n----\n\n## tips\n\n**Find the keypoint clearly and always keep walking fast!**\n\n----\n\n## tips\n\n- break by-self\n- focus on the scenes\n- find a platform\n- choose the "right"\n- use the "power"\n- keep walking fast\n\n----\n\n# Thanks\n'}}},h=(t(377),t(17)),component=Object(h.a)(c,function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})},[],!1,null,null,null);e.default=component.exports}}]);