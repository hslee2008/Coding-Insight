(window.webpackJsonp=window.webpackJsonp||[]).push([[59,7,9,10],{347:function(t,e,n){"use strict";n.r(e);var r={props:["title","num"],data:function(){return{count:0}},methods:{toEnglish:function(){window.location="https://coding-insight.com/python/english"+("/"==$nuxt.$route.path?"/python":$nuxt.$route.path)+"-en.html"},speak:function(){if(this.count%2==0)try{var a=new SpeechSynthesisUtterance(document.body.innerText.substring(document.body.innerText.indexOf("읽어주기")+8));a.lang="ko-kr",speechSynthesis.speak(a)}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 ("+t+")")}else try{speechSynthesis.cancel()}catch(t){alert(":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.")}this.count++}}},o=n(63),c=n(171),l=n.n(c),h=n(338),d=n(339),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("hr"),t._v(" "),n("br"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.speak}},[t._v("\n    "+t._s(t.count%2==0?"읽어주기":"멈추기")),n("v-icon",{attrs:{right:""}},[t._v("\n      "+t._s(t.count%2==0?"mdi-bullhorn":"mdi-pause-octagon"))])],1),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{outlined:""},on:{click:t.toEnglish}},[t._v("\n    English"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("h1",{staticClass:"display-6"},[n("span",[t._v(t._s(t.title))]),n("br",{attrs:{id:"lbbr"}}),n("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),n("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),n("br"),t._v(" "),n("hr")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},348:function(t,e,n){"use strict";n.r(e);var r={},o=n(63),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var r={props:["flink","slink"]},o=n(63),c=n(171),l=n.n(c),h=n(338),d=n(339),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{to:"./"+t.flink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n    ")],1)],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{to:"./"+t.slink}},[n("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n      Next"),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},350:function(t,e,n){"use strict";n.d(e,"a",(function(){return S})),n.d(e,"b",(function(){return O}));n(43),n(4),n(33),n(49),n(36),n(12),n(50),n(58),n(37),n(17),n(25),n(14),n(26);var r=n(3),o=n(9),c=(n(18),n(59),n(83),n(16),n(32),n(5));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=/;(?![^(]*\))/g,f=/:(.*)/;function _(style){var t,e={},n=d(style.split(m));try{for(n.s();!(t=n.n()).done;){var r=t.value.split(f),l=Object(o.a)(r,2),h=l[0],v=l[1];(h=h.trim())&&("string"==typeof v&&(v=v.trim()),e[Object(c.c)(h)]=v)}}catch(t){n.e(t)}finally{n.f()}return e}function S(){for(var t,e={},i=arguments.length;i--;)for(var n=0,r=Object.keys(arguments[i]);n<r.length;n++)switch(t=r[n]){case"class":case"directives":arguments[i][t]&&(e[t]=O(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=y(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=w(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=h(h({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function y(t,source){return t?source?(t=Object(c.F)("string"==typeof t?_(t):t)).concat("string"==typeof source?_(source):source):t:source}function O(t,source){return source?t&&t?Object(c.F)(t).concat(source):source:t}function w(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var n in e)e[n]&&(t[n]?t[n]=[].concat(e[n],t[n]):t[n]=e[n])}return t}},351:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("1cdf85c7",content,!0,{sourceMap:!1})},352:function(t,e,n){var r=n(56)(!1);r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=r},353:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("2fba213c",content,!0,{sourceMap:!1})},354:function(t,e,n){var r=n(56)(!1);r.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=r},355:function(t,e,n){"use strict";var r=n(15),o=(n(64),n(73),n(173),n(72),n(71),n(351),n(172)),c=(n(353),n(174)),l=n(82),h=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),d=n(108),v=n(350),m=n(19),f="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(h,d.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!f||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var content=h.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=h.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},607:function(t,e,n){"use strict";n.r(e);var r=n(63),o=n(171),c=n.n(o),l=n(355),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("div",{staticClass:"img-div",staticStyle:{display:"flex"}},[n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("v-img",{staticClass:"img-fluid",attrs:{alt:"python-factory-picture","max-width":"400px",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU78Hj6DPZq_rVh1dyNTc4Lwt_Z05Vr-SRA&usqp=CAU"}})],1),t._v(" "),t._m(0)]),t._v(" "),n("br"),n("br"),t._v(" "),n("Header",{attrs:{num:"57",title:"JSON"}}),t._v(" "),n("QuadSpace"),t._v(" "),t._m(1),t._v(" "),n("QuadSpace"),t._v(" "),t._m(2),t._v(" "),n("QuadSpace"),t._v(" "),t._m(3),t._v(" "),n("QuadSpace"),t._v(" "),n("BeforeNextButton",{attrs:{flink:"pip",slink:"array"}}),t._v(" "),n("QuadSpace")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"auto",padding:"20px"}},[n("h1",[t._v("JSON")]),t._v(" "),n("p",[t._v("\n        JSON이란 JavaScript Object Notation이라고 데이터를 정리하는 형태 중 하나입니다."),n("br"),n("br"),t._v("\n        JSON은 자바스크립트와 대부분 같이 사용되지만 파이썬과도 사용이 가능합니다."),n("br"),n("br"),t._v("\n        JSON을 사용하기 위해서 json이라는 모듈을 가지고 와야합니다. 먼저 모듈을 불러옵니다."),n("br"),n("br"),t._v('\n        JSON은 딕셔너리와 비슷하지만 항상 문자는 "" 안에 있어야하고 문자, 딕셔너리, 리스트, 튜플, 숫자, 불리언, 그리고 None을 제외한 다른 데이터 형태 값을 사용하지 못합니다.\n      ')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("JSON을 딕셔너리로")]),t._v(" "),n("p",[t._v("\n        json.loads() 메서드 안에 JSON 데이터 형태를 입력하면 파이썬 딕셔너리로 전환됩니다.\n      ")]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/0812d9740b",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("딕셔너리를 JSON으로")]),t._v(" "),n("p",[t._v("\n        파이썬 딕셔너리를 JSON으로 전환하기 위하여 json.dumps() 메서드를 이용해보겠습니다.\n      ")])]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/efb76f8dd2",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",[t._v("JSON 포맷")]),t._v(" "),n("p",[t._v("\n        JSON을 만들 때 다양한 설정이 있습니다.\n      ")]),n("h2",[t._v("들여쓰기")]),t._v("\n      JSON의 들여쓰기의 값도 정할 수 있습니다. 들여쓰기란 TAB의 값을 말합니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n      print(json.dumps(someJson, indent=2))\n      ")]),t._v(" "),n("h2",[t._v("알파벳 순서")]),t._v("\n      JSON의 키에서 알파벳 순서대로 배열을 할 수 있습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v("\n      print(json.dumps(someJson, indent=2, sort_keys=True))\n      ")]),t._v(" "),n("h2",[t._v("JSON 표현 방법")]),t._v("\n      JSON의 키와 값은 딕셔너리처럼 ':'으로 나눌 수 있습니다."),n("br"),n("br"),t._v("\n      JSON에서 키와 값들은 ','로 분류가 됩니다."),n("br"),n("br"),t._v("\n      JSON에서 seperator 매개변수를 이용하여 우리만의 표현 방법을 설정해보겠습니다."),n("br"),n("br"),t._v(" "),n("code",[t._v('\n      print(json.dumps(someJson, seperator=(". ", "==>")))\n      ')]),t._v(" "),n("p")]),t._v(" "),n("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python3/efb76f8dd2",width:"100%",height:"200",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{Header:n(347).default,QuadSpace:n(348).default,BeforeNextButton:n(349).default}),c()(component,{VImg:l.a})}}]);