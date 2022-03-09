<template>
  <div>
    <Header type="파이썬" num="81" title="추가 던더메서드" />

    <BasicExpDivWithOneIframe
      heading="__call__()"
      :contents="[
        'call을 사용하면 클래스를 함수처럼 실행했을 때 어떤 코드가 대신 사용되어야 하는지 지정할 수 있는 던더 메서드입니다.',
      ]"
      iframe="https://trinket.io/embed/python3/f57619f30e"
      :abitwider="true"
    />

    <BasicExpDivWithOneIframe
      heading="__len__()"
      :contents="[
        'len 던더 메서드가 len() 함수를 클래스에 실행 했을 때 대신 실행할 코드를 넣는 곳입니다.',
      ]"
      iframe="https://trinket.io/embed/python3/686326e052"
      :alotwider="true"
    />

    <BasicExpDivWithOneIframe
      heading="_ 와 __ 차이 (클래스 변수)"
      :contents="[
        '간단한 클래스를 만들겠습니다. 하지만 두 세 번째 매개변수에는 _ & __를 앞에 넣어보겠습니다.',
        '먼저, __이 앞에 붙으면 dir() 메서드를 사용했을 때 보이지 않는 값입니다.',
        '이를테면, 프로그래머가 보면 안 되는 변수들은 다 앞에 __를 붙여서 숨길 수 있습니다.',
        '하지만 _Person__test3 변수는 볼 수 있습니다. 이는 파이썬이 이름을 조작하여 보여주는 가짜 변수입니다.',
        '또한, Person.__test3로 __test3 변수의 값을 가지고 오지 못하지만 Person._Person__test3를 사용하면 변수를 사용하는 것이 가능합니다.',
        '그리고 _는 변수를 숨기지만 이름을 바꾸지는 않을 변수입니다.',
      ]"
      iframe="https://trinket.io/embed/python3/3b038ad255"
    />

    <NaviBtn bef="dundermethod" aft="etcdundermethod" />
  </div>
</template>
