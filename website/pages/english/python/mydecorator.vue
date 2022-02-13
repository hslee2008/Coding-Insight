<template>
  <div>
    <QuadSpace />

    <Header num="67" title="My Decorator" />

    <QuadSpace />

    <div>
      <div>
        <h2>@mydecorator</h2>
        <p>
          We can add additional functions before and after a function using
          decorator.
        </p>
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

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MyDecoratorPage',
};
</script>
