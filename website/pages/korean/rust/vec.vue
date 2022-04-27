<template>
  <div>
    <h2>Vec</h2>
    <p>
      Vec는 배열인데 매일 값을 넣거나 제거할 때마다 배열의 크기가 변합니다.<br /><br />

      일반 배열은 항상 크기가 정해져 있기 때문에 값을 제거하거나 새롭게 넣을 수
      없습니다.<br /><br />

      Vec는 <code v-highlight class="rust ic">Vec&lt;데이터></code>로 선언할 수 있습니다.
    </p>

    <Header type="Rust" title="백터" num="41" />

    <h2>Vec 사용하기</h2>
    <p>
      vec!라는 매크로를 사용하면 다음에 나오는 배열은 바로 Vec로 선언할 수
      있습니다.<br /><br />

      <code v-highlight class="rust ic">vec![1, 2, 3, 4, 5]</code>

      Vec는 크기가 지정되지 않았기 때문에
      <code v-highlight class="rust ic">.push()</code> 메서드나 <code v-highlight class="rust ic">.pop()</code>를
      사용해 새로운 값을 <mark>끝</mark>에 추가하거나 <mark>끝</mark>의 값을
      제거할 수 있습니다.<br /><br />

      참고로 Vec에 새로운 값을 추가하거나 삭제하기 위해서는 mut 변수여야
      합니다.<br /><br />

      그리고 Vec를 출력하기 위해서는 배열과 같이
      <code class="ic" v-html="'{{ :? }}'" />를 사용해야 합니다.<br /><br />

      <iframe
        :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20mut%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20veccy.push(6)%3B%0D%0A%20%20%20%20veccy.pop()%3B%0D%0A%0D%0A%20%20%20%20println!(%22%7B%3A%3F%7D%22%2C%20veccy)%3B%0D%0A%7D`"
        widt="100%"
        height="300"
      />
    </p>

    <QuadSpace />

    <h2>len() 메서드와 인덱스</h2>
    <p>
      <code v-highlight class="rust ic">len()</code> 메서드를 사용하면 배열의 크기를 알 수
      있습니다.<br /><br />

      그리고 배열처럼 []를 사용해 사이에 숫자를 넣으면 그 인덱스에 있는 값을 알
      수 있습니다.<br /><br />

      그리고 <code v-highlight class="rust ic">iter()</code>르 사용하면 각 아이템을 순서대로
      순회할 수 있습니다.<br /><br />

      마지막으로 iter할 때 값을 바꾸고 싶다면 항상
      <code v-highlight class="rust ic">iter_mut()</code>를 사용하고 반환된 값 앞에 *르 붙여서
      값을 지정하세요.<br /><br />

      <iframe
        :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20println!(%22Vec%EC%9D%98%20%ED%81%AC%EA%B8%B0%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3A%20%7B%7D%22%2C%20veccy.len())%3B%0D%0A%0D%0A%20%20%20%20println!(%22%EC%B2%AB%20%EB%B2%88%EC%A7%B8!%20%7B%7D%22%2C%20veccy%5B0%5D)%3B%0D%0A%0D%0A%20%20%20%20for%20x%20in%20veccy.iter()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22%3E%20%7B%7D%22%2C%20x)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D`"
        widt="100%"
        height="300"
      />
    </p>

    <QuadSpace />

    <h2>enumerate() 메서드</h2>
    <p>
      <code v-highlight class="rust ic">enumerate()</code> 메서드를 사용하면 각 아이템을의
      인덱스와 값이 함께 순회할 수 있습니다.<br /><br />

      (인덱스, 값) 튜플을 순회하면서 인덱스를 출력하고 값을 출력합니다.<br /><br />

      <code v-highlight class="rust">
        for (index, value) in veccy.iter().enumerate() {<br />
        &nbsp;&nbsp;println!("{}에 {}", value, index);<br />
        }
      </code>

      그리고 <code v-highlight class="rust ic">enumerate()</code>를 사용하면
      <code v-highlight class="rust ic">iter()</code>를 먼저 사용해야 됩니다.<br /><br />

      <iframe
        :src="`${playrust}fn%20main()%20%7B%0D%0A%20%20%20%20let%20veccy%3A%20Vec%3Ci32%3E%20%3D%20vec!%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0D%0A%0D%0A%20%20%20%20for%20(index%2C%20value)%20in%20veccy.iter().enumerate()%20%7B%0D%0A%20%20%20%20%20%20%20%20println!(%22%7B%7D%EC%97%90%20%7B%7D%22%2C%20value%2C%20index)%3B%0D%0A%20%20%20%20%7D%0D%0A%7D`"
        widt="100%"
        height="300"
      />
    </p>

    <Navigation bef="input" aft="vec_method" />
  </div>
</template>
