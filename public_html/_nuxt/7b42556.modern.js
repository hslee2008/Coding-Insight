(window.webpackJsonp=window.webpackJsonp||[]).push([[30,13],{470:function(t,e,n){"use strict";n.r(e);var r={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(67),l=n(459),v=n.n(l),c=n(522),d=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:c.a,VIcon:d.a})},473:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(67),l=n(459),v=n.n(l),c=n(522),d=n(458),h=n(456),_=n(524),m=n(719),f=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:c.a,VCard:d.a,VCardActions:h.a,VIcon:_.a,VSpacer:m.a,VTooltip:f.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(67),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r={name:"GlobalImage",props:["src","maxWidth"]},o=n(67),l=n(459),v=n.n(l),c=n(516),d=n(526),h=n(517),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{staticClass:"rounded-lg",style:"margin-bottom: 15px !important",attrs:{src:t.src,"max-width":t.maxWidth,alt:"Coding-Insight Image"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;v()(component,{VImg:c.a,VProgressCircular:d.a,VRow:h.a})},725:function(t,e,n){"use strict";n.r(e);var r={name:"BooleanPage",methods:{checkAnswer(){document.getElementById("question-1-answers-D").checked?alert("1 ✔️!"):alert("1 ❌"),document.getElementById("question-2-answers-A").checked?alert("2 ✔️"):alert("2 ❌"),document.getElementById("question-3-answers-B").checked?alert("3 ✔️"):alert("3 ❌")}}},o=n(67),l=n(459),v=n.n(l),c=n(522),d=n(458),h=n(456),_=n(520),m=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h2",[t._v("What is Boolean?")]),t._v(" "),n("p",[t._v("\n        Boolean is a type of data that has only True and False."),n("br"),n("br"),t._v("\n\n        Let's try to make a program that prints whether the number user typed\n        in is bigger than 5."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          userNumber = int(input("Number: "))'),n("br"),n("br"),t._v("\n\n          print(userNumber > 5) #whether userNumber is bigger than 5\n        ")]),t._v("\n\n        We can also store boolean values in variables."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" a = 5 > 6 ")])])]),t._v(" "),n("div",{staticClass:"ma-auto"},[n("GlobalImage",{attrs:{src:"https://quizagogo.com/wp-content/uploads/2021/05/True-or-false-1-940x470.jpg","max-width":"300px"}})],1)]),t._v(" "),n("Header",{attrs:{type:"Python",num:"13",title:"Boolean"}}),t._v(" "),t._m(0),t._v(" "),n("iframe",{attrs:{src:t.trinket2+"8500bba20b",height:"356",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[t._m(1),t._v(" "),n("iframe",{attrs:{src:t.trinket2+"5fbbc3204c",width:"60%",height:"356"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("assert")]),t._v(" "),n("p",[t._v("\n        Let's look at the following example."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          assert 2 > 1"),n("br"),t._v('\n          print("YES. 2 is bigger than 1")\n        ')]),t._v("\n\n        The example above will make an error if 2 is not bigger than 1."),n("br"),n("br"),t._v('\n\n        Otherwise, it will continue on and print "Yes. 2 is bigger than 1."'),n("br"),n("br"),t._v("\n\n        We can also make your own message."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          assert 1 > 2, "Hmmm... 🐛🐛🐛(bug) found in code."\n        ')])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"b23c21c043",width:"60%",height:"356"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[t._m(2),t._v(" "),n("iframe",{attrs:{src:t.trinket2+"6d4ae0d672",height:"356"}})]),t._v(" "),n("Navigation",{attrs:{bef:"ascii",aft:"number"}}),t._v(" "),n("v-card",[n("v-card-title",[t._v("Solve This Quiz!")]),t._v(" "),n("v-card-text",[n("v-divider"),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("What is the possible values of a Boolean in Python?")]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-A"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-A"}},[t._v(" true, false ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-B"}},[t._v(" True, false ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-C"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-C"}},[t._v(" true, False ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-D"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-D"}},[t._v(" True, False ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("What is the value of not (not (not (not (not (not (False))))))")]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-A"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v(" False ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v(" True ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-C"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v(" Null ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-D"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v(" None ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("What is the value of any([True, False, False, False, False])")]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-A"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-A"}},[t._v(" False ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-B"}},[t._v(" True ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-C"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-C"}},[t._v(" Null ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-D"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-D"}},[t._v(" None ")])]),t._v(" "),n("QuadSpace")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("Check Answer\n      ")],1)],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Something to be careful")]),t._v(" "),n("p",[t._v("\n      In Python, incorrect is False and correct is True."),n("br"),n("br"),t._v("\n\n      I did not made the first alphabet of False and True uppercase on\n      purpose."),n("br"),n("br"),t._v("\n\n      Python uses False and True with UPPERCASE letters.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("not keyword")]),t._v(" "),n("p",[t._v("Using not, we can switch from true to false and vice versa.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("all() and any()")]),t._v(" "),n("p",[t._v("\n        All means everything. We have not yet learned this yet but if\n        everything inside list is True, all() prints True and prints False if\n        otherwise."),n("br"),n("br"),t._v("\n\n        any() prints True if any of the items in list is True and False if all\n        of them are False.\n      ")])])}],!1,null,null,null);e.default=component.exports;v()(component,{GlobalImage:n(511).default,Header:n(470).default,QuadSpace:n(474).default,Navigation:n(473).default}),v()(component,{VBtn:c.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDivider:_.a,VIcon:m.a})}}]);