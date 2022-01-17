<template>
   <div>
      <br />

      <div style="display: flex;" class="img-div">
         <div class="margin: 5px;">
            <h1>연산자란?</h1>
            <p>
               연산자란 연산을 수행하는 자입니다.<br /><br />
               예를 들면, +와 -는 연산자의 예시입니다.<br /><br />
               이 장에서는 파이썬에서 사용되고 알면 좋은 연산자에 대하여 배우겠습니다.
            </p>
         </div>
         <div style="margin: auto;">
            <v-img alt="python-factory-picture" class="img-fluid"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEJ9fzr3QpW7a9Ase_cE279O1pTyY4GZ2T4cXc7rXrugIqPf_586nsM-Ajo_Q0Qxuyxk&usqp=CAU"
               max-width="300px" />
         </div>
      </div>
      <br /><br />
      <div class="text-center">

            <iframe width="80%" height="315" src="https://www.youtube.com/embed/sGZLq4VZW58" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

      </div>

      <br /><br />

      <Header num="15" title="연산자"></Header>

      <br /><br /><br /><br />

      <div class="norm-div">
         <div>
            <h1> 산수 연산자 </h1>
            <p>
               산수 연산자는 <a href="number.html">숫자</a>에서 배웠습니다.<br /><br />
               기억이 나지 않는다면 다시 한번 확인하세요.
            </p>
         </div>
      </div>

      <br /><br /><br /><br />

      <div>
         <div>
            <h1>할당 연산자</h1>
            <p>
               할당 연산자란 산수 연산자와 비슷하지만 산수 연산자의 결과 값을 변수 안에 저장합니다.<br /><br />
               산수 연산자는 두 수를 비교하여 새로운 값을 돌려주는 성질이지만 할당 연산자는 변수의 값을 바꿉니다.<br /><br />
            <h2>+=</h2>
            +=은 더하지만 원래 값에 또 다른 값을 더합니다.<br /><br />
            예를 들면, 원래값이 1이고 += 연산자를 사용하여 2를 더하면 원래 변수의 값에 2를 더한 것이 변수 안에 저장됩니다. 즉 3이 저장됩니다.<br /><br />
            <h2> -=, *=, /=, **=, %=, //=</h2>
            옆에서 -=, *=, /=, **=, %=, //= 할당 연산자를 잘 사용하기 위해서 옆에서 연습하세요!
            </p>
         </div>

            <iframe src="https://trinket.io/embed/python3/fd203a6323" width="100%" height="356" frameborder="0"
               marginwidth="0" marginheight="0" allowfullscreen loading="lazy"
               style="margin: auto;"></iframe>

      </div>

      <br /><br /><br /><br />

      <div class="color-contrast-div">
         <div>
            <h1>비교 연산자</h1>
            <p>
               비교 연산자란 두 값을 비교하는 연산자입니다.<br /><br />
               예를 들면 '=='은 두 값이 같은지 알려주는 연산자이고 불리언을 돌려줍니다.<br /><br />
               == 두 값을 비교합니다.<br />
               != 는 두 값을 대조합니다.<br />
               > 는 두 값 중 큰 값이 무엇인지 알려줍니다.<br />
               >= 는 두 값이 크거나 같은지 알려줍니다.<br />
               < 는 두 값 중 더 작은 것이 무엇인지 알려줍니다.
            </p>
         </div>

            <iframe src="https://trinket.io/embed/python3/39a09b977e"
               width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
               loading="lazy" style="margin: auto;"></iframe>

      </div>

      <br /><br /><br /><br />

      <div>
        <a href="number" style="text-decoration: none; float: left">
          <v-btn class="ma-2" outlined>
            <v-icon left> mdi-chevron-left </v-icon>Back
          </v-btn>
        </a>

        <a href="numtype" style="text-decoration: none; float: right">
          <v-btn class="ma-2" outlined>
            Next<v-icon right> mdi-chevron-right </v-icon>
          </v-btn>
        </a>
      </div>

      <br /><br /><br /><br />

   </div>
   </div>
</template>
