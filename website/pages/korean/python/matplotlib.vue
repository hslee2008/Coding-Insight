<template>
  <div>
    <br />

    <div>
      <div>
        <h1>mathplotlib</h1>
        <p>
          mathplotlib = math + plot + libarary<br /><br />
          matplotlib는 수학과 그래프를 다루는 파이썬 모듈입니다.<br /><br />
          matplotlib는 모듈이이어서 먼저 가지고 와야합니다.<br /><br />
          <code>
          import matplotlib
          </code>
          matplotlib의 버전을 출력하기 위하여 다음과 같은 방법을 사용할 수 있습니다.
          <code>
          print(matplotlib.__version__)
          </code>
        </p>
      </div>
      <iframe
src="https://trinket.io/embed/python3/3e28c18725" width="100%" height="356" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>
    </div>

    <br /><br />

    <Header title="Matplotlib" num="88"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>그래프 그리기</h1>
        <p>
          matplotlib에서는 리스트를 이용하여 함수의 정의역과 치역을 계산합니다.<br /><br />
          정의역은 x의 값들이고 치역은 y의 값들입니다.<br /><br />

          <code>
            import matplotlib.pyplot as plt<br /><br />

            plt.plot([1, 10], [1, 10])<br />
            plt.show()
          </code>

          pyplot은 matplotlib 모듈의 또 다른 모듈입니다. pyplot은 Python + plot입니다. plt.show()는 그래프를 보여줍니다.<br /><br />

          점을 만들기 위하여 plot 메서드의 세 번째 매개변수로 문자를 입력하면 됩니다. 'x'도 되고 'o'도 됩니다.<br /><br />

          <h2>정리</h2>
        <hr>
        1차 방정식: 리스트 안에 수 2개<br />
        2차 방정식: 3개<br />
        ...<br />
        n차 방정식: n+1개<br />
        </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/40b5ec6e62" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

        <div>
          <h1>마커</h1>
          <p>
          <h3>marker</h3>
          <p>matplotlib에서의 마커는 그래프가 꺽이는 부분에 점을 넣을 수 있습니다.</p>
          <p><code>
            plt.plot([1, 10, 30], [1, 10, 20], marker="x")
            </code>
          </p>
          <p>marker 매개변수로 문자를 넣을 수 있습니다.</p>
          <h3>문자 fmt</h3>
          <p>그래프의 마커, 선, 그리고 색을 정하기 위하여 다음과 같은 방법을 사용할 수 있습니다.</p>
          <p>첫 번째는 마커의 모양입니다.
            두 번째는 그래프 선의 모양입니다. (: 점선, - 선, --줄선, -. 줄/점 선)
            세 번째는 그래프의 색깔입니다. (색깔의 첫 번째 색깔)
          </p>
          <p><code>
            plt.plot([1, 10, 20], [1, 24, 44], 'o:r')
            </code>
          </p>
          <h3>마커 크기</h3>
          <p>마커의 크기는 매개변수 ms에 수를 입력하면 됩니다.</p>
          <p><code>
            plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30)
            </code>
          </p>
          <h3>마커 윤곽선</h3>
          <p>마커의 윤곽선은 mec를 이용하여 지정할 수 있습니다.</p>
          <p><code>
            plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r')
            </code>
          </p>
          <p>mec는 marker + edge + color의 약자입니다.</p>
          <h3>마커 색깔</h3>
          <p>마커의 색깔은 mfc (marker + face + color)로 설정할 수 있습니다.
            <code>
            plt.plot([1, 10, 20], [1, 24, 44], marker = "o", ms = 30, mec = 'r', mfc = 'g')
            </code>
          </p>
          </p>
        </div>
    <iframe
src="https://trinket.io/embed/python3/6d6b423f37" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>선</h1>
          <p>
          <h2>선 스타일</h2>
          선의 스타일을 정할 수 있는 방법을 알아보겠습니다.<br /><br />
          선의 스타일로 linestyle 매개변수에 dotted, dotted, dashed, None, dashdot, solid를 사용할 수 있습니다. linestyle은 ls로도 사용할 수
          있습니다.<br /><br />
          <code>
          plt.plot([1, 10, 20], [1, 24, 44], linestyle = 'dashed')
          </code>
          <h2>선 폭</h2>
          선의 폭은 linewidth 또는 lw로 설정할 수 있습니다.<br /><br />
          <code>
          plt.plot([1, 4, 5], [1, 4, 6], linewidth = '3.14159')
          </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>레이블과 제목</h1>
          <p>
            x 쪽이 무엇인지 사용자에게 알려주어야합니다. 시간일 수도 있고 값일 수도 있습니다.<br /><br />
            <code>
            plt.xlabel("Time (h)")<br />
            plt.ylabel("Money (w)") </code>
            그래프의 제목은 title() 메서드를 사용할 수 있습니다.<br /><br />
            <code>
            plt.title("Money spent") </code>
            그래프 제목의 스타일과 위치를 바꾸기 위하여 다음과 같은 방법을 사용할 수 있습니다.<br /><br />
            <code>
            font1 = {<br />
            'family': "serif",<br />
            'color': "black",<br />
            'size': 30<br /><br />
            }<br />
            plt.title("Money spent", fontdict = font1)
            </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>scatter</h1>
          <p>
            점을 여러개 만들고 싶다면 scatter 메서드를 사용할 수 있습니다.<br /><br />
            scatter는 영어로 '튀다'라는 뜻을 가지고 있지만 '퍼져있다'라는 뜻고 가지고 있습니다.<br /><br />
            <code>
            plt.scatter([0, 1, 2, 3, 4, 5], [0, 10, 20, 30, 40, 50])<br />
            plt.show() </code>
            매개변수는 다음이 전부입니다.<br /><br />
            1. color = "color" --- 점의 색깔<br />
            2. c = ["red", "green"] --- 하나하나 점 색칠하기<br />
            3. s = [1, 2, 4] --- 사이즈<br />
            4. alpha = 0.5 --- 투명도 (0~1)
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h1>historgrams</h1>
          <p>
            historgrams는 통계에 자주 사용되는 그래프의 종류입니다. 바와 비슷하지만 붙어있습니다.<br /><br />
            historgrams는 hist() 메서드를 사용할 수 있습니다.<br /><br />
          </p>
        </div>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/c4218ab83d" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <div>
      <div>
        <div style="padding: 10px;">
          <h1>pie</h1>
          <p>
            pie 그래프? pi 그래프?<br /><br />
            pie 그래프란 pie와 모양이 비슷하게 생긴 그래프를 뜻합니다.<br /><br />
            pie가 무엇인지 모르나요? pie는 파이입니다 (3.14159...가 아니고요! 이 숫자를 생각했다면 유식합니다).<br /><br />
            파이차트는 pie() 메서드를 사용할 수 잇습니다.<br /><br />
            매개변수:<br />
            1. explode = [0.2, 0, 0] --- 터지다! (사실 아닙니다. 어떤 파이처트의 부분이 가운데에서 떨어져 있는 거리를 뜻합니다.)<br />
            2. shadow = True --- 그림자<br />
            3. colors = "colorname"<br />
            4. labels = ["Appple", "Banana"] --- 설명<br /><br />
            파이그래프의 재목은 label을 지정하고 legend()를 이용하여 정할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/074b4c95ef" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <BeforeNextButton flink="keyboard" slink="mouse" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MatPlotLibPage',
}
</script>
