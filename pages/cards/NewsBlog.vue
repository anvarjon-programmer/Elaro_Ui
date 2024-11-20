<template>
    <div class="carousel-container">
        <div class="mt-[50px] flex items-center justify-between my-4">
        <h2 class="text-2xl font-bold">Yangiliklar va bloglar</h2>
        <a href="#" class="text-blue-700">Barchasini ko'rish <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <Carousel
        :itemsToShow="5"
        :mouseDrag="false"
        ref="carousel"
        :autoplay="0"
        :breakpoints="{
          400: { itemsToShow: 1 },
          500: { itemsToShow: 3 },
          768: { itemsToShow: 4 },
          1024: { itemsToShow: 6 },
          1280: { itemsToShow: 5 },
        }"
      >
      <Slide v-for="product in products" :key="product.id" class="slider">
          <div
            class="max-w-[800px] md:swiper-slide flex flex-col overflow-hidden group mx-3 "
          >
            <nuxt-link to="#" class="relative h-[200px] max-w-[400px]">
              <img
                class="w-full h-full object-cover bg-center m-auto rounded-lg"
                :src="product.url"
                alt="Product Image"
              />
            </nuxt-link>
            <div class="p-3 flex flex-col justify-between">
              <p class="text-start text-[17px] text-gray-700 dark:text-gray-400">
                {{ product.title }}
              </p>
              <h3 class="text-start mt-2 text-[18px]">{{ product.desc }}</h3>
            </div>
          </div>
        </Slide>
      </Carousel>
      <div class="hidden md:block">
        <button @click="prev" class="carousel-button prev-button text-2xl text-gray-500">
          <i class="fa-solid fa-angle-left text-2xl"></i>
        </button>
        <button @click="next" class="carousel-button next-button text-2xl text-gray-500">
          <i class="fa-solid fa-angle-right text-2xl"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  
  export default {
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        products: [
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
          {
            url: "https://mini-io-api.texnomart.uz/newcontent/image/news/jVXcaSnZds0ZMuQIWaW4Ya7yQDQPOVqChJIqG4Bp.webp",
            title: "iPhone 15 Pro",
            desc:"28 Avgust 2024"
          },
  
        ],
      };
    },
    methods: {
      prev() {
        this.$refs.carousel.prev();
      },
      next() {
        this.$refs.carousel.next();
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-button {
    position: absolute;
    transform: translateY(-400%);
    border: none;
    padding: 5px 12px;
    cursor: pointer;
    background-color: red;
    border-radius: 50%;
    background: white;
  }
  .slider{
    margin: 0 5px;
  }
  
  .prev-button {
    left: 70px;
  }
  
  .next-button {
    right: 65px;
    z-index: 100;
  }
  .card{
    margin: 0 10px;
    
  }
  .card p{
    position: absolute;
    top: 10px;
    left: 8px;
    font-size: 17px;
  }
  </style>
  