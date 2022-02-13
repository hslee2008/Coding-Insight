<template>
  <div>
    <NuxtLink
      aria-label="BeforeButton"
      :to="!bef.startsWith('/') ? './' + bef : bef"
      style="text-decoration: none; float: left"
    >
      <v-btn class="ma-2" outlined ripple>
        <v-icon left> mdi-arrow-left-circle-outline </v-icon>Back
      </v-btn>
    </NuxtLink>

    <v-row style="float: right">
      <v-switch
        v-model="switch1"
        inset
        :label="switch1 ? '끝남으로 표시' : '나중에 다시 보기'"
        style="margin: 10px"
      ></v-switch>
      <v-btn class="ma-2" outlined ripple @click="next">
        Next<v-icon right> mdi-arrow-right-circle-outline </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import 'firebase/auth';

export default {
  name: 'NaviBtn',
  props: ['bef', 'aft'],
  methods: {
    async next() {
      this.$router.push('/' + this.$route.path.split("/").slice(1, 3).join("/") + "/" + this.aft);

      let route = this.$route.path.split('/').slice(1, 3);

      this.obj[route[0] + route[1]][
        route[0] + '-' + route[1] + '-' + this.aft
      ] = true;
    },
  },
  data() {
    return {
      switch1: true,
      obj: {
        koreanpython: {
          'korean-python-index': false,
          'korean-python-install': false,
          'korean-python-vscode': false,
          'korean-python-io': false,
          'korean-python-variable': false,
          'korean-python-madlib': false,
          'korean-python-datatype': false,
          'korean-python-comment': false,
          'korean-python-string': false,
          'korean-python-stringmethod1': false,
          'korean-python-stringmethod2': false,
          'korean-python-password': false,
          'korean-python-escapechar': false,

          'korean-python-ascii': false,
          'korean-python-boolean': false,
          'korean-python-number': false,
          'korean-python-operator': false,
          'korean-python-numtype': false,
          'korean-python-calc': false,
          'korean-python-nummethod': false,
          'korean-python-list': false,
          'korean-python-listmethod1': false,
          'korean-python-listmethod2': false,
          'korean-python-contact': false,

          'korean-python-dictionary': false,
          'korean-python-dictionarymethod': false,
          'korean-python-zipping': false,
          'korean-python-tuple': false,
          'korean-python-set': false,
          'korean-python-setmethod': false,
          'korean-python-if': false,
          'korean-python-ifmaster': false,
          'korean-python-password-safe': false,
          'korean-python-none': false,
          'korean-python-function': false,
          'korean-python-functionhard': false,
          'korean-python-specialvariable': false,

          'korean-python-type': false,
          'korean-python-anonymousfunction': false,
          'korean-python-for': false,
          'korean-python-fortype': false,
          'korean-python-forfunction': false,
          'korean-python-while': false,
          'korean-python-oneliner': false,
          'korean-python-etcfunction': false,
          'korean-python-module': false,
          'korean-python-modulemaster': false,
          'korean-python-pythonmodule': false,
          'korean-python-hacking': false,
          'korean-python-date': false,
          'korean-python-random': false,
          'korean-python-dice': false,
          'korean-python-regex': false,

          'korean-python-class': false,
          'korean-python-classmethod': false,
          'korean-python-math': false,
          'korean-python-file': false,
          'korean-python-filereading': false,
          'korean-python-filewriting': false,
          'korean-python-etcfile': false,
          'korean-python-contextmanager': false,
          'korean-python-contact2': false,
          'korean-python-datachange': false,
          'korean-python-stringascode': false,
          'korean-python-stringascode-#idlepython': false,
          'korean-python-pip': false,

          'korean-python-json': false,
          'korean-python-array': false,
          'korean-python-array_type': false,
          'korean-python-array_shape': false,
          'korean-python-error': false,
          'korean-python-error2': false,
          'korean-python-logging': false,
          'korean-python-mapandreduceandfilter': false,
          'korean-python-zlib': false,
          'korean-python-decorator': false,
          'korean-python-mydecorator': false,
          'korean-python-pythondecorator': false,

          'korean-python-newline': false,
          'korean-python-asynchronous': false,
          'korean-python-asyncio': false,
          'korean-python-name': false,
          'korean-python-thread': false,
          'korean-python-complexthread': false,
          'korean-python-threadmethod': false,
          'korean-python-multiprocessing': false,
          'korean-python-counter': false,
          'korean-python-request': false,
          'korean-python-requestmethod': false,
          'korean-python-dundermethod': false,
          'korean-python-additionaldundermethod': false,
          'korean-python-etcdundermethod': false,
          'korean-python-atexit': false,
          'korean-python-coroutine': false,

          'korean-python-spam': false,
          'korean-python-autozoom': false,
          'korean-python-keyboard': false,
          'korean-python-matplotlib': false,
          'korean-python-mouse': false,
          'korean-python-turtle': false,
          'korean-python-pandas': false,
          'korean-python-gtts': false,

          'korean-python-video': false,
          'korean-python-finished': false,
        },

        englishpython: {
          'korean-python-quiz': false,
          'english-python-index': false,
          'english-python-install': false,
          'english-python-vscode': false,
          'english-python-io': false,
          'english-python-variable': false,
          'english-python-madlib': false,
          'english-python-datatype': false,
          'english-python-comment': false,
          'english-python-string': false,
          'english-python-stringmethod1': false,
          'english-python-stringmethod2': false,
          'english-python-password': false,
          'english-python-escapechar': false,

          'english-python-ascii': false,
          'english-python-boolean': false,
          'english-python-number': false,
          'english-python-operator': false,
          'english-python-numtype': false,
          'english-python-calc': false,
          'english-python-nummethod': false,
          'english-python-list': false,
          'english-python-listmethod1': false,
          'english-python-listmethod2': false,
          'english-python-contact': false,

          'english-python-dictionary': false,
          'english-python-dictionarymethod': false,
          'english-python-zipping': false,
          'english-python-tuple': false,
          'english-python-set': false,
          'english-python-setmethod': false,
          'english-python-if': false,
          'english-python-ifmaster': false,
          'english-python-password-safe': false,
          'english-python-none': false,
          'english-python-function': false,
          'english-python-functionhard': false,
          'english-python-specialvariable': false,

          'english-python-type': false,
          'english-python-anonymousfunction': false,
          'english-python-for': false,
          'english-python-fortype': false,
          'english-python-forfunction': false,
          'english-python-while': false,
          'english-python-oneliner': false,
          'english-python-etcfunction': false,
          'english-python-module': false,
          'english-python-modulemaster': false,
          'english-python-pythonmodule': false,
          'korean/python-hacking': false,
          'english-python-date': false,
          'english-python-random': false,
          'english-python-dice': false,
          'english-python-regex': false,

          'english-python-class': false,
          'english-python-classmethod': false,
          'english-python-math': false,
          'english-python-file': false,
          'english-python-filereading': false,
          'english-python-filewriting': false,
          'english-python-etcfile': false,
          'english-python-contextmanager': false,
          'english-python-contact2': false,
          'korean-python-datachange': false,
          'english-python-stringascode': false,
          'english-python-stringascode/#idlepython': false,
          'english-python-pip': false,

          'english-python-json': false,
          'english-python-array': false,
          'english-python-array_type': false,
          'english-python-array_shape': false,
          'english-python-error': false,
          'english-python-error2': false,
          'english-python-logging': false,
          'english-python-mapandreduceandfilter': false,
          'english-python-zlib': false,
          'english-python-decorator': false,
          'english-python-mydecorator': false,
          'english-python-pythondecorator': false,

          'english-python-newline': false,
          'english-python-asynchronous': false,
          'english-python-asyncio': false,
          'english-python-name': false,
          'english-python-thread': false,
          'english-python-complexthread': false,
          'english-python-threadmethod': false,
          'english-python-multiprocessing': false,
          'english-python-counter': false,
          'english-python-request': false,
          'english-python-requestmethod': false,
          'english-python-dundermethod': false,
          'english-python-additionaldundermethod': false,
          'english-python-etcdundermethod': false,
          'english-python-atexit': false,
          'english-python-coroutine': false,

          'english-python-spam': false,
          'english-python-autozoom': false,
          'english-python-keyboard': false,
          'english-python-matplotlib': false,
          'english-python-mouse': false,
          'english-python-turtle': false,
          'english-python-pandas': false,
          'english-python-gtts': false,

          'english-python-quiz': false,
          'english-python-finished': false,
        },
        'koreanc-cpp': {
          'korean-c-cpp-index': false,
          'korean-c-cpp-install': false,
          'korean-c-cpp-vscode': false,
          'korean-c-cpp-print': false,
          'korean-c-cpp-variable': false,
          'korean-c-cpp-input': false,
          'korean-c-cpp-basicdatatype': false,
          'korean-c-cpp-otherdatatype': false,
          'korean-c-cpp-typecasting': false,
          'korean-c-cpp-operator': false,
          'korean-c-cpp-comment': false,
          'korean-c-cpp-grammar': false,
          'korean-c-cpp-escapecharacter': false,

          'korean-c-cpp-if': false,
          'korean-python-ifmaster': false,
          'korean-python-for': false,
          'korean-c-cpp-while': false,
          'korean-c-cpp-while': false,
          'korean-c-cpp-dowhile': false,
          'korean-c-cpp-inffor': false,
          'korean-c-cpp-string': false,
          'korean-c-cpp-stringlibrary': false,
          'korean-c-cpp-2darr': false,
          'korean-c-cpp-function': false,
          'korean-c-cpp-mainfunction': false,
          'korean-c-cpp-storageclass': false,
          'korean-c-cpp-typedef': false,

          'korean-c-cpp-pointer': false,
          'korean-c-cpp-usingpointer': false,
          'korean-c-cpp-union': false,
          'korean-c-cpp-void': false,
          'korean-c-cpp-void': false,
          'korean-c-cpp-macro': false,
          'korean-c-cpp-otherif': false,
          'korean-c-cpp-error': false,
          'korean-c-cpp-arrow': false,
          'korean-c-cpp-random': false,
          'korean-c-cpp-ctype': false,
          'korean-c-cpp-stopprogram': false,
          'korean-c-cpp-math': false,

          'korean-c-cpp-file': false,
          'korean-c-cpp-readfile': false,
          'korean-c-cpp-writefile': false,
          'korean-c-cpp-deletefile': false,

          'korean-c-cpp-cpp': false,
          'korean-c-cpp-io-cpp': false,
          'korean-c-cpp-string-cpp': false,
          'korean-c-cpp-vectorbasic': false,
          'korean-c-cpp-vectormethod': false,
          'korean-c-cpp-stack': false,
          'korean-c-cpp-allheader': false,
          'korean-c-cpp-errorhandling': false,
          'korean-c-cpp-namespace': false,
          'korean-c-cpp-endl': false,

          'korean-c-cpp-class': false,
          'korean-c-cpp-classmethod': false,
          'korean-c-cpp-constructor': false,
          'korean-c-cpp-accessspecifier': false,
          'korean-c-cpp-inheritance': false,
        },
        koreanrust: {
          'korean-rust-index': false,

          'korean-rust-install': false,

          'korean-rust-setup': false,

          'korean-rust-print': false,

          'korean-rust-printfmt': false,

          'korean-rust-comment': false,

          'korean-rust-variable': false,

          'korean-rust-mutable': false,

          'korean-rust-identifier': false,

          'korean-rust-scopeshadowing': false,

          'korean-rust-datatypes': false,

          'korean-rust-numeric-int': false,
        },
      },
    };
  },
};
</script>
