import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCartShopping, faQrcode, faExpand, faArrowTrendUp, faTextWidth, faMaximize, faCircleDot, faCirclePlay, faTrashCan, faShareNodes, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare} from '@fortawesome/free-regular-svg-icons'
// import { faGridHorizontal} from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faCartShopping, faQrcode, faExpand, faCircle, faArrowTrendUp, faTextWidth, faMaximize, faCircleDot, faCirclePlay, faTrashCan, faShareNodes, faSquare, faCircleXmark)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
