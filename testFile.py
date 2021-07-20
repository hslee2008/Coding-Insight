import multiprocessing


def twoTime(num):
    print(num * 2)


def threTime(num):
    print(num * 3)


if __name__ == "__main__":
    p1 = multiprocessing.Process(target=threTime, args=(10, ))
    p2 = multiprocessing.Process(target=twoTime, args=(10, ))

    p1.start()
    p2.start()

    print("Done!")
