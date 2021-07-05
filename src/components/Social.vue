<template>
  <div class="footer__block footer__block--social">
    <ul class="footer__social-list">
      <li class="footer__social-item" v-for="(social, i) in socials" :key="i">
        <a class="footer__social-link" :href="social.href">
          <div class="footer__social-icon" :class="social.class">
            <svg
              class="icon"
              :width="social.width"
              :height="social.height"
              aria-hidden="true"
            >
              <use :xlink:href="social.id"></use>
            </svg>
          </div>
          <span>{{ social.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {

    }
  },
  props: {
    socials: Array
  }
}
</script>

<style></style>
