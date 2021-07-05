import Vue from 'vue';
import VueTheMask from 'vue-the-mask'
import SlideUpDown from 'vue-slide-up-down'
import Sprite from '../components/Sprite.vue'
import HeaderMain from '../components/HeaderMain.vue'
import Banners from '../components/Banners.vue'
import FooterMain from '../components/FooterMain.vue'

import Helpers from '../lib/Helpers.js'

import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueTheMask)
Vue.use(Helpers)
Vue.component('slide-up-down', SlideUpDown)
Vue.use(VueYouTubeEmbed)

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
    }
})