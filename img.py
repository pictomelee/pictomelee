#Given the URl, print 
import pycurl
from StringIO import StringIO

query = u'http://api.giphy.com/v1/gifs/search?q='
query = query + u'funny' +u'cat' 
query = query + '&api_key=dc6zaTOxFJmzC'
buffer = StringIO()
c = pycurl.Curl()
c.setopt(c.URL, query)
c.setopt(c.WRITEDATA, buffer)
c.perform()
c.close()

body = buffer.getvalue()
# Body is a string in some encoding.
# In Python 2, we can print it without knowing what the encoding is.
print(body)
