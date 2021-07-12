<template>
  <section class="advantages" id="advantages">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="advantages__items" v-if="!$root.isMobile">
        <div class="advantages__item" v-for="(item, i) in items" :key="i">
          <img :src="item.img_src" alt="" />
        </div>
      </div>
      <div class="advantages__items" v-if="$root.isMobile">
        <swiper
          class="swiper advantages__swiper"
          ref="swiper"
          :options="SliderOptions"
        >
          <swiper-slide
            v-for="(slide, b) in slides"
            :key="b"
            class="products__item"
          >
            <div class="products__image">
              <img
                loading="lazy"
                :src="slide.img"
                :alt="slide.alt"
                :width="slide.img_width"
                :height="slide.img_height"
              />
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <button class="button swiper-button-next" slot="button-next">
          <svg class="icon" width="20" height="27" aria-hidden="true">
            <use xlink:href="#swiper-arrow"></use>
          </svg>
        </button>
        <button class="button swiper-button-prev" slot="button-prev">
          <svg class="icon" width="20" height="27" aria-hidden="true">
            <use xlink:href="#swiper-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Преимущества Био-линейки",
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slides: [
        {
          img: "img/drop.png",
          alt: "гель для душа",
          width: 190,
          height: 359,
        },
        {
          img: "img/leafs.png",
          alt: "гель для душа",
          width: 790,
          height: 359,
        },
        {
          img: "img/earth.png",
          alt: "гель для душа",
          width: 790,
          height: 359,
        },
        {
          img: "img/recycle.png",
          alt: "гель для душа",
          width: 790,
          height: 359,
        },
      ],
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
