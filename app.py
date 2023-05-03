from flask import Flask, render_template, request
from functions.functions import *

app = Flask(__name__)

@app.route('/chat')
def index():
    return render_template('index.html')

@app.route('/chat/contact')
def contact():
    return render_template('contacto.html')

@app.route('/chat/send', methods=['POST'])
def send():
    message = request.form['message']
    print(message)
    respond = bot_response(message)
    return render_template('index.html', response=respond)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
 