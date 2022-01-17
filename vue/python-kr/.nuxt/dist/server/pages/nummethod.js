exports.ids = [16,1];
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/nummethod.vue?vue&type=template&id=4e194788&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> <div class=\"text-center\"><iframe width=\"80%\" height=\"315\" src=\"https://www.youtube.com/embed/BO5mVol4FOY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <br> "),_c('Header',{attrs:{"title":"숫자 메서드","num":"17"}}),_vm._ssrNode(" <br><br> <br><br> <div class=\"header-div bg-black text-white\"><div><h1>절댓값</h1> <p>\n        a의 절댓값은 a와 0의 거리를 뜻합니다.<br><br>\n\n        예를 들면, a가 -10 또는 10이면 0과 거리가 10입니다. 그래서 a의\n        절댓값은 10입니다.<br><br>\n\n        a가 음수면 양수로 양수면 똑같이 양수로 바꾼 값이 a의 절댓값입니다.<br><br>\n\n        영어로 절댓값은 absolute value이고 파이썬에서 줄여서 abs()라고\n        합니다.<br><br></p></div> <iframe src=\"https://trinket.io/embed/python3/db269c0e84\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"calc\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n      ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"list\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n        Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div class=\"quiz\">","</div>",[_vm._ssrNode("<h1>퀴즈 풀기!</h1> <hr> <br><br> <h3>-1의 절댓값을 찾는 파이썬 코드는?</h3> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-A\" value=\"A\"> <label for=\"question-2-answers-A\">A) abs(&quot;-1&quot;) </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-B\" value=\"B\"> <label for=\"question-2-answers-B\">B) abs(-1) </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-C\" value=\"C\"> <label for=\"question-2-answers-C\">C) absolute(&quot;-1&quot;) </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-D\" value=\"D\"> <label for=\"question-2-answers-D\">D) absolute(-1) </label></div> <br><br> "),_c('v-btn',{on:{"click":_vm.checkAnswer}},[_vm._v("정답 확인")])],2),_vm._ssrNode(" <br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/nummethod.vue?vue&type=template&id=4e194788&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/nummethod.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nummethodvue_type_script_lang_js_ = ({
  name: 'NumberMethodPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-B').checked) {
        alert('1번 맞았습니다!');
      } else {
        alert('1번 틀렸습니다');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/nummethod.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_nummethodvue_type_script_lang_js_ = (nummethodvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/nummethod.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_nummethodvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75948aa4"
  
)

/* harmony default export */ var nummethod = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=nummethod.js.map