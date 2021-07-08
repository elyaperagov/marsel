<template>
    <section class="products">
        <div class="container">
            <h2> {{ title }} </h2>
            <div class="exclusive__picture-wrapper">
          <swiper
            class="swiper exclusive__swiper"
            ref="swiper"
            :options="SliderOptions"
          >
            <swiper-slide
              v-for="(slide, b) in slides"
              :key="b"
              class="exclusive__item"
            >
              <div class="exclusive__image">
                <img
                  loading="lazy"
                  :src="slide.img"
                  :alt="slide.alt"
                  :width="slide.img_width"
                  :height="slide.img_height"
                />
              </div>
            </swiper-slide>
            <button class="button swiper-button-next" slot="button-next">
              <svg class="icon" width="25" height="15" aria-hidden="true">
                <use xlink:href="#swiper-arrow"></use>
              </svg>
            </button>
            <button class="button swiper-button-prev" slot="button-prev">
              <svg class="icon" width="25" height="15" aria-hidden="true">
                <use xlink:href="#swiper-arrow"></use>
              </svg>
            </button>
          </swiper>
        </div>
        </div>
    </section>
</template>

<script>

export default {

components: {
  },
  data() {
    return {
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
       slides: [
        {
          img: 'img/production.jpg',
          alt: 'Эксклюзивный дизайн от RHIZOME',
          width: 790,
          height: 450,
        },
        {
          img: 'img/rhizome.jpg',
          alt: 'Эксклюзивный дизайн от RHIZOME',
          width: 790,
          height: 450,
        },
      ],
      title: "Продукты"
    }
  },
  computed: {},
  components: {
  },
  methods: {

  },
}
</script>
