import sys

def buttonTest(a):
    if button == '1':
        ButtonFun01()
    elif button == '2':
        ButtonFun02()
    elif button == '3':
        ButtonFun01()
    else:
        print("Sorry error")

def ButtonFun01():
    print("buttonFuone 01 input")


def ButtonFun02():
    print("buttonFuone 02 input")


def ButtonFun03():
    print("buttonFuone 03 input")

if __name__ == '__main__':
    button = sys.argv
    #memo = sys.argv[2]
    print(button)

  
  
    buttonTest(button)
  
