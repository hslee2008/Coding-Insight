<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>union과 struct</h2>
        <p>
          struct는 데이터의 모음입니다.<br /><br />

          struct는 메모리 안에 나누어서 저장합니다.<br /><br />

          하지만 union는 메모리 안에 모두 저장합니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="UNION" num="35" />

    <div>
      <div>
        <h2>union 선언</h2>
        <p>
          <code>
            union DATA {<br />
            &nbsp;&nbsp;int a;<br />
            &nbsp;&nbsp;char aa;<br />
            }
          </code>

          struct와 형태, '.' 사용은 다 같습니다.<br /><br />

          참고로 struct와 같이 typedef와 같이 사용할 수 있습니다.<br /><br />

          <code>
            typedef union Person<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char namPer[99];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char gender; //M - 남자, W - 여자, E -
            기타<br />
            } PersonStruct;<br /><br />

            PersonStruct data;<br />
            data.age = 12;
          </code>
        </p>
      </div>
      <div class="mx-auto my-auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47Bf"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="usingpointer" aft="void" />
  </div>
</template>
