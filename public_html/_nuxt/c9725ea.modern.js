(window.webpackJsonp=window.webpackJsonp||[]).push([[203,13],{470:function(t,e,n){"use strict";n.r(e);var r={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(67),l=n(459),c=n.n(l),v=n(522),h=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:h.a})},473:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(67),l=n(459),c=n.n(l),v=n(522),h=n(458),_=n(456),d=n(524),m=n(719),f=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:h.a,VCardActions:_.a,VIcon:d.a,VSpacer:m.a,VTooltip:f.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(67),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r={name:"GlobalImage",props:["src","maxWidth"]},o=n(67),l=n(459),c=n.n(l),v=n(516),h=n(526),_=n(517),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{staticClass:"rounded-lg",style:"margin-bottom: 15px !important",attrs:{src:t.src,"max-width":t.maxWidth,alt:"Coding-Insight Image"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:v.a,VProgressCircular:h.a,VRow:_.a})},971:function(t,e,n){"use strict";n.r(e);var r=n(67),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("덧셈 계산기 만들기")]),t._v(" "),n("p",[t._v("\n      이번 시간에는 저번에 배운 숫자와 연산자를 사용해 간단한 덧셈 계산기를\n      만들어보겠습니다."),n("br"),n("br"),t._v("\n\n      몰래 이 프로그램을 사용해서 덧셈의 왕처럼 보일 수 있습니다."),n("br"),n("br"),t._v("\n\n      시작하기 전에\n      "),n("NuxtLink",{attrs:{"aria-label":t.allink,to:"number"}},[t._v(" 숫자 ")]),t._v(",\n      "),n("NuxtLink",{attrs:{"aria-label":t.allink,to:"operator"}},[t._v(" 연산자 ")]),t._v(",\n      "),n("NuxtLink",{attrs:{"aria-label":t.allink,to:"numtype"}},[t._v(" 숫자의 종류 ")]),t._v("\n      부분을 공부하세요.\n    ")],1)]),t._v(" "),n("Header",{attrs:{type:"파이썬",title:"간단한 계산기 만들기",num:"Proj: 3"}}),t._v(" "),n("div",[t._m(0),t._v(" "),n("div",{staticClass:"ma-auto"},[n("GlobalImage",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb1a_2sCkKU_ZFxGvyla48iA8hMAjnsmbaA&usqp=CAU",width:"300"}})],1)]),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("계산기 만들기")]),t._v(" "),n("p",[t._v("\n        두 숫자 안에 입력을 받겠습니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          num1 = input("숫자1: ")'),n("br"),t._v('\n          num2 = input("숫자2: ")\n        ')]),t._v("\n\n        float() 메서드를 사용해서 소수로 전환하고 더하겠습니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          addnum = float(num1) + float(num2)\n        ")]),t._v("\n\n        그리고 addnum을 출력하겠습니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" print(addnum) ")])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"2a317b1dba",height:"500"}})]),t._v(" "),n("Navigation",{attrs:{bef:"numtype",aft:"nummethod"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("알고리즘")]),t._v(" "),n("p",[t._v("\n        어떻게 사칙연산 계산기를 만들지 알아보겠습니다."),n("br"),n("br"),t._v("\n\n        1. 먼저, 사용자의 입력을 받아 2 변수 안에 그 숫자를 넣겠습니다."),n("br"),t._v("\n        2. 아직 그 입력은 문자이기 때문에 먼저 숫자로 바꿀 것입니다\n        float()."),n("br"),t._v("\n        3. 더하여 출력하겠습니다/"),n("br"),n("br"),t._v("\n\n        참고로 저희는 소수를 더하는 계산기이기 때문에 int()를 사용하지\n        않겠습니다.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/-CRGv2pHTjs",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(470).default,GlobalImage:n(511).default,QuadSpace:n(474).default,Navigation:n(473).default})}}]);