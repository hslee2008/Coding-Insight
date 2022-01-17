exports.ids = [13,1];
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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/listmethod1.vue?vue&type=template&id=2b551dd5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<br> <div class=\"text-center\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OrWWnx2ydHc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <br> "),_c('Header',{attrs:{"num":"19","title":"리스트 메서드 1"}}),_vm._ssrNode(" <br><br> <div><div><h1>리스트 - 인덱싱</h1> <p>\n            CODE1과 같이 인덱싱을 이용하여 x번째 값을 새로운 값으로 바꿀 수 있습니다.<br><br>\n            인덱싱을 이용하여 리스트 변수 a의 x~y번째 값까지를 새로운 리스트로 바꿀 수도 있습니다.\n         </p></div> <iframe src=\"https://trinket.io/embed/python3/a413df3b12\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto;\"></iframe></div> <br><br><br><br> <div><div><h1>insert()</h1> <p>\n            insert()라는 메서드를 이용하여 사용자가 원하는 자리에 새로운 값을 더할 수 있습니다.<br><br>\n            list.insert(index, item) 형태를 가지고 있고 첫 번째에는 어디(인덱스)에 아이템을 넣을지 입력하면 됩니다.\n         </p></div> <iframe src=\"https://trinket.io/embed/python3/d50ab693f8\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto;\"></iframe></div> <br><br><br><br> <div><div><h1>리스트에서 값 빼기</h1> <p>\n            CODE1에서와 같이 리스트에서 'C'라는 데이터를 제거하기 위하여 'remove'를 사용할 수 있습니다.<br><br>\n            CODE2에 있는 예시를 보면 pop(x)과 del 키워드를 이용하여 x번째 값을 제거할 수도 있습니다.<br><br>\n            마지막으로 CODE3에 있는 코드는 clear()를 사용하면 리스트를 쓰레기통에 버리는 것과 같이 모든 값을 제거할 수 예시입니다.\n         </p></div> <iframe src=\"https://trinket.io/embed/python3/8ea821b7b4\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto;\"></iframe></div> <br><br><br><br> <div><div><h1>다른 메서드</h1> <p></p><h4>리스트에서 값이 나타나는 개수 찾기</h4>\n         리스트에서 'blue'라는 값이 나타나는 개수를 찾기 위하여 'count()'를 CODE1에서 사용해보겠습니다.<br><br> <h4>리스트 값의 인덱스 찾기</h4>\n         리스트에서 값의 인덱스를 찾을 수도 있습니다. CODE2와 같이 'Poo'라는 단어의 인덱스를 찾아보겠습니다.<br><br> <h4>리스트에서 모든 값 더하기</h4>\n         sum() 함수를 사용하면 리스트에 있는 모든 숫자를 더한 값을 찾을 수 있습니다 (CODE3)\n         <p></p></div> <iframe src=\"https://trinket.io/embed/python3/7fdd2b43c1\" width=\"100%\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"margin: auto;\"></iframe></div> <br><br><br><br> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<a href=\"list\" style=\"text-decoration: none; float: left\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_c('v-icon',{attrs:{"left":""}},[_vm._v(" mdi-chevron-left ")]),_vm._v("Back\n       ")],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"listmethod2\" style=\"text-decoration: none; float: right\">","</a>",[_c('v-btn',{staticClass:"ma-2",attrs:{"outlined":""}},[_vm._v("\n         Next"),_c('v-icon',{attrs:{"right":""}},[_vm._v(" mdi-chevron-right ")])],1)],1)],2),_vm._ssrNode(" <br><br><br><br>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/listmethod1.vue?vue&type=template&id=2b551dd5&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(22);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/listmethod1.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "131e95e2"
  
)

/* harmony default export */ var listmethod1 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Header: __webpack_require__(109).default})


/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=listmethod1.js.map