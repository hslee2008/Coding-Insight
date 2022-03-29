<template>
  <div>
    <br /><br />

    <div>
      <h2>조건문</h2>
      <p>
        "너 오늘 보는 시험에서 100점 맞으면 동영상 게임 2시간 할 수 있게 해줄께"
        - 엄마 -<br /><br />
        위의 예시에서 만일 시험 점수가 100 점이라면 게임 2시간을 할 수 있고
        그렇지 않다면 게임을 할 수 없습니다.<br /><br />
        파이썬에서도 어떤 조건에 맞다면 어떤 코드를 실행할 수 있는 기능이
        있습니다.
      </p>
    </div>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/DzDnLTtrDQk"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <Header type="파이썬" title="조거문" num="27" />

    <h2>조건문</h2>
    <p>
      영어로 '만일'은 'if'입니다.<br /><br />

      파이썬에서 조건문 기본 형태는 (if + 조건)과 코드입니다.<br /><br />

      위 코드에 들여쓰기(띄어쓰기)가 된 부분은 if 문 안의 부분입니다.<br /><br />

      만일 파이썬 조건문에서 코드를 들여쓰지 않는다면 에러가 생깁니다.<br /><br />

      그 이유는 파이썬에서 항상 어떤 코드가 조건문 안에 있다면 항상 들여쓰기를
      기준으로 삼고 있기 때문입니다.
    </p>

    <QuadSpace />

    <div>
      <h2>논리연산자</h2>
      <p>
        조건문에서 두 가지 조건을 모두 만족했을 때 실행을 시키고 싶다면, and
        연산자를 이용하면 됩니다 and는 모든 조건이 참일 때만 실행을 시킵니다.
        <br /><br />

        or는 하나라도 참이면 참입니다.<br /><br />

        만일 두 조건 중 하나라도 참이면 어떤 코드를 실행하고 싶다면 or
        논리연산자를 사용하세요.
      </p>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/9e178be286"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>다양한 형태</h2>
        <p>
          if - else 문은 만일 어떤 조건이 맞다면 어떤 코드를 실행하고 그렇지
          않다면 마지막 코드를 실행하는 조건문입니다.
        </p>

        <v-divider />

        <p>
          if - elif는 첫 번째 조건에 맞다면 첫 번째 코드를 실행하고 그렇지
          않다면 다음 조건에 맞는지 확인합니다.<br /><br />

          만일 두 번째 조건에 맞다면 두 번째 코드를 실행하고 그렇지 않다면
          else<br /><br />

          문이 없기 때문에 아무 코드도 실행하지 않고 넘어갑니다.
        </p>

        <v-divider />

        <p>
          if - elif - else는 첫 번째 조건에 맞는 지의 여부를 확인하고 그렇다면
          첫 번째 코드를 실행하고 그렇지 않다면 넘어갑니다.<br /><br />
          그리고 elif 조건이 맞다면 elif 문의 코드를 실행하고 넘어갑니다.<br /><br />
          마지막으로 모든 elif 문의 조건이 맞지 않다면 else 문의 코드를
          실행합니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/4f34d13cdc"
      width="100%"
      height="450"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <Navigation bef="setmethod" aft="ifmaster" />
  </div>
</template>
