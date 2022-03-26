<template>
  <div>
    <br /><br />
    <div
      style="display: flex; padding: 30px; border-radius: 5px"
      class="img-div"
    >
      <div>
        <h2>If Statement</h2>
        <p>
          If statement is a statement that contains the meaning 'if'.<br /><br />
          For example, "If you get 100 in your test, I will give you a
          candy".<br /><br />
          The sentence above has the same meaning: If your score is equal to
          100, get an hour of playing games.<br /><br />
          In Python, we can try that statement out with something called if
          statement.<br /><br />
          <code>
            a = input("Score:")<br /><br />
            if a == "100":<br />
            &nbsp;print("play game")
          </code>
          Depending on the statement a == "100", either "play game" is printed
          or nothing.<br /><br />
          If a is 100, print "play game" and nothing if otherwise.<br /><br />
          Note to put ':' after statement and indent the code you want to run if
          statement is true.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <GlobalImage
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wpiBBpzSMnlDX8KrxleWQf5wKSf2lGHbtw&usqp=CAU"
        />
      </div>
    </div>
    <QuadSpace />
    <div class="text-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DzDnLTtrDQk"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <QuadSpace />
    <Header-en type="Python" title="If Statement" num="26" />

    <div>
      <div>
        <h2>if - else</h2>
        <p>
          If - else statement is very similar to if statement above.<br /><br />
          However, we will be adding a new code to run if the statment is
          false.<br /><br />
          <code>
            a = input("Score:")<br /><br />
            if a == "100":<br />
            &nbsp;print("candy")<br />
            else:<br />
            &nbsp;print("nothing")
          </code>
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Logical Operator</h2>

          <h3>and</h3>
          'and' operator is used to put two statements inside on if satement.<br /><br />
          When using the 'and' operator, the code inside if statement will run
          when the two statements is True.<br /><br />
          For example, the code inside if a == 1 and a > 0 will run if a is
          equal to 1 and bigger than 0.
          <h3>or</h3>
          The if statement will run if at least one of the two statement is
          True.
        </div>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/9e178be286"
        width="100%"
        height="356"
        loading="lazy"
        class="mx-auto my-auto"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>다양한 형태</h2>
        <h3>if - else</h3>
        If - else statement is very similar to if statement above.<br /><br />
        However, we will be adding a new code to run if the statment is false.
        <h3>if - elif</h3>
        To put it simply, if - elif is equal to if - else but with another if
        inside else.<br /><br />
        The code inside elif will run when the statement inside if is False and
        another statement inside elif is True.
        <h3>if - elif - else</h3>
        If - elif - else is a combination of statements we just learned.<br /><br />
        If all the satements inside if and elif is False, Python will run the
        code inside else.
      </div>
    </div>
    <iframe
      src="https://trinket.io/embed/python3/4f34d13cdc"
      width="100%"
      height="356"
      loading="lazy"
      class="mx-auto my-auto"
    />
    <QuadSpace />

    <QuadSpace />

    <Navigation bef="setmethod" aft="ifmaster" />
  </div>
</template>
