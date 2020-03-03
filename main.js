import Vue from 'vue'
import App from './App'
// import Editor from '/components/editor/ckeditor.js'
Vue.config.productionTip = false
// Vue.prototype.editor = Editor
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
