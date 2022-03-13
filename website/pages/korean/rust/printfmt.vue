<template>
  <div>
    <OnlyTextHeading
      heading="println!과 다르게 정보를 출력하는 방법"
      :contents="[
        'Rust에서는 println!, print!, eprint!, 그리고 eprintln!을 사용하여 정보를 출력할 수 있습니다.',
        '차이를 자세히 알아보겠습니다.',
      ]"
    />

    <Header type="Rust" title="형식화된 출력" num="5" />

    <BasicExpDivWithOneIframe
      heading="print!()"
      :contents="[
        'CODE:println!()',
        ' 코드를 사용했을 때 () 사이에 있는 값을 출력하고 그 끝에 새로운 줄을 넣습니다.',
        '예를 들면, Hello World를 출력하기 위해서 다음 코드를 실행할 수 있습니다.',
        'CODE:println!(\'Hello World\');',
        'println! 대신 print!를 사용하면 끝에 새로운 줄이 없고 옆으로 출력됩니다. 그래서 print!를 사용하고 다시 print!를 사용하면 옆에 붙어서 출력됩니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20println!(%22Hello%20%22)%3B%0A%20%20%20%20println!(%22World%22)%3B%0A%20%20%20%20%0A%20%20%20%20print!(%22Hello%20%22)%3B%0A%20%20%20%20print!(%22World%22)%3B%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="eprint!()와 eprintln!()"
      :contents="[
        'CODE:eprint!()',
        'CODE:eprintln!()',
        '코드는 에러 코드를 출력할 때 사용하고 ln을 붙이면 새로운 줄이 끝에 붙여집니다.',
        '개발하며 문제가 생기는 부분을 나에게 eprint!와 eprintln!을 사용해서 알려줄 수 있습니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20eprint!(%22Error%3A%20System%20Memory%20Overflow%22)%3B%0A%20%20%20%20eprint!(%22Error%3A%20Need%20Sleep%22)%3B%0A%7D"
    />

    <NaviBtn bef="print" aft="comment" />
  </div>
</template>
