import json
import requests
import time
import urllib
import random



TOKEN = "392333038:AAGk3Jx3FFuHLb0epzKffq4t9AUrLujj1XQ"
URL = "https://api.telegram.org/bot{}/".format(TOKEN)
pinList={}

def send_server(pin,chat):
    endp="http://subro-test.azurewebsites.net/pin.php"
    print pin
    print chat
    data={'pinno':str(pin),'chatid':str(chat)}
    r=requests.get(endp,params=data)
    return r.status_code

def get_url(url):
    response = requests.get(url)
    content = response.content.decode("utf8")
    return content


def get_json_from_url(url):
    content = get_url(url)
    js = json.loads(content)
    return js


def get_updates(offset=None):
    url = URL + "getUpdates"
    if offset:
        url += "?offset={}".format(offset)
    js = get_json_from_url(url)
    return js


def get_last_update_id(updates):
    update_ids = []
    for update in updates["result"]:
        update_ids.append(int(update["update_id"]))
    return max(update_ids)

def echo_all(updates):
    for update in updates["result"]:
        chat = update["message"]["chat"]["id"]
        text = update["message"]["text"]
        if text=="/start":
            pin=pin_generate(chat)
            r=send_server(pin,chat)
            if(r==200):
                pin="Enter the following pin in extension - "+pin
                send_message(pin, chat)
            else:
                send_message("PIN already created or server error",chat)
        else:
            continue

def pin_generate(chatid):
    pin=random.randint(1000,9999)
    pinList[chatid]=pin
    pins=str(pin)
    return pins

def get_last_chat_id_and_text(updates):
    num_updates = len(updates["result"])
    last_update = num_updates - 1
    text = updates["result"][last_update]["message"]["text"]
    chat_id = updates["result"][last_update]["message"]["chat"]["id"]
    return (text, chat_id)


def send_message(text, chat_id):
    text = urllib.quote(text)
    url = URL + "sendMessage?text={}&chat_id={}".format(text, chat_id)
    get_url(url)


def main():
    last_update_id = None
    while True:
        updates = get_updates(last_update_id)
        if len(updates["result"]) > 0:
            last_update_id = get_last_update_id(updates) + 1
            echo_all(updates)
        time.sleep(0.5)


if __name__ == '__main__':
    main()