<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>소수형 데이터 형태</h2>
        <p>
          저번 페이지에서 Rust 정수 형태에 대해 알아 보았습니다.<br /><br />

          이번에는 정수가 아닌 소수를 사용해 보겠습니다.<br /><br />

          소수는 Rust에서 'f'이고 비트는 32, 64 숫자를 사용합니다.
        </p>
      </div>
      <div class="ma-auto">
        <v-icon x-large>mdi-numeric</v-icon>
      </div>
    </div>

    <Header type="Rust" title="소수형 데이터 형태" num="13" />

    <div>
      <div>
        <h2>floor(), ceil(), round()</h2>

        floor()을 사용하면 소수를 내림하고 ceil()은 올림합니다.<br /><br />

        round()는 가장 가까운 정수를 찾습니다.<br /><br />

        참고로 <code v-highlight class="rust ic">'이름'()</code>의 형태를
        Rust에서는 '메서드'라고 하고 대부분 데이터를 다룰 때 사용합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%20123.123%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.floor())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.ceil())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.round())%3B%0D%0A%7D`"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>trunc(), fract()</h2>

        trunc()를 사용하면 정수 부분만 찾고 소수 부분은 버립니다.<br /><br />

        fract()는 반대로 소수 부분만 찾습니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20f32%20%3D%203.14159%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.trunc())%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20test_integer.fract())%3B%0D%0A%7D`"
          height="300"
        />
      </div>
    </div>

    <Navigation bef="numeric-int" aft="math" />
  </div>
</template>

<script>
  export default {
    name: 'NumericPage',
    data() {
      return {
        datatypes: [
          {
            name: 'u8',
            minmax: '0 ~ 255',
          },
          {
            name: 'u16',
            minmax: '0 ~ 65535',
          },
          {
            name: 'u32',
            minmax: '0 ~ 4294967295',
          },
          {
            name: 'u64',
            minmax: '0 ~ 18446744073709551615',
          },
          {
            name: 'u128',
            minmax: '0 ~ 340282366920938463463374607431768211455',
          },
        ],
        datatypesi: [
          {
            name: 'i8',
            minmax: '-128 ~ 127',
          },
          {
            name: 'i16',
            minmax: '-32768 ~ 32767',
          },
          {
            name: 'i32',
            minmax: '-2147483648 ~ 2147483647',
          },
          {
            name: 'i64',
            minmax: '-9223372036854775808 ~ 9223372036854775807',
          },
          {
            name: 'i128',
            minmax:
              '-170141183460469231731687303715884105728 ~ 170141183460469231731687303715884105727',
          },
        ],
      };
    },
  };
</script>
