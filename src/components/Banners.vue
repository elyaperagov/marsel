<template>
  <section class="banners" id="learn">
    <div class="banners__inner">
      <div class="banners__tree">
        <img :src="tree_src" alt="" />
      </div>
      <h1 v-html="title"></h1>
      <div class="container">
        <div class="banners__phone">
          <img :src="phone_src" alt="" />
        </div>
        <div class="banners__info">
          <p>
            {{ banners_text }}<span> {{ banners_company }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Banners",
  components: {
  },
  data() {
    return {
      title: "открой для себя природу <p>прованса</p>",
      tree_src: "img/tree.png",
      phone_src: "img/phone.png",
      banners_text:
        "Наведи камеру на упаковку и узнай больше о БИО - линейкe ",
      banners_company: "Le Petit Marseillais"
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  beforeDestroy() {},
};
</script>
