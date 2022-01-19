(window.webpackJsonp=window.webpackJsonp||[]).push([[69,7,9,10],{347:function(t,n,e){"use strict";e.r(n);var r={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},c=e(63),l=e(171),v=e.n(l),o=e(338),_=e(339),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("hr"),t._v(" "),e("br"),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),e("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),e("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"display-6"},[e("span",[t._v(t._s(t.title))]),e("br",{attrs:{id:"lbbr"}}),e("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),e("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),e("br"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:o.a,VIcon:_.a})},348:function(t,n,e){"use strict";e.r(n);var r={},c=e(63),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},349:function(t,n,e){"use strict";e.r(n);var r={props:["flink","slink"]},c=e(63),l=e(171),v=e.n(l),o=e(338),_=e(339),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),e("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[e("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:o.a,VIcon:_.a})},616:function(t,n,e){"use strict";e.r(n);var r=e(63),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("br"),t._v(" "),t._m(0),t._v(" "),e("br"),e("br"),t._v(" "),e("Header",{attrs:{num:"40",title:"모듈"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(1),t._v(" "),e("QuadSpace"),t._v(" "),t._m(2),t._v(" "),e("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/cc5f724ff2",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),e("QuadSpace"),t._v(" "),t._m(3),t._v(" "),e("QuadSpace"),t._v(" "),e("BeforeNextButton",{attrs:{flink:"etcfunction",slink:"modulemaster"}}),t._v(" "),e("QuadSpace")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("모듈의 정의")]),t._v(" "),e("p",[t._v("\n        파이썬에서 모듈이란 클래스, 함수, 변수, 코드 등 다양한 정보를 저장하고\n        있거나 실행할 수 있는 코드의 모임이라고 할 수 있습니다."),e("br"),e("br"),t._v("\n        이러한 코드를 우리가 2개 이상 파일에서 사용하기 위하여 모듈을 다른\n        파일에서 가지고 올 수 있습니다.\n      ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("모듈 - import")]),t._v(" "),e("p",[t._v("\n        모듈은 다른 파일에 있기 때문에 먼저 그 파일에서 가지고 와야합니다."),e("br"),e("br"),t._v("\n        모듈을 가지고 오려면 'import 모듈 이름' 형태를 사용하면 됩니다."),e("br"),e("br"),t._v("\n        참고로 우리만의 모듈을 만들어 인터넷에 올리는 것도 가능하지만 먼저\n        모듈에 대하여 더 알아보겠습니다."),e("br"),e("br"),t._v(" "),e("code",[t._v(" import math ")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("모듈 - dir()")]),t._v(" "),e("p",[t._v("\n        모듈에서 모든 함수, 클래스, 변수 이름을 보기 위하여 'dir(모듈이름)'\n        사용할 수 있습니다."),e("br"),e("br"),t._v("\n        math 모듈에서 'sqrt'라는 아이템이 보입니다."),e("br"),e("br"),t._v("\n        'sqrt'는 Square Root의 약자로 한국어로 번역하면 제곱근입니다."),e("br"),e("br"),t._v("\n        이 함수를 사용하기 위하여 '모듈 이름.함수이름()' 형태를 사용할 수\n        있습니다.\n      ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h1",[t._v("'as' 키워드")]),t._v(" "),e("p",[t._v("\n        만일 abcdefghijklmnopqrstuvwxyz라는 모듈이 있다고 가정해 봅시다."),e("br"),e("br"),t._v("\n        그렇다면 abcdefgjijklmnopqrstuvwxyz 모듈의 abc 함수를 이용하기 위하여\n        abcdefghijklmnopqrstuvwxyz.abc() 코드를 실행하기 위하여 항상 a부터\n        z까지 다 쳐야합니다."),e("br"),e("br"),t._v("\n        그래서 긴 모듈 이름의 불편함을 최소화하기 위하여 다음과 같은 두 가지의\n        방법이 있습니다."),e("br"),e("br"),t._v("\n        1. 새로운 변수를 만들어 모듈 저장"),e("br"),e("br"),t._v(" "),e("code",[t._v("\n          import abcdefghijklmnopqrstuvwxyz"),e("br"),e("br"),t._v("\n          alphabet = abcdefghijklmnopqrstuvwxyz"),e("br"),e("br"),t._v("\n          alphabet.abc()"),e("br"),t._v("\n          abcdefghibjkmnopqrstuvwxyz.abc() #위의 코드와 같음\n        ")]),t._v("\n        2. as 이용하기"),e("br"),e("br"),t._v(" "),e("code",[t._v("\n          import abcdefghijklmnopqrstuvwxyz as alphabet"),e("br"),e("br"),t._v("\n          alphabet.abc()\n        ")])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(347).default,QuadSpace:e(348).default,BeforeNextButton:e(349).default})}}]);