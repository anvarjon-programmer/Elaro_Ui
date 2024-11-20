<template>
    <div class="carousel-container mb-10">
      <h2 class="text-2xl font-bold my-8">Ommabop brendlar</h2>
      <Carousel
        :itemsToShow="5"
        :mouseDrag="false"
        ref="carousel"
        :breakpoints="breakpoints"
      >
        <Slide v-for="(product, index) in logoData" :key="index">
          <div
            class="swiper-slide flex flex-col overflow-hidden rounded-lg mx-2"
          >
            <a href="#" class="relative max-w-[300px] max-h-[80px]">
              <img
                class="w-full h-full card-img object-cover "
                :src="product.url"
                alt="Product Image"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#F4F4F4] via-transparent to-[#F4F4F4] opacity-50 rounded-lg"
              ></div>
            </a>
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
  
  <script setup>
  import { ref } from 'vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  
  const logoData = ref([
  {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },{
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },
    {
      url: 'https://mini-io-api.texnomart.uz/catalog/special-brands/87/ad04313a-6046-4404-93f4-c0f64e57289d-medium.png',
    },


    // Qo'shimcha ma'lumotlar shu yerga kiritiladi
  ]);
  
  const carousel = ref(null);
  
  const breakpoints = {
    400: { itemsToShow: 1 },
    500: { itemsToShow: 3 },
    768: { itemsToShow: 4 },
    1024: { itemsToShow: 6 },
    1280: { itemsToShow: 7 },
  };
  
  const prev = () => {
    carousel.value.prev();
  };
  
  const next = () => {
    carousel.value.next();
  };
  </script>
  
  <style scoped>
  .carousel-button {
    position: absolute;
    margin-top: -60px;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    background: none;
  }
  
  .prev-button {
    left: 65px;
  }
  
  .next-button {
    right: 60px;
    z-index: 100;
  }
  .card-img{
    padding: 20px 20px;
  }
  </style>
  