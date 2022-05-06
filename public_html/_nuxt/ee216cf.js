(window.webpackJsonp=window.webpackJsonp||[]).push([[162,13,14],{1012:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("div",[e("h2",[t._v("C와 C++ 언어 입출력")]),t._v(" "),e("p",[t._v("\n        C 언어에서 사용한 printf()와 scanf()는 cpp 파일에서도 사용할 수\n        있습니다."),e("br"),e("br"),t._v("\n\n        하지만 stdio.h 라이브러리를 가지고 오지 않고 cstdio 파일을 가지고 오면\n        사용할 수 있습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v(" #include <cstdio> ")]),t._v("\n\n        C++ 입출력은 cstdio 라이브러리 대신 iostream이라는 라이브러리를 가지고\n        오겠습니다."),e("br"),e("br"),t._v("\n\n        참고로 항상 include 한 뒤 using namespace std라는 코드를 넣으세요."),e("br"),e("br"),t._v("\n\n        이 코드를 사용하지 않으면 항상 모든 C++ 함수 앞에 std::라는 것을\n        붙여야 하기 때문입니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <iostream>"),e("br"),t._v("\n          using namespace std;\n        ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"48Mv",height:"300"}})])]),t._v(" "),e("Header",{attrs:{type:"C/C++",title:"출력 (C++)",num:"2"}}),t._v(" "),e("div",[e("div",[e("h2",[t._v("C++ 출력")]),t._v(" "),e("p",[t._v("\n        C++에서 출력은 cout 이라는 키워드를 사용합니다."),e("br"),e("br"),t._v("\n\n        그리고 << 를 붙이고 출력하고 싶은 변수 또는 데이터를\n        넣으세요."),e("br"),e("br"),t._v(" "),e("kbd",[t._v('cout << "Hello, World!" ;')]),t._v(" "),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <iostream>"),e("br"),t._v("\n          using namespace std;"),e("br"),e("br"),t._v("\n\n          int main()"),e("br"),t._v("\n          {"),e("br"),t._v('\n              cout << "Hello, World!" ;'),e("br"),t._v("\n              return 0;"),e("br"),t._v("\n          }\n        ")]),t._v("\n\n        참고로 << 는 출력하고 싶은 데이터를 서로 합하는 키워드이기도\n        합니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <iostream>"),e("br"),t._v("\n          using namespace std;"),e("br"),e("br"),t._v("\n\n          int main()"),e("br"),t._v("\n          {"),e("br"),t._v('\n              cout << "Hello, World!" <<\n          123;'),e("br"),t._v("\n              return 0;"),e("br"),t._v("\n          }\n        ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"48MH",height:"300"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("C++ 입력")]),t._v(" "),e("p",[t._v("\n        C++ 입력은 cin 키워드를 사용하고 >>를 입력하고 변수의 이름을\n        넣습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <iostream>"),e("br"),t._v("\n          using namespace std;"),e("br"),e("br"),t._v("\n\n          int main()"),e("br"),t._v("\n          {"),e("br"),t._v("\n              int a;"),e("br"),t._v("\n              cin >> a;"),e("br"),e("br"),t._v("\n\n              cout << a;"),e("br"),e("br"),t._v("\n\n              return 0;"),e("br"),t._v("\n          }\n        ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"48MS",height:"300"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("endl")]),t._v(" "),e("p",[t._v("\n        C++에서 새로운 줄을 출력할 때 endl이라는 변수를 사용할 수 있습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v('\n          cout << "Hello, World!" << endl;\n        ')])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"4aoi",height:"300"}})])]),t._v(" "),e("Navigation",{attrs:{bef:"cpp",aft:"string-cpp"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(531).default,QuadSpace:e(533).default,Navigation:e(532).default})},530:function(t,n,e){"use strict";var r=e(1),o=e(110),c=e(43),v=e(76),l=r.TypeError,h=function(t,n,source,e,r,d,_,f){for(var element,m,C=r,x=0,w=!!_&&v(_,f);x<e;){if(x in source){if(element=w?w(source[x],x,n):source[x],d>0&&o(element))m=c(element),C=h(t,n,element,m,C,d-1)-1;else{if(C>=9007199254740991)throw l("Exceed the acceptable array length");t[C]=element}C++}x++}return C};t.exports=h},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),c=e(527),v=e.n(c),l=e(587),h=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:l.a,VIcon:h.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),c=e(527),v=e.n(c),l=e(587),h=e(589),d=e(526),_=e(585),f=e(698),m=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:l.a,VCard:h.a,VCardActions:d.a,VIcon:_.a,VSpacer:f.a,VTooltip:m.a})},533:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},536:function(t,n,e){"use strict";var r=e(3),o=e(530),c=e(37),v=e(43),l=e(66),h=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=v(n),r=h(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:l(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})}}]);