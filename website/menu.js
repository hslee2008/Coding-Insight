const cont = document.querySelector( "#content" )

document.querySelector( "#menu" ).innerHTML = `

<h1>파이썬 시작</h1>
<p id="men">

<a href="python.html">(1) 파이썬</a>
<a href="install.html">(2) 파이썬 다운로드</a>
<a href="vscode.html">(3) VSCode 다운로드</a>
<a href="io.html">(4) 입출력</a>
<a href="variable.html">(5) 변수</a>
<a href="datatype.html">(6) 데이터 형태</a>
<br />
<br />
<a href="comment.html">(7) 주석 </a>
<a href="string.html">(8) 문자 </a>
<a href="stringmethod1.html">(9) 문자 메서드1 </a>
<a href="stringmethod2.html">(10) 문자 메서드2 </a>
<a href="escapechar.html">(11) 이스케이프 문자 </a>

</p>

<h1>파이썬 기본</h1>
<p id="men">

<a href="ascii.html">(12) 아스키 문자 </a>
<a href="boolean.html">(13) 분리언 </a>
<a href="number.html">(14) 숫자 </a>
<a href="operator.html">(15) 연산자 </a>
<a href="numtype.html">(16) 숫자 종류 </a>
<br />
<br />
<a href="nummethod.html">(17) 숫자 메서드 </a>
<a href="list.html">(18) 리스트 </a>
<a href="listmethod1.html">(19) 리스트 메서드 1 </a>
<a href="listmethod2.html">(20) 리스트 메서드 2 </a>

</p>

<h1>파이썬 초급</h1>

<p id="men">

<a href="dictionary.html">(21) 딕셔너리 </a>
<a href="dictionarymethod.html">(22) 딕셔너리 메서드 </a>
<a href="tuple.html">(23) 튜플 </a>
<a href="set.html">(24) 집합 </a>
<a href="setmethod.html">(25) 집합 메서드 </a>
<a href="if.html">(26) 조건문 </a>
<br />
<br />
<a href="ifmaster.html">(27) 조건문 마스터하기 </a>
<a href="none.html">(28) None </a>
<a href="function.html">(29) 함수 </a>
<a href="functionhard.html">(30) 더 여려운 함수 내용 </a>
<a href="specialvariable.html">(31) 특별한 변수 </a>

</p>

<h1>파이썬 중급</h1>

<p id="men">

<a href="type.html">(32) 타입 지정</a>
<a href="anonymousfunction.html">(33) 익명 함수</a>
<a href="for.html">(34) for 반복문</a>
<a href="fortype.html">(35) for 반복문 종류</a>
<a href="forfunction.html">(36) for 반복문 함수</a>
<a href="while.html">(37) while 반족문</a>
<a href="oneliner.html">(38) 코드를 한 줄에</a>
<br />
<br />
<a href="etcfunction.html">(39) 더 다양한 함수</a>
<a href="module.html">(40) 모듈 기본</a>
<a href="modulemaster.html">(41) 모듈 마스터하기</a>
<a href="pythonmodule.html">(42) 파이썬 모듈</a>
<a href="date.html">(43) 날짜</a>
<a href="rnadom.html">(44) 랜덤</a>
<a href="regex.html">(45) 정규식</a>

</p>

<h1>파이썬 고급</h1>

<p id="men">

<a href="class.html">(46) 클래서</a>
<a href="math.html">(47) 수학 - 통계</a>

</p>

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
