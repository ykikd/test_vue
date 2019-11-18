import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

/**
 * リロード時にconsoleをクリアする
 */
if (module.hot) {
  module.hot.accept()
  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear()
  })
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
