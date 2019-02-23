from __future__ import absolute_import, print_function

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

# Go to http://apps.twitter.com and create an app.
# The consumer key and secret will be generated for you after
consumer_key="Q4sZ0b7kjLhVW7zLo8dGNSsFw"
consumer_secret="bzgCJ2a2zMQYZ9OzB3ueLuPDvliUSu4S5fMBGbEBwzkexoB10n"

# After the step above, you will be redirected to your app's page.
# Create an access token under the the "Your access token" section
access_token="2875036372-rEBuUQbpuV0edFfAMxYoI8J6hwXrraOT4SSyIjR"
access_token_secret="bEV75aRZaKbYqmJYxs7svx4cSWRg4r4gzj2fzpa5n8W40"

class StdOutListener(StreamListener):
    """ A listener handles tweets that are received from the stream.
    This is a basic listener that just prints received tweets to stdout.
    """
    def on_data(self, data):
        print(data)
        return True

    def on_error(self, status):
        print(status)

if __name__ == '__main__':
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    stream = Stream(auth, l)
    stream.filter(track=['#first2me'])
    
                        