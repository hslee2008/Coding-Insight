<template>
  <div>
    <div>
      <h2>출력이란?</h2>
      <p>
        출력이란 개발자 또는 사용자가 어떤 정보를 확인하기 위해 컴퓨터 화면에
        나타내는 작업을 뜻합니다.<br /><br />

        예를 들면, 1 + 1의 값을 컴퓨터 화면에 출력할 수 있습니다. (2)<br /><br />

        참고로 콘솔이라는 것은 모든 정보를 출력하는 곳을 뜻합니다.
      </p>
    </div>

    <Header type="Rust" title="출력과 main()" num="4" />

    <div>
      <div>
        <h2>println!()</h2>
        <p>
          *참고로 main()에 대해서는 다음 장에서 알아봅니다.<br /><br />

          println!()는 컴퓨터 화면에 정보를 출력합니다.<br /><br />

          괄호() 안에 원하는 글자를 넣으면 콘솔에 그 값이 나타납니다.
        </p>
      </div>
      <iframe
        :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%2C%20world!%22)%3B%0A%7D`"
        height="400"
      />
      <div>
        <p>
          참고로 위에 있는 화면에서 RUN 버튼을 누르면 코드를 실행하고 직접
          조작할 수도 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>main()이란?</h2>
        <p>
          코딩 언어에서 <code v-highlight class="rust ic">main()</code>이라는 것을 "함수"라고
          부릅니다. <br /><br />

          함수는 나중에 자세히 알아보겠지만 쉽게 코드를 담는 부분이라고 생각하면
          됩니다.<br /><br />

          <code v-highlight class="rust ic">main()</code> 함수는 Rust 코드의 대부분을 담을
          박스입니다.
        </p>
      </div>
      <iframe
        :src="`${playrust}println!(%22Hello%2C%20world!%22)%3B`"
        height="400"
      />
      <div>
        <p>
          이제 위의 코드를 실행하면 에러가 뜹니다. 그 이유는
          <code v-highlight class="rust ic">main()</code> 함수 안에 코드를 넣지 않았기
          때문입니다.
        </p>
      </div>
    </div>

    <Navigation bef="setup" aft="printfmt" />
  </div>
</template>
