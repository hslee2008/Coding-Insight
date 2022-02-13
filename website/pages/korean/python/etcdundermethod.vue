<template>
  <div>
    <QuadSpace />

    <Header type="파이썬" num="82" title="기타 던더메서드" />

    <QuadSpace />

    <div>
      <div>
        <h2>숫자 던더 메서드</h2>
        <p>
          <code>
            __neg__()<br />
            __pos__()<br />
            __abs__()<br />
            __invert__() #- 또는 + 또는 ~<br />
            __complex__()<br />
            __int__()<br />
            __float__()<br />
            __index__()<br />
            __round__()<br />
            __trunc__()<br />
            __floor__()<br />
            __ceil__()
          </code>

          위의 던더 메서드는 __없는 함수가 클래스에 실행이 될 때 따로 나만의
          코드를 실행할 수 있게 해주는 던더 메서드입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>연산자 던더 메서드</h2>
        <p>
          <code>
            __radd__(self, a) # +<br />
            __rsub__(self, a) # -<br />
            __rmul__(self, a) # *<br />
            __rtruediv__(self, a) # /<br />
            __rfloordiv__(self, a) # //<br />
            __rmod__(self, a) # %<br />
            __rpow__(self, a) # pow()<br /><br />

            __iadd__(self, a) # 클래스+=av __isub__(self, a) # -=<br />
            __imul__(self, a) # *=<br />
            __itruediv__(self, a) # /=<br />
            __ifloordiv__(self, a) # //=<br />
            __imod__(self, a) # %=<br />
            __ipow__(self, other) # **=<br /><br />

            __lt__(self, other) # &lt;<br />__ge__(self, other) # >
          </code>

          첫 번째는 self이고 두 번째는 클래스 + 연산자 + x 형태에서 x입니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>더 다양한 던더 메서드</h2>
        <p>
          <code>
            __contains__(self, ITEM)<br />
            __reversed__(self)<br />
            __iter__(self)<br />
            __missing__(self, key) # __getitem__()에서 키가 없다<br />
            __delitem__(self, key) # del dict[key]가 실행되면<br />
            __dir__(self, key)<br />
            __delattr__(self, name)<br />
            __setattr__(self, name, value)<br />
            __getattribute__(self, name)<br />
            __bool__(self)
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>__doc__</h2>
        <p>
          함수를 만들 때, 파이썬에서는 맨 위에 한 줄 이상 주석을 달아 그것의
          기능, 매개변수 등을 설명할 수 있습니다.<br /><br />

          그 설명을 __doc__를 사용하여 출력할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/2dc115b16f"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <NaviBtn
      bef="additionaldundermethod"
      aft="atexit"
     />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'EtcDunderMethodPage',
};
</script>
