(window.webpackJsonp=window.webpackJsonp||[]).push([[324,13,14],{530:function(t,n,e){"use strict";var r=e(1),o=e(110),c=e(43),l=e(76),v=r.TypeError,h=function(t,n,source,e,r,m,f,_){for(var element,d,x=r,y=0,B=!!f&&l(f,_);y<e;){if(y in source){if(element=B?B(source[y],y,n):source[y],m>0&&o(element))d=c(element),x=h(t,n,element,d,x,m-1)-1;else{if(x>=9007199254740991)throw v("Exceed the acceptable array length");t[x]=element}x++}y++}return x};t.exports=h},531:function(t,n,e){"use strict";e.r(n);e(44);var r={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[e("div",{staticClass:"mb-10"},[e("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[e("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[e("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),e("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[e("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),e("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():e("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VIcon:h.a})},532:function(t,n,e){"use strict";e.r(n);var r={name:"Navigation",props:["bef","aft","single"]},o=e(108),c=e(527),l=e.n(c),v=e(587),h=e(589),m=e(526),f=e(585),_=e(698),d=e(709),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[e("v-card-actions",[t.single?t._e():e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[e("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),e("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),e("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),e("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VIcon:f.a,VSpacer:_.a,VTooltip:d.a})},533:function(t,n,e){"use strict";e.r(n);var r=e(108),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("br"),n("br"),n("br"),n("br")])}],!1,null,null,null);n.default=component.exports},536:function(t,n,e){"use strict";var r=e(3),o=e(530),c=e(37),l=e(43),v=e(66),h=e(132);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=l(n),r=h(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:v(t)),r}})},537:function(t,n,e){e(109)("flat")},538:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,n,e){"use strict";var r=e(3),o=e(228);r({target:"String",proto:!0,forced:e(229)("link")},{link:function(t){return o(this,"a","href",t)}})},930:function(t,n,e){"use strict";e.r(n);var r={name:"NumericPage",data:function(){return{datatypes:[{name:"u8",minmax:"0 ~ 255"},{name:"u16",minmax:"0 ~ 65535"},{name:"u32",minmax:"0 ~ 4294967295"},{name:"u64",minmax:"0 ~ 18446744073709551615"},{name:"u128",minmax:"0 ~ 340282366920938463463374607431768211455"}],datatypesi:[{name:"i8",minmax:"-128 ~ 127"},{name:"i16",minmax:"-32768 ~ 32767"},{name:"i32",minmax:"-2147483648 ~ 2147483647"},{name:"i64",minmax:"-9223372036854775808 ~ 9223372036854775807"},{name:"i128",minmax:"-170141183460469231731687303715884105728 ~ 170141183460469231731687303715884105727"}]}}},o=e(108),c=e(527),l=e.n(c),v=e(585),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._m(0),t._v(" "),e("div",{staticClass:"ma-auto"},[e("v-icon",{attrs:{"x-large":""}},[t._v("mdi-numeric")])],1)]),t._v(" "),e("Header",{attrs:{type:"Rust",title:"소수형 데이터 형태",num:"13"}}),t._v(" "),e("div",[e("div",[e("h2",[t._v("floor(), ceil(), round()")]),t._v("\n\n      floor()을 사용하면 소수를 내림하고 ceil()은 올림합니다."),e("br"),e("br"),t._v("\n\n      round()는 가장 가까운 정수를 찾습니다."),e("br"),e("br"),t._v("\n\n      참고로 "),e("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rust ic"},[t._v("'이름'()")]),t._v("의 형태를\n      Rust에서는 '메서드'라고 하고 대부분 데이터를 다룰 때 사용합니다."),e("br"),e("br"),t._v(" "),e("iframe",{attrs:{src:t.playrust+"fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%20123.123%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.floor())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.ceil())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.round())%3B%0D%0A%7D",height:"300"}})])]),t._v(" "),e("QuadSpace"),t._v(" "),e("div",[e("div",[e("h2",[t._v("trunc(), fract()")]),t._v("\n\n      trunc()를 사용하면 정수 부분만 찾고 소수 부분은 버립니다."),e("br"),e("br"),t._v("\n\n      fract()는 반대로 소수 부분만 찾습니다."),e("br"),e("br"),t._v(" "),e("iframe",{attrs:{src:t.playrust+"fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%203.14159%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.trunc())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.fract())%3B%0D%0A%7D",height:"300"}})])]),t._v(" "),e("Navigation",{attrs:{bef:"numeric-int",aft:"math"}})],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ma-auto"},[e("h2",[t._v("소수형 데이터 형태")]),t._v(" "),e("p",[t._v("\n        저번 페이지에서 Rust 정수 형태에 대해 알아 보았습니다."),e("br"),e("br"),t._v("\n\n        이번에는 정수가 아닌 소수를 사용해 보겠습니다."),e("br"),e("br"),t._v("\n\n        소수는 Rust에서 'f'이고 비트는 32, 64 숫자를 사용합니다.\n      ")])])}],!1,null,null,null);n.default=component.exports;l()(component,{Header:e(531).default,QuadSpace:e(533).default,Navigation:e(532).default}),l()(component,{VIcon:v.a})}}]);