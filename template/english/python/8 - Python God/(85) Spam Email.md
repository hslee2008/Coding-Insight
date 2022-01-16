# Spam Email

This project is for spamming your friends and families with Python.

# Preparation - 1

We first have to download smtplib and ssl module using PIP to use email service.

```
pip install smtpllib & pip install ssl
```

# Preparation - 2

First, we have to connect our computer to SMTPD server which sends email.

Run the following code.

```
python -m smtpd -c DebuggingServer -n localhost:1025
```

# Preparation - 3

We first have to let Python login to our google gmail account.

Go to Google Account [setting](https://myaccount.google.com/lesssecureapps) and click on allow.

Make sure you are not using not underage account.

# Code

Make a new file and put in the following code

```
import smtplib, ssl

port = 465  # Port to use (it has to be 465)
smtp_server = "smtp.gmail.com" # do not change. has to be gmail service
sender_email = "my@gmail.com"  # my email
receiver_email = "your@gmail.com"  # friend's email
password = input("Type your password and press enter: ") # password
message = """
blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla
"""

context = ssl.create_default_context()

with smtplib.SMTP_SSL(smtp_server, port, context = context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)
```
