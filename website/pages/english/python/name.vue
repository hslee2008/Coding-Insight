<template>
  <div>
    <div>
      <h2>What is __name__ variable?</h2>
      <p>
        The __name__ variable let's us know whether the specific code is running
        as a module or directly.<br /><br />

        We can also use __name__ for figuring out the module name.
      </p>
    </div>
    <div class="tex-center">
      <GlobalImage
        max-width="500px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAAB9CAMAAABUDq4oAAAA5FBMVEUzMzMoKzIqLTIoKCiIdDuUfj2hn5+Uk5MvMDMwMzEiNCcyMzIwMDAsLCwuLzPDHKa4H51QLUkrNC0jIyMoNCsjKDJnWzighz5mZWW2tLS0l0GNeDxiVjchJjI5ODS0srJeXV1FRETJx8dTUlJ6KGucHodFQTUeHx/hukdKRTUYITHSr0V7enrc2dmmjD9SSjZ7ajrAoEKKiIiopqZoK1xfLVWuH5U8MTpJSEiJJneXJYJvKmJQSTaEJHN2J2gYNCEANgzQGLDjEsD59vb1y0oVFhYCBQVEMEBZLlDU0tJxYjm5m0HMzHjDAAAEZ0lEQVR4nO3YfVeiShwH8AE0UWZoE3kUUaEwNU2lVbNubvdud7f1/b+fOzzY7h7FtD+2PPf7OR78BYwYX2YGJAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/ThAObCDvt9fBn/th1GrrSqnWatU/fXjBNMPDWvTdfTIJTfNII6lNp1kk5fLtxeKu/IeP3+hfhvtd9WvF+z32l7uX/cYbv9I7q97epv1CmT3+dXf+kJ8I7UiSpklJyQuNEsI6vGD8la2T6MHH11d9ZfsWuSHouiroIq/5W/LO+5TeU5OtuiCu123j9R09rdRG/l4fULWyrCSFUjmbflku80ct2n4+Kfl+iZ99GkS23wwouxqUfNuyfYsRyYp8+8Q7OBJ9ON5+wuTrft1xXHM1UolsmI5T9Eg8yK3G8aglh+M631xQ8z5X7Gejlmr060cUSfXh9HERj1rK7NPj36en01nOBcux1j+Tdrs5YTyRqzZp+YRqtk1KAyvwNWY1W6Q9sUluJNVKqkpqWZV0R7E+zBnvxcK4a/RHxOnKsuF6XqGYnFi5bsQxqO7lyAuHo7xIdKeQdari1/FRzSizu4tkHlHkmymd7QiE0Jb/RFmrqREikXlA7DbVmnPJOulIfkezW0EQzKMrltO6en6aOq9dZNVZEomXN7GLBUMIhw3dvJaJ7nXDbhqdkCYiu8MejyV/+g69rPBG3cMmqndWvUkTIdXP04qyIxCeCA+DtiKJSBPftqNBnEjArBOJ8UQGdsLKS4TfOGSUl2r3NxMLP8RwKAg8EdlcDYfDdGIQ14nwMGS3uMflrx5VID8TKfNEdu75kgi17I6m/Wv/mkjnmfB1WkfKPc7Dp9RDbZFVZ7sj+ZmIUC/0dN1L+8jBiai9oxq0DkiEBc0OX0QdNik9SZ3WgN99RXNmlTTmP7GJLWlS56qVN48os7PUrPwtq175ZkLBEEOzIZj3uuny+67Cqhc/+PUKrs5PsXptNviiqL/2D6qjS/OIZnalVvl8sayV43ut79PlrgdEGtiDK+ZFA4tRuxk1m35zbg2amvXckp5LjI9kUWTzfpN7qPWg9VLt/mr8bsoJw/GPxtD07lem6RTHdZn3jOLY4Q+V8r3TN1TPfP1xUax/XR1PIoq8WEwfF4ubsvLtNi7Os9PEpE1tywooiReUtqxAC6z23LKoZ81pYFESb59LlG42zJ1afiFs8lzXI+612nU9ldeh6Lr8wc9wOcMjoevey3x1V93S9PfPvva2H/NDks8T38vKLClu0kTY5GRDSWKMdwAaLwgPhVfpH3GZraPxo8pGy8nrkajFTYYYP3fI8St5XxextIgXqrGl6e994sgm9kQ8aq2LGJ8pNuxxXjk6f1NLuV7YsNfPV3xy32x5TE+E+9oyau0VSPxjyptaipv2vLTlLU33awkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+o/2U9rJu5E+X0AAAAASUVORK5CYII="
      />
    </div>

    <Header type="Python" num="72" title="__name__" />

    <div>
      <div>
        <h2>__name__ == __main__</h2>
        <p>
          Let's look at the following examples.<br /><br />

          <iframe :src="`${trinket}c6d50081cf`" height="356" loading="lazy" />

          <br /><br />If we run the code inside file2.py, "Hi" is printed
          twice.<br /><br />

          Let's try changing the contents inside file1.py.<br /><br />

          <iframe :src="`${trinket}b01563dd19`" height="356" loading="lazy" />

          <br /><br />Know, if we run the code inside file2.py, the only thing
          we get is one "Hi" instead of two.
        </p>
      </div>
    </div>

    <Navigation bef="asyncio" aft="thread" />
  </div>
</template>
