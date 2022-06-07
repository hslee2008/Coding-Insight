---
sidebar_position: 3
id: 'installation'
---

# Rust 설치와 업데이트

Rust 웹사이트에서 Rust를 다운로드 받으세요.

## Windows

[Rust installer](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe)

다음과 같이 뜨는데 엔터를 누르고 기다리세요.

```sh
Current installation options:


   default host triple: x86_64-pc-windows-msvc
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>
```

## Mac

```sh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
xcode-select --install
```

## 설치 되었는지 확인하기

```sh
rustc --version
cargo --version
```

다음과 같은 형식으로 뜬다면 Rust가 설치 되었습니다.

```
rustc x.y.z (abcabcabc yyyy-mm-dd)
cargo x.y.z (abcabcabc yyyy-mm-dd)
```

## 업데이트하기

```sh
rustup update
```
