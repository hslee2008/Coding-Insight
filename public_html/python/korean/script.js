//Ana
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push( arguments );
}
gtag( 'js', new Date() );

gtag( 'config', 'UA-209775586-1' );

//Menu
const menu = `

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

<br /> <br />

`;

document.querySelector( "#menu" ).innerHTML = menu;

//speechSynthesis - button
const set = document.querySelector( "#setting" )

let count = 0;
const speach = document.body.innerText.substring( document.body.innerText.indexOf( "클릭" ) + 4 ).replace( "읽어주기", "" );
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
      alert( ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다." )
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
    document.querySelector( "#trans" ).style.display = "none"
    document.querySelector( "#video" ).style.display = "block"
    mb.innerHTML = "<a>숨기기</a>"
  } else {
    document.querySelector( "#quiz" ).style.display = "none"
    document.querySelector( "#feedback" ).style.display = "none"
    document.querySelector( "#video" ).style.display = "none"
    document.querySelector( "#home" ).style.display = "block"
    document.querySelector( "#python" ).style.display = "block"
    document.querySelector( "#clang" ).style.display = "block"
    document.querySelector( "#trans" ).style.display = "block"
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
})
