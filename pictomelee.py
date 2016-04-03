import json
from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)


@app.route('/passLink', methods=['GET','POST'])
def passLink():
	
	gifToTag = eval(request.data)['gifUrl']
	print gifToTag
	return render_template('index.html')
	# print request.form['data']
	# data = request.form['gifUrl']
	# print data

@app.route('/index')
def index():
	return render_template('index.html',urls='https://media.giphy.com/media/iPTTjEt19igne/giphy.gif')

app.debug = True

if __name__ == '__main__':
	app.run()