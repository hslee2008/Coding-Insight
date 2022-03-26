<template>
  <div style="display: flex; justify-content: center; align-self: center">
    <div>
      <h2>파이썬 여행 끝!!!</h2>
      <p>하지만 아직 더 남아 있는 여행이 있습니다!</p>

      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinishedPage',
  data() {
    return {
      headers: [
        {
          text: '라이브러리/프레입워크',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '링크', value: 'link' },
        { text: '사용 용도', value: 'topic' },
      ],
      items: [
        {
          name: '텐서플로우',
          link: 'https://www.tensorflow.org/api_docs',
          topic: '머신러닝 & 딥러닝',
        },
        {
          name: '파이게임',
          link: 'https://www.pygame.org/docs/',
          topic: '게임 만들기',
        },
        {
          name: '장고',
          link: 'https://docs.djangoproject.com/en/3.2/',
          topic: '웹사이트 만들기',
        },
        {
          name: '오픈cv',
          link: 'https://opencv.org',
          topic: '동영상 & 사진 처리',
        },
        {
          name: 'TKinter',
          link: 'https://www.javatpoint.com/python-tkinter',
          topic: 'GUI (컴퓨터 앱)',
        },
      ],
    };
  },
};
</script>
