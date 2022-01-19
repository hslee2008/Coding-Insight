<template>
  <div>
    <br />

    <div>
      <h1>__name__이란?</h1>
      <p>
        __name__이란 실행이 되고 있는
        <mark>파일의 이름을 알려주는 변수</mark>입니다.<br /><br />

        이 변수는 파일이 import 되었는지 아니면 원래 파일에서 실행이 되었는지 알
        수 있는 변수입니다.<br /><br />

        또한, __name__은 모듈의 이름을 확인하는 데도 사용됩니다.
      </p>
    </div>
    <div style="text-align: center">
      <v-img
        alt="python-factory-picture"
        max-width="500px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAAB9CAMAAABUDq4oAAAA5FBMVEUzMzMoKzIqLTIoKCiIdDuUfj2hn5+Uk5MvMDMwMzEiNCcyMzIwMDAsLCwuLzPDHKa4H51QLUkrNC0jIyMoNCsjKDJnWzighz5mZWW2tLS0l0GNeDxiVjchJjI5ODS0srJeXV1FRETJx8dTUlJ6KGucHodFQTUeHx/hukdKRTUYITHSr0V7enrc2dmmjD9SSjZ7ajrAoEKKiIiopqZoK1xfLVWuH5U8MTpJSEiJJneXJYJvKmJQSTaEJHN2J2gYNCEANgzQGLDjEsD59vb1y0oVFhYCBQVEMEBZLlDU0tJxYjm5m0HMzHjDAAAEZ0lEQVR4nO3YfVeiShwH8AE0UWZoE3kUUaEwNU2lVbNubvdud7f1/b+fOzzY7h7FtD+2PPf7OR78BYwYX2YGJAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/ThAObCDvt9fBn/th1GrrSqnWatU/fXjBNMPDWvTdfTIJTfNII6lNp1kk5fLtxeKu/IeP3+hfhvtd9WvF+z32l7uX/cYbv9I7q97epv1CmT3+dXf+kJ8I7UiSpklJyQuNEsI6vGD8la2T6MHH11d9ZfsWuSHouiroIq/5W/LO+5TeU5OtuiCu123j9R09rdRG/l4fULWyrCSFUjmbflku80ct2n4+Kfl+iZ99GkS23wwouxqUfNuyfYsRyYp8+8Q7OBJ9ON5+wuTrft1xXHM1UolsmI5T9Eg8yK3G8aglh+M631xQ8z5X7Gejlmr060cUSfXh9HERj1rK7NPj36en01nOBcux1j+Tdrs5YTyRqzZp+YRqtk1KAyvwNWY1W6Q9sUluJNVKqkpqWZV0R7E+zBnvxcK4a/RHxOnKsuF6XqGYnFi5bsQxqO7lyAuHo7xIdKeQdari1/FRzSizu4tkHlHkmymd7QiE0Jb/RFmrqREikXlA7DbVmnPJOulIfkezW0EQzKMrltO6en6aOq9dZNVZEomXN7GLBUMIhw3dvJaJ7nXDbhqdkCYiu8MejyV/+g69rPBG3cMmqndWvUkTIdXP04qyIxCeCA+DtiKJSBPftqNBnEjArBOJ8UQGdsLKS4TfOGSUl2r3NxMLP8RwKAg8EdlcDYfDdGIQ14nwMGS3uMflrx5VID8TKfNEdu75kgi17I6m/Wv/mkjnmfB1WkfKPc7Dp9RDbZFVZ7sj+ZmIUC/0dN1L+8jBiai9oxq0DkiEBc0OX0QdNik9SZ3WgN99RXNmlTTmP7GJLWlS56qVN48os7PUrPwtq175ZkLBEEOzIZj3uuny+67Cqhc/+PUKrs5PsXptNviiqL/2D6qjS/OIZnalVvl8sayV43ut79PlrgdEGtiDK+ZFA4tRuxk1m35zbg2amvXckp5LjI9kUWTzfpN7qPWg9VLt/mr8bsoJw/GPxtD07lem6RTHdZn3jOLY4Q+V8r3TN1TPfP1xUax/XR1PIoq8WEwfF4ubsvLtNi7Os9PEpE1tywooiReUtqxAC6z23LKoZ81pYFESb59LlG42zJ1afiFs8lzXI+612nU9ldeh6Lr8wc9wOcMjoevey3x1V93S9PfPvva2H/NDks8T38vKLClu0kTY5GRDSWKMdwAaLwgPhVfpH3GZraPxo8pGy8nrkajFTYYYP3fI8St5XxextIgXqrGl6e994sgm9kQ8aq2LGJ8pNuxxXjk6f1NLuV7YsNfPV3xy32x5TE+E+9oyau0VSPxjyptaipv2vLTlLU33awkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+o/2U9rJu5E+X0AAAAASUVORK5CYII="
      />
    </div>

    <br /><br />

    <Header num="72" title="__name__"></Header>

    <QuadSpace></QuadSpace>

    <QuadSpace></QuadSpace>

    <div>
      <div>
        <h1>__name__ == __main__</h1>
        <p>
          다음과 같은 예시를 보겠습니다.<br /><br />

          <iframe
            src="https://trinket.io/embed/python3/c6d50081cf"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          ></iframe>

          <br /><br />main.py를 실행하면 HI가 두 번 출력이 됩니다.<br /><br />

          <iframe
            src="https://trinket.io/embed/python3/b01563dd19"
            width="100%"
            height="356"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            loading="lazy"
            style="margin: auto"
          ></iframe>

          <br /><br />위에 있는 예시에 있는 main.py 파일을 실행하면 HI가 한번
          출력됩니다.<br /><br />

          __name__ == '__main__'은
          <mark>파일이 직접 실행이 되었다면</mark> 조건문 안에 있는 코드가
          실행이 되고 그렇지 않다면 실행이 되지 않습니다.
        </p>
      </div>
    </div>

    <QuadSpace></QuadSpace>

    <BeforeNextButton flink="asyncio" slink="thread"></BeforeNextButton>

    <QuadSpace></QuadSpace>
  </div>
</template>

<script>
export default {
  name: 'name',
}
</script>
