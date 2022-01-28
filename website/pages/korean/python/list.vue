<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h1>리스트란?</h1>
        <p>
          리스트는 한국어로 '순서'입니다.<br /><br />
          파이썬에서 리스트는 다양한 데이터를 순서대로 나열한 데이터 형태를
          뜻합니다.<br /><br />
          예를 들면, 일상생활에서 오늘 해야할 일을 나열할 때 파이썬에서 리스트를
          사용할 수 있습니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA7VBMVEVpuuf///86UGUAAAD+22c4S19rvetUi63cn0IrRVyzuMC3vsRNiapXmL07VGopQ1rGy9Lm5uaTk5MuLi6JiYnfpEX8+PK2trb/3GMmJiZfuOzNzc3T0ZCkpKTz8/P5+fljrNVRUVFra2tjY2P/4WczTGV5fWbT09P/3V6GhGaYw8Sgxr3iokCao6ytra1ZWVl1dXUZGRl3vdyHwNTi1YPb04qyyLPS0ZXo1X/z2W+kxruNwc1ZtvC2yq1xvODKz5qcvLFNfZtDY31xbl1xbV17dFvPw65ygZD66tHamC9CQkKOjo4eHh5LX3JepM2YkfgTAAAEMElEQVR4nO3db1eaUADHcUDA0dTNcpNwglpN1h81zdKc23Bbli3f/8sZaBoqKCKee+7l933QE4vD/QQoVz2X4xBCCCGEEEIIIYQQQgghhBBCCCGEKE7Tmq1WU9NI7wfBtIsb0VTFzkWMEdo2gJ1qtknvCbHapjghUEX1hvS+kEm7NcUJwl1HFc1+PE+Hrtq9V1W1p3GtriqS3hsi9eyDgGve2WeBdm4fCOek92f/act9v7evh63J06LWtw1uv6/8Cul9jrhe+8tyHftq2J88qLVtjs7d8i+0e4R3Otq0c1NdznlG6PxwHuxNnyGXM++ZOhJsA9Er9af9WKvr+ZhosvXSyc/gtsm1+t4CsTFQTXP6UpFFA1kuLeRjsDbz1+I2ZJn0qLZJLlkZwd3Z19PtDU6/nS1sJGOV6FGQk5IkRG8gSFKSFgSbQBD2YWArpOhAkMcrBJEZCNKYCgR5sLLn0RkIAyoMSquHQYQGEg3XRTntZfD78tPWXf71MkjTYLB6RbQN/ly+2zpvAxqeGtwGyodZ4Qzmf67QaqC8HHyc9fAUwuBh/ucHLwqVBsqQf+sxhMHTo2sDQ4VGg4zhNghzTXQb8BkKDZQr9wj4zyFa2MCVQqHBAR9p72EAAxjAAAYwgAEMYAADGDBroPsUC4NsMe/8TPhUjYFB1R5nPeYGuelAjbxPxvqhs2OQ5Y2aT8UN5RkwcE6CyppzYVMnDBjweq3A72BQZ8EgomAAAxjAAAYwgAEMYMCaQdaZJ9ErJ57VszEwME4SiVrM5w8OnYFmeb1e9mwUh+Og8frPNnwKOsNIs0HeJrg2eD343bI3As0GfO3Iue5tMX/AoME03/nElWreM4wMGOwcDGAAAxjAAAYwgAGDBr6vE4N+CINqg3y9se5+IQ7zB85947ERb4PZ/EHWp4AEVBs8OwZZXm9UfKoH+yQKzQbGKJEorp0/YN+A56vO8e43n1guj+JgEE0wgAEMYAADGMAABiwa+L3n6o5dg7xze6wfHW/M551G+g2cm6VGwPdcWTWYfX/hcHPPrJ4Lr3MoRiFkVQYMnO8zleP+HY5qrmjgOxzTa2PYGDLYNRjAAAYwgAEMYAADBg3051yYCmwY5BLHhdD3C4dMGBSdoei8fhSmf0UmDGafwYjz9aD2ehxch7x3rjBgwOeuR+GvB4zMofCTKXM9wHyi5xxjjQmDaIIBDGAAAxjAAAYwgAEjBlebx7VNNK6/sLgOx+7RuA6HIA2jRBie0WiwsC7PjtG2Lo9rna639Zl2TJlvkw4Dj2X7IoyKtcq40mCfBoMS6fEFKrXHA0FKkR5doOSxtTcEyaJjDUuOS1qZvShIGStJemyBS6asQSbyBlYqWSI9tOClU3somUqTHtc2ydw4HXljjpJrwTw58kiPCCGEEEIIIYQQQgghhBBCCKHF/gOL+hRBPEW1XwAAAABJRU5ErkJggg=="
          width="300px"
        />
      </div>
    </div>

    <br /><br />

    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/707kPFDQdks"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <QuadSpace />

    <Header num="18" title="리스트"></Header>

    <QuadSpace />

    <div>
      <div>
        <h1>리스트 선언</h1>
        <p>
          파이썬에서 리스트를 만들기 위해서 대괄호[] 안에 데이터를 넣으면
          됩니다.<br /><br />
          리스트에서 항상 ,가 데이터들 사이에 있어야 합니다.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/59634d0a4b"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h1>리스트 인덱스</h1>
        <p>리스트에서 x번째 값을 찾으려면 인덱싱을 사용하면 됩니다.</p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/151def333f"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>

    <QuadSpace />

    <div
      style="display: flex; padding: 30px; border-radius: 5px"
      class="img-div"
    >
      <div>
        <h1>인덱싱이 x를 사용하면 x-1 번째를 출력하는 이유</h1>
        <p>
          왜 저희는 목록의 첫 번째로 1을 사용하는데 코딩에서는 0부터
          시작할까요?<br /><br />
          그 이유는 '수학'입니다. 리스트는 한국어로 번역하면 '목록'입니다.
          목록에는 '순서'가 있습니다.<br /><br />
          예를 들어 1에서 시작하여 2씩 증가하는 리스트를 만들겠습니다.<br /><br />
          1, 3, 5, 7<br /><br />
          처음에 1에서 시작했습니다. 처음에는 1 + (2 * 0)입니다.<br /><br />
          1에서 2 증가했습니다. 이 순서의 공차(차이)는 2입니다. 두 번째 값은 1 +
          (2+1)입니다.<br /><br />
          이렇게 계속하면 다음과 같은 공식이 나옵니다.<br /><br />
          a = 1 + {2 * (a-1)}<br /><br />
          그래서 첫 번째 리스트 값을 0을 이용해서 찾는 이유는 공차의 값을
          기준으로 0이 곱해졌기 때문입니다.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
          alt="python-factory-picture"
          src="https://epe.brightspotcdn.com/dims4/default/98845a7/2147483647/strip/true/crop/1695x1150+7+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2F49%2F23%2F863695b641f897e4211cfa36c71e%2Fv40-15sr-math-research.jpg"
          width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="nummethod" aft="listmethod1" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
   page: 'ListPage',
}
</script>
