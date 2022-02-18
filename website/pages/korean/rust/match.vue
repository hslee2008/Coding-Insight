<template>
  <div>
    <QuadSpace />

    <div>
      <div>
        <h2>match 문</h2>
        if는 단점이 있습니다. 반복되는 조건이라면 코드가 매우 길어질 수
        있습니다.<br /><br />

        에를 들면, a라는 값이 1부터 9까지 값을 가질 수 있는데
        <IC
          code="if a == 1 {...} else if a == 2 {...} else if a == 3 {...} else if a == 4 {...} else if a == 5 {...} else if a == 6 {...} else if a == 7 {...} else if a == 8 {...} else if a == 9 {...} else {...}"
        />
        이렇게 작성하면 코드가 매우 길어집니다.<br /><br />

        그래서 a라는 값이 1부터 9까지 값을 가질 수 있는데
        <IC
          code="match a { 1 => {...} 2 => {...} 3 => {...} 4 => {...} 5 => {...} 6 => {...} 7 => {...} 8 => {...} 9 => {...} _ => {...}"
        />
        이렇게 작성하면 코드가 줄어들어요.<br /><br />

        참고로 match는 어떤 변수가 어떤 값과 같은지만 비교합니다.<br /><br />

        <iframe
          src="https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=fn%20main()%20%7B%0A%20%20%20%20let%20number%20%3D%2013%3B%20%2F%2F%EC%88%AB%EC%9E%90%EB%A5%BC%20%EB%B0%94%EA%BE%B8%EC%96%B4%20%EB%B3%B4%EC%84%B8%EC%9A%94...%0A%0A%20%20%20%20match%20number%20%7B%0A%20%20%20%20%20%20%20%201%20%3D%3E%20println!(%22One!%22)%2C%0A%20%20%20%20%20%20%20%202%20%7C%203%20%7C%205%20%7C%207%20%7C%2011%20%3D%3E%20println!(%22%EC%86%8C%EC%88%98%22)%2C%0A%20%20%20%20%20%20%20%2013..%3D19%20%3D%3E%20println!(%22%EC%B2%AD%EC%86%8C%EB%85%84%22)%2C%0A%20%20%20%20%20%20%20%20_%20%3D%3E%20println!(%22%EB%8B%A4%EB%A5%B8%20%EC%88%AB%EC%9E%90%22)%2C%0A%20%20%20%20%7D%0A%7D"
          width="100%"
          height="300"
        />
      </div>
    </div>

    <QuadSpace />

    <Header type="Rust" title="match 문" num="30" />

    <QuadSpace />

    <div>
      <div>
        <h2>match 문 사용</h2>
        1. <IC code="&lt;val> => {...}" /> 이렇게 작성하면 됩니다.<br /><br />
        2. <IC code="&lt;val> | &lt;val> => {...}" /> 이렇게 작성하면 val의 갑
        중 하나만 값이 같다면 코드를 실행합니다.<br /><br />
        3. <IC code="&lt;val>..=&lt;val> => {...}" /> 이렇게 작성하면 두 val
        사이에 값이 있다면 코드를 실행합니다.<br /><br />
        4. <IC code="_ => {...}" /> 이렇게 작성하면 모든 조건이 다 만족하지
        않으면 실행합니다.
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="for" aft="if-let" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'MatchPage',
};
</script>
