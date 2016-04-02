# super simple test of flask

from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
	return app.send_static_file('index.html')
#def hello_world():
#	return 'Hello World!'

if __name__ == '__main__':
	app.run(host='0.0.0.0')

