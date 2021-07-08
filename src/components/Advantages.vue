<template>
  <section class="advantages" id="advantages">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="advantages__items">
        <div class="advantages__item" v-for="(item, i) in items" :key="i">
          <img :src="item.img_src" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Преимущества Био-линейки",
      items: [
        {
          img_src: "img/bio.png",
        },
        {
          img_src: "img/glycerin.png",
        },
        {
          img_src: "img/certified.png",
        },
        {
          img_src: "img/recyclable.png",
        },
      ],
    };
  },
  computed: {},
  components: {},
  methods: {},
};
</script>
