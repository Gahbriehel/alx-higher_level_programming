#!/usr/bin/python3
if __name__ == "__main__":
    from hidden_4 import *
    cm = dir()
    for i in range(0, len(cm)):
        if cm[i][:2] != "__":
            print("{:s}".format(cm[i]))
