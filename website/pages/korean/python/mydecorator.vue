<template>
  <div>
    <QuadSpace />

    <Header type="파이썬" num="67" title="나만의 데코레이터" />

    <div>
      <div>
        <h2>@mydecorator</h2>
        <p>데코레이터를 사용하면 나만의 기능을 더 추가할 수 있습니다.</p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/98ddcafe80"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
    />

    <QuadSpace />

    <NaviBtn bef="decorator" aft="pythondecorator" />
  </div>
</template>

<script>
export default {
  page: 'MyDecoratorPage',
};
</script>
