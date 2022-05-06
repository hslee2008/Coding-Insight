(window.webpackJsonp=window.webpackJsonp||[]).push([[293,13,14],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),v=n(43),l=n(76),c=r.TypeError,d=function(t,e,source,n,r,_,h,m){for(var element,f,w=r,y=0,x=!!h&&l(h,m);y<n;){if(y in source){if(element=x?x(source[y],y,e):source[y],_>0&&o(element))f=v(element),w=d(t,e,element,f,w,_-1)-1;else{if(w>=9007199254740991)throw c("Exceed the acceptable array length");t[w]=element}w++}y++}return w};t.exports=d},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),v=n(527),l=n.n(v),c=n(587),d=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:d.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),v=n(527),l=n.n(v),c=n(587),d=n(589),_=n(526),h=n(585),m=n(698),f=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VCard:d.a,VCardActions:_.a,VIcon:h.a,VSpacer:m.a,VTooltip:f.a})},533:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";var r=n(3),o=n(530),v=n(37),l=n(43),c=n(66),d=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=v(this),n=l(e),r=d(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:c(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},576:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7132a15d",content,!0,{sourceMap:!1})},577:function(t,e,n){var r=n(64)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},579:function(t,e,n){"use strict";n(39),n(32),n(45),n(6),n(51),n(31),n(52);var r=n(22),o=(n(576),n(542));function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},925:function(t,e,n){"use strict";n.r(e);var r={name:"VariablePage",methods:{checkAnswer:function(){document.getElementById("question-1-answers-A").checked?alert("1 ✔️!"):alert("1 ❌"),document.getElementById("question-2-answers-D").checked?alert("2 ✔️"):alert("2 ❌"),document.getElementById("question-3-answers-B").checked?alert("3 ✔️!"):alert("3 ❌"),document.getElementById("question-4-answers-A").checked?alert("4 ✔️"):alert("4 ❌"),document.getElementById("question-5-answers-A").checked?alert("5 ✔️ :o"):alert("5 ❌")}}},o=n(108),v=n(527),l=n.n(v),c=n(587),d=n(589),_=n(526),h=n(579),m=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("변수란?")]),t._v(" "),t._m(0),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("Header",{attrs:{type:"파이썬",num:"5",title:"변수"}}),t._v(" "),n("h2",[t._v("변수 선언하기")]),t._v(" "),n("p",[t._v("\n    변수를 만들려면 다음과 같은 방법을 사용할 수 있습니다. "),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" name = data ")]),t._v("\n\n    에서 NAME은 변수의 이름을 뜻하고 DATA는 값입니다. "),n("br"),n("br"),t._v("\n\n    이렇게 하면 변수를 만들 수 있습니다.\n  ")]),t._v(" "),n("iframe",{attrs:{src:t.trinket2+"a5d980683b",height:"356"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("h2",[t._v("변수 사용 방법")]),t._v(" "),n("p",[t._v("\n    변수를 사용하기 위해서는 변수의 이름을 print()안에 넣으면 변수 이름이\n    출력되지 않고 변수의 값이 출력됩니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python",domProps:{innerHTML:t._s("name = 'John'\nprint(name) #John이 출력됩니다.")}}),t._v("\n\n    파이썬에서 변수의 이름은 대문자 소문자가 구별됩니다. "),n("br"),n("br"),t._v("\n    NAME과 name은 다릅니다.\n  ")]),t._v(" "),n("QuadSpace"),t._v(" "),n("h2",[t._v("변수 이름을 만들때 규칙")]),t._v(" "),t._m(2),t._v(" "),n("QuadSpace"),t._v(" "),n("h2",[t._v("변수 값 바꾸기")]),t._v(" "),n("p",[t._v("\n    변수에 저장된 값을 바꾸기 위하여 저희는 먼저 변수를 선언하겠습니다."),n("br"),n("br"),t._v("\n\n    변수를 만들었다면 이제 변수의 값을 새로운 데이터로 바꾸어 보겠습니다."),n("br"),n("br"),t._v("\n\n    변수를 만들었을 때와 같이\n    "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python ic",domProps:{innerHTML:t._s("'변수 이름 = 값'")}}),t._v("\n    코드를 실행하면 됩니다.\n  ")]),t._v(" "),n("iframe",{attrs:{src:t.trinket2+"4745a3ecb9",height:"200"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("h2",[t._v("변수 삭제하기")]),t._v(" "),n("p",[t._v("\n    변수가 더 이상 필요 없고 이 코드가 실행되고 있는 기기에 저장 공간이 많이\n    없다면 삭제해도 됩니다."),n("br"),n("br"),t._v("\n\n    삭제는 del 키워드를 사용하고 뒤에 변수 이름을 넣으면 이제 변수를 다시\n    사용할 수 없게 됩니다."),n("br"),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python",domProps:{innerHTML:t._s("name = 'Coding-Insight'\ndel name\nprint(name)")}}),t._v("\n\n    이 코드를 실행하면 에러가 생깁니다."),n("br"),n("br"),t._v("\n\n    그 이유는 name이라는 변수가 삭제되어 존재하지 않기 때문입니다."),n("br"),n("br")]),t._v(" "),n("QuadSpace"),t._v(" "),n("h2",[t._v("변수를 한번에 많이 선정하기")]),t._v(" "),n("p",[t._v("\n    처음에는 원하는 변수들의 이름을 다 쉼표로 나누고 '='를 붙입니다."),n("br"),n("br"),t._v("\n\n    '=' 뒤에 각 변수의 값을 순서대로 나열합니다."),n("br"),n("br"),t._v("\n\n    위의 방법을 따르면 첫 번째 변수에 첫 번째 값이 저장되고 두 번째에는 두\n    번째 값이 지정됩니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python",domProps:{innerHTML:t._s("a, b, c = 1, 2, 3\nprint(a, b, c) # 1 2 3이 출력됩니다.")}}),t._v('\n\n    변수 5개에 값 "alphabet"을 저장하고 싶다고 가정을 해보겠습니다.'),n("br"),n("br"),t._v('\n\n    하지만 name="alphabet" 코드를 5번 실행하려면 시간이 많이 걸립니다.'),n("br"),n("br"),t._v("\n\n    그래서 파이썬에서는 변수를 '='로 연결하여 끝에 한 값을 넣어주면 모든\n    변수에 그 마지막 값이 저장됩니다."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python",domProps:{innerHTML:t._s("a = b = c = d = e = 'alphabet'\nprint(a, b, c, d, e) # alphabet이 5번 출력됩니다.")}})]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"ac33761c8a",height:"356"}}),t._v(" "),n("Navigation",{attrs:{bef:"io",aft:"madlib"}}),t._v(" "),n("v-card",[n("v-card-title",[t._v("퀴즈 풀기!")]),t._v(" "),n("v-card-text",[n("v-divider"),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("변수란?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-A",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-A"}},[t._v(" 데이터를 저장할 수 있는 곳 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-B",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-B"}},[t._v("\n          출력과 입력을 통틀어서 변수라고 합니다\n        ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-C",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-C"}},[t._v(" 변하는 수 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-1-answers-D",type:"radio",name:"question-1-answers"}}),t._v(" "),n("label",{attrs:{for:"question-1-answers-D"}},[t._v(" 다른 정답 ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("파이썬에서 변수 선언 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-A",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-A"}},[t._v(" 값 = 이름 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-B",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-B"}},[t._v(" 값 == 이름 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-C",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-C"}},[t._v(" 이름 == 값 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-2-answers-D",type:"radio",name:"question-2-answers"}}),t._v(" "),n("label",{attrs:{for:"question-2-answers-D"}},[t._v(" 이름 = 값 ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("다음 중 변수의 이름이 될 수 없는 것은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-A",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-A"}},[t._v(" hello ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-B",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-B"}},[t._v(" hello! ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-C",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-C"}},[t._v(" hello_world ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-3-answers-D",type:"radio",name:"question-3-answers"}}),t._v(" "),n("label",{attrs:{for:"question-3-answers-D"}},[t._v(" hello123 ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("변수의 값을 바꾸는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-A",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-A"}},[t._v(" 이름 = 값 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-B",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-B"}},[t._v(" 이름 == 값 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-C",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-C"}},[t._v(" 값 = 이름 ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-4-answers-D",type:"radio",name:"question-4-answers"}}),t._v(" "),n("label",{attrs:{for:"question-4-answers-D"}},[t._v(" 값 == 이름 ")])]),t._v(" "),n("br"),n("br"),t._v(" "),n("h3",[t._v("변수를 삭제하는 방법은?")]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-A",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-A"}},[t._v(" del ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-B",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-B"}},[t._v(" del() ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-C",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-C"}},[t._v(" delete ")])]),t._v(" "),n("div",[n("input",{attrs:{id:"question-5-answers-D",type:"radio",name:"question-5-answers"}}),t._v(" "),n("label",{attrs:{for:"question-5-answers-D"}},[t._v(" delete() ")])]),t._v(" "),n("QuadSpace")],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n      ")],1)],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    프로그래밍에서는 변수라고 하면 어떤 정보를 담을 수 있는 장소를 뜻합니다.\n    "),n("br"),n("br"),t._v("\n    예를 들어 상자를 생각해보세요. 상자 안에는 다양한 물건을 담을 수\n    있습니다."),n("br"),n("br"),t._v("\n    이와 비슷하게 변수도 다양 한 정보를 담을 수 있는 '상자'라고 할 수\n    있습니다.\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"80%",height:"315",src:"https://www.youtube.com/embed/Qu5_eBK6OkI",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    변수를 만들 때 매우 다양한 규칙이 있습니다."),n("br"),n("br"),t._v("\n\n    1. 영문자 (대문자, 소문자), 숫자, 언더바 (_) 만 사용할 수 있습니다."),n("br"),t._v("\n    2. 변수의 이름의 첫 자리는 숫자이면 안됩니다."),n("br"),t._v("\n    3. 파이썬 키워드는 변수의 이름으로 사용할 수 없습니다 (키워드에 대한 더\n    자세한 내용은 조금 뒤에 배우겠습니다)\n  ")])}],!1,null,null,null);e.default=component.exports;l()(component,{QuadSpace:n(533).default,Header:n(531).default,Navigation:n(532).default}),l()(component,{VBtn:c.a,VCard:d.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VDivider:h.a,VIcon:m.a})}}]);