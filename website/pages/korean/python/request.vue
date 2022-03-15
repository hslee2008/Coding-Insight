<template>
  <div>
    <br /><br />

    <div
      style="display: flex; padding: 10px; border-radius: 5px"
      class="img-div"
    >
      <div>
        <h2>리퀘스트란?</h2>
        <p>
          '물을 리퀘스트하다'라고 할 때 리퀘스트는 '요구하다'를 의미합니다.<br /><br />
          리퀘스트는 파이썬에서 웹에 있는 정보를 가지고 오는 모듈의
          이름입니다.<br /><br />
          온라인상에서 원하는 데이터를 리퀘스트하는 것이 가능합니다.<br /><br />
          예를 들어 온라인에 올려진 유명한 사람의 생일 JSON 파일을 파이썬
          프로그램에서 가지고 와서 사용할 수 있습니다.
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <GlobalImage
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxLF2l2sITXnde-o9OyhTjoPeWHCWLrC2Ry2-FlQVH-aDSQPE1kh02OMA1yT_Yeui3LM&usqp=CAU"
        />
      </div>
    </div>

    <Header type="파이썬" num="78" title="리퀘스트" />

    <div>
      <div>
        <h2>간단한 리퀘스트하기</h2>
        <p>
          온라인에서 https://api.github.com/events 데이터를 요청하여 JSON
          데이터를 변수 안에 저장하겠습니다.<br /><br />
          GET은 HTTP 메서드로 HTTP에 있는 데이터를 가지고 오는 방법의
          하나입니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a8fbf8fda2"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>PARAMS</h2>
        <p>
          GMAIL에 로그인할 때 처음으로 뜨는 스크린의 URL은 다음과 같습니다.<br /><br />
          https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin<br /><br />
          accounts.google.com/signin/v2/indentifier? 링크에서 continue =
          https%3A%2F%2Fmail.google.com%2Fmail%2F, service = mail이고 sacu=1,
          ripe = 1, flowName = GlifWebSignIn, 그리고 flowEntry = ServiceLogin이
          있습니다.<br /><br />
          그리고 indentifier? 뒤에 있는 데이터가 다 딕셔너리로 표현이 될 수
          있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/3f896f4b27"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>리스폰스</h2>
        리퀘스트를 하여 돌아오는 값을 반응이라고 합니다.<br /><br />
        반응은 다양한 포맷이 있을 수 있습니다. JSON 파일일 수 있고 HTML 파일 일
        수도 있습니다.
        <h2>TEXT</h2>
        문자로 전환은 text 키를 이용하여 새로운 변수 안에 저장할 수 있습니다.
        <h2>ENCODING</h2>
        데이터를 가지고 오며 ASCII에 존재하지 않는 문자가 있어서 문제가 발생할
        수 있습니다.<br /><br />
        반응.encoding의 형태로 encoding의 값을 알 수 있고 지정하는 것이
        가능합니다.
      </div>
      <iframe
        src="https://trinket.io/embed/python3/4751110c8f"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>카운터 값 빼기</h2>
        <p>
          카운터 2개로 값을 빼서 새로운 카운터를 저장할 수 있습니다.<br /><br />
          하지만 어떤 아이템의 수가 음의 정수가 될 수 있습니다.<br /><br />
          물건이 0보다 적게 있다는 것이 말은 되지 않지만 파이썬 카운터에서는
          가능합니다.<br /><br />
          <code>
            a = Counter(a = 4, b = 5) b = Counter(a = 6, b = 9)
            print(a.subtract(b))
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="counter" aft="requestmethod" />
  </div>
</template>

<script>
export default {
  page: 'RequestPage',
};
</script>
