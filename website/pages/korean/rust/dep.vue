<template>
  <div>
    <br /><br />

    <h2>Rust 외부 모듈 추가</h2>
    <p>
      외부 모듈을 추가하려면 Cargo.toml 파일에 아래와 같이 추가합니다.<br /><br />

      <code>
        [dependencies]<br />
        regex = "1.5"<br />
      </code>

      그리고 <code class="ic">cargo run build</code>를 실행합니다.
    </p>

    <Header type="Rust" title="외부 모듈" num="39" />

    <h2>extern crate</h2>
    <p>
      extern crate 코드를 실행하면 외부 모듈을 사용할 수 있습니다.<br /><br />

      그리고 원한다면 use를 사용해서 모듈을 사용할 수 있습니다.<br /><br />

      <code>
        extern crate regex;<br />
        use regex::Regex;<br /><br />

        fn main() {<br />
        &nbsp;&nbsp;let re = Regex::new(r"\d+").unwrap();<br />
        &nbsp;&nbsp;let text = "my number is 123";<br />
        &nbsp;&nbsp;println!("{}", re.is_match(text));<br />
        }
      </code>
    </p>

    <Navigation bef="toml" aft="input" />
  </div>
</template>
