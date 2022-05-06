(window.webpackJsonp=window.webpackJsonp||[]).push([[198,13,14],{530:function(t,e,r){"use strict";var n=r(1),o=r(110),c=r(43),v=r(76),l=n.TypeError,d=function(t,e,source,r,n,h,_,f){for(var element,m,w=n,y=0,x=!!_&&v(_,f);y<r;){if(y in source){if(element=x?x(source[y],y,e):source[y],h>0&&o(element))m=c(element),w=d(t,e,element,m,w,h-1)-1;else{if(w>=9007199254740991)throw l("Exceed the acceptable array length");t[w]=element}w++}y++}return w};t.exports=d},531:function(t,e,r){"use strict";r.r(e);r(44);var n={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=r(108),c=r(527),v=r.n(c),l=r(587),d=r(585),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[r("div",{staticClass:"mb-10"},[r("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[r("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),r("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[r("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),r("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[r("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),r("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():r("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:l.a,VIcon:d.a})},532:function(t,e,r){"use strict";r.r(e);var n={name:"Navigation",props:["bef","aft","single"]},o=r(108),c=r(527),v=r.n(c),l=r(587),d=r(589),h=r(526),_=r(585),f=r(698),m=r(709),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[r("v-card-actions",[t.single?t._e():r("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),r("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),n),[t._v("\n          Next\n\n          "),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:l.a,VCard:d.a,VCardActions:h.a,VIcon:_.a,VSpacer:f.a,VTooltip:m.a})},533:function(t,e,r){"use strict";r.r(e);var n=r(108),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,r){"use strict";var n=r(3),o=r(530),c=r(37),v=r(43),l=r(66),d=r(132);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=v(e),n=d(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:l(t)),n}})},537:function(t,e,r){r(109)("flat")},538:function(t,e,r){"use strict";var n=r(3),o=r(228);n({target:"String",proto:!0,forced:r(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,r){"use strict";var n=r(3),o=r(228);n({target:"String",proto:!0,forced:r(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,r){"use strict";var n=r(3),o=r(228);n({target:"String",proto:!0,forced:r(229)("link")},{link:function(t){return o(this,"a","href",t)}})},576:function(t,e,r){var content=r(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("7132a15d",content,!0,{sourceMap:!1})},577:function(t,e,r){var n=r(64)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},579:function(t,e,r){"use strict";r(39),r(32),r(45),r(6),r(51),r(31),r(52);var n=r(22),o=(r(576),r(542));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:v({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:v({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},867:function(t,e,r){"use strict";r.r(e);var n={name:"AsciiPage",methods:{checkAnswer:function(){document.getElementById("question-1-answers-A").checked?alert("1 ✔️!"):alert("1 ❌"),document.getElementById("question-2-answers-D").checked?alert("2 ✔️"):alert("2 ❌")}}},o=r(108),c=r(527),v=r.n(c),l=r(587),d=r(589),h=r(526),_=r(579),f=r(585),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("QuadSpace"),t._v(" "),t._m(1),t._v(" "),r("Header",{attrs:{type:"파이썬",num:"12",title:"아스키"}}),t._v(" "),r("div",[t._m(2),t._v(" "),r("iframe",{attrs:{src:t.trinket+"4f4507d894",height:"356"}})]),t._v(" "),r("QuadSpace"),t._v(" "),r("div",[t._m(3),t._v(" "),r("iframe",{attrs:{src:t.trinket+"2f04cf1944",height:"356"}})]),t._v(" "),r("Navigation",{attrs:{bef:"escapechar",aft:"boolean"}}),t._v(" "),r("v-card",[r("v-card-title",[t._v("퀴즈 풀기!")]),t._v(" "),r("v-card-text",[r("v-divider"),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("알파벳을 아스키로 바꾸는 방법은?")]),t._v(" "),r("div",[r("input",{attrs:{id:"question-1-answers-A",type:"radio",name:"question-1-answers"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-A"}},[t._v(" ord() ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-1-answers-B",type:"radio",name:"question-1-answers",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-B"}},[t._v(" toORD() ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-1-answers-C",type:"radio",name:"question-1-answers"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-C"}},[t._v(" ascii() ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-1-answers-D",type:"radio",name:"question-1-answers"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-D"}},[t._v(" 다른 정답 ")])]),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("숫자를 아스키로 바꾸는 방법은?")]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-A",type:"radio",name:"question-2-answers"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-A"}},[t._v(" character() ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-B",type:"radio",name:"question-2-answers",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-B"}},[t._v(" charact() ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-C",type:"radio",name:"question-2-answers"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-C"}},[t._v(" char() ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-D",type:"radio",name:"question-2-answers"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-D"}},[t._v(" chr() ")])]),t._v(" "),r("QuadSpace")],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n      ")],1)],1)],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{padding:"5px",margin:"auto"}},[r("h2",[t._v("ASCII란?")]),t._v(" "),r("p",[t._v("\n        ASCII는 한국어로 '아스키'라고 발음합니다."),r("br"),r("br"),t._v('\n\n        아스키는 American Standard Code for Information Interchange의\n        약자입니다. 한국어로는 "정보 교환을 위한 미국 표준 암호"를\n        뜻합니다.'),r("br"),r("br"),t._v("\n\n        ASCII는 알파벳의 모든 문자를 0에서 127(자연수)로 나타낸 코드입니다.\n        예를 들면, 아무것도 없는 ' '는 0입니다."),r("br"),r("br"),t._v("\n\n        퀴즈! 알파벳을 ASCII로 나타낼 때 a가 클까요? 아니면 A가 클까요? A라고\n        하셨나요? 흠… A가 크게 보이지만 ASCII에서는 a가 더 큽니다.\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"80%",height:"315",src:"https://www.youtube.com/embed/YnFUR00gk5s",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("ord()")]),t._v(" "),r("p",[t._v("\n        어떤 문자의 ASCII 코드를 알기 위하여 ord() 함수를 사용할 수\n        있습니다."),r("br"),r("br"),t._v("\n\n        단, 꼭 "),r("strong",[t._v("문자")]),t._v("여야 합니다. 알파벳 하나하나만 입력할 수\n        있습니다."),r("br"),r("br"),t._v("\n\n        여러 개의 아스키를 찾고 싶으면 for 반복문을 사용해야 하지만 이 내용은\n        조금 뒤에 배우겠습니다.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("chr()")]),t._v(" "),r("p",[t._v("반대로, chr()은 아스키코드를 알파벳으로 바꾸는 함수입니다.")])])}],!1,null,null,null);e.default=component.exports;v()(component,{QuadSpace:r(533).default,Header:r(531).default,Navigation:r(532).default}),v()(component,{VBtn:l.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDivider:_.a,VIcon:f.a})}}]);