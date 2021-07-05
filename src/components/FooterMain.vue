<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__block footer__block--logo">
          <a :href="'home.html'" class="footer__logo-link">
            <img loading="lazy" :src="logo.logo" :alt="logo.alt" />
          </a>
          <b>{{ logo.info }}</b>
          <p>{{ logo.inn }}</p>
        </div>
        <Contacts :contacts="contacts" />
        <Social :socials="socials" />
        <div class="footer__block footer__block--agreements">
          <a class="footer__conf-link" :href="agreements.confidentiality_link">{{ agreements.confidentiality }}</a>
          <a class="footer__agreement-link" :href="agreements.agreement_link">{{ agreements.agreement }}</a>
          <p v-html="agreements.site"></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from './Social.vue'
import Contacts from './Contacts.vue'

export default {
  data() {
    return {
      logo: {
        logo: 'img/platforma-footer.png',
        alt: 'logo',
        info: 'АО «ПО «ПНСК»',
        inn: 'ИНН: 4719016582 ',
      },
      agreements: {
        confidentiality: 'Политика конфеденциальности предоставляемых данных',
        confidentiality_link: '#',
        agreement: 'Пользовательское соглашение',
        agreement_link: '#',
        site: 'Сайт сделал: <a href="https://ra-studio.ru/">RA-Studio</s>',
      },
      contacts: [
        {
          name: '+7 (812) 336-45-00',
          href: 'tel:+7(812)336-45-00',
          aria: 'phone',
          id: '#phone',
          width: 15,
          height: 15,
        },
        {
          name: 'sale@plat-forma.pro',
          href: 'mailto:sale@plat-forma.pro',
          aria: 'email',
          id: '#email',
          width: 15,
          height: 12,
        },
        {
          name: 'г. Санкт-Петербург, Красное Село, улица Восстановления, 66',
          href: 'https://yandex.ru/maps/-/CCUaaOs7CB',
          aria: 'address',
          id: '#address',
          width: 12,
          height: 17,
        },
      ],
      socials: [
        {
          id: '#vk',
          width: 23,
          height: 14,
          href: '#vk',
          aria: 'vk',
          class: 'footer__social-icon--vk',
        },
        {
          id: '#fb',
          width: 11,
          height: 24,
          href: '#fb',
          aria: 'fb',
          class: 'footer__social-icon--fb',
        },
        {
          id: '#whatsapp',
          width: 24,
          height: 24,
          href: '#whatsapp',
          aria: 'whatsapp',
          class: 'footer__social-icon--wp',
        },
        {
          id: '#telegram',
          width: 24,
          height: 20,
          href: '#telegram',
          aria: 'telegram',
          class: 'footer__social-icon--tg',
        },
      ],
    }
  },
  computed: {},
  components: {
    Social,
    Contacts,
  },
  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        setTimeout(() => {
          this.$scrollTo(link)
        }, 500)
      }
    },
  },
}
</script>
