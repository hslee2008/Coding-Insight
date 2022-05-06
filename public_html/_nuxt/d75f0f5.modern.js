(window.webpackJsonp=window.webpackJsonp||[]).push([[186,13],{470:function(t,n,e){"use strict";e.r(n);var r={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(67),l=e(459),c=e.n(l),v=e(522),h=e(524),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:v.a,VIcon:h.a})},473:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(67),l=e(459),c=e.n(l),v=e(522),h=e(458),d=e(456),_=e(524),m=e(719),f=e(487),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:v.a,VCard:h.a,VCardActions:d.a,VIcon:_.a,VSpacer:m.a,VTooltip:f.a})},474:function(t,n,e){"use strict";e.r(n);var r=e(67),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},511:function(t,n,e){"use strict";e.r(n);var r={name:"GlobalImage",props:["src","maxWidth"]},o=e(67),l=e(459),c=e.n(l),v=e(516),h=e(526),d=e(517),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-img",{staticClass:"rounded-lg",style:"margin-bottom: 15px !important",attrs:{src:t.src,"max-width":t.maxWidth,alt:"Coding-Insight Image"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;c()(component,{VImg:v.a,VProgressCircular:h.a,VRow:d.a})},956:function(t,n,e){"use strict";e.r(n);var r=e(67),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header",{attrs:{type:"C/C++",title:"변수 - 고급",num:"6"}}),t._v(" "),e("div",[e("div",{staticClass:"ma-auto"},[e("h2",[t._v("많은 변수를 동시에 선언하는 방법")]),t._v(" "),e("p",[t._v("\n        C 언어는 변수를 선언할 때 데이터 형태를 앞에 붙여야 합니다."),e("br"),e("br"),t._v("\n\n        하지만 계속 int를 사용하면 조금 반복되는 부분이 많아지고 읽기도\n        불편합니다."),e("br"),e("br"),t._v("\n\n        이렇게 다양한 변수가 같은 데이터 형태라면 ','를 사용하고 처음에만\n        데이터 형태를 붙이면 됩니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v(" int a = 1, b = 2, c = 3; ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("GlobalImage",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUanGdzUImXThB9bVOyNzTTtTKrN_6zaP1Rw&usqp=CAU"}})],1)]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("변수 선언 먼저하기")]),t._v(" "),e("p",[t._v("\n        먼저 상자를 만들고 나중에 아이템을 넣을 수는 없나요? 가능합니다."),e("br"),e("br"),t._v("\n\n        변수를 선언할 떄 값을 입력하지 않고 나중에 필요할 때 넣으면 됩니다.\n        참고로 값을 넣지 않으면 변수의 값은 자동으로 0으로 됩니다."),e("br"),e("br"),t._v("\n\n        기억하세요! 변수의 값을 바꾸고 싶으면 데이터 형태를 붙이면 안됩니다!\n        만일 붙이면 새로운 변수가 만들어 집니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          int a;"),e("br"),t._v("\n          a = 1;\n        ")])])]),t._v(" "),e("div",[e("iframe",{attrs:{src:t.jdoodle+"3VTG",height:"300"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("변수를 main() 밖에 선언하기")]),t._v(" "),e("p",[t._v("\n        변수를 main() 밖에 선언하면 파일 안에 있는 모든 곳에서 변수를 사용할\n        수 있습니다."),e("br"),e("br"),t._v("\n\n        하지만 main() 안에서 선언했다면 main()에서만 그 변수를 사용할 수\n        있습니다."),e("br"),e("br"),t._v("\n\n        상자도 집 안에 넣으면 그 집에서만 사용할 수 있지만 밖에 있다면 모든\n        집에서 사용이 가능합니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <stdio.h>"),e("br"),e("br"),t._v("\n\n          int a = 6;"),e("br"),e("br"),t._v("\n\n          int main()"),e("br"),t._v("\n          {"),e("br"),t._v('\n           printf("%d", a);'),e("br"),t._v("\n           return 0;"),e("br"),t._v("\n          }\n        ")])])]),t._v(" "),e("div",{staticClass:"ma-auto"},[e("iframe",{attrs:{src:t.jdoodle+"3VTI",height:"300"}})])]),t._v(" "),e("Navigation",{attrs:{bef:"variable",aft:"input"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(470).default,GlobalImage:e(511).default,QuadSpace:e(474).default,Navigation:e(473).default})}}]);