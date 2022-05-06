(window.webpackJsonp=window.webpackJsonp||[]).push([[43,13,14],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),v=n(43),l=n(76),c=r.TypeError,d=function(t,e,source,n,r,h,_,f){for(var element,m,y=r,w=0,x=!!_&&l(_,f);w<n;){if(w in source){if(element=x?x(source[w],w,e):source[w],h>0&&o(element))m=v(element),y=d(t,e,element,m,y,h-1)-1;else{if(y>=9007199254740991)throw c("Exceed the acceptable array length");t[y]=element}y++}w++}return y};t.exports=d},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),v=n(527),l=n.n(v),c=n(587),d=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:d.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),v=n(527),l=n.n(v),c=n(587),d=n(589),h=n(526),_=n(585),f=n(698),m=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VCard:d.a,VCardActions:h.a,VIcon:_.a,VSpacer:f.a,VTooltip:m.a})},533:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";var r=n(3),o=n(530),v=n(37),l=n(43),c=n(66),d=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=v(this),n=l(e),r=d(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:c(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},576:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7132a15d",content,!0,{sourceMap:!1})},577:function(t,e,n){var r=n(64)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},579:function(t,e,n){"use strict";n(39),n(32),n(45),n(6),n(51),n(31),n(52);var r=n(22),o=(n(576),n(542));function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},807:function(t,e,n){"use strict";n.r(e);var r={name:"DataTypePage",methods:{checkAnswer:function(){document.getElementById("question-1-answers-B").checked?alert("1 ✔️!"):alert("1 ❌"),document.getElementById("question-2-answers-A").checked?alert("2 ✔️"):alert("2 ❌"),document.getElementById("question-3-answers-A").checked?alert("3 ✔️!"):alert("3 ❌")}}},o=n(108),v=n(527),l=n.n(v),c=n(587),d=n(589),h=n(526),_=n(579),f=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h2",[t._v("What is data and data type?")]),t._v(" "),n("p",[t._v("\n        In programming, symbols such as numbers and alphabets are called\n        data."),n("br"),n("br"),t._v("\n\n        Data Types are types of different data."),n("br"),n("br"),t._v("\n\n        For example, one of the most used data types in the human world is\n        text(otherwise known as strings). In Python, put texts inside '' or\n        \"\"."),n("br"),n("br"),t._v("\n\n        The example below is a way to declare srings in Python."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(' weather = "a bit rainy" ')])])])]),t._v(" "),n("Header",{attrs:{type:"Python",num:"6",title:"Data Type"}}),t._v(" "),n("div",[n("div",{staticStyle:{margin:"auto","padding-right":"5px"}},[n("h2",[t._v("Know the data type in Python")]),t._v(" "),n("p",[t._v("\n        To find the data type of a variable or anything in Python, use the\n        type() code."),n("br"),n("br"),t._v("\n\n        Simply put any variables inside to see the data type."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          a = "Hello"'),n("br"),n("br"),t._v("\n\n          print(type(a))\n        ")]),t._v("\n\n        The code above prints <class 'str'>. str stands for string.\n      ")])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"109be31855",width:"70%",height:"356"}})]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("Check data type in Python")]),t._v(" "),n("p",[t._v("\n        To check wether a data is a certain type in Python, use isinstance()\n        code."),n("br"),n("br"),t._v("\n\n        Put the name of variable or data then insert the data type name to\n        check whether the type of data matches the given type."),n("br"),n("br"),t._v("\n\n        The code will return either True or False. These are called\n        Boolean."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n          weather = "sunny"'),n("br"),t._v("\n          print(isinstance(weather, str))\n        ")]),t._v('\n\n        The code above prins True because "sunny" is a string.\n      ')])])]),t._v(" "),n("Navigation",{attrs:{bef:"madlib",aft:"comment"}}),t._v(" "),n("v-card",[n("v-card-title",[t._v("퀴즈 풀기!")]),t._v(" "),n("v-card-text",[n("v-divider"),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("What is data type?")]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-A"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-A"}},[t._v("A) A place where you can store data\n        ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-B"}},[t._v(" Types of data ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-C"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-C"}},[t._v(" Various symbols ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-D"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-D"}},[t._v(" Other ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("What is the correct code to find data type?")]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-A"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v(" type() ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v(" typeof() ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-C"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v(" type ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-D"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v(" typeof ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("How can we check whether the data's type match given data?")]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-A"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-A"}},[t._v(" isinstance() ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-B",value:"B"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-B"}},[t._v(" instance() ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-C"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-C"}},[t._v(" is() ")])]),t._v(" "),n("div",[n("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-D"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-D"}},[t._v(" isdata() ")])]),t._v(" "),n("QuadSpace")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Header:n(531).default,QuadSpace:n(533).default,Navigation:n(532).default}),l()(component,{VBtn:c.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDivider:_.a,VIcon:f.a})}}]);