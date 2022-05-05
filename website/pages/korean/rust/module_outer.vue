<template>
  <div>
    <Header type="Rust" title="모듈 가지고 오기" num="36" />

    <h2>다른 파일에서 모듈 가지고 오기</h2>
    <p>
      main.rs 파일에서 mod.rs 파일에서 선언한 모듈을 가지고 와서 사용하는 방법을
      알아보겠습니다.<br /><br />

      먼저 main.rs 파일과 my_mod.rs 파일을 만들겠습니다.<br /><br />

      그리고 my_mod.rs 파일 안에 pub 함수를 만들고... (참고로 Rust 파일 자체가
      모듈이라고 할 수 있습니다.)<br /><br />

      이제 main.rs 파일 안에 mod 키워드를 사용해서 파일 이름을 넣고
      <code v-highlight class="rust ic">파일이름::함수()</code>를 실행합니다.
    </p>

    <span class="grey--text">main.rs 파일</span>
    <code v-highlight class="rust">
      mod my_mod;<br /><br />

      fn main() {<br />
      &nbsp;&nbsp;println!("main.rs 파일 안에서 my_mode 파일의 함수를
      실행하겠습니다...");<br /><br />

      &nbsp;&nbsp;my_mod::print_this();<br />
      }
    </code>

    <span class="grey--text">my_mod.rs 파일</span>
    <code v-highlight class="rust">
      pub fn print_this() {<br />
      &nbsp;&nbsp;println!("my_mod.rs 파일 안에서!");<br />
      }
    </code>

    <QuadSpace />

    <h2>mod가 가지고 올 파일</h2>
    <p>
      mod file을 실행하면 file이름을 가진 Rust 파일을 가지고 옵니다.<br /><br />

      참고로 mod file은 file.rs라는 파일이 없으면 file이라는 폴더 안의 mod.rs
      파일이 있는지 확인하고 있다면 가지고 옵니다.
    </p>

    <Navigation bef="pub" aft="use" />
  </div>
</template>
