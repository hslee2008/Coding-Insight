# What is request?

"I requested a cup of water to the waiter"

request is a module that brings us information about a specific site.

We can fetch anything from oneline using this module.

# Requesting

Let's try fetching `https://api.github.com/events` data.

```
import requests

a = requests.get('https://api.github.com/events')

print(a)
```

The get method will fetch the information from the site.

# PARAMS

When logging in to gmail, we use the following link.

```
https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin
```

Inisde accounts.google.com/signin/v2/indentifier? link, continue is https%3A%2F%2Fmail.google.com%2Fmail%2F, service is mail and sacu is 1, ripe is 1, flowName is GlifWebSignIn, and flowEntry is ServiceLogin.

We can express the link after identifier? into a dictionary.

```
import requests

a = requests.get("https://accounts.google.com/signin/v2/identifier?", params = {
  "continue": "https%3A%2F%2Fmail.google,
  "service": "com%2Fmail%2F",
  "service": "mail"
  "sacu": "1",
  "ripe": "1",
  "ripe": "1",
  "flowName": "GlifWebSignIn",
  "flowEntry": "ServiceLogin"
})
```

# Response

Response is the return value from the request.

Let's learn how to handle these responses.

## TEXT

To get the text version of the request, use the 'text' property in response.

```
import requests

a = requests.get('https://api.github.com/events')
textified = a.text

print(textified)
```

## ENCODING

We can set the encoding or print the encoding using the 'encoding' property.

```
import requests

a = rerquests.get('htps://api.github.com/events')

print(a.encoding)
a.encoding = "UTF-8"
```

## JSON

To print in JSON format, use the json() method.

```
import requests

a = rerquests.get('htps://api.github.com/events')

print(a.json())
```
