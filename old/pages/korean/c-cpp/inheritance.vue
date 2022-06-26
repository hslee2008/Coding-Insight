<template>
  <div>
    <div>
      <div>
        <h2>계승이란?</h2>
        <p>
          C++ 클래스에서 계승은 어떤 클래스가 다른 클래스의 변수와 메서드를
          계승을 할 때를 뜻합니다.<br /><br />

          <code v-highlight class="cpp">
            class person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            };<br /><br />

            class Hyunseung: public person {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;string name;<br />
            };<br /><br />

            int main()<br />
            {<br />
            &nbsp;&nbsp;Hyunseung myself;<br /><br />

            &nbsp;&nbsp;myself.age = 12;<br />
            &nbsp;&nbsp;myself.name = "Hyunseung";<br /><br />

            &nbsp;&nbsp;return 0;<br />
            }
          </code>

          참고로 계승은 class parentclass: public childclass 형태로 선언하고
          무한으로 계승할 수 있습니다.
        </p>
      </div>
    </div>

    <Header type="C/C++" title="계승" num="15" />

    <div>
      <div>
        <h2>2개 이상 계승</h2>
        <p>
          ':' 다음 <kbd>public 클래스이름</kbd>을 입력하면 두 클래스의 모든
          정보를 받습니다.<br /><br />

          <code v-highlight class="cpp">
            class person_age {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int age;<br />
            };<br /><br />

            class person_name {<br />
            &nbsp;&nbsp;public:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;string name;<br />
            };<br /><br />

            class person: public person_age, public person_name {<br /><br />

            }
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>protected</h2>
        <p>
          private 안에 있는 변수는 계승에서 다른 클래스가 사용할 수 없습니다.<br /><br />

          하지만 protected이라는 access specifier을 사용한다면 밖에서는 사용할
          수 없지만 계승에서는 사용이 가능합니다.<br /><br />

          <code v-highlight class="cpp">
            class person {<br />
            &nbsp;&nbsp;protected:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;int salary;<br />
            }
          </code>
        </p>
      </div>
    </div>

    <Navigation bef="accessspecifier" aft="file-cpp" />
  </div>
</template>
