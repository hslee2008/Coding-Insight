(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2],{396:function(t,e,r){"use strict";r.r(e);var n={props:["title","num"]},v=r(87),l=r(119),_=r.n(l),o=r(254),c=r(176),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("hr"),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n    읽어주기"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-bullhorn ")])],1),t._v(" "),r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n    English"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-ab-testing ")])],1),t._v(" "),r("br"),r("br"),t._v(" "),r("h1",{staticClass:"display-6"},[r("span",[t._v(t._s(t.title))]),r("br",{attrs:{id:"lbbr"}}),r("span",{attrs:{id:"txt"}},[t._v("Computer Science Lab (")]),t._v("CSL"),r("span",{attrs:{id:"txt"}},[t._v(")")]),t._v("\n    "+t._s(t.num)+"\n  ")]),t._v(" "),r("br"),t._v(" "),r("hr")],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:o.a,VIcon:c.a})},426:function(t,e,r){"use strict";r.r(e);var n={name:"StringMethod2",methods:{checkAnswer:function(){document.getElementById("question-1-answers-A").checked?alert("1번 맞았습니다!"):alert("1번 틀렸습니다"),document.getElementById("question-2-answers-A").checked?alert("2번 맞았습니다 :)"):alert("2번 틀렸습니다"),document.getElementById("question-3-answers-A").checked?alert("3번 맞았습니다 :)"):alert("3번 틀렸습니다")}}},v=r(87),l=r(119),_=r.n(l),o=r(254),c=r(176),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),t._v(" "),t._m(0),t._v(" "),r("br"),r("br"),t._v(" "),r("Header",{attrs:{num:"10",title:"문자열 메서드 2"}}),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),t._m(1),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),t._m(2),t._v(" "),r("br"),r("br"),r("br"),r("br"),t._v(" "),t._m(3),t._v(" "),r("br"),r("br"),t._v(" "),r("div",[r("a",{staticStyle:{"text-decoration":"none",float:"left"},attrs:{href:"stringmethod1"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back\n        ")],1)],1),t._v(" "),r("a",{staticStyle:{"text-decoration":"none",float:"right"},attrs:{href:"escapechar"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:""}},[t._v("\n          Next"),r("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)]),t._v(" "),r("br"),r("br"),t._v(" "),r("div",{staticClass:"quiz"},[r("h1",[t._v("퀴즈 풀기!")]),t._v(" "),r("hr"),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("파이썬에서 문자 두 개를 결합하는 방법은?")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("파이썬에서 어떤 문자를 x번 반복한 값을 변수에 저장하는 코드는?")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("br"),r("br"),t._v(" "),r("h3",[t._v("파이썬에서 문자를 자르는 방법은?")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),r("br"),r("br"),t._v(" "),r("v-btn",{on:{click:t.checkAnswer}},[t._v("\n        정답 확인\n      ")])],1),t._v(" "),r("br"),r("br")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("iframe",{attrs:{width:"80%",height:"315",src:"https://www.youtube.com/embed/D4xUOyss96k",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-div",staticStyle:{display:"flex"}},[r("div",{staticStyle:{margin:"auto"}},[r("h1",[t._v("문자 더하기")]),t._v(" "),r("p",[t._v("\n          문자를 +를 사용하여 더할 수 있습니다.\n\n          "),r("br"),r("br"),t._v("\n\n          하지만 반복되는 패턴을 더하고 싶다면 어떻게 해야 할까요?"),r("br"),r("br"),t._v("\n\n          다음과 같은 방법도 있습니다."),r("br"),r("br"),t._v("\n\n          문자 * 숫자는 문자를 숫자만큼 반복하여 되돌려준다는 뜻입니다."),r("br"),r("br"),t._v('\n\n          예를 들어 "Hello" * 2는 "HelloHello"입니다.\n        ')])]),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python/54f740c487",width:"50%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("문자에 대한 정보")]),t._v(" "),r("p",[t._v("\n          파이썬에서 문자가 알파벳과 숫자로만 이루어져 있는지 아는 방법이\n          있습니다."),r("br"),r("br"),t._v("\n\n          바로 'isalnum()'이라는 메서드를 이용하면 됩니다."),r("br"),r("br"),t._v("\n\n          또 'isalpha'는 알파벳으로만 되어있는지,"),r("br"),t._v("\n\n          'isdecimal'은 숫자(0~9)로만 이루어져 있는지,"),r("br"),t._v("\n\n          'isdigit'은 숫자로만 이루어져 있는지,"),r("br"),t._v("\n\n          'isidentifier'는 변수 이름 규칙과 일치하는지 알 수 있습니다."),r("br"),t._v("\n\n          마지막으로 'isnumeric'은 정수로만 이루어져 있는지, 'isprintable'은\n          정보를 출력하는 것이 가능한지, 'isspace'는 스페이스(공백)로만\n          이루어져 있는지 알 수 있습니다."),r("br")])]),t._v(" "),r("iframe",{staticStyle:{margin:"auto"},attrs:{src:"https://trinket.io/embed/python/9da1796e91",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h1",[t._v("파이썬 문자 자르기 - 나쁜말 필터기")]),t._v(" "),r("p",[t._v("\n          나쁜 단어 필터링하는 프로그램을 만들겠습니다."),r("br"),r("br"),t._v("\n\n          먼저, 나쁜 말을 물어보고 '나는 {나쁜 말}이 아니다'라는 뜻이 있는\n          문장을 만들었습니다. 그리고, partition() 메서드를 사용하여 나쁜\n          단어를 기준으로 문장을 자르고 그 나쁜 단어 대신 '**'를\n          넣었습니다."),r("br"),r("br"),t._v("\n\n          또 다른 예시를 들어보겠습니다."),r("br"),t._v('"Hello. My ", "name", " is Hyunseung")가 터미널에 출력이\n          되는 것을 관찰할 수 있습니다. 인덱싱을 사용하여 \'name\' 전의 문장과\n          \'name\' 후의 문장을 결합했습니다.'),r("br"),r("br")])]),t._v(" "),r("iframe",{attrs:{src:"https://trinket.io/embed/python/d278186aad",width:"100%",height:"356",frameborder:"0",marginwidth:"0",marginheight:"0",allowfullscreen:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-A",value:"A"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-A"}},[t._v("A) + ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-B",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-B"}},[t._v("B) - ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-C",value:"C"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-C"}},[t._v("C) ++ ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-1-answers",id:"question-1-answers-D",value:"D"}}),t._v(" "),r("label",{attrs:{for:"question-1-answers-D"}},[t._v("D) == ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-A",value:"A"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-A"}},[t._v('A) a = "문자" * x ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-B",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-B"}},[t._v('B) a = "문자" - x ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-C",value:"C"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-C"}},[t._v('C) a = "문자" $ x ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-2-answers",id:"question-2-answers-D",value:"D"}}),t._v(" "),r("label",{attrs:{for:"question-2-answers-D"}},[t._v('D) a = "문자" @ x ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-A",value:"A"}}),t._v(" "),r("label",{attrs:{for:"question-3-answers-A"}},[t._v('A) "string".partition("") ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-B",value:"B"}}),t._v(" "),r("label",{attrs:{for:"question-3-answers-B"}},[t._v('B) "string".cut("") ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-C",value:"C"}}),t._v(" "),r("label",{attrs:{for:"question-3-answers-C"}},[t._v('C) "string".apply("") ')])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"radio",name:"question-3-answers",id:"question-3-answers-D",value:"D"}}),t._v(" "),r("label",{attrs:{for:"question-3-answers-D"}},[t._v('D) "string" / "string" ')])])}],!1,null,null,null);e.default=component.exports;_()(component,{Header:r(396).default}),_()(component,{VBtn:o.a,VIcon:c.a})}}]);