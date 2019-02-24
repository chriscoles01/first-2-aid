import tweepy
import json



from flask import Flask
from flask_restful import Resource, Api





# assuming twitter_authentication.py contains each of the 4 oauth elements (1 per line)

API_KEY="Q4sZ0b7kjLhVW7zLo8dGNSsFw"
API_SECRET="bzgCJ2a2zMQYZ9OzB3ueLuPDvliUSu4S5fMBGbEBwzkexoB10n"

# After the step above, you will be redirected to your app's page.
# Create an access token under the the "Your access token" section
ACCESS_TOKEN="2875036372-rEBuUQbpuV0edFfAMxYoI8J6hwXrraOT4SSyIjR"
ACCESS_TOKEN_SECRET="bEV75aRZaKbYqmJYxs7svx4cSWRg4r4gzj2fzpa5n8W40"

auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)
max_tweets=18
query='#first2aid'
searched_tweets = [status._json for status in tweepy.Cursor(api.search,  q=query).items(max_tweets)]
json_strings = [json.dumps(json_obj) for json_obj in searched_tweets]  









app = Flask(__name__)
api = Api(app)

class GetList(Resource):
    def get(self):
        file = [json.loads(json_string) for json_string in json_strings]
        
        
        return file
api.add_resource(GetList, '/')

if __name__ == '__main__':
    file = open("testfile.txt","r") 
    list1 = file.read()
    app.run(debug=True)  
