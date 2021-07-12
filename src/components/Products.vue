<template>
  <section class="products" id="products">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="products__picture-wrapper">
        <swiper
          class="swiper products__swiper"
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
  components: {},
  data() {
    return {
      SliderOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
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
          img: "img/gel-1.png",
          alt: "гель для душа",
          width: 190,
          height: 359,
        },
        {
          img: "img/gel-2.png",
          alt: "гель для душа",
          width: 790,
          height: 359,
        },
        {
          img: "img/gel-1.png",
          alt: "гель для душа",
          width: 790,
          height: 359,
        },
        {
          img: "img/gel-1.png",
          alt: "гель для душа",
          width: 790,
          height: 359,
        },
      ],
      title: "Продукты",
    };
  },
  computed: {},
  components: {},
  methods: {},
};
</script>
