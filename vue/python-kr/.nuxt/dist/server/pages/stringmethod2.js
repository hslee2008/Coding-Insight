exports.ids = [22,1];
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stringmethod2.vue?vue&type=template&id=79f8bd60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> <div class=\"text-center\"><iframe width=\"80%\" height=\"315\" src=\"https://www.youtube.com/embed/D4xUOyss96k\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <br><br> "),_c('Header',{attrs:{"num":"10","title":"문자열 메서드 2"}}),_vm._ssrNode(" <br><br><br><br> <div class=\"img-div\" style=\"display: flex;\"><div style=\"margin: auto;\"><h1>문자 더하기</h1> <p>\n          문자를 +를 사용하여 더할 수 있습니다.\n\n          <br><br>\n\n          하지만 반복되는 패턴을 더하고 싶다면 어떻게 해야 할까요?<br><br>\n\n          다음과 같은 방법도 있습니다.<br><br>\n\n          문자 * 숫자는 문자를 숫자만큼 반복하여 되돌려준다는 뜻입니다.<br><br>\n\n          예를 들어 &quot;Hello&quot; * 2는 &quot;HelloHello&quot;입니다.\n        </p></div> <iframe src=\"https://trinket.io/embed/python/54f740c487\" width=\"50%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>문자에 대한 정보</h1> <p>\n          파이썬에서 문자가 알파벳과 숫자로만 이루어져 있는지 아는 방법이\n          있습니다.<br><br>\n\n          바로 'isalnum()'이라는 메서드를 이용하면 됩니다.<br><br>\n\n          또 'isalpha'는 알파벳으로만 되어있는지,<br>\n\n          'isdecimal'은 숫자(0~9)로만 이루어져 있는지,<br>\n\n          'isdigit'은 숫자로만 이루어져 있는지,<br>\n\n          'isidentifier'는 변수 이름 규칙과 일치하는지 알 수 있습니다.<br>\n\n          마지막으로 'isnumeric'은 정수로만 이루어져 있는지, 'isprintable'은\n          정보를 출력하는 것이 가능한지, 'isspace'는 스페이스(공백)로만\n          이루어져 있는지 알 수 있습니다.<br></p></div> <iframe src=\"https://trinket.io/embed/python/9da1796e91\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto\"></iframe></div> <br><br><br><br> <div><div><h1>파이썬 문자 자르기 - 나쁜말 필터기</h1> <p>\n          나쁜 단어 필터링하는 프로그램을 만들겠습니다.<br><br>\n\n          먼저, 나쁜 말을 물어보고 '나는 {나쁜 말}이 아니다'라는 뜻이 있는\n          문장을 만들었습니다. 그리고, partition() 메서드를 사용하여 나쁜\n          단어를 기준으로 문장을 자르고 그 나쁜 단어 대신 '**'를\n          넣었습니다.<br><br>\n\n          또 다른 예시를 들어보겠습니다.<br>&quot;Hello. My &quot;, &quot;name&quot;, &quot; is Hyunseung&quot;)가 터미널에 출력이\n          되는 것을 관찰할 수 있습니다. 인덱싱을 사용하여 'name' 전의 문장과\n          'name' 후의 문장을 결합했습니다.<br><br></p></div> <iframe src=\"https://trinket.io/embed/python/d278186aad\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\"></iframe></div> <br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"stringmethod1\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n        ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"escapechar\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n          Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br> "),_vm._ssrNode("<div class=\"quiz\">","</div>",[_vm._ssrNode("<h1>퀴즈 풀기!</h1> <hr> <br><br> <h3>파이썬에서 문자 두 개를 결합하는 방법은?</h3> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-A\" value=\"A\"> <label for=\"question-1-answers-A\">A) + </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-B\" value=\"B\"> <label for=\"question-1-answers-B\">B) - </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-C\" value=\"C\"> <label for=\"question-1-answers-C\">C) ++ </label></div> <div><input type=\"radio\" name=\"question-1-answers\" id=\"question-1-answers-D\" value=\"D\"> <label for=\"question-1-answers-D\">D) == </label></div> <br><br> <h3>파이썬에서 어떤 문자를 x번 반복한 값을 변수에 저장하는 코드는?</h3> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-A\" value=\"A\"> <label for=\"question-2-answers-A\">A) a = &quot;문자&quot; * x </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-B\" value=\"B\"> <label for=\"question-2-answers-B\">B) a = &quot;문자&quot; - x </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-C\" value=\"C\"> <label for=\"question-2-answers-C\">C) a = &quot;문자&quot; $ x </label></div> <div><input type=\"radio\" name=\"question-2-answers\" id=\"question-2-answers-D\" value=\"D\"> <label for=\"question-2-answers-D\">D) a = &quot;문자&quot; @ x </label></div> <br><br> <h3>파이썬에서 문자를 자르는 방법은?</h3> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-A\" value=\"A\"> <label for=\"question-3-answers-A\">A) &quot;string&quot;.partition(&quot;&quot;) </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-B\" value=\"B\"> <label for=\"question-3-answers-B\">B) &quot;string&quot;.cut(&quot;&quot;) </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-C\" value=\"C\"> <label for=\"question-3-answers-C\">C) &quot;string&quot;.apply(&quot;&quot;) </label></div> <div><input type=\"radio\" name=\"question-3-answers\" id=\"question-3-answers-D\" value=\"D\"> <label for=\"question-3-answers-D\">D) &quot;string&quot; / &quot;string&quot; </label></div> <br><br> "),_c('v-btn',{on:{"click":_vm.checkAnswer}},[_vm._v("\n        정답 확인\n      ")])],2),_vm._ssrNode(" <br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stringmethod2.vue?vue&type=template&id=79f8bd60&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stringmethod2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var stringmethod2vue_type_script_lang_js_ = ({
  name: "StringMethod2",
  methods: {
    checkAnswer() {
      if (document.getElementById("question-1-answers-A").checked) {
        alert("1번 맞았습니다!");
      } else {
        alert("1번 틀렸습니다");
      }

      ;

      if (document.getElementById("question-2-answers-A").checked) {
        alert("2번 맞았습니다 :)");
      } else {
        alert("2번 틀렸습니다");
      }

      ;

      if (document.getElementById("question-3-answers-A").checked) {
        alert("3번 맞았습니다 :)");
      } else {
        alert("3번 틀렸습니다");
      }

      ;
    }

  }
});
// CONCATENATED MODULE: ./pages/stringmethod2.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_stringmethod2vue_type_script_lang_js_ = (stringmethod2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/stringmethod2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_stringmethod2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9f67fc06"
  
)

/* harmony default export */ var stringmethod2 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=stringmethod2.js.map