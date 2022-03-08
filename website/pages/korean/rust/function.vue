<template>
  <div>
    <QuadSpace />

    <div>
      <h2>함수란?</h2>
      일상생활에서 함수란 input이 있으면 output을 반환하는 것을 말합니다.<br /><br />

      프로그래밍 언어에서는 다양한 함수 종류가 있지만 기본 개념은 똑같습니다.<br /><br />

      정보를 제공하면 함수가 데이터를 조작해서 새로운 값을 돌려주는 것을
      뜻합니다.<br /><br />

      이를 하지 않는 함수는 그냥 코드의 일부를 실행합니다.<br /><br />

      <v-img
        src="https://cloudreports.net/wp-content/uploads/2019/06/Function_machine2.png"
        max-width="300"
      />
    </div>

    <Header type="Rust" title="함수" num="32" />

    <BasicExpDivWithOneIframe
      heading="그냥 코드의 일부인 함수"
      :contents="[
        '첫 번째 함수의 종류는 그냥 코드의 일부를 실행하는 것을 말합니다.',
        '예를 들면, \'Hello World\'를 출력하는 함수는 println!()의 일부만 실행합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20print_hello_world()%3B%0D%0A%20%20%20%20print_hello_world()%3B%0D%0A%20%20%20%20print_hello_world()%3B%0D%0A%7D%0D%0A%0D%0Afn%20print_hello_world()%20%7B%0D%0A%20%20%20%20println!(%22Hello%2C%20World!%22)%3B%0D%0A%7D"
    />

    <BasicExpDivWithOneIframe
      heading="데이터 input과 output"
      :contents="[
        '데이터 input은 함수를 선언한 뒤 () 안에 원하는 데이터의 형태와 이름을 지정하면 나중에 사용할 수 있습니다.',
        'output은 return을 사용해서 값을 반환(돌려)줍니다.',
        '참고로 return을 사용하기 위해서는 () 다음에 ->를 붙이고 돌려주는 데이터 형태를 넣어야 합니다.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20got_this1%3A%20%26str%20%3D%20print_this_to_console(%22This%20is%20crazy!%22)%3B%0D%0A%20%20%20%20let%20got_this2%3A%20%26str%20%3D%20print_this_to_console(%22But%20here%20is%20my%20number%22)%3B%0D%0A%20%20%20%20let%20got_this3%3A%20%26str%20%3D%20print_this_to_console(%22So%20call%20me%20maybe...%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EA%B2%B0%EA%B3%BC%3A%20%7Bgot_this1%7D%2C%20%7Bgot_this2%7D%2C%20%7Bgot_this3%7D%22)%0D%0A%7D%0D%0A%0D%0Afn%20print_this_to_console(to_print%3A%20%26str)%20-%3E%20%26str%20%7B%0D%0A%20%20%20%20println!(%22%7Bto_print%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20return%20to_print%3B%0D%0A%7D"
      :abitwider="true"
    />

    <v-alert dense text type="info" dismissible>
      참고로 함수는 원하는 만큼 반복해서 사용할 수 있습니다! 그래서 반복하는
      코드를 줄일 수 있습니다.
    </v-alert>

    <QuadSpace />

    <NaviBtn bef="for" aft="closure" />
  </div>
</template>
