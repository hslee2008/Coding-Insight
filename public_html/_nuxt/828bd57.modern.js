(window.webpackJsonp=window.webpackJsonp||[]).push([[248,12,13],{455:function(t,e,r){var n=r(53);t.exports=Array.isArray||function(t){return"Array"==n(t)}},456:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return v})),r.d(e,"d",(function(){return d}));var n=r(458),o=r(10),c=Object(o.k)("v-card__actions"),l=Object(o.k)("v-card__subtitle"),v=Object(o.k)("v-card__text"),d=Object(o.k)("v-card__title");n.a},458:function(t,e,r){"use strict";var n=r(15),o=(r(463),r(464),r(465),r(477)),c=r(483),l=r(479),v=r(457);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){var{tag:e,data:data}=this.generateRouteLink();return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},462:function(t,e,r){var n=r(2),o=r(4),c=r(3),l=r(13),v=r(112).trim,d=r(84),h=c("".charAt),f=n.parseFloat,_=n.Symbol,m=_&&_.iterator,x=1/f(d+"-0")!=-1/0||m&&!o((function(){f(Object(m))}));t.exports=x?function(t){var e=v(l(t)),r=f(e);return 0===r&&"-"==h(e,0)?-0:r}:f},463:function(t,e,r){"use strict";var n=r(8),o=r(467),c=r(44),l=r(52),v=r(45),d=r(468);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e),n=d(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:v(t)),n}})},464:function(t,e,r){r(113)("flat")},465:function(t,e,r){var content=r(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("e23b7040",content,!0,{sourceMap:!1})},466:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:10px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 10px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},467:function(t,e,r){"use strict";var n=r(2),o=r(455),c=r(52),l=r(68),v=n.TypeError,d=function(t,e,source,r,n,h,f,_){for(var element,m,x=n,y=0,w=!!f&&l(f,_);y<r;){if(y in source){if(element=w?w(source[y],y,e):source[y],h>0&&o(element))m=c(element),x=d(t,e,element,m,x,h-1)-1;else{if(x>=9007199254740991)throw v("Exceed the acceptable array length");t[x]=element}x++}y++}return x};t.exports=d},468:function(t,e,r){var n=r(469);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},469:function(t,e,r){var n=r(2),o=r(455),c=r(166),l=r(26),v=r(7)("species"),d=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(c(e)&&(e===d||o(e.prototype))||l(e)&&null===(e=e[v]))&&(e=void 0)),void 0===e?d:e}},470:function(t,e,r){"use strict";r.r(e);var n={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=r(67),c=r(459),l=r.n(c),v=r(522),d=r(524),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[r("div",{staticClass:"mb-10"},[r("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[r("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),r("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[r("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),r("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[r("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),r("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():r("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VIcon:d.a})},471:function(t,e,r){var content=r(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("dc0628f2",content,!0,{sourceMap:!1})},472:function(t,e,r){var n=r(36)(!1);n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=n},473:function(t,e,r){"use strict";r.r(e);var n={name:"Navigation",props:["bef","aft","single"]},o=r(67),c=r(459),l=r.n(c),v=r(522),d=r(458),h=r(456),f=r(524),_=r(719),m=r(487),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[r("v-card-actions",[t.single?t._e():r("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),r("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),n),[t._v("\n          Next\n\n          "),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:h.a,VIcon:f.a,VSpacer:_.a,VTooltip:m.a})},474:function(t,e,r){"use strict";r.r(e);var n=r(67),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},478:function(t,e,r){var n=r(8),o=r(462);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},484:function(t,e,r){"use strict";var n=r(8),o=r(3),c=r(455),l=o([].reverse),v=[1,2];n({target:"Array",proto:!0,forced:String(v)===String(v.reverse())},{reverse:function(){return c(this)&&(this.length=this.length),l(this)}})},487:function(t,e,r){"use strict";r(83),r(471);var n=r(480),o=r(476),c=r(482),l=r(481),v=r(485),d=r(10),h=r(24),f=r(457);e.a=Object(f.a)(o.a,c.a,l.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){var{activator:t,content:content}=this.dimensions,e=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?t.offsetLeft:t.left,n=0;return this.top||this.bottom||e?n=r+t.width/2-content.width/2:(this.left||this.right)&&(n=r+(this.right?t.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop(){var{activator:t,content:content}=this.dimensions,e=!1!==this.attach?t.offsetTop:t.top,r=0;return this.top||this.bottom?r=e+(this.bottom?t.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=e+t.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(d.i)(this.maxWidth),minWidth:Object(d.i)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===Object(d.v)(this,"activator",!0)&&Object(h.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){var t=n.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===d.z.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},518:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("7132a15d",content,!0,{sourceMap:!1})},519:function(t,e,r){var n=r(36)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},520:function(t,e,r){"use strict";var n=r(15),o=(r(518),r(503));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},808:function(t,e,r){"use strict";r.r(e);var n={name:"ListMethod2Page",methods:{checkAnswer(){document.getElementById("question-2-answers-B").checked?alert("1 ✔️!"):alert("1 ❌")}}},o=r(67),c=r(459),l=r.n(c),v=r(522),d=r(458),h=r(456),f=r(520),_=r(524),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("br"),t._v(" "),r("Header",{attrs:{type:"파이썬",title:"리스트 메서드 2",num:"20"}}),t._v(" "),r("div",[t._m(1),t._v(" "),r("iframe",{attrs:{src:t.trinket+"44f3241dca",height:"356"}})]),t._v(" "),r("QuadSpace"),t._v(" "),r("div",[t._m(2),t._v(" "),r("iframe",{attrs:{src:t.trinket+"12cc090a48",height:"356"}})]),t._v(" "),r("QuadSpace"),t._v(" "),r("div",[t._m(3),t._v(" "),r("iframe",{attrs:{src:t.trinket+"7e53c5b5a9",height:"356"}})]),t._v(" "),r("QuadSpace"),t._v(" "),r("div",[t._m(4),t._v(" "),r("iframe",{attrs:{src:t.trinket+"94a4a72417",height:"356"}})]),t._v(" "),r("Navigation",{attrs:{bef:"listmethod1",aft:"dictionary"}}),t._v(" "),r("v-card",[r("v-card-title",[t._v("퀴즈 풀기!")]),t._v(" "),r("v-card-text",[r("v-divider"),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v('["Hello", "World"].reverse()와 같은 값은?')]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-A",type:"radio",name:"question-2-answers"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-A"}},[t._v(' ["Hello", "World"] ')])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-B",type:"radio",name:"question-2-answers",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-B"}},[t._v(' ["World", "Hello"] ')])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-C",type:"radio",name:"question-2-answers"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-C"}},[t._v(" None ")])]),t._v(" "),r("div",[r("input",{attrs:{id:"question-2-answers-D",type:"radio",name:"question-2-answers"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-D"}},[t._v(' "Hello, World!" ')])]),t._v(" "),r("QuadSpace")],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"","aria-label":t.albutt},on:{click:t.checkAnswer}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check-decagram")]),t._v("정답 확인\n      ")],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/hnNX6_xr-3E",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("리스트 정리하기")]),t._v(" "),r("p",[t._v("\n        리스트를 알파벳과 숫자 순서로 정리하기 위해서 'sort' 메서드를 사용할\n        수 있습니다 (CODE1)"),r("br"),r("br"),t._v("\n\n        리스트에서 알파벳과 숫자 순서를 거꾸로 정리하려면 sort 안에서\n        'reverse'의 값에 'True'를 입력하면 됩니다. (CODE2)"),r("br"),r("br"),t._v("\n\n        'reverse' 함수를 이용하여 리스트의 순서를 뒤집을 수도 있습니다.\n        (CODE3)"),r("br"),r("br"),t._v("\n\n        우리가 저희만의 규칙을 정할 수 있습니다. CODE4를 보면 문자에서\n        소문자인 것부터 시작하여 대문자로 정리했습니다.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("append()")]),t._v(" "),r("p",[t._v("\n        리스트 끝에 새로운 값을 더하기 위하여 우리는 'append()'를 사용해\n        보겠습니다."),r("br"),r("br"),t._v("\n\n        list.append(item) 형태로 list 끝에 새로운 item을 더합니다.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("리스트 합치기")]),t._v(" "),r("p",[t._v("\n        두 리스트를 더하여 새로운 리시트를 만들기 위하여 'extend'를 사용할 수\n        있습니다."),r("br"),r("br"),t._v("\n\n        list1.extend(list2) 형태로 list1이 [list1과 list2]에 있는 아이템을\n        모두 합친 값을 그 변수 안에 저장하는 메서드입니다.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("리스트 비교하기")]),t._v(" "),r("p",[t._v("\n        리스트가 만일 모두 다 숫자로만 이루어져 있다면 가장 큰 수와 가장 작은\n        수를 max()와 min()을 사용하여 알 수 있습니다.\n      ")])])}],!1,null,null,null);e.default=component.exports;l()(component,{Header:r(470).default,QuadSpace:r(474).default,Navigation:r(473).default}),l()(component,{VBtn:v.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VDivider:f.a,VIcon:_.a})}}]);