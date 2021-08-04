const cont = document.querySelector( "#content" )

document.querySelector( "#menu" ).innerHTML = `

<h1>파이썬 시작</h1>
<p><a href="python.html">(1) 파이썬</a></p>
<p><a href="install.html">(2) 파이썬 다운로드</a></p>
<p><a href="vscode.html">(3) VSCode 다운로드</a></p>
<p><a href="io.html">(4) 입출력</a></p>
<p><a href="variable.html">(5) 변수</a></p>
<p><a href="datatype.html">(6) 데이터 형태</a></p>
<p><a href="comment.html">(6) 주석 </a></p>


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
