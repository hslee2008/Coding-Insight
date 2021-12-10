# What is GTTS?
GTTS is a module that let's us record an audio file containing the words the computer spoke.

Let's try to make the computer speak whatever we want!

First, let's install gtts by running the following command.

```
pip install gtts
```

# GTTS Command
Open a new terminal and run the following command.

```
gtts-cli 'hello' --output hello.mp3
```

If we run the command above, a new file named hello.mp3 will be made.

Now, let's run hello.mp3 file and you will hear the computer say 'hello'.

# Python
Now, let's try making computer speak in Python file.

```
from gtts import gTTS

tts = gTTS('Python is awsome', lang="en")
tts.save("hello.mp3")
```

We made an audio file using gTTS() and saved it in our computer using tts.save().
