import Vue from 'vue'
import uView from "uview-ui";
import store from './store'
import App from './App'
import i18n from './lang/i18n'

Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'


Vue.prototype.$store = store


const app = new Vue({
	store,
    ...App,
    i18n,
})
app.$mount()


// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
    const app = createSSRApp(App)
    app.use(i18n)
    return {app}
}
// #endif
