<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>What is a for loop?</h1>
        <p>For is a code that you can used with an iterable.</p>
      </div>
      <div class="display: flex; justify-content: center;">
        <v-img
          alt="python-factory-picture"
          class="img-fluid"
          max-width="300px"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en num="34" title="For Loop"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h1>for 반복문</h1>
        <p>
          for 반복문은 리스트와 함께 사용할 수 있는 반복문입니다.<br /><br />

          for ~ in ~:의 형태로 사용합니다.<br /><br />

          for 뒤에는 임의의 변수 이름을 쓰고 in 뒤에는 이터러블(리스트, 튜플,
          range())의 이름을 씁니다.<br /><br />

          옆의 for 문이 실행될 때는 i 변수에 리스트의 값이 차례대로 들어갑니다.
          예를 들어 1번째 반복에선 a의 첫 번째 값이 i에 들어갑니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/b3dec1798f"
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
        <div>
          <h1>For + in</h1>
          <p>
            For is a code that you can used with an iterable.<br /><br />

            Iterable are simpley a group of data types that can be accessed with
            indexing (e.g. lists).<br /><br />

            <code>
              a = [1,2,3,4,5]<br /><br />

              for i in a:<br />
              &nbsp;print(i)
            </code>

            If we run the code above, numbers from 1 to 5 is printed.
          </p>
        </div>
        <iframe
          class="embed-responsive-item"
          src="https://trinket.io/embed/python3/b3dec1798f"
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
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>for + range()</h1>
        <p>
          range() function gives us a range data type between two numbers.<br /><br />

          <code>
            for i in range(10): #0 ~ 9<br />
            &nbsp;print(i)
          </code>
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/4712475b5d"
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
        <div>
          <h1>for + else</h1>
          <p>
            Simlar to else statement in if statements, we can use this with for
            loops.<br /><br />

            If the loop finishes, it runs additional code.<br /><br />

            <code>
              for i in range(10):<br />
              &nbsp;print(i)<br />
              else:<br />
              &nbsp;print(">")
            </code>
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/4712475b5d"
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
    </div>

    <QuadSpace />

    <div>
      <div style="padding: 10px; border-radius: 5px">
        <div>
          <h1>Another Tip!</h1>
          <p>
            Sometimes, for loops can take a long long long time to finish.<br /><br />

            For this ocassions, we have to know how to make for loops faster
            even for a little bit.<br /><br />

            The best way to do is by first storing the iteration data types
            (range) inside a variable and use it in for loops.<br /><br />

            <code>
              for i in range(10):<br />
              &nbsp;print("*" * i)<br /><br />

              a = range(10)<br /><br />

              for i in a:<br />
              &nbsp;print("*" * i)
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>Stop looping</h1>
          <p>
            Using the keyword 'break', we can stop the loop instantly right
            where it is.<br /><br />

            The for loop will stop so other values of i will not be
            considered.<br /><br />

            <code>
              for i in range(10):<br />
              &nbsp;if i == 5:<br />
              &nbsp;break<br />
              else:<br />
              &nbsp;print(i)
            </code>

            Tip: use break as often (but not too much) as the for loop is
            stopped faster than without it.
          </p>
        </div>
        <iframe
          src="https://trinket.io/embed/python3/9f190d6a4f"
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
    </div>

    <QuadSpace />

    <BeforeNextButton flink="anonymousfunction" slink="fortype" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ForPage',
};
</script>
