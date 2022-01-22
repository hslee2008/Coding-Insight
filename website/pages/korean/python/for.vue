<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>for 반복문이란?</h1>
        <p>
          for 반복문이란 반복되는 작업을 매우 효율적이게 맡을 수 있는
          반복문입니다.
        </p>
      </div>
      <div class="display: flex; justify-content: center;">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          max-width="300px"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <QuadSpace />

    <Header num="34" title="For 반복문"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>for 반복문</h1>
        <p>
          for 반복문은 리스트와 함께 사용할 수 있는 반복문입니다.<br /><br />

          for ~ in ~:의 형태로 사용합니다.<br /><br />

          for 뒤에는 임의의 변수 이름을 쓰고 in 뒤에는 이터러블(리스트, 튜플,
          range())의 이름을 씁니다.<br /><br />

          옆의 for 문이 실행될 때는 i 변수에 리스트의 값이 차례대로 들어갑니다.
          예를 들어 1번째 반복에선 a의 첫 번째 값이 i에 들어갑니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/b3dec1798f"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>for + range()</h1>
          <p>
            특정한 개수만큼 반복을 시킬 수도 있습니다.<br /><br />

            바로 range 메서드를 쓰면 됩니다.<br /><br />

            range 메서드는 괄호 안에 쓴 길이 만큼의 리스트를 생성해 줍니다.<br /><br /><br />

            range() 함수에 대한 더 자세한 내용은 조금 뒤 배우겠습니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/dab1cb41c0"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        ></iframe>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>for + else</h1>
          <p>
            조건문에서 공부했던 else를 for과 같이 사용하면 for의 range가 끝나면
            else문 안에 있는 파이썬 코드를 실행합니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/4712475b5d"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        ></iframe>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div style="padding: 10px; border-radius: 5px">
        <div>
          <h1>팁!</h1>
          <p>
            for 반복문은 하나하나 값을 모두 가지고 와서 for 문 안에 있는 코드를
            실행하는 코드여서 매우 느립니다.<br /><br />

            느린 for 반복문을 사용할 때 변수를 미리 지정하고 변수의 이름을 넣는
            것이 더 빠릅니다.<br /><br />

            예를 들어 range(5)을 변수 안에 저장하여 for i in range() 대신 for i
            in (name)를 실행하면 조금 더 빨라집니다.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>반복 중단</h1>
          <p>
            반복을 하다가 중단시킬 수도 있습니다.<br /><br />

            break라는 코드를 사용하면 됩니다.<br /><br />

            break는 반복문(while, for 모두 포함) 내에 들어가면 멈추는 조건을
            만족하지 않아도 반복문을 강제로 중단시킵니다.<br /><br />

            옆에 있는 예시에서는 for 반복문이 0에서 10까지 반복하며 그 수를
            출력합니다. 하지만 만일 수가 5가 된다면 바로 for 반복문을 멈추고
            Done!!!을 출력합니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/9f190d6a4f"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          loading="lazy"
          style="margin: auto"
        ></iframe>
      </div>
    </div>

    <QuadSpace />

    <BeforeNextButton
      flink="anonymousfunction"
      slink="fortype"
    ></BeforeNextButton>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ForPage',
}
</script>
