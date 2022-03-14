<template>
  <div>
    <br /><br />

    <div>
      <div class="mx-auto my-auto">
        <h2>What is PIP?</h2>
        <p>
          PIP is a program that handles files and modules.<br /><br />

          In Python compiler higher than 3.4 will automatically download PIP.
        </p>
      </div>
      <div class="mx-auto my-auto">
        <CIImage
          alt="python-factory-picture"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>

    <Header-en type="Python" num="56" title="PIP"></Header-en>


    <div>
      <div>
        <h2>Check whether PIP is installed</h2>
        <p>
          First, press 'windows+r'.<br /><br />

          A new window will pop up and type in 'cmd' and press enter.<br /><br />

          Next, type in 'pip --version' in the terminal.<br /><br />

          If a number appears, you have PIP in your computer!<br />
          If error occurs, let's download PIP right now!
        </p>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>How to install PIP</h2>
          <p>
            Back to first when we downloaded Python, open the download page
            again.<br /><br />

            Download Python again.<br /><br />

            Then, click on the 'MODIFY' button.<br /><br />

            Next, click the 'install pip' option and continue.<br /><br />

            Then, open the terminal like we did before (windows+r and type cmd),
            type in 'pip install pip'.
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>PIP install & uninstall</h2>
          <p>
            We can easily install any package in the world using PIP.<br /><br />

            Run the command 'pip install packagename' to install a specific
            pacakge(replace pacakgename with the name of the pacakge).<br /><br />

            <code> pip install camelcase </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <div>
      <div>
        <div>
          <h2>PIP show</h2>
          <p>
            The 'pip uninstall packagename' will uninstall the pacakge.<br /><br />

            <code> pip show pygame </code>
          </p>
        </div>
      </div>
    </div>

    <QuadSpace />

    <NaviBtn bef="stringascode" aft="json" />
  </div>
</template>

<script>
export default {
  page: 'PipPage',
};
</script>
