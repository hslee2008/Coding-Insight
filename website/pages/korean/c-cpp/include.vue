<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>#include란?</h2>
        <p>
          include를 사용하면 다른 파일에 있는 함수와 변수를 그 파일 안에서
          사용할 수 있습니다.<br /><br />

          include 다음에 &lt;>를 입력하고 안에 파일 이름을 넣으면 됩니다. &lt;>
          대신 ""를 사용해도 됩니다.
        </p>
      </div>
      <div style="margin: auto">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAS1BMVEX///8AAAAHBwcmJib6+vq1tbUNDQ12dnZUVFSrq6t5eXleXl7i4uLl5eXz8/NLS0stLS3a2tpCQkKkpKRYWFiXl5ewsLBoaGhVVVUrESokAAACMklEQVR4nO3c7U7CQBBGYdrSQqFQvvH+r1SJMe5iUhOYmX3F81zAjEco7Q+W2QwAAAAAAAAAAAAA8F9s28XYdHX1qK4ZF5dt6YpZu3w8IVEv26IZ/c6i4tOuL5axP9hl3Bz2ZTqOnW3Hx+VyLNGxss64WcR3XD06quoa3eHyetwEvyZHr46qCr1O9ubX+bcu8rPL+HM3d4jr6D07qiruznh3P6/X/TB/dNZ8uKzvnnJ2ln/rlDbfe9o8O3BzyidGPXcts61ni5HnbOTSYuTvtrV5x11JHfNUn72zTlZTs3dXzHtrkf7vnr4+vmzS13llNXXSmGxc241dJ2NHu7ETmmSj4Ud+enNq7MZOSB9PBruxQzK2sxs7IX0zP3wf/GmeXu12Yyd4LSREbSEhagsJUVtIiNpCQtQWEqK2kBC1hYSoLSREbSEhagsJUVtIiNpCQtQQooYQNYSoIUQNIWoIUUOIGkLUFhKitpAQtYWEqC0kRG0hIWoLCVFbSIjYwpf5AnP8V8qdQuK/5O8Ukp6EiTl24RMyxB+E8QnJTqDFHE1yCSlxWMwjpMjxPfuQIT/ZGHWg0jZkPvQn5yOu1ROemnV5kRDzY+CFQjrDk3RFQ+x/KqFMiMNNvUiIx8+JlAhxeciKD3H6yZ3wkIP551WRkJ31fbBISP3m+HwVFNI146ot8tNtU3/wn0KIGkLUEKKGEDWEqCFEDSFqCFFDiBpC1BCi5mVCAAAAAAAAAAAAAACu3gFG0RZlnbgsJAAAAABJRU5ErkJggg=="
          width="200px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header type="C/C++" title="#include" num="37" />

    <QuadSpace />

    <div>
      <h2>나만의 라이브러리 만들기</h2>
      <p>
        나만의 라이브러리를 만들고 더하는 함수 add(int a, int b) 함수를 만들어서
        다른 파일에서 add 함수를 실행해 보겠습니다.<br /><br />

        .h로 끝나는 파일을 만듭니다. h파일은 header파일로 다양한 함수를 저장하는
        파일 형식입니다.<br /><br />

        h파일에는 C 언어를 넣기만 하고 main.c에서 #include &lt;filename.h>를
        실행하면 끝났습니다.<br /><br />

        바로 main.c에서 add()를 실행하면 됩니다!
      </p>
    </div>

    <QuadSpace />

    <NaviBtn bef="void" aft="assert" />

    <QuadSpace />
  </div>
</template>
