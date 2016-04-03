import tag
import checkPictory
import tagToGifs
import json
from flask import Flask, render_template, url_for, request, jsonify
app = Flask(__name__)
time_taken = 500
gif_chain = 'a b c'




@app.route('/passLink', methods=['POST'])
def passLink():
	num = int(request.form['number'])
	url = request.form['data']
	goal = request.form['goal']

	if checkPictory.checkGifTags(url,goal) == True :
		return jsonify(data="won")
	else :
		# continue the game

		tags= tag.getTags(url)

		if num == 1:
			gif = tagToGifs.getGifs(tags, 3, 1)
			return jsonify(data=gif)
		else:
			gifs = tagToGifs.getGifs(tags, 3, 4)
			return jsonify(data=" ".join(gifs))

		return ""
		
@app.route('/win', methods=['POST'])
def win():
	time_taken = request.form['time']
	gif_chain = request.form['urls']
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
