---
sidebar_position: 7
id: 'cargotoml'
---

# Cargo.toml 파일

`Cargo.toml` 파일은 Rust 프로젝트의 설정을 정의하는 파일입니다.

이름, 버전, 개발자 등 프로젝트에 대한 다양한 정보를 바꿀 수 있습니다.

외부 라이브러리를 사용하는 경우, 이를 설치하고 `Cargo.toml` 파일에 추가해야 합니다.

```toml
[package]
name = "a"
version = "0.1.0"
edition = "2021" # See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

## [packages]

`[packages]` 밑에 있는 설정들은 프로젝트의 정보를 저장합니다.

이름, 버전, 개발자 등 프로젝트에 대한 다양한 정보를 바꿀 수 있습니다.

```toml
[package]
name = "a"
version = "0.1.0"
edition = "2021"
authors = ["Hyunseung Lee <myemail@gmail.com>"]
description = "A simple Rust project"
homepage = "https://www.coding-insight.com"
repository = "https://github.com/HyunseungLee-Travis/Coding-Insight"
license = "MIT"
documentation = "https://docs.rs/a"
readme = "README.md"
keywords = ["rust", "coding-insight"]
categories = ["rust", "coding-insight"]
links = ["https://www.coding-insight.com"]
```

## 더 제사한 정보

출처: [Cargo.toml](https://doc.rust-lang.org/cargo/reference/manifest.html)

<iframe
  title="Cargo Toml"
  src="https://doc.rust-lang.org/cargo/reference/manifest.html"
/>
