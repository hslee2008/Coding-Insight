(window.webpackJsonp=window.webpackJsonp||[]).push([[112,13],{470:function(t,e,n){"use strict";n.r(e);var r={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(67),l=n(459),v=n.n(l),d=n(522),c=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VIcon:c.a})},473:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(67),l=n(459),v=n.n(l),d=n(522),c=n(458),_=n(456),h=n(524),w=n(719),m=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:c.a,VCardActions:_.a,VIcon:h.a,VSpacer:w.a,VTooltip:m.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(67),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r={name:"GlobalImage",props:["src","maxWidth"]},o=n(67),l=n(459),v=n.n(l),d=n(516),c=n(526),_=n(517),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{staticClass:"rounded-lg",style:"margin-bottom: 15px !important",attrs:{src:t.src,"max-width":t.maxWidth,alt:"Coding-Insight Image"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VImg:d.a,VProgressCircular:c.a,VRow:_.a})},775:function(t,e,n){"use strict";n.r(e);var r={name:"StringMethod1Page",methods:{checkAnswer(){document.getElementById("question-1-answers-B").checked?alert("1 ✔️!"):alert("1번      틀렸습니다"),document.getElementById("question-3-answers-C").checked?alert("3 ✔️"):alert("3 ❌"),document.getElementById("question-4-answers-A").checked?alert("4 ✔️"):alert("4 ❌"),document.getElementById("question-5-answers-A").checked?alert("5 ✔️"):alert("5 ❌")}}},o=n(67),l=n(459),v=n.n(l),d=n(522),c=n(458),_=n(456),h=n(520),w=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{type:"Python",num:"9",title:"String Method 1"}}),t._v(" "),n("div",[n("div",[n("h2",[t._v("Get length of string")]),t._v(" "),n("p",[t._v("\n        To get the length of a certain string, we can use the len() code."),n("br"),n("br"),t._v("\n\n        Simply put a string inside len() and it will return a number."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"'),n("br"),t._v("\n          print(len(a)) #26 is printed\n        ")])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"4963fa9c31",width:"60%",height:"356",loading:"lazy"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("Check whether substring is inside string")]),t._v(" "),n("p",[t._v("\n        Substring means a part of a string."),n("br"),n("br"),t._v("\n\n        To check whether a substring is inside a string, we can use the 'in'\n        keyword."),n("br"),n("br"),t._v("\n\n        'Teddy Bear' in 'this box'. Similar to this syntax, put substring\n        first and string later with 'in' seperating."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" print('abc' in 'abcdef') ")])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"cf4311e167",width:"60%",height:"356",loading:"lazy"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("Uppercase and Lowercase in string")]),t._v(" "),n("p",[t._v("\n        Python has lots of useful tools for handling upper and lowercase."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          a = "hello world"'),n("br"),t._v('\n          b = "HELLO WORLD Ω"'),n("br"),n("br"),t._v("\n\n          print(a.capitalize()) #Hello world is printed"),n("br"),t._v("\n          print(a.title()) #Hello, World! printed"),n("br"),t._v("\n          print(a.upper()) #HELLO WORLD is printed"),n("br"),t._v("\n          print(b.lower()) #hello world Ω is printed"),n("br"),t._v("\n          print(b.isupper()) #True"),n("br"),t._v("\n          print(b.islower()) #False"),n("br"),t._v("\n          print(a.istitle()) #False\n        ")]),t._v("\n\n        capitalize() makes the first alphabet of the sentence capitalized."),n("br"),n("br"),t._v("\n\n        title() makes the string into a title format (books)."),n("br"),n("br"),t._v("\n\n        upper() makes every single alphabet into an upper case letter."),n("br"),n("br"),t._v("\n\n        lower() on the other hand, makes everything into lower case."),n("br"),n("br"),t._v("\n\n        isupper() and is islower() checks whether the string is in all upper\n        or lower case. Guess which is which."),n("br"),n("br"),t._v("\n\n        istitle() returns either True or False depending whether the string is\n        in title format.\n      ")])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"75c4671dd7",height:"300"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",{staticClass:"ma-auto"},[n("h2",[t._v("문자에서 문자의 인덱스")]),t._v(" "),n("p",[t._v("\n        index() 메서드를 사용하여 문자 안에 또 다른 문자가 존재하는지 알 수\n        있습니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" print('abcdef'.index('abc')) ")]),t._v("\n        만일 문자열이 문자 안에 없다면 에러가 생깁니다.\n      ")])]),t._v(" "),n("div",{staticClass:"ma-auto"},[n("GlobalImage",{attrs:{src:"https://cdn.shopify.com/s/files/1/0952/3604/products/indexbk2_9f2cbceb-31fb-4c4f-968b-2b9b7679152a.jpg?v=1593185298","max-width":"300px"}})],1)]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",{staticClass:"ma-auto"},[n("h2",[t._v("파이썬 문자 센터링")]),t._v(" "),n("p",[t._v("\n        파이썬에서 센터링이란 문자를 ' '로 둘러싸는 것을 뜻합니다. ' '로\n        둘러싸여 있지만 가운데에 있는 것처럼 보입니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          txt = "Hello, World!"'),n("br"),t._v("\n          x = txt.center(50)"),n("br"),t._v("\n          print(x)\n        ")]),t._v("\n        center에서 첫 번째 숫자는 문자를 센터하는 ' '의 수이고 두 번째는\n        문자를 센터할 문자입니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          txt = "Hello, World!"'),n("br"),t._v("\n          x = txt.center(50, '|')"),n("br"),t._v("\n          print(x)\n        ")])])])]),t._v(" "),n("Navigation",{attrs:{bef:"string",aft:"stringmethod2"}}),t._v(" "),n("v-card",[n("v-card-title",[t._v("퀴즈 풀기!")]),t._v(" "),n("v-card-text",[n("v-divider"),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("파이썬에서 문자의 길이를 찾는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-A",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-A"}},[t._v(" len ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-B",type:"radio",name:"question-1-answers",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-B"}},[t._v(" len() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-C",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-C"}},[t._v(" length ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-D",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-D"}},[t._v(" length() ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("문자 안에 부분문자열이 존재하는지 확인하는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-A",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v(" == ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-B",type:"radio",name:"question-2-answers",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v(" += ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-C",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v(" in ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-D",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v(" < ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("어떤 값의 인덱스를 찾는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-A",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-A"}},[t._v(" in ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-B",type:"radio",name:"question-3-answers",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-B"}},[t._v(" in() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-C",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-C"}},[t._v(" index() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-D",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-D"}},[t._v(" index ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("문자를 대문자로 전환하는 방법과 소문자로 전환하는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-A",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-A"}},[t._v(" upper(), lower() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-B",type:"radio",name:"question-4-answers",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-B"}},[t._v("toUpperCase(), toLowerCase()\n        ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-C",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-C"}},[t._v(" toU(), toL() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-D",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-D"}},[t._v(" u(), l() ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("파이썬 문자 센터링하는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-A",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-A"}},[t._v(" center() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-B",type:"radio",name:"question-5-answers",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-B"}},[t._v(" middle() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-C",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-C"}},[t._v(" toCenter() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-D",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-D"}},[t._v(" toMiddle() ")])]),t._v(" "),n("QuadSpace")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Header:n(470).default,QuadSpace:n(474).default,GlobalImage:n(511).default,Navigation:n(473).default}),v()(component,{VBtn:d.a,VCard:c.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VDivider:h.a,VIcon:w.a})}}]);