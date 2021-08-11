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

<br /><br /><br /><br />

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

<br /><br /><br /><br />

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

<br /><br /><br /><br />

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

<br /><br /><br /><br />

<h1>파이썬 고급</h1>

<p id="men">

<a href="class.html">(46) 클래서</a>
<a href="classmethod.html">(47) 클래서 메서드</a>
<a href="math.html">(48) 수학 - 통계</a>
<a href="file.html">(49) 파일 다루는 작업</a>
<a href="filereading.html">(50) 파일 읽기</a>
<a href="filewriting.html">(51) 파일 쓰기</a>
<a href="etcfile.html">(52) 파일 만들기, 삭제하기, encoding</a>
<a href="contextmanager.html">(53) 컨텍스트 매니저</a>
<a href="datachange.html">(54) 데이터 형태 바꾸기</a>
<a href="stringascode.html">(55) 문자를 코드처럼 실행하기</a>
<a href="pip.html">(56) PIP</a>

</p>

<br /><br /><br /><br />

<h1>파이썬 고수</h1>

<p id="men">

<a href="json.html">(57) JSON</a>
<a href="array.html">(58) 정렬</a>
<a href="arraytype.html">(59) 정렬 종류</a>
<a href="arrayshape.html">(60) 정렬 모양</a>
<a href="error.html">(61) 예외 처리</a>
<a href="error2.html">(62) 에러</a>
<a href="logging.html">(63) 로깅</a>
<a href="mapandreduceandfilter.html">(64) map & reduce & filter</a>
<a href="zlib.html">(65) ZLIB</a>
<a href="decorator.html">(66) 데코레이터</a>
<a href="mydecorator.html">(67) 나만의 데코레이터 만들기</a>
<a href="pythondecorator.html">(68) 파이썬 데코레이터</a>

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
