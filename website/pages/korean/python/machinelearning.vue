<template>
  <div>
    <QuadSpace />

    <div>
      <div></div>
    </div>

    <v-card class="mx-auto">
      <v-card-text>
        <h3>머신 러닝</h3>
        <v-row style="margin: 1px">
          <div class="text--primary">
            영화에서 보면 AI가 세상을 정복해서 인간보다 더 똑똑해 지는 장면들이
            자주 등장합니다.<br /><br />

            사람들이 실제로 AI에 대해 잘 모르기 때문에 두려워합니다.<br /><br />

            이번에는 머신 러닝 (AI가 공부하는 과정 중 하나)를 사용해서 데이터
            분석하는 방법을 알아보겠습니다.
          </div>
          <v-avatar style="margin: auto" size="100px"
            ><v-img
              src="data:image/jpeg;base64,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" /></v-avatar
        ></v-row>
      </v-card-text>
    </v-card>

    <Header type="Python" title="머신 러닝" num="Special Class 1" />

    <v-alert
      dismissible
      color="red"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-robot-confused"
    >
      모델 - 저장하고, 분석하고, 사용하는 데이터를 담고 있는 객체 (예: "사람이
      마스크를 쓰고 있는가?"에서는 사람의 얼굴)<br />
      학습 - 모델에게 데이터를 제공해서 결과를 알려주는 과정 (예: "사람이
      마스크를 쓰는 사진 제공, 쓰고 있다고 알려줌")<br /><br />

      참고로 머신 러닝은 처음에는 데이터가 많이 없어서 정확도가 떨어지는 이유는
      결과의 가능성이 너무 많아서입니다. 사실 머신 러닝은 모든 경우의 수를
      계산하기 때문에 모델이 많을 수록 경우의 수를 줄일 수 있습니다. (예:
      사진에서 '010101010101111001010' 데이터가 사람의 얼굴이다하면 학습의
      과정을 통해 컴퓨터는 더 확신할 수 있습니다.)
    </v-alert>
    <v-alert
      dismissible
      color="blue"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-robot-excited"
    >
      시작하기 전에 꼭 <NuxtLink to="/korean/python/pandas">판다스</NuxtLink>,
      <NuxtLink to="/korean/python/pip">PIP</NuxtLink>,
      <NuxtLink to="/korean/python/module">모듈</NuxtLink>을 공부하고 오세요.
    </v-alert>

    <QuadSpace />

    <div>
      <h1>준비</h1>
      <p>
        1. <IC code="pip install pandas" />와
        <IC code="pip install -U scikit-learn" /> 터미널에서 실행하기<br />
        2. <NuxtLink download to="data/music.csv">music.csv</NuxtLink> 파일
        다운로드 받기 (꼭 파이썬 파일과 똑같은 폴더 안에 넣기)<br />
        3. 코드 짜기!
      </p>
    </div>

    <QuadSpace />

    <div>
      <h1>코드</h1>
      <p>
        1. <IC code="import pandas as pd" /> (판다스 가지고 오기)<br />
        2.
        <IC code="from sklearn.tree import DecisionTreeClassifier" /> (sklearn
        가지고 오기)<br />

        <br />
        지금까지 파이썬에서 필요한 라이브러리를 가지고 왔습니다.<br />
        판다스는 데이터를 읽고 정리하는데 사용하고 sklearn은 데이터를 학습하고
        결과 예측을 얻기 위한 도구입니다.
        <br /><br />

        3. <IC code="data_mus = pd.read_csv('music.csv')" /> (판다스로 뮤직
        데이터 불러오기)<br />
        4. <IC code="no_genre = data_mus.drop(columns=['genre'])" /> (genre
        삭제)<br />
        5. <IC code="genre = data_mus['genre']" /> (genre 저장)<br />

        <br />
        저흐는 총 2개의 데이터 변수 (no_genre, genre)를 사용해서 어떤 나이의
        사람이 어떤 genre를 좋아하는지 예측할 것입니다.<br />
        그래서 데이터(이 파일에는 나이와 성별)과 레이블(좋아하는 genre)를
        분리해서 사용합니다.
        <br /><br />

        6. <IC code="model = DecisionTreeClassifier()" /> (모델 생성)<br />
        7. <IC code="model.fit(no_genre, genre)" /> (모델 학습)<br />
        8. <IC code="pred = model.predict([[21, 1], [22, 0]])" /> (모델 )<br />

        <br />
        참고로 predict() 메서드는 21세 남성, 22세 여성이 좋아하는 음악 genre를
        예측해서 결과를 pred 변수 안에 저장할 것입니다.
        <br /><br />

        9. <IC code="print(pred)" /> (예측 결과 출력)<br /><br />

        <iframe
          src="https://trinket.io/embed/python3/02de47df74"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </p>
    </div>

    <QuadSpace />

    <div>
      <h1>추가로 정확도 측정하기</h1>
      <p>
        1. sklearn을 가지고 온 후 또 다른 train_test_split 함수를 가지고 온다.
        <IC code="from sklearn.model_selection import train_test_split" /><br />
        2. 정확도 측정을 위해 다음 코드를 입력합니다.
        <IC code="from sklearn.metrics import accuracy_score" /><br />
        3. genre와, no_genre 선언 후 데이터 분리 합니다.
        <IC
          code="X_train, X_test, y_train, y_test = train_test_split(no_genre, genre, test_size=0.2)"
        /><br />

        <br />
        참고로 test_size는 가지고 있는 데이터 (music.csv) 파일 중 얼마나 많은
        데이터를 사용할 것인가를 물어봅니다. 저희는 20%를 사용합니다.
        <br /><br />

        4. 모델 학습 합니다. 참고로 genre, no_genre를 학습하지 않고 X_train과
        Y_train을 사용합니다.<IC code="model.fit(X_train, y_train)" /><br />
        5. 모델 평가합니다. 참고로 X_test, y_test를 사용합니다.<IC
          code="pred = model.predict(X_test)"
        /><br />
        6. 정확도를 측정합니다. 참고로 accuracy_score를 사용합니다.<IC
          code="print(accuracy_score(y_test, pred))"
        /><br /><br />

        <iframe
          src="https://trinket.io/embed/python3/282aeb7817"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe
        ><br /><br />

        <v-alert
          dismissible
          color="red"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-robot-confused"
        >
          참고로 실행하면 정확도가 항상 달라지는 것을 확인할 수 있습니다. 참고로
          정확도를 높이기 위해서는 test_size를 낮추어야 합니다. 그 이유는
          test_size를 낮추면 남은 데이터를 사용하여 학습하기 때문입니다.
        </v-alert>
      </p>
    </div>

    <QuadSpace />
  </div>
</template>
