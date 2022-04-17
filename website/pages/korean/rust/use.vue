<template>
  <div>
    <h2>use 키워드 사용하기</h2>
    <div>
      use를 사용하면 항상 ::를 사용해서 모듈의 함수 또는 변수를 가져오는 경우를
      생각해 봅니다.<br /><br />

      하지만 모듈의 이름이 길거나 그 모듈의 함수/변수를 자주 사용해야 된다면
      ::를 계속 사용하는 것은 반복적입니다.<br /><br />

      <code>
        mymodule::inner_module::printing::print_this();<br />
        mymodule::inner_module::printing::print_this();<br />
        mymodule::inner_module::input::get_input();
      </code>
    </div>

    <Header type="Rust" title="use 키워드 사용하기" num="37" />

    <h2>각 모듈 아이템을 밖으로 빼기</h2>
    <div>
      use 키워드를 가장 자주 사용하는 경우는 모듈의 아이템을 밖으로 빼는
      경우입니다.<br /><br />

      밖으로 빼면 더이상 모듈 이름을 사용하지 않고 바로 함수 이름만으로도 함수를
      호출할 수 있습니다.<br /><br />

      <iframe
        :src="`${playrust}mod%20printing_module%20%7B%0D%0A%20%20pub%20fn%20print_hello_world()%20%7B%0D%0A%20%20%20%20println!(%22Hello%2C%20World%22)%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%2F%2F%20%EC%9D%B4%EB%A0%87%EA%B2%8C%EB%8F%84%20%EA%B0%80%EB%8A%A5%0D%0A%20%20printing_module%3A%3Aprint_hello_world()%3B%0D%0A%0D%0A%20%20%2F%2F%20%EC%9D%B4%EA%B2%83%EB%8F%84%20%EA%B0%80%EB%8A%A5%0D%0A%20%20use%20printing_module%3A%3A%7B%0D%0A%20%20%20%20print_hello_world%0D%0A%20%20%7D%3B%0D%0A%0D%0A%20%20print_hello_world()%3B%0D%0A%7D`"
        height="450"
      />

      나만의 이름을 지정해서 사용하는 경우는 다음과 같습니다.<br /><br />

      <iframe
        :src="`${playrust}mod%20printing_module%20%7B%0D%0A%20%20pub%20fn%20print_hello_world()%20%7B%0D%0A%20%20%20%20println!(%22Hello%2C%20World%22)%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20%2F%2F%20%EC%9D%B4%EB%A0%87%EA%B2%8C%EB%8F%84%20%EA%B0%80%EB%8A%A5%0D%0A%20%20printing_module%3A%3Aprint_hello_world()%3B%0D%0A%0D%0A%20%20%2F%2F%20%EC%9D%B4%EA%B2%83%EB%8F%84%20%EA%B0%80%EB%8A%A5%0D%0A%20%20use%20printing_module%3A%3A%7B%0D%0A%20%20%20%20print_hello_world%20as%20phw%0D%0A%20%20%7D%3B%0D%0A%0D%0A%20%20phw()%3B%0D%0A%7D`"
        height="450"
      />
    </div>

    <QuadSpace />

    <h2>* 사용하기</h2>
    <div>
      <code class="ic">my_module::{ ... }</code>를 사용하면
      <code class="ic">{}</code> 사이에 아이템 이름을 넣으면 그것을 직접 모듈
      이름 사용하지 않고 호출할 수 있었습니다.<br /><br />

      하지만 아이템이 많이 들어있다면 <code class="ic">{}</code> 사이에 하나하나
      다 넣지 않고 <code class="ic">*</code>를 사용해도 됩니다.<br /><br />

      <iframe
        :src="`${playrust}mod%20printing_module%20%7B%0D%0A%20%20pub%20fn%20print_hello_world()%20%7B%0D%0A%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%0D%0A%20%20%7D%0D%0A%0D%0A%20%20pub%20fn%20do_this()%20%7B%0D%0A%20%20%20%20println!(%22Do%2C%20This!%22)%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Afn%20main()%20%7B%0D%0A%20%20use%20printing_module%3A%3A*%3B%0D%0A%0D%0A%20%20print_hello_world()%3B%0D%0A%20%20do_this()%3B%0D%0A%7D`"
        height="400"
      />
    </div>

    <QuadSpace />

    <h2>범위</h2>
    <div>
      <code class="ic">use</code> 키워드를 사용하면 그 다음에 나오는 모든
      코드에서 모듈 이름을 사용하지 않고 그 아이템을 호출할 수 있습니다.<br /><br />

      그 전에 사용하면 에러가 생깁니다.
    </div>

    <Navigation bef="module_outer" aft="toml" />
  </div>
</template>
