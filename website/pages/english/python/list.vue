<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div class="mx-auto">
        <h2>What is list?</h2>
        <p>
          List is a menu or listings of items.<br /><br />

          We use list to record information about what we want to buy in the
          grocery.
        </p>
      </div>
      <div class="mx-auto">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
          alt="python-factory-picture"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA7VBMVEVpuuf///86UGUAAAD+22c4S19rvetUi63cn0IrRVyzuMC3vsRNiapXmL07VGopQ1rGy9Lm5uaTk5MuLi6JiYnfpEX8+PK2trb/3GMmJiZfuOzNzc3T0ZCkpKTz8/P5+fljrNVRUVFra2tjY2P/4WczTGV5fWbT09P/3V6GhGaYw8Sgxr3iokCao6ytra1ZWVl1dXUZGRl3vdyHwNTi1YPb04qyyLPS0ZXo1X/z2W+kxruNwc1ZtvC2yq1xvODKz5qcvLFNfZtDY31xbl1xbV17dFvPw65ygZD66tHamC9CQkKOjo4eHh5LX3JepM2YkfgTAAAEMElEQVR4nO3db1eaUADHcUDA0dTNcpNwglpN1h81zdKc23Bbli3f/8sZaBoqKCKee+7l933QE4vD/QQoVz2X4xBCCCGEEEIIIYQQQgghhBBCCCGEKE7Tmq1WU9NI7wfBtIsb0VTFzkWMEdo2gJ1qtknvCbHapjghUEX1hvS+kEm7NcUJwl1HFc1+PE+Hrtq9V1W1p3GtriqS3hsi9eyDgGve2WeBdm4fCOek92f/act9v7evh63J06LWtw1uv6/8Cul9jrhe+8tyHftq2J88qLVtjs7d8i+0e4R3Otq0c1NdznlG6PxwHuxNnyGXM++ZOhJsA9Er9af9WKvr+ZhosvXSyc/gtsm1+t4CsTFQTXP6UpFFA1kuLeRjsDbz1+I2ZJn0qLZJLlkZwd3Z19PtDU6/nS1sJGOV6FGQk5IkRG8gSFKSFgSbQBD2YWArpOhAkMcrBJEZCNKYCgR5sLLn0RkIAyoMSquHQYQGEg3XRTntZfD78tPWXf71MkjTYLB6RbQN/ly+2zpvAxqeGtwGyodZ4Qzmf67QaqC8HHyc9fAUwuBh/ucHLwqVBsqQf+sxhMHTo2sDQ4VGg4zhNghzTXQb8BkKDZQr9wj4zyFa2MCVQqHBAR9p72EAAxjAAAYwgAEMYAADGDBroPsUC4NsMe/8TPhUjYFB1R5nPeYGuelAjbxPxvqhs2OQ5Y2aT8UN5RkwcE6CyppzYVMnDBjweq3A72BQZ8EgomAAAxjAAAYwgAEMYMCaQdaZJ9ErJ57VszEwME4SiVrM5w8OnYFmeb1e9mwUh+Og8frPNnwKOsNIs0HeJrg2eD343bI3As0GfO3Iue5tMX/AoME03/nElWreM4wMGOwcDGAAAxjAAAYwgAGDBr6vE4N+CINqg3y9se5+IQ7zB85947ERb4PZ/EHWp4AEVBs8OwZZXm9UfKoH+yQKzQbGKJEorp0/YN+A56vO8e43n1guj+JgEE0wgAEMYAADGMAABiwa+L3n6o5dg7xze6wfHW/M551G+g2cm6VGwPdcWTWYfX/hcHPPrJ4Lr3MoRiFkVQYMnO8zleP+HY5qrmjgOxzTa2PYGDLYNRjAAAYwgAEMYAADBg3051yYCmwY5BLHhdD3C4dMGBSdoei8fhSmf0UmDGafwYjz9aD2ehxch7x3rjBgwOeuR+GvB4zMofCTKXM9wHyi5xxjjQmDaIIBDGAAAxjAAAYwgAEjBlebx7VNNK6/sLgOx+7RuA6HIA2jRBie0WiwsC7PjtG2Lo9rna639Zl2TJlvkw4Dj2X7IoyKtcq40mCfBoMS6fEFKrXHA0FKkR5doOSxtTcEyaJjDUuOS1qZvShIGStJemyBS6asQSbyBlYqWSI9tOClU3somUqTHtc2ydw4HXljjpJrwTw58kiPCCGEEEIIIYQQQgghhBBCCKHF/gOL+hRBPEW1XwAAAABJRU5ErkJggg=="
          width="300px"
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en type="Python" num="18" title="List"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <h2>Declaring list</h2>
        <p>In Python, use [] to store items seperated by a comma(,).</p>
      </div>
      <iframe
        class="embed-responsive-item"
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
        <h2>List index</h2>
        <p>Similar to string index, we can access each item by using index.</p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/cc01e5b49a"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div
      style="display: flex; padding: 30px; border-radius: 5px"
      class="img-div"
    >
      <div>
        <h2>Why Python use 0 as first index</h2>
        <p>
          Humans usually think of first as 1.<br /><br />

          For example, if somebody says "You sitting in the second row and
          second column, rise!". The second person will rise.<br /><br />

          However, computers will make the third person rise.<br /><br />

          This weird fact can be explained through mathematically.<br /><br />

          List in math is a series of number with specific patterns.<br /><br />

          For example, let's think about a list that increases by 2.<br /><br />

          <code> sequence = [1, 3, 5, 7] </code>

          Starting from 1, each items increased by 2.<br /><br />

          We can express the first item like this: 1 + 2*0<br /><br />

          1 is the first number and 2 is the pattern. 0 means that it is
          increased by 0, thus the first number.<br /><br />

          The second number is euqal to 1 + 2*1 and so on.<br /><br />

          As you can see, the number of times patterns are added to the original
          one is euqal to the nth number minus one (n - 1).<br /><br />

          This is why first is 0, second is 1 and so on because of the number of
          times pattern are added.<br /><br />
        </p>
      </div>
      <div class="mx-auto">
        <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
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
};
</script>
