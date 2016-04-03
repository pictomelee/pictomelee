import sys
from clarifai.client import ClarifaiApi

def getTags(gifUrl):
	cleanTags = []	
	clarifai_api = ClarifaiApi()  # assumes environment variables are set.
	result = clarifai_api.tag_image_urls(gifUrl)
	tags = result['results'][0]['result']['tag']['classes']
	#tags = map(str, tags)
	for element in tags:
		cleanTags += eval(element)
		
	return cleanTags

