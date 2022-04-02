<template>
  <div>
    <br /><br />

    <h2>pub 사용하기</h2>
    <p>
      쉽게 모듈 안에 함수를 선언할 때 pub를 fn 전에 붙이면 모듈 밖에서도 활용할
      수 있습니다.
    </p>

    <iframe
      :src="`${playrust}mod%20module_example%20%7B%0D%0A%20%20%20%20pub%20fn%20print_this()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%20%20module_example%3A%3Aprint_this()%3B%0D%0A%7D`"
      width="100%"
      height="300"
    />

    <Header type="Rust" title="pub 사용하기" num="35" />

    <h2>모듈 안에서 함수 사용하기</h2>
    <p>
      module에서 배웠던 print_this 함수는 모듈 안에서만 쓸 수 있고 이런 함수를
      사용하기 위해서...<br /><br />

      self::print_this()를 다른 함수에서 사용하면 됩니다.
    </p>
    <iframe
      :src="`${playrust}mod%20module_example%20%7B%0D%0A%20%20fn%20private_print_this()%20%7B%0D%0A%20%20%20%20let%20a%3A%20i32%20%3D%203%3B%0D%0A%0D%0A%20%20%20%20println!(%22Private%20%ED%95%A8%EC%88%98%20%7Ba%7D%22)%3B%0D%0A%20%20%7D%0D%0A%20%20%20%20%0D%0A%20%20pub%20fn%20print_this()%20%7B%0D%0A%20%20%20%20self%3A%3Aprivate_print_this()%3B%0D%0A%0D%0A%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20module_example%3A%3Aprint_this()%3B%0D%0A%7D`"
      width="100%"
      height="300"
    />

    <QuadSpace />

    <h2>super</h2>
    <p>
      사실 지금까지 코드를 짜고 있던 Rust 파일도 모듈이라고 할 수 있습니다.<br /><br />

      그래서 Rust 파일 안에 모듈을 만들었을 때 (이를 A라고 하면) 그 모듈의 부모
      모듈 (부모 안에 A가 들어감) super::를 사용하면 부모 모듈의 함수/또 다른
      모듈을 상할 수 있습니다.
    </p>
    <iframe
      :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20outer_module%3A%3Ainner_module%3A%3Amy_public_function()%3B%0D%0A%7D%0D%0A%0D%0Amod%20outer_module%20%7B%0D%0A%20%20fn%20my_private_function()%20%7B%0D%0A%20%20%20%20println!(%22Hi%2C%20I%20got%20into%20the%20private%20function%20of%20outer%20module%22)%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20pub%20mod%20inner_module%20%7B%0D%0A%20%20%20%20pub%20fn%20my_public_function()%20%7B%0D%0A%20%20%20%20%20%20println!(%22inner_module%20%EC%95%88%EC%97%90%20%EC%9E%88%EB%8A%94%20my_public_function%20%ED%95%A8%EC%88%98%22)%3B%0D%0A%20%20%20%20%20%20println!(%22%EB%82%98%EB%8A%94%20inner_module%EC%9D%B8%EB%8D%B0%20inner_module%EC%9D%98%20%EB%B6%80%EB%AA%A8%EC%9D%B8%20outer_module%EC%9D%98%20%ED%95%A8%EC%88%98%EB%A5%BC%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4!%22)%3B%0D%0A%0D%0A%20%20%20%20%20%20super%3A%3Amy_private_function()%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D`"
      width="100%"
      height="300"
    />

    <Navigation bef="module" aft="module_outer" />
  </div>
</template>
