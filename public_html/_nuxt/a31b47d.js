(window.webpackJsonp=window.webpackJsonp||[]).push([[116,13],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),c=n(43),h=n(76),l=r.TypeError,v=function(t,e,source,n,r,d,m,f){for(var element,_,y=r,k=0,x=!!m&&h(m,f);k<n;){if(k in source){if(element=x?x(source[k],k,e):source[k],d>0&&o(element))_=c(element),y=v(t,e,element,_,y,d-1)-1;else{if(y>=9007199254740991)throw l("Exceed the acceptable array length");t[y]=element}y++}k++}return y};t.exports=v},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),c=n(527),h=n.n(c),l=n(587),v=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:l.a,VIcon:v.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),c=n(527),h=n.n(c),l=n(587),v=n(589),d=n(526),m=n(585),f=n(698),_=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:l.a,VCard:v.a,VCardActions:d.a,VIcon:m.a,VSpacer:f.a,VTooltip:_.a})},536:function(t,e,n){"use strict";var r=n(3),o=n(530),c=n(37),h=n(43),l=n(66),v=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=h(e),r=v(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:l(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},857:function(t,e,n){"use strict";n.r(e);var r={page:"ThreadMethodPage"},o=n(108),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{num:"75",title:"스레드 메서드"}}),t._v(" "),n("div",[n("div",[n("h2",[t._v("daemon")]),t._v(" "),n("p",[t._v("\n        Daemon is a thread that runs in the background."),n("br"),n("br"),t._v("\n\n        Daemon threads will run till the end even though the main\n        thread(Python file) stops."),n("br"),n("br"),t._v("\n\n        Furthermore, it runs the last."),n("br"),n("br"),t._v("\n\n        Simply put in 'True' at daemon parameter in threading.Thread()\n        method."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          mainThread = threading.Thread(target = mainFunc, daemon = True)\n        ")]),t._v("\n\n        To find whether a specific thread is daemon or not, use the 'daemon'\n        property."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          mainThread = threading.Thread(target = mainFunc, daemon = True)"),n("br"),t._v("\n          print(mainThread.daemon) # True is printed\n        ")]),t._v("\n\n        Finally, we can make a thread that is not a daemon into a daemon if it\n        is not running."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" mainThread.setDaemon(True) ")])])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"fee2312fc6",height:"356",loading:"lazy"}}),t._v(" "),n("Navigation",{attrs:{bef:"complexthread",aft:"multiprocessing"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(531).default,Navigation:n(532).default})}}]);