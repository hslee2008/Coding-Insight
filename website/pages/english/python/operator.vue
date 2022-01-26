<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div class="margin: 5px;">
        <h1>What is operator?</h1>
        <p>
          Operators are symbols that does operation on numbers.<br /><br />

          For example, + and - calculates the addition and subtraction between
          two numbers.<br /><br />

          In this CSL, we will be learning about different types of operator in
          Python.
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <v-img
          alt="python-factory-picture"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEJ9fzr3QpW7a9Ase_cE279O1pTyY4GZ2T4cXc7rXrugIqPf_586nsM-Ajo_Q0Qxuyxk&usqp=CAU"
          max-width="300px"
        />
      </div>
    </div>

    <br /><br />

    <Header-en num="15" title="Operator"></Header-en>
    <QuadSpace />
    <div>
      <div>
        <h1>Arithmetic Operator</h1>
        <p>
          +, -, *, / are addition, subtraction, multiplication and division
          operators.<br /><br />

          ** is the power operator. 3 ** 3 is equal to 3 times 3 times 3.<br /><br />

          // calculates the number of times B could go inside A. For example, 4
          // 3 is euqal to 1 because 3 can go inside 4 only once.<br /><br />

          % calculates the remainder of B divided by A. For example, 4 % 3 is
          eqal to 1 because 3 can go into 4 once and the rest is 1.
        </p>
      </div>
    </div>
    <QuadSpace />
    <div>
      <div>
        <h1>Assignment Operator</h1>
        <p>
          Assign operators are operators that assign the outcome of
          operation.<br /><br />

          Arithmetic operator does not change the variable it does operation on.
          For example, a * 3 does not change a.<br /><br />

          Assignment operators, on the other hand, first does operator on
          variable then assigns the result to the original variable. For
          example, a += 1 is euqal to a = a + 1.
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/ff303b9456"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
      />
    </div>
    <QuadSpace />
    <div>
      <div>
        <h1>Compare Operator</h1>
        <p>
          Compare operators compares two values.<br /><br />

          <code>
            a = 3<br />
            b = 3<br /><br />

            print(a == b)
          </code>

          == returns boolean whether the two values are euqal to each other.<br /><br />
          > returns True if left is bigger and False otherwise.<br /><br />
          >= returns True if left is bigger or equal to right and False
          otherwise.<br /><br />
          < returns True if right is bigger and False otherwise. <=returns True
          if right is bigger or equal to left and False otherwise. <br /><br />
        </p>
      </div>
      <iframe
        class="embed-responsive-item"
        src="https://trinket.io/embed/python3/39a09b977e"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        loading="lazy"
        style="margin: auto"
      />
    </div>
    <QuadSpace />
    <NaviBtn flink="number" slink="numtype" />
    <QuadSpace />
  </div>
</template>
<script>
export default {
  page: 'OperatorPage',
};
</script>
