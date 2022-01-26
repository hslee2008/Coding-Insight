<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>던더 메서드란?</h1>
        <p>
          클래스 시간에 __변수 이름 형태인 클래스 변수를 배웠습니다.<br /><br />
          파이썬에서 <mark>__를 함수 이름 앞과 뒤에 붙인 것</mark>을 던더라고
          합니다. 매직 함수라고도 합니다.<br /><br />
          이번 시간에는 다양한 던더 메서드에 대하여 배우겠습니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          src="https://media.istockphoto.com/vectors/magic-wand-line-icon-vector-id1164851035?k=6&m=1164851035&s=612x612&w=0&h=ihapeRsHBDDFTTa7CxId_I5ExnbGrJug8aQEVOOviW4="
          width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header num="80" title="던더메서드"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>__str__() and __repr__()</h1>
        <p>
          1. 내용이 없는 클래스를 만들겠습니다.<br />
          2. 그리고 클래스를 출력하겠습니다.<br /><br />
          하지만 이상한 글씨만 보입니다. 그 글씨는 우리가 만든 Person() 클래스의
          저장된 위치를 담은 정보입니다.<br /><br />
          우리의 목표는 print(a)를 출력했을 때 사용자가 이해할 수 있는 정보를
          출력하는 것입니다.<br /><br />
          __str__을 사용하면 클래스를 출력할 때 대신 출력되는 값을 넣는
          함수입니다.<br /><br />
          __repr__는 repr() 함수를 사용했을 때 대신 출력되는 값을 입력할 수 있는
          던더 메서드입니다. repr()는 문자로 바꾸는 함수입니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/f4dfd29f8c"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>__del__()</h1>
        <p>
          클래스를 삭제하려면 del 키워드를 사용할 수 있습니다.<br /><br />
          파이썬에서 클래스가 삭제되면 실행할 코드를 __del__() 함수 안에 담을 수
          있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/3c64d6b06e"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>__new__()</h1>
        <p>
          new는 새롭다는 뜻으로 파이썬에서는 클래스가 만들어졌을 때 실행이 되는
          코드를 담은 던더 메서드입니다.<br /><br />
          하지만 꼭 new 던더 메서드에 매개변수로 self를 입력해야 합니다.<br /><br />
          "I am created by you!"가 출력이 됩니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/5505e2e889"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <NaviBtn
      flink="requestmethod"
      slink="additionaldundermethod"
     />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'DictionaryMethodPage',
}
</script>
