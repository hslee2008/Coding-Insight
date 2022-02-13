<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>불리언 연산자</h2>
        <p>
          불리언 연산자에는 총 2가지가 있습니다.<br /><br />

          &&와 ||가 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header type="Rust" title="분리언 연산자" num="17" />

    <QuadSpace />

    <div>
      <div>
        <h2>&&</h2>

        &&는 어떤 두 불리언이 모두 true일 때만 true를 반환합니다.<br /><br />

        그래서 true && true이면 값이 true이고 false && true와 true && false이면
        값이 false입니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%2023%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%2024%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2%20%26%26%20val1%20!%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2%20%26%26%20val1%20%3D%3D%20val2)%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>||</h2>
        ||는 어떤 두 값이 하나라도 true일 때만 true를 반환합니다.<br /><br />

        그래서 true || true이면 값이 true이고 false || true와 true || false여도
        값이 true입니다.<br /><br />

        false || false일 때만 값이 false입니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%2023%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%2024%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2%20%7C%7C%20val1%20%3D%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3E%20val2%20%7C%7C%20val1%20%3D%3D%20val2)%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="cmp-operator" aft="char" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'Boolean',
};
</script>
