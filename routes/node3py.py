# -*- coding: utf-8 -*-
import sys
import UtilDropbox

def btnAction(button):
    url = ''
    if button == 'a1':
        url = UtilDropbox.getUrlLink('A')
    elif button == 'a2':
        url = UtilDropbox.getUrlLink('B')
    elif button == 'a3':
        url = UtilDropbox.getUrlLink('C')
    elif button == 'b1':
        url = UtilDropbox.getUrlLink('D')
    else:
        url = UtilDropbox.getUrlLink('/')
        print("Sorry error")
    
    return url

if __name__ == '__main__':
    
    linkmapping = {'hypebeastFashion':'a1', 'vogueRunway' :'a2',
		'hypebeastFootage' :'a3', 'malemodelScene' : 'b1'}
    
    btn = sys.argv[1]
    btn = linkmapping[btn]
    url = btnAction(btn)
    print(url)
