import sys
from clarifai.client import ClarifaiApi

def getTags(gifUrl):
	cleanTags = []	
	clarifai_api = ClarifaiApi(APP_ID='tQuHu8gwESoqLgO8X_aXePmDDryeRcYROTfjlzdO', APP_SECRET='9nYcU-zfXs-xXTVtK03RlWNMgPImAw1n7YoViC3I') # assumes environment variables are set.
	result = clarifai_api.tag_image_urls(gifUrl)
	tags = result['results'][0]['result']['tag']['classes']
	#tags = map(str, tags)
	return tags[0]
	
