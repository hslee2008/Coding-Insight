# 변수의 복사와 움직임

## 복사

복사란 변수의 값을 새로운 변수에 저장하는 것을 말합니다.

```rust
let a = 3;
let b = a;
```

위의 예시에서는 `a`와 `b` 둘다 똑같은 값 3을 가지고 있습니다.

모든 기본 데이터 형태의 변수는 이와 같이 복사됩니다 (스택만).

복사는 `a`값이 바뀌면 `b`의 값도 바뀝니다.

## 움직임

움직인다라는 것은 복사와 같지만 원래 변수와 연결된 값은 더 이상 존재하지 않는다는 뜻입니다.

즉, 원래 변수와의 연결을 끊고 다시 새로운 변수와 연결한다는 뜻입니다.

```rust
fn main() {
  let a = String::from("coding-insight");
  let b = a; // moves value of 'a' to 'b'
  eprintln!("a:{} , b:{}", a, b); // Error use of moved value 'a'
}
```

`a`의 값이 이제 사라졌습니다.

그래서 `b`의 값은 `a`의 값이지만 이제 사라지고 있습니다.

:::note 이에 대한 더 자세한 설명은 `rustc --explain E0382`를 실행하세요. :::

모든 heap 변수는 복사하지 않고 움직입니다.

움직임에서 `a`의 값이 바뀌면 `b`의 값도 바뀝어야 하는데 그럴 수 없고 한 변수를 정리하려고 하면 다른 변수도 정리해야 하니 메모리에 문제가 생길 수 있는 확률이 늘어납니다.

## `clone()`

그래서 heap의 경우 `clone()`을 사용할 수 있습니다.

heap는 복사와 달리 원래 변수의 값을 바꾸면 두 번째 변수의 값은 바뀌지 않습니다.

```rust
fn main() {
    let mut a = String::from("coding-insight");
    let b = a.clone();
    a.push('.com');
    println!("a:{} , b:{}", a, b);
}
```

`a`의 값이 `coding-insight`였다가 `coding-insight.com`으로 바뀌었지만 `b`의 값은 바뀌지 않습니다.
