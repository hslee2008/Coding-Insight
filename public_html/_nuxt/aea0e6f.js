(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{538:function(t,e,n){"use strict";var o=n(3),r=n(228);o({target:"String",proto:!0,forced:n(229)("fixed")},{fixed:function(){return r(this,"tt","","")}})},539:function(t,e,n){"use strict";var o=n(3),r=n(228);o({target:"String",proto:!0,forced:n(229)("small")},{small:function(){return r(this,"small","","")}})},540:function(t,e,n){"use strict";var o=n(3),r=n(228);o({target:"String",proto:!0,forced:n(229)("link")},{link:function(t){return r(this,"a","href",t)}})},570:function(t,e,n){"use strict";var o=n(21);n(6);function r(t,e,n){var o,r=null==(o=t._observe)?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,v="object"===Object(o.a)(c)?c:{handler:c,options:{}},d=v.handler,h=v.options,f=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0,h=null==(o=t._observe)?void 0:o[n.context._uid];if(h){var f=c.some((function(t){return t.isIntersecting}));!d||l.quiet&&!h.init||l.once&&!f&&!h.init||d(c,v,f),f&&l.once?r(t,e,n):h.init=!0}}),h);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:f},f.observe(t)}},unbind:r};e.a=l},572:function(t,e,n){"use strict";var o=n(592);e.a=o.a},586:function(t,e,n){"use strict";var o=n(598);e.a=o.a},587:function(t,e,n){"use strict";n(39),n(32),n(45),n(51),n(31),n(52);var o=n(21),r=n(14),l=n(22),c=(n(538),n(230),n(6),n(67),n(625),n(586)),v=n(572),d=n(594),h=n(584),f=n(664),x=n(609),m=n(588),y=n(610),w=n(534),_=n(40);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(w.a)(c.a,m.a,x.a,y.a,Object(d.a)("btnToggle"),Object(h.b)("inputValue"));e.a=S.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return z(z(z(z(z({"v-btn":!0},m.a.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return f.a.options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!(this.text||this.plain||this.outlined||this.icon)},isElevated:function(){return Boolean(!(this.icon||this.text||this.outlined||this.depressed||this.disabled||this.plain||!(null==this.elevation||Number(this.elevation)>0)))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return z({},this.measurableStyles)}},created:function(){var t=this;[["flat","text"],["outline","outlined"],["round","rounded"]].forEach((function(e){var n=Object(r.a)(e,2),o=n[0],l=n[1];t.$attrs.hasOwnProperty(o)&&Object(_.a)(o,l,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(v.a,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],n=this.generateRouteLink(),r=n.tag,data=n.data,l=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===r&&(data.attrs.type=this.type,data.attrs.disabled=this.disabled),data.attrs.value=["string","number"].includes(Object(o.a)(this.value))?this.value:JSON.stringify(this.value),t(r,this.disabled?data:l(this.color,data),e)}})},592:function(t,e,n){"use strict";n(230),n(44),n(613);var o=n(570),r=n(578),l=n(18);e.a=r.a.extend({name:"v-progress-circular",directives:{intersect:o.a},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(l.i)(this.calculatedSize),width:Object(l.i)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},609:function(t,e,n){"use strict";n.d(e,"b",(function(){return c}));var o=n(2),r=n(18),l={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.a.extend({name:"positionable",props:t.length?Object(r.p)(l,t):l})}e.a=c()},613:function(t,e,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("e003f1f8",content,!0,{sourceMap:!1})},614:function(t,e,n){var o=n(64)(!1);o.push([t.i,".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}",""]),t.exports=o},625:function(t,e,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("549a5500",content,!0,{sourceMap:!1})},626:function(t,e,n){var o=n(64)(!1);o.push([t.i,'.v-btn:not(.v-btn--outlined).accent,.v-btn:not(.v-btn--outlined).error,.v-btn:not(.v-btn--outlined).info,.v-btn:not(.v-btn--outlined).primary,.v-btn:not(.v-btn--outlined).secondary,.v-btn:not(.v-btn--outlined).success,.v-btn:not(.v-btn--outlined).warning{color:#fff}.theme--light.v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn.v-btn--disabled,.theme--light.v-btn.v-btn--disabled .v-btn__loading,.theme--light.v-btn.v-btn--disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--light.v-btn.v-btn--disabled.v-btn--has-bg{background-color:rgba(0,0,0,.12)!important}.theme--light.v-btn.v-btn--has-bg{background-color:#f5f5f5}.theme--light.v-btn.v-btn--outlined.v-btn--text{border-color:rgba(0,0,0,.12)}.theme--light.v-btn.v-btn--icon{color:rgba(0,0,0,.54)}.theme--light.v-btn:hover:before{opacity:.08}.theme--light.v-btn:focus:before{opacity:.24}.theme--light.v-btn--active:before,.theme--light.v-btn--active:hover:before{opacity:.18}.theme--light.v-btn--active:focus:before{opacity:.16}.theme--dark.v-btn{color:#fff}.theme--dark.v-btn.v-btn--disabled,.theme--dark.v-btn.v-btn--disabled .v-btn__loading,.theme--dark.v-btn.v-btn--disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn.v-btn--has-bg{background-color:#272727}.theme--dark.v-btn.v-btn--outlined.v-btn--text{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-btn.v-btn--icon{color:#fff}.theme--dark.v-btn:hover:before{opacity:.08}.theme--dark.v-btn:focus:before{opacity:.24}.theme--dark.v-btn--active:before,.theme--dark.v-btn--active:hover:before{opacity:.18}.theme--dark.v-btn--active:focus:before{opacity:.32}.v-btn{align-items:center;border-radius:.3rem;display:inline-flex;flex:0 0 auto;font-weight:500;letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.v-btn.v-size--x-small{font-size:.625rem}.v-btn.v-size--small{font-size:.75rem}.v-btn.v-size--default,.v-btn.v-size--large{font-size:.875rem}.v-btn.v-size--x-large{font-size:1rem}.v-btn:before{background-color:currentColor;border-radius:inherit;bottom:0;color:inherit;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-btn:not(.v-btn--round).v-size--x-small{height:20px;min-width:36px;padding:0 8.8888888889px}.v-btn:not(.v-btn--round).v-size--small{height:28px;min-width:50px;padding:0 12.4444444444px}.v-btn:not(.v-btn--round).v-size--default{height:36px;min-width:64px;padding:0 16px}.v-btn:not(.v-btn--round).v-size--large{height:44px;min-width:78px;padding:0 19.5555555556px}.v-btn:not(.v-btn--round).v-size--x-large{height:52px;min-width:92px;padding:0 23.1111111111px}.v-btn>.v-btn__content .v-icon{color:inherit}.v-btn__content{align-items:center;color:inherit;display:flex;flex:1 0 auto;justify-content:inherit;line-height:normal;position:relative;transition:inherit;transition-property:opacity}.v-btn__content .v-icon.v-icon--left,.v-btn__content .v-icon.v-icon--right{font-size:18px;height:18px;width:18px}.v-application--is-ltr .v-btn__content .v-icon--left{margin-left:-4px;margin-right:8px}.v-application--is-ltr .v-btn__content .v-icon--right,.v-application--is-rtl .v-btn__content .v-icon--left{margin-left:8px;margin-right:-4px}.v-application--is-rtl .v-btn__content .v-icon--right{margin-left:-4px;margin-right:8px}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn--absolute.v-btn--right,.v-btn--fixed.v-btn--right{right:16px}.v-btn--absolute.v-btn--left,.v-btn--fixed.v-btn--left{left:16px}.v-btn--absolute.v-btn--top,.v-btn--fixed.v-btn--top{top:16px}.v-btn--absolute.v-btn--bottom,.v-btn--fixed.v-btn--bottom{bottom:16px}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%!important;max-width:auto}.v-btn--is-elevated{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-btn--is-elevated:after{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-btn--is-elevated:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab:after{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--is-elevated.v-btn--fab:active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.v-btn--disabled{pointer-events:none}.v-btn--fab,.v-btn--icon{min-height:0;min-width:0;padding:0}.v-btn--fab.v-size--x-small .v-icon,.v-btn--icon.v-size--x-small .v-icon{height:18px;font-size:18px;width:18px}.v-btn--fab.v-size--default .v-icon,.v-btn--fab.v-size--small .v-icon,.v-btn--icon.v-size--default .v-icon,.v-btn--icon.v-size--small .v-icon{height:24px;font-size:24px;width:24px}.v-btn--fab.v-size--large .v-icon,.v-btn--icon.v-size--large .v-icon{height:28px;font-size:28px;width:28px}.v-btn--fab.v-size--x-large .v-icon,.v-btn--icon.v-size--x-large .v-icon{height:32px;font-size:32px;width:32px}.v-btn--icon.v-size--x-small{height:20px;width:20px}.v-btn--icon.v-size--small{height:28px;width:28px}.v-btn--icon.v-size--default{height:36px;width:36px}.v-btn--icon.v-size--large{height:44px;width:44px}.v-btn--icon.v-size--x-large{height:52px;width:52px}.v-btn--fab.v-btn--absolute,.v-btn--fab.v-btn--fixed{z-index:4}.v-btn--fab.v-size--x-small{height:32px;width:32px}.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--bottom{bottom:-16px}.v-btn--fab.v-size--x-small.v-btn--absolute.v-btn--top{top:-16px}.v-btn--fab.v-size--small{height:40px;width:40px}.v-btn--fab.v-size--small.v-btn--absolute.v-btn--bottom{bottom:-20px}.v-btn--fab.v-size--small.v-btn--absolute.v-btn--top{top:-20px}.v-btn--fab.v-size--default{height:56px;width:56px}.v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom{bottom:-28px}.v-btn--fab.v-size--default.v-btn--absolute.v-btn--top{top:-28px}.v-btn--fab.v-size--large{height:64px;width:64px}.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom{bottom:-32px}.v-btn--fab.v-size--large.v-btn--absolute.v-btn--top{top:-32px}.v-btn--fab.v-size--x-large{height:72px;width:72px}.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--bottom{bottom:-36px}.v-btn--fab.v-size--x-large.v-btn--absolute.v-btn--top{top:-36px}.v-btn--loading{pointer-events:none;transition:none}.v-btn--loading .v-btn__content{opacity:0}.v-btn--outlined{border:thin solid}.v-btn--plain:before{display:none}.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content{opacity:.62}.v-btn--round{border-radius:50%}.v-btn--rounded{border-radius:28px}.v-btn--tile{border-radius:0}',""]),t.exports=o},730:function(t,e,n){var content=n(768);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("3b536de4",content,!0,{sourceMap:!1})},767:function(t,e,n){"use strict";n(730)},768:function(t,e,n){var o=n(64)(!1);o.push([t.i,".wrong[data-v-3298802c]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:slidein-data-v-3298802c;animation-name:slidein-data-v-3298802c}@-webkit-keyframes slidein-data-v-3298802c{0%{margin-right:-100px}to{margin-right:30px}}@keyframes slidein-data-v-3298802c{0%{margin-right:-100px}to{margin-right:30px}}.check[data-v-3298802c]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-name:s-data-v-3298802c;animation-name:s-data-v-3298802c}@-webkit-keyframes s-data-v-3298802c{0%{margin-right:-100px}to{margin-right:30px}}@keyframes s-data-v-3298802c{0%{margin-right:-100px}to{margin-right:30px}}body>div>ul[data-v-3298802c]{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#0a0a0a 33;position:fixed;top:0;width:100%}body>div>ul>li[data-v-3298802c]{float:left}body[data-v-3298802c]{overflow:hidden}li a[data-v-3298802c]{display:block;color:#fff;text-align:center;padding:14px 13px;text-decoration:none}li a[data-v-3298802c]:hover{background-color:#111}#quiz[data-v-3298802c]{display:flex;min-height:100vh;justify-content:center;align-items:center;flex-direction:column;background-color:#313645;font-family:verdana,sans-serif}body[data-v-3298802c]{margin:0}h1[data-v-3298802c]{color:#fff;margin:20px 0}.progress[data-v-3298802c]{height:5px;position:fixed;left:0;top:0;right:0}.progress--bar[data-v-3298802c]{background-color:#0f0;height:100%;transition:all .5s ease;width:0}.questionArea[data-v-3298802c],.scoreArea[data-v-3298802c]{display:none}.questionArea[data-v-3298802c]{max-width:600px;width:100%;padding:0 15px}.question[data-v-3298802c]{color:#fff;font-size:18px;margin:20px 0}.option[data-v-3298802c]{height:50px;background-color:rgba(0,0,0,.2);border-radius:6px;margin-bottom:10px;color:#a7b6e4;font-size:16px;cursor:pointer}.option[data-v-3298802c],.option span[data-v-3298802c]{display:flex;align-items:center}.option span[data-v-3298802c]{justify-content:center;width:30px;height:30px;border-radius:15px;margin-left:5px;margin-right:10px;background-color:rgba(0,0,0,.8);color:#4b5677}.option[data-v-3298802c]:hover{background-color:rgba(0,0,0,.2)}.scoreArea[data-v-3298802c]{background-color:hsla(0,0%,100%,.5);border-radius:20px;margin:10px;text-align:center}.prizeImage[data-v-3298802c]{width:auto;height:100px;margin-bottom:10px}.scoreText1[data-v-3298802c]{color:#000;font-size:23px;font-weight:700;margin:20px auto 10px}.scorePct[data-v-3298802c]{color:#0d630d;font-size:30px;font-weight:700;margin-bottom:10px}.scoreText2[data-v-3298802c]{font-size:16px;color:#000;margin-bottom:10px}.scoreArea button[data-v-3298802c]{border:0;border-radius:6px;background-color:rgba(0,0,0,.5);color:#ccc;padding:10px 80px;margin-top:20px;cursor:pointer}.scoreArea button[data-v-3298802c]:hover{background-color:rgba(0,0,0,.4)}",""]),t.exports=o},908:function(t,e,n){"use strict";n.r(e);n(44),n(6),n(31);var o={name:"QuizPage",mounted:function(){var t=[{question:'어떻게 파이썬에서 "Hello, World!"라고 출력할까요?',options:['print("Hello, World!")','printf("Hello, World!")','cout << "Hello, World!"','console.log("Hello, World!")'],answer:0},{question:"print('Hello', 'World', sep = '&nbsp')를 실행하면 콘솔에 출력되는 값은?",options:["Hello, World!","HelloWorld","에러","HelloSEPWorld"],answer:0},{question:"파이선에서 입력할 때 사용하는 함수는?",options:["getline()","scanf()","prompt()","input()"],answer:3},{question:"변수 a에 숫자 3을 저장하고 싶다면?",options:["a = '3'","a=3","a = '''3'''","a = *3*"],answer:1},{question:"다음 중 옳지 않은 변수 이름은?",options:["123abc","abcabc","a123456789","a_____________________________"],answer:0},{question:"#print('Good Luck!!!')을 실행하면?",options:["에러","","Good Luck!!!","!!!kcuL dooG"],answer:1},{question:"다음 중 문자가 아닌 것은?",options:["'abc'",'"abc"',"'''abc'''","123"],answer:3},{question:"print('HelloWorld'[0])을 실행하면?",options:["HelloWorld","HelloWorld[0]","0","H"],answer:3},{question:"print('Good Luck!!!'[::-1])을 실행하면",options:["에러","","Good Luck!!!","!!!kcuL dooG"],answer:3},{question:"print(len('abc'))를 실행하면",options:["2","3","len","abc"],answer:1},{question:"'Hello'를 출력하는 방법은('' 포함)",options:["print('Hello')","print(''Hello'')","print('\\'Hello\\'')","모르겠어요 ㅠㅠ"],answer:2},{question:"ASCII는 무엇의 약자일까요?",options:["흠... 아 - 스키??","American Standard Code for Information Interchange","Averything So Crazy In IO","??"],answer:1},{question:"불리언의 값으로 옳지 않은 것은?",options:["True","False","true"],answer:2},{question:"not (not (not (not (not (not (False))))))의 값은?",options:["False","True","false","true"],answer:0},{question:"abs( -3 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1)의 값은?",options:["3","-3","0","NaN"],answer:0},{question:"'키가 큰 사람'은 집합이다",options:["False!!!","True??","I-dont-know??","ㅠㅠ"],answer:0},{question:"eval('a')를 실행하면?",options:["에러","a","97","evaluation"],answer:0},{question:"1 + 1은?",options:["1","2","파이썬!","몰라"],answer:1},{question:"print('Hello', end='');print(' World')를 실행하면?",options:["에러","HellWorld","HelloWorld","Hello, World!"],answer:0},{question:"import os; os.system('shutdown /r')을 실행하면? 모르겠다면 실행해 보세요!",options:["shutdown /r","모르겠어요. 실행하겠습니다!","모르겠어요. 하지만 실행하지 않겠습니다!","위의 정답은 다 틀렸다. 실행해보겠습니다!"],answer:3},{question:"파이썬에서 함수를 만드는 방법은?",options:["function myfunction()","func myfunction()","fun myfunction()","def myfunction()"],answer:3},{question:"myfile 파이썬 파일 끝에 붙여야 하는 것은?",options:[".py",".python",".pt",".pyth"],answer:0},{question:"파이썬에서 데이터의 형태를 출력하는 방법으로 옳은 것은?",options:["print(type(x))","print(type x)","print(typeof(x))","위의 정답은 다 틀렸다."],answer:0},{question:"파이썬에서 'Hello'는 \"Hello\"와 같다",options:["같습니다","다르다","모르겠어요","위의 정답은 다 틀렸다."],answer:0},{question:"저희 팀의 이름은?",options:["파이썬","파이썬 팩토리","팩토리 파이썬","팩토리"],answer:1}],e=document.querySelector(".progress--bar"),n=document.querySelector(".questionArea"),o=document.querySelector(".scoreArea"),r=document.querySelector(".scoreText1"),l=document.querySelector(".scorePct"),c=0,v=0;function d(){if(c<24){var q=t[c],progress=Math.floor(c/t.length*100);e.style.width="".concat(progress,"%"),o.style.display="none",n.style.display="block",document.querySelector(".question").innerHTML=q.question;var d="";for(var i in q.options)d+='<div data-op="'.concat(i,'" class="option"><span> ').concat(parseInt(i)+1,"</span> ").concat(q.options[i],"</div>");document.querySelector(".options").innerHTML=d,document.querySelectorAll(".options .option").forEach((function(t){t.addEventListener("click",h)}))}else!function(){var c=Math.floor(v/t.length*100);c<=30?(r.innerHTML="흠... 점수가 조금 낮습니다. 사이트에서 다시 공부하세요!!!",l.style.color="#f00000"):c>30&&c<70?(r.innerHTML="'휴... 조금 어려웠지만 잘 했다.'라고 자기를 칭찬하세요!!!",l.style.color="#ffc900"):c>30&&c>=70&&100!==c?(r.innerHTML="'흠... 잘한다' - 개발자 -",l.style.color="#0d630d"):100===c&&(r.innerHTML="'（⊙ｏ⊙）' - 개발자 -",l.style.color="black");l.innerHTML="".concat(c," 점"),document.querySelector(".scoreText2").innerHTML="".concat(t.length,"개 중 ").concat(v," 맞았습니다."),o.style.display="block",n.style.display="none",e.style.width="100%"}()}function h(e){var n=parseInt(e.target.getAttribute("data-op"));t[c].answer===n&&v++,c++,d()}d()}},r=(n(767),n(108)),l=n(527),c=n.n(l),v=n(587),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"quiz"}},[t._m(0),t._v(" "),n("h2",[t._v("Quiz")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"scoreArea"},[n("div",{staticClass:"scoreText1"},[t._v("--")]),t._v(" "),n("div",{staticClass:"scorePct"},[t._v("--")]),t._v(" "),n("div",{staticClass:"scoreText2"},[t._v("--")]),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{"aria-label":t.allink,to:"./quiz"}},[n("v-btn",{attrs:{"aria-label":t.albutt}},[t._v(" 다시시작 ")])],1),t._v(" "),n("NuxtLink",{staticStyle:{"text-decoration":"none"},attrs:{"aria-label":t.allink,to:"/"}},[n("v-btn",{attrs:{"aria-label":t.albutt}},[t._v(" 홈페이지 ")])],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress"},[e("div",{staticClass:"progress--bar"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionArea"},[n("div",{staticClass:"question"},[t._v("...")]),t._v(" "),n("div",{staticClass:"options"})])}],!1,null,"3298802c",null);e.default=component.exports;c()(component,{VBtn:v.a})}}]);