<template>
  <div>
    <Header type="파이썬" num="39" title="다양한 함수" />

    <div>
      <div>
        <h2>quit()과 exit()</h2>
        <p>
          파이썬 코드가 계속 실행이 될 때가 있습니다.<br /><br />
          예를 들어 코드가 무한으로 실행되는 while 문이나 매우 오래 걸리는 for
          문이 있다고 가정을 해보겠습니다.<br /><br />
          이와 같은 상황을 대비하기 위하여 중간에 프로그램을 멈추는 것이
          가능합니다.<br /><br />
          quit() 대신 exit()을 사용해도 됩니다. quit과 exit은 같습니다.
        </p>
      </div>
      <iframe :src="`${trinket}8b75210243`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>help()</h2>
        <p>
          파이썬에서는 아주 좋은 도움말 프로그램이 있습니다.<br /><br />
          도움 프로그램을 실행하기 위하여 help() 함수를 사용할 수 있습니다.
        </p>
      </div>
      <iframe :src="`${trinket}ea0c810c1a`" width="100%" height="356" />
    </div>

    <Navigation bef="oneliner" aft="module" />
  </div>
</template>
