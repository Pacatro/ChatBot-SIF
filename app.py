from flask import Flask, render_template, request, jsonify
from functions.functions import *

load_dotenv()

app = Flask(__name__)

@app.route('/chat')
def index():
    return render_template('index.html')

@app.route('/chat/contact')
def contact():
    return render_template('contacto.html')

@app.route('/chat/send', methods=['POST'])
def send():
    message = request.get_json()['message']
    respond = bot_response(message)
    
    json_respond = [
        {
            "respond": respond
        }
    ]

    return jsonify(json_respond)

@app.route('/chat/email', methods=['POST'])
def email():
    username = request.form['username']
    user_email = request.form['user_mail']
    user_message = request.form['user_message']
    
    #Send email to fixnexus
    send_email(username, user_email, user_message, os.getenv('FIXNEXUS_ADDRESS'))
    #Send confirm email to user
    send_email(username, user_email, user_message, user_email)
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
 