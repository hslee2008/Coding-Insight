<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>struct 구조체</h2>
        <p>
          구조체란 다양한 데이터를 한 형태로 모은 C 언어에서만 존재하는 특별한
          기능입니다.<br /><br />

          예를 들면, '사람'에 대한 정보를 받기 위해서 이름, 나이, 성별 등 다양한
          변수를 먼저 저장해야 합니다.<br /><br />

          하지만 하나하나 다 나열하여 저장하면 비효율적이고 귀찮습니다.<br /><br />

          이 상황에서 구조체 person을 만들고 모든 정보를 person 한 구조체에
          넣으면 됩니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="STRUCT 구조체" num="32" />

    <div>
      <div>
        <h2>구조체 선언</h2>
        <p>
          1. <kbd>struct &lt;struct 이름></kbd> 형태로
          <kbd>&lt;struct 이름></kbd> 대신 구조체 이름을 넣으면 됩니다.<br />
          2. {} 를 입력한 후 안에 필요한 변수를 저장합니다 (예:
          <kbd>char namPer[99]</kbd> 변수)<br />
          3. typedef를 이용해서 나만의 데이터 형태를 만듭니다.
          <kbd>typedef &lt;struct 형태> &lt;struct 이름> name</kbd><br /><br />

          이제부터 Person이라는 구조체 안의 데이터를 한 번에 선언할 수 있어서
          편해집니다.<br /><br />

          또는 name variablename형태를 사용해서 어떠한 변수 하나만 선언도
          가능합니다.<br /><br />

          <code>
            struct Person<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char namPer[99];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char gender; //M - 남자, W - 여자, E -
            기타<br />
            }<br /><br />

            typedef struct Person PersonStruct;<br /><br />

            PersonStruct testing = {"John", 12, "M"};
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47oW"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>struct + typedef = (super_struct)</h2>
        <p>
          struct와 typedef를 같이 사용하면 쉽고 간단하게 super struct를 만들 수
          있습니다.<br /><br />

          <code>
            typedef struct Person<br />
            {<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char namPer[99];<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;char gender; //M - 남자, W - 여자, E -
            기타<br />
            } PersonStruct;
          </code>

          이제 바로 Person을 사용할 수 있습니다.<br /><br />

          이런 방법을 사용하면 더 예쁘게 보입니다.<br /><br />

          <code
            >typedef struct &lt;struct 이름> {변수} &lt;대신 사용할 이름></code
          >
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47p1"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>'.' 사용하기</h2>
        <p>
          .(점)을 사용하면 strcut의 각 변수의 이름을 사용해서 그것의 값을 찾거나
          변경할 수 있습니다.<br /><br />

          <code>
            typedef struct Person<br />
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
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/47p7"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="typedef" aft="pointer" />
  </div>
</template>
