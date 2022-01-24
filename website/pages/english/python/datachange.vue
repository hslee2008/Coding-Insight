<template>
  <div>
    <br />

    <Header-en num="54" title="Data Type Change"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>To List</h1>
        <p>
          To change any kind of data into a list, use the list() function and
          split() method.<br /><br />

          While list() function can be used for any type of data, we can only
          use split() for strings.<br /><br />

          <code>
            a = "abcdefghijklmnop"<br />
            print(list(a))
          </code>

          The split() method will split the string into multiple pieces
          according to the given character.<br /><br />

          <code>
            a = "HelloAWorld."<br />
            print(a.split("A"))
          </code>
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/b8df2e09d4"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    ></iframe>

    <QuadSpace />

    <div>
      <div class="inner-div">
        <h1>To Tuple</h1>
        <p>
          Using tuple(), we can change anything to a tuple.<br /><br />

          If you want to convert a string into tuple, make sure to use split()
          method first then to turn that into a tuple.<br /><br />

          <code>
            a = "Hello! World! My! name! is! Hyunseung"<br />
            print(tuple(a.split("!")))
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/facd314b6c"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>To Number</h1>
        <p>
          To convert to each type of number(int, float, complex), use int(),
          float() and complex() method.<br /><br />

          <code>
            a = "32"<br /><br />

            print(int(a))
          </code>

          Know that if you have a string that contains digits other than
          numbers(e.g. alphabets), running int(), float() or complex() will
          return NaN.<br /><br />

          <code>NaN</code>

          NaN is short for Not a Number.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/cf87c918cc"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>To Boolean</h1>
        <p>
          The only data type boolean can convert is integer.<br /><br />

          bool() function will turn the number into either True or False.<br /><br />

          <code>
            a = 0<br /><br />

            print(bool(a))
          </code>

          0 is False and the rest of the number is True.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/314b0e422c"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      ></iframe>
    </div>

    <QuadSpace />

    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>

    <QuadSpace />

    <BeforeNextButton flink="contact2" slink="stringascode" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'DataChangePage',
  data() {
    return {
      headers: [
        {
          text: 'Data Change',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'How', value: 'how' },
        { text: '(EX)', value: 'example' },
      ],
      items: [
        {
          name: 'List',
          how: 'list(), slpit()',
          example: 'list(a), a.split(" ")',
        },
        {
          name: 'Tuple',
          how: 'tuple()',
          example: 'tuple(a)',
        },
        {
          name: 'Number',
          how: 'int(), float(), complex()',
          example: 'int(a)',
        },
        {
          name: 'Boolean',
          how: 'bool()',
          example: 'bool(a)',
        },
        {
          name: 'String',
          how: 'str()',
          example: 'str(a)',
        },
      ],
    };
  },
};
</script>
