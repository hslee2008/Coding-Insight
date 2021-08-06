const cont = document.querySelector( "#content" )

document.querySelector( "#menu" ).innerHTML = `

<h1>파이썬 시작</h1>
<p><a href="python.html">(1) 파이썬</a></p>
<p><a href="install.html">(2) 파이썬 다운로드</a></p>
<p><a href="vscode.html">(3) VSCode 다운로드</a></p>
<p><a href="io.html">(4) 입출력</a></p>
<p><a href="variable.html">(5) 변수</a></p>
<p><a href="datatype.html">(6) 데이터 형태</a></p>
<p><a href="comment.html">(7) 주석 </a></p>
<p><a href="string.html">(8) 문자 </a></p>
<p><a href="stringmethod1.html">(9) 문자 메서드1 </a></p>
<p><a href="stringmethod2.html">(10) 문자 메서드2 </a></p>
<p><a href="escapechar.html">(11) 이스케이프 문자 </a></p>
<h1>파이썬 기본</h1>
<p><a href="ascii.html">(12) 아스키 문자 </a></p>
<p><a href="boolean.html">(13) 분리언 </a></p>
<p><a href="number.html">(14) 숫자 </a></p>
<p><a href="operator.html">(15) 연산자 </a></p>
<p><a href="numtype.html">(16) 숫자 종류 </a></p>
<p><a href="nummethod.html">(17) 숫자 메서드 </a></p>

`

document.querySelector( "#menu" ).style.textAlign = "center";
document.querySelector( "#menu" ).style.display = "none";

document.querySelector( "#butty" ).addEventListener( 'click', () => {
  if ( document.querySelector( "#menu" ).style.display == "none" ) {
    document.querySelector( "#menu" ).style.display = "block"
  } else {
    document.querySelector( "#menu" ).style.display = "none"
  }
})
