<template>
  <div>
    <div>
      <div class="ma-auto">
        <h2>What is statistics?</h2>
        <p>
          Statistics is an operation where you get information from datas.<br /><br />

          For example, when we get the average score of my English test[100, 99,
          98, 95, 97], we are studying statistics.<br /><br />

          In Python, statistics module help us get mean, median, and mode
          easily.
        </p>
      </div>
      <div style="display: flex; justify-content: center">
        <GlobalImage
          src="https://ih1.redbubble.net/image.455632594.5388/flat,550x550,075,f.u2.jpg"
          width="300px"
        />
      </div>
    </div>

    <Header type="Python" num="48" title="Math (Statistics)" />

    <div>
      <div>
        <div>
          <h2>Average</h2>

          <h2>Calculate average your own way</h2>
          Average means the middle data from numbers.<br /><br />

          For example, the average of 100 and 50 is 75.<br /><br />

          We can calculate average like below<br /><br />

          <code v-highlight class="python">
            dataList = input().split(",")<br />
            print(sum(dataList)/len(dataList))
          </code>

          (This is because average is average is calculated by: sum of datas
          divided by number of data)<br /><br />

          <h2>mean()</h2>
          Using statistics module, we should be able to get the average from a
          list. Look at example below.<br /><br />

          Note that the method above is called 'mean' not 'average'.<br /><br />

          Mean and average means the same thing.<br /><br />

          <h2>harmonic_mean()</h2>

          harmonic_mean() is very similar to mean().<br /><br />

          harmonic_mean() basically flips the fraction upside down when there
          are even numbers of datas.
        </div>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}b4ab6a9593`"
        height="356"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>median</h2>
        <p>
          Average is the middle VALUE of datas.<br /><br />

          Median is the middle ITEM from list.<br /><br />

          Note that median will calculate the average of two middle number if
          there are odd numbers of data.
        </p>
      </div>
      <iframe
        title="Trinket Python"
        :src="`${trinket}0a8bc90264`"
        height="356"
      />
    </div>

    <QuadSpace />

    <div>
      <div>
        <h2>mode</h2>
        <p>Mode calculates the most item appearing in list.</p>
      </div>
    </div>
    <iframe
      title="Trinket Python"
      :src="`${trinket}0a8bc90264`"
      height="356"
      loading="lazy"
    />

    <Navigation bef="classmethod" aft="file" />
  </div>
</template>

<script>
  export default {
    page: 'MathPage',
  };
</script>
