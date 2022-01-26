<template>
  <div>
    <br />

    <div>
      <div>
        <h1>클래스란?</h1>
        <p>
          여러분, 파일의 템플릿을 만들고 그 템플릿을 복사하여 따로 다른 파일에
          저장하신 적이 있나요?<br /><br />
          클래스는 그 파일의 템플릿과 비슷합니다.<br /><br />
          클래스라는 것은 <mark>데이터의 블루프린트</mark>라고 할 수
          있습니다.<br /><br />
          예를 들어 우리가 어떤 자동차에 대한 정보를 만들고 싶다면 클래스를
          만들어서 무수히 많이 사용할 수 있습니다.<br /><br /><br />
          이제 이 자동차에 대한 정보를 얻기 위하여 new MyCar()라고 객체를 만들
          수 있습니다.<br />
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/725e856cf1"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <br /><br />

    <Header num="46" title="클래스"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>__init__()</h1>
        <p>
          첫 번째 예시는 딕셔너리와 같은 역할을 하고 있습니다.<br /><br />
          하지만 이제 __init__() 함수를 사용하면 딕셔너리와 비슷하게
          <mark>변수를 저장</mark>할 수 있습니다.<br /><br />
          <iframe
            src="https://trinket.io/embed/python3/1b58b7cdc3"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          />
          <br /><br />먼저, 클래스 안에서 def __init__()이라고 선언한 후 안에
          self, name, age, gender 변수를 만들었습니다.<br /><br />
          self는 항상 첫 번째에 있어야 합니다.<br /><br />
          init 함수 안에 sef.name = name 같이 p1.name이라고 할 때 사용하는
          값입니다.<br /><br />
          그래서 우리가 Person()을 선언할 때 첫 번째 값은 name입니다.<br /><br />
          name의 값을 알기 위해서 p1.name을 사용했습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>클래스 안에 함수</h1>
        <p>
          클래스 안에서 함수를 선언하면 항상 그 클래스를 사용할 때 이미 정해진
          함수를 쉽게 다룰 수 있습니다.<br /><br />
          예를 들면, 우리가 Person 클래스에서 그 사람의 이름을 출력하는 함수를
          만들기 위해 Person 클래스 안에 새로운 함수를 만들겠습니다.<br /><br />
          self 매개변수는 항상 존재해야 합니다.<br /><br />
          그 이유는 처음에 선언된 값들이 다 Self 안에 저장되어 있기
          때문입니다.<br /><br />
          이름 'Hyunseung'은 self 안에 딕셔너리와 비슷하게 있어서 self.name을
          사용하여 값을 찾을 수 있습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a1a4151531"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>self (자신!)</h1>
        <p>
          self는 영어로 '자신'을 뜻합니다.<br /><br />
          클래스가 만들어질 때
          <mark>모든 변수는 다 self 안에 저장</mark>합니다.<br /><br />
          self는 클래스 안에 있는 딕셔너리입니다.<br /><br />
          단, init 함수와 모든 클래스에 있는 함수는 만일 클래스의 데이터를
          접근하고 싶다면 다 첫 번째 매개변수가 self의 이름이어야 합니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="regex" slink="classmethod" />

    <QuadSpace />
  </div>
</template>

<script>
  export default {
    name: "ClassPage"
  }
</script>
