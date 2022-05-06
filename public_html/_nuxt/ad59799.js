(window.webpackJsonp=window.webpackJsonp||[]).push([[24,13],{530:function(t,e,n){"use strict";var r=n(1),o=n(110),c=n(43),l=n(76),h=r.TypeError,v=function(t,e,source,n,r,d,f,_){for(var element,m,y=r,w=0,k=!!f&&l(f,_);w<n;){if(w in source){if(element=k?k(source[w],w,e):source[w],d>0&&o(element))m=c(element),y=v(t,e,element,m,y,d-1)-1;else{if(y>=9007199254740991)throw h("Exceed the acceptable array length");t[y]=element}y++}w++}return y};t.exports=v},531:function(t,e,n){"use strict";n.r(e);n(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(108),c=n(527),l=n.n(c),h=n(587),v=n(585),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:v.a})},532:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(108),c=n(527),l=n.n(c),h=n(587),v=n(589),d=n(526),f=n(585),_=n(698),m=n(709),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VCard:v.a,VCardActions:d.a,VIcon:f.a,VSpacer:_.a,VTooltip:m.a})},536:function(t,e,n){"use strict";var r=n(3),o=n(530),c=n(37),l=n(43),h=n(66),v=n(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=l(e),r=v(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:h(t)),r}})},537:function(t,e,n){n(109)("flat")},538:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,n){"use strict";var r=n(3),o=n(228);r({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return o(this,"a","href",t)}})},940:function(t,e,n){"use strict";n.r(e);var r=n(108),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",[n("h2",[t._v("Array Shapes")]),t._v(" "),n("p",[t._v("\n        We can use the 'shape' property to find the shape of the given\n        array."),n("br"),n("br"),t._v("\n\n        Depending on the dimension of array, there will be different number of\n        numbers in tuple."),n("br"),n("br"),t._v("\n\n        The first number will be the number of arrays inside array. The second\n        will be the number of items in each array(In 2D)."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          arr = numpy.array([ [1, 2, 3], [4, 5, 6] ])"),n("br"),n("br"),t._v("\n\n          print(arr.shape)\n        ")])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"20b4a15af9",height:"356"}})]),t._v(" "),n("Header",{attrs:{type:"Python",num:"60",title:"Array Shape"}}),t._v(" "),n("div",[n("div",[n("h2",[t._v("Change Array Shape")]),t._v(" "),n("p",[t._v("\n        We can also format the array into a new shape using the reshape()\n        method."),n("br"),n("br"),t._v(" "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          arr = nmpy.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])"),n("br"),n("br"),t._v("\n\n          newArray = arr.reshape(2, 5)"),n("br"),n("br"),t._v("\n\n          print(newArray)\n        ")]),t._v("\n\n        reshape() will return a newly shaped array."),n("br"),n("br"),t._v("\n\n        We should put in the array shape inside reshape().\n      ")])])]),t._v(" "),n("iframe",{attrs:{src:t.trinket+"2143d07d6a",width:"60%",height:"356",loading:"lazy"}}),t._v(" "),n("Navigation",{attrs:{bef:"array_type",aft:"error"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(531).default,Navigation:n(532).default})}}]);