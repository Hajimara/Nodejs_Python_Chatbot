import dropbox
import datetime

TOKEN = 'DkLa1dSIYyAAAAAAAAAARcLojKUFw_53cgsvc1HJpwvrwdPKTWTtjW7vnKRfczh2'
dbx = dropbox.Dropbox(TOKEN)
now = datetime.datetime.now().strftime("%y%m%d ")


def getList(base_dir=''):
    global dbx
    for entry in dbx.files_list_folder(base_dir).entries:
        name = entry.name
        print(name)


def uploadFile(name, code):
    global now
    fname = 'rst/' + name + '.xlsx'
    path = '/' + code + '/' + now + name + '.xlsx'
    print("path : {}".format(path))
    with open(fname, 'rb') as f:
        dbx.files_upload(f.read(), path)


def getUrlLink(code):
    global dbx
    DIR = '/' + code
    url = dbx.sharing_create_shared_link(DIR).url
    return url


