document.querySelector("#topnav").innerHTML = `
  <div class="topnav"><a class="active" href="home.html">홈</a></div>
  <div>
    <button id="toggle" onclick="
      if (document.querySelector('#contents').style.display!='none') {
        document.querySelector('#contents').style.display='none'
      } else {
        document.querySelector('#contents').style.display = 'block'
      }">메뉴</button>
      <div id="contents" style="display:none;">
        <h2>파이썬 강좌</h2>
        <div id="chapt">
          <h3>파이썬 시작</h3>
          <p><a href="home.html">파이썬의 정의</a></p>
          <p><a href="파이썬 정의.html">파이썬 다운로드와 사용 방법</a></p>
          <p><a href="파이썬 입출력.html">파이썬 입출력</a></p>
        </div>
      </div>
  </div>
`
