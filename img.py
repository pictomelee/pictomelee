#Given the URl, print

import pycurl
from StringIO import StringIO

keyword = raw_input("Enter search")
buffer = StringIO()
c = pycurl.Curl()
c.setopt(c.URL, 'http://api.giphy.com/v1/gifs/search?q='+ keyword +'&api_key=dc6zaTOxFJmzC&limit=1')
c.setopt(c.WRITEDATA, buffer)
c.perform()
c.close()

body = buffer.getvalue()
# Body is a string in some encoding.
# In Python 2, we can print it without knowing what the encoding is.
print(body)

#only want 1 result so look for that
#revise so the user only searches for what they want.                                     
#nxt task is to clean up the URL so it only shows one
