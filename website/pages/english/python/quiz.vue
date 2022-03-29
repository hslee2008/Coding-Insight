<template>
  <div id="quiz">
    <div class="progress">
      <div class="progress--bar" />
    </div>

    <h2>Quiz</h2>

    <div class="questionArea">
      <div class="question">...</div>
      <div class="options" />
    </div>

    <div class="scoreArea">
      <div class="scoreText1">--</div>
      <div class="scorePct">--</div>
      <div class="scoreText2">--</div>
      <NuxtLink
        aria-label="Go to Coding Insight Page"
        to="./quiz"
        style="text-decoration: none"
      >
        <v-btn :aria-label="albutt"> Restart </v-btn>
      </NuxtLink>
      <NuxtLink
        aria-label="Go to Coding Insight Page"
        to="/"
        style="text-decoration: none"
      >
        <v-btn :aria-label="albutt"> Homepage </v-btn>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuizPage',

    mounted() {
      let questions = [
        {
          question: 'How do we print "Hello, World!" in Python?',
          options: [
            'print("Hello, World!")',
            'printf("Hello, World!")',
            'cout << "Hello, World!"',
            'console.log("Hello, World!")',
          ],
          answer: 0,
        },
        {
          question:
            "What is printed when running print('Hello', 'World', sep = '&nbsp')?",
          options: [
            'Hello, World!',
            'HelloWorld',
            'Error Occurs',
            'HelloSEPWorld',
          ],
          answer: 0,
        },
        {
          question: 'How do we get user input in Python?',
          options: ['getline()', 'scanf()', 'prompt()', 'input()'],
          answer: 3,
        },
        {
          question: 'How do we assign the number 3 to variable named a?',
          options: ["a = '3'", 'a=3', "a = '''3'''", 'a = *3*'],
          answer: 1,
        },
        {
          question: 'What is the the correct variable name?',
          options: [
            '123abc',
            'abcabc',
            'a123456789',
            'a_____________________________',
          ],
          answer: 0,
        },
        {
          question:
            "What is printed to the console when running #print('Good Luck!!!')?",
          options: ['Error occurs', '', 'Good Luck!!!', '!!!kcuL dooG'],
          answer: 1,
        },
        {
          question: 'What is not a string in the following?',
          options: ["'abc'", '"abc"', "'''abc'''", '123'],
          answer: 3,
        },
        {
          question:
            "What is printed to the console when running print('HelloWorld'[0])?",
          options: ['HelloWorld', 'HelloWorld[0]', '0', 'H'],
          answer: 3,
        },
        {
          question:
            "What is printed to the console when running print('Good Luck!!!'[::-1])?",
          options: ['에러', '', 'Good Luck!!!', '!!!kcuL dooG'],
          answer: 3,
        },
        {
          question:
            "What is printed to the console when running print(len('abc'))?",
          options: ['2', '3', 'len', 'abc'],
          answer: 1,
        },
        {
          question: "How do we print 'Hello'(with quotation)?",
          options: [
            "print('Hello')",
            "print(''Hello'')",
            "print('\\'Hello\\'')",
            "I don't know",
          ],
          answer: 2,
        },
        {
          question: 'What is ASCII short for?',
          options: [
            'A~~ SKY',
            'American Standard Code for Information Interchange',
            'Averything So Crazy In IO',
            '??',
          ],
          answer: 1,
        },
        {
          question: 'What is not true for the value of Boolean in Python?',
          options: ['True', 'False', 'true'],
          answer: 2,
        },
        {
          question:
            'What is equal to not (not (not (not (not (not (False))))))?',
          options: ['False', 'True', 'false', 'true'],
          answer: 0,
        },
        {
          question:
            'What is equal to abs( -3 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1 * -1)?',
          options: ['3', '-3', '0', 'NaN'],
          answer: 0,
        },
        {
          question: "'tall people' can be a set.",
          options: ['False!!!', 'True??', 'I-dont-know??', ':('],
          answer: 0,
        },
        {
          question: "What happens when running eval('a')?",
          options: ['Error Occurs', 'a', '97', 'evaluation'],
          answer: 0,
        },
        {
          question: 'What is 1 + 1?',
          options: ['1', '2', 'Python!', "I don't know'"],
          answer: 1,
        },
        {
          question:
            "What is printed when we run print('Hello', end='');print(' World')?",
          options: ['Error Occurs', 'HellWorld', 'HelloWorld', 'Hello, World!'],
          answer: 0,
        },
        {
          question:
            "What happens when we run: import os; os.system('shutdown /r')?",
          options: [
            'shutdown /r is printed',
            "I don't know. But I will try it",
            'Computer shuts down',
            'All the ansewrs above is incorrect',
          ],
          answer: 3,
        },
        {
          question: 'How do we make a function in Python?',
          options: [
            'function myfunction()',
            'func myfunction()',
            'fun myfunction()',
            'def myfunction()',
          ],
          answer: 3,
        },
        {
          question: 'What should I put after myfile to make it a Python file?',
          options: ['.py', '.python', '.pt', '.pyth'],
          answer: 0,
        },
        {
          question: 'How do we print the data type of a variable?',
          options: [
            'print(type(x))',
            'print(type x)',
            'print(typeof(x))',
            'All the answers above is incorrect',
          ],
          answer: 0,
        },
        {
          question: 'Python is same as \'Hello\' and "Hello"',
          options: [
            'Same',
            'Not same',
            "I don't know",
            'All the answers above is incorrect',
          ],
          answer: 0,
        },
        {
          question: 'What is our team name?',
          options: ['Python', 'Python Factory', 'Factory Python', 'Python'],
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

          const progress = Math.floor(
            (currentQuestion / questions.length) * 100,
          );
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

          document.querySelectorAll('.options .option').forEach(item => {
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
            'Score seems to be a bit low. Please study more from our site!';
          scorePct.style.color = '#f00000';
        } else if (points > 30 && points < 70) {
          scoreText1.innerHTML = 'Pat yourself on the back!';
          scorePct.style.color = '#ffc900';
        } else if (points > 30 && points >= 70 && points != 100) {
          scoreText1.innerHTML = "'wow' - developer";
          scorePct.style.color = '#0d630d';
        } else if (points == 100) {
          scoreText1.innerHTML = "'（⊙ｏ⊙）' - developer -";
          scorePct.style.color = 'black';
        }

        scorePct.innerHTML = `${points} 점`;
        document.querySelector(
          '.scoreText2',
        ).innerHTML = `${correctAnswers} out of ${questions.length}`;

        scoreArea.style.display = 'block';
        questionArea.style.display = 'none';
        progressBar.style.width = '100%';
      }
    },
  };
</script>

<style scoped>
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
