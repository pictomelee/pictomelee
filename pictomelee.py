import tag
import tagToGifs
import json
from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)


@app.route('/passLink', methods=['POST'])
def passLink():
	url = request.form['data']
	tags= tag.getTags(url)
	gifs = tagToGifs.getGifs(tags, 2, 4)
	return " ".join(gifs)


@app.route('/index')
def index():
	return render_template('index.html')

app.debug = True

if __name__ == '__main__':
	app.run()
