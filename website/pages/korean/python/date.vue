<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <h2>날짜 모듈 사용 방법?</h2>
        <p>
          날짜는 모듈이어서 먼저 가지고 와야 합니다.<br /><br />

          <code> import datetime </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="https://i.pinimg.com/736x/2e/91/54/2e9154e47f8ee83671518361c96fc1d4.jpg"
          max-width="200px"
        />
      </div>
    </div>

    <Header type="파이썬" num="43" title="날짜" />

    <div>
      <div>
        <h2>지금 시간</h2>
        <p>
          지금 당장 시간을 파이썬으로 통해 알고 싶으면 datetime.datetime.now()를
          사용하면 됩니다.<br /><br />

          'yyyy-mm-dd hh:mm:ss' 형식으로 출력이 됩니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/437df64da8"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>시, 분, 초, 마이크로초</h2>
        <p>
          지금 시, 분, 초와 밀리초를 알고 싶다면 'strftime'이라는 메서드를
          이용하면 됩니다.<br /><br />

          strftime() 안에 '%H'(Hour)을 입력하면 24시간 형태를 가진 지금 시각이
          출력됩니다.<br /><br />

          12 시간 행태를 원한다면 '%I'를 사용하면 됩니다.<br /><br />

          12 시간 행태를 사용한다면 오후인지 오전인지 알기 위하여 '%p'(AM 또는
          PM)을 사용하면 됩니다.<br /><br />

          분은 '%M', 초는 '%S', 마이크로초는 '%f' 입니다
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/b649e0b775"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>요일, 월, 년</h2>
        <p>
          요일 이름은 '%A'를 사용해서 알 수 있습니다. 요일의 이름은 영어로
          출력됩니다(예: Friday).<br /><br />

          June, January와 같이 "%B"는 월 이름을 영어로 출력합니다.<br /><br />

          "%Y"를 사용하면 년을 알 수 있습니다. 2018, 2022과 같이 년의 전체 값을
          출력합니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="hacking" aft="random" />
  </div>
</template>
