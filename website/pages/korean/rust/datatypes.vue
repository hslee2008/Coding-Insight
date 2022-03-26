<template>
  <div>
    <br /><br />

    <div>
      <h2>데이터 형태란?</h2>

      Rust에서 변수를 선언할 때 다양한 정보를 담을 수 있는데요 몇게 예를 들자면
      숫자, 문자열, 불린, 배열, 객체, 함수 등이 있습니다.<br /><br />

      쉽게 설명하지면 데이터 형태라는 것은 박스 안에 변수를 넣을 때 어떤 종류의
      데이터로 넣을지를 나타내는 것입니다.<br /><br />

      예를 들면, 박스 안에 물을 얼음으로 넣을 수도 있고 물로도 넣을 수
      있습니다.<br /><br />

      이와 같이 숫자 1이라는 것을 숫자로도 담을 수 있고, 문자열(일상생활에서
      사용하는 언어 기호)로도 가능합니다.
    </div>

    <Header type="Rust" title="데이터 형태" num="11" />

    <div>
      <div>
        <h2>데이터 형태가 있는 이유는?</h2>

        원래 Rust 변수는 사실 모든 데이터를 넣을 수 있습니다.<br /><br />

        프로그래밍을 하다 보면 어떤 특정한 데이터 형태의 값만 가질 수 있는
        변수를 원합니다.<br /><br />

        그리고 훨씬 더 안전하고 에러가 생길 가능성이 줄어듭니다 (메모리가 낮아서
        변수 값에 에러가 생기는 경우가 많습니다).
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>변수에 데이터 형태 지정</h2>

        이제 age라는 변수 안에 항상 숫자만 들어갈 수 있게 'i64'이라는 데이터
        형태를 지정하겠습니다.<br /><br />

        i64이라는 데이터 형태는 int(정수)가 64bit 형태로 저장이 되겠다는
        뜻입니다. int와 bit는 숫자를 더 자세히 다루는 장에서 알아보겠습니다.<br /><br />

        데이터 형태를 지정하기 위해서 변수 이름 다음에
        <code class="inline-code">:</code>을 붙이고 데이터 형태 이름(예: i64)를
        넣고 다음에 값을 넣습니다.
      </div>
      <div>
        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20age%3A%20i64%20%3D%2013%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EB%82%98%EC%9D%B4%3A%20%7Bage%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20%2F%2F%EB%B0%91%20%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%0D%0A%20%20%20%20%2F%2F%3C--%20(%EC%A7%80%EA%B8%88%20%27%2F%2F%27%EA%B0%80%20%EB%B6%99%EC%96%B4%20%EC%9E%88%EC%96%B4%EC%84%9C%20%EC%A3%BC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4.%20%27%2F%2F%27%EC%99%80%20%EC%9D%B4%20%EA%B8%80%EC%9D%84%20%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B3%A0%20%EC%8B%A4%ED%96%89%ED%95%B4%20%EB%B3%B4%EC%84%B8%EC%9A%94.)%20age%20%3D%20%22%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%20%EB%94%B0%EC%9B%80%ED%91%9C%EB%A1%9C%20%EB%91%98%EB%9F%AC%20%EC%8C%93%EC%9D%B8%20%EA%B2%83%EC%9D%80%20%27%EB%AC%B8%EC%9E%90%EC%97%B4%27%EC%9D%B4%EB%9D%BC%EA%B3%A0%20%EC%9D%BC%EC%83%81%EC%83%9D%ED%99%9C%EC%97%90%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EB%AA%A8%EB%93%A0%20%EB%AC%B8%EC%9E%90%20%EA%B8%B0%ED%98%B8%EB%93%A4%EC%9D%84%20%EB%9C%BB%ED%95%A9%EB%8B%88%EB%8B%A4.%20%EC%9D%B4%EB%8A%94%20i64%EA%B0%80%20%EC%95%84%EB%8B%88%EB%AF%80%EB%A1%9C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4!%22%3B%0D%0A%20%20%20%20%2F%2F%EC%9C%84%20%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%0D%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>데이터 형태 종류</h2>

        <v-treeview hoverable :items="items" />
      </div>
      <div>
        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0D%0A%20%20%20%20let%20age%3A%20i64%20%3D%2013%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20println!(%22%EB%82%98%EC%9D%B4%3A%20%7Bage%7D%22)%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20%2F%2F%EB%B0%91%20%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%0D%0A%20%20%20%20%2F%2F%3C--%20(%EC%A7%80%EA%B8%88%20%27%2F%2F%27%EA%B0%80%20%EB%B6%99%EC%96%B4%20%EC%9E%88%EC%96%B4%EC%84%9C%20%EC%A3%BC%EC%84%9D%EC%9E%85%EB%8B%88%EB%8B%A4.%20%27%2F%2F%27%EC%99%80%20%EC%9D%B4%20%EA%B8%80%EC%9D%84%20%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B3%A0%20%EC%8B%A4%ED%96%89%ED%95%B4%20%EB%B3%B4%EC%84%B8%EC%9A%94.)%20age%20%3D%20%22%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%20%EB%94%B0%EC%9B%80%ED%91%9C%EB%A1%9C%20%EB%91%98%EB%9F%AC%20%EC%8C%93%EC%9D%B8%20%EA%B2%83%EC%9D%80%20%27%EB%AC%B8%EC%9E%90%EC%97%B4%27%EC%9D%B4%EB%9D%BC%EA%B3%A0%20%EC%9D%BC%EC%83%81%EC%83%9D%ED%99%9C%EC%97%90%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EB%AA%A8%EB%93%A0%20%EB%AC%B8%EC%9E%90%20%EA%B8%B0%ED%98%B8%EB%93%A4%EC%9D%84%20%EB%9C%BB%ED%95%A9%EB%8B%88%EB%8B%A4.%20%EC%9D%B4%EB%8A%94%20i64%EA%B0%80%20%EC%95%84%EB%8B%88%EB%AF%80%EB%A1%9C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4!%22%3B%0D%0A%20%20%20%20%2F%2F%EC%9C%84%20%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C%20%EC%97%90%EB%9F%AC%EA%B0%80%20%EC%83%9D%EA%B9%81%EB%8B%88%EB%8B%A4.%0D%0A%7D"
          width="100%"
          height="400"
        />
      </div>
    </div>

    <QuadSpace />

    <Navigation bef="scopeshadowing" aft="numeric-int" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: '스칼라 (한 값만 가지고 있음)',
          children: [
            {
              id: 2,
              name: '숫자 형태의 데이터',
              children: [
                {
                  id: 60,
                  name: '정수 (-2, -1, 0, 1, 2 등)',
                },
                {
                  id: 100,
                  name: '소수 (1.1, 3.14159, 0.1 등)',
                },
              ],
            },
            {
              id: 4,
              name: '숫자 형태가 아닌 데이터',
              children: [
                {
                  id: 1234,
                  name: "문자열 ('안녕하세요', '안녕하세요', '안녕하세요' 등)",
                },
                {
                  id: 125,
                  name: '불리언 (true, false)',
                },
                {
                  id: 643,
                  name: '문자 (a, b, c 등)',
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: '컴파운드 (여러 값들을 가지고 있음)',
          children: [
            {
              id: 6,
              name: '정렬 (아이템들의 모음)',
            },
            {
              id: 10,
              name: '튜플 (아이템들의 모음)',
            },
          ],
        },
      ],
    };
  },
};
</script>
