//Menu
const menu = `
<button class="btn-close" aria-label="Close" style="position:absolute;top:0;right:0;margin:5px;" onclick="document.querySelector('#menu').style.display = 'none'"></button>

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
    <a href="2darr.html">(26) &#50;&#52264;&#50896;&#32;&#48176;&#50676;</a>
    <a href="function.html">(26) &#54632;&#49688;<span class="badge badge-secondary" style="color:red;">NEW</span></a>
    <a href="mainfunction.html">(27) main 함수 <span class="badge badge-secondary" style="color:red;">NEW</span></a>
  </p>
</details>

<br /><br />


`;

document.querySelector( "#menu" ).innerHTML = menu;


//Menu - Hide and show
document.querySelector( "#menu" ).style.textAlign = "center";
document.querySelector( "#menu" ).style.display = "none";

document.querySelector( "#butty" ).addEventListener( 'click', () => {
  if ( document.querySelector( "#menu" ).style.display == "none" ) {
    document.querySelector( "#menu" ).style.display = "block"
  } else {
    document.querySelector( "#menu" ).style.display = "none"
  }
} )

//speechSynthesis - button
const set = document.querySelector( "#setting" )

let count = 0;
const speach = document.body.innerText.substr( document.body.innerText.indexOf( "읽어주기" ) + 3 );
const butt = document.querySelector( "#speakbutt" )
butt.addEventListener( 'click', () => {
  if ( count % 2 == 0 ) {
    try {
      const a = new SpeechSynthesisUtterance( speach );
      a.lang = 'kr';
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
    a.lang = 'kr';
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
    a.lang = 'kr';
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
