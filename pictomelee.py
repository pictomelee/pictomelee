from flask import Flask
from flask import render_template
from flask import url_for

app = Flask(__name__)

# set up static link to index.html's CSS file

url_for('static', filename='CSS.css')

@app.route('/index')

def index():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0')