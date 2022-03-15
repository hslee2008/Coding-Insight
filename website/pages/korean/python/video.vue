<template>
  <div style="display: flex; flex-wrap: wrap" class="divy">
    <v-bottom-sheet v-model="sheet" inset>
      <template #activator="{ on, attrs }">
        <v-card class="mx-auto my-auto" height="400px">
          <iframe
            width="100%"
            class="card-img-top"
            height="200px"
            src="https://www.youtube.com/embed/0bwQtUOqW_g"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <v-card-title> 자동으로 줌 열기! </v-card-title>

          <v-card-subtitle>
            이제 컴퓨터만 켜 있으면 일어나지 않아도 수업에 자동으로
            참여가능합니다!
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="orange"
              dark
              v-bind="attrs"
              v-on="on"
            >
              코드 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-sheet height="100%" width="100%">
        <v-btn
          aria-label="Coding Insight Button"
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          닫기
        </v-btn>
        <div class="my-3">
          <pre>
              import webbrowser, keyboard, time

              minute = int(input("몇 분 기달리기: "))

              print(minute, " 기다리겠습니다.")
              time.sleep(minute)

              webbrowser.open("*")

              time.sleep(5)

              keyboard.press_and_release("left")
              keyboard.press_and_release("enter")

              time.sleep(5)

              keyboard.write("20221004")
              keyboard.press_and_release("enter")
            </pre
          >
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <!---------------------------------------------------------->

    <v-bottom-sheet v-model="sheet_1" inset>
      <template #activator="{ on, attrs }">
        <v-card class="mx-auto my-auto" height="400px">
          <iframe
            width="100%"
            class="card-img-top"
            height="200px"
            src="https://www.youtube.com/embed/5G1PBdmfcqc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <v-card-title> 나만의 파이썬 게임!(벽돌 게임) </v-card-title>

          <v-card-subtitle>
            파이썬을 이용해서 나만의 게임을 만들어 보겠습니다!
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="orange"
              dark
              v-bind="attrs"
              v-on="on"
            >
              코드 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-sheet height="100%" width="100%">
        <v-btn
          aria-label="Coding Insight Button"
          class="mt-6"
          text
          color="error"
          @click="sheet_1 = !sheet_1"
        >
          닫기
        </v-btn>
        <div class="my-3">
          <pre>
          import sys,math,random,pygame
          from pygame.locals import QUIT, KEYDOWN, K_LEFT, K_RIGHT, Rect
          class Block:
              def __init__(self,col,rect,speed=0):
                  self.col=col
                  self.rect=rect
                  self.speed=speed
                  self.dir=random.randint(-45,45)+270
              def move(self):
                  self.rect.centerx+=math.cos(math.radians(self.dir))*self.speed
                  self.rect.centery-=math.sin(math.radians(self.dir))*self.speed
              def draw(self):
                  if self.speed==0:
                      pygame.draw.rect(SURFACE,self.col,self.rect)
                  else:
                      pygame.draw.ellipse(SURFACE,self.col,self.rect)
          def tick():
              global BLOCKS
              global mess_score
              for event in pygame.event.get():
                  if event.type==QUIT:
                      pygame.quit()
                      sys.exit()
                  elif event.type==KEYDOWN:
                      if event.key==K_RIGHT and PADDLE.rect.centerx&lt;600:
                          PADDLE.rect.centerx+=3
                      elif event.key==K_LEFT and PADDLE.rect.centerx>0:
                          PADDLE.rect.centerx-=3
              if BALL.rect.centery&lt;1000:
                  BALL.move()
              prevlen=len(BLOCKS)
              BLOCKS=[x for x in BLOCKS if not x.rect.colliderect(BALL.rect)]
              score=10*(30-len(BLOCKS))
              mess_score=scorefont.render(str(score),True,(255,0,100))

              if len(BLOCKS) != prevlen:
                  BALL.dir*=-1
              if PADDLE.rect.colliderect(BALL.rect):
                  BALL.dir=90+(PADDLE.rect.centerx-BALL.rect.centerx)/PADDLE.rect.width*80
              if BALL.rect.centerx&lt;0 or BALL.rect.centerx>600:
                  BALL.dir=180-BALL.dir
              if BALL.rect.centery&lt;0:
                  BALL.dir=-1*BALL.dir
                  BALL.speed=15

          pygame.init()
          pygame.key.set_repeat(5,5)
          SURFACE=pygame.display.set_mode((600,800))
          FPSLOCK=pygame.time.Clock()
          BLOCKS=[]
          PADDLE=Block((242,242,0),Rect(300,700,100,30))
          BALL=Block((242,242,0),Rect(300,400,20,20),10)
          scorefont=pygame.font.SysFont(None, 40)
          score=0
          def main():

              myfont=pygame.font.SysFont(None,80)
              mess_clear=myfont.render("Cleared",True,(255,255,0))
              mess_over=myfont.render("Game Over",True,(255,255,0))

              fps=30
              colors=[(255,0,0),(255,165,0),(242,242,0),(0,128,0),(128,0,128),(0,0,250)]
              for ypos,color in enumerate(colors,start=0):
                  for xpos in range(0,5):
                      BLOCKS.append(Block(color,Rect(xpos*100+60,ypos*50+40,80,30)))
              while True:
                  tick()

                  SURFACE.fill((0,0,0))
                  BALL.draw()
                  PADDLE.draw()
                  for block in BLOCKS:
                      block.draw()
                  if len(BLOCKS)==0:
                      SURFACE.blit(mess_clear,(200,400))
                  if BALL.rect.centery>800 and len(BLOCKS)>0:
                      SURFACE.blit(mess_over, (150,400))
                  SURFACE.blit(mess_score,(10,10))
                  pygame.display.update()
                  FPSLOCK.tick(fps)
          if __name__=="__main__":
              main()

            </pre
          >
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <!---------------------------------------------------------->

    <v-bottom-sheet v-model="sheet_2" inset>
      <template #activator="{ on, attrs }">
        <v-card class="mx-auto my-auto" height="400px">
          <iframe
            width="100%"
            class="card-img-top"
            height="200px"
            src="https://www.youtube.com/embed/RZSzjcp_DII"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <v-card-title> 파이썬을 이용해서 가족 개인 정보 얻기! </v-card-title>

          <v-card-subtitle>
            파이썬 코드 20줄만 사용해서 컴퓨터와 똑같은 와이파이를 사용하는
            디바이스를 해킹하기
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="orange"
              dark
              v-bind="attrs"
              v-on="on"
            >
              코드 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-sheet height="100%" width="100%">
        <v-btn
          aria-label="Coding Insight Button"
          class="mt-6"
          text
          color="error"
          @click="sheet_2 = !sheet_2"
        >
          닫기
        </v-btn>
        <div class="my-3">
          <pre>
                import socket, struct, binascii

                HOST = socket.gethostbyname(socket.gethostname())
                s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_IP)

                s.bind((HOST, 0))

                s.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
                s.ioctl(socket.SIO_RCVALL, socket.RCVALL_ON)

                while True:
                    data = s.recvfrom(65565)
                    ethernet_header = data[0][0:14]
                    eth_header = struct.unpack("!6s6s2s", ethernet_header)
                    ipheader = data[0][14:34]
                    ip_header = struct.unpack("!12s4s4s", ipheader)

                    print("Destination MAC:", binascii.hexlify(eth_header[0]), " Source MAC:",
                    binascii.hexlify(eth_header[1]), " Type:", binascii.hexlify(eth_header[2]))
                    print("Source IP:", socket.inet_ntoa(ip_header[1]), " Destination IP:", socket.inet_ntoa(ip_header[2]))

                    print(data[0].decode("ISO-8859-1"))
            </pre
          >
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <!---------------------------------------------------------->

    <v-bottom-sheet v-model="sheet_3" inset>
      <template #activator="{ on, attrs }">
        <v-card class="mx-auto my-auto" height="400px">
          <iframe
            width="100%"
            class="card-img-top"
            height="200px"
            src="https://www.youtube.com/embed/ePuu9qYlQVY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <v-card-title> 햄스터 조종! (머신러닝) </v-card-title>

          <v-card-subtitle>
            햄스터를 명령하기! 햄스터의 왕이 되세요!
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="orange"
              dark
              v-bind="attrs"
              v-on="on"
            >
              코드 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-sheet height="100%" width="100%">
        <v-btn
          aria-label="Coding Insight Button"
          class="mt-6"
          text
          color="error"
          @click="sheet_3 = !sheet_3"
        >
          닫기
        </v-btn>
        <div class="my-3">코드 없음</div>
      </v-sheet>
    </v-bottom-sheet>

    <!---------------------------------------------------------->

    <v-bottom-sheet v-model="sheet_4" inset>
      <template #activator="{ on, attrs }">
        <v-card class="mx-auto my-auto" height="400px">
          <iframe
            width="100%"
            class="card-img-top"
            height="200px"
            src="https://www.youtube.com/embed/3Hkbj5CH8oY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <v-card-title> 엔트리 대신 파이썬! </v-card-title>

          <v-card-subtitle> 파이썬으로 엔트리 조종하기! </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="orange"
              dark
              v-bind="attrs"
              v-on="on"
            >
              코드 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-sheet height="100%" width="100%">
        <v-btn
          aria-label="Coding Insight Button"
          class="mt-6"
          text
          color="error"
          @click="sheet_4 = !sheet_4"
        >
          닫기
        </v-btn>
        <div class="my-3">코드 없음</div>
      </v-sheet>
    </v-bottom-sheet>

    <!---------------------------------------------------------->

    <v-bottom-sheet v-model="sheet_5" inset>
      <template #activator="{ on, attrs }">
        <v-card class="mx-auto my-auto" height="400px">
          <iframe
            width="100%"
            class="card-img-top"
            height="200px"
            src="https://www.youtube.com/embed/qYMiwwFynco"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <v-card-title>파이썬으로 네트워크 스캐닝 도구 만들기! </v-card-title>

          <v-card-subtitle>
            지금 당장 윤리적 해킹의 기본을 알아두세요!
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="orange"
              dark
              v-bind="attrs"
              v-on="on"
            >
              코드 보기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <v-sheet height="100%" width="100%">
        <v-btn
          aria-label="Coding Insight Button"
          class="mt-6"
          text
          color="error"
          @click="sheet_5 = !sheet_5"
        >
          닫기
        </v-btn>
        <div class="my-3">
          <pre>

            from socket import *
            import time

            startTime = time.time()

            if __name__ == '__main__':
                target = input("IP 주소를 입력하세요: ")
                t_IP = gethostbyname(target)

                print("스캐닝을 시작하겠습니다 (" + t_IP + ")")

                for i in range(50, 500):
                    s = socket(AF_INET, SOCK_STREAM)

                    conn = s.connect_ex((t_IP, i))

                    if (conn == 0):
                        print("포트 ", i, "가 열려있습니다!")

                s.close() print(time.time() - startTime, " 시간")
          </pre>
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <br />
    <v-divider />
    <br />

    <div class="text-center">
      <h2 class="display-4">파이썬 강좌 모음</h2>
      <p class="lead">파이썬을 재미있는 비디오를 통해 공부해요!</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLhHi1BeBom9e62FpDsAnpP-tJUULibSPE"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script defer>
export default {
  name: 'VideoPage',
  data() {
    return {
      sheet: false,
      sheet_1: false,
      sheet_2: false,
      sheet_3: false,
      sheet_4: false,
      sheet_5: false,
    };
  },
};
</script>

<style>
.divy > * {
  margin: 15px;
}
</style>
