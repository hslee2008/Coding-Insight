<template>
  <div>
    <Header num="67" title="My Decorator" />

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
      loading="lazy"
    />

    <QuadSpace />

    <Navigation bef="decorator" aft="pythondecorator" />
  </div>
</template>

<script>
  export default {
    page: 'MyDecoratorPage',
  };
</script>
