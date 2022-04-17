<template>
  <div>
    <div>
      <div>
        <h2>Some() 데이터 형태</h2>
        Some()은 데이터 형태인데 값을 저장하는 wrapper라고 할 수 있습니다.<br /><br />

        예를 들어, Some(10)은 10을 저장하는 wrapper를 말합니다.<br /><br />

        Some()은 사실 필요 없지만 Rust에서는 에러가 생기면 바로 처치할 수 있기
        때문에 Some()을 사용해서 성공적이면 Some(값)을 반환하고 아니면 에러를
        바로 처치합니다.<br /><br />

        Some()는 나중에 더 자세히 사용하는 방법을 알아보겠습니다.
      </div>
    </div>

    <Header type="Rust" title="if let 문" num="31" />

    <div>
      <div>
        <h2>if let 사용</h2>
        Some(값) 형태의 데이터 또는 wrapper가 있는 데이터는 직접 match로 다루기
        조금 불편합니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20age%20%3D%20Some(7)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20match%20age%20%7B%0D%0A%20%20%20%20%20%20%20%20Some(5)%20%3D%3E%20%7B%20%2F%2F%EC%A1%B0%EA%B8%88%20%EB%B6%88%ED%8E%B8%ED%95%98%EC%A7%80%20%EC%95%8A%EB%82%98%EC%9A%94%3F%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%225%20%EC%82%B4%22)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20Some(11)%20%3D%3E%20%7B%20%2F%2F%EC%A1%B0%EA%B8%88%20%EB%B6%88%ED%8E%B8%ED%95%98%EC%A7%80%20%EC%95%8A%EB%82%98%EC%9A%94%3F%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20println!(%2211%20%EC%82%B4%22)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20_%20%3D%3E%20%7B%7D%2C%0D%0A%20%20%20%20%7D%3B%0D%0A%7D%0D%0A`"
          height="400"
        />

        그래서 wrapper가 있으면 if let을 사용하는 것을 권장합니다.<br /><br />

        아래와 같이 사용하면 됩니다.<br /><br />

        if 다음에 let를 사용해서 새로운 변수를 만드는 형식입니다.<br /><br />

        <iframe
          :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20age%20%3D%20Some(7)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20if%20let%20Some(i)%20%3D%20age%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22%7Bi%7D%22)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A`"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <v-alert dense text type="info" dismissible>
      참고로 while let도 사용할 수 있습니다. 똑같은 원리이고 while문에서
      wrapper를 다루는 방법 중 하나입니다.<br />
      예시: <code class="ic">while let Some(i) = value { }</code>
    </v-alert>

    <Navigation bef="match" aft="function" />
  </div>
</template>
