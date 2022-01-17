exports.ids = [10,1];
exports.modules = {

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=66a14d61&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._ssrNode("<hr> <br> "),_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n    읽어주기"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-bullhorn ")])],1),_vm._ssrNode(" "),_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n    English"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-ab-testing ")])],1),_vm._ssrNode(" <br><br> <h1 class=\"display-6\"><span>"+_vm._ssrEscape(_vm._s(_vm.title))+"</span><br id=\"lbbr\"><span id=\"txt\">Computer Science Lab (</span>CSL<span id=\"txt\">)</span>"+_vm._ssrEscape("\n    "+_vm._s(_vm.num)+"\n  ")+"</h1> <br> <hr>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=66a14d61&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: ['title', 'num']
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f415dc8"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/install.vue?vue&type=template&id=32ce3c0a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"img-div\" style=\"display: flex\">","</div>",[_vm._ssrNode("<div style=\"display: flex; justify-content: center\">","</div>",[_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","max-width":"300px","src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hQGGTvkDEUH9Bgtv9YRcwhjO8mwFpd5tQA&usqp=CAU"}})],1),_vm._ssrNode(" <p style=\"margin: auto\">\n        파이썬을 기기에 설치하기<br><br>\n        파이썬이 이진수 (0과 1)로 컴파일이 되어서 기계가 이해하기를 도와주기\n        위해서 먼저 공식 사이트에서 컴파일러를 설치해야 합니다.\n      </p>")],2),_vm._ssrNode(" <br><br><br><br> "),_c('Header',{attrs:{"num":"2","title":"설치 & 첫 프로그램"}}),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"img-div\" style=\"display: flex\">","</div>",[_vm._ssrNode("<div style=\"padding: 30px\">","</div>",[_vm._ssrNode("<h1>설치</h1> "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("\n            1.\n            <a href=\"https://www.python.org/downloads/\" style=\"color: yellow; text-decoration: none\">파이썬 사이트</a>\n            설치 페이지로 들어가기.<br><br>\n            2. 노란색 버튼 'Download Python 3.10.0' 누르기<br><br>\n            3. 새로운 설치 박스가 브라우저 밑에 생기는데 이를 클릭하기<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/다운로드.jpg"}}),_vm._ssrNode("<br><br>\n\n            4. Add Python to Path 옵션을 클릭<br><br>\n            5. Customize installation 버튼을 누르기<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/installnow.jpg"}}),_vm._ssrNode("<br><br>\n\n            6. 모두 선택하고 Next 버튼을 누르기<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/설치2.jpg"}}),_vm._ssrNode("<br><br>\n\n            7. 1부터 5번째 옵션을 선택하기<br><br>\n            8. Install 버튼 누르기<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/adopt.jpg"}}),_vm._ssrNode("<br><br>\n\n            9. Close 버튼을 눌러주세요.\n          ")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"padding: 30px\">","</div>",[_vm._ssrNode("<h1>사용 방법</h1> "),_vm._ssrNode("<p>","</p>",[_vm._ssrNode("\n            저희는 파이썬의 IDLE이라는 편집기를 사용하겠습니다.<br><br>\n\n            먼저 파이썬의 IDLE을 이용하려면 앱을 찾고 실행을 해야 합니다.<br><br> <kbd>windows+s</kbd>버튼을 누른 후 'idle'라고 치면 파이썬 IDLE가\n            뜹니다. 열기 또는 엔터를 누르세요.<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/idle.jpg"}}),_vm._ssrNode("<br><br>\n\n            파이썬 코드를 실행하기 위해서 &gt;&gt;&gt; 다음에 넣고 엔터를 누르면\n            됩니다.<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/idle2.jpg"}}),_vm._ssrNode("<br><br> <kbd>print(&quot;Hello World&quot;)</kbd>라고 친 후 엔터를 누르겠습니다.<br><br> "),_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"./img/printhelloworld.jpg"}})],2)],2)],2)]),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div class=\"img-div\" style=\"\\n        display: flex;\\n        justify-content: center;\\n        background-color: #2c2c32;\\n        padding: 10px;\\n        border-radius: 5px;\\n      \">","</div>",[_vm._ssrNode("<div style=\"text-align: center; margin: auto\">","</div>",[_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"data:image/png;base64,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"}})],1),_vm._ssrNode(" <div style=\"margin: auto\"><h1>VSCode란?</h1> <p>\n          VSCode를 사용해보겠습니다.<br><br>\n\n          VSCode는 파이썬 코드를 편집하는 과정을 쉽게 만들어주는\n          플랫폼입니다.<br><br>\n\n          지금까지는 IDLE을 사용했지만 VSCode를 사용하면 매우 더\n          쉬워집니다.<br><br>\n\n          VSCode 설치 방법과 사용방법은 다음 시간에 설명하겠습니다.\n        </p></div>")],2),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"/\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n        ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"vscode\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n          Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2)],2),_vm._ssrNode(" <br><br><br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/install.vue?vue&type=template&id=32ce3c0a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/install.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var installvue_type_script_lang_js_ = ({
  name: 'InstallPage'
});
// CONCATENATED MODULE: ./pages/install.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_installvue_type_script_lang_js_ = (installvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(30);

// CONCATENATED MODULE: ./pages/install.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_installvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58111b98"
  
)

/* harmony default export */ var install = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=install.js.map