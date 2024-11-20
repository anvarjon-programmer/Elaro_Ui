<template>
    <div>
        <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ViewedProduct/>
    <Footer />
    </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import ViewedProduct from './pages/cards/ViewedProduct.vue';


</script>

<style scoped>

</style>