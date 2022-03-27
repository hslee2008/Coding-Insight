<template>
  <div>
    <Header type="Rust" title="Rust 입력" num="40" />

    <br /><br />

    <h2>입력</h2>
    <p>
      입력이란 사용자가 제공한 값을 의미합니다.<br /><br />

      입력을 받아서 처리하고 변수에 저장하고 이를 사용하는 방법을
      알아보겠습니다.<br /><br />

      입력을 사용하기 위해서 std::io 모듈을 사용해야 됩니다.<br /><br />

      <code>
        use std::io;<br /><br />

        fn main() {<br />
        &nbsp;&nbsp;println!("Please input your guess: ");<br /><br />

        &nbsp;&nbsp;let mut guess = String::new();<br /><br />

        &nbsp;&nbsp;io::stdin()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.read_line(&mut guess)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.expect("Failed to read line");<br /><br />

        &nbsp;&nbsp;println!("You guessed: {}", guess);<br />
        }
      </code>
    </p>

    <QuadSpace />

    <Navigation bef="dep" aft="vec" />
  </div>
</template>
