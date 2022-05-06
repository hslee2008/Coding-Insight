(window.webpackJsonp=window.webpackJsonp||[]).push([[34,13,14],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),l=n(43),c=n(76),v=r.TypeError,h=function(t,e,source,n,r,_,f,d){for(var element,m,y=r,k=0,w=!!f&&c(f,d);k<n;){if(k in source){if(element=w?w(source[k],k,e):source[k],_>0&&o(element))m=l(element),y=h(t,e,element,m,y,_-1)-1;else{if(y>=9007199254740991)throw v("Exceed the acceptable array length");t[y]=element}y++}k++}return y};t.exports=h},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),l=n(527),c=n.n(l),v=n(587),h=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),l=n(527),c=n.n(l),v=n(587),h=n(589),_=n(526),f=n(585),d=n(698),m=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:h.a,VCardActions:_.a,VIcon:f.a,VSpacer:d.a,VTooltip:m.a})},533:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";var r=n(3),o=n(530),l=n(37),c=n(43),v=n(66),h=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=l(this),n=c(e),r=h(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:v(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},948:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Header",{attrs:{type:"Python",num:"47",title:"Class Method"}}),t._v(" "),t._m(1),t._v(" "),n("iframe",{attrs:{src:t.trinket+"e0b362c25c",height:"356",loading:"lazy"}}),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[n("div",[t._m(2),t._v(" "),n("iframe",{attrs:{src:t.trinket+"8e1797ce82",height:"356",loading:"lazy"}})])]),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[t._m(3),t._v(" "),n("iframe",{attrs:{src:t.trinket+"e9f98d6de4",height:"356"}})]),t._v(" "),n("QuadSpace"),t._v(" "),t._m(4),t._v(" "),n("iframe",{attrs:{src:t.trinket+"45cfee23ee",height:"356",loading:"lazy"}}),t._v(" "),n("Navigation",{attrs:{bef:"class",aft:"math"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Inheritence")]),t._v(" "),n("p",[t._v("\n      Inheritence means to pass down something from above."),n("br"),n("br"),t._v("\n\n      In Python, inheritence is when a class inherit the variables and\n      functions from another class.\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("Python Inheritence")]),t._v(" "),n("p",[t._v("\n        To get the content of a class, put (classname) after the class\n        name."),n("br"),n("br"),t._v("\n\n        However, we can only get functions and variables inside class, not the\n        variables inside self.\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Solve the problem")]),t._v(" "),n("p",[t._v("\n          To get the self variables, use Person.__init__(self, name, age,\n          gender).\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("super()")]),t._v(" "),n("p",[t._v("\n        Everything above can be solved with one single line of code:\n        super().__init__().\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h2",[t._v("attribute")]),t._v(" "),n("p",[t._v("\n          Here are ways to make, change, or delete self variabels outside of\n          class."),n("br"),n("br"),t._v("\n\n          setattr(classvariable, selfvariable, newvalue) changes the\n          attribute."),n("br"),n("br"),t._v("\n\n          hasattr(classvariable, selfvariable) checks whether classvariable\n          has selfvariable."),n("br"),n("br"),t._v("\n\n          delattr(classvariable, selfvariable) will erase the self variable.\n        ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(531).default,QuadSpace:n(533).default,Navigation:n(532).default})}}]);