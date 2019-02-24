import tweepy
import json



from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS





# assuming twitter_authentication.py contains each of the 4 oauth elements (1 per line)

API_KEY="Q4sZ0b7kjLhVW7zLo8dGNSsFw"
API_SECRET="bzgCJ2a2zMQYZ9OzB3ueLuPDvliUSu4S5fMBGbEBwzkexoB10n"

# After the step above, you will be redirected to your app's page.
# Create an access token under the the "Your access token" section
ACCESS_TOKEN="2875036372-rEBuUQbpuV0edFfAMxYoI8J6hwXrraOT4SSyIjR"
ACCESS_TOKEN_SECRET="bEV75aRZaKbYqmJYxs7svx4cSWRg4r4gzj2fzpa5n8W40"

auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)












app = Flask(__name__)
api = Api(app)
CORS(app)
class GetList(Resource):
    def get(self):
        api = tweepy.API(auth)
        max_tweets=5
        query='#first2me'
        searched_tweets = [status._json for status in tweepy.Cursor(api.search,  q=query).items(max_tweets)]
        json_strings = [json.dumps(json_obj) for json_obj in searched_tweets]  
        file = [json.loads(json_string) for json_string in json_strings]
        
        
        return file
api.add_resource(GetList, '/')

if __name__ == '__main__':
    app.run(debug=True)  
