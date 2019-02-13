(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5260"],{"92f7":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("跨文档消息传递")])]),a("ol",[a("li",[a("code",{pre:!0},[t._v("postMessage()")]),t._v(" 发送消息")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//注意:所有支持 XDM 的浏览器也支持 iframe 的 contentWindow 属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" iframeWindow = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"myframe"')]),t._v(").contentWindow;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//第二个参数为 * 发送消息不检测域名")]),t._v("\niframeWindow.postMessage("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"A secret"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"http://www.wrox.com"')]),t._v(");\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("窗体接受消息会触发 "),a("code",{pre:!0},[t._v("message")]),t._v(" 事件")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("EventUtil.addHandler("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("window")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"message"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("event")]),t._v(") ")]),t._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//确保发送消息的域是已知的域")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (event.origin != "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"http://www.wrox.com"')]),t._v(") "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(";\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//处理接收到的数据")]),t._v("\n processMessage(event.data);\n "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//可选:向来源窗口发送回执")]),t._v("\n event.source.postMessage("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Received!"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"http://p2p.wrox.com"')]),t._v(");\n});\n")])]),a("blockquote",[a("p",[t._v("event.source 大多数情况下只是 window 对象的代理，并非实际的 window 对象。\n换句话说，不能通过这个代理对象访问 window 对象的其他任何信息。\n只通过这个代理调用 postMessage()就好，这个方法永远存在，永远可以调用。")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("拖放事件")])]),a("div",{staticClass:"k-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dragstart")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标按下，开始拖动触发")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("drag")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标按下拖动的过程中触发")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dragend")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标松开，停止拖动触发")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dragenter")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("拖动元素进入可放置区域")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dragover")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("拖动元素在可以放置区域拖动")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dragleave")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("拖动元素在来开可放置区域")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("drop")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("拖动元素放置在可以放置区域")])])])])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("自定义放置目标")])]),a("ol",[a("li",[t._v("重写 dragenter 和 dragover 事件的默认行为")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" droptarget = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"droptarget"')]),t._v(");\nEventUtil.addHandler(droptarget, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"dragover"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("event")]),t._v(") ")]),t._v("{\n EventUtil.preventDefault(event);\n});\nEventUtil.addHandler(droptarget, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"dragenter"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("event")]),t._v(") ")]),t._v("{\n EventUtil.preventDefault(event);\n});\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Firefox 3.5+中，放置事件的默认行为是打开被放到放置目标上的 URL，阻止默认行为")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("EventUtil.addHandler(droptarget, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"drop"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("event")]),t._v(") ")]),t._v("{\n EventUtil.preventDefault(event);\n});\n")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("dataTransfer 对象")])]),a("p",[t._v("事件对象的一个属性，用于从被拖动元素向放置目标传递字符串格式的数据")]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置和接收文本数据")]),t._v("\nevent.dataTransfer.setData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"some text"')]),t._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" text = event.dataTransfer.getData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//设置和接收 URL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" url = event.dataTransfer.getData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"URL"')]),t._v(");\nevent.dataTransfer.setData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"URL"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"http://www.wrox.com/"')]),t._v(");\n")])]),a("blockquote",[a("p",[t._v("传递数据不同浏览器解析获取规则不同")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" dataTransfer = event.dataTransfer;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//读取 URL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" url = dataTransfer.getData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(") || dataTransfer.getData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text/uri-list"')]),t._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//读取文本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" text = dataTransfer.getData("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Text"')]),t._v(");\n")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("dropEffect 与 effectAllowed")])]),a("ol",[a("li",[t._v("dropEffect 设置当前元素拖动的可执行放置行为")])]),a("div",{staticClass:"k-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("none")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("不能把拖动的元素放在这里。这是除文本框之外所有元素的默认值。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("move")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("应该把拖动的元素移动到放置目标。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("copy")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("应该把拖动的元素复制到放置目标。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("link")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("表示放置目标会打开拖动的元素(但拖动的元素必须是一个链接，有 URL)。")])])])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("dropEffect 搭配 effectAllowed 使用，控制元素是否支持放置行为")])]),a("div",{staticClass:"k-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("uninitialized")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("没有给被拖动的元素设置任何放置行为。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("none")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("被拖动的元素不能有任何行为。")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("copy")]),a("td",{staticStyle:{"text-align":"left"}},[t._v('只允许值为"copy"的 dropEffect。')])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("link")]),a("td",{staticStyle:{"text-align":"left"}},[t._v('只允许值为"link"的 dropEffect。')])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("move")]),a("td",{staticStyle:{"text-align":"left"}},[t._v('只允许值为"move"的 dropEffect。')])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("copyLink")]),a("td",{staticStyle:{"text-align":"left"}},[t._v('允许值为"copy"和"link"的 dropEffect。')])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("copyMove")]),a("td",{staticStyle:{"text-align":"left"}},[t._v('允许值为"copy"和"move"的 dropEffect。')])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("linkMove")]),a("td",{staticStyle:{"text-align":"left"}},[t._v('允许值为"link"和"move"的 dropEffect。')])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("all")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许任意 dropEffect。")])])])])]),a("blockquote",[a("p",[t._v("必须在 ondragstart 事件处理程序中设置 effectAllowed 属性。")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("可拖动")])]),a("p",[t._v("HTML5 规定了一个 draggable 属性，表 示元素是否可以拖动")]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[t._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- 让这个图像不可以拖动 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"smile.gif"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("draggable")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("alt")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Smiley face"')]),t._v(" />")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- 让这个元素可以拖动 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("draggable")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v(">")]),t._v("..."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])]),a("blockquote",[a("p",[t._v("支持 IE 10+、Firefox 4+、Safari 5+和 Chrome。Opera 11.5")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("媒体元素")])]),a("ol",[a("li",[t._v("音频和视频")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[t._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- 嵌入视频 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("video")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"conference.mpg"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"myVideo"')]),t._v(">")]),t._v("Video player not available."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("video")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- 嵌入音频 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("audio")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"song.mp3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"myAudio"')]),t._v(">")]),t._v("Audio player not available."),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("audio")]),t._v(">")]),t._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("设置多个播放来源")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[t._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- 嵌入视频 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("video")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"myVideo"')]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"conference.webm"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"video/webm; codecs='vp8, vorbis'\"")]),t._v(" />")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"conference.ogv"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"video/ogg; codecs='theora, vorbis'\"")]),t._v(" />")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"conference.mpg"')]),t._v(" />")]),t._v("\n Video player not available.\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("video")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- 嵌入音频 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("audio")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"myAudio"')]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"song.ogg"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"audio/ogg"')]),t._v(" />")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"song.mp3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"audio/mpeg"')]),t._v(" />")]),t._v("\n Audio player not available.\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("audio")]),t._v(">")]),t._v("\n")])]),a("blockquote",[a("p",[t._v("支持 IE9+、Firefox 3.5+、Safari 4+、Opera 10.5+、Chrome、iOS 版 Safari 和 Android 版 WebKit")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("媒体元素属性")])]),a("div",{staticClass:"k-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("audioTracks")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示可用音频轨道的 AudioTrackList 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("autoplay")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回是否在就绪（加载完成）后随即播放视频")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("buffered")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示视频已缓冲部分的 TimeRanges 对")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("controller")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示视频当前媒体控制器的 MediaController 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("controls")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频是否应该显示控件（比如播放/暂停等）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("crossOrigin")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的 CORS 设置")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("currentSrc")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回当前视频的 URL")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("currentTime")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频中的当前播放位置（以秒计）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("defaultMuted")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频默认是否静音")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("defaultPlaybackRate")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的默认播放速度")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回视频的长度（以秒计）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ended")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回视频的播放是否已结束")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示视频错误状态的 MediaError 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的 height 属性的值")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loop")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频是否应在结束时再次播放")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mediaGroup")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频所属媒介组合的名称")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("muted")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回是否关闭声音")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("networkState")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回视频的当前网络状态")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("paused")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频是否暂停")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("playbackRate")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频播放的速度")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("played")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示视频已播放部分的 TimeRanges 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("poster")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的 poster 属性的值")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("preload")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的 preload 属性的值")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readyState")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回视频当前的就绪状态")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("seekable")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示视频可寻址部分的 TimeRanges 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("seeking")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回用户当前是否正在视频中进行查找")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("src")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的 src 属性的值")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("startDate")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示当前时间偏移的 Date 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("textTracks")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示可用文本轨道的 TextTrackList 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("videoTracks")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("返回表示可用视频轨道的 VideoTrackList 对象")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("volume")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的音量")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置或返回视频的 width 属性的值")])])])])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("媒体元素事件")])]),a("div",{staticClass:"k-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("abort")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("在退出时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("canplay")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("canplaythrough")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("durationchange")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介长度改变时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("emptied")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ended")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("error")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当在文件加载期间发生错误时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loadeddata")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介数据已加载时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loadedmetadata")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当元数据（比如分辨率和时长）被加载时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loadstart")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("在文件开始加载且未实际加载任何数据前运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pause")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介被用户或程序暂停时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("play")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介已就绪可以开始播放时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("playing")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介已开始播放时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("progress")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当浏览器正在获取媒介数据时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ratechange")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("readystatechange")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("seeked")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当 seeking 属性设置为 false（指示定位已结束）时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("seeking")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("stalled")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("在浏览器不论何种原因未能取回媒介数据时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("suspend")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timeupdate")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("volumechange")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("每当音量改变时（包括将音量设置为静音）时运行的脚本")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("waiting")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本")])])])])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("媒体元素事件")])]),a("div",{staticClass:"k-snippet--table"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("addTextTrack()")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("向视频添加新的文本轨道")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("canPlayType()")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("检查浏览器是否能够播放指定的视频类型")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("load()")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("重新加载视频元素")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("play()")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("开始播放视频")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pause()")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("暂停当前播放的视频")])])])])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("自定义媒体播放器")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-html"},[t._v("html")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mediaplayer"')]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"video"')]),t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("video")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"player"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movie.mov"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("poster")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mymovie.jpg"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"300"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"200"')]),t._v("\n   >")]),t._v("\n     Video player not available.\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("video")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"controls"')]),t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"button"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Play"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"video-btn"')]),t._v(" />")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"curtime"')]),t._v(">")]),t._v("0"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("/"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"duration"')]),t._v(">")]),t._v("0"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//取得元素的引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" player = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"player"')]),t._v("),\n btn = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"video-btn"')]),t._v("),\n curtime = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"curtime"')]),t._v("),\n duration = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"duration"')]),t._v(");\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//更新播放时间")]),t._v("\nduration.innerHTML = player.duration;\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//为按钮添加事件处理程序")]),t._v("\nEventUtil.addHandler(btn, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"click"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("event")]),t._v(") ")]),t._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (player.paused) {\n   player.play();\n   btn.value = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Pause"')]),t._v(";\n } "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" {\n   player.pause();\n   btn.value = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Play"')]),t._v(";\n }\n});\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//定时更新当前时间")]),t._v("\nsetInterval("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") ")]),t._v("{\n curtime.innerHTML = player.currentTime;\n}, "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("250")]),t._v(");\n")])])],2),a("k-snippet",{attrs:{title:""}},[a("template",{slot:"title"},[a("p",[t._v("历史状态管理")])]),a("ol",[a("li",[t._v("pushState() 设置历史状态")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("history.pushState({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Nicholas"')]),t._v(" }, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Nicholas\' page"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"nicholas.html"')]),t._v(");\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("触发 popstate 事件")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("EventUtil.addHandler("),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("window")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"popstate"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("event")]),t._v(") ")]),t._v("{\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("var")]),t._v(" state = event.state;\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (state) {\n   "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//第一个页面加载时 state 为空")]),t._v("\n   processState(state);\n }\n});\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("replaceState() 更新当前状态")])]),a("div",{staticClass:"k-snippet--tag k-snippet--tag-javascript"},[t._v("javascript")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t._v("history.replaceState({ "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Greg"')]),t._v(" }, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Greg\'s page"')]),t._v(");\n")])]),a("blockquote",[a("p",[t._v("历史状态主要用于处理 url 改变不触发请求，自定义处理，所以最好也保证后端存在 url 不然刷新会报错 404")])])],2)],1)},l=[],r=a("25c1"),n={},v=Object(r["a"])(n,e,l,!1,null,null,null);v.options.__file="20.md";s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0e5260.0eabee75.js.map