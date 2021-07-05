<template>
  <section class="banners">
    <div class="banners__inner">
      <div class="banners__tree">
        <img :src="tree_src" alt="" />
      </div>
      <h1 v-html="title"></h1>
      <div class="banners__phone">
        <img :src="phone_src" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banners",
  components: {},
  data() {
    return {
      title: "открой для себя природу <p>прованса</p>",
      tree_src: "img/tree.png",
      phone_src: "img/phone.png",
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>
