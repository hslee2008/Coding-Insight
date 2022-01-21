<template>
  <div>
    <br />

    <Header num="68" title="파이썬 데코레이터"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>@mydecorator</h1>
        <p>
          다음과 같은 클래스를 만들어 보겠습니다.<br /><br />

          <code>
            class Teacher:<br />
            &nbsp;&nbsp;def __init__(self, name, subjectTeaching):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.name = name<br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.subjectTeaching = subjectTeaching<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;def name(self):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.name
          </code>

          위의 클래스에서 선생님의 이름을 알기 위하여 name()을 사용해야
          합니다.<br /><br />

          하지만 @property를 사용한다면 name을 사용할 수 있습니다.<br /><br />

          그래서 이 코드를 함수 앞에 넣으면 그 함수는 이제 클래스에서 변수가
          됩니다.<br /><br />

          <code>
            @property def name(self):<br />
            &nbsp;&nbsp; return self.name
          </code>

          그리고 그 값을 바꿀 수도 있습니다.<br /><br />

          <code>
            @name.setter #name 함수의 값을 정하는 새로운 함수를 만들겠습니다<br />
            def name(self, val):<br />
            &nbsp;&nbsp;self.name = val
          </code>

          다음과 같은 코드를 실행할 수 있습니다.<br /><br />

          <code>
            myFavTeacher = Teacher("MR JAY")<br />
            print(myFavTeacher.name)<br />
            myFavTeacher.name = 'MS GOULD'<br />
            print(myFavTeacher.name)
          </code>

          또 값을 지울 수도 있습니다.<br /><br />

          <code>
            @name.deleter def name(self, val):<br />
            &nbsp;&nbsp;print('삭제하겠습니다….)<br />
            &nbsp;&nbsp;del self.name
          </code>
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>@classmethod</h1>
        <p>
          클래스 값을 메서드로 바꿀 수도 있습니다. 하지만 이 코드 뒤에 나오는
          함수에서 self는 항상 __init__() 밖에 있는 변수들입니다.<br /><br />
          그래서 __init__() 안에 있는 변수는 다음 함수에서 존재하지 않습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/25a3cc23d1"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>@staticmethod</h1>
        <p>
          다음에 나오는 함수는 클래스 안에서만 함수 또는 변수를 사용할 수
          있습니다. 만일 클래스 밖에서 사용했다면 에러가 생길 것입니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/916a1d2442"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="decorator" slink="newline"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>

<script>
export default {
  page: 'PythonDecoratorPage',
}
</script>
