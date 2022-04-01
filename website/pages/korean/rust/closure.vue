<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>클로져란?</h2>
        클로져는 함수의 또 다른 종류인데 이름이 없는 함수입니다.<br /><br />

        쉽게 말하자면 클로져는 함수를 한 번 사용할 때 이용하는 함수입니다.<br /><br />

        그래서 함수는 다시 원하는 만큼 사용할 수 있지만 클로져는 한 번만 사용할
        수 있습니다.<br /><br />
      </div>
    </div>

    <Header type="Rust" title="클로져" num="33" />

    <div>
      <div>
        <h2>클로져</h2>
        || 사이에 함수 input을 놓고 output은 || 다음에 넣으면 자동으로
        반환됩니다.<br /><br />

        참고로 클로져는 항상 값을 돌려주는 함수입니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20add_num%20%3D%20%7Cn1%3A%20i32%2C%20n2%3A%20i32%7C%20n1%20%2B %20n2%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20add_num(1%2C%201))%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20add_num(1%2C%202))%3B%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20add_num(1%2C%203))%3B%0D%0A%7D%0D%0A`"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="function" aft="module" />
  </div>
</template>
