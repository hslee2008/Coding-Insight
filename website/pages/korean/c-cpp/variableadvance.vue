<template>
  <div>
    <br />

    <Header title="변수 - 고급" num="6" />

    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h1>많은 변수를 동시에 선언하는 방법</h1>
        <p>
          C 언어는 변수를 선언할 때 데이터 형태를 앞에 붙여야 합니다.<br /><br />

          하지만 계속 int를 사용하면 조금 반복되는 부분이 많아지고 읽기도
          불편합니다.<br /><br />

          이렇게 다양한 변수가 같은 데이터 형태라면 ','를 사용하고 처음에만
          데이터 형태를 붙이면 됩니다.<br /><br />

          <code> int a = 1, b = 2, c = 3; </code>
        </p>
      </div>
      <div style="margin: auto">
        <v-img
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUanGdzUImXThB9bVOyNzTTtTKrN_6zaP1Rw&usqp=CAU"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>변수 선언 먼저하기</h1>
        <p>
          먼저 상자를 만들고 나중에 아이템을 넣을 수는 없나요? 가능합니다.<br /><br />

          변수를 선언할 떄 값을 입력하지 않고 나중에 필요할 때 넣으면 됩니다.
          참고로 값을 넣지 않으면 변수의 값은 자동으로 0으로 됩니다.<br /><br />

          기억하세요! 변수의 값을 바꾸고 싶으면 데이터 형태를 붙이면 안됩니다!
          만일 붙이면 새로운 변수가 만들어 집니다.<br /><br />

          <code>
            int a;<br />
            a = 1;
          </code>
        </p>
      </div>
      <div>
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VTG"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>변수를 main() 밖에 선언하기</h1>
        <p>
          변수를 main() 밖에 선언하면 파일 안에 있는 모든 곳에서 변수를 사용할
          수 있습니다.<br /><br />

          하지만 main() 안에서 선언했다면 main()에서만 그 변수를 사용할 수
          있습니다.<br /><br />

          상자도 집 안에 넣으면 그 집에서만 사용할 수 있지만 밖에 있다면 모든
          집에서 사용이 가능합니다.<br /><br />

          <code>
            #include &lt;stdio.h><br /><br />

            int a = 6;<br /><br />

            int main()<br />
            {<br />
            &nbsp;printf("%d", a);<br />
            &nbsp;return 0;<br />
            }
          </code>
        </p>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3VTI"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn flink="variable" slink="input" />

    <QuadSpace />
  </div>
</template>
