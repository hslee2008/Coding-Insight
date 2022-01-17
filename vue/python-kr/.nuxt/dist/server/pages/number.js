exports.ids = [15,1];
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

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/number.vue?vue&type=template&id=4e474d94&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div><h1>변수 - 숫자 선언 방법</h1> <p>\n        숫자는 우리가 항상 사용하는 것입니다. '사과 2개', '책 3권' 등 다양한\n        상황에서 숫자는 중요한 역할을 합니다.<br><br>\n\n        컴퓨터에서도 항상 사용되는 데이터의 형태입니다. 다음과 같이 데이터를\n        선언하고 사용할 수 있습니다.<br><br> <code>\n          age = 12<br>\n          print(age)\n        </code></p></div> "),_vm._ssrNode("<div style=\"text-align: center\">","</div>",[_c('v-img',{staticClass:"img-fluid",attrs:{"alt":"python-factory-picture","src":"https://blog.shabda.co/wp-content/uploads/2015/10/numbers-truth-morality.png","max-width":"300px"}})],1)],2),_vm._ssrNode(" <br><br><br><br> "),_c('Header',{attrs:{"num":"14","title":"숫자"}}),_vm._ssrNode(" <br><br><br><br> <div><div><h1>숫자 - 간단한 계산</h1> <p>\n        숫자를 가지고 계산을 하겠습니다.<br><br>\n\n        옆에서 CODE1 예시는 숫자를 더하고, 빼고, 곱하고, 나누는 방법입니다.<br><br>\n\n        컴퓨터는 사람과 다르게 곱하기는 '*'를 사용하고 나누기는 '/'를\n        사용합니다.<br><br><br>\n\n        CODE2에서는 조금 더 복잡한 계산을 할 수 있는 연산자의 예시입니다.\n      </p></div> <iframe src=\"https://trinket.io/embed/python3/e6f77e0d9a\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>숫자와 '숫자'의 차이</h1> <p>\n        파이썬에서는 숫자를 2가지 방법으로 선언할 수 있습니다.<br><br>\n\n        하나는 ''안에 숫자를 쓰는 것('숫자')이고 다른 하나는 '' 없이 숫자만\n        선언하는 방법입니다.<br><br><br><br>\n\n        차이가 있을까요? 네, 차이가 있습니다.<br><br>\n\n        처음에는 &lt;class 'str'&gt;이 출력되었습니다. 그 이유는 파이썬에서 ''\n        안에 있는 것은 무조건 문자입니다. 아무리 숫자가 '' 안에 있어도\n        문자입니다.<br><br>\n\n        하지만 두 번째는 &lt;class 'int'&gt;이 출력되었습니다. 그 이유는 숫자는\n        '' 없이 선언해야만 숫자라고 인식이 되기 때문입니다.<br><br></p></div> <iframe src=\"https://trinket.io/embed/python3/81191f5590\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>input()을 숫자로</h1> <p>\n        이제 사용자로부터 숫자 2개를 받아 더하기를 해보겠습니다.<br><br>\n\n        이제 1과 1을 입력하세요. 그러면 짜잔! 2가 나옵니다...?<br><br>\n\n        흠... 왜 11이 나올까요? 1+1은 2가 아닌가요? 우리의 코드에는 문제가\n        있습니다.<br><br><br><br>\n\n        그것은 input() 함수가 돌려주는 정보, 다시 말해 firstNumber와\n        secondNumber에 저장된 데이터 형태는 문자입니다.<br><br>\n\n        그래서 파이썬 프로그램에서 먼저 숫자로 전환을 하고 계산을 해야 합니다.\n        int(input())을 사용하면 됩니다.<br><br>\n\n        참고로 문자와 문자를 '+'하면 서로 붙어서 출력이 됩니다. 그래서 문자\n        1과 문자 1을 더하면 문자 11이 나옵니다.<br><br>\n\n        옆에 있는 코드를 int()를 사용해서 고쳐보세요!\n      </p></div> <iframe src=\"https://trinket.io/embed/python3/4b9cfba68b\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"boolean\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n      ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"operator\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n        Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br><br><br> "),_vm._ssrNode("<div class=\"quiz\">","</div>",[_vm._ssrNode("<h1>퀴즈 풀기!</h1> <hr> <br><br> <h3>print(type('1'))을 실행하면 출력되는 값은?</h3> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-A\" value=\"A\"> <label for=\"question-1-answers-A\">A) &lt;class 'str'&gt; </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-B\" value=\"B\"> <label for=\"question-1-answers-B\">B) &lt;class 'int'&gt; </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-C\" value=\"C\"> <label for=\"question-1-answers-C\">C) None </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-D\" value=\"D\"> <label for=\"question-1-answers-D\">D) 에러가 생깁니다. </label></div> <br><br> <h3>'1'을 1(숫자로)로 바꾸는 방법은?</h3> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-A\" value=\"A\"> <label for=\"question-2-answers-A\">A) int(&quot;1&quot;) </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-B\" value=\"B\"> <label for=\"question-2-answers-B\">B) toInt(&quot;1&quot;) </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-C\" value=\"C\"> <label for=\"question-2-answers-C\">C) toInteger(&quot;1&quot;) </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-D\" value=\"D\"> <label for=\"question-2-answers-D\">D) integer(&quot;1&quot;) </label></div> <br><br> "),_c('v-btn',{on:{"click":_vm.checkAnswer}},[_vm._v(" 정답 확인 ")])],2),_vm._ssrNode(" <br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/number.vue?vue&type=template&id=4e474d94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/number.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var numbervue_type_script_lang_js_ = ({
  name: 'NumberPage',
  methods: {
    checkAnswer() {
      if (document.getElementById('question-1-answers-A').checked) {
        alert('1번 맞았습니다!');
      } else {
        alert('1번 틀렸습니다');
      }

      if (document.getElementById('question-2-answers-A').checked) {
        alert('2번 맞았습니다 :)');
      } else {
        alert('2번 틀렸습니다');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/number.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_numbervue_type_script_lang_js_ = (numbervue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/number.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a50df048"
  
)

/* harmony default export */ var number = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=number.js.map