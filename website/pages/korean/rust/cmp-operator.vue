<template>
  <div>
    <OnlyTextHeading
      heading="비교 연산자"
      :contents="[
        '비교 연산자란 두 값을 비교하는 작업을 하는 연산자입니다.',
        '비교 연산자에는 >, &lt;, ==, !=, >=, &lt;= 이 있습니다.',
        '참고로 비교 연산자는 숫자 값에만 사용할 수 있습니다.',
      ]"
    />

    <Header type="Rust" title="비교 연산자" num="16" />

    <BasicExpDivWithOneIframe
      heading=">, &lt;, >=, &lt;= 비교 연산자"
      :contents="[
        '>는 왼쪽 숫자가 더 크면 true이고 &lt;는 오른쪽 숫자가 더 크면 true입니다.',
        ' >=는 왼쪽 숫자가 크거나 같으면 true이고 &lt;=는 오른쪽 숫자가 크거나 같으면 true입니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%203%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3E%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3E%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3C%3D%20val2)%3B%0D%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="==와 !="
      :contents="[
        '대부분 프로그래밍 언어에서 변수가 있어서 변수의 값을 지정할 때 =를 사용하기 때문에 값이 같은지 비교할 때는 ==를 사용합니다.',
        '값이 다른지 비교할 때는 !=를 사용합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20val1%3A%20i32%20%3D%203%3B%0D%0A%20%20%20%20let%20val2%3A%20i32%20%3D%204%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20%3D%3D%20val2)%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20val1%20!%3D%20val2)%3B%0D%0A%7D"
    />

    <NaviBtn bef="boolean" aft="boolean-operator" />
  </div>
</template>
