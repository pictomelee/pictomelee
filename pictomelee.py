import tag
import checkPictory
import tagToGifs
import json
from flask import Flask, render_template, url_for, request, jsonify
app = Flask(__name__)


time_taken = 0
gif_chain = []


@app.route('/passLink', methods=['POST'])
def passLink():
	
	if ('checkVictory' in request.form) :
		url = request.form['data']
		goal = request.form['goal']

		if checkPictory.checkGifTags(url,goal) == True :
			return jsonify(data="won")
	else :
		# this is not a POST for checking if the person won
		# get a new batch of GIFs

		num = int(request.form['number'])
		url = request.form['data']
		goal = request.form['goal']

		tags = tag.getTags(url)

		if num == 1:
			gif = tagToGifs.getGifs(tags, 3, 1)
			return jsonify(data=gif)
		else:
			gifs = tagToGifs.getGifs(tags, 3, 4)
			return jsonify(data=" ".join(gifs))

		return ""
		
@app.route('/win', methods=['POST'])
def win():
	global time_taken 
	global gif_chain

	time_taken = request.form['time']
	# print "time taken" + time_taken
	gif_chain = request.form['urls']
	# print "check out the gif_chain " + gif_chain

	return jsonify(redirect='/indexFinal')

@app.route('/indexFinal')
def indexFinal():
	return render_template('indexFinal.html', time=time_taken, chain=gif_chain)


@app.route('/start', methods=['GET'])
def my_form_post():
	return render_template('index.html')

@app.route('/')
def start():
	return render_template('start.html')

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
