(window.webpackJsonp=window.webpackJsonp||[]).push([[148,13,14],{1e3:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("div",[e("h2",[t._v("파일 다루는 작업이란?")]),t._v(" "),e("p",[t._v("\n        파일을 다루는 작업은 파일 처리하는 작업입니다."),e("br"),e("br"),t._v("\n\n        파일을 삭제하고, 만들고, 쓰고, 읽는 등을 통틀어 파일 다루는 작업이라고\n        합니다."),e("br"),e("br"),t._v("\n\n        C 언어에서 파일을 다루기 위해서 stdlib.h라는 라이브러리를 먼저 가지고\n        와야합니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v(" #include <stdlib.h> ")])])])]),t._v(" "),e("Header",{attrs:{type:"C/C++",title:"파일 다루기",num:"47"}}),t._v(" "),e("div",[e("div",[e("h2",[t._v("FILE 데이터 형태")]),t._v(" "),e("p",[t._v("\n        C 언어에서 파일을 먼저 변수 안에 저장해야 합니다."),e("br"),e("br"),t._v("\n\n        그 변수의 형태는 FILE이고 포인터를 사용해야 합니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v(" FILE * fp ")]),t._v("\n\n        위의 fp라는 변수 안에 파일을 저장하겠습니다.\n      ")])])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("파일 열기")]),t._v(" "),e("p",[t._v("\n        파일을 사용하기 위해서 fopen() 함수를 FILE * fp 안에\n        저장하겠습니다."),e("br"),e("br"),t._v("\n\n        fopen() 함수는 파일을 여는 함수입니다."),e("br"),e("br"),t._v("\n\n        매개변수로 첫 번째에는 파일 주소와 파일을 여는 모드를 넣습니다."),e("br"),e("br"),t._v("\n\n        파일 주소는 VSCode에서 파일을 우클릭하고 Copy Path 버튼을 누르면\n        됩니다."),e("br"),e("br"),t._v("\n\n        파일 여는 모드는 조금 나중에 더 자세히 배우겠습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v('\n          FILE * fp = fopen("test.txt", "r");\n        ')]),t._v("\n\n        여기에서 r은 파일을 읽겠다는 뜻입니다.\n      ")])])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("파일 닫기")]),t._v(" "),e("p",[t._v("\n        파일을 항상 닫아야 합니다."),e("br"),e("br"),t._v("\n\n        그렇게 하지 않는다면 에러가 생길 수 있습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v(" fclose(fp); ")])])])]),t._v(" "),e("Navigation",{attrs:{bef:"math",aft:"readfile"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(531).default,QuadSpace:e(533).default,Navigation:e(532).default})},530:function(t,n,e){"use strict";var r=e(1),o=e(110),c=e(43),l=e(76),v=r.TypeError,h=function(t,n,source,e,r,_,d,f){for(var element,m,x=r,y=0,k=!!d&&l(d,f);y<e;){if(y in source){if(element=k?k(source[y],y,n):source[y],_>0&&o(element))m=c(element),x=h(t,n,element,m,x,_-1)-1;else{if(x>=9007199254740991)throw v("Exceed the acceptable array length");t[x]=element}x++}y++}return x};t.exports=h},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(589),_=e(526),d=e(585),f=e(698),m=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:_.a,VIcon:d.a,VSpacer:f.a,VTooltip:m.a})},533:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},536:function(t,n,e){"use strict";var r=e(3),o=e(530),c=e(37),l=e(43),v=e(66),h=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=l(n),r=h(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:v(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})}}]);