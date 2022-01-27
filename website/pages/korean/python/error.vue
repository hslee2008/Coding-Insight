<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div>
        <h1>에러</h1>
        <p>
          가끔 우리가 파이썬 코드를 만들 때 에러가 생길 수 있습니다.<br /><br />

          만일 버그(문제가 되는 코드)가 우리 프로그램에 존재한다면 우리는 그것을
          제거하거나 무시할 수 있습니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABVlBMVEX2Vlb///83SFDQSUn/U1M0Rk4tSFBDU1zhTk7USkr4VVfYTE3oUVLyVVaNTVTuU1T9V1XSOzvisLDs19n2TFD2vrz9Skn2trT///zCxMv+/f9iZnk3SFL9VVqTUFH5//+WmqVfvWfy8fYxPF1dSFEqNFoaKEojMVTR1dmDiJg1Skw7RlX/UU4zPF88Ql4nNFNGTGqsrrnYV1yeTFWrVFT9U2DfVloYSFDHUlkyRld2T1A2S0crQVIeQ1E5P1NNSklaTEiZijSwnzp3ejhBc1RQkF1MfljnWlFDVEDu0CH/2hHBsSZbn2dcw2JlsG0yU0lYRkwaNk3+1BWypS9GR0/XvipucD7/3w1euGc+aFVVnmH3q6b+8O3qmZjx0NT3gYPzbm1RWW9xdYbKzNX1ko4YJE/d4ua2trxIUG/4eXcACzvvx7+Rk6FfY299hJkKHUX8qrHVe32xo+5sAAAJhklEQVR4nO2d/XvSWBaAuRhYSmHAKaYhBENJQ/gICahT7djt7uyM0/FrZnR3RmelFagG3aLr/v+/7DkhUEBSjfM03DzPecVCAheal3POPTdUG4sRBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEek4RJdstlymKrg1bKRJRbLhucKPOUjTTmfTocmK52+cfOr6HL9TniqYrH8rWS0uf5NeLL2bjebSjyyKM3bd8JSlY7dut2KsCtg/9t8WLLSN5Ozl1WUOHibqFO8LaAJl9l+/mjuhiUrVr6enFlQms39ZHK/hbfvxg/+uu+KUlqtQ6u1PhmfQFF2Y7nJGx+GrPMXbu3/7ebNvyfQXqv53T++P2zuKy0l8cO9H+8qrebafFwIysrksOEKWVby29xRZg/3KD/df/Dg2UOs/Xcf7Tx+/PMvvMYWyMqlMpnQZSnNG0dHmezer4n4wcOnwLPvE/HEDzs7O8937nEbWYndVCoFsRW2rF9TmaPM0dG3SvzJ/acP4M8/D5SDe4/B1uOfE5wWeJS1ibbCTsN/7WX2QNduIv7kt6dPIQ+/S7ZaP+6grEcJTvNQie9ubGy6oRWurP3r2aNM7hZOgb8/A1n37yrNePM52vqD08ByZV1Zgywl3vzqxo2bcdxz8Ptv9x/+pKC3X/79/NEfvGYhFvj1RFZTSSZvJ91KnrAOjCeKgrnXOjxoJVoKrwUeZW2sIbIgtODLZPmDXcO0g2/F+V0SQYGHyNoMP7LAlHJ+C8W5N3G1w2lcASDryhoiK5okdzdDlJWIOGHK+kvUCS8NC9dY1Nm6Go6sNMkiWSTLD5IVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAJIVAB5lyXBRGVMv87i/CB5lMSZJoEuWL++wvwwuZWFMqTJF1ucgq1svtnsUWZ9GklXpWBTFwgmTLvnYA8OdLCapL0RBKJuF3uUe+RfAnSxZ7ZlmTMiXxZeXfOjB4U6WpL40y0JeEPLiCW/tA3ey2AkkoYvZlzgr8dzJUvti3rMlbqt81XjOZMns2syVYKY5q/FcyZKYKqVN9JSNmWa5LB6r0Mv71C1J/rKwm09taOUk93XnNrG9k1Y/NVey4ECwbRC+2ZKkDyJUebEHfbxP4UJZ8gQm+xzdynHeMBUGuX1vterpwnvcDb8n40qWKvXMSa2CY8kKZkF8qaq+ASRLp4PShMHos10B771RqEruljqd0mjyGk5j0HkzPPUdyJUsxl6JXmGXWF8o503xRPUr8nCoRb3d1pHX3c9XJTHNHWVYGLNDW3ttaEYD7ylqml4zNHvEfBYP/MiSIYS2TDeyXmCOZSftg/+EKLGirQ1HXaTuJiskluRlrTQtTrgLyh7mnDesWrPGFaAOD6rYWsNxhm0DBFUtyxo5Rcs6dHxekxtZ7iG9dadC8Ri2pJg7I8Iov2YLZLW1yvwOaWFDmr4J3tNPOTUG05tVS8Pb8kCzGeu+rqHzka53fV6TI1kqOxPLrqxXKKvgTotCVvLr4kGWPpGFYpyiw5zKSHavu10IU/W02y1WmXtfnVW73epkXFcfTgcVDX0EUcy6tl5nxeEYI9ox+JeFxbYvuo0DrAoltec18pCTftPhTBYyrpXqNd2qVl4P6jWjXWX1Q90wMEoYG9WsumZD3Lg02o3iqOiaq2iGg9d1W+vOntS2iz7fIzeyJFnd9vyYuIT2ZJmFWE9dbcuV1XDqACRZpT1oa513akXrtLTOQIXj74wrJc0AC0W788buWF5kDaCO64ZegScYWjV3l2NpjUniwj7NqnLfZ0m92LRzfyvNZGEFU1cnIsqyYC4zjP9A0lUsq+NAl1TR2gO8LmkayhladhUngsPTquMVrnfWYDi02naDzWRB7XrPJnPDCLOQ9wIvq8dzK2imztbTQmGLrVxRY4G3OoiF85qluw0SZNYpbDqaNna7C1sb4Zf53qIKz1Z9p9nOsiy4nNrtoe9ZR05kyXOhhEWdQbH3NvImdqarZdntsduOYxpqNfdBFasGRZ3VDc1tVEFaBctQfX4cZtmpDf1UwxsEaTh2Z9NTXRv6n+rgQxZ27C/NmawYfNtn5+4KZysHLbYOIKs6d13XZ7LGIMuoz4+UIVIdu92FB+tegYcN2Y2r0gWn0PiQxVRMu5mtQk9i185lif2V7cOFshwv89x5bkGWu3KWpbphFDH+3AKFsyK8QWD4nV/3zo8smAr754EFslS2fS4rL64ceqEs6DPf4ObYqjlLkTVyg6mk4ez4xurA+1DtWB2oBKfaRTnIjSymzmUdymKT0w9T0hBaK97womaVxkijuCyLdQ1t6DiQZ0O2WLMqNatSHL3TdPQ8gryDjTZODnWtrb0fIn7Lck5kSbk5NYK4pbJXc5GWh8704zUiTHWGpRm4JoaF9Nj470SWPblmY1uvvdbtUhXbgdr5qYSipdu63jbGbq9QMaDp0u2uG4uWhS2YPunwuZWlLsSRIJ6pUO9nZ0wFMy9+3Jli3Xnf8CiyUWPoSppeQwVqDEvvi3gCo95oOOcDq91haTiue0vJeqNUGmPcyePpkzUqXJ916KXz87KEvnxWmJOVFrB9WDqAj8+USvN/Ze9u2ZOy8GB5umN61lCWllbh3MpSoR8tL8gqFIRF8uKWv+rQWL8sWWVbolBeVCOKi6GGJ7bW/7nY+mUBLxfV5IX+i+PCoi2f9iFc1i9LZifiYtaZ2Z6qXluKLbNPkYVLnf5SgTJfQaMgLSeiuK2u+9N8DmQtxxCedcDlz9JeIet3Yis0OJD11lyyAo3C2VlOWJYl+p+OD4n1y2L9ZStgyxTN8vJO8cO6f/Rh/bKkt+JHXlZRXv98uH5ZH9esVeRNcY9qFtj6kBY/g/4Wo5oF9M62P8W1Ew5+1JsLWezTHZTPJzzhwoksWPSrF7H2DHThQ5b8KRcBfv7qEuFDVkQgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEgWQEIS1YsXdjm8T8BCYIaoizff1cSEVT1JCxZsXRfktf9WdafQ/1faLJihWMuzg1/OV9fDe3XMsSyhf7x1xHmDroKSxZQyF2NLhsbV66EFlnpWDaXSm1eiSqbEFehycJfh55JpTbWfdB/hhDTMJvLpDajLCu030LnysphaEWYzVTIsjYjTHiuYpNEjDKZEF25tqJMLhemLEzFKJMN0xXqijLhqiIIgiAIgiAIgiAIgiAIgiAIgiAIgiCIC/g/iQFVuIDWwEQAAAAASUVORK5CYII="
        />
      </div>
    </div>

    <QuadSpace />

    <Header num="61" title="에러 다루기"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>try - except</h1>
        <p>
          예를 들어 우리가 파이썬을 이용하여 계산기를 만들고 싶다고 가정을
          해봅시다.<br /><br />

          만일 사용자가 숫자가 아닌 문자를 입력하면 어떻게 해야 할까요? 우리는
          여기에서 예외 처리를 할 수 있습니다.<br /><br />

          예외 처리는 try를 사용하여 그 키워드 안에 있는 함수들에서 에러가
          발생하면 무시할 수 있습니다.<br /><br /><br />

          밑에 있는 예시에서 0을 입력하세요.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/cc1e7a05d5"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>특정한 에러</h1>
        <p>
          특정 에러가 생겼을 때 실행하고 싶은 코드가 있다면 'except' 다음에
          에러의 이름을 넣으면 됩니다.<br /><br />

          에러를 여러 개 찾는 것도 가능합니다. 튜플 안에 넣으면 됩니다. 하지만
          튜플 안에 있는 에러가 코드에서 모두 발견되어야 except 안에 있는 코드가
          실행됩니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/ed6a6e6033"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div>
        <h1>try - except - else</h1>
        <p>
          만일 try 안에 있는 코드에 아무런 문제가 없다면 'else'를 사용하여
          특정한 코드를 실행할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/14b1f55e66"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <div>
      <div class="inner-div">
        <h1>try - except - else - finally</h1>
        <p>
          else와 비슷한 기능을 하는 'finally'라는 키워드를 사용할 수 있습니다.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/c6fec3fdb7"
      width="100%"
      height="356"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      allowfullscreen
      loading="lazy"
      style="margin: auto"
    />

    <QuadSpace />

    <NaviBtn flink="array_shape" slink="error2" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>
