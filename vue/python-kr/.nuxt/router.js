import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c0e1146 = () => interopDefault(import('..\\pages\\ascii.vue' /* webpackChunkName: "pages/ascii" */))
const _7de47898 = () => interopDefault(import('..\\pages\\boolean.vue' /* webpackChunkName: "pages/boolean" */))
const _3e8fc5f9 = () => interopDefault(import('..\\pages\\calc.vue' /* webpackChunkName: "pages/calc" */))
const _a8635b2a = () => interopDefault(import('..\\pages\\comment.vue' /* webpackChunkName: "pages/comment" */))
const _77bc3ff0 = () => interopDefault(import('..\\pages\\datatype.vue' /* webpackChunkName: "pages/datatype" */))
const _a033e60a = () => interopDefault(import('..\\pages\\escapechar.vue' /* webpackChunkName: "pages/escapechar" */))
const _a39ee8b2 = () => interopDefault(import('..\\pages\\install.vue' /* webpackChunkName: "pages/install" */))
const _159efb4a = () => interopDefault(import('..\\pages\\io.vue' /* webpackChunkName: "pages/io" */))
const _cce4a07c = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _502b859e = () => interopDefault(import('..\\pages\\listmethod1.vue' /* webpackChunkName: "pages/listmethod1" */))
const _651763d9 = () => interopDefault(import('..\\pages\\madlib.vue' /* webpackChunkName: "pages/madlib" */))
const _7eb3d9ed = () => interopDefault(import('..\\pages\\number.vue' /* webpackChunkName: "pages/number" */))
const _7ccf9a1a = () => interopDefault(import('..\\pages\\nummethod.vue' /* webpackChunkName: "pages/nummethod" */))
const _71d45968 = () => interopDefault(import('..\\pages\\numtype.vue' /* webpackChunkName: "pages/numtype" */))
const _c995e270 = () => interopDefault(import('..\\pages\\operator.vue' /* webpackChunkName: "pages/operator" */))
const _3850bab5 = () => interopDefault(import('..\\pages\\string.vue' /* webpackChunkName: "pages/string" */))
const _f2f2596a = () => interopDefault(import('..\\pages\\stringmethod1.vue' /* webpackChunkName: "pages/stringmethod1" */))
const _f2d62a68 = () => interopDefault(import('..\\pages\\stringmethod2.vue' /* webpackChunkName: "pages/stringmethod2" */))
const _ea11e6c0 = () => interopDefault(import('..\\pages\\variable.vue' /* webpackChunkName: "pages/variable" */))
const _d2208764 = () => interopDefault(import('..\\pages\\vscode.vue' /* webpackChunkName: "pages/vscode" */))
const _75795afa = () => interopDefault(import('..\\pages\\python-kor\\script.js' /* webpackChunkName: "pages/python-kor/script" */))
const _98c66f44 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _b8a863a2 = () => interopDefault(import('..\\pages\\__name__.vue' /* webpackChunkName: "pages/__name__" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ascii",
    component: _2c0e1146,
    name: "ascii"
  }, {
    path: "/boolean",
    component: _7de47898,
    name: "boolean"
  }, {
    path: "/calc",
    component: _3e8fc5f9,
    name: "calc"
  }, {
    path: "/comment",
    component: _a8635b2a,
    name: "comment"
  }, {
    path: "/datatype",
    component: _77bc3ff0,
    name: "datatype"
  }, {
    path: "/escapechar",
    component: _a033e60a,
    name: "escapechar"
  }, {
    path: "/install",
    component: _a39ee8b2,
    name: "install"
  }, {
    path: "/io",
    component: _159efb4a,
    name: "io"
  }, {
    path: "/list",
    component: _cce4a07c,
    name: "list"
  }, {
    path: "/listmethod1",
    component: _502b859e,
    name: "listmethod1"
  }, {
    path: "/madlib",
    component: _651763d9,
    name: "madlib"
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
    path: "/operator",
    component: _c995e270,
    name: "operator"
  }, {
    path: "/string",
    component: _3850bab5,
    name: "string"
  }, {
    path: "/stringmethod1",
    component: _f2f2596a,
    name: "stringmethod1"
  }, {
    path: "/stringmethod2",
    component: _f2d62a68,
    name: "stringmethod2"
  }, {
    path: "/variable",
    component: _ea11e6c0,
    name: "variable"
  }, {
    path: "/vscode",
    component: _d2208764,
    name: "vscode"
  }, {
    path: "/python-kor/script",
    component: _75795afa,
    name: "python-kor-script"
  }, {
    path: "/",
    component: _98c66f44,
    name: "index"
  }, {
    path: "/:_name__",
    component: _b8a863a2,
    name: "_name__"
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
