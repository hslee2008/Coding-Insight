import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23a294c0 = () => interopDefault(import('..\\pages\\additionaldundermethod.vue' /* webpackChunkName: "pages/additionaldundermethod" */))
const _5ae9e95e = () => interopDefault(import('..\\pages\\anonymousfunction.vue' /* webpackChunkName: "pages/anonymousfunction" */))
const _e2601336 = () => interopDefault(import('..\\pages\\array.vue' /* webpackChunkName: "pages/array" */))
const _795a8b72 = () => interopDefault(import('..\\pages\\array_shape.vue' /* webpackChunkName: "pages/array_shape" */))
const _4c6e5a84 = () => interopDefault(import('..\\pages\\array_type.vue' /* webpackChunkName: "pages/array_type" */))
const _2c0e1146 = () => interopDefault(import('..\\pages\\ascii.vue' /* webpackChunkName: "pages/ascii" */))
const _3ba5eb2e = () => interopDefault(import('..\\pages\\asyncio.vue' /* webpackChunkName: "pages/asyncio" */))
const _53382316 = () => interopDefault(import('..\\pages\\atexit.vue' /* webpackChunkName: "pages/atexit" */))
const _70a4cdb4 = () => interopDefault(import('..\\pages\\autozoom.vue' /* webpackChunkName: "pages/autozoom" */))
const _1fc8a49c = () => interopDefault(import('..\\pages\\beedongee.vue' /* webpackChunkName: "pages/beedongee" */))
const _7de47898 = () => interopDefault(import('..\\pages\\boolean.vue' /* webpackChunkName: "pages/boolean" */))
const _3e8fc5f9 = () => interopDefault(import('..\\pages\\calc.vue' /* webpackChunkName: "pages/calc" */))
const _39aaf3f8 = () => interopDefault(import('..\\pages\\class.vue' /* webpackChunkName: "pages/class" */))
const _1cbc8536 = () => interopDefault(import('..\\pages\\classmethod.vue' /* webpackChunkName: "pages/classmethod" */))
const _a8635b2a = () => interopDefault(import('..\\pages\\comment.vue' /* webpackChunkName: "pages/comment" */))
const _51d76646 = () => interopDefault(import('..\\pages\\complexthread.vue' /* webpackChunkName: "pages/complexthread" */))
const _2bd5a742 = () => interopDefault(import('..\\pages\\contextmanager.vue' /* webpackChunkName: "pages/contextmanager" */))
const _c7445538 = () => interopDefault(import('..\\pages\\coroutine.vue' /* webpackChunkName: "pages/coroutine" */))
const _804eb8f0 = () => interopDefault(import('..\\pages\\counter.vue' /* webpackChunkName: "pages/counter" */))
const _57d943fe = () => interopDefault(import('..\\pages\\datachange.vue' /* webpackChunkName: "pages/datachange" */))
const _77bc3ff0 = () => interopDefault(import('..\\pages\\datatype.vue' /* webpackChunkName: "pages/datatype" */))
const _9798325c = () => interopDefault(import('..\\pages\\date.vue' /* webpackChunkName: "pages/date" */))
const _5a56e147 = () => interopDefault(import('..\\pages\\decorator.vue' /* webpackChunkName: "pages/decorator" */))
const _6f584a8c = () => interopDefault(import('..\\pages\\dictionary.vue' /* webpackChunkName: "pages/dictionary" */))
const _89ab9cca = () => interopDefault(import('..\\pages\\dictionarymethod.vue' /* webpackChunkName: "pages/dictionarymethod" */))
const _87442b0e = () => interopDefault(import('..\\pages\\dundermethod.vue' /* webpackChunkName: "pages/dundermethod" */))
const _113a32d8 = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages/error" */))
const _15dcd564 = () => interopDefault(import('..\\pages\\error2.vue' /* webpackChunkName: "pages/error2" */))
const _a033e60a = () => interopDefault(import('..\\pages\\escapechar.vue' /* webpackChunkName: "pages/escapechar" */))
const _0e73dd16 = () => interopDefault(import('..\\pages\\etcdundermethod.vue' /* webpackChunkName: "pages/etcdundermethod" */))
const _6ee38ec8 = () => interopDefault(import('..\\pages\\etcfile.vue' /* webpackChunkName: "pages/etcfile" */))
const _5844a4f8 = () => interopDefault(import('..\\pages\\etcfunction.vue' /* webpackChunkName: "pages/etcfunction" */))
const _1d8155a0 = () => interopDefault(import('..\\pages\\file.vue' /* webpackChunkName: "pages/file" */))
const _5a8bbf1c = () => interopDefault(import('..\\pages\\filereading.vue' /* webpackChunkName: "pages/filereading" */))
const _6a177d28 = () => interopDefault(import('..\\pages\\filewriting.vue' /* webpackChunkName: "pages/filewriting" */))
const _65170f96 = () => interopDefault(import('..\\pages\\finished.vue' /* webpackChunkName: "pages/finished" */))
const _032b45d5 = () => interopDefault(import('..\\pages\\for.vue' /* webpackChunkName: "pages/for" */))
const _427880ad = () => interopDefault(import('..\\pages\\forfunction.vue' /* webpackChunkName: "pages/forfunction" */))
const _4b8dc18f = () => interopDefault(import('..\\pages\\fortype.vue' /* webpackChunkName: "pages/fortype" */))
const _d6ccc008 = () => interopDefault(import('..\\pages\\function.vue' /* webpackChunkName: "pages/function" */))
const _c8c6bd32 = () => interopDefault(import('..\\pages\\functionhard.vue' /* webpackChunkName: "pages/functionhard" */))
const _4c99c760 = () => interopDefault(import('..\\pages\\gtts.vue' /* webpackChunkName: "pages/gtts" */))
const _152027c1 = () => interopDefault(import('..\\pages\\if.vue' /* webpackChunkName: "pages/if" */))
const _babde33a = () => interopDefault(import('..\\pages\\ifmaster.vue' /* webpackChunkName: "pages/ifmaster" */))
const _a39ee8b2 = () => interopDefault(import('..\\pages\\install.vue' /* webpackChunkName: "pages/install" */))
const _159efb4a = () => interopDefault(import('..\\pages\\io.vue' /* webpackChunkName: "pages/io" */))
const _58bc91e8 = () => interopDefault(import('..\\pages\\json.vue' /* webpackChunkName: "pages/json" */))
const _a4b7feea = () => interopDefault(import('..\\pages\\keyboard.vue' /* webpackChunkName: "pages/keyboard" */))
const _cce4a07c = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _502b859e = () => interopDefault(import('..\\pages\\listmethod1.vue' /* webpackChunkName: "pages/listmethod1" */))
const _50399d1f = () => interopDefault(import('..\\pages\\listmethod2.vue' /* webpackChunkName: "pages/listmethod2" */))
const _5c4ea12a = () => interopDefault(import('..\\pages\\logging.vue' /* webpackChunkName: "pages/logging" */))
const _651763d9 = () => interopDefault(import('..\\pages\\madlib.vue' /* webpackChunkName: "pages/madlib" */))
const _1e7ffacc = () => interopDefault(import('..\\pages\\mapandreduceandfilter.vue' /* webpackChunkName: "pages/mapandreduceandfilter" */))
const _5b48c12c = () => interopDefault(import('..\\pages\\math.vue' /* webpackChunkName: "pages/math" */))
const _14adc070 = () => interopDefault(import('..\\pages\\matplotlib.vue' /* webpackChunkName: "pages/matplotlib" */))
const _62365b90 = () => interopDefault(import('..\\pages\\module.vue' /* webpackChunkName: "pages/module" */))
const _29a22a1c = () => interopDefault(import('..\\pages\\modulemaster.vue' /* webpackChunkName: "pages/modulemaster" */))
const _06b1bab1 = () => interopDefault(import('..\\pages\\mouse.vue' /* webpackChunkName: "pages/mouse" */))
const _ea54bad0 = () => interopDefault(import('..\\pages\\multiprocessing.vue' /* webpackChunkName: "pages/multiprocessing" */))
const _33e43e1b = () => interopDefault(import('..\\pages\\mydecorator.vue' /* webpackChunkName: "pages/mydecorator" */))
const _91e489a2 = () => interopDefault(import('..\\pages\\name.vue' /* webpackChunkName: "pages/name" */))
const _875769c0 = () => interopDefault(import('..\\pages\\newline.vue' /* webpackChunkName: "pages/newline" */))
const _c54c5d48 = () => interopDefault(import('..\\pages\\none.vue' /* webpackChunkName: "pages/none" */))
const _7eb3d9ed = () => interopDefault(import('..\\pages\\number.vue' /* webpackChunkName: "pages/number" */))
const _7ccf9a1a = () => interopDefault(import('..\\pages\\nummethod.vue' /* webpackChunkName: "pages/nummethod" */))
const _71d45968 = () => interopDefault(import('..\\pages\\numtype.vue' /* webpackChunkName: "pages/numtype" */))
const _2f36c708 = () => interopDefault(import('..\\pages\\oneliner.vue' /* webpackChunkName: "pages/oneliner" */))
const _c995e270 = () => interopDefault(import('..\\pages\\operator.vue' /* webpackChunkName: "pages/operator" */))
const _c6532f06 = () => interopDefault(import('..\\pages\\pandas.vue' /* webpackChunkName: "pages/pandas" */))
const _09d053a3 = () => interopDefault(import('..\\pages\\pip.vue' /* webpackChunkName: "pages/pip" */))
const _2e47a22a = () => interopDefault(import('..\\pages\\pythondecorator.vue' /* webpackChunkName: "pages/pythondecorator" */))
const _a70edf28 = () => interopDefault(import('..\\pages\\pythonmodule.vue' /* webpackChunkName: "pages/pythonmodule" */))
const _0b026df9 = () => interopDefault(import('..\\pages\\quiz.vue' /* webpackChunkName: "pages/quiz" */))
const _c60ed332 = () => interopDefault(import('..\\pages\\random.vue' /* webpackChunkName: "pages/random" */))
const _3c66655a = () => interopDefault(import('..\\pages\\regex.vue' /* webpackChunkName: "pages/regex" */))
const _72f9be9b = () => interopDefault(import('..\\pages\\request.vue' /* webpackChunkName: "pages/request" */))
const _8a182e88 = () => interopDefault(import('..\\pages\\requestmethod.vue' /* webpackChunkName: "pages/requestmethod" */))
const _bc2ffe24 = () => interopDefault(import('..\\pages\\set.vue' /* webpackChunkName: "pages/set" */))
const _014de0cf = () => interopDefault(import('..\\pages\\setmethod.vue' /* webpackChunkName: "pages/setmethod" */))
const _7830ae26 = () => interopDefault(import('..\\pages\\spam.vue' /* webpackChunkName: "pages/spam" */))
const _690e9f41 = () => interopDefault(import('..\\pages\\specialvariable.vue' /* webpackChunkName: "pages/specialvariable" */))
const _3850bab5 = () => interopDefault(import('..\\pages\\string.vue' /* webpackChunkName: "pages/string" */))
const _6925cad8 = () => interopDefault(import('..\\pages\\stringascode.vue' /* webpackChunkName: "pages/stringascode" */))
const _f2f2596a = () => interopDefault(import('..\\pages\\stringmethod1.vue' /* webpackChunkName: "pages/stringmethod1" */))
const _f2d62a68 = () => interopDefault(import('..\\pages\\stringmethod2.vue' /* webpackChunkName: "pages/stringmethod2" */))
const _4f72c42e = () => interopDefault(import('..\\pages\\thread.vue' /* webpackChunkName: "pages/thread" */))
const _7809340f = () => interopDefault(import('..\\pages\\threadmethod.vue' /* webpackChunkName: "pages/threadmethod" */))
const _6f66bc54 = () => interopDefault(import('..\\pages\\tuple.vue' /* webpackChunkName: "pages/tuple" */))
const _033d4660 = () => interopDefault(import('..\\pages\\turtle.vue' /* webpackChunkName: "pages/turtle" */))
const _2108e05e = () => interopDefault(import('..\\pages\\type.vue' /* webpackChunkName: "pages/type" */))
const _ea11e6c0 = () => interopDefault(import('..\\pages\\variable.vue' /* webpackChunkName: "pages/variable" */))
const _3331b787 = () => interopDefault(import('..\\pages\\video.vue' /* webpackChunkName: "pages/video" */))
const _d2208764 = () => interopDefault(import('..\\pages\\vscode.vue' /* webpackChunkName: "pages/vscode" */))
const _7379233d = () => interopDefault(import('..\\pages\\while.vue' /* webpackChunkName: "pages/while" */))
const _56fa8f22 = () => interopDefault(import('..\\pages\\zlib.vue' /* webpackChunkName: "pages/zlib" */))
const _98c66f44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/python/korean/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/additionaldundermethod",
    component: _23a294c0,
    name: "additionaldundermethod"
  }, {
    path: "/anonymousfunction",
    component: _5ae9e95e,
    name: "anonymousfunction"
  }, {
    path: "/array",
    component: _e2601336,
    name: "array"
  }, {
    path: "/array_shape",
    component: _795a8b72,
    name: "array_shape"
  }, {
    path: "/array_type",
    component: _4c6e5a84,
    name: "array_type"
  }, {
    path: "/ascii",
    component: _2c0e1146,
    name: "ascii"
  }, {
    path: "/asyncio",
    component: _3ba5eb2e,
    name: "asyncio"
  }, {
    path: "/atexit",
    component: _53382316,
    name: "atexit"
  }, {
    path: "/autozoom",
    component: _70a4cdb4,
    name: "autozoom"
  }, {
    path: "/beedongee",
    component: _1fc8a49c,
    name: "beedongee"
  }, {
    path: "/boolean",
    component: _7de47898,
    name: "boolean"
  }, {
    path: "/calc",
    component: _3e8fc5f9,
    name: "calc"
  }, {
    path: "/class",
    component: _39aaf3f8,
    name: "class"
  }, {
    path: "/classmethod",
    component: _1cbc8536,
    name: "classmethod"
  }, {
    path: "/comment",
    component: _a8635b2a,
    name: "comment"
  }, {
    path: "/complexthread",
    component: _51d76646,
    name: "complexthread"
  }, {
    path: "/contextmanager",
    component: _2bd5a742,
    name: "contextmanager"
  }, {
    path: "/coroutine",
    component: _c7445538,
    name: "coroutine"
  }, {
    path: "/counter",
    component: _804eb8f0,
    name: "counter"
  }, {
    path: "/datachange",
    component: _57d943fe,
    name: "datachange"
  }, {
    path: "/datatype",
    component: _77bc3ff0,
    name: "datatype"
  }, {
    path: "/date",
    component: _9798325c,
    name: "date"
  }, {
    path: "/decorator",
    component: _5a56e147,
    name: "decorator"
  }, {
    path: "/dictionary",
    component: _6f584a8c,
    name: "dictionary"
  }, {
    path: "/dictionarymethod",
    component: _89ab9cca,
    name: "dictionarymethod"
  }, {
    path: "/dundermethod",
    component: _87442b0e,
    name: "dundermethod"
  }, {
    path: "/error",
    component: _113a32d8,
    name: "error"
  }, {
    path: "/error2",
    component: _15dcd564,
    name: "error2"
  }, {
    path: "/escapechar",
    component: _a033e60a,
    name: "escapechar"
  }, {
    path: "/etcdundermethod",
    component: _0e73dd16,
    name: "etcdundermethod"
  }, {
    path: "/etcfile",
    component: _6ee38ec8,
    name: "etcfile"
  }, {
    path: "/etcfunction",
    component: _5844a4f8,
    name: "etcfunction"
  }, {
    path: "/file",
    component: _1d8155a0,
    name: "file"
  }, {
    path: "/filereading",
    component: _5a8bbf1c,
    name: "filereading"
  }, {
    path: "/filewriting",
    component: _6a177d28,
    name: "filewriting"
  }, {
    path: "/finished",
    component: _65170f96,
    name: "finished"
  }, {
    path: "/for",
    component: _032b45d5,
    name: "for"
  }, {
    path: "/forfunction",
    component: _427880ad,
    name: "forfunction"
  }, {
    path: "/fortype",
    component: _4b8dc18f,
    name: "fortype"
  }, {
    path: "/function",
    component: _d6ccc008,
    name: "function"
  }, {
    path: "/functionhard",
    component: _c8c6bd32,
    name: "functionhard"
  }, {
    path: "/gtts",
    component: _4c99c760,
    name: "gtts"
  }, {
    path: "/if",
    component: _152027c1,
    name: "if"
  }, {
    path: "/ifmaster",
    component: _babde33a,
    name: "ifmaster"
  }, {
    path: "/install",
    component: _a39ee8b2,
    name: "install"
  }, {
    path: "/io",
    component: _159efb4a,
    name: "io"
  }, {
    path: "/json",
    component: _58bc91e8,
    name: "json"
  }, {
    path: "/keyboard",
    component: _a4b7feea,
    name: "keyboard"
  }, {
    path: "/list",
    component: _cce4a07c,
    name: "list"
  }, {
    path: "/listmethod1",
    component: _502b859e,
    name: "listmethod1"
  }, {
    path: "/listmethod2",
    component: _50399d1f,
    name: "listmethod2"
  }, {
    path: "/logging",
    component: _5c4ea12a,
    name: "logging"
  }, {
    path: "/madlib",
    component: _651763d9,
    name: "madlib"
  }, {
    path: "/mapandreduceandfilter",
    component: _1e7ffacc,
    name: "mapandreduceandfilter"
  }, {
    path: "/math",
    component: _5b48c12c,
    name: "math"
  }, {
    path: "/matplotlib",
    component: _14adc070,
    name: "matplotlib"
  }, {
    path: "/module",
    component: _62365b90,
    name: "module"
  }, {
    path: "/modulemaster",
    component: _29a22a1c,
    name: "modulemaster"
  }, {
    path: "/mouse",
    component: _06b1bab1,
    name: "mouse"
  }, {
    path: "/multiprocessing",
    component: _ea54bad0,
    name: "multiprocessing"
  }, {
    path: "/mydecorator",
    component: _33e43e1b,
    name: "mydecorator"
  }, {
    path: "/name",
    component: _91e489a2,
    name: "name"
  }, {
    path: "/newline",
    component: _875769c0,
    name: "newline"
  }, {
    path: "/none",
    component: _c54c5d48,
    name: "none"
  }, {
    path: "/number",
    component: _7eb3d9ed,
    name: "number"
  }, {
    path: "/nummethod",
    component: _7ccf9a1a,
    name: "nummethod"
  }, {
    path: "/numtype",
    component: _71d45968,
    name: "numtype"
  }, {
    path: "/oneliner",
    component: _2f36c708,
    name: "oneliner"
  }, {
    path: "/operator",
    component: _c995e270,
    name: "operator"
  }, {
    path: "/pandas",
    component: _c6532f06,
    name: "pandas"
  }, {
    path: "/pip",
    component: _09d053a3,
    name: "pip"
  }, {
    path: "/pythondecorator",
    component: _2e47a22a,
    name: "pythondecorator"
  }, {
    path: "/pythonmodule",
    component: _a70edf28,
    name: "pythonmodule"
  }, {
    path: "/quiz",
    component: _0b026df9,
    name: "quiz"
  }, {
    path: "/random",
    component: _c60ed332,
    name: "random"
  }, {
    path: "/regex",
    component: _3c66655a,
    name: "regex"
  }, {
    path: "/request",
    component: _72f9be9b,
    name: "request"
  }, {
    path: "/requestmethod",
    component: _8a182e88,
    name: "requestmethod"
  }, {
    path: "/set",
    component: _bc2ffe24,
    name: "set"
  }, {
    path: "/setmethod",
    component: _014de0cf,
    name: "setmethod"
  }, {
    path: "/spam",
    component: _7830ae26,
    name: "spam"
  }, {
    path: "/specialvariable",
    component: _690e9f41,
    name: "specialvariable"
  }, {
    path: "/string",
    component: _3850bab5,
    name: "string"
  }, {
    path: "/stringascode",
    component: _6925cad8,
    name: "stringascode"
  }, {
    path: "/stringmethod1",
    component: _f2f2596a,
    name: "stringmethod1"
  }, {
    path: "/stringmethod2",
    component: _f2d62a68,
    name: "stringmethod2"
  }, {
    path: "/thread",
    component: _4f72c42e,
    name: "thread"
  }, {
    path: "/threadmethod",
    component: _7809340f,
    name: "threadmethod"
  }, {
    path: "/tuple",
    component: _6f66bc54,
    name: "tuple"
  }, {
    path: "/turtle",
    component: _033d4660,
    name: "turtle"
  }, {
    path: "/type",
    component: _2108e05e,
    name: "type"
  }, {
    path: "/variable",
    component: _ea11e6c0,
    name: "variable"
  }, {
    path: "/video",
    component: _3331b787,
    name: "video"
  }, {
    path: "/vscode",
    component: _d2208764,
    name: "vscode"
  }, {
    path: "/while",
    component: _7379233d,
    name: "while"
  }, {
    path: "/zlib",
    component: _56fa8f22,
    name: "zlib"
  }, {
    path: "/",
    component: _98c66f44,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
