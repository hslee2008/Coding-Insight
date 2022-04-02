<template>
  <div>
    <br /><br />

    <div>
      <h2>arr 데이터 형태 메서드</h2>
      <p>
        arr을 다루는 방법을 알아보겠습니다.<br /><br />

        slice라고 arr의 일부분을 잘라낸 것을 의미합니다.<br /><br />

        참고로 arr의 전체도 slice라고 할 수 있습니다.
      </p>
    </div>

    <Header type="Rust" title="배열 메서드" num="23" />

    <div>
      <div>
        <h2>slice 만들기</h2>
        arr 자체를 slice로 사용할 수 있지만 따로 [..]를 사용해서도 만들 수
        있습니다.<br /><br />

        배열에 []를 사용하면 인덱스의 값을 찾을 수 있다고 알아보았었는데 사실
        인덱스 말고도 배열의 두 인덱스 사이에 있는 값들을 찾을 수도 있습니다.<br /><br />

        arr[..]를 사용하면 arr의 시작부터 끝까지를 slice로 사용할 수
        있습니다.<br /><br />

        arr[3..4]처럼 인덱스 값도 따로 넣을 수 있습니다.<br /><br />

        참고로 결과를 출력하기 위해서는 앞에 '&'를 붙여야 합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20let%20s%3A%20%5Bi32%3B%205%5D%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0A%20%20%20%20%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20%26s%5B..%5D)%3B%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20%26s%5B3..5%5D)%3B%0A%7D`"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>swap() 인덱스에 있는 값 바꾸기</h2>

        swap()를 사용하면 인덱스에 있는 값을 바꿀 수 있습니다.<br /><br />

        0, 1이면 첫 번쨰 값과 두 번째 값이 배열에서 위치를 바꿉니다.<br /><br />

        참고로 배열의 값을 바꾸니 mut 형태의 변수를 사용해야 합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20val1%3A%20%5Bf32%3B%205%5D%20%3D%20%5B3.1%2C%203.14%2C%203.141%2C%203.1415%2C%203.14159%5D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20val1.swap(0%2C%201)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20val1)%3B%0D%0A%7D`"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>reverse() 메서드</h2>

        reverse()를 사용하면 배열의 순서를 뒤집어줍니다.<br /><br />

        참고로 배열의 값을 바꾸니 mut 형태의 변수를 사용해야 합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20val1%3A%20%5Bf32%3B%205%5D%20%3D%20%5B3.1%2C%203.14%2C%203.141%2C%203.1415%2C%203.14159%5D%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20val1.reverse()%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EB%92%A4%EC%A7%91%ED%9E%98%3A%20%7B%3A%3F%7D%22%2C%20val1)%3B%0D%0A%7D`"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <Navigation bef="array" aft="type-casting" />
  </div>
</template>
