<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>숫자 메서드</h2>
        <p>
          Rust의 다양한 숫자 메서드를 알아보겠습니다.<br /><br />

          숫자 메서드를 알면 숫자 데이터를 더 쉽게 처리할 수 있습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header type="Rust" title="숫자 메서드" num="14" />

    <QuadSpace />

    <div>
      <div>
        <h2>pow(), powf(), sqrt()</h2>

        숫자에 pow(x) 메서드를 실행하면 x만큼 그 값을 곱하게 됩니다.<br /><br />

        참고로 x의 값은 소수가 되면 루트의 값도 찾을 수 있습니다. 소수를 넣고 싶으면 powf()를 사용하세요.<br /><br />

        루트(a를 두번 곱했하면 b일 때 b의 루트는 a)를 찾고 싶으면 sqrt()를 사용하세요.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.pow(2))%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20let%20test_integer2%3A%20f32%20%3D%204.0%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer2.powf(0.5))%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer2.sqrt())%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>abs()</h2>

        abs()를 실행하면 -는 없어져서 항상 그 값의 +를 찾습니다.<br /><br />

        -1은 1, -2는 2, -3은 3... 이런 식으로 찾습니다.<br /><br />

        근데 1은 1, 2는 2, 3은 3... 이런 식으로 찾습니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20i32%20%3D%20-4%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.abs())%3B%0D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="numeric-float" aft="boolean" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'NumericPage',
};
</script>
