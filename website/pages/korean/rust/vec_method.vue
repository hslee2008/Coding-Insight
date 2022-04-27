<template>
  <div>
    <Header type="Rust" title="백터 메서드" num="42" />

    <h2>::new() 사용하기</h2>
    <p>
      <code v-highlight class="rust ic"> Vec::new() </code>를 사용하면 백터를
      생성할 수 있습니다.<br /><br />

      new를 사용하면 크기가 0이고 값이 없는 Vec가 만들어집니다.<br /><br />

      <iframe
        :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20vec%20%3D%20Vec%3A%3Anew()%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20vec.push(1)%3B%0D%0A%0D%0A%20%20%20%20println!(%22%7B%7D%22%2C%20vec%5B0%5D)%3B%0D%0A%7D`"
        widt="100%"
        height="300"
      />
    </p>

    <Navigation bef="vec" aft="struct" />
  </div>
</template>
