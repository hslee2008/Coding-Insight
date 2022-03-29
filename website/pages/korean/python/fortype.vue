<template>
  <div>
    <br /><br />

    <div>
      <Header type="파이썬" num="35" title="반복문 종류" />

      <QuadSpace />

      <div>
        <div>
          <h2>Iterable</h2>
          <p>
            for 반복문을 사용하여 리스트에 있는 아이템을 순환하며 하나씩
            선택하여 사용할 수 있습니다.<br /><br />

            이런 순환이 가능한 변수를 Iterable(이-터-러-블)이라고 합니다.<br /><br />

            옆에 있는 CODE1은 이터러블을 사용한 for 문의 예시입니다.<br /><br /><br />

            CODE2는 for 반복문을 줄인 코드입니다.<br /><br />

            [x for x in range(3)]는 [0, 1, 2]와 같습니다. 첫 번째 있는 값은 각
            아이템의 값이고 첫 번째 다음에는 for 반복문 형태와 같습니다.<br /><br />

            리스트 안에 for 반복문 코드가 있습니다.<br /><br />

            for 키워드 전에는 돌려주는 값이고 그다음은 원래 for 반복문 형태와
            같습니다.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/a532b0eef6"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <div>
            <h2>Generator</h2>
            <p>
              Generator(제너레이터)는 이터러블과 같다고 할 수 있습니다.<br /><br />

              하지만 데이터(예: 튜플)를 만든 후 바로 삭제를 합니다.<br /><br />

              myList를 사용해서 for 반복문을 다시 실행할 수 없습니다.
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/c87eacfde8"
            width="100%"
            height="356"
            loading="lazy"
            class="ma-auto"
          />
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <div>
            <h2>YIELD</h2>
            <p>
              Yield는 return과 비슷한 기능을 가지고 있습니다.<br /><br />

              Yield를 사용하면 매우 효율적이게 작업을 처리할 수 있습니다.<br /><br />

              1. 먼저, 제너레이터 함수를 만듭니다.<br />
              2. 다음에 제너레이터 함수 안에 for 반복문을 넣은 후 yield 키워드를
              사용하여 제너레이터 함수를 사용할 때 되돌려지는 리스트를
              만듭니다.<br />
              3. 변수 안에 되돌려지는 리스트를 만듭니다.<br />
              4. for 반복문을 만듭니다.
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/c9ce2cddc8"
            width="100%"
            height="356"
            loading="lazy"
            class="ma-auto"
          />
        </div>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="for" aft="forfunction" />
  </div>
</template>
