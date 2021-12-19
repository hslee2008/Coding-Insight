window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push( arguments );
}
gtag( 'js', new Date() );

gtag( 'config', 'UA-209775586-1' );

//Menu
const menu = `
<details>
  <summary>&#x43;&#x20;&#xc5b8;&#xc5b4;&#x20;&#xc2dc;&#xc791;</summary>
  <p id="men">
    <a href="c.html">(1) &#67;&#32;&#50616;&#50612;</a>
    <a href="install.html">(2) &#52980;&#54028;&#51068;&#47084;&#32;&#49444;&#52824;</a>
    <a href="vscode.html">(3) VSCode &#45796;&#50868;&#47196;&#46300;</a>
    <a href="print.html">(4) &#52636;&#47141;</a>
    <a href="variable.html">(5) &#48320;&#49688;&#32;&#45;&#32;&#44592;&#48376;</a>
    <a href="variableadvance.html"> (6) &#48320;&#49688;&#32;&#45;&#32;&#44256;&#44553;</a>
    <br><br>
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

<br /><br />


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
    <a href="vectorbasic.html">(4) vector 기본</a>
    <a href="vectormore.html">(5) vector 메서드</a>
  </p>
</details>



`;

document.querySelector( "#menu" ).innerHTML = menu;

//speechSynthesis - button
const set = document.querySelector( "#setting" )

let count = 0;
const speach = document.body.innerText.substr( document.body.innerText.indexOf( "읽어주기" ) + 3 );
const butt = document.querySelector( "#speakbutt" )
butt.addEventListener( 'click', () => {
  if ( count % 2 == 0 ) {
    try {
      const a = new SpeechSynthesisUtterance( speach );
      a.lang = 'ko-kr';
      a.volume = document.querySelector( "#vol" ).value;
      a.rate = document.querySelector( "#rate" ).value;
      speechSynthesis.speak( a );
      butt.innerText = "멈추기";
    } catch ( err ) {
      alert( ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 (" + err + ")" )
    }
    set.style.display = "block";
  } else {
    try {
      speechSynthesis.cancel();
      butt.innerText = "읽어주기";
    } catch ( err ) {
      alert( ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 (" + err + ")" )
    }
    set.style.display = "none"
  }
  count++;
} )

window.addEventListener( 'beforeunload', function ( e ) {
  speechSynthesis.cancel();
  butt.innerText = "읽어주기";
} );

document.querySelector( "#vol" ).addEventListener( "change", e => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance( speach );
    a.lang = 'ko-kr';
    a.volume = e.target.value;
    a.rate = document.querySelector( "#rate" ).value;
    speechSynthesis.speak( a );
    butt.innerText = "멈추기";
  } catch ( err ) {
    alert( ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다." )
  }
} )

document.querySelector( "#rate" ).addEventListener( "change", e => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance( speach );
    a.lang = 'ko-kr';
    a.volume = document.querySelector( '#vol' ).value;
    a.rate = e.target.value;
    speechSynthesis.speak( a );
    butt.innerText = "멈추기";
  } catch ( err ) {
    alert( ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다." )
  }
} )

//more
const mb = document.querySelector( '#more' )
let c = 0;
mb.addEventListener( "click", () => {
  if ( c % 2 == 0 ) {
    document.querySelector( "#quiz" ).style.display = "block"
    document.querySelector( "#feedback" ).style.display = "block"
    document.querySelector( "#video" ).style.display = "block"
    document.querySelector( "#home" ).style.display = "none"
    document.querySelector( "#python" ).style.display = "none"
    document.querySelector( "#clang" ).style.display = "none"
    document.querySelector( "#video" ).style.display = "block"
    mb.innerHTML = "<a>숨기기</a>"
  } else {
    document.querySelector( "#quiz" ).style.display = "none"
    document.querySelector( "#feedback" ).style.display = "none"
    document.querySelector( "#video" ).style.display = "none"
    document.querySelector( "#home" ).style.display = "block"
    document.querySelector( "#python" ).style.display = "block"
    document.querySelector( "#clang" ).style.display = "block"
    document.querySelector( "#video" ).style.display = "none"
    mb.innerHTML = "<a>더보기</a>"
  }
  c++
} )

window.onerror = function ( mes ) {
  alert( "흠... 버그가 있습니다. 개발자들에게 빨리 알려주세요! - " + mes )
  if ( confirm( "메시지를 보내고 싶나요?" ) ) {
    open( "https://coding-insight.com/message.html" )
  }
}

//title
document.title = document.getElementById( "tit" ).innerText

//Keyboard
document.addEventListener( "keydown", e => {
  if ( e.ctrlKey ) {
    switch ( e.code ) {
      case 'KeyM':
        document.querySelector( "#butty" ).click();
        break;
    }
  }
} )
