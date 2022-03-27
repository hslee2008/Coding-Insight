<template>
  <div>
    <Header type="파이썬" num="41" title="모듈 마스터하기" />

    <div>
      <div>
        <h2>나만의 모듈 만들기</h2>
        <p>
          조금 더 재미있는 프로젝트 하나를 만들어 보겠습니다. 바로 우리만의
          모듈을 만들어서 짝수인지 홀수인지 계산할 수 있는 함수를 만들
          것입니다.<br /><br />

          우리의 모듈 이름을 'OEM'(Odd, Even Module)로 정하려면 파일의 이름은
          'OEM'으로 만들면 됩니다.<br /><br />

          <code>
            #OEM<br />
            def isEven(num):<br />
            &nbsp;return num%2==0<br /><br />

            def isOdd(num):<br />
            &nbsp;return num%2==1
          </code>

          그리고 우리의 중요한 코드를 담을 'main.py' 파일을 만드세요. 그리고
          isEven을 사용하기 위하여 isEven을 가지고 오겠습니다.<br /><br />

          <code>
            #main<br />
            from OEM import isEven<br /><br />

            print(isEven(3)) #False가 출력됩니다
          </code>

          하지만 isEven만 사용이 가능하고 isOdd는 불가능합니다. 그래서 모든
          함수를 가지고 오기 위하여 \*를 사용할 수 있습니다<br /><br />

          <code>
            from OEM import *<br /><br />

            print(OEM.isEven(3)) #False가 출력됩니다<br />
            print(OEM.isOdd(5)) #True가 출력됩니다
          </code>

          하지만 이 방법을 사용하지 마세요! import OEM을 사용하면 더 좋습니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/a487c1d3fb"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>모듈 출판하기</h2>
          <p>
            모듈을 PyPi에 출판이 가능합니다.<br /><br />

            출판하면 전 세계 사람들이 `pip install`을 실행하면 우리의 코드를
            내려받는 것이 가능합니다.<br /><br />

            터미널에 다음과 같은 코드를 실행하세요.<br /><br />

            <code>python filename.py register -r</code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>모듈 - __import__()</h2>
          <p>
            파이썬에서 __import()__ 함수를 사용한다면 모듈을 불러올 수
            있습니다.<br /><br />

            <code> OS = __import__("os") </code>

            나만의 모듈은 모듈 파일의 주소를 적어주면 됩니다.<br /><br />

            <code> myMod = __import__(r"C:\main.py") </code>

            파일의 주소는 VSCode에서 파일에 우클릭하고 Copy path를 누르면 복사할
            수 있습니다.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>모듈 사용할 수 있는 범위</h2>
          <p>
            하지만 모듈을 사용하기 위하여 우리는 우리의 매인 코드를 저장한 곳의
            파일에만 모듈 파일을 저장할 수 있습니다.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="module" aft="pythonmodule" />
  </div>
</template>

<script>
  export default {
    page: 'ModuleMasterPage',
  };
</script>
