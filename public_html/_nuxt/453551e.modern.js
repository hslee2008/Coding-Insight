(window.webpackJsonp=window.webpackJsonp||[]).push([[55,13],{470:function(t,e,n){"use strict";n.r(e);var r={name:"HeaderPage",props:["title","num","type"],data(){return{notspeaking:!0,showButton:!0,isEnglish:"Python"===this.type}},mounted(){document.title="".concat(this.type," ").concat(this.title," — Coding-Insight"),this.showButton="speechSynthesis"in window},methods:{speak(){try{var a=new SpeechSynthesisUtterance(document.querySelector(".v-main").innerText);a.lang=this.isEnglish?"en-US":"ko-kr",this.notspeaking?speechSynthesis.speak(a):speechSynthesis.cancel()}catch(t){this.showButton=!1,alert(this.isEnglish?"This browser does not support voice."+t:"이 브라우저는 음성을 지원하지 않습니다.")}this.notspeaking=!this.notspeaking}}},o=n(67),l=n(459),c=n.n(l),h=n(522),v=n(524),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center pa-6 rounded-lg shadow-2xl bg-gray-100 overflow-hidden",staticStyle:{"background-color":"#343b47",margin:"50px 0px 100px 0px"}},[n("div",{staticClass:"mb-10"},[n("v-btn",{attrs:{icon:"","aria-label":"speak"},on:{click:t.speak}},[n("v-icon",[t._v(" mdi-"+t._s(t.notspeaking?"bullhorn":"pause-octagon")+" ")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Edit on GitHub",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/pages"+t.$nuxt.$route.path+(t.$nuxt.$route.path.endsWith("/")?"index":"")+".vue",target:"_blank"}},[n("v-icon",[t._v("mdi-text-box-search-outline")])],1),t._v(" "),n("v-btn",{attrs:{"aria-label":"Bug Report",icon:"",href:"https://github.com/HyunseungLee-Travis/Coding-Insight/issues/new?assignees=&labels=%F0%9F%90%9B&template=bug_report.md&title=%F0%9F%90%9B+Report+%F0%9F%90%9B ("+t.$nuxt.$route.path+")",target:"_blank"}},[n("v-icon",[t._v("mdi-bug")])],1)],1),t._v(" "),n("h1",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"font-weight-thin"},[t.$vuetify.breakpoint.sm?t._e():n("span",[t._v("Computer Science Lab -")]),t._v("\n\n    "+t._s(t.num)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VIcon:v.a})},473:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation",props:["bef","aft","single"]},o=n(67),l=n(459),c=n.n(l),h=n(522),v=n(458),d=n(456),m=n(524),_=n(719),f=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"transparent",staticStyle:{"margin-top":"200px","margin-bottom":"100px"}},[n("v-card-actions",[t.single?t._e():n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.bef}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("\n\n          Back\n        ")],1)]}}],null,!1,16180395)},[t._v(" "),n("span",[t._v(t._s(t.bef.toUpperCase()))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{exact:"",outlined:"",color:"primary",to:t.aft}},"v-btn",o,!1),r),[t._v("\n          Next\n\n          "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.aft.toUpperCase()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:v.a,VCardActions:d.a,VIcon:m.a,VSpacer:_.a,VTooltip:f.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(67),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),e("br"),e("br"),e("br")])}],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r={name:"GlobalImage",props:["src","maxWidth"]},o=n(67),l=n(459),c=n.n(l),h=n(516),v=n(526),d=n(517),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{staticClass:"rounded-lg",style:"margin-bottom: 15px !important",attrs:{src:t.src,"max-width":t.maxWidth,alt:"Coding-Insight Image"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:h.a,VProgressCircular:v.a,VRow:d.a})},733:function(t,e,n){"use strict";n.r(e);var r={name:"FilePage",head:()=>({title:"File"})},o=n(67),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._m(0),t._v(" "),n("div",{staticClass:"ma-auto"},[n("GlobalImage",{attrs:{src:"https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg",width:"300px"}})],1)]),t._v(" "),n("Header",{attrs:{type:"Python",num:"49",title:"File"}}),t._v(" "),n("div",[t._m(1),t._v(" "),n("GlobalImage",{staticClass:"img-fluid",attrs:{src:"https://image-loader-coding-insight.web.app/py-en/img/filepath.jpg","max-width":"400px"}})],1),t._v(" "),n("QuadSpace"),t._v(" "),n("div",[t._m(2),t._v(" "),n("iframe",{attrs:{src:t.trinket+"5755f85207",height:"356"}})]),t._v(" "),n("Navigation",{attrs:{bef:"math",aft:"filereading"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-auto"},[n("h2",[t._v("What is File Handling?")]),t._v(" "),n("p",[t._v("\n        In Python, it is very easy to read, write, append, create and delete\n        files."),n("br"),n("br"),t._v("\n\n        In input & output Python page, we learned how to write to files using\n        the print() function."),n("br"),n("br"),t._v("\n\n        However, there are much more to it than simply writing to files.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-auto"},[n("h2",[t._v("File Path")]),t._v(" "),n("p",[t._v("\n        File path is the adress of your file in your computer."),n("br"),n("br"),t._v("\n\n        To copy your file path, go to VSCode and click right of your mouse on\n        a file and click the button 'copy path'.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("Opening and Closing Files")]),t._v(" "),n("p",[t._v("\n          We can use open() function to open our files."),n("br"),n("br"),t._v("\n\n          Then, we will handle that file."),n("br"),n("br"),t._v("\n\n          Finally, we always have to close the file by running close()\n          method."),n("br"),n("br"),t._v("\n\n          Otherwise, errors might occur.\n        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalImage:n(511).default,Header:n(470).default,QuadSpace:n(474).default,Navigation:n(473).default})}}]);