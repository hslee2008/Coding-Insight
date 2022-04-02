<template>
  <div>
    <br /><br />

    <div>
      <h2>Friend Contact List Verison 2</h2>
      <p>
        This time, we will save all our friends inside a .txt file for later.
      </p>
    </div>

    <Header type="Python" num="Proj: 8" title="Friend List v2" />

    <div>
      <h2>Explanation</h2>
      <p>
        1. We will be improving the
        <NuxtLink :aria-label="allink" to="./contact"
          >previous verison</NuxtLink
        >
        <br /><br />
      </p>
    </div>

    <QuadSpace />

    <h2>Check Code</h2>
    <iframe :src="`${trinket}9e26723d8a`" width="100%" height="356" />

    <Navigation bef="contextmanager" aft="datachange" />
  </div>
</template>

`
