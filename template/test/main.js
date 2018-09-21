import Vue from 'vue'
import App from './App'

import component from '../src'

Vue.use(component)

new Vue({
  el: '#app',
  render: (h) => h(App)
})
