<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div>
        <h2>무한 반복문</h2>
        <p>
          무한 반복이란 사용자가 억지로 끝내기 전까지 무한으로 실행이 되는
          반복문을 뜻합니다.<br /><br />

          무한 반복문을 원하지 않을 때가 대부분이지만 원하는 때도 있을 수 있기
          때문에 배우겠습니다.
        </p>
      </div>
      <div style="margin: auto">
        <CIImage
          alt="python-factory-picture"
          src="https://images.immediate.co.uk/production/volatile/sites/4/2018/09/GettyImages-483485536-db0b238.jpg?quality=90&crop=13px%2C56px%2C1175px%2C505px&resize=960%2C408"
          width="400px"
        />
      </div>
    </div>

    <Header type="C/C++" title="무한 반복문" num="22" />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>무한 반복문 만들기</h2>
        <p>
          무한 반복문을 만들기 위해서 while 반복문 조건을 넣는 곳에 1 (true)를
          입력하면 됩니다.<br /><br />

          조건문을 이용하여 break하는 것도 가능합니다. break에 관한 내용은 다음
          시간에 배우겠습니다.
        </p>
      </div>
      <div style="margin: auto">
        <CIImage
          alt="python-factory-picture"
          src="https://res.cloudinary.com/teepublic/image/private/s--nFk9ZVTf--/c_scale,h_704/c_lpad,g_north_west,h_801,w_1802,x_168,y_48/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug%20Effect%20Coffee3%20Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug%20Effect%20Coffee3%20Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:262c3a/c_limit,f_auto,h_630,q_90,w_630/v1496757724/production/designs/1649527_1.jpg"
          width="200px"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>예시</h2>
        <code>
          #include &lt;stdio.h><br /><br />

          int main()<br />
          {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;int a;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;while (1) {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scanf("%d", &a);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d", a);<br />
          &nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;return 0;<br />
          }
        </code>
      </div>
      <div style="margin: auto">
        <iframe
          src="https://www.jdoodle.com/embed/v0/3YM6"
          width="100%"
          height="400px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="dowhile" aft="conbregot" />
  </div>
</template>
