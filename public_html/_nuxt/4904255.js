(window.webpackJsonp=window.webpackJsonp||[]).push([[163,13,14],{1013:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("Header",{attrs:{type:"C/C++",title:"매크로",num:"39"}}),t._v(" "),e("div",[e("div",[e("h2",[t._v("매크로 만들기 - #define")]),t._v(" "),e("p",[t._v("\n        #define을 사용하면 매크로를 만들 수 있습니다."),e("br"),e("br"),t._v("\n\n        매크로는 파일 안의 이름 대신 사용할 값을 지정합니다."),e("br"),e("br"),t._v(" "),e("kbd",[t._v("#define <VAR_NAME> <VAR_VALUE")]),t._v(" 형태를 가지고\n        있습니다."),e("br"),e("br"),t._v("\n\n        참고로 매크로의 이름은 다 대문자로 하는 것이 좋습니다."),e("br"),e("br"),t._v("\n\n        그 이유는 나중에 어떤 변수의 포인터를 사용하고 싶다면 매크로와 변수를\n        햇갈 릴 수 있습니다."),e("br"),e("br"),t._v("\n\n        또한, 매크로의 값은 바꿀 수 없습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #define MFM 200"),e("br"),e("br"),t._v("\n\n          int main() {"),e("br"),t._v('\n              printf("%d", MFM);'),e("br"),t._v("\n          }\n        ")]),t._v("\n\n        변수만이 아니라 함수처럼도 사용이 가능합니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #define MFM (a) (a * 4)"),e("br"),e("br"),t._v("\n\n          int main() {"),e("br"),t._v('\n              printf("%d", MFM(a));'),e("br"),t._v("\n          }\n        ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"47BQ",height:"300"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("매크로 삭제 - #undef")]),t._v(" "),e("p",[e("kbd",[t._v("#undef <이름")]),t._v(" 형태로 매크로 변수를 삭제합니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #define MFM 200"),e("br"),e("br"),t._v('\n\n          printf("%d", MFM);'),e("br"),e("br"),t._v("\n\n          #undef MFM\n        ")]),t._v("\n\n        매크로의 값을 바꿀 수는 없지만 삭제한 후 다시 만들 수는 있습니다.\n      ")])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"47BR",height:"300"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("#ifdef와 #else와 #endif")]),t._v(" "),e("p",[t._v("\n        #ifdef는 만일 매크로의 값이 지정되어있다면 실행할 코드를 넣을 수 있는\n        if문을 만듭니다."),e("br"),e("br"),t._v("\n\n        그리고 항상 #endif를 넣습니다."),e("br"),e("br"),t._v("\n\n        #else도 사용할 수 있습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #define NOINPUT"),e("br"),e("br"),t._v("\n\n          #ifdef NOINPUT"),e("br"),t._v('\n          printf("NOINPUT");'),e("br"),t._v("\n          #else"),e("br"),t._v('\n          printf("NONOINPUT");'),e("br"),t._v("\n          #endif\n        ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"47BT",height:"300"}})])]),t._v(" "),e("Navigation",{attrs:{bef:"assert",aft:"otherif"}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h2",[t._v("매크로란?")]),t._v(" "),e("p",[t._v("\n        매크로란 변수 또는 함수와 비슷하게 이름이 있는 일부의 코드\n        조각입니다."),e("br"),e("br"),t._v("\n\n        변수 또는 함수와 조금 다릅니다."),e("br"),e("br"),t._v("\n\n        변수는 쉽게 프로그램 안에 저장되어 있는 정보이지만 매크로는 C\n        컴파일러가 매크로가 선언이 되면 그 이름을 지정된 값으로 바꿉니다.\n      ")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(531).default,QuadSpace:e(533).default,Navigation:e(532).default})},530:function(t,n,e){"use strict";var r=e(1),o=e(110),v=e(43),c=e(76),l=r.TypeError,_=function(t,n,source,e,r,h,d,f){for(var element,m,x=r,k=0,y=!!d&&c(d,f);k<e;){if(k in source){if(element=y?y(source[k],k,n):source[k],h>0&&o(element))m=v(element),x=_(t,n,element,m,x,h-1)-1;else{if(x>=9007199254740991)throw l("Exceed the acceptable array length");t[x]=element}x++}k++}return x};t.exports=_},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),v=e(527),c=e.n(v),l=e(587),_=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:l.a,VIcon:_.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),v=e(527),c=e.n(v),l=e(587),_=e(589),h=e(526),d=e(585),f=e(698),m=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:l.a,VCard:_.a,VCardActions:h.a,VIcon:d.a,VSpacer:f.a,VTooltip:m.a})},533:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},536:function(t,n,e){"use strict";var r=e(3),o=e(530),v=e(37),c=e(43),l=e(66),_=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=v(this),e=c(n),r=_(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:l(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})}}]);