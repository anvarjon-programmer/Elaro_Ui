<template>
    <div v-if="product">
      <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta :name="description" :content="product.description"/>
      </Head>
      <ProductDetails :product="product"/>
    </div>
    <div v-else class="h-screen w-full flex items-center justify-center">
      <h1 class="text-4xl">Loading...</h1>
    </div>
  </template>
  
  <script setup>
  const { id } = useRoute().params
  
  const uri = `https://fakestoreapi.com/products/${id}`
  const { data: product } = await useFetch(uri,{key: id});

  if(!product.value){
    throw createError({statusCode:404, statusMessage: "Product not found", fatal:true})
  }
  
  definePageMeta({
    layout: 'products'
  })
  </script>
  
  <style lang="scss" scoped>
  </style>
  