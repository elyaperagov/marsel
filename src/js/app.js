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

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

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
            window_top: 0,
            header_top: 0,
            header_height: 183,
            offsetLeft: 0,
            tabletBreakpoint: 1025,
            mobileBreakpoint: 767,

            menuShown: false,
            width: null,
            height: null,
            timeout_stick: null,
        }
    },
    watch: {},
    async created() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    },
    computed: {
        isTablet() {
            return this.width <= this.tabletBreakpoint;
        },
        isMobile() {
            return this.width <= this.mobileBreakpoint;
        }
    },
    mounted() {
        this.addListeners();
    },
    methods: {

        addListeners() {
            window.addEventListener('scroll', this.onScroll);
            window.addEventListener('resize', this.onResize);
            window.onload = () => {
                setTimeout(() => {
                    this.getOffsetLeft();
                }, 500);
            }
        },
        onScroll(e) {
            this.window_top = window.pageYOffset;
        },
        onResize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.getOffsetLeft();
            this.menuShown = false;
        },
        getOffsetLeft() {
            try {
                this.offsetLeft = document.querySelector('footer .container').offsetLeft + document.querySelector('footer .container').offsetWidth;
            } catch (error) {}
        },
    },
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