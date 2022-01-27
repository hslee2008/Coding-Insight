<template>
  <div id="quiz">
    <div class="progress">
      <div class="progress--bar"></div>
    </div>

    <h1>Quiz</h1>

    <div class="questionArea">
      <div class="question">...</div>
      <div class="options"></div>
    </div>

    <div class="scoreArea">
      <div class="scoreText1">--</div>
      <div class="scorePct">--</div>
      <div class="scoreText2">--</div>
      <NuxtLink to="./quiz" style="text-decoration: none">
        <v-btn> 다시시작 </v-btn>
      </NuxtLink>
      <NuxtLink to="/" style="text-decoration: none">
        <v-btn> 홈페이지 </v-btn>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizPage',

  mounted() {
    const questions = [
      {
        question: '어떻게 파이썬에서 "Hello World"라고 출력할까요?',
        options: [
          'print("Hello World")',
          'printf("Hello World")',
          'cout &lt;&lt; "Hello World"',
          'console.log("Hello World")',
        ],
        answer: 0,
      },
      {
        question:
          "print('Hello', 'World', sep = '&nbsp')를 실행하면 콘솔에 출력되는 값은?",
        options: ['Hello World', 'HelloWorld', '에러', 'HelloSEPWorld'],
        answer: 0,
      },
      {
        question: '파이선에서 입력할 때 사용하는 함수는?',
        options: ['getline()', 'scanf()', 'prompt()', 'input()'],
        answer: 3,
      },
      {
        question: '변수 a에 숫자 3을 저장하고 싶다면?',
        options: ["a = '3'", 'a=3', "a = '''3'''", 'a = *3*'],
        answer: 1,
      },
      {
        question: '다음 중 옳지 않은 변수 이름은?',
        options: [
          '123abc',
          'abcabc',
          'a123456789',
          'a_____________________________',
        ],
        answer: 0,
      },
      {
        question: "#print('Good Luck!!!')을 실행하면?",
        options: ['에러', '', 'Good Luck!!!', '!!!kcuL dooG'],
        answer: 1,
      },
      {
        question: '다음 중 문자가 아닌 것은?',
        options: ["'abc'", '"abc"', "'''abc'''", '123'],
        answer: 3,
      },
      {
        question: "print('HelloWorld'[0])을 실행하면?",
        options: ['HelloWorld', 'HelloWorld[0]', '0', 'H'],
        answer: 3,
      },
      {
        question: "print('Good Luck!!!'[::-1])을 실행하면",
        options: ['에러', '', 'Good Luck!!!', '!!!kcuL dooG'],
        answer: 3,
      },
      {
        question: "print(len('abc'))를 실행하면",
        options: ['2', '3', 'len', 'abc'],
        answer: 1,
      },
      {
        question: "'Hello'를 출력하는 방법은('' 포함)",
        options: [
          "print('Hello')",
          "print(''Hello'')",
          "print('\\'Hello\\'')",
          '모르겠어요 ㅠㅠ',
        ],
        answer: 2,
      },
      {
        question: 'ASCII는 무엇의 약자일까요?',
        options: [
          '흠... 아 - 스키???',
          'American Standard Code for Information Interchange',
          'Averything So Crazy In IO',
          '???',
        ],
        answer: 1,
      },
      {
        question: '분리언의 값으로 옳지 않은 것은?',
        options: ['True', 'False', 'true'],
        answer: 2,
      },
      {
        question: 'not (not (not (not (not (not (False))))))의 값은?',
        options: ['False', 'True', 'false', 'true'],
        answer: 0,
      },
      {
        question:
          'abs( -3 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1)의 값은?',
        options: ['3', '-3', '0', 'NaN'],
        answer: 0,
      },
      {
        question: "'키가 큰 사람'은 집합이다",
        options: ['False!!!', 'True???', 'I-dont-know???', 'ㅠㅠ'],
        answer: 0,
      },
      {
        question: "eval('a')를 실행하면?",
        options: ['에러', 'a', '97', 'evaluation'],
        answer: 0,
      },
      {
        question: '1 + 1은?',
        options: ['1', '2', '파이썬!', '몰라'],
        answer: 1,
      },
      {
        question: "print('Hello', end='');print(' World')를 실행하면?",
        options: ['에러', 'HellWorld', 'HelloWorld', 'Hello World'],
        answer: 0,
      },
      {
        question:
          "import os; os.system('shutdown /r')을 실행하면? 모르겠다면 실행해 보세요!",
        options: [
          'shutdown /r',
          '모르겠어요. 실행하겠습니다!',
          '모르겠어요. 하지만 실행하지 않겠습니다!',
          '위의 정답은 다 틀렸다. 실행해보겠습니다!',
        ],
        answer: 3,
      },
      {
        question: '파이썬에서 함수를 만드는 방법은?',
        options: [
          'function myfunction()',
          'func myfunction()',
          'fun myfunction()',
          'def myfunction()',
        ],
        answer: 3,
      },
      {
        question: 'myfile 파이썬 파일 끝에 붙여야 하는 것은?',
        options: ['.py', '.python', '.pt', '.pyth'],
        answer: 0,
      },
      {
        question: '파이썬에서 데이터의 형태를 출력하는 방법으로 옳은 것은?',
        options: [
          'print(type(x))',
          'print(type x)',
          'print(typeof(x))',
          '위의 정답은 다 틀렸다.',
        ],
        answer: 0,
      },
      {
        question: '파이썬에서 \'Hello\'는 "Hello"와 같다',
        options: ['같습니다', '다르다', '모르겠어요', '위의 정답은 다 틀렸다.'],
        answer: 0,
      },
      {
        question: '저희 팀의 이름은?',
        options: ['파이썬', '파이썬 팩토리', '팩토리 파이썬', '팩토리'],
        answer: 1,
      },
    ];

    const progressBar = document.querySelector('.progress--bar');
    const questionArea = document.querySelector('.questionArea');
    const scoreArea = document.querySelector('.scoreArea');
    const scoreText1 = document.querySelector('.scoreText1');
    const scorePct = document.querySelector('.scorePct');
    let currentQuestion = 0;
    let correctAnswers = 0;
    showQuestion();

    function showQuestion() {
      if (currentQuestion < 24) {
        const q = questions[currentQuestion];

        const progress = Math.floor((currentQuestion / questions.length) * 100);
        progressBar.style.width = `${progress}%`;

        scoreArea.style.display = 'none';
        questionArea.style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHtml = '';

        for (const i in q.options) {
          optionsHtml += `<div data-op="${i}" class="option"><span> ${
            parseInt(i) + 1
          }</span> ${q.options[i]}</div>`;
        }

        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach((item) => {
          item.addEventListener('click', optionsClickEvent);
        });
      } else {
        finishQuiz();
      }
    }

    function optionsClickEvent(e) {
      const clickedOption = parseInt(e.target.getAttribute('data-op'));

      if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
      }

      currentQuestion++;
      showQuestion();
    }

    function finishQuiz() {
      const points = Math.floor((correctAnswers / questions.length) * 100);

      if (points <= 30) {
        scoreText1.innerHTML =
          '흠... 점수가 조금 낮습니다. 사이트에서 다시 공부하세요!!!';
        scorePct.style.color = '#f00000';
      } else if (points > 30 && points < 70) {
        scoreText1.innerHTML =
          "'휴... 조금 어려웠지만 잘 했다.'라고 자기를 칭찬하세요!!!";
        scorePct.style.color = '#ffc900';
      } else if (points > 30 && points >= 70 && points !== 100) {
        scoreText1.innerHTML = "'흠... 잘한다' - 개발자 -";
        scorePct.style.color = '#0d630d';
      } else if (points === 100) {
        scoreText1.innerHTML = "'（⊙ｏ⊙）' - 개발자 -";
        scorePct.style.color = 'black';
      }

      scorePct.innerHTML = `${points} 점`;
      document.querySelector(
        '.scoreText2',
      ).innerHTML = `${questions.length}개 중 ${correctAnswers} 맞았습니다.`;

      scoreArea.style.display = 'block';
      questionArea.style.display = 'none';
      progressBar.style.width = '100%';
    }
  },
};
</script>

<style>
.wrong {
  animation-duration: 1s;
  animation-name: slidein;
}

@keyframes slidein {
  0% {
    margin-right: -100px;
  }

  100% {
    margin-right: 30px;
  }
}

.check {
  animation-duration: 1s;
  animation-name: s;
}

@keyframes s {
  0% {
    margin-right: -100px;
  }

  100% {
    margin-right: 30px;
  }
}

body > div > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(10, 10, 10) 33;
  position: fixed;
  top: 0;
  width: 100%;
}

body > div > ul > li {
  float: left;
}

body {
  overflow: hidden;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 13px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

#quiz {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #313645;
  font-family: verdana, sans-serif;
}

body {
  margin: 0;
}

h1 {
  color: #fff;
  margin: 20px 0;
}

.progress {
  height: 5px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}

.progress--bar {
  background-color: #0f0;
  height: 100%;
  transition: all ease 0.5s;
  width: 0%;
}

.questionArea,
.scoreArea {
  display: none;
}

.questionArea {
  max-width: 600px;
  width: 100%;
  padding: 0 15px;
}

.question {
  color: #fff;
  font-size: 18px;
  margin: 20px 0;
}

.option {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-bottom: 10px;
  color: #a7b6e4;
  font-size: 16px;
  cursor: pointer;
}

.option span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-left: 5px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #4b5677;
}

.option:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.scoreArea {
  background-color: rgba(255, 255, 255, 0.5);
 ;
  border-radius: 20px;
  margin: 10px;
  text-align: center;
}

.prizeImage {
  width: auto;
  height: 100px;
  margin-bottom: 10px;
}

.scoreText1 {
  color: #000;
  font-size: 23px;
  font-weight: bold;
  margin: 20px auto 10px;
}

.scorePct {
  color: #0d630d;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.scoreText2 {
  font-size: 16px;
  color: #000;
  margin-bottom: 10px;
}

.scoreArea button {
  border: 0;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ccc;
  padding: 10px 80px;
  margin-top: 20px;
  cursor: pointer;
}

.scoreArea button:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
