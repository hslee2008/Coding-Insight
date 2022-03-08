<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>소수형 데이터 형태</h2>
        <p>
          저번 페이지에서 Rust 정수 형태에 대해 알아 보았습니다.<br /><br />

          이번에는 정수가 아닌 소수를 사용해 보겠습니다.<br /><br />

          소수는 Rust에서 'f'이고 비트는 32, 64 숫자를 사용합니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-icon x-large>mdi-numeric</v-icon>
      </div>
    </div>

    <Header type="Rust" title="소수형 데이터 형태" num="13" />

    <BasicExpDivWithOneIframe
      heading="floor, ceil, round 메서드"
      :contents="[
        'floor()을 사용하면 소수를 내림하고 ceil()은 올림합니다.',
        'round()는 가장 가까운 정수를 찾습니다.',
        '참고로 이름()의 형태를 Rust에서는 \'메서드\'라고 하고 대부분 데이터를 다룰 때 사용합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%20123.123%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.floor())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.ceil())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.round())%3B%0D%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="trunc, fract 메서드"
      :contents="[
        'trunc()를 사용하면 정수 부분만 찾고 소수 부분은 버립니다.',
        'fract()는 반대로 소수 부분만 찾습니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%203.14159%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.trunc())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.fract())%3B%0D%0A%7D"
    />

    <NaviBtn bef="numeric-int" aft="math" />
  </div>
</template>
