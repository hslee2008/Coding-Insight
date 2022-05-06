(window.webpackJsonp=window.webpackJsonp||[]).push([[267,13,14],{530:function(t,n,e){"use strict";var r=e(1),o=e(110),c=e(43),l=e(76),v=r.TypeError,h=function(t,n,source,e,r,f,_,d){for(var element,m,x=r,k=0,y=!!_&&l(_,d);k<e;){if(k in source){if(element=y?y(source[k],k,n):source[k],f>0&&o(element))m=c(element),x=h(t,n,element,m,x,f-1)-1;else{if(x>=9007199254740991)throw v("Exceed the acceptable array length");t[x]=element}x++}k++}return x};t.exports=h},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(589),f=e(526),_=e(585),d=e(698),m=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VIcon:_.a,VSpacer:d.a,VTooltip:m.a})},533:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},536:function(t,n,e){"use strict";var r=e(3),o=e(530),c=e(37),l=e(43),v=e(66),h=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=l(n),r=h(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:v(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})},902:function(t,n,e){"use strict";e.r(n);var r={page:"OnelinerPage"},o=e(108),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("Header",{attrs:{type:"파이썬",num:"38",title:"코드를 한 줄에"}}),t._v(" "),e("div",[t._m(1),t._v(" "),e("iframe",{attrs:{src:t.trinket+"724bf9a522",height:"356"}})]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[t._m(2),t._v(" "),e("iframe",{attrs:{src:t.trinket+"ca6f756679",height:"356",loading:"lazy"}})])]),t._v(" "),e("Navigation",{attrs:{bef:"while",aft:"etcfunction"}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h2",[t._v("왜 코드를 한 줄에 넣어야 할까요?")]),t._v(" "),e("p",[t._v("\n        가끔 코드를 한 줄 안에 넣어야 할 때가 있습니다. 예를 들어 기기의\n        용량이 적다면 최대한 효율적으로 코드를 줄여야 합니다.\n      ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("; 세미콜론")]),t._v(" "),e("p",[t._v("\n        다른 언어(예: 자바스크립트)에서는 세미콜론(;)이 있습니다."),e("br"),e("br"),t._v("\n        파이썬에서도 있지만 자주 사용되지는 않습니다."),e("br"),e("br"),t._v("\n        세미콜론은 코드 사이에 넣는 키워드입니다."),e("br"),e("br"),t._v("\n        코드를 한 줄 안에 넣기 위하여 다음과 같은 방법을 사용할 수\n        있습니다."),e("br"),e("br"),t._v("\n        하지만 이 방법은 파이썬에서 자주 사용되지 않습니다. 꼭 필요할 때만\n        사용하세요.\n      ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("세미콜론에 대한 추가적인 설명")]),t._v(" "),e("p",[t._v("\n          세미콜론은 파이썬에서 사용해도 되고 안 해도 됩니다. 원한다면 한 줄에\n          파이썬 코드를 넣지 않아도 코드의 끝에 붙일 수 있습니다.\n        ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(531).default,QuadSpace:e(533).default,Navigation:e(532).default})}}]);