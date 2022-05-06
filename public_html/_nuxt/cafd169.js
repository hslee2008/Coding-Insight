(window.webpackJsonp=window.webpackJsonp||[]).push([[240,13,14],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),c=n(43),l=n(76),v=r.TypeError,h=function(t,e,source,n,r,f,_,d){for(var element,m,w=r,y=0,x=!!_&&l(_,d);y<n;){if(y in source){if(element=x?x(source[y],y,e):source[y],f>0&&o(element))m=c(element),w=h(t,e,element,m,w,f-1)-1;else{if(w>=9007199254740991)throw v("Exceed the acceptable array length");t[w]=element}w++}y++}return w};t.exports=h},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),c=n(527),l=n.n(c),v=n(587),h=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),c=n(527),l=n.n(c),v=n(587),h=n(589),f=n(526),_=n(585),d=n(698),m=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VIcon:_.a,VSpacer:d.a,VTooltip:m.a})},533:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";var r=n(3),o=n(530),c=n(37),l=n(43),v=n(66),h=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=l(e),r=h(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:v(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},879:function(t,e,n){"use strict";n.r(e);var r={page:"IfMasterPage"},o=n(108),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Header",{attrs:{type:"파이썬",num:"28",title:"조건문 마스터"}}),t._v(" "),n("div",[n("div",[n("h2",[t._v("조건문 간단히 하기")]),t._v(" "),n("p",[t._v("\n        if-else 조건문은 다음과 같은 형태로도 사용할 수 있습니다."),n("br"),n("br"),t._v("\n\n        형태는\n        "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("(if 조건이 맞았다면 실행할 코드) if (조건) else (if조건이\n          틀리다면)}입니다.")]),t._v(" "),n("br"),n("br"),t._v("\n\n        if-elif-else 조건문을 다음과 같이 사용할 수 있습니다."),n("br"),n("br"),t._v("\n\n        형태는\n        "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("(if 조건 1이 맞았다면 실행할 코드) if (조건) else (if 조건2가\n          맞았다면 실행할 코드) if (조건2) else (if 조건문이 둘 다 틀리다면\n          실행할 코드)")])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"73c3356df0",height:"356"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[t._m(1),t._v(" "),n("iframe",{attrs:{src:t.trinket+"cb9b932e10",height:"356",loading:"lazy"}})])]),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("Navigation",{attrs:{bef:"if",aft:"password-safe"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/SW8JgnjD9_s",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Switch")]),t._v(" "),n("p",[t._v("\n          다른 언어 (예: 자바스크립트)에서는 switch라는 키워드가 있습니다."),n("br"),n("br"),t._v("\n\n          switch는 어떤 변수와 다른 값을 비교하는 키워드입니다."),n("br"),n("br"),t._v("\n\n          조건문인데 두 값을 비교하는 조건문입니다."),n("br"),n("br"),t._v("\n\n          하지만 파이썬에서는 switch가 없습니다. 그래서 다음과 같은 방법만으로\n          사용할 수 있습니다.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("들여쓰기")]),t._v(" "),n("p",[t._v("\n        들여쓰기란 새로운 문단을 쓸 때 코드 앞에 공백을 놓고 시작하는 것을\n        뜻합니다."),n("br"),n("br"),t._v("\n\n        파이썬에서는 조건문을 만들때 들여쓰기는 필수입니다."),n("br"),n("br"),t._v("\n\n        위의 코드와 같이 print()는 조건문 "),n("b",[t._v("안에")]),t._v(" 있으므로 들여쓰기를 해야\n        합니다."),n("br"),n("br"),t._v("\n\n        항상 어떤 코드는 어떤 것(함수, 조건문, 반복문 등) 안에 있거나 밖에\n        있는지를 고려하며 들여쓰기를 해야합니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(531).default,QuadSpace:n(533).default,Navigation:n(532).default})}}]);