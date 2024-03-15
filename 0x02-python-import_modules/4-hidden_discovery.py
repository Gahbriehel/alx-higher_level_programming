#!/usr/bin/python3
if __name__ == "__main__":
    from hidden_4 import *
    cm = dir()
    for name in range(0, len(cm)):
        if cm[name][:2] != "__":
            print("{}".format(cm[name]))
