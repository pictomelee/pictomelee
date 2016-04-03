# When clicked, will print something, after will print out three images

import sys
from clarifai.client import ClarifaiApi

clarifai_api = ClarifaiApi()


ClarifaiApi.geometry("1024x950+130+0")
ClarifaiApi.title("ServiceWhiz.")

def printimage():
    load = Image.open("hello.jpg")
    render = IClarifaiApi.PhotoImage(load)

    img = Button(ClarifaiApi, image=render,command=imgpress)
    img.image = render
    img.place(x=0,y=0)
    return;

def imgpress():
   from ClarifaiApi import Image
   img = Image.open('picture.jpg')
   img.show()
   return;


