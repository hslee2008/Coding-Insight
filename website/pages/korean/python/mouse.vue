<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>마우스</h2>
        <p>
          파이썬에서 컴퓨터 마우스를 제어하는 모듈이 있습니다! 장난을 치기 좋은
          모듈같습니다.<br /><br />

          설치하기 위해 다음 커맨드를 터미널에서 실행하세요.<br /><br />

          <code>pip install mouse</code>

          그리고 가지고 오면 됩니다!<br /><br />

          <code>import mouse as m</code>
        </p>
      </div>
      <div class="mx-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvHLIkf7p2IzoQ91r5W7ki5KJoiD4t0oIQQ&usqp=CAU"
        />
      </div>
    </div>

    <QuadSpace />

    <Header type="파이썬" num="89" title="마우스" />

    <QuadSpace />

    <div>
      <div>
        <h2>마우스 클릭</h2>
        <p>
          마우스를 클릭하는 함수 click()을 이용하여 왼쪽 또는 오른쪽 버튼을
          마우스가 있는 자리에서 클릭할 수 있습니다.<br /><br />

          left, right은 왼쪽 오른쪽 버튼인데 가운데 버튼은 무엇일까요? 가운데
          버튼은 스크롤링 버튼을 클릭하는 것을 의미합니다. <kbd>ctrl</kbd> 키를
          누르고 왼쪽 클릭과 같은 것입니다.<br /><br />

          <code>
            m.click("left")<br />
            m.click("right")<br />
            m.click("middle")
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <h2>마우스 위치</h2>
      <p>
        파일을 삭제하려면 os라는 모듈을 사용해야 합니다.<br /><br />

        <code> print(m.get_position()) </code>
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>드래깅</h2>
      <p>
        드래깅은 마우스에 위에 있는 물질을 좌표로 움직이는 행위입니다.<br /><br />

        <code> m.drag(0, 0, 200, 200, duration=3.0) </code>

        위의 커맨드를 지금 실행하면 VSCode 창이 드래깅됩니다.
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>마우스 움직이기</h2>
      <p>
        마우스는 move() 메서드를 움직일 수 있습니다.<br /><br />

        <code> b.move(100, 100, duration=3.0) </code>

        마우스를 오른쪽으로 100, 밑으로 100 움직입니다. 왼쪽 또는 위로 움직이고
        싶다면 음의 정수 숫자를 입력하면 됩니다.
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>스크롤링</h2>
      <p>
        마우스 스크롤링은 scroll() 메서드를 사용하여 위아래로 페이지를 움직일 수
        있습니다.<br /><br />

        <code> m.scroll(-2) </code>

        2 밑으로 스크롤링합니다. 위로 스크롤링하고 싶다면 양의 정수를
        입력하세요.<br /><br />
      </p>
    </div>

    <QuadSpace />

    <NaviBtn bef="matplotlib" aft="turtle" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MousePage',
}
</script>
