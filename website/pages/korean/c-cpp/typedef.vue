<template>
  <div>
    <br />

    <div>
      <div>
        <h1>typedef</h1>
        <p>
          typedef를 사용하면 매우 긴 이름을 가진 const unsigned long long int
          이름을 우리가 원하는 이름으로 대신할 수 있습니다.<br /><br />

          이렇게 이름이 매우 길거나 나만의 데이터 형태를 만들 때 typedef를
          사용하면 간단한 이름을 대신 사용할 수 있습니다.<br /><br />

          C 언어에서는 "별병"을 붙인다고 해도 맞습니다.
        </p>
      </div>
    </div>

    <br /><br />

    <Header title="typedef" num="31" />

    <QuadSpace />

    <div>
      <div>
        <h1>typedef 사용하기</h1>
        <p>
          abcdefghij라는 데이터 형태가 있다고 가정해 보겠습니다.<br /><br />

          항상 abcdefghij라고 사용하면 매우 불편하니까 typedef를 사용해 간단히
          만들겠습니다.<br /><br />

          <code> typedef abcdefghij mt; </code>

          이제 abcdefghij 대신 mt를 사용해도 됩니다.<br /><br />

          <kbd>typedef &lt;typename> &lt;namefortypename></kbd>
          형태입니다.<br /><br />

          <span class="badge badge-secondary" style="color: red"
            >또 다른 예시</span
          >
          <code>
            typedef const unsigned long long int culli;<br /><br />

            culli a = 4;
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/44lE"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>장점</h1>
        <p>
          1. 보시다시피 긴 이름을 사용하지 않아도 됩니다!<br />
          2. 한 번에 매우 많은 변수의 값을 바꿀 때 typedef의 데이터 형태만
          바꾸면 됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="storageclass" slink="struct" />

    <QuadSpace />
  </div>
</template>
