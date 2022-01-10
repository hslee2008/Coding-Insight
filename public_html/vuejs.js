const app = Vue.createApp({});

app.component("pyfact-footer", {
  template: `<footer>
      <div>
        <a class="btn btn-light" href="https://coding-insight.com/chat.html">질문하기</a>
        <a class="btn btn-light" href="https://github.com/HyunseungLee-Travis/Python-Factory">팀</a>
        <a class="btn btn-light" href="https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA">유튜브</a>
      </div>
      <br/><br/>
      <div class="d-flex justify-content-center p-0 w-100">
        <div>
          <h1 class="display-6">Python-Factory © 2021</h1>
          <p>"지식을 만드는 곳 - 파이썬 팩토리"</p>
        </div>
      </div>
    </footer>`,
});

app.mount("#app");
