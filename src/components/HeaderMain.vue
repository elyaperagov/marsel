<template>
  <header
    class="header container--wide"
    :style="{ top: $root.header_top + 'px' }"
  >
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <a :href="'home.html'" class="header__logo-link">
            <img
              loading="lazy"
              :src="!isMobile ? logo.logo_desk : logo.logo_mob"
              alt="Логотип Le Petit Marsellaise"
             
            />
          </a>
        </div>
        <ul class="header__menu" v-if="!isMobile">
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
      <button
        class="button button--toggle"
        @click="menuToggle()"
        :class="{ close: !menuShown }"
      >
        <span></span>
      </button>
    </div>
    <transition name="fade">
      <div class="header__mobile-wrapper" v-if="isMobile" v-show="menuShown">
        <div class="header__overlay" @click="menuClose()"></div>
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
          <div class="header__contacts">
            <a
              :href="'tel:' + phone_href"
              class="header__phone"
              @click.prevent="menuClose()"
            >
              {{ phone }}
            </a>
            <a
              :href="contact_link"
              class="header__contact-us"
              @click.prevent="goTo(contact_link), menuClose()"
            >
              {{ contact_us }}
            </a>
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
      menuShown: false,
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
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
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.toggleMobile();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.toggleMobile();
  },
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
      this.menuShown = !this.menuShown;
      document.body.classList.toggle("scroll-off");
    },
    menuClose() {
      if (this.menuShown) {
        this.menuShown = false;
        document.body.classList.remove("scroll-off");
      }
    },
    toggleMobile() {
      if (window.innerWidth <= this.mobileBreakpoint) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    // handleScroll() {
    //   this.menuClose()
    // },
    handleResize() {
      this.toggleMobile(), this.menuClose();
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
