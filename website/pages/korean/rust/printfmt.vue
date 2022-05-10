<template>
  <div>
    <div>
      <div>
        <h2>println!과 다르게 정보를 출력하는 방법</h2>
        <p>
          Rust에서는 println!, print!, eprint!, 그리고 eprintln!을 사용하여
          정보를 출력할 수 있습니다.<br /><br />

          차이를 자세히 알아보겠습니다.
        </p>
      </div>
    </div>

    <Header type="Rust" title="형식화된 출력" num="5" />

    <div>
      <div>
        <h2>print!()</h2>
        <p>
          <code v-highlight class="rust ic">println!()</code>을 사용했을 때는
          사실 값을 출력하고 그 다음에 새로운 줄을 넣습니다.<br /><br />

          예를 들면,
          <code v-highlight class="rust ic">println!('Hello World')</code>를
          실행했을 때 Hello World가 출력되고 그 다음에 새로운 줄로
          넘어갑니다.<br /><br />

          <code v-highlight class="rust ic">print!()</code>는 그냥 그 값만
          출력합니다.
        </p>
      </div>
      <iframe
        title="Rust Playground"
        :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%20%22)%3B%0A%20%20%20%20println!(%22World%22)%3B%0A%20%20%20%20%0A%20%20%20%20print!(%22Hello%20%22)%3B%0A%20%20%20%20print!(%22World%22)%3B%0A%7D`"
        height="400"
      />
      <div>
        <p>
          위의 화면에서 <code v-highlight class="rust ic">println!()</code>을
          사용했을 때는 새로운 줄에 출력되는 것을 확인할 수 있고
          <code v-highlight class="rust ic">print!()</code>에서는 같은 줄에서
          출력됩니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>eprint!()와 eprintln!()</h2>
        <p>
          <code v-highlight class="rust ic">eprint!()</code>와
          <code v-highlight class="rust ic">eprintln!()</code>은
          <code v-highlight class="rust ic">print!()</code>와 같지만 에러를
          표시할 때 사용합니다. <br /><br />

          이 두 코드는 에러가 생길 때 사용하세요.
        </p>
      </div>
      <iframe
        title="Rust Playground"
        :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20eprint!(%22Error%3A%20System%20Memory%20Overflow%22)%3B%0A%20%20%20%20eprint!(%22Error%3A%20Need%20Sleep%22)%3B%0A%7D`"
        height="400"
      />
    </div>

    <Navigation bef="print" aft="comment" />
  </div>
</template>
