

import dropbox
import sys,os

token = 'DkLa1dSIYyAAAAAAAAAARcLojKUFw_53cgsvc1HJpwvrwdPKTWTtjW7vnKRfczh2'
dbx= dropbox.Dropbox(token)

def getUrlLink(btn):
    
    btn_list = ['a1','a2','a3','b1','b2','b3','c1','c2']

    if btn not in btn_list:
        print("Type error")
        exit()
   

    DIR = '/' + btn[0] + '/' + btn
    url = dbx.sharing_create_shared_link(DIR).url
    print(url)
    return url


       
if __name__ == '__main__':
   
    linkMapping = {'newest' : 'a1', 'Major7Top' : 'a2', 'Minor7Top':'a3', 'MMSCENE' : 'b1', 'THEFASHIONISTO' :'b2', 'KERA' :'b3', 'korea' : 'c1', 'foreign country' : 'c2'}
     
    #up = {'newest' :'a1'}
    argv = sys.argv
    btn = argv[1]
    btn1 = linkMapping[btn]
    url = getUrlLink(btn1)
