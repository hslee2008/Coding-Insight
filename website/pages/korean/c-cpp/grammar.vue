<template>
  <div>
    <Header type="C/C++" title="기본 문법" num="13" />

    <div>
      <div>
        <h2>main() 함수</h2>
        <p>
          1. C 언어에서는 main() {} 안에 모든 코드를 넣습니다.<br /><br />
          2. main() 함수는 항상 0을 return해야 합니다.<br /><br />
          3. main() 앞에 int를 붙여서 0을 돌려준다는 것을 알려주어야 합니다.<br /><br />

          더 자세한 내용은 함수에서 배우겠습니다.
        </p>
      </div>
    </div>

    <QuadSpace />

    <div
      style="
        display: flex;
        background-color: #3c3837;
        padding: 5px;
        border-radius: 10px;
      "
      class="img-div"
    >
      <div class="mx-auto my-auto">
        <h2>;(세미콜론)</h2>
        <p>
          ;는 세미콜론이라고 하고 항상 C 언어에서 코드 다음에 넣어야 하는
          문자입니다.<br /><br />

          세미콜론은 C 언어에게 어디에서 코드가 끝나는지 알려줍니다.<br /><br />

          ; 기준으로 한 줄에 모든 코드를 넣어도 C 언어는 코드를 빠르게 잘
          실행합니다.<br /><br />

          하지만, 조건문 & 함수 선언 등에서 사용하는 {}에 ;를 붙일 필요는
          없습니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEU8ODfy8vI8NjY7ODY1MTA8ODjx8vH5+PhpZ2f19fXy8PE4NDPx8/IvKik8ODYpIyInJiP5+fYsKSc1NTLj4+MoIyGvrqycm5l7d3bPz80wLi9rZmYnISGDgoDs6+wtLCpWVlVhYGBHREXBvr+gnaCjoqBAQEDf39/Kx8mSjYxSUlBwbmzh4OK3trSFg4UsJykGaXwgAAAFaUlEQVR4nO3dbXOiPBQGYEgCMQQUFF/oWrC6itWn6///dw9B1yoCOtUZJtn7mmmnY7/kTN4PCVoWAAAAAAAAAAAAAAAAAAAAAAAAQDun6wK8Hj3/RSQrSVkGSi//pzNCSPFjscPcWXz0lMVyOA+k+pQQA2KkKg4SBLNVKviJ8JLfyzlT/+i6eC+g+h0bTtMiLNv37ZJne4KvFsOuy/YKxKGUhr04sm8Ivg5HlOo/8tBROI1c9zZC2+aJZFr3w7Lw0gon3K2P0BbxZtR1KZ9By2FkvOae7Xq1Edoi1zrCYjZwrOyd1wd3aqjbMdG5Jxazwaa+fZ5Fn0HXpXwKGayi9hDdtC+7LuUTqNzxhh54jpCvtZ4Wh5PWXliKM50rcRjfDdDme9Z1MX9O7mrWMlVirfFYw2aPRJjMuy7nzwVTcT9COw+03UTRYPJAHbox03YTRYdfD9Shm2ocYTC5s6Ipxfq20qIfPtJKc42n/MfG0u2g63L+nFw+0A/5VOP50Arz+yHyD6lxVjGYcrthf3/qhJ7936HrUj5Dbrz2CG2PT9/6XRfzGcM191vbqBuPnGI21Ha6sCSL/aYkTSl6z2gRnr4RWuyjeYdYNF/+FVJ9gzsavnO7sRL5dqjz9vdk8KcpX+rybWBAgMQ57F2/LkIRTcaWrmvuK/1suVUZN09RoZW/3SiehQbU4NEo3Cc8Oi9vPFuIKJ0GOq/WKihl4910lbvFGqbgpsmkFwZlTtwY6iHpeD5n7K0wnA+yEXUcQ56QVvQL6qmpY1D1AQAAAAAAAAAAAAAAAMBjnAvVz7U+7XXE7tD+oIL8ddSroT7fLzUPUe6iKOIt0q5L+Kxs2n7pic80P25CwqT1gLDQ/HKlOj175+xs0Qv1jpC9t16u5NODpXkdDlYt9efZeab7udI+S9uaKO9pfOvwiO3bDgfzlcZX8k6Gk7aRNN3Ivt6LNuoM45YD7Pwz0PgWSYnKRct0L/JQ+7fv9IPfonmu4B/aDzOWFSZ2U4Qun4wtve8g0Du31lJC9N8bBp/N3ZC/B3qvZUqDbWMdimSg/TBTNFKauk03usSC9XWPkFps1ngViK+1vm/416D5mnr8pv8oUwgaV9189mbAMGOxXtMdbrGdG3EPIVvXNlLfd+2d1HyQKZEwb2qjU43fLnBB7prGmdyEC5XW8Y563arU4/sRMWC2V6tucbppWGmjq7EZN7nkxrVrI/Q2ZrRRlUZUEd40U675y+e+DVbCrqlCkY+7LtmLEFasumvaqDBhY6/0yzRiTRv9Crsu2qs0pBFTAyaJEqVZ7YKG/8kMmClUCA6rTSOKZK7xyz2uBbWrbrGQRO/XzZ6RMKlZr/HJwbEMeO1z0UaJXNZlgmMjtr2WWlOT4JPfROjyWdZ10V6GDLb2TZJNbey7LtjLkH5dim0nzYlQpRFvhpn1wZiZoj6NmJvTCS2VRrxdkO5NipB93JwwEavQnCZqOcWC5qYONyMjpvoSpdU0omtHU+3PzVwaVdKIvi9yk9rozWlE1/f5L0M29idhUh1mvtTTUHNqUVa+6sEvNvYqf2hOhKz6bR3m5A+PnHB1PdCIxJAc99mosqDhC/Y3QgMaKimfi35HqN5NOglNeJ59oZqhSUfSMWhTYd2coeF/MsuwtwYGl2fzfZU/JEY8s/82uJ7vl1LfLwRoEFym8/nnoRh9jIqQXj2+F9s5MeMNut+oRQ7nA4kiluqbKx3HsEqk43chhHoFcr5hlhHT/LViXMk26yROk8/QkGcUVZQ6MhsXMoM2TFeKCPvF6CJP86CJURYDi+MQyzHyDcjXTG2l/wZy0nU5AAAAAAAAAAAAAAAAAAAAAADgn/M/HTlEg7wXkhAAAAAASUVORK5CYII="
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>#include</h2>
        <p>
          #include는 어떤 특별한 기능을 추가하겠다고 C 언어에게 알려줍니다.<br /><br />

          &lt;> 또는 "" 사이에 파일 이름을 넣습니다.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <code> #include &lt;stdio.h> </code>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="comment" aft="escapecharacter" />
  </div>
</template>
