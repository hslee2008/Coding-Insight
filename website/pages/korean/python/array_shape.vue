<template>
  <div>
    <br />

    <OnlyTextHeading
      heading="정렬 모양이란?"
      :contents="[
        '정렬 모양이란 정렬의 길이를 뜻합니다.',
        '예를 들면 정렬 [ [1, 2] , [2, 3] ]는 2개의 정렬 안에 2개의 아이템이 있기 때문에 모양은 (2, 2)입니다.',
      ]"
    />

    <Header type="파이썬" num="60" title="정렬 모양" />

    <BasicExpDivWithOneIframe
      heading="정렬 모양"
      :contents="[
        '정렬의 모양을 알기 위하여 shape라는 것을 쓸 수 있습니다.',
        '이것을 이용하여 정렬의 큰 모양을 알 수 있습니다.',
        'arr.shape을 출력하면 (2, 3) 튜플이 출력됩니다. (2, 3)에서 2란 2-D 정렬을 뜻하고 3은 3개 아이템이 있다는 뜻입니다.',
      ]"
      iframe="https://trinket.io/embed/python3/20b4a15af9"
    />

    <BasicExpDivWithOneIframe
      heading="정렬 모양 바꾸기"
      :contents="[
        '정렬.reshape() 메서드는 새로운 정렬을 되돌려주고 그것을 변수에 저장하는 메서드입니다.',
        '첫 번째 매개변수에는 정렬의 치수를 입력하고, 두 번째 매개변수에는 정렬 아이템의 개수를 입력하면 됩니다.',
      ]"
      iframe="https://trinket.io/embed/python3/2143d07d6a"
    />

    <NaviBtn bef="array_type" aft="error" />
  </div>
</template>
