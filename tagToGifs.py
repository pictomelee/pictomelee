#Given the URl, print

import random
import pycurl
from StringIO import StringIO
import json

def getGifs(tags, keywordsPerSearch, gifsToFind):
	gifs = []
	for i in range(gifsToFind):
		q = getRandomSubset(tags, keywordsPerSearch)
		print(q)
		s = getStringFromKeywords(q)
		print(s)
		gifs.append(s)
	return gifs
	

def getRandomSubset(list, number):
	number = min(list, number)
	newlist = []
	for i in range(number):
		newlist.append(list[random.randint(0, len(list)-1)])
	return newlist

def getStringFromKeywords(list):
	keyphrase = "+".join(list)
	return getStringFromKeyword(keyphrase)

def getStringFromKeyword(keyword):
	buffer = StringIO()
	c = pycurl.Curl()
	print(keyword)
	c.setopt(c.URL, 'http://api.giphy.com/v1/gifs/search?q='+ keyword +'&api_key=dc6zaTOxFJmzC&limit=1')
	c.setopt(c.WRITEDATA, buffer)
	c.perform()
	c.close()
	body = buffer.getvalue()
	if len(body) < 2:
		return ""
	# Body is a string in some encoding.
	# In Python 2, we can print it without knowing what the encoding is.
	a = json.loads(str(body))
	url = "https://media.giphy.com/media/" + a['data'][0]['id'] + "/giphy.gif"
	return url


	#only want 1 result so look for that
	#revise so the user only searches for what they want.                                     
	#nxt task is to clean up the URL so it only shows one
