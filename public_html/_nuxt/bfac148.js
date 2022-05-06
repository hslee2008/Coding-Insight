(window.webpackJsonp=window.webpackJsonp||[]).push([[67,13,14],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),l=n(43),c=n(76),v=r.TypeError,h=function(t,e,source,n,r,d,f,m){for(var element,_,w=r,y=0,x=!!f&&c(f,m);y<n;){if(y in source){if(element=x?x(source[y],y,e):source[y],d>0&&o(element))_=l(element),w=h(t,e,element,_,w,d-1)-1;else{if(w>=9007199254740991)throw v("Exceed the acceptable array length");t[w]=element}w++}y++}return w};t.exports=h},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),l=n(527),c=n.n(l),v=n(587),h=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),l=n(527),c=n.n(l),v=n(587),h=n(589),d=n(526),f=n(585),m=n(698),_=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:h.a,VCardActions:d.a,VIcon:f.a,VSpacer:m.a,VTooltip:_.a})},533:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";var r=n(3),o=n(530),l=n(37),c=n(43),v=n(66),h=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=l(this),n=c(e),r=h(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:v(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},576:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7132a15d",content,!0,{sourceMap:!1})},577:function(t,e,n){var r=n(64)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},579:function(t,e,n){"use strict";n(39),n(32),n(45),n(6),n(51),n(31),n(52);var r=n(22),o=(n(576),n(542));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},969:function(t,e,n){"use strict";n.r(e);var r=n(108),o=n(527),l=n.n(o),c=n(579),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("If Statement")]),t._v(" "),n("p",[t._v("\n    If statement is a statement that contains the meaning 'if'."),n("br"),n("br"),t._v('\n\n    For example, "If you get 100 in your test, I will give you a candy".'),n("br"),n("br"),t._v("\n\n    The sentence above has the same meaning: If your score is equal to 100,\n    get an hour of playing games."),n("br"),n("br"),t._v("\n\n    In Python, we can try that statement out with something called if\n    statement."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n      a = input("Score:")'),n("br"),n("br"),t._v('\n      if a == "100":'),n("br"),t._v('\n        print("play game")\n    ')]),t._v('\n\n    Depending on the statement a == "100", either "play game" is printed or\n    nothing.'),n("br"),n("br"),t._v('\n\n    If a is 100, print "play game" and nothing if otherwise.'),n("br"),n("br"),t._v("\n\n    Note to put ':' after statement and indent the code you want to run if\n    statement is true.\n  ")]),t._v(" "),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/DzDnLTtrDQk",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),n("Header",{attrs:{type:"Python",title:"If Statement",num:"27"}}),t._v(" "),n("h2",[t._v("if - else")]),t._v(" "),n("p",[t._v("\n    If - else statement is very similar to if statement above."),n("br"),n("br"),t._v("\n    However, we will be adding a new code to run if the statment is false."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v('\n      a = input("Score:")'),n("br"),n("br"),t._v('\n      if a == "100":'),n("br"),t._v('\n       print("candy")'),n("br"),t._v("\n      else:"),n("br"),t._v('\n       print("nothing")\n    ')])]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("h2",[t._v("Logical Operator")]),t._v(" "),n("br"),t._v(" "),t._m(0),t._v(" "),n("v-divider"),t._v(" "),n("p",[t._v("\n      The if statement will run if at least one of the two statement is True.\n    ")])],1),t._v(" "),n("iframe",{attrs:{src:t.trinket+"9e178be286",height:"250",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[n("h2",[t._v("다양한 형태")]),t._v(" "),t._m(1),t._v(" "),n("v-divider"),t._v(" "),t._m(2),t._v(" "),n("v-divider"),t._v(" "),t._m(3)],1)]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"4f34d13cdc",height:"400",loading:"lazy"}}),t._v(" "),n("Navigation",{attrs:{bef:"setmethod",aft:"ifmaster"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      'and' operator is used to put two statements inside on if satement."),n("br"),n("br"),t._v("\n\n      When using the 'and' operator, the code inside if statement will run\n      when the two statements is True."),n("br"),n("br"),t._v("\n\n      For example, the code inside if a == 1 and a > 0 will run if a is equal\n      to 1 and bigger than 0.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        If - else statement is very similar to if statement above."),n("br"),n("br"),t._v("\n\n        However, we will be adding a new code to run if the statment is false.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        To put it simply, if - elif is equal to if - else but with another if\n        inside else."),n("br"),n("br"),t._v("\n        The code inside elif will run when the statement inside if is False\n        and another statement inside elif is True.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        If - elif - else is a combination of statements we just learned."),n("br"),n("br"),t._v("\n\n        If all the satements inside if and elif is False, Python will run the\n        code inside else.\n      ")])}],!1,null,null,null);e.default=component.exports;l()(component,{Header:n(531).default,QuadSpace:n(533).default,Navigation:n(532).default}),l()(component,{VDivider:c.a})}}]);