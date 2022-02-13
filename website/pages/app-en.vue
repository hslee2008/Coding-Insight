<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" style="gap: 10px">
      <v-simple-table>
        <v-card class="mx-auto" max-width="290">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            src="data:image/png;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>Android App</v-card-title>

          <v-card-subtitle> APK 16.5MB (v2.0.1) </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="primary"
              href="/app-release.apk"
              download
              >DOWNLOAD</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn
              aria-label="Coding Insight Button"
              icon
              @click="show2 = !show2"
            >
              <v-icon>{{
                show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text
                >Using Flutter made our Phone App much more faster and
                optimized. There are some problems with our app, though.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="230">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            src="https://responsivedesign.is/wp-content/uploads/2018/08/PWA-Progressive-Web-App-Logo.png"
            height="200px"
          ></v-img>

          <v-card-title>PWA</v-card-title>

          <v-card-subtitle> APK 2.77KB (v22.1.22) </v-card-subtitle>

          <v-card-actions>
            Browser DOWNLOAD

            <v-spacer></v-spacer>

            <v-btn
              aria-label="Coding Insight Button"
              icon
              @click="show4 = !show4"
            >
              <v-icon>{{
                show4 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>

              <v-card-text
                >Just click the 'Add to homescreen' button.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="205">
          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            src="https://code.visualstudio.com/opengraphimg/opengraph-blog.png"
            height="200px"
          ></v-img>

          <v-card-title>VSCode Extension</v-card-title>

          <v-card-subtitle> v1.0.1 </v-card-subtitle>

          <v-card-actions>
            <v-btn
              aria-label="Coding Insight Button"
              color="primary"
              target="_blank"
              href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
              >DOWNLOAD</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn
              aria-label="Coding Insight Button"
              icon
              @click="show5 = !show5"
            >
              <v-icon>{{
                show5 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show5">
              <v-divider></v-divider>

              <v-card-text>Learn from Coding-Insight from VSCode.</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
    </v-row>

    <QuadSpace />

    <Header title="Phone App" num="Guide 1" />

    <QuadSpace />

    <div style="display: flex; gap: 30px" class="img-div">
      <div>
        <h3>APK Download</h3>
        <p>
          click this button ->
          <v-btn
            aria-label="Coding Insight Button"
            color="primary"
            href="/app-release.apk"
            download
            >Download</v-btn
          ><br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/harm.jpg"
          /><br /><br />

          Click the OK button<br /><br />

          If the installation started correctly, it will look similar like the
          following.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/detail.jpg"
          /><br /><br />

          Soon, the file will be finished downloading.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/open.jpg"
          /><br /><br />

          Click the OPEN button.<br /><br />

          If it looks like the following, click the SETTINGS button.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/ask.jpg"
          /><br /><br />

          Click the "Allow from source" switch button<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/setting.jpg"
          /><br /><br />

          Click the install button.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/install.jpg"
          /><br /><br />

          Click "Instasll Anyway" button.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/playprotect.jpg"
          /><br /><br />

          Click the "OPEN" button.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/installed.jpg"
          />
        </p>
      </div>
      <div>
        <h3>Galaxy Store</h3>
        <p>
          Search for "Python Factory App"<br /><br />

          Or go to
          <a
            href="https://galaxy.store/pyfact"
            target="_blank"
            style="color: dodgerblue"
          >
            Galaxy Store </a
          ><br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/galaxystore.jpg"
            width="300"
          /><br /><br />

          Click the install button.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/installgalaxystore.jpg"
            width="300"
          /><br /><br />

          Click the run button.<br /><br />

          <v-img
            lazy-src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"
            max-width="300px"
            alt="python-factory-picture"
            src="https://image-loader-coding-insight.web.app/img/runapp.jpg"
            width="300"
          />
        </p>
      </div>
    </div>

    <QuadSpace />
  </div>
</template>

<script>
export default {
  name: 'AppPage',
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
    };
  },
  head: () => ({
    title: 'App',
  }),
};
</script>
