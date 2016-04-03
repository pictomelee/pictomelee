import tag

def checkGifTags(gif, goalTag) :
	associatedTags = tag.getTags(gif)

	for tagID in associatedTags :
		if tagID == goalTag :
			return True


	return False