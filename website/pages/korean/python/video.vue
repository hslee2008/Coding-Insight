<template>
  <div class="mt-15 d-flex" style="flex-wrap: wrap">
    <v-card height="500px">
      <div class="d-flex">
        <div>
          <v-card-title class="text-h5">자동으로 Zoom 열기!</v-card-title>

          <v-card-subtitle>코딩 인사이트</v-card-subtitle>
        </div>

        <v-card-actions>
          <v-btn
            class="ml-2 mt-3"
            fab
            icon
            height="40px"
            right
            width="40px"
            @click="sheet = !sheet"
          >
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <iframe
        v-if="!sheet"
        src="https://www.youtube.com/embed/0bwQtUOqW_g"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="ma-3"
        style="width: 95%; height: 400px"
      />
      <code v-highlight class="python ma-3" v-else>
        import webbrowser, keyboard, time<br /><br />

        minute = int(input("몇 분 기달리기: "))<br /><br />

        print(minute, " 기다리겠습니다.")<br />
        time.sleep(minute)<br /><br />

        webbrowser.open("줌 링크 여기 넣기")<br />
        time.sleep(5)<br /><br />

        keyboard.press_and_release("left")<br />
        keyboard.press_and_release("enter")<br /><br />

        time.sleep(5)<br /><br />

        keyboard.write("줌 암호 여기 넣기")<br />
        keyboard.press_and_release("enter")
      </code>
    </v-card>

    <v-card
      width="100%"
      :height="(sheet1 ? '2050' : '550') + 'px'"
      class="mt-10"
    >
      <div class="d-flex">
        <div>
          <v-card-title class="text-h5"
            >나만의 파이썬 게임!(벽돌 게임)</v-card-title
          >

          <v-card-subtitle>코딩 인사이트</v-card-subtitle>
        </div>

        <v-card-actions>
          <v-btn
            class="ml-2 mt-3"
            fab
            icon
            height="40px"
            right
            width="40px"
            @click="sheet1 = !sheet1"
          >
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <iframe
        v-if="!sheet1"
        src="https://www.youtube.com/embed/5G1PBdmfcqc"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="ma-3"
        style="width: 95%; height: 400px"
      />
      <code v-highlight class="python ma-3" v-else>
        import sys,math,random,pygame<br />
        from pygame.locals import QUIT, KEYDOWN, K_LEFT, K_RIGHT, Rect<br /><br />

        class Block:<br />
        &nbsp;&nbsp;def __init__(self,col,rect,speed = 0):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.col = col<br />
        &nbsp;&nbsp;&nbsp;&nbsp; self.rect = rect<br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.speed = speed<br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.dir = random.randint(-45, 45) + 270<br /><br />

        &nbsp;&nbsp;def move(self):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.rect.centerx+ =
        math.cos(math.radians(self.dir))*self.speed<br />
        &nbsp;&nbsp;&nbsp;&nbsp;self.rect.centery- =
        math.sin(math.radians(self.dir))*self.speed<br /><br />

        &nbsp;&nbsp;def draw(self):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if self.speed = = 0:
        pygame.draw.rect(SURFACE,self.col,self.rect)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;else:
        pygame.draw.ellipse(SURFACE,self.col,self.rect)<br /><br />

        &nbsp;&nbsp;def tick():<br />
        &nbsp;&nbsp;&nbsp;&nbsp;global BLOCKS<br />
        &nbsp;&nbsp;&nbsp;&nbsp;global mess_score<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;for event in pygame.event.get():<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;if event.type = = QUIT:<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;pygame.quit()<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;sys.exit()<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;elif event.type = = KEYDOWN:<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;if event.key = =
        K_RIGHT and PADDLE.rect.centerx&lt;600: PADDLE.rect.centerx+ = 3<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;elif event.key = =
        K_LEFT and PADDLE.rect.centerx>0: PADDLE.rect.centerx- = 3<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;if BALL.rect.centery&lt;1000: BALL.move()<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;prevlen = len(BLOCKS)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;BLOCKS = [x for x in BLOCKS if not
        x.rect.colliderect(BALL.rect)]<br />
        &nbsp;&nbsp;&nbsp;&nbsp;score = 10*(30-len(BLOCKS))<br />
        &nbsp;&nbsp;&nbsp;&nbsp;mess_score =
        scorefont.render(str(score),True,(255,0,100))<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;if len(BLOCKS) ! = prevlen:<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;BALL.dir* = -1<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if PADDLE.rect.colliderect(BALL.rect):<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; BALL.dir =
        90+(PADDLE.rect.centerx-BALL.rect.centerx)/PADDLE.rect.width*80<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if BALL.rect.centerx&lt;0 or
        BALL.rect.centerx>600:<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; BALL.dir = 180-BALL.dir<br />
        &nbsp;&nbsp;&nbsp;&nbsp;if BALL.rect.centery&lt;0:<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; BALL.dir = -1*BALL.dir<br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; BALL.speed = 15<br /><br /><br />

        pygame.init()<br />
        pygame.key.set_repeat(5,5)<br /><br />

        SURFACE = pygame.display.set_mode((600,800))<br />
        FPSLOCK = pygame.time.Clock()<br />
        BLOCKS = []<br />
        PADDLE = Block((242,242,0),Rect(300,700,100,30))<br />
        BALL = Block((242,242,0),Rect(300,400,20,20),10)<br />
        scorefont = pygame.font.SysFont(None, 40)<br />
        score = 0<br /><br />

        def main():<br />
        &nbsp;&nbsp;myfont = pygame.font.SysFont(None,80)<br />
        &nbsp;&nbsp;mess_clear = myfont.render("Cleared",True,(255,255,0))<br />
        &nbsp;&nbsp;mess_over = myfont.render("Game Over",True,(255,255,0))<br />
        &nbsp;&nbsp;fps = 30<br />
        &nbsp;&nbsp;colors =
        [(255,0,0),(255,165,0),(242,242,0),(0,128,0),(128,0,128),(0,0,250)]<br /><br />

        &nbsp;&nbsp;for ypos,color in enumerate(colors,start = 0):<br />
        &nbsp;&nbsp; &nbsp;&nbsp;for xpos in range(0,5):<br />
        &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;BLOCKS.append(Block(color,Rect(xpos*100+60,ypos*50+40,80,30)))<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;while True:<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;tick()<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;SURFACE.fill((0,0,0))<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;BALL.draw()<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;PADDLE.draw()<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;for block in BLOCKS:<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;block.draw()<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;if len(BLOCKS) = = 0:
        SURFACE.blit(mess_clear,(200,400))<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;if BALL.rect.centery>800 and
        len(BLOCKS)>0: SURFACE.blit(mess_over, (150,400))<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;SURFACE.blit(mess_score,(10,10))<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;pygame.display.update()<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;FPSLOCK.tick(fps)<br /><br />

        if __name__ == "__main__": main()
      </code>
    </v-card>

    <v-card
      width="100%"
      :height="(sheet3 ? '600' : '550') + 'px'"
      class="mt-10"
    >
      <div class="d-flex">
        <div>
          <v-card-title class="text-h5"
            >파이썬을 이용해서 가족 개인 정보 얻기!</v-card-title
          >

          <v-card-subtitle>코딩 인사이트</v-card-subtitle>
        </div>

        <v-card-actions>
          <v-btn
            class="ml-2 mt-3"
            fab
            icon
            height="40px"
            right
            width="40px"
            @click="sheet3 = !sheet3"
          >
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <iframe
        v-if="!sheet3"
        src="https://www.youtube.com/embed/RZSzjcp_DII"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="ma-3"
        style="width: 95%; height: 400px"
      />
      <code v-highlight class="python ma-3" v-else>
        import socket, struct, binascii<br /><br />

        HOST = socket.gethostbyname(socket.gethostname())<br />
        s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_IP)<br /><br />

        s.bind((HOST, 0))<br /><br />

        s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)<br />
        s.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)<br /><br />

        while True:<br />
        &nbsp;&nbsp;data = s.recvfrom(65565)<br />
        &nbsp;&nbsp;ethernet_header = data[0][0:14]<br />
        &nbsp;&nbsp;eth_header = struct.unpack("!6s6s2s", ethernet_header)<br />
        &nbsp;&nbsp;ipheader = data[0][14:34]<br />
        &nbsp;&nbsp;ip_header = struct.unpack("!12s4s4s", ipheader)<br /><br />

        &nbsp;&nbsp;print("Destination MAC:", binascii.hexlify(eth_header[0]), "
        Source MAC:",<br />
        &nbsp;&nbsp;binascii.hexlify(eth_header[1]), " Type:",
        binascii.hexlify(eth_header[2]))<br />
        &nbsp;&nbsp;print("Source IP:", socket.inet_ntoa(ip_header[1]), "
        Destination IP:", socket.inet_ntoa(ip_header[2]))
        <br />
        &nbsp;&nbsp;print(data[0].decode("ISO-8859-1"))
      </code>
    </v-card>

    <v-card
      width="100%"
      :height="(sheet4 ? '200' : '550') + 'px'"
      class="mt-10"
    >
      <div class="d-flex">
        <div>
          <v-card-title class="text-h5">엔트리 대신 파이썬!</v-card-title>

          <v-card-subtitle>코딩 인사이트</v-card-subtitle>
        </div>

        <v-card-actions>
          <v-btn
            class="ml-2 mt-3"
            fab
            icon
            height="40px"
            right
            width="40px"
            @click="sheet4 = !sheet4"
          >
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <iframe
        v-if="!sheet4"
        src="https://www.youtube.com/embed/3Hkbj5CH8oY"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="ma-3"
        style="width: 95%; height: 400px"
      />
      <code v-highlight class="python ma-3" v-else> 코드 없음. 동영상 확인 </code>
    </v-card>

    <v-card
      width="100%"
      :height="(sheet5 ? '700' : '550') + 'px'"
      class="mt-10"
    >
      <div class="d-flex">
        <div>
          <v-card-title class="text-h5"
            >파이썬으로 네트워크 스캐닝 도구 만들기!</v-card-title
          >

          <v-card-subtitle>코딩 인사이트</v-card-subtitle>
        </div>

        <v-card-actions>
          <v-btn
            class="ml-2 mt-3"
            fab
            icon
            height="40px"
            right
            width="40px"
            @click="sheet5 = !sheet5"
          >
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <iframe
        v-if="!sheet5"
        src="https://www.youtube.com/embed/qYMiwwFynco"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="ma-3"
        style="width: 95%; height: 400px"
      />
      <code v-highlight class="python ma-3" v-else>
        from socket import *<br />
        import time<br /><br />

        startTime = time.time()<br /><br />

        if __name__ = = '__main__':<br />
        &nbsp;&nbsp;target = input("IP 주소를 입력하세요: ")<br />
        &nbsp;&nbsp;t_IP = gethostbyname(target)<br /><br />

        &nbsp;&nbsp;print("스캐닝을 시작하겠습니다 (" + t_IP + ")")<br /><br />

        &nbsp;&nbsp;for i in range(50, 500):<br />
        &nbsp;&nbsp; &nbsp;&nbsp;s = socket(AF_INET, SOCK_STREAM)<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;conn = s.connect_ex((t_IP, i))<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;if (conn == 0):<br />
        &nbsp;&nbsp; &nbsp;&nbsp;print("포트 ", i, "가 열려있습니다!")<br /><br />

        &nbsp;&nbsp; &nbsp;&nbsp;s.close()<br /><br />

        print(time.time() - startTime, " 시간")
      </code>
    </v-card>
  </div>
</template>

<script defer>
  export default {
    name: 'VideoPage',
    data() {
      return {
        sheet: false,
        sheet1: false,
        sheet2: false,
        sheet3: false,
        sheet4: false,
        sheet5: false,
      };
    },
  };
</script>
