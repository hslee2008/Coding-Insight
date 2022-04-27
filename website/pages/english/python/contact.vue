<template>
  <div>
    <div>
      <h2>Contact List</h2>
      <p>
        We can make a contact list of friends using Python.<br /><br />

        This is a very simple program.<br /><br />

        If you want to make a complex program, go to
        <NuxtLink :aria-label="allink" to="./contact2">
          Contact List 2
        </NuxtLink>
        page.
      </p>
    </div>

    <Header type="Python" num="Proj: 4" title="Contact List" />

    <div>
      <h2>Program Explanation</h2>
      <p>
        1. Ask mode (a: Add, r: Remove, p: Print All)<br /><br />
        a - Ask for friend name and add to list<br />
        r - Ask which friend to delete<br />
        p - Print every friend in list
      </p>
    </div>

    <QuadSpace />

    <div>
      <h2>Code explanation</h2>
      <div>
        1) Make a friends list<br /><br />
        <code v-highlight class="python">friends = []</code>
        2. Ask for mode<br /><br />
        <code v-highlight class="python"
          >mode = input("What do you want to do? (a: Add, r: Remove, p: Print
          All): ")</code
        >
        3. If for comparison: a, r, p<br /><br />
        <code v-highlight class="python">
          if mode == "a":<br />
          &nbsp;&nbsp;#Add<br />
          elif mode == "r":<br />
          &nbsp;&nbsp;Remove<br />
          else:<br />
          &nbsp;&nbsp;#Print All
        </code>
        4. Add friend <br /><br />
        <code v-highlight class="python"> friends.append( input("Friend Name: ") ) </code>
        5. Delete Friend<br /><br />
        <code v-highlight class="python">
          del friends[ int(input("Which friend? (number): ")) ]<br />
        </code>
        6. Print Every Friend<br /><br />
        <code v-highlight class="python"> print(*friends) </code>
      </div>
    </div>

    <Navigation bef="listmethod2" aft="dictionary" />
  </div>
</template>

`
