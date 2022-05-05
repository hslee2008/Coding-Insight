<template>
  <div>
    <div>
      <div>
        <h2>while 문</h2>
        while 문이란 loop 문과 비슷하지만, 조건을 만족할 때만 실행합니다.<br /><br />

        while이라는 키워드 다음에 불리언을 넣어서 불리언이 true일 때 까지
        반복합니다.<br /><br />

        즉, while true는 무한 반복을 말합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20let%20mut%20a%3A%20i32%20%3D%200%3B%0A%20%20%20%20%0A%20%20%20%20while%20a%20%3C%203%20%7B%0A%20%20%20%20%20%20%20%20a%20%2B%3D%201%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20println!(%22a%EC%9D%98%20%EA%B0%92%3A%20%7Ba%7D%22)%3B%0A%20%20%20%20%7D%0A%7D`"
          height="350"
        />
      </div>
    </div>

    <Header type="Rust" title="while 반복문" num="28" />

    <div>
      <div>
        <h2>break와 continue 키워드</h2>
        break를 사용하면 loop에서와 마찬가지로 while 문을 멈춥니다.<br /><br />

        그리고 continue를 사용하면 반복문을 계속하는데 다음 단계 (더 while 문
        코드가 있으면 무시하고 다음으로 while 문 코드로 넘어가기).<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0A%20%20%20%20let%20mut%20a%20%3D%20String%3A%3Afrom(%22Hello%2C%20World%22)%3B%0A%20%20%20%20%0A%20%20%20%20while%20a.len()%20%3C%2020%20%7B%0A%20%20%20%20%20%20%20%20a%20%3D%20String%3A%3Afrom(%22.%22)%20%2B%20%26a%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20if%20a.starts_with(%22.....%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20continue%3B%20%2F%2F5%20%EB%B2%88%EC%A7%B8%EC%97%90%EC%84%9C%EB%8A%94%20%EC%B6%9C%EB%A0%A5%EC%9D%84%20%ED%95%98%EC%A7%80%20%EC%95%8A%EC%9D%8C%3A%20%EB%B0%94%EB%A1%9C%20println%EC%9D%84%20%EB%84%98%EC%96%B4%EA%B0%90.%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20println!(%22%7Ba%7D%22)%3B%0A%20%20%20%20%7D%0A%7D`"
          height="400"
        />
      </div>
    </div>

    <Navigation bef="loop" aft="for" />
  </div>
</template>
