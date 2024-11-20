<template>
    <div class="grid grid-cols-4 gap-5 p-6">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p"/>
      </div>
    </div>
</template>

<script setup>
import { da } from 'vuetify/locale';

   definePageMeta({
    layout:'products'
   })
    
   //fetch the products 
   const {data: products } = await useFetch("https://fakestoreapi.com/products");

   useHead({
    title:'Nuxt Dojo | Merch',
    meta:[
      {name:'description',content:'Nuxt 3 Merch'}
    ]
   })
   
</script>

<style lang="scss" scoped>

</style>