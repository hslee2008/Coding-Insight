<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="https://pbs.twimg.com/media/CSUEf0kUwAAoqFo.png"
          max-width="300px"
        />
      </div>
      <div style="margin: auto">
        <p>
          Rust는 다른 프로그래밍 언어와 달리 매우 "안전하고, 효율적이고, 유용한"
          프로그래밍 언어입니다.<br /><br />

          하지만 Rust는 코딩을 처음 배우는 사람에게는 매우 어렵고 복잡할 수 있기
          때문에
          <a
            href="/korean/python/"
            style="color: yellow"
            >파이썬</a
          >을 먼저 배우는 것을 권장합니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <Header title="Rust" num="1"></Header>

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <div>
          <h1>Rust의 특징</h1>
        </div>
        <p>
          Rust를 설명하기 위해서는 딱 3가지 단어만 필요합니다. "안전, 효율,
          유용"<br /><br />

          Rust는 처음 프로그램을 만들 때 조금이라도 불안하거나 비효율적인 코드를
          자동으로 제거헤서 매우 안전합니다.<br /><br />

          또한, C/C++ 코딩언어처럼 매우 빠르고 메모리 처리 속도가 다른
          프로그래밍 언어와 비교도 않됩니다.<br /><br />

          마지막으로 Rust는 모든 코딩 분야에서 사용할 수 있어서 유용합니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          max-width="300px"
          src="data:image/jpeg;base64,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"
          width="500px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>Rust의 단점</h1>
        </div>
        <div>
          <p>
            Rust는 매우 복잡합니다. 기능도 복잡하고 코드를 짜다보면 코드가
            복잡해 질 수 있습니다.<br /><br />

            또한, 아직 Rust는 다른 언어에 비해 최근에 만들어져서 조금 "어린"
            프로그래밍 언어입니다.<br /><br />

            마지막으로 Rust는 매우 배우기가 어렵습니다. 다른 프로그래밍 언어에
            비해 배워야할 것도 많고 개념도 다른 코딩 언어에서는 없는 것들이
            많습니다.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <NuxtLink to="./install" style="text-decoration: none; float: right">
        <v-btn class="ma-2" outlined>
          Next<v-icon right> mdi-arrow-right-drop-circle </v-icon>
        </v-btn>
      </NuxtLink>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'RustIndexPage',
};
</script>
