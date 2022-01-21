<template>
  <div>
    <br />

    <Header num="67" title="나만의 데코레이터"></Header>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>@mydecorator</h1>
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
    ></iframe>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="decorator" slink="pythondecorator"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>

<script>
export default {
  page: 'MyDecoratorPage',
}
</script>
