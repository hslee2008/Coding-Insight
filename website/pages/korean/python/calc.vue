<template>
  <div>
    <br /><br />

    <div>
      <h2>덧셈 계산기 만들기</h2>
      <p>
        이번 시간에는 저번에 배운 숫자와 연산자를 사용해 간단한 덧셈 계산기를
        만들어보겠습니다.<br /><br />

        몰래 이 프로그램을 사용해서 덧셈의 왕처럼 보일 수 있습니다.<br /><br />

        시작하기 전에
        <NuxtLink :aria-label="allink" to="number"> 숫자 </NuxtLink>,
        <NuxtLink :aria-label="allink" to="operator"> 연산자 </NuxtLink>,
        <NuxtLink :aria-label="allink" to="numtype"> 숫자의 종류 </NuxtLink>
        부분을 공부하세요.
      </p>
    </div>

    <Header type="파이썬" title="간단한 계산기 만들기" num="Proj: 3" />

    <div>
      <div>
        <h2>알고리즘</h2>
        <p>
          어떻게 사칙연산 계산기를 만들지 알아보겠습니다.<br /><br />

          1. 먼저, 사용자의 입력을 받아 2 변수 안에 그 숫자를 넣겠습니다.<br />
          2. 아직 그 입력은 문자이기 때문에 먼저 숫자로 바꿀 것입니다
          float().<br />
          3. 더하여 출력하겠습니다/<br /><br />

          참고로 저희는 소수를 더하는 계산기이기 때문에 int()를 사용하지
          않겠습니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmb1a_2sCkKU_ZFxGvyla48iA8hMAjnsmbaA&usqp=CAU"
          width="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-CRGv2pHTjs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>계산기 만들기</h2>
        <p>
          두 숫자 안에 입력을 받겠습니다.<br /><br />

          <code>
            num1 = input("숫자1: ")<br />
            num2 = input("숫자2: ")
          </code>

          float() 메서드를 사용해서 소수로 전환하고 더하겠습니다.<br /><br />

          <code> addnum = float(num1) + float(num2) </code>

          그리고 addnum을 출력하겠습니다.<br /><br />

          <code> print(addnum) </code>
        </p>
      </div>
      <iframe :src="`${trinket}2a317b1dba`" width="100%" height="500" />
    </div>

    <Navigation bef="numtype" aft="nummethod" />
  </div>
</template>
