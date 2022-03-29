<template>
  <div>
    <br /><br />

    <div>
      <Header-en type="Python" num="35" title="For Loop Type" />

      <QuadSpace />

      <div>
        <div>
          <h2>Iterable</h2>
          <p>
            A data type that can be accessed through indexing in loops are
            called iterables.<br /><br />

            CODE1 is an example of how we can use iterables inside loops.<br /><br />

            CODE2 is an example of a simple way to store iterables generated
            from for loops.<br /><br />

            It has (storedValue for var in iterable) format and stores the
            result of the for loop inside a variable (myList).<br /><br />

            However, using iterables are not very good if you are handling a lot
            of datas.<br /><br />
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/a532b0eef6"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>

      <QuadSpace />

      <div>
        <div>
          <div>
            <h2>Generator</h2>
            <p>
              Generators are similar to iterables. The only difference is that
              the datas are deleted after running.<br /><br />

              This is why generators are better at handling big dats than
              iterables.<br /><br />

              Using generators preserve more space.
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/c87eacfde8"
            width="100%"
            height="356"
            loading="lazy"
            class="ma-auto"
          />
        </div>
      </div>

      <QuadSpace />

      <div>
        <div>
          <div>
            <h2>YIELD</h2>
            <p>
              Yield has the same function as return.<br /><br />

              1. Firstly, make a generator function<br />
              2. Next, make an iterable and for loop<br />
              3. Use yield to return a value which will be stored inside
              iterable variable<br />
              4. Make a for loop that access each item inside generator function
            </p>
          </div>
          <iframe
            src="https://trinket.io/embed/python3/c9ce2cddc8"
            width="100%"
            height="356"
            loading="lazy"
            class="ma-auto"
          />
        </div>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="for" aft="forfunction" />
  </div>
</template>
