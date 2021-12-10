# 판다스
판다스란 파이썬 라이브러리로 데이터를 효율적이고 빠르게 다룰 수 있는 함수와 메서드를 담고 있습니다.

판다스는 기본적으로 설치되어 있지 않기 때문에 PIP을 이용해서 설치하겠습니다.

```
pip install pandas
```

# Series
판다스에서 주어진 이터러블을 사람이 쉽게 보고 이해할 수 있는 형식으로 바꾸는 Series() 클래스를 사용해 보겠습니다.

먼저, 판다스를 가지고 오고 Series() 클래스를 새롭게 만들겠습니다.

```
import pandas as pd

s = pd.Series(["A", "B", "C"])
print(s)
```

위의 코드를 실행하면 다음과 같은 표가 콘솔에 출력됩니다.

```
0    A
1    B
2    C
dtype: object
```

그리고 각 값 앞에 출력 되는 값은 index 매개변수 안에 집어 넣을 수 있습니다.

```
import pandas as pd

s = pd.Series(["A", "B", "C"], index=["First: ", "Second: ", "Third: "])
print(s)
```

마지막으로, Series() 클래스 안에 있는 값들을 딕셔너리와 비슷하게 키를 사용해서 값을 가지고 올 수 있습니다.

```
import pandas as pd

s = pd.Series(["A", "B", "C"], index=["First: ", "Second: ", "Third: "])
print(s["First: "])
```

# DataFrame()
판다스의 DataFrame() 클래스는 이터러블을 테이블 형식으로 콘솔에 출력할 수 있습니다.

DataFrame()를 사용하려면 먼저 데이터 이터러블을 넣고, 열 값을 넣고, 데이터 형식을 넣으면 됩니다.

```
import pandas as pd
data = [['Hyunseung',10],['Bob',12],['Clarke',13]]
df = pd.DataFrame(data,columns=['Name','Age'],dtype=float)
print(df)
```

# Clipboard
Clipboard란 컴퓨터에서 복사한(ctrl+c) 모든 데이터를 저장한 곳입니다.

원래는 윈도우에서는 Clipboard가 꺼져있기 때문에 먼저, Windows+V를 눌러서 클립보드를 엽니다.

https://t1.daumcdn.net/cfile/tistory/9916724E5D3CD66B19

다음, 켜기를 누릅니다.

몇가지 텍스트를 복사하세요.

그리고 판다스로 돌아오겠습니다.

read_clipboard() 메서드를 사용하면 클립보드에 있는 콘텐츠를 읽을 수 있습니다.

```
import pandas as pd

print(pd.read_clipboard())
```

to_clipboard()를 사용하면 클리보드에 우리가 원하는 텍스트를 넣을 수 있습니다.

```
import pandas as pd

df = pd.DataFrame([1, 2, 3], [4, 5, 6], columns=['A', 'B', 'C'])
df.to_clipboard(index = False)
```

# CSV
CSV는 Comma-Seperated Values의 약자로 ','(쉼표)로 구분한 값들의 모음입니다.

마이크로소프트의 EXCEL을 사용해서 CSV 파일을 만들고 그 파일을 판다스를 이용해서 간단하게 표로 만들어 보겠습니다.

img/csv.jpg

read_csv() 안에 CSV 파일의 주소를 넣고 출력하면 정리됩니다.

```
import pandas as pd

df = pd.read_csv('data.csv')

print(df)
```

위의 코드를 실행하면 CSV 데이터에서 몇 가지 부분을 줄여서 출력합니다.

다 출력하고 싶다면 to_string() 메서드를 사용하세요.

```
import pandas as pd

df = pd.read_csv('data.csv')

print(df.to_string())
```
