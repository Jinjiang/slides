(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(n,t,e){var content=e(368);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(67).default)("709c5a6e",content,!1,{sourceMap:!1})},367:function(n,t,e){"use strict";var o=e(154);e.n(o).a},368:function(n,t,e){(n.exports=e(66)(!1)).push([n.i,"body{margin:0;overflow:hidden}",""])},401:function(n,t,e){"use strict";e.r(t);var o=e(146),l=e.n(o),r=(e(147),e(145)),c=e(148);Object(r.b)((function(code){return l.a.highlightAuto(code).value||code}));var d={components:{Slides:c.a},data:function(){return{content:'## 5 CSS Features\n\n... you _probably_ don\'t know\n\n<small>@Jinjiang - CSSConfCN V - 2019-03-30</small>\n\n----\n\n\x3c!-- style: background-image: url(./photo.jpg); background-position: 0 0; color: white; --\x3e\n\n### Self Introduction\n\n- Jinjiang Zhao\n- <img alt="Vue.js" src="./vue.png" style="height: 10vh; vertical-align: middle;" /> core team / <img alt="AlibabaCloud" src="./alibabacloud.png" style="height: 15vh; vertical-align: middle;" />\n\n----\n\n\x3c!-- style: text-shadow: 4px 4px 2px white; background-image: linear-gradient(0, rgba(255,255,255,.8), rgba(255,255,255,.8)), url(./cssconf-1.jpg), url(./cssconf-2-1.png), url(./cssconf-2-2.jpg), url(./cssconf-3.jpg), url(./cssconf-4.jpg); background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%; background-position: 0 0, 5vw 5vh, 15vw 15vh, 25vw 25vh, 35vw 35vh, 45vw 45vh; --\x3e\n\n### My CSS Talks in the Past\n\n- CSS in webcomponents\n- CSS memos in Taobao\n- CSS in Native\n- Exploring CSS Houdini\n\n----\n\n... always focus on new standards\n\nso does today ...\n\n----\n\n1. `********`\n1. `********`\n1. `********`\n1. `********`\n1. `********`\n\n----\n\n# 1. Float\n\n----\n\n``` css\n<div>\n  <img style="float: left;" ... />\n  <p>...</p>\n</div>\n```\n\n----\n\nWhen do you use `float` nowadays?\n\n----\n\n- side image?\n- columns?\n- what else?\n\n----\n\nWe almost never use `float` today.\n\n----\n\nBut think about where `float` came from?\n\n----\n\n<div style="display: flex;">\n  <img alt="Word Floating" src="./word-float-1.png" />\n  <img alt="Word Floating" src="./word-float-2.png" style="margin-left: 0.5em;" />\n</div>\n\n----\n\n`float` always has its value in traditional graphic design.\n\nHowever it _was_ not good enough.\n\n----\n\n<div style="display: flex;">\n  <img alt="Word Floating" src="./word-float-1.png" />\n  <img alt="Word Floating" src="./word-float-2.png" style="margin-left: 0.5em;" />\n</div>\n\n----\n\nHow to make _more_ effects with CSS 🤔?\n\n----\n\nwith [CSS Shapes](https://drafts.csswg.org/css-shapes/)\n\n----\n\n### CSS Shapes\n\n- `shape-outside`: shape or image\n- `********`\n- `********`\n\n----\n\n### `shape-outside:`\n\n`content-box`, `padding-box`, `border-box`, `margin-box`, `inset(...)`, `circle(...)`, `ellipsis(...)`, `polygon(...)`, `url(...)`, `*-gradient(...)`, ...\n\n<small>shape tool: [clippy](http://bennettfeely.com/clippy/)</small>\n\n----\n\n# Demo\n\n[demo](https://codepen.io/jinjiang/embed/EMBzpg)\n\n----\n\n### CSS Shapes\n\n- `shape-outside`: shape or image\n- `shape-margin`: length or percentage\n- `********`\n\n----\n\n### CSS Shapes\n\n- `shape-outside`: shape or image\n- `shape-margin`: length or percentage\n- `shape-image-threshold`: `0.0` - `1.0`\n\n----\n\n### `shape-image-threshold`\n\n[demo](https://codepen.io/Jinjiang/embed/NJZVOm)\n\n----\n\nHow to make _all_ the effects with CSS 🤔?\n\n----\n\n### More Effects\n\n- [CSS exclusions](https://drafts.csswg.org/css-exclusions/)\n- [CSS regions](https://drafts.csswg.org/css-regions/)\n\n----\n\n### CSS Exclusions\n\n![](./css-exclusions.png)\n\n----\n\n### CSS Regions\n\n![](./css-regions.png)\n\n<small>[Magazine-like Layout for the Web](https://www.html5rocks.com/en/tutorials/regions/adobe/) via html5rocks</small>\n\n----\n\n### CSS Regions\n\n![](./float-demo.png)\n\n<small>[Magazine-like Layout for the Web](https://www.html5rocks.com/en/tutorials/regions/adobe/) via html5rocks</small>\n\n----\n\n### Some Opinions\n\n- [CSS Regions Considered Harmful](https://alistapart.com/blog/post/css-regions-considered-harmful)\n- [The frustrations of using Shapes and Exclusions](https://benfrain.com/the-frustrations-of-using-css-shapes-and-css-exclusions/)\n  - [CSS exclusions with Queen Bey](https://www.chenhuijing.com/blog/css-exclusions-with-queen-bey/)\n\n----\n\n1. float\n1. `********`\n1. `********`\n1. `********`\n1. `********`\n\n----\n\n# 2. Page\n\nWhen you design for print media.\n\n----\n\n### `@media print {}`\n\n- no interactions\n- page size vs screen size\n- multi-pages vs 1 screen\n- "orphans", "widows"\n\n----\n\n### `@media print {}`\n\n- content accessible\n- page box\n- page break & page float\n- "orphans", "widows"\n\n----\n\n### Content Accessible\n\n``` css\n@media print {\n  a::after {\n    content: " - " attr(href);\n    font-size: 0.8em;\n  }\n}\n```\n\n----\n\n### Page Box\n\n<div style="display: flex;">\n  <img alt="Page Box" src="./PageBox.png" style="min-height: 50vh;" />\n  <img alt="Page Box" src="./page-margin.svg" style="min-height: 50vh; margin-left: 0.5em;" />\n</div>\n\n----\n\n### Page Size\n\n- `@page { size: a4; margin: 0; }`\n\n----\n\n### Page Margin Rules\n\n``` css\n@page {\n  @top-left { ... }\n  @top-center { ... }\n  @top-right { ... }\n  ...\n}\n```\n\n----\n\n### w/ Generated Content\n\n``` css\n@page {\n  @top-left { content: ... }\n  @top-center { content: ... }\n  @top-right { content: ... }\n}\nh2 { string-set: ... }\n```\n\n----\n\n### w/ Generated Content\n\n![](./css-gcpm.jpg)\n\n----\n\n### More About Generated Content\n\n- string set, running elements, footnotes\n- also: leaders, quotes, counters, bookmarks\n\n<small>Refs: [W3C CSS Generated Content](https://drafts.csswg.org/css-content/) &amp; [W3C CSS Generated Content for Page Media](https://drafts.csswg.org/css-gcpm/)</small>\n\n----\n\n### Page Breaks\n\n- `break-after`, `break-before`\n- `break-inside`\n- `orphans`, `widows`\n\n<small>Ref: [W3C CSS Fragmentation Module](https://drafts.csswg.org/css-break/) (fragmentation🤔?)</small>\n\n----\n\n### Examples\n\nMy slides: [vue-mark-display](https://github.com/jinjiang/vue-mark-display)\n\ntry <kbd>CMD</kbd>+<kbd>P</kbd> to print\n\n----\n\n``` css\n@page {\n  size: legal landscape;\n  margin: 0;\n}\n```\n\n----\n\n``` css\n@media print {\n  .slide {\n    break-after: page;\n    width: 100vw; height: 100vh;\n    overflow: hidden; position: relative;\n    display: block !important;\n    opacity: 1 !important;\n  }\n}\n```\n\n----\n\nBack to fragmentation🤔?\n\n----\n\n### Break for More Media\n\n> In CSS, <mark>in addition to paged media</mark>, certain layout features such as <mark>regions</mark> and <mark>multi-column</mark> layout create a similarly fragmented environment.\n> \n> <small>-- W3C CSS Fragmentation Module</small>\n\n----\n\n![break-before spec](./css-break.png)\n\n----\n\n### Back to Float\n\n<small>[W3C CSS Page Floats](https://drafts.csswg.org/css-page-floats/)</small>\n\n----\n\n![float spec](./css-page-floats.png)\n\n----\n\n![](./page-media-demo.png)\n\n<small>via: http://demos.pagedmedia.org/page-floats/</small>\n\n----\n\n### More About Page Media\n\nhttps://www.pagedmedia.org\n\n----\n\n1. float\n1. page\n1. `********`\n1. `********`\n1. `********`\n\n----\n\n# 3. Scroll\n\n----\n\nfor better scroll experience\n\n----\n\n- [custom scrollbar](https://drafts.csswg.org/css-scrollbars/)\n- [scroll smoothly](https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior)\n- [snap position](https://drafts.csswg.org/css-scroll-snap/)\n\n----\n\n### Custom Scrollbar\n\n- `scrollbar-color: auto|dark|light`\n- `scrollbar-color: ThreeDFace Scrollbar`\n\nbackground: [IE 5.5](https://msdn.microsoft.com/en-us/library/ff520895(v=vs.85).aspx)\n\n----\n\n### Custom Scrollbar\n\n- `scrollbar-width: auto|thin|none`\n- `scrollbar-width: <length>`\n\n----\n\nWhy not `::-webkit-scrollbar-*` 🤔?\n\n----\n\n### [3 Main Use-Cases](https://drafts.csswg.org/css-scrollbars-1/#scope)\n\n- Color scrollbars to fit better\n- Thinner scrollbars for small area\n- Customize without affecting scrollability\n\n<small>also see: https://www.w3.org/wiki/Css-scrollbars#Why_not_pseudos</small>\n\n----\n\n### Scroll Behavior\n\n- `scroll-behavior: smooth`\n\n<small>working with `el.scroll(x, y)`</small>\n\n----\n\n### Scroll Snap\n\n- `scroll-snap-type:`\n\n  `x|y|both mandatory|proximity`\n\n- `scroll-snap-align:`\n\n  `none|start|end|center`\n\n- `scroll-snap-stop: normal|always`\n\n----\n\n# Demo\n\n[demo](https://codepen.io/Jinjiang/embed/qvzGwX)\n\n----\n\n### More ahout Scroll Snap\n\n- snap padding &amp; margin\n- event model <small>[under discussion](https://github.com/w3c/csswg-drafts/issues/156)</small>\n\n----\n\n1. float\n1. page\n1. scroll\n1. `********`\n1. `********`\n\n----\n\n# 4. Font\n\n----\n\n### Common Properties\n\n- `font-weight: bold`\n- `font-style: italic|oblique`\n- `font-stretch: 200%`\n\n----\n\n### Low Level Control\n\n- `font-variation-settings`\n\n----\n\n| axis | meaning |\n| ---- | ---- |\n| `ital` | Italic |\n| `opsz` | Optical Size |\n| `slnt` | Slant |\n| `wdth` | Width |\n| `wght` | Weight |\n\n----\n\n| axis | meaning |\n| ---- | ---- |\n| `ital` | `font-style:italic` |\n| `opsz` | `font-optical-sizing` |\n| `slnt` | `font-style:oblique+angle` |\n| `wdth` | `font-stretch` |\n| `wght` | `font-weight` |\n\n----\n\n``` css\n.foo {\n  font-variations-settings:\n    "wght" 300, /* font-weight: 300; */\n    "wdth" 50%, /* font-stretch: 50%; */\n    "ital" 1, /* font-style: italic; */\n}\n```\n\n----\n\nYou can also design custom axes for a font.\n\n[An online demo](https://www.axis-praxis.org/specimens/amstelvar) and [an explanation](https://caraya.github.io/vfonts-demo/)\n\n----\n\n### Low Level Control 2\n\n- `font-feature-settings` [guide 1](https://sparanoid.com/lab/opentype-features/) [guide 2](https://helpx.adobe.com/fonts/using/open-type-syntax.html)\n\n----\n\n``` css\n.foo {\n  /* font-variant-caps: small-caps */\n  /* font-variant-position: super */\n  font-feature-settings: "smcp" "sups";\n}\n```\n\n----\n\n### More about Fonts\n\n- [W3C CSS Fonts](https://drafts.csswg.org/css-fonts-4/#font-feature-settings-prop)\n  - `font-variant-east-asian`\n  - `font-display`\n- [OpenType spec](https://docs.microsoft.com/en-us/typography/opentype/spec/)\n\n----\n\n1. float\n1. page\n1. scroll\n1. font\n1. `********`\n\n----\n\n# 5. Viewport\n\n----\n\n### HTML `<meta>` Element\n\n`<meta name="viewport" content="width=device-width, initial-scale=1.0">`\n\n----\n\n### Equals to CSS\n\n``` css\n@viewport {\n  width: extend-to-zoom 100%;\n  height: auto;\n  zoom: 1.0;\n}\n```\n\n----\n\n### More about Viewport\n\n- [W3C CSS Device Adaptation](https://drafts.csswg.org/css-device-adapt/)\n- [W3C CSS Round Display](https://drafts.csswg.org/css-round-display/)\n  - `viewport-fit: auto|cover|contain`\n  - `@media (shape: rect|round) { ... }`\n  - `shape-inside: display|...`\n  - `border-boundary: none|parent|display`\n\n----\n\n![](./round-display-1.png)\n\n<small>via https://01.org/zh/chromium/blogs/joone/2016/css-round-display-specifications</small>\n\n----\n\n![](./round-display-2.png)\n\n<small>via https://01.org/zh/chromium/blogs/joone/2016/css-round-display-specifications</small>\n\n----\n\n![](./round-display-3.png)\n\n<small>via https://01.org/zh/chromium/blogs/joone/2016/css-round-display-specifications</small>\n\n----\n\n1. float\n1. page\n1. scroll\n1. font\n1. viewport\n\n----\n\n# Thanks\n\n- <img alt="Twitter" src="./twitter.svg" style="height: 10vh; vertical-align: middle;" /> [zhaojinjiang](https://twitter.com/zhaojinjiang)\n- <img alt="Email" src="./mail.svg" style="height: 10vh; vertical-align: middle;" /> zhaojinjiang@me.com\n- <img alt="GitHub" src="./github.svg" style="height: 10vh; vertical-align: middle;" /> [Jinjiang](https://github.com/Jinjiang)\n'}}},h=(e(367),e(18)),component=Object(h.a)(d,(function(){var n=this.$createElement;return(this._self._c||n)("Slides",{attrs:{content:this.content}})}),[],!1,null,null,null);t.default=component.exports}}]);