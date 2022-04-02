<template>
  <div>
    <Header type="파이썬" num="54" title="데이터 형태 바꾸기" />

    <div>
      <div>
        <h2>리스트로 바꾸기</h2>
        <p>
          리스트로 바꾸기 위해서는 list()와 split() 메서드를 사용할 수
          있습니다.<br /><br />

          첫 번째 방법은 list()를 사용하는 방법입니다. list()는 리스트로 바꾸는
          메서드입니다.<br />
          두 번째 방법은 split() 메서드를 이용하여, 문자 또는 문자를 기준으로
          문자를 리스트로 자를 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      :src="`${trinket}b8df2e09d4`"
      width="100%"
      height="356"
      loading="lazy"
      class="ma-auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h2>튜플로 바꾸기</h2>
        <p>
          튜플로 바꾸기 위하여 문자를 먼저 리스트로 바꾸고 tuple() 메서드를
          사용하여 튜플로 전환할 수 있습니다.
        </p>
      </div>
      <iframe :src="`${trinket}facd314b6c`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>숫자로 바꾸기</h2>
        <p>
          숫자로는 바꾸기 위해서는 int(), float(), complex() 메서드를 사용할 수
          있습니다.<br /><br />

          만일 문자 안에 있는 문자가 숫자가 아니라면 다음과 같은 결과가 나올
          것입니다.<br /><br />

          <code>NaN</code>

          NaN은 Not a Number의 약자입니다
        </p>
      </div>
      <iframe :src="`${trinket}cf87c918cc`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>불리언으로 바꾸기</h2>
        <p>
          불리언으로 바꾸기 위해서는 bool() 이라는 메서드를 사용할 수 있습니다.
          bool()은 Boolean의 약자입니다.<br /><br />

          0은 항상 False이고 1은 True입니다.
        </p>
      </div>
      <iframe :src="`${trinket}314b0e422c`" width="100%" height="356" />
    </div>

    <QuadSpace />

    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
    />

    <Navigation bef="contact2" aft="stringascode" />
  </div>
</template>

<script>
  export default {
    name: 'DataChangePage',
    data() {
      return {
        headers: [
          {
            text: '데이터 형태',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '바꾸는 방법', value: 'how' },
          { text: '예시', value: 'example' },
        ],
        items: [
          {
            name: '리스트',
            how: 'list() 또는 slpit()',
            example: 'list(a) 또는 a.split(" ")',
          },
          {
            name: '튜플',
            how: 'tuple()',
            example: 'tuple(a)',
          },
          {
            name: '숫자',
            how: 'int(), float(), complex()',
            example: 'int(a)',
          },
          {
            name: '불리언',
            how: 'bool()',
            example: 'bool(a)',
          },
          {
            name: '문자',
            how: 'str()',
            example: 'str(a)',
          },
        ],
      };
    },
  };
</script>
