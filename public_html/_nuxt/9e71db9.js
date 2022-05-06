(window.webpackJsonp=window.webpackJsonp||[]).push([[40,13],{530:function(t,n,e){"use strict";var r=e(1),o=e(110),c=e(43),l=e(76),v=r.TypeError,h=function(t,n,source,e,r,f,d,_){for(var element,m,y=r,k=0,x=!!d&&l(d,_);k<e;){if(k in source){if(element=x?x(source[k],k,n):source[k],f>0&&o(element))m=c(element),y=h(t,n,element,m,y,f-1)-1;else{if(y>=9007199254740991)throw v("Exceed the acceptable array length");t[y]=element}y++}k++}return y};t.exports=h},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(589),f=e(526),d=e(585),_=e(698),m=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VIcon:d.a,VSpacer:_.a,VTooltip:m.a})},536:function(t,n,e){"use strict";var r=e(3),o=e(530),c=e(37),l=e(43),v=e(66),h=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=l(n),r=h(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:v(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})},953:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("Header",{attrs:{type:"Python",num:"84",title:"Coroutine"}}),t._v(" "),t._m(1),t._v(" "),e("iframe",{attrs:{src:t.trinket+"fe3f6eff37",height:"356",loading:"lazy"}}),t._v(" "),e("Navigation",{attrs:{bef:"atexit",aft:"spam"}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("Making Coroutines")]),t._v(" "),e("p",[t._v("\n      A long time ago, we learned about yield keyword in for loop."),e("br"),e("br"),t._v("\n\n      Instead of using yield as return, we can use it for making couroutines.\n    ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("h2",[t._v("yield - coroutine")]),t._v(" "),e("p",[t._v("\n        1. First, make a couroutine function."),e("br"),t._v("2. Next, making a yield\n        variable and do operation on it with another variable named x."),e("br"),e("br"),t._v("\n\n        To use couroutine functions,"),e("br"),t._v("\n        1. Make a variable and assign the function to it with the original\n        value. "),e("br"),t._v("\n        2. Next, use the next() function."),e("br"),t._v("\n        3. To use courutine, use the send() method."),e("br"),t._v("\n        4. Finally, use close().\n      ")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(531).default,Navigation:e(532).default})}}]);