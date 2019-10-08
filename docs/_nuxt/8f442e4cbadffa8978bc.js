(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{145:function(e,n,t){var content=t(148);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(67).default)("64b30acf",content,!1,{sourceMap:!1})},147:function(e,n,t){"use strict";var o=t(145);t.n(o).a},148:function(e,n,t){(e.exports=t(66)(!1)).push([e.i,'body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0;color:#2c3e50}h1,h2,h3,p{margin:0 0 .5em}ol,ul{text-align:left;text-align:initial;margin:0 0 .5em .5em}img,video{max-width:80vw;max-height:60vh;border-radius:.5vw}blockquote{font-family:cursive;font-size:.6em;text-align:left;text-align:initial;background:hsla(0,0%,88.2%,.75);padding:.5em 1em;border-radius:.5vw}kbd{display:inline-block;padding:.1em .3em;color:#555;text-align:center;min-width:1em;height:1.5em;line-height:1.5;vertical-align:baseline;background-color:#fcfcfc;border:1px solid;border-color:#ccc #ccc #bbb;border-radius:.2em;box-shadow:inset 0 -1px 0 #bbb}a{font-size:.75em}small{font-size:.6em}code{font-size:.75em}credits{position:absolute;right:2vw;bottom:2vh;font-size:16px;font-style:italic;color:grey}credits:before{content:"Credits: "}.slide-content{text-align:left;text-align:initial;line-height:1.25}',""])},149:function(e,n,t){"use strict";t(97);var o=t(146),r=t(152),c=t.n(r),l=(t(25),t(14),t(51),t(155),t(26),t(96),t(153),t(154),{components:{MarkDisplay:o.a},props:{content:String},methods:{setTitle:function(e){var title=e.title;setTimeout((function(){document.title=title||"My Slides"}))}},created:function(){var e=location.search;e.length>1&&(this.src=e.substr(1))},mounted:function(){var main=this.$refs.main;new c.a(this.$el).on("swipe",(function(e){if("mouse"!==e.pointerType)switch(e.direction){case c.a.DIRECTION_LEFT:return void main.goNext();case c.a.DIRECTION_RIGHT:return void main.goPrev()}})),joyCon.start(),joyCon.on("keydown",(function(e){switch(e.code){case"left":case"down":case"A":case"B":case"plus":case"SR-L":case"SR-R":return void main.goNext();case"right":case"up":case"X":case"Y":case"minus":case"SL-L":case"SL-R":return void main.goPrev()}}))}}),h=(t(147),t(18)),component=Object(h.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("MarkDisplay",{ref:"main",attrs:{markdown:this.content,autoBaseUrl:"",autoBlankTarget:"",autoFontSize:"",keyboardCtrl:"",urlHashCtrl:"",supportPreview:""},on:{title:this.setTitle}})}),[],!1,null,null,null);n.a=component.exports},164:function(e,n,t){var content=t(379);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(67).default)("1ae4dccb",content,!1,{sourceMap:!1})},378:function(e,n,t){"use strict";var o=t(164);t.n(o).a},379:function(e,n,t){(e.exports=t(66)(!1)).push([e.i,"body{margin:0;overflow:hidden}",""])},412:function(e,n,t){"use strict";t.r(n);var o=t(150),r=t.n(o),c=(t(151),t(146)),l=t(149);Object(c.b)((function(code){return r.a.highlightAuto(code).value||code}));var h={components:{Slides:l.a},data:function(){return{content:'# Lean Animations\n\n<small>赵锦江 talk.css#43 - 04/09/2019</small>\n\n----\n\n<div style="position: absolute; z-index: 1; font-size: 0.5em; right: 5vw; bottom: 10vh;">\n  <img class="icon" src="./github.svg"> Jinjiang\n  <img class="icon" src="./twitter.svg"> zhaojinjiang\n  <img class="icon" src="./mail.svg"> zhaojinjiang@me.com\n</div>\n\n<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex;">\n  <iframe height="100vh" style="width: 50vw; height: 100vh; max-height: none;" scrolling="no" src="//codepen.io/Jinjiang/embed/OYWJwX/" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>\n  <iframe height="100vh" style="width: 50vw; height: 100vh; max-height: none;" scrolling="no" src="//codepen.io/Jinjiang/embed/XQGmOR/" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>\n</div>\n\n----\n\nback to today\'s topic\n\n# Lean Animations\n\n----\n\n\x3c!-- backgroundImage: books.png --\x3e\n\x3c!-- style: background-size: contain; --\x3e\n\nwhat does <mark>LEAN</mark> mean?\n\n\x3c!-- LEAN 是什么意思，这个词来自 LEAN 系列的图书，包括 LEAN enterprise、LEAN UX、LEAN Customer Development 等等，大致意思是简单并且明智，也意味着它便于理解、记忆和实践。 --\x3e\n\n----\n\nwhat does <mark>ANIMATIONS</mark> mean?\n\n<iframe style="width: 100vw; height: 100vh;" scrolling="no" title="Bouncing DVD Logo" src="//codepen.io/stezu/embed/cmLrI/?theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>\n\n<credits><a href=\'https://codepen.io/stezu/pen/cmLrI/\'>Bouncing DVD Logo</a> by Stephen Zuniga</credits>\n\n\x3c!-- ANIMATIONS 的意思就不必多解释了，它指的是页面上各种会动的效果。不过这里，我们把范围缩小到通过 CSS 实现的动画。 --\x3e\n\n----\n\n### the GOAL\n\nsimply try animations into your product or design system\n\n\x3c!-- 这个主题主要的目的就是可以让大家*轻松的实践动画到你的产品或设计系统中*。之所以想到这个主题，是因为 talk.css 之前有过一个主题，讨论一个动画效果的实现原理，我在会后和作者的交流中发现，这样非常棒的效果我们其实很少有机会在产品中实践，主要是没有充足的时间，大家做这些动画都是利用业余时间一点一点做出来的。我觉得这还蛮可惜的，能不能找到一些合理的方式，让这些动画出现在真正的产品中，是我们今天想讨论的话题，也是希望可以达到的目的。 --\x3e\n\n\x3c!-- The main purpose of this topic is to make it easy for everyone to practice animations into your product or design system. The reason why I think of this topic is because there was a topic in talk.css before, talking about the implementation of some cool animation effects. After the topic I had a chat with the speaker and found that we hardly build such a kind of great animations in our product. Mainly because the time is always limited. Mostly we do some creative animations in our spare time, not work time. It\'s a little pity. So could we find some better ways to make these animations happen in our real products? So here comes this topic today. Through this topic, I hope it could be achieved much easier. --\x3e\n\n----\n\n### #1 <mark>why</mark> we need animations?\n\n- something important\n- something has changed\n- something would/could change\n- ~~art~~, just "show my skills" 🤪\n\n\x3c!-- 为什么我们需要动画？通常我们需要在*以下几种情况下*使用动画加以描述：界面是出现重要的内容时、界面产生了变化时、界面即将或可能产生变化时。当然还有一种情况就是没有实际的产品需求，但是你希望向别人展示你的技术有多厉害，或者只是纯为了有趣。这种情况其实也是难免出现的，不过我的建议还是三思而后行。 --\x3e\n\n\x3c!-- Why do we need animation? Usually in the following situations: simply saying, when there are something really important, something already changed, or something about would, could or should change. Also of course, there is another situation not matching any purpose meaningful, but just from pure interests of yourself, or just you want to show everybody how skillful you are. Honestly, it is inevitable, sometimes. But I highly recommend you don\'t do that, or at least think twice before you wanna do. --\x3e\n\n----\n\n### #2 common <mark>scenarios</mark>\n\n- show/hide\n- micro feedback\n- emphasize\n- logic or regularity\n\n\x3c!-- 同样的，基于上述的几种目的，我们发现有*四种场景*经常通过动画来进行表述。第一种是最常见的显示和隐藏，通常用于不同界面或状态的切换。第二种是微型反馈，比如点击按钮的时候的按钮轻微的下沉和弹起，让用户更好的感知到正在发生的事情。前两者你可能已经在使用了也比较熟悉了，那么接下来还有两种动画，第三种是强调，即捕获用户的视觉注意力，告诉用户这里的信息是非常重要的，值得留意的。第四种是描述界面的某种规律，让用户能够理解界面中的一些逻辑关系。 --\x3e\n\n\x3c!-- Similarly, based on the several purposes above, there are four common scenarios of animations we often met. The first one is showing and hiding things. Just change or switch the states of UI like components, dialogs and pages. The second is micro-feedback, such as a slight popping of the button when you click on it. That give the users feedback about what is happening. These two scenarios you may already be familiar with, and there are another two more scenarios. One is emphasize, which means catch the user\'s visual attention. It tells the user the information here is worth paying attention to. And the last one is to let users understand some logics, relationships or regularities in your UI. We would talk about the details later. --\x3e\n\n----\n\nnext...\n\n### #3 find all these kinds of scenarios in your product\n\n<small>and <mark>choose</mark> animations for each of them</small>\n\n\x3c!-- 有了需求，也找到了常见的场景，接下来就是选择合适的动画效果的时候了。我们可以在你的产品中，以页面为单位，列出每个需要动画的地方，然后为其逐个选择适合的动画效果。 --\x3e\n\n\x3c!-- With the purposes and common scenarios, next step we could list each places we need animations in your product, and then choose the appropriate animation effects one by one. --\x3e\n\n----\n\nThat seems simple but ...\n\n----\n\n\x3c!-- backgroundImage: horse.jpg --\x3e\n\x3c!-- style: background-size: contain; --\x3e\n\n<credits>http://oktop.tumblr.com/post/15352780846</credits>\n\n\x3c!-- 选择合适的动画效果听上去似乎很容易，但也许很多人并不知道如何下手。所以我接下来会提供一些个人建议。 --\x3e\n\n\x3c!-- Choosing the right animation sounds easy, but maybe some people don\'t know where to start. So here are some advices for you. --\x3e\n\n----\n\n### how to choose?\n\n1.) get inspiration from the reality\n\n![](newton.png)\n\n<credits>https://whitenoise.kinja.com/otters-oddities-1610623564</credits>\n\n\x3c!-- 第一条建议，就是从现实生活中获取灵感。用户虽然对你的产品可能会感到陌生，但是每个人都有真实世界的生活经历，尝试为你的产品加入一些日常生活会遇到的特效，会帮助你的用户更容易的理解动效背后的含义。 --\x3e\n\n\x3c!-- The first suggestion is to get inspiration from the real world. Maybe your users are unfamiliar with your products, but everyone has a real-world life experience. So you could just try to create some animation effects to connect our real daily life. It will help users to better understand the meanings behind them. --\x3e\n\n----\n\n### reality example\n\n<iframe style="width: 80vw; height: 60vh;" src="//player.vimeo.com/video/131559925?color=1ab89d&amp;title=0&amp;byline=0&amp;portrait=0" title="IBM 729 magnetic tape unit" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n<credits><a href="https://www.ibm.com/design/v1/language/experience/animation/elements/">IBM 729 magnetic tape unit</a></credits>\n\n\x3c!-- 也许你已经见过很多日常生活中的效果应用到界面动画中的例子，这里我只想举一个特别的有趣的例子，是加载中的等待动效。这种动效一般用来交代你的界面内容正在准备中，随时可能会展示出来。这个磁带机的转动特效会暗示用户，虽然界面上还没有发生任何变化，但是你的应用正在紧张的工作之中，请耐心等待它的完成就好。 --\x3e\n\n\x3c!-- Perhaps you have ever seen many examples of daily-life effects applied to UI animations. Here I just want to give a particularly interesting example of the loading spinner. This kind of animation is generally used to explain that your app is preparing something however it haven\'t beed done. The rotating animation effect is just implying users something working under the hook, please be patient and wait for it. --\x3e\n\n----\n\n\x3c!-- backgroundImage: muzli.png --\x3e\n\nor from internet\n\n<credits>[muzli search](https://search.muz.li)</credits>\n\n\x3c!-- 除了真实世界之外，我们还可以通过互联网获得更多好做好的创意和灵感。这里只推荐一个地方，就是 muzli，你可以在这里搜索到各式各样的动效设计，作为你的参考。有的时候来这里看一看也是个不错的选择。 --\x3e\n\n\x3c!-- In addition to the real world, we can also get more great ideas and inspirations through the Internet. Here just recommend one website: muzli search. You can search and discover tons of animation designs here. --\x3e\n\n----\n\n\x3c!-- backgroundImage: greenbook.jpg --\x3e\n\n### how to choose?\n\n2.) to fit the characteristics  \n  of your product\n\n<credits>https://www.heraldnet.com/life/spike-lee-wasnt-the-only-one-horrified-by-green-book-win/</credits>\n\n\x3c!-- 第二条建议，就是选择适合你的产品风格的动效。 --\x3e\n\n\x3c!-- And the rule number two is to choose the animation effects that fit the style of your product. --\x3e\n\n----\n\n\x3c!-- backgroundImage: greenbook.jpg --\x3e\n\n- soft or hard?\n- fast or slow?\n- more or less?\n\n\x3c!-- 试着问自己一些和产品有关的问题，你的产品如果是一个人的话，它的性格是怎样的？认真严肃的还是快乐轻松的？年轻有活力的还是成熟稳重的？简单务实的还是复杂华丽的？这些都成为了你选择动效的重要参考。某种意义上讲，这条规则比上一条更重要，因为它体现会你的产品的独一无二之处，也会避免你额外加入不合时宜的动效。也只有这样，整个产品至少从动效的角度看，会更有系统性，更像同一个产品。也更加容易快速实践。 --\x3e\n\n\x3c!-- Try asking yourself some questions about the product. If your product is a person, what is its character? Serious or happy? Energetic or mature? Simple or complex? That\'s really important reference for your choice. It reflects the uniqueness of your product, and it also avoid you from adding wrong style animations. Only in this way, the entire product will be more systematic, at least from the perspective of animation effects. And it is also easier to practice quickly. --\x3e\n\n----\n\n### so what i have chosen?\n\n----\n\nshow/hide - <mark>slide</mark>\n\n![](slide.gif)\n\n----\n\nshow/hide - <mark>fade in/out</mark>\n\n![](fade.gif)\n\n----\n\nshow/hide - <mark>rollup</mark>\n\n![](rollup.jpg)\n\n----\n\nemphasize/feedback - <mark>popup</mark>\n\n![](popup.gif)\n\n----\n\nlogic/regularity - <mark>bounce</mark> (what?!)\n\n![](bounce.gif)\n\n----\n\n# <mark>Demo</mark>\n\n\x3c!--\n\n接下来向大家展示一些例子：\n1. 第一个例子是页面间切换的过渡动画，大家会发现，当我想访问的新页面的路径更深的时候，就会从右侧滑出，同理，如果新页面的路径深度更浅，则会从左侧滑出。这个简单而且固定的动效会让用户了解到当前页面路径的大概位置。\n2. 第二个例子里有很多按钮，这里想展示的内容其实都会在每个按钮点击之后出现。首先，悬停或点击每个按钮的时候，按钮本身都会变色并放大一点点，看上去像瞬间跳起来一点点的样子，像是你们家的宠物在朝你身上乱蹦乱跳寻求关注一样，为用户操作提供及时的反馈。然后，弹出一个对话框的时候，整个屏幕会蒙上一层浅灰色，它告诉用户界面上的内容暂时不可操作了，好像现实世界中被东西盖住一样碰不到了。同时对话框在正中间被弹出，同样像跳起来一样，让用户的焦点来到这里，告诉用户这里才是他们需要操作的地方。同理，当我打开一个下拉列表的时候，这个列表会从上方翻转下来，像是可以从上方打开或关上的窗户一样。\n3. 第三个例子是列表展示，当我们打开这个页面的时候，你首先会看到一个非常复杂的动画，这些列表项逐个向上靠拢，并稳定在最终的位置。每个列表项在靠近最终位置的时候都有一个小小的回弹的效果，就像东西撞到墙上或掉在地上的感觉。它所传递的信息有这么几个：第一，列表的阅读顺序是自上而下，因为最先展示的列表项是最上面的；第二，列表的上方已经没有更多内容了，因为所有的列表项都向上运动并回弹；第三，列表的下方可能还有更多内容，因为你并没有看到这个列表的尽头。所以在很短的时间内，我们通过动画向用户传递了如此丰富的信息，这就是动画的作用和魅力。\n4. 再接下来我们看一个和列表类似的例子，那就是标签栏。这里有两个标签栏，不同的是，第一个标签栏的内容可以完全放入现有宽度的屏幕中，所以它们均分了整个屏幕的宽度；而第二个标签栏的内容比较多，整个屏幕的宽度已经无法容纳所有的标签，这个时候我们需要让标签栏可以横向滚动，并且产生一个类似列表展示的动画，告诉用户，这个标签栏的阅读顺序是从左到右，左侧没有更多的内容，右侧可能会有更多内容。\n\n那么这些例子是如何实现的呢，我们来快速看一下源代码。虽然我们刚才展示了很多例子，但是实际上我们并没有针对每一个动效撰写 CSS，而是把这些动效进行了抽象和总结，并提前写在了一个叫做 base.css 的文件里。事实上这里的动效都是可复用的。整个项目是基于 Vue.js 撰写的，因为我自己对 Vue 更熟悉一些，但我相信 CSS 部分的代码，只要你对 CSS 足够熟悉，就可以看得懂。同时基于其它前端框架实现类似的动效，道理也是接近的。\n\n--\x3e\n\n----\n\n### #4 how to <mark>implement</mark>\n\n- math/physics formulas\n- simulating by keyframes\n\n\x3c!-- 从实现动效的思路来看，主要的方式有两种。第一种是通过物理公式或数学公式来描述和实现动画，它需要你找到动效背后的物理逻辑或数学逻辑。比如抛物线或滑动阻尼等。另外一种方式则是不断调整表面的动效参数，使其效果尽可能模拟和逼近某个真实的动效效果。至于具体如何通过 CSS 实现，我们已经假设大家对基本的 CSS animation 和 transition 很熟，所以就不多展开介绍了，但我接下来会演示一个具体的例子给大家。 --\x3e\n\n\x3c!-- Here it comes to implementation. There are two common ways. One is through the physical or math formulas, which require you to find the logic behind the animations, such as gravity or frictions etc. In this way you may focus more on duration and timing-function of your CSS transitions. Another way is to directly record the keyframes to simulate a real world animation effect. We assume that everyone here is familiar with the knowledge of CSS animation and transition, so just skip the technical details. --\x3e\n\n----\n\n# <mark>Code</mark>\n\n----\n\n### takeaways\n\n- when: important, has/would/could\n- what: emphasize, feedback, show/hide, regularity\n- how: reality, characteristics\n- way: formula, keyframes\n\n\x3c!-- 最后快速总结一下：为重要的、发生变化的和即将可能发生变化的东西制作动效；用于强调内容、显示隐藏内容、反馈交互行为及展示逻辑规律；然后从现实世界、互联网或产品特征的角度获取灵感；通过公式或效果拟合的方式加以实现。 --\x3e\n\n----\n\n### further reading\n\n![](principles.jpg)\n\n<credits>[The Twelve Principles of Animation from Disney](https://kryptonians.net/2017/01/05/the-twelve-principle-of-animation/)</credits>\n\n\x3c!-- 最后如果这些效果都能够很好的实践，让我们更进一步，看看还有哪些更复杂的动效值得关注和实践，那就是迪士尼总结出来的 12 个最基本的动画原则。它会更复杂更难掌握，但是可以帮助我们作出更酷炫的动效。 --\x3e\n\n\x3c!-- Finally, if these animation effects are well practiced, let\'s take it a step further to see more complex animation effects to practice. That is the 12 principles of animations from Disney. It\'s harder, but can help us make more beautiful animations effects. --\x3e\n\n----\n\n# 终于讲完了😱\n\n<mark>Thanks</mark>\n\n<style>\n.slide-content {\n  background-color: orange;\n  color: white;\n  text-shadow: 1px 1px 4px black, -1px -1px 4px black;\n}\nul { list-style-type: none; }\nul li { position: relative; }\nul li:before { content: "✔︎"; position: absolute; right: 100%; margin-right: 0.5em; }\n.icon { height: 1em; vertical-align: middle; }\ncredits { text-shadow: none; }\nbody { font-family: "Chalkboard SE", "Wawati SC"; }\nh1,h2,h3,h4 { font-family: "Marker Felt", "Wawati SC"; }\niframe { max-width: 80vw; max-height: 60vh; }\nmark { display: inline-block; color: white; border-radius: 0.75em; padding: 0 0.5em 0.25em; animation: rotate 1s infinite; }\n@keyframes rotate {\n  0% { transform: rotate(3deg); }\n  25% { transform: rotate(-3deg); }\n  50% { transform: rotate(-3deg); }\n  75% { transform: rotate(3deg); }\n  100% { transform: rotate(3deg); }\n}\n</style>\n'}}},m=(t(378),t(18)),component=Object(m.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("Slides",{attrs:{content:this.content}})}),[],!1,null,null,null);n.default=component.exports}}]);