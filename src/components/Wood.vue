<template>
  <section class="wood container--wide">
    <div class="container">
        <div class="wood__fruits">
            <img :src="img_src" alt="">
        </div>
      <h2>
        {{ title }}
        <p v-html="when"></p>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Wood",
  components: {},
  data() {
    return {
      title: "Познакомьтесь с особенностями био-линейки ",
      when: "с <span>1 июня</span> по <span>31 октября</span> 2021 года",
      img_src: "img/fruits.png"
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>
