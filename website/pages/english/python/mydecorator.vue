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
    <iframe :src="`${trinket}98ddcafe80`" height="356" loading="lazy" />

    <Navigation bef="decorator" aft="pythondecorator" />
  </div>
</template>

<script>
  export default {
    page: 'MyDecoratorPage',
  };
</script>
