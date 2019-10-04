import PIL
from PIL import Image
from os import path
import sys
def foo(filename):
    img = Image.open(filename)
    img.thumbnail([2048,2048], PIL.Image.ANTIALIAS)
    img.save(filename)
    print("Image {} saved".format(filename))
def main():
    print("hola!")
    for arg in sys.argv[1:]:
        foo(arg)
main()
