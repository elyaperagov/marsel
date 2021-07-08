import Vue from 'vue';
import VueTheMask from 'vue-the-mask'
import SlideUpDown from 'vue-slide-up-down'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Sprite from '../components/Sprite.vue'
import HeaderMain from '../components/HeaderMain.vue'
import Banners from '../components/Banners.vue'
import Wood from '../components/Wood.vue'
import Advantages from '../components/Advantages.vue'
import FooterMain from '../components/FooterMain.vue'
import Products from '../components/Products.vue'

import Helpers from '../lib/Helpers.js'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(VueTheMask)
Vue.use(Helpers)
Vue.component('slide-up-down', SlideUpDown)

Vue.config.comments = true
Vue.config.ignoredElements = [
    'noindex',
    /^ion-/
]

Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
        console.log('scroll')
    }
})

const app = new Vue({
    el: '#app',
    data() {
        return {

        }
    },
    watch: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {},
    components: {
        Sprite,
        HeaderMain,
        Banners,
        FooterMain,
        Wood,
        Advantages,
        Products
    }
})