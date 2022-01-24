<template>
  <div>
    <br />

    <div style="display: flex" class="img-div">
      <div style="margin: auto;">
        <h1>What is statistics?</h1>
        <p>
          Statistics is an operation where you get information from datas.<br /><br />

          For example, when we get the average score of my English test[100, 99, 98, 95, 97], we are studying
          statistics.<br /><br />

          In Python, statistics module help us get mean, median, and mode easily.
        </p>
      </div>
      <div style="display: flex; justify-content: center;">
        <v-img
alt="python-factory-picture" class="img-fluid"
          src="https://ih1.redbubble.net/image.455632594.5388/flat,550x550,075,f.u2.jpg" width="300px" />
      </div>
    </div>

    <br /><br />

    <Header-en num="48" title="Math (Statistics)"></Header-en>

    <QuadSpace />

    <div>
      <div>
        <div>   <h1>Average</h1>
            <p>
              <h2>Calculate average your own way</h2>
              Average means the middle data from numbers.<br /><br />

              For example, the average of 100 and 50 is 75.<br /><br />

              We can calculate average like below<br /><br />

              <code>
                dataList = input().split(",")<br />
                print(sum(dataList)/len(dataList))
              </code>

              (This is because average is average is calculated by: sum of datas divided by number of data)<br /><br />

              <h2>mean()</h2>
              Using statistics module, we should be able to get the average from a list. Look at example
              below.<br /><br />

              Note that the method above is called 'mean' not 'average'.<br /><br />

              Mean and average means the same thing.<br /><br />

              <h2>harmonic_mean()</h2>

              harmonic_mean() is very similar to mean().<br /><br />

              harmonic_mean() basically flips the fraction upside down when there are even numbers of datas.

            </p>
        </div>
      </div>
        <iframe class="embed-responsive-item" src="https://trinket.io/embed/python3/b4ab6a9593" width="100%"
          height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen loading="lazy"
          style="margin: auto;"></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
              <h1>median</h1>
              <p>
                Average is the middle VALUE of datas.<br /><br />

                Median is the middle ITEM from list.<br /><br />

                Note that median will calculate the average of two middle number if there are odd numbers of data.
              </p>
      </div>
      <iframe
src="https://trinket.io/embed/python3/0a8bc90264" width="100%" height="356" frameborder="0"
        marginwidth="0" marginheight="0" allowfullscreen loading="lazy"
        style="margin: auto;"></iframe>
    </div>

    <QuadSpace />

    <div>
      <div>
              <h1>mode</h1>
              <p>
                Mode calculates the most item appearing in list.
              </p>
      </div>
    </div>
    <iframe
src="https://trinket.io/embed/python3/0a8bc90264" width="100%" height="356" frameborder="0"
      marginwidth="0" marginheight="0" allowfullscreen loading="lazy" style="margin: auto;"></iframe>

    <QuadSpace />

    <BeforeNextButton flink="classmethod" slink="file" />

    <QuadSpace />
  </div>
</template>

<script>
export default {
  page: 'MathPage',
}
</script>
