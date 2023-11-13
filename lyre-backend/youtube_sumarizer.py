# Author: Nick
# About: Whisper + Open AI Test


# Imports
import whisper
import pytube as pt

TEST_LINK = 'https://www.youtube.com/watch?v=ygpMUQCQUsw'
TEST_OUTFILE = 'test.mp3'

# 

def get_youtube_audio(link: str, outfile: str):
    try:
        yt = pt.YouTube(link)
        stream = yt.streams.filter(only_audio=True).first()
        stream.download(filename=outfile)
    except Exception as e:
        print('Exception', e)
    
    
def transcribe_audio(filepath: str):
    # # Get YouTube Video
    # get_youtube_audio(TEST_LINK, TEST_OUTFILE)
    
    # file = os.path.dirname(os.path.abspath('test.mp3')) + '\\test.mp3'
    # print(type(file))
    # print('File', file)
    
    # Load File & Print Results
    model = whisper.load_model('base')
    result = model.transcribe(filepath)
    
    with open(filepath.replace('mp3', '.txt'), 'w+') as file:
        file.write(result['text'])
        
    print(result['text'])
    
    
def main():
    outfile = 'nick.mp3'
    get_youtube_audio(TEST_LINK, outfile)
    
    transcribe_audio(outfile)
    
    
    
    
if __name__ == "__main__":
    main()