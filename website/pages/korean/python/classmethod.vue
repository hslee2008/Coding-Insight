<template>
  <div>
    <br /><br />

    <div>
      <div class="ma-auto">
        <h2>계승이란?</h2>
        <p>
          계승이란 무언가를 밑으로 물려주는 것을 뜻합니다.<br /><br />
          파이썬에서는 클래스의 함수와 변수를 다른 클래스로 옮기는 작업을
          뜻합니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://pbs.twimg.com/profile_images/502406972453289985/AKdzcXPi.png"
          width="300px"
        />
      </div>
    </div>

    <Header type="파이썬" num="47" title="클래스 메서드" />

    <div>
      <div>
        <h2>파이썬에서 계승</h2>
        <p>
          클래스에서도 클래스와 클래스끼리 서로 함수와 변수를 주고받을 수
          있습니다.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}e0b362c25c`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>계승 문제의 해결</h2>
          <p>
            하지만, 문제가 하나 있습니다.<br /><br />
            우리가 Student 클래스에서 init 메서드를 선언했습니다.<br /><br />
            이 선언한 값은 다 Person 클래스에서 name, age, 그리고 gender 값이 다
            없어집니다.<br /><br />
            이를 방지하기 위하여 Person.__init__(python_class, name, age,
            gender)를 init 메서드 안에 넣을 수 있습니다.
          </p>
        </div>
        <iframe
          :src="`${trinket}8e1797ce82`"
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
          <h2>super()</h2>
          <p>super() 함수를 이용하면 매우 더 편리할 수 있습니다.</p>
        </div>
      </div>
    </div>
    <iframe
      :src="`${trinket}e9f98d6de4`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>attribute</h2>
          <p>
            그렇다면 클래스에 있는 attribute(변수들)은 어떻게 바꾸고, 만들고,
            삭제할까요?<br /><br />
            먼저, 변수를 만드는 방법을 알아보겠습니다.<br /><br />
            이미 만들어진 클래스의 변수들을 바꾸는 것이 가능합니다.<br /><br />
            첫 번째 매개변수는 클래스 만들어진 변수 이름이고 두 번째는 변수
            이름이고 세 번째는 변수의 새로운 값입니다.<br /><br />
            클래스의 변수는 클래스 이름.변수이름으로 알 수 있지만 getattr()
            메서드를 사용하는 방법도 있습니다.<br /><br />
            세 번째로, 클래스가 어떤 변수를 가졌는지를 알 수 있는 함수는
            hasattr()을 사용하면 에러를 피할 수 있습니다.<br /><br />
            마지막으로, 클래스의 변수를 삭제할 수 있는 무서운 기능이 있는
            delattr()을 사용하면 변수의 에러를 피하는 것이 가능합니다.
          </p>
        </div>
      </div>
    </div>
    <iframe
      :src="`${trinket}45cfee23ee`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <Navigation bef="class" aft="math" />
  </div>
</template>
