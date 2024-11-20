<template>
    <div>
        <div class="flex items-center justify-between mt-[50px]">
        <h2 class="text-2xl font-bold">To'plamlar</h2>
        <a href="#" class=" text-blue-800">
          Barchasini ko'rishXit savdo
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="flex items-center gap-3 mt-4">
        <button class="p-2 shadow-sm rounded-lg">1+1</button>
        <button class="p-2 shadow-sm rounded-lg">Tavsiya etamiz</button>
        <button class="p-2 shadow-sm rounded-lg">0-0-12</button>
      </div>
      <ProductCard :products="products" />
    </div>
</template>

<script setup>
import ProductCard from '~/components/ui/ProductCard.vue';
const products = [
{
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
        {
          url: 'https://mini-io-api.texnomart.uz/catalog/product/894/89470/203990/2a6e5a70-746a-41df-805b-4f36e8e87e74-medium.webp',
          title: 'Samsung Galaxy Z Flip6 5G 12/256GB Blue Smartfoni',
          caption: 'Smartfon Honor 200 Lite 8/256GB Midnight Black',
          desc: "1 005 643 so'mdan / 24 oy",
          price:"14 807 000",
          id: 3,
        },
]

</script>

<style scoped>

</style>