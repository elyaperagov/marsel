<template>
  <header class="header" :style="{ top: $root.header_top + 'px' }">
    <div class="header__wrapper container--wide">
      <div class="container">
        <div class="header__top">
          <div class="header__logo">
            <a :href="'home.html'" class="header__logo-link">
              <img
                loading="lazy"
                :src="!$root.isTablet ? logo.logo_desk : logo.logo_mob"
                alt="Логотип Le Petit Marsellaise"
              />
            </a>
          </div>
          <ul class="header__menu" v-if="!$root.isTablet">
            <li class="header__menu-item" v-for="(item, i) in menu" :key="i">
              <a :href="item.link" @click.prevent="goTo(item.link)">
                {{ item.name }}
                <template v-if="item.name === 'Вопросы'">
                  <div class="header__menu-svg" @click="showQuestionsPopup">
                    <svg
                      class="icon"
                      :width="item.icon.width"
                      :height="item.icon.height"
                      aria-hidden="true"
                    >
                      <use :xlink:href="item.icon.id"></use>
                    </svg>
                  </div>
                </template>
              </a>
            </li>
          </ul>
          <div class="header__popup" v-if="this.questionPopupShow">
            {{ popup_text }}
          </div>
        </div>
      </div>
      <button
        class="button button--toggle"
        @click="menuToggle()"
        :class="{ close: !$root.menuShown }"
      >
        <span></span>
      </button>
    </div>
    <transition name="fade">
      <div
        class="header__mobile-wrapper"
        v-if="$root.isTablet"
        v-show="$root.menuShown"
      >
        <div class="header__overlay" @click="menuClose()"></div>
        <div class="container">
          <div class="header__mobile">
            <ul class="header__menu">
              <li class="header__menu-item" v-for="(item, i) in menu" :key="i">
                <a
                  :href="item.link"
                  @click.prevent="goTo(menu.link), menuClose()"
                >
                  {{ item.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      
      logo: {
        logo_desk: "img/logo.png",
        logo_mob: "img/logo-mob.png",
        // logo_width: 306,
        // logo_height: 287,
        // logo_width_mob: 126,
        // logo_height_mob: 118,
      },

      questionPopupShow: false,
      popup_text:
        "В случае возникновения вопросов обращайтесь по почте: ********@*****.com",
      menu: [
        {
          name: "Узнай о БИО-линейке",
          link: "#learn",
        },
        {
          name: "Преимущества Био-линейки",
          link: "#advantages",
        },
        {
          name: "Продукты",
          link: "#products",
        },
        {
          name: "Вопросы",
          link: "#questions",
          icon: {
            width: "20",
            height: "26",
            id: "#question",
          },
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        setTimeout(() => {
          this.$scrollTo(link);
        }, 500);
      }
    },
    showQuestionsPopup() {
      this.questionPopupShow = !this.questionPopupShow;
    },
    menuToggle() {
      this.$root.menuShown = !this.$root.menuShown;
      document.body.classList.toggle("scroll-off");
    },
    menuClose() {
      if (this.menuShown) {
        this.$root.menuShown = false;
        document.body.classList.remove("scroll-off");
      }
    },
  },
  created() {
    let that = this;
    document.addEventListener("keyup", function (evt) {
      if (evt.keyCode === 27) {
        that.menuClose(true);
      }
    });
  },
  components: {},
};
</script>
