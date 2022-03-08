<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="display: flex; justify-content: center">
        <CIImage
          alt="python-factory-picture"
          class="img-fluid"
          max-width="400px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU78Hj6DPZq_rVh1dyNTc4Lwt_Z05Vr-SRA&usqp=CAU"
        />
      </div>
      <div style="margin: auto">
        <h2>JSON</h2>
        <p>
          JSON이란 JavaScript Object Notation이라고 데이터를 정리하는 형태 중
          하나입니다.<br /><br />
          JSON은 자바스크립트와 대부분 같이 사용되지만 파이썬과도 사용이
          가능합니다.<br /><br />
          JSON을 사용하기 위해서 json이라는 모듈을 가지고 와야합니다. 먼저
          모듈을 불러옵니다.<br /><br />
          JSON은 딕셔너리와 비슷하지만 항상 문자는 "" 안에 있어야하고 문자,
          딕셔너리, 리스트, 튜플, 숫자, 불리언, 그리고 None을 제외한 다른 데이터
          형태 값을 사용하지 못합니다.
        </p>
      </div>
    </div>

    <Header type="파이썬" num="57" title="JSON" />

    <div>
      <div>
        <h2>JSON을 딕셔너리로</h2>
        <p>
          json.loads() 메서드 안에 JSON 데이터 형태를 입력하면 파이썬 딕셔너리로
          전환됩니다.
        </p>
        <iframe
          src="https://trinket.io/embed/python3/0812d9740b"
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
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>딕셔너리를 JSON으로</h2>
        <p>
          파이썬 딕셔너리를 JSON으로 전환하기 위하여 json.dumps() 메서드를
          이용해보겠습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/efb76f8dd2"
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
        <h2>JSON 포맷</h2>
        JSON을 만들 때 다양한 설정이 있습니다.
        <h2>들여쓰기</h2>
        JSON의 들여쓰기의 값도 정할 수 있습니다. 들여쓰기란 TAB의 값을
        말합니다.<br /><br />
        <code> print(json.dumps(someJson, indent=2)) </code>
        <h2>알파벳 순서</h2>
        JSON의 키에서 알파벳 순서대로 배열을 할 수 있습니다.<br /><br />
        <code> print(json.dumps(someJson, indent=2, sort_keys=True)) </code>
        <h2>JSON 표현 방법</h2>
        JSON의 키와 값은 딕셔너리처럼 ':'으로 나눌 수 있습니다.<br /><br />
        JSON에서 키와 값들은 ','로 분류가 됩니다.<br /><br />
        JSON에서 seperator 매개변수를 이용하여 우리만의 표현 방법을
        설정해보겠습니다.<br /><br />
        <code> print(json.dumps(someJson, seperator=(". ", "==>"))) </code>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/efb76f8dd2"
        width="100%"
        height="200"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="pip" aft="array" />
  </div>
</template>

<script>
export default {
  page: 'JsonPage',
};
</script>
