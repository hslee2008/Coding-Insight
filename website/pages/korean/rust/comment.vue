<template>
  <div>
    <br />

    <div style="display: flex">
      <div>
        <h2>주석 달기</h2>
        <p>
          주석이라는 것은 프로그램에서 노트를 달고 싶을 때 사용합니다.<br /><br />

          노트라는 것은 사실 프로그래머들이 나중에 알아야 하는 내용, 다른
          프로그래머들이 알아야 하는 것 등 코드가 아닌 사람이 참고할 내용입니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-icon x-large>mdi-message-text-clock</v-icon>
      </div>
    </div>

    <QuadSpace />

    <Header title="주석" num="6"></Header>

    <QuadSpace />

    <div>
      <div>
        <h2>주석 달기 (한 줄)</h2>
        <p>
          <IC code="//" />를 사용하면 그 줄에서 이 다음으로 나오는 모든 글자들은
          다 주석으로 변합니다.<br /><br />

          코드를 실행할 때 다 무시되어서 일부 코드를 없에고 일시적으로 실행하고
          싶다면 주석을 사용하면 됩니다.<br /><br />

          밑 화면에서는 Hello World는 주석이어서 출력이 않되고 Hello, World!만
          출력됩니다.
        </p>
      </div>
      <iframe
        src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20%2F%2Fprintln!(%22Hello%20World%22)%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%0A%7D"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>주석 달기 (블록 줄)</h2>
        <p>
          <IC code="//" />는 그 줄에서 이 다음으로 나오는 모든 글자들은 다
          주석으로 만들지만 <IC code="/**/" />는 /*와 */ 사이를 주석으로
          만들어집니다.<br /><br />
        </p>
      </div>
      <iframe
        src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20%2F*eprint!(%22Error%3F%3F%3F!!!%22)%3B*%2F%0A%20%20%20%20%0A%20%20%20%20print!(%22%EC%9C%84%20%EC%BD%94%EB%93%9C%EB%8A%94%20%EC%8B%A4%ED%96%89%EC%9D%B4%20X%22)%3B%0A%7D"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>주석 달기 (DOC 주석)</h2>
        <p>
          <IC code="///" />와 <IC code="//!" />는 //와 똑같지만
          <a href="https://www.markdownguide.org/basic-syntax/">Markdown</a>
          형식을 지원합니다.<br /><br />

          Markdown이란 그냥 글이 아니라 특별한 스타일을 넣은 글입니다 (예: 글의
          크기, 모양 등)<br /><br />

          <IC code="///" />는 코드 블록(예: main()) 서에서
          <IC code="//!" /> 코드 블록 안에서 사용합니다.<br /><br />

          밑의 예시에서는 main() 안에서 ///를 사용했고 밖에서 //!를
          사용했습니다.
        </p>
      </div>
      <iframe
        src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=%2F%2F%2F%20%23Hello%20World%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20%2F%2F!%20%23Testing%0D%0A%20%20%20%20println!(%22%7B%7D%20can%20support%20%7B%7D%20notation%22%2C%22Doc%20comment%22%2C%22markdown%22)%3B%0D%0A%7D"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="printfmt" aft="variable" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'RustComment',
};
</script>
