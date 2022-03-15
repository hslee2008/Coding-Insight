<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>Array Shapes</h2>
        <p>
          We can use the 'shape' property to find the shape of the given
          array.<br /><br />

          Depending on the dimension of array, there will be different number of
          numbers in tuple.<br /><br />

          The first number will be the number of arrays inside array. The second
          will be the number of items in each array(In 2D).<br /><br />

          <code>
            arr = numpy.array([ [1, 2, 3], [4, 5, 6] ])<br /><br />

            print(arr.shape)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/20b4a15af9"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <Header-en type="Python" num="60" title="Array Shape"></Header-en>

    <div>
      <div>
        <h2>Change Array Shape</h2>
        <p>
          We can also format the array into a new shape using the reshape()
          method.<br /><br />

          <code>
            arr = nmpy.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])<br /><br />

            newArray = arr.reshape(2, 5)<br /><br />

            print(newArray)
          </code>

          reshape() will return a newly shaped array.<br /><br />

          We should put in the array shape inside reshape().
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/2143d07d6a"
      width="60%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <Navigation bef="array_type" aft="error" />
  </div>
</template>
