<template>
  <div>
    <Header type="Python" num="41" title="모듈 마스터하기" />

    <div>
      <div>
        <h2>Making my own module</h2>
        Let's try making our own modules that has two functions which will
        calculate whether a number is odd or even.<br /><br />

        Our file name will be 'OEM'(Odd, Even Module).<br /><br />

        File OEM.py<br />
        <code>
          def isEven(num):<br />
          &nbsp;return num%2==0<br /><br />

          def isOdd(num):<br />
          &nbsp;return num%2==1
        </code>

        Now, let's make the main file named main and import functions from
        OEM.py.<br /><br />

        File main.py
        <code>
          from OEM import isEven<br /><br />

          print(isEven(3)) #False is printed
        </code>

        We made our own module!

        <h2>Using *</h2>

        However, there is a big problem.<br /><br />

        If we want to fetch all the variables and functions, we have to type in
        one by one.<br /><br />

        We can use '*'(asterik) to import every single thing.<br /><br />

        However, this method is not recommanded. Use import OEM instead.
      </div>

      <iframe :src="`${trinket}97e4d4f1d9`" height="356" loading="lazy" />
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Publishing</h2>
          <p>
            We can publish our own module to PyPi.<br /><br />

            If we publish our pacakge, everybody in the entire world can run the
            command `pip install` and download our code.<br /><br />

            To publish, simply run the following command:<br /><br />

            python filename.py register -r
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Module - __import__()</h2>
          <p>
            Similar to 'import' we can fetch modules using a function rather
            than a keyword.<br /><br />

            <code> os = __import__("os") </code>

            If you want to fetch your own file, type in the whole path of it.<br /><br />

            We will learn about whole path later in 'handling files' page.<br /><br />

            <code> myMod = __import__(r"C:\main.py") </code>

            To copy whole path, right click on file and click on 'Copy Path'.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>Module Limits</h2>
          <p>
            Everything is great about modules!<br /><br />

            However, we cannot use modules outside of the folder containing our
            module.
          </p>
        </div>
      </div>
    </div>

    <Navigation bef="module" aft="pythonmodule" />
  </div>
</template>

<script>
  export default {
    page: 'ModuleMasterPage',
  };
</script>
