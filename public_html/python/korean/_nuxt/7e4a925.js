(window.webpackJsonp=window.webpackJsonp||[]).push([[38,7,9,10],{347:function(t,e,r){"use strict";r.r(e);var n={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},o=r(63),c=r(171),l=r.n(c),h=r(338),d=r(339),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),r("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},348:function(t,e,r){"use strict";r.r(e);var n={},o=r(63),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);var n={props:["flink","slink"]},o=r(63),c=r(171),l=r.n(c),h=r(338),d=r(339),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),r("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},350:function(t,e,r){"use strict";r.d(e,"a",(function(){return S})),r.d(e,"b",(function(){return W}));r(43),r(4),r(33),r(49),r(36),r(12),r(50),r(58),r(37),r(17),r(25),r(14),r(26);var n=r(3),o=r(9),c=(r(18),r(59),r(83),r(16),r(32),r(5));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=/;(?![^(]*\))/g,m=/:(.*)/;function y(style){var t,e={},r=d(style.split(f));try{for(r.s();!(t=r.n()).done;){var n=t.value.split(m),l=Object(o.a)(n,2),h=l[0],v=l[1];(h=h.trim())&&("string"==typeof v&&(v=v.trim()),e[Object(c.c)(h)]=v)}}catch(t){r.e(t)}finally{r.f()}return e}function S(){for(var t,e={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(t=n[r]){case"class":case"directives":arguments[i][t]&&(e[t]=W(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=_(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=E(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=h(h({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function _(t,source){return t?source?(t=Object(c.F)("string"==typeof t?y(t):t)).concat("string"==typeof source?y(source):source):t:source}function W(t,source){return source?t&&t?Object(c.F)(t).concat(source):source:t}function E(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var r in e)e[r]&&(t[r]?t[r]=[].concat(e[r],t[r]):t[r]=e[r])}return t}},351:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("1cdf85c7",content,!0,{sourceMap:!1})},352:function(t,e,r){var n=r(56)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},353:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("2fba213c",content,!0,{sourceMap:!1})},354:function(t,e,r){var n=r(56)(!1);n.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=n},355:function(t,e,r){"use strict";var n=r(15),o=(r(64),r(73),r(173),r(72),r(71),r(351),r(172)),c=(r(353),r(174)),l=r(82),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=r(108),v=r(350),f=r(19),m="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(h,d.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!m||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(f.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:m?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},596:function(t,e,r){"use strict";r.r(e);var n=r(63),o=r(171),c=r.n(o),l=r(355),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),t._v(" "),r("div",{staticClass:"img-div",staticStyle:{display:"flex"}},[t._m(0),t._v(" "),r("div",{staticClass:"mx-auto"},[r("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture",src:"data:image/png;base64,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"}})],1)]),t._v(" "),r("br"),r("br"),t._v(" "),r("Header",{attrs:{num:"61",title:"에러 다루기"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(1),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/cc1e7a05d5",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(2),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/ed6a6e6033",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(3),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/14b1f55e66",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),t._m(4),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/c6fec3fdb7",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}}),t._v(" "),r("QuadSpace"),t._v(" "),r("BeforeNextButton",{attrs:{flink:"array_shape",slink:"error2"}}),t._v(" "),r("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("에러")]),t._v(" "),r("p",[t._v("\n        가끔 우리가 파이썬 코드를 만들 때 에러가 생길 수 있습니다."),r("br"),r("br"),t._v("\n\n        만일 버그(문제가 되는 코드)가 우리 프로그램에 존재한다면 우리는 그것을\n        제거하거나 무시할 수 있습니다.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("try - except")]),t._v(" "),r("p",[t._v("\n        예를 들어 우리가 파이썬을 이용하여 계산기를 만들고 싶다고 가정을\n        해봅시다."),r("br"),r("br"),t._v("\n\n        만일 사용자가 숫자가 아닌 문자를 입력하면 어떻게 해야 할까요? 우리는\n        여기에서 예외 처리를 할 수 있습니다."),r("br"),r("br"),t._v("\n\n        예외 처리는 try를 사용하여 그 키워드 안에 있는 함수들에서 에러가\n        발생하면 무시할 수 있습니다."),r("br"),r("br"),r("br"),t._v("\n\n        밑에 있는 예시에서 0을 입력하세요.\n      ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("특정한 에러")]),t._v(" "),r("p",[t._v("\n        특정 에러가 생겼을 때 실행하고 싶은 코드가 있다면 'except' 다음에\n        에러의 이름을 넣으면 됩니다."),r("br"),r("br"),t._v("\n\n        에러를 여러 개 찾는 것도 가능합니다. 튜플 안에 넣으면 됩니다. 하지만\n        튜플 안에 있는 에러가 코드에서 모두 발견되어야 except 안에 있는 코드가\n        실행됩니다.\n      ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("try - except - else")]),t._v(" "),r("p",[t._v("\n        만일 try 안에 있는 코드에 아무런 문제가 없다면 'else'를 사용하여\n        특정한 코드를 실행할 수 있습니다.\n      ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"inner-div"},[r("h1",[t._v("try - except - else - finally")]),t._v(" "),r("p",[t._v("\n        else와 비슷한 기능을 하는 'finally'라는 키워드를 사용할 수 있습니다.\n      ")])])])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:r(347).default,QuadSpace:r(348).default,BeforeNextButton:r(349).default}),c()(component,{VImg:l.a})}}]);