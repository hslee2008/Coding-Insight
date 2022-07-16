import React from 'react'
import Quiz from 'react-quiz-component'

export default ({ quiz }) => {
  return (
    <Quiz
      showInstantFeedback={true}
      continueTillCorrect={true}
      quiz={{
        ...quiz,
        appLocale: {
          landingHeaderText: '<questionLength>개 질문이 있습니다.',
          question: '퀴즈',
          startQuizBtn: '시작',
          resultFilterAll: '모든 퀴즈',
          resultFilterCorrect: '맞춘 퀴즈',
          resultFilterIncorrect: '틀린 퀴즈',
          nextQuestionBtn: '다음!',
          resultPageHeaderText: '<questionLength>/<correctIndexLength>'
        }
      }}
    />
  )
}
