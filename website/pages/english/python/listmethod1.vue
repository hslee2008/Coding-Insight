<template>
  <div>
    <br />

    <Header-en num="19" title="List Method 1"></Header-en>

    <br /><br />
    <div>
      <div>
        <h1>List - Indexing</h1>
          <p>
            You can use indexing to replace the original value of the array with a new one.
          </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a413df3b12" width="100%" height="356" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"/>
    </div>
    <QuadSpace />
    <div>
      <div>
        <h1>insert()</h1>
          <p>
            You can insert a new value at the desired position by using the method called insert().
          </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/d50ab693f8" width="100%" height="356" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"/>
    </div>
    <QuadSpace />
    <div>
      <div>
        <h1>Subtracting a value from a list</h1>
          <p>
            You can use 'remove' to remove the data 'C' from the list. (checkout Code1)<br /><br />

            You can also remove the 'x's value using pop(number) and del keywords. (Code2)<br /><br />

            You can use clear() to remove all values, just like throwing a list in the trash. (Final Code - Code3)
          </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/8ea821b7b4" width="100%" height="356" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"/>
    </div>
    <QuadSpace />
    <div>
      <div>
        <h1>Other</h1>
          <p>
            <h4>Finding the number of occurrences of a value in a list</h4>
            Let's use 'count()' to find the number of occurrences of the value 'blue' in the list. - Code1<br /><br />

            <h4>Finding the index of a list value</h4>
            You can also find the index of a value in a list. Let's find the index of the word 'Poo'. -
            Code2<br /><br />

            <h4>Adding all values ​​in a list</h4>
            You can use the sum() function to find the sum of all numbers in a list. - Code3
          </p>
      </div>
      <iframe class="embed-responsive-item" src="https://trinket.io/embed/python3/7fdd2b43c1" width="100%"
          height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen loading="lazy"
          style="margin:auto;"/>
    </div>
    <QuadSpace />
    <NaviBtn flink="list" slink="listmethod2" />
    <QuadSpace />
  </div>
</template>
<script>
  export default {
     page: 'ListMethod1Page',
  }
</script>
