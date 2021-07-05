<template>
  <div class="footer__block footer__block--contacts">
    <ul class="footer__contacts-list">
      <li
        class="footer__contacts-item"
        v-for="(contact, i) in contacts"
        :key="i"
      >
        <a class="footer__contacts-link" :href="contact.href">
          <div class="footer__contacts-icon">
            <svg
              class="icon"
              :width="contact.width"
              :height="contact.height"
              aria-hidden="true"
            >
              <use :xlink:href="contact.id"></use>
            </svg>
          </div>
          <span>{{ contact.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {

    }
  },
  props: {
    contacts: Array
  }
}
</script>

<style></style>
