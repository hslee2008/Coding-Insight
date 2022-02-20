<template>
  <div>
    <QuadSpace />

    <div style="display: flex" class="img-div">
      <div style="margin: auto">
        <h2>My own zipping program</h2>
        <p>
          In actuality, your computer will have a zipping program already
          installed<br /><br />

          However, using something that is already made is very bording<br /><br />

          Let's try making our own.
        </p>
      </div>

      <div style="margin: auto">
        <CIImage
          alt="python-factory-picture"
          max-width="200px"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhMTERMVEhMSGRYSGBIREBUVFxcVFRIWGRUVFRYYHiogGh0lGxUVITEhJjUrLy4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICYrLTUvLTcrNS8yMisyNSstMi81Ly0yLysuNS0tLS8wListMi8rMC0tLS0tKy0tLS0tLf/AABEIAJEBWwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAEEQAAIBAgQDBQQGCAQHAAAAAAABAgMRBBIhMQVBUQYTImFxMlKBkRShscHR8CMzQpKj4eLxBxViohYkQ1NkcoL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAMhEAAgIBAgQDBwQBBQAAAAAAAAECEQMhMQQSQVFhcYEFE6GxwdHwIpHh8TIUI0KSwv/aAAwDAQACEQMRAD8A9kAC0cMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGJSsm+mpk5YlRySc3aNm2+iWt/ha5rK6db/n1NocvMufa1fl1+BS4LtXRqV3RjfMrp2Ts8vt2fOxexkmrrVM+X8F41Tli3+iUI1pWjL/qKUtE5N3SzbNK1s3rf6FhJuOnIzytSfbTrfn/W29Vsb5XBKNb63pS6V1fjvrtepYHJ191ln4f9Lt/8vmdUyHHDScqjjHdNXcF1jfVanO9rZcuPhm8Tala1X4y97Jw4suZrJVcr39DtKv4c2X4S9TpCaauiPLDyjBqSf19Ua4dNEPsTPmzYZyzNt87q+1Roz7YxYsWdRxJJcvTzkTDW5v2fx9KriHTi80oZ07052UoaSWdxytp+Zf0qsnUtZWTd42jolaz6838ukkdLJmUGkyvh4OWSPNdenQ8+DGOrpYirC1kpaW21inb5tmSZFRqm12AABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwVmK4i07RWi1vsauVOkrf5/Hjrs9TeMbTk3SXXz6aJvo/DTVotDhjMMqtOdOV8tSMoOzs7STTs/RkOljXdX9HFtP5FlGSauthCTkrarz/i1+a09DE4qL0knotVfXzSf5papvyMOxOHjJWVS6akn3nR3T2PTQpP83O1ZXjJdeqvy6EnhnCacqcZu7zZrOnTilZNxe9+jOfxPGcRHP7uEVy0nbT71V3V9t316HT4XgsGbDz5MjUraSVdtOnlZHhGxiqpW8Laf2krGYSNJQs5NSzL9Ja/htzXr9RwL7UMsdUmvFX8Gc5rJilVtPwf1RGU5Pdt+qOkIHRoGY44wVRSXkq+RpLJKWspN+bs8rh+KdxVreGrGar1ZrLSraxlPSSnGLXiX2meLdssXknKj3zluqSw9aMfRPLfRa78j0OLwqn5SWz+5kKNG2j3Iv9NFy5re91f21+J0l7ZyrEsfJB1Gk2m3Xq6+FeBrSTesm3J6tt3bb3b8yyoSdrP5kf2Ve129Elzb2SOsKVT/AEZtV3fivo7PdW3a59OTTe88vLdJuu1fVrXwV6U+qKOLh3Km2lfe9el6J/GtbS2ZJBGwmJzaPSS+v+ZJJE7InuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYaKatRcW01smtN3t/IujlWpXWm62e5Fkx8zvz02TXmtvit9NmrGDO8V02tnaSbVeD07dU9FrVp1sKe1lotU+hLw7a9DEafI5Y2co92o1IUs87OdSlKqrZW0lGMou7aSvc2X6E3Ku7f8APzfV61qaO804whfZL7Lp4LWlStpIsJJNWeqZmhjZ0YqCjTnBXyucLtXd2r3XNsqaOPlGrlnVhWg0/FToTpOEk0mpZpyzbrVWJPFeJ0sPT7ytLLHZaXcm9lFLdmf05IrqmJRy4Mji7jJej77E7G4t1cvhUUv2Yq3idsz89kV/E8Y6aSj7Ur69F9zKTAdusJOeWSqUr6KdWMcvxcZO3q9PMv8AEYJValpZmoUpVctOzlLLO2WN0/evs9EyHiebHiqGmyL/ALMhHLxkXxGq1bvrS+/p30spPp9X35fvy/EfTqvvy/fl+Je0Oz1OSjpVWZRneWWyUsR3fdN5f1qX18jalwOj43FVp5Y11lTjmc6M6cbxyrnnulrtzOTy5e7/AHPae84VbQX/AFX9dH+xQfTqvvy/fl+JIwWPk5JTebNpme6+e5ax7NxyRcs8ZbSimpOX/Lyq2p+FLN4bWvLf4EfEcPhGnSnGFaMnUlF9414Uu7sppRVm811tu99Lbw97CSd/Hy+5DxEODz45Y+Rap60tNHTT3W1pr605NWNlGW6TV7a6NWuyTKpHu/bWW1vai1pGMf1V728Le91deaUDDVbaPVGa1JrVaxflsdaUZKTca19Po78u977LwmPNBwSleirRX3feNVfTpVJVrym80pSWma8vS7uTqNS++5GpUm9k36IkRh8CVbfn8le9b/Pp8l5HYAAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFyixnaCpTxCorC1ZRene3VvE0sytfwq7vdp+RfcM4b3laPuLxS+Gy+L+85/Gce+HzY8ShzOd9a2rwfRt9Njo8HwC4jHOcp8vL4X0vuq+Jhoi4quoVcPf9qU4LS6u6FR69NmX3GqcIqUmrPlbS7ey/PQqPajo2r81yZZzKWTDOMNG00n2dafEggvcZ482yafpfYg8Y8U4S2ajKNl0zRf3nz7/ABAnPvaMXfIqby9Mzm8/1KB9BqqTdpXTXV3+RW9ocDh50X9KkoQjqql7SjJ+71b93W/Q19nwy4cEYZncldv1dfsqHF5cc+KlPF/i6rSuivTzs+Un0PgmIn9Fw7lJ3jG0XfVRvLLr/wCtvgeZ4bgsFKolKtKSvopw7uMuicv7Hu40la1rW0WVWs17pPxcHlxOMdyxwHHQ4bioZJp8ut6dGmvWrIqqy9575t37XX18z01Dh9NeJ53F9w4d3WWZ56TddpZk/aSvts0jzcqWqUdW/wA8jtHBX3bfmtTi48ORyaUbrfVb9tfl5HseK9ocNHFCcsvKpq1+mVtOndLVdrarVrqdOL/o60oRlpDLlyzk0vCmrOTumrvTk7o4YapJzSu3eSbV27vMtX1fmd48P838l+JJw2DUXfn5vb0RJDgsvOrVK+6+hTze3uCjgahJzlVL9LVva7kkl3fXsmyRGJJwyu1H3ml83Y5xiScNpOLeyafyaOwzw0VsibWxv0duFOMkovxyyx1tbVNv16Hn8ZjZVasquzb8NuUU7Rj56F/xOdGpfJ3N5Sjec6rfhzLN4Nr2vboyp4hhqcalqLzQVvFe93l11KnJKeVWtFrfd9vTQ7suKhg4aah/lL9K7KPWvNffwfahWzLo+aOpGo0ySWzhoAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnVpKVr8no+hI4bxTus0ZxcXJ3c43eltI26LXbqzma/RXU0irvlYgycPjnkjkluk0vXf5FjFxOTHFwhs2unYre2FGripwVHEyowhZvJC+eTabk5ZlslZL1vuScJBxSTk5NJJyaScvNqKS+RJ/wAtqRTbg7R3aadvkzEIkyqqRFkc5Suar0E4JnyLtZxh4mvKz/RU24U1ydtHP1k18rH0rtTje5wleadnlyxfSU2oRfzlc+NpEsF1NsceoPddjOJurB0pu86VrN7uD0XyenxR4UteyuJ7vFUnym+7fpPRf7sr+BvJaG2SPNE+mwprfdvVvnrruTMNgqk03CLklu1t82cIr8D0PBsVTVCtCUknHM3rZZZRSXitZXbt9xT54Qaxx3q68Lq/3MxjPiJvLlbp6X41deGmyWiVJaIqamCnBKUotRe0tGndXWq8jEYkviGNpLB0qNOacoRpRtFt27uCT8VkntbZX6EPD1LrXdL82JE9LZFlhGM+WDv77G7klu7G0KqbsnfmU1Z55Ny1d0/OzerN6N/Tpv09CGM5ycdUr6VrVXve+3Tw8S1Ph4xxzkk3S3vx5dU43T1r9T870LGvhk3db8/MUqR0oVbrXf7TsTlGkYSMgAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADn2VyQxFapJyzVJzpJupUcd4tJQvlj7O6S+06Hl+ITxVOpUUKdJwcnOm5TlrmcXLNbbn15dSnx0c8oR9wraknV1appr4rR6delF72fPBHK/fOlyvWr10Pb/wCd4bu6+Sopd5nmsmZ5s1OMVZ5UuXmvMocBirpRlvyfXyZT8NoSjThGVsygk7O6vbWz6FjCBajGMIlXNxE88035LfX5+BjtPwp4qg6UZ5LyjK+W91HW1rrnb5HjP+B3/wB/+D/Ue5jxSC0crtef2Gzy1MzjpJee66iGZXyq++zXzSXx+tJQyRjzJrR06cXrro6ba27efS/DLsJ/5H8H+s64fsM4yjJYjWMlL9Tzi01+35HsFE706UntFteUWyXnZH7yXc0y3OFSlFSu4p35X3sna/mrsm921umn5qxv3d9GVs3DxydWntadOu1/jW6aepNg4iWLSlJb1JWr2uuj8umjtaFdSpdNiZRpm8aFi04fgYyhKc5ZYx0vp0vrf1RK3WpFjxPJLlS1ZSYnCq91p5tbf2NKdNep6SWBpuE3GTzQTk4yyt2s2r2ezs/yrFPTimk46pkeNR/4t0unT7+jddKLHEc8Zf7kVb69fnSfdpW97u28U4HcwkZJSsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSrSUlZm4AKx4dxdvrM4mD7uVt9PvuWMo3NVTXPU1yJyi0vz+Hs/A2xNQmn/AH6ePbxovsJjKajFNwdkrax6bFN2jrKUqbi1pm9lrT2ehWYjDKL0jo+fXyEY3/vzNIRfNs/3X0b+NFnPnUsbjae21/8ApKttlf7KyRHxq+0ufmXlCTcKeSpCNopOLrSg813fwplHTiMVhFUWu/Jm04KapkXDcRLBLnirdEb/ABE4rXw0KHdRVaopTU42qVcsZZXHMk82tnb+ZKwVfPCMmssmk5Qbu4trVX52PC9t8Jiqs4U4QnOEIptrZyu0k3zyxSt6+R6Psx33cU++jKNWN4vPu0naLfW6sbqCjBIxnyPLJ5H1exO7QTawuIcZODVKs1NNpxfdu0k1tbcsuCYinQpTpyc3Goszc606k7uCjaPeN+Wmi3ZHxFCNWEqc1eFSLhKN2rxkrNXWuzKKvwRQftVWns/pOI+T8e5R4rh82WUJYp8tXa1p3VWvCvPs0WuD4rBgUvexbuqaq1Xi+/gXtftXSpyWHhTlnrRaTnNWVqcrvwx12u/ORDwc3H0fL7yuocIpqcalpOcLqMpVqs7Zk07Z5NbNlxSplnBjljxqM3b6vb4EHG8RHiMvPBUul7ktO5k1hGxsSlcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw0ce6sdwAaxibAAGlSmn+JrCmdQDFBGJRTVnsZAMkRULMkwjY2AMUAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
        />
      </div>
    </div>

    <QuadSpace />

    <Header-en type="Python" num="Proj: 5" title="Zipping Program"></Header-en>

    <QuadSpace />

    <div>
      <h2>Programming Explanation</h2>
      <p>
        1. How zipping works: replace large amount of data with short ones to
        manage space<br />
        2. Then, we will save everything to a dictionary.
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>Code Explanation</h2>
      <div>
        1) Input Sentence<br /><br />
        <code> sent = input("Sentence to zip: ") </code>
        2) Info (dictionary)<br /><br />
        <code> zipp_info = {} </code>
        3) zip<br /><br />
        <code>
          sent = sent.replace("Hello", "0")<br />
          sent = sent.replace("World", "1")
        </code>
        4) Save zip info (Only works for Hello, World words) =<br /><br />
        <code>
          zipp_info["Hello"] = "0"<br />
          zipp_info["World"] = "0"
        </code>
        5) Print output<br /><br />
        <code>print(sent)</code>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="dictionarymethod" aft="tuple" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'PasswordPage',
};
</script>
`
