import sys
from clarifai.client import ClarifaiApi
clarifai_api = ClarifaiApi()  # assumes environment variables are set.
result = clarifai_api.tag_image_urls(sys.argv[1])
tags = result['results'][0]['result']['tag']['classes']
tags = map(str, tags)
print(tags)
