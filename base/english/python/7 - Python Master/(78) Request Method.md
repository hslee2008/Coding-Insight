# Status

Using the status_code property, we can figure out the status of our request.

```
print(a.status_code)
```

If 200 is printed, the request is a success.

Note that all the status code can be read on https://www.restapitutorial.com/httpstatuscodes.html

To check whether the request succeeded or not, use the 'ok' property and check whether it is True or False.

```
print(a.ok)
```

# Header

Header is explanation for the request.

You can make your own header during the request.

```
import requests

a = requests.get('htps://api.github.com/events', headers = {
  "title": "Fetch Github",
  "explanation": "Data",
  "explanation": "Testing",
  "by": "header...",
  "by": "Me"
})
```
