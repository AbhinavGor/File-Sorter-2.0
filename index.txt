courseCodes = ['CSE1001', 'CSE1002', 'CSE1003']
from os import listdir
from os.path import isfile, join
import os


def createFolder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print('Error: Creating directory. ' + directory)


onlyfiles = [f for f in listdir("C:\\Users\\Abhinav\\OneDrive\\Desktop\\abhinavgor.com") if isfile(join("C:\\Users\\Abhinav\\OneDrive\\Desktop\\abhinavgor.com", f))]


#print(onlyfiles)

for i in courseCodes:
    createFolder(str('C:\\Users\\Abhinav\\OneDrive\\Desktop\\Child\\' + i + '\\'))
