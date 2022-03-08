<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>식별자란?</h2>
        <p>
          식별자는 상자의 형태를 나타내는 것으로, 상자를 바꿀 수 있느냐를
          지정합니다.<br /><br />

          const를 사용하면 값을 바꿀 수 있습니다.<br /><br />

          let은 코드 블록안에서는 모두 사용할 수 있습니다.<br /><br />

          그리고 mut을 따로 추가하면 형태를 나중에 바꿀 수 있다는 것을
          보여줍니다.
        </p>
      </div>
      <div style="margin: auto">
        <CIImage
          src="https://image-loader-coding-insight.web.app/rust-kr/img/code_mut_variable.png"
          max-width="300"
        />
      </div>
    </div>

    <Header type="Rust" title="식별자" num="9" />

    <BasicExpDivWithOneIframe
      heading="immutable과 const의 차이"
      :contents="[
        'immutable과 const는 매우 비슷합니다.',
        '하지만 const는 미리 지정된 \'값\'을 위한 것이고 immutable은 나중에 바꿀 수 있는 \'변수 값\'을 뜻합니다.',
        '그래서 어떤 변수의 값을 다른 변수에 저장하고 싶다면 immutable을 사용하고 아니면 값만 저장하고 싶다면 const를 사용하세요.',
      ]"
      iframe="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20unchangeable%20%3D%20%22I%20cannot%20be%20changed...%22%3B%0A%20%20%20%20let%20new_unchangeable%20%3D%20unchangeable%3B%0A%20%20%20%20%0A%20%20%20%20const%20unchangeable_value%20%3D%203%3B%0A%7D"
    />

    <NaviBtn bef="mutable" aft="scopeshadowing" />
  </div>
</template>
