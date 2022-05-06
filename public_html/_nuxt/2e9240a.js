(window.webpackJsonp=window.webpackJsonp||[]).push([[104,8,13,14],{525:function(t,e,r){var n=r(9);t.exports=function(t){return n(Map.prototype.entries,t)}},530:function(t,e,r){"use strict";var n=r(1),o=r(110),l=r(43),c=r(76),f=n.TypeError,h=function(t,e,source,r,n,d,m,v){for(var element,x,w=n,_=0,y=!!m&&c(m,v);_<r;){if(_ in source){if(element=y?y(source[_],_,e):source[_],d>0&&o(element))x=l(element),w=h(t,e,element,x,w,d-1)-1;else{if(w>=9007199254740991)throw f("Exceed the acceptable array length");t[w]=element}w++}_++}return w};t.exports=h},531:function(t,e,r){"use strict";r.r(e);r(44);var n={name:"HeaderPage",props:["title","num","type"],data:function(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted:function(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak:function(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=r(108),l=r(527),c=r.n(l),f=r(587),h=r(585),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[r("div",{staticClass:"mb-10"},[r("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[r("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),r("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[r("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),r("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[r("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),r("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():r("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:f.a,VIcon:h.a})},532:function(t,e,r){"use strict";r.r(e);var n={name:"Navigation",props:["bef","aft","single"]},o=r(108),l=r(527),c=r.n(l),f=r(587),h=r(589),d=r(526),m=r(585),v=r(698),x=r(709),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[r("v-card-actions",[t.single?t._e():r("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),r("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),n),[t._v("\n          Next\n\n          "),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:f.a,VCard:h.a,VCardActions:d.a,VIcon:m.a,VSpacer:v.a,VTooltip:x.a})},533:function(t,e,r){"use strict";r.r(e);var n=r(108),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},536:function(t,e,r){"use strict";var n=r(3),o=r(530),l=r(37),c=r(43),f=r(66),h=r(132);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=l(this),r=c(e),n=h(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:f(t)),n}})},537:function(t,e,r){r(109)("flat")},538:function(t,e,r){"use strict";var n=r(3),o=r(228);n({target:"String",proto:!0,forced:r(229)("fixed")},{fixed:function(){return o(this,"tt","","")}})},539:function(t,e,r){"use strict";var n=r(3),o=r(228);n({target:"String",proto:!0,forced:r(229)("small")},{small:function(){return o(this,"small","","")}})},540:function(t,e,r){"use strict";var n=r(3),o=r(228);n({target:"String",proto:!0,forced:r(229)("link")},{link:function(t){return o(this,"a","href",t)}})},544:function(t,e,r){r(561)},545:function(t,e,r){"use strict";r(3)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:r(560)})},546:function(t,e,r){"use strict";var n=r(3),o=r(11),l=r(76),c=r(525),f=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=o(this),e=c(map),r=l(t,arguments.length>1?arguments[1]:void 0);return!f(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},547:function(t,e,r){"use strict";var n=r(3),o=r(33),l=r(76),c=r(9),f=r(46),h=r(11),d=r(131),m=r(525),v=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=h(this),e=m(map),r=l(t,arguments.length>1?arguments[1]:void 0),n=new(d(map,o("Map"))),x=f(n.set);return v(e,(function(t,e){r(e,t,map)&&c(x,n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},548:function(t,e,r){"use strict";var n=r(3),o=r(11),l=r(76),c=r(525),f=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=o(this),e=c(map),r=l(t,arguments.length>1?arguments[1]:void 0);return f(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},549:function(t,e,r){"use strict";var n=r(3),o=r(11),l=r(76),c=r(525),f=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=o(this),e=c(map),r=l(t,arguments.length>1?arguments[1]:void 0);return f(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},550:function(t,e,r){"use strict";var n=r(3),o=r(11),l=r(525),c=r(562),f=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return f(l(o(this)),(function(e,r,n){if(c(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},551:function(t,e,r){"use strict";var n=r(3),o=r(11),l=r(525),c=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){return c(l(o(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},552:function(t,e,r){"use strict";var n=r(3),o=r(33),l=r(76),c=r(9),f=r(46),h=r(11),d=r(131),m=r(525),v=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=h(this),e=m(map),r=l(t,arguments.length>1?arguments[1]:void 0),n=new(d(map,o("Map"))),x=f(n.set);return v(e,(function(t,e){c(x,n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},553:function(t,e,r){"use strict";var n=r(3),o=r(33),l=r(76),c=r(9),f=r(46),h=r(11),d=r(131),m=r(525),v=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=h(this),e=m(map),r=l(t,arguments.length>1?arguments[1]:void 0),n=new(d(map,o("Map"))),x=f(n.set);return v(e,(function(t,e){c(x,n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},554:function(t,e,r){"use strict";var n=r(3),o=r(46),l=r(11),c=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(t){for(var map=l(this),e=o(map.set),r=arguments.length,i=0;i<r;)c(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},555:function(t,e,r){"use strict";var n=r(3),o=r(1),l=r(11),c=r(46),f=r(525),h=r(159),d=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=l(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(c(t),h(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw d("Reduce of empty map with no initial value");return n}})},556:function(t,e,r){"use strict";var n=r(3),o=r(11),l=r(76),c=r(525),f=r(159);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=o(this),e=c(map),r=l(t,arguments.length>1?arguments[1]:void 0);return f(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},557:function(t,e,r){"use strict";var n=r(3),o=r(1),l=r(9),c=r(11),f=r(46),h=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),r=f(map.get),n=f(map.has),o=f(map.set),d=arguments.length;f(e);var m=l(n,map,t);if(!m&&d<3)throw h("Updating absent value");var v=m?l(r,map,t):f(d>2?arguments[2]:void 0)(t,map);return l(o,map,t,e(v,t,map)),map}})},558:function(t,e,r){"use strict";var n=r(3),o=r(1),l=r(5),c=r(112),f=r(27),h=r(231),d=r(159),m=r(160),v=r(8),x=r(20),w=r(4),_=r(161),y=r(88),S=r(165);t.exports=function(t,e,r){var E=-1!==t.indexOf("Map"),R=-1!==t.indexOf("Weak"),I=E?"set":"add",O=o[t],T=O&&O.prototype,k=O,C={},j=function(t){var e=l(T[t]);f(T,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(R&&!x(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return R&&!x(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(R&&!x(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(c(t,!v(O)||!(R||T.forEach&&!w((function(){(new O).entries().next()})))))k=r.getConstructor(e,t,E,I),h.enable();else if(c(t,!0)){var z=new k,A=z[I](R?{}:-0,1)!=z,N=w((function(){z.has(1)})),$=_((function(t){new O(t)})),M=!R&&w((function(){for(var t=new O,e=5;e--;)t[I](e,e);return!t.has(-0)}));$||((k=e((function(t,e){m(t,T);var r=S(new O,t,k);return null!=e&&d(e,r[I],{that:r,AS_ENTRIES:E}),r}))).prototype=T,T.constructor=k),(N||M)&&(j("delete"),j("has"),E&&j("get")),(M||A)&&j(I),R&&T.clear&&delete T.clear}return C[t]=k,n({global:!0,forced:k!=O},C),y(k,t),R||r.setStrong(k,t,E),k}},559:function(t,e,r){"use strict";var n=r(26).f,o=r(70),l=r(163),c=r(76),f=r(160),h=r(159),d=r(162),m=r(164),v=r(19),x=r(231).fastKey,w=r(54),_=w.set,y=w.getterFor;t.exports={getConstructor:function(t,e,r,d){var m=t((function(t,n){f(t,w),_(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),v||(t.size=0),null!=n&&h(n,t[d],{that:t,AS_ENTRIES:r})})),w=m.prototype,S=y(e),E=function(t,e,r){var n,o,l=S(t),c=R(t,e);return c?c.value=r:(l.last=c={index:o=x(e,!0),key:e,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=c),n&&(n.next=c),v?l.size++:t.size++,"F"!==o&&(l.index[o]=c)),t},R=function(t,e){var r,n=S(t),o=x(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return l(w,{clear:function(){for(var t=S(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,v?t.size=0:this.size=0},delete:function(t){var e=this,r=S(e),n=R(e,t);if(n){var o=n.next,l=n.previous;delete r.index[n.index],n.removed=!0,l&&(l.next=o),o&&(o.previous=l),r.first==n&&(r.first=o),r.last==n&&(r.last=l),v?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=S(this),n=c(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!R(this,t)}}),l(w,r?{get:function(t){var e=R(this,t);return e&&e.value},set:function(t,e){return E(this,0===t?0:t,e)}}:{add:function(t){return E(this,t=0===t?0:t,t)}}),v&&n(w,"size",{get:function(){return S(this).size}}),m},setStrong:function(t,e,r){var n=e+" Iterator",o=y(e),l=y(n);d(t,e,(function(t,e){_(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),m(e)}}},560:function(t,e,r){"use strict";var n=r(9),o=r(46),l=r(11);t.exports=function(){for(var t,e=l(this),r=o(e.delete),c=!0,f=0,h=arguments.length;f<h;f++)t=n(r,e,arguments[f]),c=c&&t;return!!c}},561:function(t,e,r){"use strict";r(558)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(559))},562:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},563:function(t,e,r){var content=r(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("1cdf85c7",content,!0,{sourceMap:!1})},564:function(t,e,r){var n=r(64)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},565:function(t,e,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("2fba213c",content,!0,{sourceMap:!1})},566:function(t,e,r){var n=r(64)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},567:function(t,e,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("b9f570ac",content,!0,{sourceMap:!1})},568:function(t,e,r){var n=r(64)(!1);n.push([t.i,".container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}",""]),t.exports=n},569:function(t,e,r){"use strict";r.r(e);var n={name:"GlobalImage",props:["src","maxWidth"]},o=r(108),l=r(527),c=r.n(l),f=r(574),h=r(592),d=r(575),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{staticClass:"rounded-lg",style:"margin-bottom: 15px !important",attrs:{src:t.src,"max-width":t.maxWidth,alt:"Coding-Insight Image"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:f.a,VProgressCircular:h.a,VRow:d.a})},574:function(t,e,r){"use strict";var n=r(21),o=(r(230),r(111),r(232),r(77),r(68),r(563),r(570)),l=(r(565),r(571)),c=r(534),f=Object(c.a)(l.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),h=r(542),d=r(543),m=r(40),v="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(c.a)(f,h.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!v||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=f.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=f.options.render.call(this,t),data=Object(d.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:v?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},575:function(t,e,r){"use strict";r(32),r(45),r(51),r(52);var n=r(22),o=(r(6),r(67),r(69),r(44),r(39),r(23),r(53),r(544),r(41),r(545),r(546),r(547),r(548),r(549),r(550),r(551),r(552),r(553),r(554),r(555),r(556),r(557),r(42),r(31),r(567),r(2)),l=r(543),c=r(18);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],m=["start","end","center"];function v(t,e){return d.reduce((function(r,n){return r[t+Object(c.G)(n)]=e(),r}),{})}var x=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},w=v("align",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},y=v("justify",(function(){return{type:String,default:null,validator:_}})),S=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},E=v("alignContent",(function(){return{type:String,default:null,validator:S}})),R={align:Object.keys(w),justify:Object.keys(y),alignContent:Object.keys(E)},I={align:"align",justify:"justify",alignContent:"align-content"};function O(t,e,r){var n=I[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var T=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},w),{},{justify:{type:String,default:null,validator:_}},y),{},{alignContent:{type:String,default:null,validator:S}},E),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var f in r)c+=String(r[f]);var h=T.get(c);return h||function(){var t,e;for(e in h=[],R)R[e].forEach((function(t){var n=r[t],o=O(e,t,n);o&&h.push(o)}));h.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),T.set(c,h)}(),t(r.tag,Object(l.a)(data,{staticClass:"row",class:h}),o)}})},846:function(t,e,r){"use strict";r.r(e);var n={page:"RegexPage"},o=r(108),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("div",{staticClass:"ma-auto"},[r("h2",[t._v("What is RegEx?")]),t._v(" "),r("p",[t._v("\n        RegEx is short for Regular Expression."),r("br"),r("br"),t._v("\n\n        Regular Expression means strings with certain patterns."),r("br"),r("br"),t._v("\n\n        For example, without RegEx, we have to check whether a string contains\n        either a or b or c and so on ONE by ONE."),r("br"),r("br"),t._v("\n\n        However, we can do this with one method from module."),r("br"),r("br"),t._v(" "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v(" import re ")])])]),t._v(" "),r("div",{staticClass:"ma-auto"},[r("GlobalImage",{attrs:{src:"https://cmgcode.com/images/portfolio/regexoff-icon.png",width:"300px"}})],1)]),t._v(" "),r("Header",{attrs:{type:"Python",num:"45",title:"Regex"}}),t._v(" "),r("div",[r("div",[r("h2",[t._v("Regex - match()")]),t._v(" "),r("p",[t._v("\n        Using match() method, we can easily find whether a string starts with\n        certain patterns."),r("br"),r("br"),t._v(" "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n          import re"),r("br"),r("br"),t._v('\n\n          pattern = "123"'),r("br"),t._v('\n          string = "123abc"'),r("br"),r("br"),t._v("\n\n          print(re.match(pattern, string).group())\n        ")]),t._v("\n\n        If the code above gives us an error, string variable does not start\n        with pattern.\n      ")])])]),t._v(" "),r("iframe",{attrs:{src:t.trinket+"6b78aaf023",height:"356",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),r("div",[r("div",[r("div",[r("h2",[t._v("Regex - search()")]),t._v(" "),r("p",[t._v("\n          While match() matches the start of a string with substring, search()\n          searches globally(every where in string)."),r("br"),r("br"),t._v(" "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"python"},[t._v("\n            import re"),r("br"),r("br"),t._v('\n\n            pattern = "123"'),r("br"),t._v('\n            string = "123abc"'),r("br"),r("br"),t._v("\n\n            print(re.search(pattern, string).group())\n          ")])])])]),t._v(" "),r("iframe",{attrs:{src:t.trinket+"6d2e182407",height:"356"}})]),t._v(" "),r("QuadSpace"),t._v(" "),t._m(0),t._v(" "),r("Navigation",{attrs:{bef:"dice",aft:"class"}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h2",[t._v("RegEx Character")]),t._v(" "),r("p",[t._v("\n        To actually use regex, use the following regex characters."),r("br"),r("br"),t._v("\n\n        1. `[a-b]` - alphabet from range a to b"),r("br"),t._v("\n        2. `[abc]`: a, b, or c."),r("br"),t._v("\n        3. `[^abc]`: except for a, b, and c."),r("br"),t._v('\n         . -- any character: `"h."` can be ha, hb, hc, ... hz.'),r("br"),t._v("\n         ^ -- words starting with: `\"^hello\"`: whether the word starts\n        with 'hello'"),r("br"),t._v("\n         $ -- words ending with: `\"$hello\"`: whether the word ends with\n        'hello'\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalImage:r(569).default,Header:r(531).default,QuadSpace:r(533).default,Navigation:r(532).default})}}]);