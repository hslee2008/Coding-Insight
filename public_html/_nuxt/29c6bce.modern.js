(window.webpackJsonp=window.webpackJsonp||[]).push([[180,13],{470:function(t,n,e){"use strict";e.r(n);var r={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},v=e(67),c=e(459),o=e.n(c),l=e(522),_=e(524),component=Object(v.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:l.a,VIcon:_.a})},473:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},v=e(67),c=e(459),o=e.n(c),l=e(522),_=e(458),h=e(456),d=e(524),f=e(719),m=e(487),component=Object(v.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,v=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",v,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,v=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",v,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VBtn:l.a,VCard:_.a,VCardActions:h.a,VIcon:d.a,VSpacer:f.a,VTooltip:m.a})},474:function(t,n,e){"use strict";e.r(n);var r=e(67),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},787:function(t,n,e){"use strict";e.r(n);var r={data:()=>({switch1:!1})},v=e(67),c=e(459),o=e.n(c),l=e(1043),component=Object(v.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._m(0),t._v(" "),e("div",{staticClass:"ma-auto"},[e("v-switch",{model:{value:t.switch1,callback:function(n){t.switch1=n},expression:"switch1"}})],1)]),t._v(" "),e("Header",{attrs:{type:"C/C++",title:"Switch문",num:"17"}}),t._v(" "),e("div",[e("div",[e("h2",[t._v("조건문이 복잡해진다!!!")]),t._v(" "),e("p",[t._v("\n        조건문이 매우 복잡해질 때가 있습니다."),e("br"),e("br"),t._v("\n\n        예를 들면, char를 입력 받아 A이면 1, B이면 2, C이면 3그리고 F이면\n        6까지 출력하는 프로그램을 만들어 보겠습니다."),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <stdio.h>"),e("br"),e("br"),t._v("\n\n          int main()"),e("br"),t._v("\n          {"),e("br"),t._v("\n            char a;"),e("br"),t._v('\n            scanf("%d", &a);'),e("br"),e("br"),t._v("\n\n            if(a == 'A') {"),e("br"),t._v('\n              printf("1");'),e("br"),t._v("\n            } else if(a == 'B') {"),e("br"),t._v('\n              printf("2");'),e("br"),t._v("\n            } else if(a == 'C') {"),e("br"),t._v('\n              printf("3");'),e("br"),t._v("\n            }else if(a == 'D') {"),e("br"),t._v('\n              printf("4");'),e("br"),t._v("\n            } else if(a == 'E') {"),e("br"),t._v('\n              printf("5");'),e("br"),t._v("\n            } else if(a == 'F') {"),e("br"),t._v('\n              printf("6");'),e("br"),t._v("\n            }"),e("br"),e("br"),t._v("\n\n            return 0;"),e("br"),t._v("\n          }\n        ")]),t._v("\n\n        흠... 조금 이해하기 어렵습니다. 이 상황에서 switch문을 사용하면\n        어떨까요?\n      ")])]),t._v(" "),e("div",[e("iframe",{attrs:{src:t.jdoodle+"3W93",height:"400px"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("switch 문")]),t._v(" "),e("p",[t._v("\n        1. switch() {}를 선언한 후 괄호() 안에 비교하고 싶은 변수를\n        넣습니다."),e("br"),e("br"),t._v("\n        (지금부터 중괄호{} 안에 코드를 넣습니다.)"),e("br"),e("br"),t._v('\n        2. case "A":라고 친 후 새로운 줄에 만일 a의 값이 A라면 샐행할 코드를\n        넣습니다.'),e("br"),e("br"),t._v("\n        (참고로 case는 {} 중괄호를 사용하지 않고 ':'를 사용합니다)"),e("br"),e("br"),t._v('\n        4. 그리고 항상 a의 값이 A라면 실행할 코드 다음에 "break"를 넣어야\n        합니다.'),e("br"),e("br"),t._v(" "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cpp"},[t._v("\n          #include <stdio.h>"),e("br"),e("br"),t._v("\n\n          int main()"),e("br"),t._v("\n          {"),e("br"),t._v("\n            char a;"),e("br"),t._v('\n            scanf("%c", a);'),e("br"),e("br"),t._v("\n\n            switch(a) {"),e("br"),t._v("\n              case 'A':"),e("br"),t._v('\n                printf("1");'),e("br"),t._v("\n                reak;"),e("br"),t._v("\n              case 'B':"),e("br"),t._v('\n                printf("2");'),e("br"),t._v("\n                break;"),e("br"),t._v("\n            }"),e("br"),e("br"),t._v("\n\n            return 0;"),e("br"),t._v("\n          }\n        ")])])]),t._v(" "),e("div",[e("iframe",{attrs:{src:t.jdoodle+"3Wcm",height:"300px"}})])]),t._v(" "),e("Navigation",{attrs:{bef:"hardif",aft:"for"}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ma-auto"},[e("h2",[t._v("Switch")]),t._v(" "),e("p",[t._v("\n        C 언어에서 switch는 조건문과 비슷하지만 변수와 다른 값을\n        비교합니다."),e("br"),e("br"),t._v("\n\n        switch는 '=='를 사용한 조건문입니다.\n      ")])])}],!1,null,null,null);n.default=component.exports;o()(component,{Header:e(470).default,QuadSpace:e(474).default,Navigation:e(473).default}),o()(component,{VSwitch:l.a})}}]);