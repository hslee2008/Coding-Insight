<template>
  <div style="display: flex; justify-content: center; align-self: center">
    <div>
      <h2>C 언어 여행 끝!!!</h2>
      <p>하지만 아직 더 남아 있는 여행이 있습니다!</p>

      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
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
          name: 'Unreal Engine',
          link: 'https://www.unrealengine.com',
          topic: '게임',
        },
        {
          name: 'QT',
          link: 'https://www.qt.io/',
          topic: 'GUI',
        },
      ],
    };
  },
};
</script>
