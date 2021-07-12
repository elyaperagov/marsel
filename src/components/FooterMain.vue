<template>
  <footer class="footer">
    <div class="container--wide">
      <div class="footer__inner">
        <div class="footer__block footer__block--logo">
          <a :href="'home.html'" class="footer__logo-link">
            <img loading="lazy" :src="logo.logo" :alt="logo.alt" />
          </a>
        </div>
        <div class="footer__block footer__block--agreements">
          <p class="footer__text">{{ agreements.when }}</p>
          <p class="footer__text">{{ agreements.confidentiality_info }}</p>
          <p class="footer__text">{{ agreements.copyright }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: {
        logo: "img/logo-footer.png",
        alt: "логотип petit marseillaise",
      },
      agreements: {
        when: "Общие сроки проведения акции с 01.06.2021-31.10.2021. включительно",
        confidentiality_info:
          "Сайт принадлежит компании ООО “Джонсон & Джонсон”, которая полностью отвечает за его содержимое. Сайт ориентирован на физических и юридических лиц из России.",
        copyright: "© ООО 'Джонсон & Джонсон', Россия, 2021 г",
      },
    };
  },
  computed: {},
  components: {},
  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        setTimeout(() => {
          this.$scrollTo(link);
        }, 500);
      }
    },
  },
};
</script>
