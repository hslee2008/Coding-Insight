exports.ids = [4,1];
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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/boolean.vue?vue&type=template&id=22a286aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> "),_vm._ssrNode("<div class=\"img-div\" style=\"display: flex\">","</div>",[_vm._ssrNode("<div><h1>분리언란?</h1> <p>\n        불리언이란 <mark>참 또는 거짓</mark>입니다.<br><br>\n\n        불리언에서는 'True'(참) 또는 'False'(거짓)라는 값만 가지고\n        있습니다.<br><br>\n\n        사용자가 어떤 값을 입력하면 숫자 '5'와 비교하는 프로그램을\n        만들겠습니다.<br><br> <code>\n          userNumber = int(input(&quot;숫자를 입력하세요: &quot;))<br><br>\n\n          print(userNumber &gt; 5) #userNumber가 5보다 큰지 비교하고 결과를\n          출력합니다.\n        </code>\n\n        불리언 형태로 변수를 선언할 수도 있습니다.<br><br> <code> a = 5 &gt; 6 </code></p></div> "),_vm._ssrNode("<div style=\"margin: auto\">","</div>",[_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"https://quizagogo.com/wp-content/uploads/2021/05/True-or-false-1-940x470.jpg","max-width":"300px"}})],1)],2),_vm._ssrNode(" <br><br><br><br> "),_c('Header',{attrs:{"num":"13","title":"분리언"}}),_vm._ssrNode(" <br><br><br><br> <div class=\"img-div\" style=\"display: flex\"><div style=\"margin: auto\"><h1>분리언 - 주의할 점</h1> <p>\n        파이썬에서는 '옳다면 True라고 출력되고 옳지 않다면 False'라고\n        출력됩니다.<br><br>\n\n        기억하세요! True와 False의 앞은\n        <strong>대문자</strong>입니다!<br><br>\n\n        실수로 소문자로 사용하면 다음과 같은 에러가 생깁니다.\n      </p></div> <iframe src=\"https://trinket.io/embed/python/8500bba20b\" width=\"50%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>불리언 - not</h1> <p>\n        불리언에서 True를 False로 False를 True로 바꾸기 위하여 not을 변수 앞에\n        붙이면 <mark>그 반대</mark>가 출력됩니다.\n      </p></div> <iframe src=\"https://trinket.io/embed/python/5fbbc3204c\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>불리언 - assert</h1> <p>\n        다음과 같은 예시를 보겠습니다.<br><br>\n\n        CODE1에서 만일 2가 1보다 크면 에러 없이 넘어갑니다. 하지만 만일 assert\n        다음에 나오는 불리언이 거짓이라면 에러가 생깁니다.<br><br>\n\n        에러가 생기는 예시를 관찰하겠습니다. CODE2는 2가 1보다 크지 않기\n        때문에 에러가 생깁니다. 파이썬에서 assert의 분리언이 False라면 assert\n        에러가 생깁니다. 파이썬 프로그램에서 나만의 메시지를 만들려면 분리언\n        뒤에 메시지를 넣으면 됩니다. (CODE3를 확인하세요)\n      </p></div> <iframe src=\"https://trinket.io/embed/python3/b23c21c043\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>불리언 - all()과 any()</h1> <p>\n        all은 모두를 뜻합니다. all() 함수는 리스트(배울 내용)가 주어지면\n        그중에 모두 다 True라면 True를 돌려주고 하나라도 True가 아니면 False를\n        돌려줍니다.<br><br>\n\n        any는 하나라도 True이면 True이고 모두 다 True가 아니면 False를\n        출력합니다.\n      </p></div> <iframe src=\"https://trinket.io/embed/python/6d4ae0d672\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"datatype\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n      ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"string\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n        Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div class=\"quiz\">","</div>",[_vm._ssrNode("<h1>퀴즈 풀기!</h1> <hr> <br><br> <h3>분리언의 값으로 가능한 것들은?</h3> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-A\" value=\"A\"> <label for=\"question-1-answers-A\">A) true, false </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-B\" value=\"B\"> <label for=\"question-1-answers-B\">B) True, false </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-C\" value=\"C\"> <label for=\"question-1-answers-C\">C) true, False </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-D\" value=\"D\"> <label for=\"question-1-answers-D\">D) True, False </label></div> <br><br> <h3>\n      분리언 not (not (not (not (not (not (False))))))의 값과 같은 것은?\n    </h3> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-A\" value=\"A\"> <label for=\"question-2-answers-A\">A) False </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-B\" value=\"B\"> <label for=\"question-2-answers-B\">B) True </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-C\" value=\"C\"> <label for=\"question-2-answers-C\">C) Null </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-D\" value=\"D\"> <label for=\"question-2-answers-D\">D) None </label></div> <br><br> <h3>any([True, False, False, False, False])의 값은?</h3> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-A\" value=\"A\"> <label for=\"question-3-answers-A\">A) False </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-B\" value=\"B\"> <label for=\"question-3-answers-B\">B) True </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-C\" value=\"C\"> <label for=\"question-3-answers-C\">C) Null </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-D\" value=\"D\"> <label for=\"question-3-answers-D\">D) None </label></div> <br><br> "),_c('v-btn',{on:{"click":_vm.checkAnswer}},[_vm._v(" 정답 확인 ")])],2),_vm._ssrNode(" <br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/boolean.vue?vue&type=template&id=22a286aa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/boolean.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var booleanvue_type_script_lang_js_ = ({
  name: 'BooleanPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-D').checked) {
        alert('1번 맞았습니다!');
      } else {
        alert('1번 틀렸습니다');
      }

      if (document.getElementById('question-2-answers-A').checked) {
        alert('2번 맞았습니다 :)');
      } else {
        alert('2번 틀렸습니다');
      }

      if (document.getElementById('question-3-answers-B').checked) {
        alert('3번 맞았습니다 :)');
      } else {
        alert('3번 틀렸습니다');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/boolean.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_booleanvue_type_script_lang_js_ = (booleanvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/boolean.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_booleanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6aee53a5"
  
)

/* harmony default export */ var pages_boolean = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=boolean.js.map