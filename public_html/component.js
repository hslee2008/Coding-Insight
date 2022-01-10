;(function(){function t(){}function e(t){return null==t?t===l?d:y:I&&I in Object(t)?n(t):r(t)}function n(t){var e=$.call(t,I),n=t[I];try{t[I]=l;var r=true}catch(t){}var o=_.call(t);return r&&(e?t[I]=n:delete t[I]),o}function r(t){return _.call(t)}function o(t,e,n){function r(e){var n=d,r=g;return d=g=l,x=e,v=t.apply(r,n)}function o(t){return x=t,O=setTimeout(c,e),T?r(t):v}function i(t){var n=t-h,r=t-x,o=e-n;return w?k(o,j-r):o}function f(t){var n=t-h,r=t-x;return h===l||n>=e||n<0||w&&r>=j}function c(){
var t=D();return f(t)?p(t):(O=setTimeout(c,i(t)),l)}function p(t){return O=l,S&&d?r(t):(d=g=l,v)}function s(){O!==l&&clearTimeout(O),x=0,d=h=g=O=l}function y(){return O===l?v:p(D())}function m(){var t=D(),n=f(t);if(d=arguments,g=this,h=t,n){if(O===l)return o(h);if(w)return O=setTimeout(c,e),r(h)}return O===l&&(O=setTimeout(c,e)),v}var d,g,j,v,O,h,x=0,T=false,w=false,S=true;if(typeof t!="function")throw new TypeError(b);return e=a(e)||0,u(n)&&(T=!!n.leading,w="maxWait"in n,j=w?M(a(n.maxWait)||0,e):j,S="trailing"in n?!!n.trailing:S),
m.cancel=s,m.flush=y,m}function i(t,e,n){var r=true,i=true;if(typeof t!="function")throw new TypeError(b);return u(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),o(t,e,{leading:r,maxWait:e,trailing:i})}function u(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function f(t){return null!=t&&typeof t=="object"}function c(t){return typeof t=="symbol"||f(t)&&e(t)==m}function a(t){if(typeof t=="number")return t;if(c(t))return s;if(u(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;
t=u(e)?e+"":e}if(typeof t!="string")return 0===t?t:+t;t=t.replace(g,"");var n=v.test(t);return n||O.test(t)?h(t.slice(2),n?2:8):j.test(t)?s:+t}var l,p="4.17.5",b="Expected a function",s=NaN,y="[object Null]",m="[object Symbol]",d="[object Undefined]",g=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,O=/^0o[0-7]+$/i,h=parseInt,x=typeof global=="object"&&global&&global.Object===Object&&global,T=typeof self=="object"&&self&&self.Object===Object&&self,w=x||T||Function("return this")(),S=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=S&&typeof module=="object"&&module&&!module.nodeType&&module,E=Object.prototype,$=E.hasOwnProperty,_=E.toString,W=w.Symbol,I=W?W.toStringTag:l,M=Math.max,k=Math.min,D=function(){
return w.Date.now()};t.debounce=o,t.throttle=i,t.isObject=u,t.isObjectLike=f,t.isSymbol=c,t.now=D,t.toNumber=a,t.VERSION=p,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(w._=t, define(function(){return t})):N?((N.exports=t)._=t,S._=t):w._=t}).call(this);

var checkHeader = _.throttle(() => {
  let scrollPosition = Math.round(window.scrollY);

  if (scrollPosition > 100){
    document.querySelector('#navigate').classList.add("sticky")
  } else {
    document.querySelector('#navigate').classList.remove("sticky");
  }
}, 300);

window.addEventListener('scroll', checkHeader);


const app = Vue.createApp( {} );

app.component("pyfact-footer", {
  template: `<footer>
      <div>
        <a class="btn btn-light" href="https://coding-insight.com/chat.html">질문하기</a>
        <a class="btn btn-light" href="https://github.com/HyunseungLee-Travis/Python-Factory">팀</a>
        <a class="btn btn-light" href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA">유튜브</a>
      </div>
      <br/><br/>
      <div class="d-flex justify-content-center p-0 w-100">
        <div>
          <h1 class="display-6">Python-Factory © 2021</h1>
          <p>"지식을 만드는 곳 - 파이썬 팩토리"</p>
        </div>
      </div>
    </footer>`,
});

app.component("c-pyfact-menu", {
  template: `

<button type="button" style="position: absolute; right: 0; top: 0;" id="menu-close-button" class="btn-close" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#demo" data-bs-toggle="offcanvas" data-bs-target="#demo"></button>

<details>
  <summary>&#x43;&#x20;&#xc5b8;&#xc5b4;&#x20;&#xc2dc;&#xc791;</summary>
  <p id="men">
    <a href="c.html">(1) &#67;&#32;&#50616;&#50612;</a>
    <a href="install.html">(2) &#52980;&#54028;&#51068;&#47084;&#32;&#49444;&#52824;</a>
    <a href="vscode.html">(3) VSCode &#45796;&#50868;&#47196;&#46300;</a>
    <a href="print.html">(4) &#52636;&#47141;</a>
    <a href="variable.html">(5) &#48320;&#49688;&#32;&#45;&#32;&#44592;&#48376;</a>
    <a href="variableadvance.html"> (6) &#48320;&#49688;&#32;&#45;&#32;&#44256;&#44553;</a>
    <br /> <br />
    <a href="input.html">(7) &#51077;&#47141;</a>
    <a href="basicdatatype.html">(8) &#44592;&#48376;&#32;&#45936;&#51060;&#53552;&#32;&#54805;&#53468;</a>
    <a href="otherdatatype.html">(9) &#54869;&#51109;&#32;&#45936;&#51060;&#53552;&#32;&#54805;&#53468;</a>
    <a href="typecasting.html">(10) &#45936;&#51060;&#53552;&#32;&#54805;&#53468;&#32;&#48320;&#54805;</a>
    <a href="operator.html">(11) &#50672;&#49328;&#51088;</a>
    <a href="comment.html">(12) &#51452;&#49437;</a>
    <a href="grammar.html">(13) &#44592;&#48376;&#32;&#67;&#32;&#47928;&#48277;</a>
  </p>
</details>

<br /><br />

<details>
  <summary>&#67;&#32;&#50616;&#50612;&#32;&#44592;&#48376;</summary>
  <p id="men">
    <a href="escapecharacter.html">(14) &#51060;&#49828;&#52992;&#51060;&#54532;&#32;&#47928;&#51088; </a>
    <a href="if.html">(15) &#51312;&#44148;&#47928; </a>
    <a href="hardif.html"> (16) &#48373;&#51105;&#54620;&#32;&#51312;&#44148;&#47928;</a>
    <a href="switch.html">(17) &#115;&#119;&#105;&#116;&#99;&#104;&#32;&#47928;</a>
    <a href="for.html">(18) &#102;&#111;&#114;&#32;&#48152;&#48373;&#47928;</a>

    <br /><br />

    <a href="while.html">(19) &#119;&#104;&#105;&#108;&#101;&#32;&#48152;&#48373;&#47928;</a>
    <a href="doublefor.html">(20) &#51060;&#51473;&#32;&#48152;&#48373;&#47928;</a>
    <a href="dowhile.html">(21) &#100;&#111;&#32;&#45;&#32;&#119;&#104;&#105;&#108;&#101;&#32;&#48152;&#48373;&#47928;</a>
    <a href="inffor.html">(22) &#47924;&#54620;&#32;&#48152;&#48373;&#47928;</a>
  </p>
</details>

<br /><br />

<details>
  <summary>&#67;&#32;&#50616;&#50612;&#32;&#52488;&#44553;</summary>
  <p id="men">
    <a href="conbregot.html">(23) &#67;&#111;&#110;&#116;&#105;&#110;&#117;&#101;&#44;&#32;&#66;&#114;&#101;&#97;&#107;&#44;&#32;&#71;&#111;&#116;&#111;&#32;&#47928;</a>
    <a href="array.html">(24) &#48176;&#50676;</a>
    <a href="string.html">(25) &#47928;&#51088;&#50676;</a>
    <a href="stringlibrary.html">(26) &#115;&#116;&#114;&#105;&#110;&#103;&#32;&#46972;&#51060;&#48652;&#47084;&#47532;</a>
    <a href="2darr.html">(27) &#50;&#52264;&#50896;&#32;&#48176;&#50676;</a>
    <br /><br />
    <a href="function.html">(28) &#54632;&#49688;</a>
    <a href="mainfunction.html">(29) &#109;&#97;&#105;&#110;&#32;&#54632;&#49688; </a>
    <a href="storageclass.html">(30) &#49828;&#53664;&#47532;&#51648;&#32;&#53364;&#47000;&#49828;</a>
    <a href="typedef.html">(31) &#116;&#121;&#112;&#101;&#100;&#101;&#102;</a>
  </p>
</details>

<br /> <br />

<details>
  <summary>&#67;&#32;&#50616;&#50612;&#32;&#51473;&#44553;</summary>
  <p id="men">
    <a href="struct.html">(32) struct</a>
    <a href="pointer.html">(33) 포인터</a>
    <a href="usingpointer.html">(34) 포인터 사용하기</a>
    <a href="union.html">(35) union</a>
    <a href="void.html">(36) void</a>
    <br /><br />
    <a href="include.html">(37) #include</a>
    <a href="assert.html">(38) assert</a>
    <a href="macro.html">(39) 매크로</a>
    <a href="otherif.html">(40) 조건문 - 다른 방법</a>
    <a href="error.html">(41) #error</a>
  </p>
</details>

<br /><br />

<details>
  <summary>C 언어 고급</summary>
  <p id="men">
    <a href="arrow.html">(42) 화살표</a>
    <a href="random.html">(43) 랜덤</a>
    <a href="ctype.html">(44) c 타입</a>
    <a href="stopprogram.html">(45) 프로그램 중단</a>
    <a href="math.html">(46) math.h 라이브러리</a>
    <br /><br />
    <a href="file.html">(47) 파일 다루기</a>
    <a href="readfile.html">(48) 파일 읽기</a>
    <a href="writefile.html">(49) 파일 쓰기</a>
    <a href="deletefile.html">(50) 파일 삭제하기</a>
  </p>
</details>

<br /><br />
<hr />
<br /><br />

<details>
  <summary>C++ 시작</summary>
  <p id="men">
    <a href="cpp.html">(1) C++의 정의 </a>
    <a href="io-cpp.html">(2) 입출력</a>
    <a href="string-cpp.html">(3) 문자열</a>
    <a href="vectorbasic.html">(4) Vector</a>
  </p>
</details>`,
});

app.component("py-pyfact-menu", {
  template: `

<button type="button" style="position: absolute; right: 0; top: 0;" id="menu-close-button" class="btn-close" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#demo" data-bs-toggle="offcanvas" data-bs-target="#demo"></button>

<details>
  <summary>&#54028;&#51060;&#50028; &#49884;&#51089;</summary>
  <p id="men">
    <a href="python.html">(1) &#54028;&#51060;&#50028;</a>
    <a href="install.html">(2) &#54028;&#51060;&#50028; &#45796;&#50868;&#47196;&#46300;</a>
    <a href="vscode.html">(3) VSCode &#45796;&#50868;&#47196;&#46300;</a>
    <a href="io.html">(4) &#51077;&#52636;&#47141;</a>
    <a href="variable.html">(5) &#48320;&#49688;</a>
    <br /> <br />
    <a href="project/madlib.html"> (1 - 1) 매드립스 미시언</a>
    <br /> <br />
    <a href="datatype.html">(6) &#45936;&#51060;&#53552; &#54805;&#53468;</a>
    <a href="comment.html">(7) &#51452;&#49437; </a>
    <a href="string.html">(8) &#47928;&#51088; </a>
    <a href="stringmethod1.html">(9) &#47928;&#51088; &#47700;&#49436;&#46300;1 </a>
    <a href="stringmethod2.html">(10) &#47928;&#51088; &#47700;&#49436;&#46300;2 </a>
    <a href="escapechar.html">(11) &#51060;&#49828;&#52992;&#51060;&#54532; &#47928;&#51088; </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#44592;&#48376;</summary>
  <p id="men">
    <a href="ascii.html">(12) &#50500;&#49828;&#53412; &#47928;&#51088; </a>
    <a href="boolean.html">(13) &#48520;&#47532;&#50616; </a>
    <a href="number.html">(14) &#49707;&#51088; </a>
    <a href="operator.html">(15) &#50672;&#49328;&#51088; </a>
    <a href="numtype.html">(16) &#49707;&#51088; &#51333;&#47448; </a>
    <br /> <br />
    <a href="project/basiccalc.html"> (1 - 2) 간단한 계산기</a>
    <br /> <br />
    <a href="nummethod.html">(17) &#49707;&#51088; &#47700;&#49436;&#46300; </a>
    <a href="list.html">(18) &#47532;&#49828;&#53944; </a>
    <a href="listmethod1.html">(19) &#47532;&#49828;&#53944; &#47700;&#49436;&#46300; 1 </a>
    <a href="listmethod2.html">(20) &#47532;&#49828;&#53944; &#47700;&#49436;&#46300; 2 </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#52488;&#44553;</summary>

  <p id="men">
    <a href="dictionary.html">(21) &#46357;&#49492;&#45320;&#47532; </a>
    <a href="dictionarymethod.html">(22) &#46357;&#49492;&#45320;&#47532; &#47700;&#49436;&#46300; </a>
    <a href="tuple.html">(23) &#53916;&#54540; </a>
    <a href="set.html">(24) &#51665;&#54633; </a>
    <a href="setmethod.html">(25) &#51665;&#54633; &#47700;&#49436;&#46300; </a>
    <br /> <br />
    <a href="if.html">(26) &#51312;&#44148;&#47928; </a>
    <a href="ifmaster.html">(27) &#51312;&#44148;&#47928; &#47560;&#49828;&#53552;&#54616;&#44592; </a>
    <a href="none.html">(28) None </a>
    <a href="function.html">(29) &#54632;&#49688; </a>
    <a href="functionhard.html">(30) &#45908; &#50612;&#47140;&#50868; &#54632;&#49688; &#45236;&#50857; </a>
    <a href="specialvariable.html">(31) &#53945;&#48324;&#54620; &#48320;&#49688; </a>
  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#51473;&#44553;</summary>

  <p id="men">
    <a href="type.html">(32) &#53440;&#51077; &#51648;&#51221;</a>
    <a href="anonymousfunction.html">(33) &#51061;&#47749; &#54632;&#49688;</a>
    <a href="for.html">(34) for &#48152;&#48373;&#47928;</a>
    <a href="fortype.html">(35) for &#48152;&#48373;&#47928; &#51333;&#47448;</a>
    <a href="forfunction.html">(36) for &#48152;&#48373;&#47928; &#54632;&#49688;</a>
    <a href="while.html">(37) while &#48152;&#48373;&#47928;</a>
    <br /> <br />
    <a href="oneliner.html">(38) &#53076;&#46300;&#47484; &#54620; &#51460;&#50640;</a>
    <a href="etcfunction.html">(39) &#45908; &#45796;&#50577;&#54620; &#54632;&#49688;</a>
    <a href="module.html">(40) &#47784;&#46280; &#44592;&#48376;</a>
    <a href="modulemaster.html">(41) &#47784;&#46280; &#47560;&#49828;&#53552;&#54616;&#44592;</a>
    <a href="pythonmodule.html">(42) &#54028;&#51060;&#50028; &#47784;&#46280;</a>
    <a href="date.html">(43) &#45216;&#51676;</a>
    <a href="random.html">(44) &#47004;&#45924;</a>
    <a href="regex.html">(45) &#51221;&#44508;&#49885;</a>
  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#44256;&#44553;</summary>

  <p id="men">

    <a href="class.html">(46) &#53364;&#47000;&#49828;</a>
    <a href="classmethod.html">(47) &#53364;&#47000;&#49828; &#47700;&#49436;&#46300;</a>
    <a href="math.html">(48) &#49688;&#54617; - &#53685;&#44228;</a>
    <a href="file.html">(49) &#54028;&#51068; &#45796;&#47336;&#45716; &#51089;&#50629;</a>
    <a href="filereading.html">(50) &#54028;&#51068; &#51069;&#44592;</a>
    <a href="filewriting.html">(51) &#54028;&#51068; &#50416;&#44592;</a>
    <br /> <br />
    <a href="etcfile.html">(52) &#54028;&#51068; &#47564;&#46308;&#44592;, &#49325;&#51228;&#54616;&#44592;, encoding</a>
    <a href="contextmanager.html">(53) &#52968;&#53581;&#49828;&#53944; &#47588;&#45768;&#51200;</a>
    <a href="datachange.html">(54) &#45936;&#51060;&#53552; &#54805;&#53468; &#48148;&#44984;&#44592;</a>
    <a href="stringascode.html">(55) &#47928;&#51088;&#47484; &#53076;&#46300;&#52376;&#47100; &#49892;&#54665;&#54616;&#44592;</a>
    <a href="pip.html">(56) PIP</a>

  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#44256;&#49688;</summary>

  <p id="men">

    <a href="json.html">(57) JSON</a>
    <a href="array.html">(58) &#51221;&#47148;</a>
    <a href="arraytype.html">(59) &#51221;&#47148; &#51333;&#47448;</a>
    <a href="arrayshape.html">(60) &#51221;&#47148; &#47784;&#50577;</a>
    <a href="error.html">(61) &#50696;&#50808; &#52376;&#47532;</a>
    <a href="error2.html">(62) &#50640;&#47084;</a>
    <a href="logging.html">(63) &#47196;&#44613;</a>
    <br /> <br />
    <a href="mapandreduceandfilter.html">(64) map & reduce & filter</a>
    <a href="zlib.html">(65) ZLIB</a>
    <a href="decorator.html">(66) &#45936;&#53076;&#47112;&#51060;&#53552;</a>
    <a href="mydecorator.html">(67) &#45208;&#47564;&#51032; &#45936;&#53076;&#47112;&#51060;&#53552; &#47564;&#46308;&#44592;</a>
    <a href="pythondecorator.html">(68) &#54028;&#51060;&#50028; &#45936;&#53076;&#47112;&#51060;&#53552;</a>

  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#47560;&#49828;&#53552;</summary>

  <p id="men">

    <a href="newline.html">(69) &#49352;&#47196;&#50868; &#51460;</a>
    <a href="beedongee.html">(70) &#48708;&#46041;&#44592;</a>
    <a href="asyncio.html">(71) asyncio</a>
    <a href="__name__.html">(72) __name__</a>
    <a href="thread.html">(73) &#49828;&#47112;&#46300;</a>
    <a href="complexthread.html">(74) &#45908; &#48373;&#51105;&#54620; &#44592;&#45733; - &#49828;&#47112;&#46300;</a>
    <a href="threadmethod.html">(75) &#49828;&#47112;&#46300; &#47700;&#49436;&#46300;</a>
    <a href="multiprocessing.html">(76) &#47680;&#54000;&#54532;&#47196;&#49464;&#49905;</a>
    <br /> <br />
    <a href="counter.html">(77) &#52852;&#50868;&#53552;</a>
    <a href="request.html">(78) &#47532;&#53272;&#49828;&#53944;</a>
    <a href="requestmethod.html">(79) &#47532;&#53272;&#49828;&#53944; &#47700;&#49436;&#46300;</a>
    <a href="dundermethod.html">(80) &#45912;&#45908;&#47700;&#49436;&#46300;</a>
    <a href="additionaldundermethod.html">(81) &#54869;&#51109; &#45912;&#45908;&#47700;&#49436;&#46300;</a>
    <a href="etcdundermethod.html">(82) &#45908; &#45796;&#50577;&#54620; &#45912;&#45908; &#47700;&#49436;&#46300;</a>
    <a href="atexit.html">(83) atexit</a>
    <a href="coroutine.html">(84) &#53076;&#47336;&#54004;</a>

  </p>
</details>

<br /> <br />

<details>
  <summary>&#54028;&#51060;&#50028; &#49888;</summary>

  <p id="men">
    <a href="calc.html">(85) &#44228;&#49328;&#44592;</a>
    <a href="spam.html">(86) &#49828;&#54072; &#51060;&#47700;&#51068;</a>
    <a href="autozoom.html">(87) &#51088;&#46041; &#51468;</a>
    <a href="keyboard.html">(88) &#53412;&#48372;&#46300;</a>
    <a href="mouse.html">(89) &#47560;&#50864;&#49828;</a>
    <a href="matplotlib.html">(90) matplotib</a>
    <a href="turtle.html">(91) turtle</a>
    <a href="pandas.html">(92) pandas</a>
    <br /> <br />
    <a href="gtts.html">(93) gTTS</a>
  </p>
</details>

<br /> <br />`,
});

app.component('py-pyfact-menu-en', {
  template: `
    <button type="button" style="position: absolute; right: 0; top: 0;" id="menu-close-button" class="btn-close" aria-label="Close" data-bs-toggle="offcanvas" data-bs-target="#demo" data-bs-toggle="offcanvas" data-bs-target="#demo"></button>

<details>
  <summary>Starting Python</summary>
  <p id="men">
    <a href="python-en.html">(1) The Definition of Python</a>
    <a href="install-en.html">(2) Installation </a>
    <a href="vscode-en.html">(3) Download VSCode </a>
    <a href="io-en.html">(4) Input and Output </a>
    <a href="variable-en.html">(5) Variable </a>
    <br /> <br />
    <a href="datatype-en.html">(6) Data Type </a>
    <a href="comment-en.html">(7) Comment </a>
    <a href="string-en.html">(8) String </a>
    <a href="stringmethod1-en.html">(9) String Method 1 </a>
    <a href="stringmethod2-en.html">(10) String Method 2 </a>
  </p>
</details>

<br /> <br />

<details>
  <summary>Basic Python</summary>
  <p id="men">
    <a href="ascii-en.html">(12) ASCII </a>
    <a href="boolean-en.html">(13) Boolean </a>
    <a href="number-en.html">(14) Number </a>
    <a href="operator-en.html">(15) Operator </a>
    <br /> <br />
    <a href="numtype-en.html">(16) Number Types </a>
    <a href="nummethod-en.html">(17) Number Method </a>
    <a href="list-en.html">(18) List </a>
    <a href="listmethod1-en.html">(19) List Method 1 </a>
    <a href="listmethod2-en.html">(20) List Method 2 </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>Python Beginner</summary>

  <p id="men">
    <a href="dictionary-en.html">(21) Dctionary </a>
    <a href="dictionarymethod-en.html">(22) Dictionary Method </a>
    <a href="tuple-en.html">(23) Tuple </a>
    <a href="set-en.html">(24) Set </a>
    <a href="setmethod-en.html">(25) Set Method </a>
    <br /> <br />
    <a href="if-en.html">(26) If Statement </a>
    <a href="ifmaster-en.html">(27) Mastering If Statement </a>
    <a href="none-en.html">(28) None </a>
    <a href="function-en.html">(29) Function </a>
    <a href="functionhard-en.html">(30) More about Function </a>
    <a href="specialvariable-en.html">(31) Special Variables </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>Python Intermediate</summary>

  <p id="men">
    <a href="type-en.html">(32) Type Assignment </a>
    <a href="anonymousfunction-en.html">(33) Anonymous Function </a>
    <a href="for-en.html">(34) For Loop </a>
    <a href="fortype-en.html">(35) Types of loops </a>
    <a href="forfunction-en.html">(36) Functions Used in Loops </a>
    <a href="while-en.html">(37) While Loop </a>
    <br /> <br />
    <a href="oneliner-en.html">(38) Code in One Line </a>
    <a href="etcfunction-en.html">(39) More Functions </a>
    <a href="module-en.html">(40) Module </a>
    <a href="modulemaster-en.html">(41) Mastering Modules </a>
    <a href="pythonmodule-en.html">(42) Python Modules </a>
    <a href="date-en.html">(43) Date </a>
    <a href="random-en.html">(44) Random </a>
    <a href="regex-en.html">(45) Regex(Regular Expression) </a>
  </p>
</details>

<br /> <br />

<details>
  <summary>Advanced Python</summary>

  <p id="men">

    <a href="class-en.html">(46) Class </a>
    <a href="classmethod-en.html">(47) Class Method </a>
    <a href="math-en.html">(48) Math </a>
    <a href="file-en.html">(49) File Handling </a>
    <a href="filereading-en.html">(50) File Reading </a>
    <a href="filewriting-en.html">(51) File Writing </a>
    <br /> <br />
    <a href="etcfile-en.html">(52) File Making, Removing, Encoding </a>
    <a href="contextmanager-en.html">(53) Context Manager </a>
    <a href="datachange-en.html">(54) Data Change </a>
    <a href="stringascode-en.html">(55) Running String as Code </a>
    <a href="pip-en.html">(56) PIP </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>Python Specialist</summary>

  <p id="men">

    <a href="json-en.html">(57) JSON</a>
    <a href="array-en.html">(58) Array </a>
    <a href="arraytype-en.html">(59) Array Type </a>
    <a href="arrayshape-en.html">(60) Array Shape </a>
    <a href="error-en.html">(61) Error Handling</a>
    <a href="error2-en.html">(62) Errors </a>
    <a href="logging-en.html">(63) Logging </a>
    <br /> <br />
    <a href="mapandreduceandfilter-en.html">(64) map & reduce & filter</a>
    <a href="zlib-en.html">(65) Zlib </a>
    <a href="decorator-en.html">(66) Decorator </a>
    <a href="mydecorator-en.html">(67) Making my own decorators </a>
    <a href="pythondecorator-en.html">(68) Python Decorator </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>Python Master</summary>

  <p id="men">

    <a href="newline-en.html">(69) New Line </a>
    <a href="beedongee-en.html">(70) Asynchrnonous </a>
    <a href="asyncio-en.html">(71) asyncio </a>
    <a href="__name__-en.html">(72) __name__</a>
    <a href="thread-en.html">(73) Thread </a>
    <a href="complexthread-en.html">(74) Complex Thread </a>
    <a href="threadmethod-en.html">(75) Thread Method </a>
    <a href="multiprocessing-en.html">(76) Multiprocessing </a>
    <br /> <br />
    <a href="counter-en.html">(77) Counter </a>
    <a href="request-en.html">(78) Request </a>
    <a href="requestmethod-en.html">(79) Request Method </a>
    <a href="dundermethod-en.html">(80) Dunder Method </a>
    <a href="additionaldundermethod-en.html">(81) Additional Dunder Method </a>
    <a href="etcdundermethod-en.html">(82) Other Dunder Method </a>
    <a href="atexit-en.html">(83) Atexit </a>
    <a href="coroutine-en.html">(84) Coroutine </a>

  </p>
</details>

<br /> <br />

<details>
  <summary>Python God</summary>

  <p id="men">
    <a href="calc-en.html">(85) Making Calculator </a>
    <a href="spam-en.html">(86) Spam Email </a>
    <a href="autozoom-en.html">(87) Auto Zoom </a>
    <a href="keyboard-en.html">(88) Keyboard </a>
    <a href="mouse-en.html">(89) Mouse </a>
    <a href="matplotlib-en.html">(90) Matplotib </a>
    <a href="turtle-en.html">(91) Turtle </a>
    <a href="pandas-en.html">(92) Pandas </a>
    <br /> <br />
    <a href="gtts-en.html">(93) gTTS </a>
  </p>
</details>

<br /> <br />
  `
})

app.mount("#app");
