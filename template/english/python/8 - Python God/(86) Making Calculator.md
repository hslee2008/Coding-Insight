Let's try making a calculator in Python.

```
import math
a=input("Operation:")
b=int(input(First number:"))
c=int(input("Second number:"))
if a=="division" or a=="/":
    if c==0:
        print("Wrong format")
    else:
        print(b/c)
if a=="exponential":
    if b<0:
        print("Wrong format")
    else:
        print(math.sqrt(b))
result1={"+":b+c,"-":b-c,"*":b*c,"square":b**c,"addition":b+c,"subtraction":b-c,"multiplcation":b*c}
result2={"absolute":abs(b),"sin":math.sin(math.radians(b)),"cos":math.cos(math.radians(b)),"tan":math.tan(math.radians(b))}
if a!="squreroot" and a!="division" and a!="/":
    if a in result1:
        print(result1[a])
    elif a in result2:
        print(result2[a])
    else:
        print("Wrong format")
```
