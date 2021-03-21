import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

library.add(faArrowLeft);
library.add(faArrowRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);
