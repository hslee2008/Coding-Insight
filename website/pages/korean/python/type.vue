<template>
  <div>
    <br /><br />

    <div>
      <Header type="파이썬" num="32" title="타입 지정" />

      <QuadSpace />

      <div>
        <div>
          <h2>타입 지정하기</h2>
          <p>
            사용자가 매개변수와 함수를 만들 때 돌아오는 값과 매개변수의 타입을
            정할 수 있습니다!<br /><br />

            코드
            <code
              >def wowAnd(nextToWow):<br />&nbsp;&nbsp;return "wow " +
              nextToWow</code
            >에서 사용자가 소수로 nextToWow 매개변수의 값을 숫자로 입력할 수
            있습니다.<br /><br />

            이를 방지하기 위하여 다음과 같은 방법이 있습니다.
          </p>
        </div>
        <iframe
          :src="`${trinket}215ca4e0af`"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <h2>어떤 함수가 실행할 수 있는지의 여부를 알기</h2>
          <p>
            가끔 함수의 이름과 변수의 이름을 바꾸어서 생각하여 변수의 이름을
            실행하는 경우도 있습니다. (에러!).<br /><br />

            이 경우를 막기 위하여 어떤 변수가 실행될 수 있는지 알 방법이
            있습니다.<br /><br />

            callable()을 사용하면 어떤 변수를 실행할 수 있는지 알고 다음과 같은
            에러를 방지할 수 있습니다.
          </p>
        </div>
        <iframe
          :src="`${trinket}a5ed372467`"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="specialvariable" aft="lambda" />
  </div>
</template>

<script>
  export default {
    page: 'TypePage',
  };
</script>
