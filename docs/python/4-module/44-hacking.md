---
sidebar_position: 44
id: 'hacking'
---

# 해킹

파이썬을 사용해서 여러분 집의 인터넷에서 일어나는 모든 일을 알 수 있는 프로그램을 만들어 보겠습니다.

즉, 가족이나 모든 기기가 인터넷에서 무엇을 하고 있는지 알 수 있다는 뜻입니다.

## 프로그램 설명

`socket`이라는 모듈을 사용하면 인터넷에서 어떤 일이 일어나는지 다 확인이 가능합니다.

## 코드

```py
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
  print("Destination MAC:", binascii.hexlify(eth_header[0]), " Source   MAC:", binascii.hexlify(eth_header[1]), " Type:",   binascii.hexlify(eth_header[2]))
  print("Source IP:", socket.inet_ntoa(ip_header[1]), " Destination IP:",   socket.inet_ntoa(ip_header[2]))
  print(data[0].decode("ISO-8859-1"))
```

## 비디오
<iframe width="560" height="315" src="https://www.youtube.com/embed/RZSzjcp_DII" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
