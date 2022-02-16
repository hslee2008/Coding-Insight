<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>타입 바꾸는 방법</h2>
        <p>
          Rust에서 타입을 바꾸는 방법을 알아보겠습니다.<br /><br />

          예를 들면, i32 형태의 숫자를 소수와 나누기 위해서 먼저 f32 또는 f64
          형태로 바꾸어야 합니다.<br /><br />

          그래서 <IC code="&lt;variable> as <new-type>" /> 형태로 바꿔주면
          됩니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-icon x-large>mdi-database-refresh</v-icon>
      </div>
    </div>

    <QuadSpace />

    <Header type="Rust" title="타입 바꾸기" num="24" />

    <QuadSpace />

    <div>
      <div>
        <h2>as 키워드</h2>
        as 키워드를 사용하는 예시를 확인하겠습니다.<br /><br />

        참고로 i와 u 형태는 f로 바꿀 수 있고 그 반대도 가능합니다.<br /><br />

        또한, i, u, f가 String 형태로 바꿀 수 있지만 사실 &str는 i와 f로 바꿀 수
        없고 키랙터를 String으로 바꿀 수 없습니다 (그 반대도 불가능).<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20a%20%3D%2010%3B%0D%0A%20%20%20%20let%20b%20%3D%20(a%20as%20f64)%20%2F%202.0%3B%20%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22a%3A%20%7B%7D%22%2C%20a)%3B%0D%0A%20%20%20%20println!(%22b%3A%20%7B%7D%22%2C%20b)%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="array-method" aft="borrow-dereference" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'TypeCastingPage',
};
</script>
