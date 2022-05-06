(window.webpackJsonp=window.webpackJsonp||[]).push([[236,13,14],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),c=n(43),v=n(76),l=r.TypeError,d=function(t,e,source,n,r,h,_,f){for(var element,m,x=r,y=0,w=!!_&&v(_,f);y<n;){if(y in source){if(element=w?w(source[y],y,e):source[y],h>0&&o(element))m=c(element),x=d(t,e,element,m,x,h-1)-1;else{if(x>=9007199254740991)throw l("Exceed the acceptable array length");t[x]=element}x++}y++}return x};t.exports=d},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),c=n(527),v=n.n(c),l=n(587),d=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:l.a,VIcon:d.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),c=n(527),v=n.n(c),l=n(587),d=n(589),h=n(526),_=n(585),f=n(698),m=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:l.a,VCard:d.a,VCardActions:h.a,VIcon:_.a,VSpacer:f.a,VTooltip:m.a})},533:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";var r=n(3),o=n(530),c=n(37),v=n(43),l=n(66),d=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=v(e),r=d(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:l(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},576:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7132a15d",content,!0,{sourceMap:!1})},577:function(t,e,n){var r=n(64)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},579:function(t,e,n){"use strict";n(39),n(32),n(45),n(6),n(51),n(31),n(52);var r=n(22),o=(n(576),n(542));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:v({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:v({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},878:function(t,e,n){"use strict";n.r(e);var r={name:"FunctionHardPage",methods:{checkAnswer:function(){document.getElementById("question-2-answers-C").checked?alert("1 ✔️!"):alert("1 ❌")}}},o=n(108),c=n(527),v=n.n(c),l=n(587),d=n(589),h=n(526),_=n(579),f=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("Header",{attrs:{type:"파이썬",num:"30",title:"함수 (자세히)"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[t._m(0),t._v(" "),n("iframe",{attrs:{src:t.trinket+"901f63378a",height:"356",loading:"lazy"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[t._m(1),t._v(" "),n("iframe",{attrs:{src:t.trinket+"095fe5cab9",height:"356",loading:"lazy"}})])]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("return 키워드")]),t._v(" "),n("p",[t._v("\n          함수를 실행하면 어떤 값을 반환하기 위해서 'return'이라는 키워드를\n          사용할 수 있습니다."),n("br"),n("br"),t._v("\n\n          그래서 우리가 이 함수에서 나오는 값을 변수 안에 저장할 수\n          있습니다."),n("br"),n("br"),t._v("\n\n          'return' 키워드 다음에 나오는 코드는 다 무시됩니다. 그 이유는\n          'return' 키워드를 실행하면 함수가 바로 종료합니다."),n("br"),n("br"),t._v(" "),n("iframe",{attrs:{src:t.trinket+"981bc3174e",height:"356",loading:"lazy"}}),t._v(" "),n("br"),n("br"),t._v("return 키워드에서 하나 이상 변수를 되돌려주는 방법이\n          있습니다. 파이썬에서만 존재하는 기능입니다."),n("br"),n("br"),t._v(" "),n("iframe",{attrs:{src:t.trinket+"aa6a155d5a",height:"356",loading:"lazy"}})])])]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[t._m(2),t._v(" "),n("iframe",{attrs:{src:t.trinket+"80ed8ae473",height:"356",loading:"lazy"}})])],1),t._v(" "),n("Navigation",{attrs:{bef:"function",aft:"specialvariable"}}),t._v(" "),n("v-card",[n("v-card-title",[t._v("퀴즈 풀기!")]),t._v(" "),n("v-card-text",[n("v-divider"),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("\n        doThis() 함수 안에 pass라는 코드가 있다고 가정을 해보겠습니다.\n        doThis()를 100번 실행하면 출력되는 값은?\n      ")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-A",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v(" pass가 100번 출력된다 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-B",type:"radio",name:"question-2-answers",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v(" pass가 50번 출력된다 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-C",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v("C) 아무것도 출력이 되지 않는다\n        ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-D",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v(" 에러가 발생한다 ")])]),t._v(" "),n("QuadSpace")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n      ")],1)],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("키워드 매개변수")]),t._v(" "),n("p",[t._v("\n          함수를 실행할 때 매개변수의 순서에 따라 각 변수 안에 값을 넣을 수\n          있습니다."),n("br"),n("br"),t._v("\n\n          하지만 이 방법을 사용하면 순서 상관 없이 매개변수에 값을 입력할 수\n          있습니다(매개변수 = 값 형태로 변수 선언하는 형태와 같습니다)."),n("br"),n("br"),t._v("\n\n          리스트와 같이 무한의 매개변수를 딕셔너리에 저장해서 나중에 한\n          아이템만 선택할 수 있습니다. 매개변수 앞에 **를 붙이면 됩니다."),n("br"),n("br"),t._v("\n\n          딕셔너리의 이름은 매개변수의 이름이고 키의 이름은 사용자가 입력한\n          매개변수의 이름입니다.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("매개변수 기본값 지정하는 방법")]),t._v(" "),n("p",[t._v("\n            가끔 우리가 프로그래밍에서 함수를 사용할 때 매개변수에 값을\n            입력하는 것을 잊어버리기도 합니다."),n("br"),n("br"),t._v("\n\n            이때 우리는 만일 변수의 값이 None이 되는 것을 막기 위하여 기본값을\n            정할 수 있습니다.\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("pass 키워드")]),t._v(" "),n("p",[t._v("\n          만일 아무것도 하지 않은 함수를 만들고 싶다면 'pass'라는 키워드를\n          사용할 수 있습니다.\n        ")])])}],!1,null,null,null);e.default=component.exports;v()(component,{Header:n(531).default,QuadSpace:n(533).default,Navigation:n(532).default}),v()(component,{VBtn:l.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDivider:_.a,VIcon:f.a})}}]);