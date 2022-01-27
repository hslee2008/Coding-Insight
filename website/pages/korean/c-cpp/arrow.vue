<template>
  <div>
    <br />

    <div>
      <div>
        <h1>화살표 키워드란?</h1>
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

    <QuadSpace />

    <Header title="화살표 키워드" num="42" />

    <QuadSpace />

    <div>
      <div>
        <h1>-> 사용하기</h1>
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
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47BZ"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="error" slink="random" />

    <QuadSpace />
  </div>
</template>
