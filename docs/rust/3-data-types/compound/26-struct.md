# 구조체

구조체란 나만의 "데이터 형태"를 선언한다고 볼 수 있습니다.

예를 들면, `Student`(학생)이라는 데이터 형태를 선언하고 싶다면 구조체로 다음과 같이 만들 수 있습니다.

```rust
struct Student {
  name: String,
  grade: String,
  age: u8,
}
```

그리고 이 데이터 형태를 사용해서 새로운 학생을 만들 수 있습니다.

```rust
fn main() {
  let student = Student {
    name: String::from("Travis"),
    grade: String::from("A"),
    age: 13,
  };

  student.grade = String::from("A++");

  println!("{}", student.name);
}
```

## 구조체 빌드

구조체를 자동으로 만드는 함수를 한 번 사용해 보겠습니다.

```rust
fn add_new_student(name: String, grade: String, age: u8) -> Student {
  Student {
    name,
    grade,
    age,
  };
}
```

이제 자동으로 `add_new_student`를 실행하면 `Student` 데이터 형태를 만들 수 있습니다.

## `..`을 통한 구조체 업데이트

구조체는 저번 값들을 유지하고 일부만 바꾸는 방법이 있습니다.

당연히 `student.grade` 등과 같이 하나하나 바꿀 수 있지만 더 효율적이면서 보기도 좋은 방법을 알아보겠습니다.

```rust
fn main() {
  let student = Student {
    name: String::from("Travis"),
    grade: String::from("A"),
    age: 13,
  };

  let new_student = Student {
    grade: String::from("A++"),
    ..student
  };

  println!("{}", new_student.grade);
}
```

위의 예시에서 `..`을 통해 그 구조체의 값을 `new_student`에 저장하는데 `grade`만 바뀌게 되었습니다.

## 튜플 구조체

튜플 구조체란 배열과 비슷하지만 그 값들의 데이터 형태와 수를 정해 놓고 시작합니다.

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
```
