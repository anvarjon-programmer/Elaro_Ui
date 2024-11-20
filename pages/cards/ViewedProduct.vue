<template>
    <div class="container">
      <div class="mt-[50px] my-4">
        <h2 class="text-xl font-bold">Yaqinda ko`rib chiqilgan mahsulotlar</h2>
      </div>
      <ProductCard :products="products" />
    </div>
  </template>
  
  <script setup>
import ProductCard from '~/components/ui/ProductCard.vue';

  
  
  const products = [
  {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Kir yuvish mashinasi Haier HW60-BP10919B',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: '254 620 so\'mdan / 24 oy',
          price:"10 599 000",
          id: 4,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Muzlatgich LG GC B459SLCL',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "57 662 so'mdan / 24 oy",
          price:"10 599 000",
          id: 3,
        },
  ];
  </script>
  