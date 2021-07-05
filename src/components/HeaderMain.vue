<template>
  <div class="container-wide">
    <header class="header" :style="{ top: $root.header_top + 'px' }">
      <div class="container">
        <div class="header__top">
          <div class="header__logo">
            <a :href="'home.html'" class="header__logo-link">
              <img
                loading="lazy"
                :src="logo"
                alt="Логотип Le Petit Marsellaise"
                :width="!isMobile ? logo.width : logo_width_mob"
                :height="!isMobile ? logo.height : logo_height_mob"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuShown: false,
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
      logo: "img/logo.png",
      logo_width: 200,
      logo_height: 111,
      logo_width_mob: 64,
      logo_height_mob: 35,
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
