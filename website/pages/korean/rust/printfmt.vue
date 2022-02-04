<template>
  <div>
    <br />

    <div>
      <div>
        <h1>println!과 다르게 정보를 출력하는 방법</h1>
        <p>
          Rust에서는 println!, print!, eprint!, 그리고 eprintln!을 사용하여
          정보를 출력할 수 있습니다.<br /><br />

          차이를 자세히 알아보겠습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="형식화된 출력" num="5"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>print!()</h1>
        <p>
          <IC code="println!()" />을 사용했을 때는 사실 값을 출력하고 그 다음에
          새로운 줄을 넣습니다.<br /><br />

          예를 들면, <IC code="println!('Hello World')" />를 실행했을 때 Hello
          World가 출력되고 그 다음에 새로운 줄로 넘어갑니다.<br /><br />

          <IC code="print!()" />는 그냥 그 값만 출력합니다.
        </p>
      </div>
      <iframe
        src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%20%22)%3B%0A%20%20%20%20println!(%22World%22)%3B%0A%20%20%20%20%0A%20%20%20%20print!(%22Hello%20%22)%3B%0A%20%20%20%20print!(%22World%22)%3B%0A%7D"
        width="100%"
        height="400"
      />
      <div>
        <p>
          위의 화면에서 <IC code="println!()" />을 사용했을 때는 새로운 줄에
          출력되는 것을 확인할 수 있고 <IC code="print!()" />에서는 같은 줄에서
          출력됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>eprint!()와 eprintln!()</h1>
        <p>
          <IC code="eprint!()" />와 <IC code="eprintln!()" />은
          <IC code="print!()" />와 같지만 에러를 표시할 때 사용합니다.
          <br /><br />

          이 두 코드는 에러가 생길 때 사용하세요.
        </p>
      </div>
      <iframe
        src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20eprint!(%22Error%3A%20System%20Memory%20Overflow%22)%3B%0A%20%20%20%20eprint!(%22Error%3A%20Need%20Sleep%22)%3B%0A%7D"
        width="100%"
        height="400"
      />
    </div>

    <QuadSpace />

    <NaviBtn bef="print" aft="comment" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'RustPrintFormatFMT',
};
</script>
