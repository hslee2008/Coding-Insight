(window.webpackJsonp=window.webpackJsonp||[]).push([[292,13,14],{530:function(t,n,e){"use strict";var r=e(1),o=e(110),c=e(43),l=e(76),v=r.TypeError,h=function(t,n,source,e,r,d,f,_){for(var element,m,x=r,y=0,w=!!f&&l(f,_);y<e;){if(y in source){if(element=w?w(source[y],y,n):source[y],d>0&&o(element))m=c(element),x=h(t,n,element,m,x,d-1)-1;else{if(x>=9007199254740991)throw v("Exceed the acceptable array length");t[x]=element}x++}y++}return x};t.exports=h},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(589),d=e(526),f=e(585),_=e(698),m=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:d.a,VIcon:f.a,VSpacer:_.a,VTooltip:m.a})},533:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},536:function(t,n,e){"use strict";var r=e(3),o=e(530),c=e(37),l=e(43),v=e(66),h=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=l(n),r=h(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:v(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})},924:function(t,n,e){"use strict";e.r(n);var r={page:"TypePage"},o=e(108),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("Header",{attrs:{type:"파이썬",num:"32",title:"타입 지정"}}),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("타입 지정하기")]),t._v(" "),e("p",[t._v("\n          사용자가 매개변수와 함수를 만들 때 돌아오는 값과 매개변수의 타입을\n          정할 수 있습니다!"),e("br"),e("br"),t._v("\n\n          코드\n          "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("def wowAnd(nextToWow):"),e("br"),t._v('  return "wow " +\n            nextToWow')]),t._v("에서 사용자가 소수로 nextToWow 매개변수의 값을 숫자로 입력할 수\n          있습니다."),e("br"),e("br"),t._v("\n\n          이를 방지하기 위하여 다음과 같은 방법이 있습니다.\n        ")])]),t._v(" "),e("iframe",{attrs:{src:t.trinket+"215ca4e0af",height:"356",loading:"lazy"}})]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[t._m(0),t._v(" "),e("iframe",{attrs:{src:t.trinket+"a5ed372467",height:"356",loading:"lazy"}})])],1),t._v(" "),e("Navigation",{attrs:{bef:"specialvariable",aft:"lambda"}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("어떤 함수가 실행할 수 있는지의 여부를 알기")]),t._v(" "),e("p",[t._v("\n          가끔 함수의 이름과 변수의 이름을 바꾸어서 생각하여 변수의 이름을\n          실행하는 경우도 있습니다. (에러!)."),e("br"),e("br"),t._v("\n\n          이 경우를 막기 위하여 어떤 변수가 실행될 수 있는지 알 방법이\n          있습니다."),e("br"),e("br"),t._v("\n\n          callable()을 사용하면 어떤 변수를 실행할 수 있는지 알고 다음과 같은\n          에러를 방지할 수 있습니다.\n        ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(531).default,QuadSpace:e(533).default,Navigation:e(532).default})}}]);