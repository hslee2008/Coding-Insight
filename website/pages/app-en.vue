<template>
  <div>
    <QuadSpace />

    <v-row flex justify="center" style="gap: 10px">
      <v-simple-table>
        <v-card class="mx-auto" max-width="240">
          <v-img
            src="data:image/png;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>Android App</v-card-title>

          <v-card-subtitle> APK 62.3MB (v2.0.1) </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" href="./Python_factory_App.apk" download
              >Download</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show1 = !show1">
              <v-icon>{{
                show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text
                >We used React-Native to publish our phone app to Galaxy Store.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-simple-table>
      <v-simple-table>
        <v-card class="mx-auto" max-width="290">
          <v-img
            src="data:image/png;base64,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"
            height="200px"
          ></v-img>

          <v-card-title>Optimized Android App</v-card-title>

          <v-card-subtitle> APK 16.4MB (v1.0.1) </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" href="./app-release.apk" download
              >DOWNLOAD</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
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
            src="https://responsivedesign.is/wp-content/uploads/2018/08/PWA-Progressive-Web-App-Logo.png"
            height="200px"
          ></v-img>

          <v-card-title>PWA</v-card-title>

          <v-card-subtitle> APK 2.77KB (v22.1.22) </v-card-subtitle>

          <v-card-actions>
            Browser DOWNLOAD

            <v-spacer></v-spacer>

            <v-btn icon @click="show4 = !show4">
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
            src="https://code.visualstudio.com/opengraphimg/opengraph-blog.png"
            height="200px"
          ></v-img>

          <v-card-title>VSCode Extension</v-card-title>

          <v-card-subtitle> v1.0.1 </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="primary"
              target="_blank"
              href="https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search"
              >DOWNLOAD</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn icon @click="show5 = !show5">
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

    <Header title="Phone App" num="Guide 1"></Header>

    <QuadSpace />

    <div style="display: flex; gap: 30px" class="img-div">
      <div>
        <h3>APK Download</h3>
        <p>
          click this button ->
          <v-btn color="primary" href="./Python_factory_App.apk" download
            >Download</v-btn
          ><br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/harm.jpg')"
          /><br /><br />

          Click the OK button<br /><br />

          If the installation started correctly, it will look similar like the
          following.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/detail.jpg')"
          /><br /><br />

          Soon, the file will be finished downloading.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/open.jpg')"
          /><br /><br />

          Click the OPEN button.<br /><br />

          If it looks like the following, click the SETTINGS button.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/ask.jpg')"
          /><br /><br />

          Click the "Allow from source" switch button<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/setting.jpg')"
          /><br /><br />

          Click the install button.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/install.jpg')"
          /><br /><br />

          Click "Instasll Anyway" button.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/playprotect.jpg')"
          /><br /><br />

          Click the "OPEN" button.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/installed.jpg')"
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
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/galaxystore.jpg')"
            width="300"
          /><br /><br />

          Click the install button.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/installgalaxystore.jpg')"
            width="300"
          /><br /><br />

          Click the run button.<br /><br />

          <v-img
            max-width="300px"
            alt="python-factory-picture"
            :src="require('./img/runapp.jpg')"
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
};
</script>
