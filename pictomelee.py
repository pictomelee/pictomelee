import tag
import tagToGifs
import json
from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)


@app.route('/passLink', methods=['POST'])
def passLink():
	num = int(request.form['number'])
	url = request.form['data']
	tags= tag.getTags(url)
	if num == 1:
		gif = tagToGifs.getGifs(tags, 3, 1)
		return jsonify(data=gif)
	else:
		gifs = tagToGifs.getGifs(tags, 3, 4)
		return jsonify(data=" ".join(gifs))
	return ""


@app.route('/index')
def index():
	return render_template('index.html',urls='https://media.giphy.com/media/iPTTjEt19igne/giphy.gif')


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
