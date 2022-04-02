<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>화살표 키워드란?</h2>
        <p>
          화살표 키워드는 struct와 union(포인터로)의 아이템을 사용할 수 있게
          도와줍니다.<br /><br />

          예를 들면, 먼저 간단한 struct 만들겠습니다.<br /><br />

          <code>
            struct student {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char name[80];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;float percentage;<br />
            };<br /><br />

            struct student* emp;
          </code>
        </p>
      </div>
    </div>

    <Header type="C/C++" title="화살표 키워드" num="42" />

    <div>
      <div>
        <h2>-> 사용하기</h2>
        <p>
          ->는 struct 또는 union의 값을 가지고 오는데 사용합니다.<br /><br />

          '.'와 비슷한데 변수가 포인터일때 사용합니다.<br /><br />

          <code>
            emp = (struct student*)malloc(sizeof(struct student));<br /><br />

            emp->age = 18;<br /><br />

            printf("%d", emp->age);
          </code>
        </p>
      </div>
      <div class="ma-auto">
        <iframe :src="`${jdoodle}47BZ`" width="100%" height="300" />
      </div>
    </div>

    <Navigation bef="error" aft="random" />
  </div>
</template>
