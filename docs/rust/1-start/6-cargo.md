# 프로젝트 생성 (cargo)

cargo는 Rust에서 프로젝트의 기본 구조를 만듭니다.

또, 필요한 파일이나 패키지 등 다른 곳에서 가지고 와야 하는 파일들은 다 `cargo.toml`에서 확인할 수 있습니다.

![Cargo](https://doc.rust-lang.org/cargo/images/Cargo-Logo-Small.png)

## 프로젝트 시작하기

```sh
cargo init rusty
cd rusty
```

위의 코드를 VSCode 터미널에서 실행하면 `rusty`라는 이름을 가진 프로젝트가 만들어지고 그 프로젝트 폴더로 들어갑니다.

`cargo init rusty`은 `cargo`를 사용해 `rusty`라는 프로젝트를 만듭니다.

`cd rusty`는 프로젝트 폴더로 이동합니다.

## 프로젝트 실행

:::note
밑에 있는 것과 같이 박스 안에 있고 색깔이 없는 코드는 터미널에서 실행합니다.

VSCode에서 `` ctrl + ` ``를 실행하여 열고 복사해서 입력하면 됩니다.
:::

```sh
cargo run build
```

코드를 실행하면 빌드를 시작합니다.

빌드란 프로젝트를 기계가 이해하는 0과 1로 전환하고 실행하는 과정입니다.

사이트에서 Rust를 배울 때 `src` 폴더 안의 `main.rs` 파일을 수정하면 됩니다.

```
rusty
├── src
│   ├── main.rs
├── cargo.toml
```

빌드가 끝나면 `target` 폴더와 `Cargo.lock` 파일도 생성이 됬을 것입니다.

이 파일과 폴더는 자동을 생성되는 것이기 때문에 무시해도 됩니다.
