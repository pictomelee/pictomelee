from flask import Flask
from flask import render_template
from flask import request
from flask import url_for
import json
import tag
import tagToGifs

app = Flask(__name__)


@app.route('/sendData', methods=['POST'])
def sendData():
	url = request.form['data']
	tags= tag.getTags(url)
	gifs = tagToGifs.getGifs(tags, 3, 4)
	return " ".join(gifs)

@app.route('/index')
def index():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
	
