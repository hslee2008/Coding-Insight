<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>정수형 데이터 형태</h2>
        <p>
          숫자형 데이터 형태란 숫자를 저장할 수 있는 변수를 뜻합니다.<br /><br />

          숫자형 데이터에는 정수와 소수를 저장가 있습니다.<br /><br />

          정수란 -2, -1, 0, 1, 2 등의 숫자이고 소수는 1/2, 3/4 등 '.'이 포함된
          숫자입니다.
        </p>
      </div>
      <div class="ma-auto">
        <v-icon x-large>mdi-numeric</v-icon>
      </div>
    </div>

    <Header type="Rust" title="정수형 데이터 형태" num="12" />

    <v-card>
      <v-card-title>Unsigned 정수</v-card-title>

      <v-card-text>
        unsigned 정수 변수는 양수만 저장할 수 있는 것을 뜻합니다.<br /><br />

        양수란 0보다 큰 수를 뜻합니다 (예: 1, 2, 3)<br /><br />

        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">데이터 형태 이름</th>
                <th class="text-left">최소값, 최대값</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in datatypes" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.minmax }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>

    <QuadSpace />

    <v-card>
      <v-card-title>i와 u 뒤에 있는 수자의 뜻의 의미는?</v-card-title>

      <v-card-text>
        i와 u 뒤에 8, 16, 32, 64, 128의 뜻은 숫자를 담을 수 있는 메모리의 크기를
        뜻합니다.<br /><br />

        예를 들면, u8은 8비트(2<sup>8</sup>)를 사용하는 메모리를 저장할 수 있는
        변수를 뜻합니다.<br /><br />

        그래서 0을 포함해서 2<sup>8</sup> - 1(255)까지 저장할 수 있습니다.<br /><br />

        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">데이터 형태 이름</th>
                <th class="text-left">최소값, 최대값</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in datatypesi" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.minmax }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>

    <QuadSpace />
    <v-card>
      <v-card-title>MIN, MAX</v-card-title>

      <v-card-text>
        MIN은 최소값을 뜻하고, MAX는 최대값을 뜻합니다.<br /><br />

        <code v-highlight class="rust">(숫자형태)::MIN와 (숫자형태)::MAX</code>

        MIN을 출력하면 숫자형태의 최소값을 출력합니다 (예: i8, i16 등)<br /><br />

        MAX를 출력하면 숫자형태의 최댓값을 출력합니다 (예: i8, i16 등)<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20test_integer%3A%20i8%20%3D%20123%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7Btest_integer%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22i8%EC%9D%98%20%EC%B5%9C%EC%86%8C%EA%B0%92%3A%20%7B%7D%22%2C%20i8%3A%3AMIN)%3B%0D%0A%20%20%20%20println!(%22i8%EC%9D%98%20%EC%B5%9C%EB%8C%93%EA%B0%92%3A%20%7B%7D%22%2C%20i8%3A%3AMAX)%3B%0D%0A%7D%0D%0A`"
          height="300"
        />
      </v-card-text>
    </v-card>

    <Navigation bef="datatypes" aft="numeric-float" />
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
