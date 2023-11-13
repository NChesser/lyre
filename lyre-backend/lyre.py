from flask import Flask, request

app = Flask(__name__)

@app.route("/test")
def home():
    return "Welcome Home!"


@app.route('/comprehension', methods=['GET', 'POST'])
def comprehension():
    
    if request.method == 'POST':
        return 'Request Sent'
    
    return 'Data From Flask Server'


@app.route('/story')
def display_file():
    try:
        with open(f'stories/test.txt', 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        return 'File not found'
    
    
@app.route('/save-sentence', methods=['POST'])
def save_sentence():
    data = request.get_json()
    print(data)
    
    sentence = data.get('sentence', '').strip()
    
    try: 
        with open(f'data/{sentence}txt', 'w+') as file:
            file.write(sentence)
    except:
        return 'Failed to Save'
        
    return 'Saved Successfully!'