<template>
  <div>
    <Header type="Python" num="39" title="다양한 함수" />

    <div>
      <div>
        <h2>quit() and exit()</h2>
        <p>
          We can always quit the Python program whenever we want by using either
          quit() or exit().<br /><br />

          <code>
            a == 1<br /><br />

            while True:<br />
            &nbsp;if a == 10:<br />
            &nbsp;&nbsp;quit()<br />
            &nbsp;else:<br />
            &nbsp;&nbsp;a += 1
          </code>

          quit() and exit() is exactly same.
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/8b75210243"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>help()</h2>
        <p>
          In Python, there is an useful program to help developers.<br /><br />

          Use the help() function anywhere (even inside your python file!) and
          the help program will start.<br /><br />

          The following text should appear.<br /><br />

          <code>
            Welcome to Python 3.9's help utility!<br /><br />

            If this is your first time using Python, you should definitely check
            out the tutorial on the Internet at
            https://docs.python.org/3.9/tutorial/.<br /><br />

            Enter the name of any module, keyword, or topic to get help on
            writing Python programs and using Python modules. To quit this help
            utility and return to the interpreter, just type "quit".<br /><br />

            To get a list of available modules, keywords, symbols, or topics,
            type "modules", "keywords", "symbols", or "topics". Each module also
            comes with a one-line summary of what it does; to list the modules
            whose name or summary contain a given string such as "spam", type
            "modules spam".<br /><br />

            help>
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/ea0c810c1a"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="oneliner" aft="module" />
  </div>
</template>
