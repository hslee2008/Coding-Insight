<template>
  <div>
    <Header type="Python" num="82" title="Other Dunder Method" />

    <div>
      <div>
        <h2>Operation Dunder method</h2>
        <p>
          <code v-highlight class="python">
            neg__()<br />
            pos__()<br />
            abs__()<br />
            invert__() #- or + or ~<br />
            complex__()<br />
            int__()<br />
            float__()<br />
            index__()<br />
            round__()<br />
            trunc__()<br />
            floor__()<br />
            ceil__()
          </code>

          The dunder method above helps us do operation on each class such as
          '-, +, and abs() and so on'.<br /><br />

          The first parameter is self and second is the number that operates on
          class.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Arithmetic Dunder Method</h2>
        <p>
          <code v-highlight class="python">
            radd__(self, a) # +<br />
            rsub__(self, a) # -<br />
            rmul__(self, a) # *<br />
            rtruediv__(self, a) # /<br />
            rfloordiv__(self, a) # //<br />
            rmod__(self, a) # %<br />
            rpow__(self, a) # pow()<br /><br />

            iadd__(self, a) # class+=av isub__(self, a) # -=<br />
            imul__(self, a) # *=<br />
            itruediv__(self, a) # /=<br />
            ifloordiv__(self, a) # //=<br />
            imod__(self, a) # %=<br />
            ipow__(self, other) # **=<br /><br />

            lt__(self, other) # &lt;= __ge__(self, other) #>=
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Other</h2>
        <p>
          <code v-highlight class="python">
            contains__(self, ITEM)<br />
            reversed__(self)<br />
            iter__(self)<br />
            missing__(self, key)<br />
            delitem__(self, key) # del dict[key] runs<br />
            dir__(self, key)<br />
            delattr__(self, name)<br />
            setattr__(self, name, value)<br />
            getattribute__(self, name)<br />
            bool__(self)
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>__doc__</h2>
        <p>
          If we make a class or function, we can make an explanation for
          that.<br /><br />

          Simply but a multi-line comment at the begging of class and
          function.<br /><br />

          If you print the __doc__ property of that class or function, the
          comment you put will be printed.<br /><br />

          Note that almost every function and class have this explanation and if
          you want to know what it does, use the __doc__ property.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}2dc115b16f`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="additionaldundermethod" aft="atexit" />
  </div>
</template>
