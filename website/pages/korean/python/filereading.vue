<template>
  <div>
    <div>
      <div>
        <h2>파일 읽기란?</h2>
        <p>
          'text.txt'라는 파일을 만들어보겠습니다.<br /><br />

          그 파일에 'Python is fantastic'이라고 써보겠습니다.<br /><br />

          그 다음에 text 파일의 내용을 변수 안에 저장하기 위하여 open() 함수를
          사용해보겠습니다.<br /><br />

          첫 번째 매개변수에는 우리가 내용을 읽을 파일의 주소를 넣습니다.<br /><br />

          두 번째 매개변수에는 모드를 입력합니다.<br /><br />

          r은 'reading'의 약자입니다.
        </p>
      </div>
      <div class="ma-auto">
        <GlobalImage
          src="https://thumbs.dreamstime.com/b/file-icon-folder-dark-background-simple-vector-117046649.jpg"
          width="300px"
        />
      </div>
    </div>

    <Header type="파이썬" num="50" title="파일 읽기" />

    <div>
      <div>
        <h2>read()</h2>
        <p>
          read()는 그 파일의 내용을 다 출력하는 코드입니다. 첫 번째 매개변수는
          그 파일의 출력할 내용의 길이를 정해줍니다.<br /><br />

          참고로 문자열 앞에 r이 붙으면 raw 문자열이 됩니다.<br /><br />

          raw 문자열이란 이스케이프 문자를 동작시키지 않고 그대로 사용하는
          문자열을 말합니다.<br /><br />

          이스케이프 문자를 선언하는 코드 "`\`(역슬래시)"는 파일의 주소에도
          있으므로 이스케이프 문자를 사용하지 않겠다고 raw 문자열을 사용하여
          파이썬에게 알려주어야 합니다.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}69df2c15b8`"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>readline()</h2>
        <p>
          하나의 줄을 읽으려면 'readline()'을 사용하면 됩니다.<br /><br />

          두 개 이상의 줄을 읽으려면 for 반복문을 사용하여 줄을 시작부터
          순차적으로 읽을 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}6b4e266873`"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>readlines()</h2>
        <p>
          readline()과 readlines()는 비슷해 보이지만 분명한 차이가 있는
          코드입니다.<br /><br />

          readline()은 한 줄만 읽는 코드이지만 readlines()는 매개변수가 지정하는
          만큼의 줄을 읽는 코드입니다.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}8d79bcebaa`"
      height="356"
      loading="lazy"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>readable()</h2>
        <p>
          파일의 읽기 가능 여부를 확인할 때 readable()을 사용할 수 있습니다.
          만일 파일을 읽는 것이 가능하면 True를 돌려주고 그렇지 않다면 False를
          돌려줍니다.
        </p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}a301fbf34c`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="file" aft="filewriting" />
  </div>
</template>
