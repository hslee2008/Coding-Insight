<template>
  <div>
    <Header type="Python" num="22" title="Dictionary Method" />

    <div>
      <div>
        <h2>How to add a pair of key and value</h2>
        <p>
          Inside a dictionary variable named 'md', let's try adding 'c' value to
          the '3' key.<br /><br />

          <code> a[3] = 'c' </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/32e3c5c425"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>How to delete a pair of key and value</h2>
        <p>
          Similar to deletig a variable, we can delete a pair of key and
          value.<br /><br />

          We are treating the pair like a single variable.<br /><br />

          Use the del keyword.<br /><br />

          <code>
            a={1:"A",2:"B",3;"C"}<br />
            del a[1]<br /><br />

            print(a)
          </code>

          if we use del, only the pair will be deleted from the dictionary.
        </p>
        <iframe
          src="https://trinket.io/embed/python3/1a3ca85630"
          width="100%"
          height="356"
          loading="lazy"
          class="ma-auto"
        />
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>How to change value of key</h2>
        <p>
          To change the value of key, type in the key name inside [] and new
          value after it.<br /><br />

          <code>
            mainDict = {<br />
            "member1": "John",<br />
            "member2": "Sam",<br />
            "member3": "Maria"<br />
            }<br /><br />

            mainDict["member3"] = "Clara"<br /><br />

            print(mainDict)
          </code>

          To add the contents of a dictionary to another, use the update()
          method.<br /><br />

          It has the following syntax: dictionary.update(secondDictionary)<br /><br />

          If the following key inside secondDictionary already exists in
          dictionary, it updates it. If the key does not exist in dictionary, it
          adds new ones.<br /><br />

          <code>
            cars = {<br />
            "brand": "Ford",<br />
            "model": "Mustang",<br />
            "year": 1964<br />
            }<br /><br />

            cars.update({<br />
            "isFromUnitedStates": true, #new key<br />
            "brand": "Samsung" #brand is updated to Samsung<br />
            })<br /><br />

            print(cars)
          </code>
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/9b40fb09d3"
        width="100%"
        height="356"
        loading="lazy"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>Get dictionary key</h2>
        <p>
          To find the value of the key, use the get() method.<br /><br />

          If the value does not exist, it will return a default value.<br /><br />

          <code>
            mainDict = {<br />
            "member1": "John",<br />
            "member2": "Sam",<br />
            "member3": "Maria"<br />
            }<br /><br />

            print(mainDict.get("member1", "Hmmm... Not found"))
          </code>

          member1 exists so get() returns "John".<br /><br />

          However, if we put in member4 instead of member1, it will return
          "Hmmm... Not found".
        </p>
      </div>
      <iframe
        src="https://trinket.io/embed/python3/c250d6c262"
        width="100%"
        height="356"
        loading="lazy"
        class="ma-auto"
      />
    </div>

    <QuadSpace />

    <Navigation bef="dictionary" aft="zipping" />
  </div>
</template>
