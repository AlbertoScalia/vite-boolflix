import { createApp } from 'vue'
import './assets/scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import vueClickOutsideElement from 'vue-click-outside-element'
import App from './App.vue'

library.add(faStar, farStar, faMagnifyingGlass) 
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(vueClickOutsideElement).mount('#app')