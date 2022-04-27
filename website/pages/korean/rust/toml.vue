<template>
  <div>
    <h2>Cargo.toml 파일</h2>
    <p>
      Cargo.toml 파일은 Rust 프로젝트의 설정을 정의하는 파일입니다.<br /><br />

      이름, 버전, 개발자 등 프로젝트에 대한 다양한 정보를 바꿀 수 있습니다.<br /><br />

      외부 라이브러리를 사용하는 경우, 이를 설치하고 Cargo.toml 파일에 추가해야
      합니다.<br /><br />

      <code v-highlight class="rust">
        [package]<br />
        name = "a"<br />
        version = "0.1.0"<br />
        edition = "2021"<br /><br />

        # See more keys and their definitions at
        https://doc.rust-lang.org/cargo/reference/manifest.html<br /><br />

        [dependencies]
      </code>
    </p>

    <Header type="Rust" title="Cargo.toml 파일" num="38" />

    <h2>Cargo.toml [packages]</h2>
    <p>
      [packages] 밑에 있는 설정들은 프로젝트의 정보를 저장합니다.<br /><br />

      이름, 버전, 개발자 등 프로젝트에 대한 다양한 정보를 바꿀 수 있습니다.<br /><br />

      <code v-highlight class="rust">
        [package]<br />
        name = "a"<br />
        version = "0.1.0"<br />
        edition = "2021"<br />
        authors = ["Hyunseung Lee &lt;myemail@gmail.com>"]<br />
        description = "A simple Rust project"<br />
        homepage = "https://www.coding-insight.com"<br />
        repository = "https://github.com/HyunseungLee-Travis/Coding-Insight"<br />
        license = "MIT"<br />
        documentation = "https://docs.rs/a"<br />
        readme = "README.md"<br />
        keywords = ["rust", "coding-insight"]<br />
        categories = ["rust", "coding-insight"]<br />
        links = ["https://www.coding-insight.com"]
      </code>
    </p>

    <QuadSpace />

    <v-alert dense text type="info" dismissible>
      더 많은 정보를 알고 싶다면,
      <a
        href="https://doc.rust-lang.org/cargo/reference/manifest.html"
        target="_blank"
        >Cargo.toml 파일</a
      >을 참고하세요.
    </v-alert>

    <Navigation bef="use" aft="dep" />
  </div>
</template>
