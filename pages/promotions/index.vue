<template>
  <div class="container p-6">
    <div>
    <div class="flex item-center gap-5 mt-11">
      <nuxt-link to="/"><i class="fa-solid fa-arrow-left-long"></i></nuxt-link>
      <nuxt-link to="/" class="">Bosh sahifa</nuxt-link>
      <span
        to="/"
        class="px-4 py-1 bg-yellow-200 text-black rounded-lg shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
        >Aksiyalar va chegirmalar</span
      >
    </div>
    <h2 class="text-3xl my-6">Aksiyadagi mahsulotlar va chegirmalar Toshkentda</h2>

    <ul class="mt-16 mb-7 flex items-center gap-7">
        <li>
            <NuxtLink to="#">Foizlarsiz muddatli to'lov!</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#">Tavsiya etamiz</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#">Xit savdo</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#">Super narxlarda tovarlar</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#">Maxsus Chegirmalar</NuxtLink>
        </li>
        <li>
            <NuxtLink to="#">1+1</NuxtLink>
        </li>
    </ul>
    </div>


    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <div class="flex flex-col  justify-center rounded-lg">
        <div class="mt-4 ">
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/image/stock/I6OlQ7iAXK9iniJ7ReoprP3aVNrxCCRTOWXK4IjP.webp"
            alt="Samsung"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="flex-none mt-3 mx-3">
          <h2 class="text-3xl sm:text-2xl font-bold text-blue-600 text-start">Samsung Week</h2>
          <p class="text-xl sm:text-lg text-gray-700 mt-8">11 Noyabrdan 24 Noyabrgacha</p>
        </div>
      </div>

      <div class="flex flex-col  justify-center rounded-lg">
        <div class="mt-4 ">
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/image/stock/I6OlQ7iAXK9iniJ7ReoprP3aVNrxCCRTOWXK4IjP.webp"
            alt="Samsung"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="flex-none mt-3 mx-3">
          <h2 class="text-3xl sm:text-2xl font-bold text-blue-600 text-start">Samsung Week</h2>
          <p class="text-xl sm:text-lg text-gray-700 mt-8">11 Noyabrdan 24 Noyabrgacha</p>
        </div>
      </div>
      <div class="flex flex-col  justify-center rounded-lg">
        <div class="mt-4 ">
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/image/stock/I6OlQ7iAXK9iniJ7ReoprP3aVNrxCCRTOWXK4IjP.webp"
            alt="Samsung"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="flex-none mt-3 mx-3">
          <h2 class="text-3xl sm:text-2xl font-bold text-blue-600 text-start">Samsung Week</h2>
          <p class="text-xl sm:text-lg text-gray-700 mt-8">11 Noyabrdan 24 Noyabrgacha</p>
        </div>
      </div>
      <div class="flex flex-col  justify-center rounded-lg">
        <div class="mt-4 ">
          <img
            src="https://mini-io-api.texnomart.uz/newcontent/image/stock/I6OlQ7iAXK9iniJ7ReoprP3aVNrxCCRTOWXK4IjP.webp"
            alt="Samsung"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="flex-none mt-3 mx-3">
          <h2 class="text-3xl sm:text-2xl font-bold text-blue-600 text-start">Samsung Week</h2>
          <p class="text-xl sm:text-lg text-gray-700 mt-8">11 Noyabrdan 24 Noyabrgacha</p>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
