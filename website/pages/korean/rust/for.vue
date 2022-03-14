<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>for 문</h2>
        for 반복문은 while 반복문과 다르게 배열의 하나하나를 새로운 변수에
        저장합니다.<br /><br />

        쉽게 말하면, 배열을 0번째부터 끝까지 i라는 변수 안에 저장해서 코드를
        실행하고 다음의 배열 값을 다시 i 안에 저장하고 이 작업을 반복합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20for%20i%20in%200..5%20%7B%0D%0A%20%20%20%20%20%20println!(%22%7B%7D%22%2C%20i)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D"
          width="100%"
          height="300"
        />

        <br /><br />

        0..5는 0부터 5까지 숫자를 나타냅니다. i의 값은 0부터 5까지 반복합니다.
      </div>
    </div>

    <Header type="Rust" title="for 반복문" num="29" />

    <div>
      <div>
        <h2>enumerate() 사용하기</h2>
        이번에는 enumerate() 함수를 사용해서 배열의 값과 인덱스를 함께
        출력합니다.<br /><br />

        (a..b).enumerate()를 실행하면 2개의 값 (count, i)의 값을 반환합니다.<br /><br />

        <h3>예제</h3>
        5..10까지의 범위에서 for 반복문을 실행하면 counter의 값은 0부터
        5까지(for 반복문 실행한 수) 그리고 i의 값은 0부터 5까지 각각의
        인덱스(5부터 10)를 나타냅니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20for%20(count%2C%20i)%20in%20(5..10).enumerate()%20%7B%0D%0A%20%20%20%20%20%20println!(%22count%20%3D%20%7B%7D%2C%20i%20%3D%20%7B%7D%22%2C%20count%2C%20i)%3B%0D%0A%20%20%7D%0D%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <v-alert dense text type="info" dismissible>
      참고로 for 반복문과 while 반복문에도 이름을 붙일 수 있습니다. 더 자세한
      내용은 <NuxtLink to="/korean/rust/loop#label">for 반복문</NuxtLink>에서
      확인하세요.
    </v-alert>

    <QuadSpace />

    <NaviBtn bef="while" aft="function" />
  </div>
</template>
