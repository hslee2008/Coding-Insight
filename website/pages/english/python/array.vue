<template>
  <div>
    <br /><br />

    <div>
      <div>
        <h2>What is array?</h2>
        <p>
          List is a data type where you can store multiple datas.<br /><br />

          Array is very similar to list but there are few differences.<br /><br />

          1. Python does not support arrays. So, we have to use array from numpy
          module.<br />
          2. Array can store hug amount of datas efficiently.<br />
          3. Arrays are best for storing number datas.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAACNFBMVEVdt57dLUS1yNxVga4+cKMAAAD1wAj1wgheup1XuqBOs6NduJ1ctp1atqBeu51UvKF+wYpUfa/fJ0E8bKP48QDkGjv13gnM30xRnp9Ad6JDdKVVtZlcsZ/gJUBapqP87QD41ADhAABbqqFWiauo0Wz+4QDXM0e46v712Qmy1GXgDhU7aqOahXuwbWvW4zz3xwDx6hHhHSPZ19SGloepdnHK5kr1zAi8urdmAAB4sE1wtlRxp5NSoYtvvZB/uraWv8bPQlC9XWDCVlyjfHW3ZWV9nYy1xla37//Hq7qQx30xkNygAAATAAD65gDReYTj3ClLk3+73O+PrH2atM11mLtIiqBrs3d0sVpVGgDITVeteUuRjYHRPk6xYFLDxda29v/OhpITarJGneF/e3k1alvi7zTONzepi1Xj2yjIGh9Em+fGxMFSSksiQzpAgm/IXm9oi8WPvalTotKrAAAAKk5/fGx4c3KJvL1iZlVgh3NkNiljUEFhc2FlHhZlomtmrWVid1PFVkeqeGO6aUmkJS1iXUF7TkW0cEejfmaYX1NjQjmAqmOIoE9jhVSGICDLTEbVc37LWWzQqLrQcjvDi0u0Vne6y1KSb5zJDgq/Q1xrbpoHHjKcHxsDChiVOjYiWYIsIhVRqcgrXmBJlJgSNjMLHRgoFxs8MDKdXmyomVeweF7fTiCcapWxyG+tzIufxp6ZoHsgRmgAEyhZUlG2r1JtsMOESGUALUdrhJwVO0gvZ4MIKjQuYS+5AAATtElEQVR4nO1djV9TV5pOIJfkcO7NlXwAhhsELEH5kM+CnQTlK4ooiCJSDDAYtK1UqKUtoC3j2Lpt7XZX6oydtrZrKVVnu+226HTcmf3n9j3nfp6b2Lr7247n2vv0R345b968PU/em5PzvO9J9HhcuHDhwgWnQI/hg3/xWfyCQKspuyllt6CLF+0+4ugvNqP/b1y8JHmCWJIMA/bsvShJFgNQ3puSAgGrCb25avPhFRitpU4+B+g2TOit1eDliYnL3ZLhs/oW9TlpPi21hk5OTEx0i//g+f7vgGQlicS13xCcpO80jGTApd8Ri8qH+Ijy2mViuRzUngZ46/fU5zLXDOVGbzQa71ubSly50qsQCxY7ehKT/c+//c6pF0+JJIUo3RONRiefnwSfyTRdk+TMZGKq6dI14pN8nFXqiUHuj3oJEiG4iSfIXMVEPOQNxa/GQ6FQPCFCWpNR8miI+IRC0SR5Wi8xxa/CGCxpjiliT8hrQbQReeSmuMUSb5I9cp/VKdQne1B71GpJyE+ax6OB0tapekO9wCdhtXgTMkZeFvAqDFhfBS9NK6dgk0HyY8uqNwSXbY6FzaqX58s0Tw5zMpYvh72OYehRGIbxDpj9FENnCq7bHsbSI9veq1xfpR7EvOviGZRnXZEHGMsA5LmRYRjiecfKXm9R+EBE/cxa2o9sfOKw3sLnh5XgJMdrqQdlLHMN9ZCpMrMnFyBmLuWoAgljFlzyKnAMZMlhNEOmKveYJpWzNdFkMQJLhyWtlDO/QI1mguiWhvkEibZTkyWt6qqCRZNhfIDnixQgT+qT1Rd9uU+3xPvUycsdOsVoh2qxvjAi1ykk6ZiKRr1ka53RcyFOxeMwjsendNEgD8CwB4xGvsBCnOCP5w9DFVhOp2VZaVeMmWLc39Qutjf1IyM7crJdlMX2pHlBypmmRiXZ0cS3stCAyCQRa0H0z2rCIBztPh7kBH6/FvzfVgvO1xgrcE4ZLV+tLadaIeY+jVOg1TeRrWom7h21WUb3SjYL+uAtu4lXiHvxyYnnJk6aV51Wa5swam0edGm0G3y0ShTF6FqQPo3rSpQHyQjJF/9JLZrptTak19om1Poi8RH30lrbRNB82qpaa+OboZyZ9CZ63333yjun3muX6VSVpoR3quP5piunTn1Dq28o3ZvwTl67NP3OqVPva/uexh5vYuDStSvvnXqP7498uYkUzUKJBC2aEWGEFS/ZtGm1Ni/sqmGjSny8V6kP3cjJfdZaWzvPFBmp5I2KHluViWyrWZVMBAijufQdO59g5S7V+Mhea0Psq0A4O6nWxhZcQL/n1trs1ao+ewWV60oU6rAzzK215aupOqfWZispkTUjt9Zmu0qbZHvqub5K2fyQqebW2jBDmeaZfWG8HG9PrdUIAjlfrU2eZOpxJGEOqrUxGQs15a21sRmjbRi21tbI79vQ1rhQ30/WlNH0YMnio5YOmURH+S7UyFMGn5Bad8qttVmL+CFKB1u6NfEmni9SZq2JKqpJ7jVqbb3q5MWETkgtqZLtrP60UOJJTf1xITfqRTNje4l6onH6X49mQcm45mPkCza0qinOfylKTndkJKWxw6yjYdTYn0bp/kaj1oaU/v6kmOlot9Ta2jsyYrK/X+GeIC2aYVvRjJiYWhuMPKxFfxrXq4wLFy74wuOsiHlWFQcspBrEvSkPW/fMPWuJ3rxo8/GkVp1CEa2uou6TJ4OW+af2KlIwaGU0uiaBT7dk1g7R2kUpEMS8V4QR+Zjb2/0b6+lL+KBbvWg9a0mcPrg4QSyXDUL44gfdxDTB92einGzsb09d+ucPYe5qgZuctVT0s5YB6qM09mfEtd99OPGcVgTHsphMyqv/olaN+U7iJNlfev81Gg/FvaqSSE9Fo9Ge53sS16/00AqM3EH2n9E1uAnFaZsbK33gk1jr816/cr2fa21h6ghDIKbNs5ZqkYmtjlJ1gRJx6qNauD5tkufUV+6ZqB7G0pN7JopjCfw4J/dslSiv136Siu9qYk61F+eetbTViL2OOn1pq4XSU3n2HGJ7nd9Zpy9F9n1Iaoe5Zy2ZaiIpTtlK5Xr5g0uwFW5a8849a2k7+U1WV4Yhz70n21lYUhe0nbUk3SjmqDQt5zBLcKiX5w9EZqmhU8XMhUtroYjJqv38olF/4xTWuaorRu5ZS+vbjnxk2o6lenlOIZNErSKc76ylhY766Y7MQnKU66K+RztZGSJfk9GPUarfoyEMotqWk74MxMf4YDAbw3Gu+zIUQDE00N8T7THWfLkpGo1PxqOW+m+7N9rX3xf1GgVTWH5ge56AP66PmqggX0Mjf+bmUk6mkYzSlrOWuo95QSIxrcjgyH0GH4Gc85i5oGcxMefvQRcuXLhw4cKFCxcuXLhw4cKFCxdcwynfKXwc4ADAXvCUth0CYMmAZie+uSEC+UJwAoSK90QAxQboz17J8jNnz0Yih7YZoGa0LRLZseOQ6ayFANcdLWwIXoDS09PXptMtERO7JQ9qf+GFFxI3n91hYg+QEd+enp7ueMbiG5FI4ZuGsFqf4Yhicn1mZn2mt8XvL/U3N8ONvwoYiiN1dbO//ehZf9Euf1FR0a6iIj8wlKdnZmYH1w9U+auq/M3+qk6/vwWoJEdmZkZmBiKWEBwxRE11wOVgb0tRUWmR309ugCF6+xhh+MqzzUW7monV728GhskbdXWDx2YPVBV1AjnCsAgYygMkRN2AGaKIK4YjB/MwlPsO1h3MYYim6wyGVSZDcfYgZRixhOCHIWr/aHBw8JVBG8Nk6/r6+tTIFMtQPge+IzdeYRmizDqY1wd5ZfiH+urq6vpqlWERvanaXfzHeoLqc4ShX7OWFR9XfevpVQrWKriJSLIWYsAagh+G8gutra3V1a29kdraHbW1tbtaaofPBuTperBO3by5+yjgpaPfHTh6tAySBdb66tbWj4drh4dra0tLh2t3HJLkcyREfeuAJcQejj4ZYXb1f8pms0vbAUvZoaGlGKyZ18+d++RC1hcbGjp9+vTQUEPD0NAmRh3g++kFcC6kzkND2cJxCYu5IbYXP2laBnDy8OHDn2VvCYIvC1SyD+HOvILFq1c//yz7hSA8zMZiJeThW9lyLP/b4cNXs7cFYSsbPn066yMPb2BPmoa4LwgxGoLG4uYahY/wZCqV3brXtSzMV4pLt7/syghDldgjyzIM2l4Whn4MboSPtLUdCW8EPKlUamNIyHQdCS+JP5I7X95eCpIQyezW+a7l+/M1UhZCzEEsrk4p4sqFTFuXUK4EKr9abmuDO9QsLd6DQUrySKOE4ah6JrhmEwbnv6oMKOXCy23LX1Eq2FP5NQ0h4cqv5uB1Kefs/Fdg9Ejm3kKA/FyuMHd+QdtWY/HOvbsLlMDCXfUOuY/vLM8JZB0JfH1+Tkjp5kUIcSZAYllC8AO8uHBGvTO6cMZcBcVF/SeeRy2/9SyeWUjpd0axNYQ6GNVi8QVTHGHMWPNohPy+jzJzApEIwW12ISjtLisr211sM6uqUbQ75w/BCWDdPHu2ZUeZKQTJ2wgpyncf7460PLNbB9GHmmrcYfrSryCoISKWEDzlEU2DEEwcj1iUIHBB1ycnvR/9OVJKtym1sIMZfkZXjX/eY1ON+ApYp45brBGOvnuB3p6pO3Zj5sVhKgKL/HBTu01C7xccPKgLInOrmVJV4x7Vl1iby2AH1FRQNzM4+O+19Nmw7YYQHDGsmK3TGPqJMNAZjtTlEURUPRGGRBdriqOsGCsQomBwRmUIJtirc8QQvTEDDAftDNM3fgs5PGhn+IqqGlmG6P0ZnhnKVz4aGVmf/IhliL4BFQGwyfZkfGRkZGqkh2UoX18nISY5ZdhdrSpB8j4sVd+H/uFu+T8IP5B8Eb9/mJReav2dw4d01Zgg70NTNW7TQujvw2Ya4kkTM6AQyVf/6c1My0sgBF8qO1D2UsuhYkT4Jb79U+F3FP/56vffHdgmyb1ECCZu3ix7iTgfPfAxqMZiT1IL8YMZ4ughblKI2j8598mn2ZiPCkGiBOFOwJN87dxrN7O+rdvUPN/wOtxRQC1T1RjTVSP5K8c0xE0zxGkI4ePn4xC98fnVz0HyHQFxF4uB5DsC4i6Ik9fevQbWB0e2suPjYF3+8mEWVOPnmmrcoqrxPtGHlRhCfH6VhijRQ8SywZ//X/+jAJuU4nkh07b8EGY1f3+ube7+vES/K7p0iwiirBJc2loGQQRcwDm4dPseWIfKQTUS+RjeIFa5hoR4sJUNKjTWrXmOihgAqVjoaptbgL1JMai8zNfF6vSCZ5bb5u4EyZ3zbRlBy4p05gEQUyRVPmqqEbbdEGL5TLFHJHcyC/wUMVTgReEBVXp4VDgvGIpIvCNo+m9BEAz5JArn7xIhiD1f3zNUoydw5sh5NcSicN5QjfwAjy6qk8KpRcvscEq72LBo+e6krhqxKR8JIIR6J7WY888N8QT8OD8na8h97lLl4mmGpLc6GYgUeX1ztyzFeUNwAiR9fHbPnj22Bi6SdpNWZ4Dt9nqkbcR3G2vFqLgMzGV89oCxmE5/+JdDkUiZAbKrVK5de3s6U2Zp6xI1j5LpH/7yXVlkj+lMuGghWtgQvABNzs5Ozfa2VFUNV1XRm1rS5e4jneHJZzubSzubm5tL4Q8YovfXZydHeg6UVpWWgm/prqoq0gMWIUTPyEDEEoKf3hNM+hioWmuHtKhzt4QaC/J0SLE4e/Cg3gMu8tPuGjBUG8bc9oDlddrAtfeAe/P2gAmVGzk94Iq8JY8nTUwHTo4cO3Zs9piNoZQgnWG4Stke8At1x47dKLAxRO2zNASnDNE3qkBnr9LiF9W2btTSAwaG3fUq2KtUfk8NwelVSusVQKcv0tk53NlJbqp2qHWa+urW+LNGW7c2sk36oV51/ri2c9cu8K2t6qwtk/QQ00wIbhiic62t1Z9+duHC98cJXv1x5fvj3ZJ8Haw3SVt3J8HS0NDSznIJ9ROG3164sEJ9v1/58dXjx2GBbc0X4kkTM5B67fBrf83evrWl1itu3399aEjBnsOHD/81uyUIt7OnTzfQtu98OZavgTkbe/gwnKVVjNdfvz0/jnESQnxrhMiqIZ40LxOpN954I3v7yNy9h9nxzSWfMPfgi/lKLCaTSRiQhvCGsgF3ugTfRgCB739lhQfLQsnS5kb2iwdzgm8p4ElaQ2QhxPlb8zVPmpcFCAU3/jbX1iUsKcGNv5Me8M5KTJRR5VcPYLBZE6jcvNvWdm+zkvgGKneSHvDfN4KVO0kPeGsjoJY8/jujhfgb6QEv8cTQQ8sUL9N6RWDxLqQtoMo+0hBevgMaEIvC8rKgaWAYdHUdAZmMA0Km6+5iwAyx/DUNca+LxuIMC8IdKszxGUEwFXpKbwinFhZM66ggqN3elH5HDyFqIe5wKPKx/oukmPmxUkPwM2recGF+tBTrI+z+u0EuXLhw4cKFCxcuXLhw8esEx78e/ChUKBXWSVdIFdYmIoYxM9zHjB0ALO4v2G9OWqxYKShQTA4VSkHBikmZDK1j/gEpKSgwJ60P9xuFqP10vE/Nsj4sYLPOM2hKCjQS5B+x2m8OscGXUJaAkjlUxw6AaBBS87bPMixQsGId7hMrxpiHn/TkHwti2Jz0WKES2H7CZHCiMlBeaA7HdgYCYXM8VlLjiCSKDcakT5SUKMHt4ZhG+URhCTBsCJ/Q6ZcAw5hPG48VFjqGoU+dNEy5kDC0DoFh2KdSPlFSWEgZqmMydArDsI9OurDQYAgYO1FoMISHC9WHVYZkrHo7hGEDpeRjGWpDjSG8AgxDX8yBDGMswxjLUCX8VDE0c9jAMvQ5j6Fne9iYc8lOKTDeYFIorME1vrBJeDyAy02GJeP89LV/EoFyQoLMuWSTfCO0hlKmDETSSaSUybCwhpwTpuOYPnQGMIZJx0hK6JRxYDMMK0vJTkVlEFC2N/goffWaDMJLEDOHzgCQCO+sMbq4WBoPF5YbGcKQZZ2+Ot70WYbOAA5UMh3RYA2zq8ZiDdPEDlTw19P+GWBxxaIHPSI7BPmxYj1WC2rEUfKQKN59Vk2rCqb9RqVCVYT7dDmoCUTnyEOLQFRJVOgCcR+lLOqKUC0CmHpxv1MqGdhjCkSiafGKVR56rAJxpcIjWvXiijOyKFo17ZgSsMjDgoIaXMk8jHGhdeiMPY3YYE76BNm1xcbMIdm1GZTH6K5Nl4tELzqFoVXTkn2pZUh23roiBkWoKmB1fMIx+1KqgGHSY+bOO0w4UomragtSBBizaAsYjzlo5y2GrZpW0xb68FHqyeckbfFr1YdPM8OYjaFNAcfCjmOIqTzUNG05xqo8NCSupCpiVR8DI3UcU/WiIwiSTY2uaakkIvJQHaoCkcpDqoDLqSIEedhAH3aSQCQkYqZmx9JOInl1gUjkYbjEFIj0JShxmEDEwfKYNSWQp3GLXsTiOFOygHGN0wQixiseqz6s2GfTh/sqGH24f5/D9WFNHn2oPA36sMauD8nwJ/ShQyhizOrDisfXh/ucQdGuD5kWKOhD6xD0oVU+OlUfFj59+jDM6sPwo/RhjNWHJc5hmKMPfb6xn9aHJ1x9yBV+rrv29KknVx86jyGG1dIQhJugD2OP1IeFTtWH+FH6kOoJqgepPtx0sD4kPU9THwYUog81wUv1YRj0od4w1fShMXQGcHCT1YeVsXHxJ/ShNF7pNH3oCWAmJZgd5vw+lPtzUS5cuHDhwoULFy5cuOAZ/wOROWqrf7yNzQAAAABJRU5ErkJggg=="
          max-width="400px"
        />
      </div>
    </div>

    <Header-en type="Python" num="58" title="Array"></Header-en>


    <div>
      <div>
        <h2>Making array</h2>
        <p>
          We have to import numpy module to use array in Python.<br /><br />

          <code> import numpy </code>

          Let's make an array of numbers from 1 to 5.<br /><br />

          <code>
            import numpy<br /><br />

            arr = numpy.array([1, 2, 3, 4, 5])<br /><br />

            print(type(arr))<br />
            print(arr)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/396ae27df2"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Array - number operators</h2>
        <p>
          In lists, we used for loops to access each item in order to change
          each item.<br /><br />

          In array, the only thing we have to do is use operators on that array
          and every each item will be effected.<br /><br />

          This way, it is much more easier to read.<br /><br />

          <code>
            import numpy<br /><br />

            mainArray = numpy.array([1, 2, 3])<br /><br />

            newArray = mainArray + 3
          </code>

          This is why arrays are better at storing huge amount of datas.
        </p>
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/bd22e54547"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />

    <QuadSpace />

    <NaviBtn bef="json" aft="array_type" />
  </div>
</template>
