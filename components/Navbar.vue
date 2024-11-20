<template>
  <header>
    <div :class="['navbar bg-[#FF6600] hidden lg:block', { 'scrolled-navbar': isScrolled }]">
    <div class="bg-[#333333] text-white">
      <div
        class="container flex items-center justify-between"
        v-if="!isScrolled"
      >
        <div class="flex items-center gap-8 my-2">
          <div
            @mouseenter="toggleDropdown(true)"
            @mouseleave="toggleDropdown(false)"
            class="relative inline-block"
          >
            <a href="/" class="flex items-center gap-1 text-[13px]">
              <i class="fa-solid fa-location-dot"></i>
              Tashkent
            </a>
            <div
              v-if="isDropdownOpen"
              class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700  w-[400px]"
            >
            <h3 class="ml-4 mt-3 text-xl text-black">Shaharni tanlang</h3>
            <div class="flex items-center">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Toshkent</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Buxoro</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Nukus</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Samarkand</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Qarshi</a
                  >
                </li>
              </ul>
            </div>

              
            </div>
          </div>
          <a href="/" class="flex items-center gap-1 text-[13px]">
            Bizning do'konlarimiz
          </a>
          <a href="/" class="flex items-center gap-1 text-[13px]">
            Yuridik shaxslar uchun
          </a>
          <a href="/" class="flex items-center gap-1 text-[13px]">
            To'lov usullari
          </a>
        </div>
        <div class="flex item-center gap-5">
          <span class="contact">Aloqa markazi : +99871 209 99 44</span>
          <select class="text-black bg-none">
            <option>UZ</option>
            <option>RU</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container flex items-center justify-between w-full">
      <a href="/" class="py-7 flex-1 max-w-[120px] ">
        <img class="w-full h-12 object-cover rounded-lg"
          src="../assets/logo/logo.jpg"
          alt=""
        />
      </a>
      <div class="flex items-center gap-3 flex-grow mx-[50px]">
        <a @click="togglePage" href="javascript:void(0)" class="bg-white text-black flex items-center pr-[20px] pl-[16px] h-[44px] rounded-lg text-xl gap-2">
    <i :class="isCatalog ? 'fa-solid fa-xmark':'fa-solid fa-bars'"></i>
    Catalog
  </a>
        <div
          class=" bg-white border-2 rounded-xl w-full max-w-xl px-4 py-2 flex items-center h-[44px] gap-2"
        >
          <i class="fa-solid fa-magnifying-glass mt-1"></i>
          <input
            type="text"
            placeholder="Qidirish"
            class="outline-none bg-white w-full placeholder:text-black text-black"
          />
        </div>
      </div>

      <div class="flex items-center gap-10 ">
        <a href="/" class="flex flex-col items-center">
          <i class="fa-regular fa-user text-white text-2xl"></i>
          <span class="hidden xl:block text-[Kirish] text-white text-xl"
            >Kirish</span
          >
        </a>
        <a href="/" class="flex flex-col items-center">
          <i class="fa-regular fa-heart text-white text-2xl"></i>
          <span class="hidden xl:block text-[Kirish] text-white text-xl"
            >Sevimlilar
          </span>
        </a>
        <a href="/" class="flex flex-col items-center">
          <i class="fa-solid fa-cart-shopping text-white text-2xl"></i>
          <span class="hidden xl:block text-[Kirish] text-white text-xl"
            >Savatcha</span
          >
        </a>
      </div>
    </div>

    <div v-if="!isScrolled" class="hidden lg:block">
      <ul class="container text-[16px] flex items-center justify-between font-bold text-white">
        <li>
          <a href="promotions" class="flex items-center gap-1 pb-4">
            <i class="fa-solid fa-fire text-red-500"></i>
            Aksiyalar
          </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4">
            <i class="fa-solid fa-bolt text-red-500"></i>
            1+1
          </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4">
            Havo sovutgichlar
          </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4"> Smartfonlar </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4"> Muzlatgichlar </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4"> Changyutgichlar </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4"> Noutbuklar </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4"> Televizorlar </a>
        </li>

        <li>
          <a href="#" class="flex items-center gap-1 pb-4">
            Barcha kategoriyalar
          </a>
        </li>
      </ul>
    </div>
  </div>
    <!-- Responsive navbar -->
  <div :class="['navbar bg-[#FF6600] block lg:hidden', { 'scrolled-navbar z-50': isScrolled }]">
    <div class="bg-[#FF6600] text-[#333] text-[12px]">
      <div
        class="container flex items-center justify-between "
        v-if="!isScrolled"
      >
      <a href="/" class="pt-7 max-w-[80px] block -mt-4 md:hidden">
        <img class="w-full"
          src="../assets/logo/logo.jpg"
          alt=""
        />
      </a>
          <div
            
            class="relative inline-block"
          >
            <div class="flex items-center gap-5">
              <a href="/" class="flex items-center gap-1 text-[16px]" @mouseenter="toggleDropdown(true)"
              @mouseleave="toggleDropdown(false)">
              <i class="fa-solid fa-location-dot"></i>
              Tashkent
            </a>
            <select class="text-black bg-none">
            <option>UZ</option>
            <option>RU</option>
            </select>
            </div>
            <div
              v-if="isDropdownOpen"
              class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700"
            >
            <h3 class="ml-4 mt-3 text-xl text-black">Shaharni tanlang</h3>
            <div class="flex items-center">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                    >Toshkent</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Buxoro</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Nukus</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Samarkand</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Qarshi</a
                  >
                </li>
              </ul>
            </div>

              
            </div>
          </div>
          <a href="/" class="py-7 w-[120px] h-[10px]   hidden md:block ">
        <img class="hidden"
          src="../assets/logo/logo.jpg"
          alt=""
        />
      </a>


        <div class="hidden text-[16px] md:block">
          <span class="contact">Aloqa markazi : +99871 209 99 44</span>
        </div>
      </div>
    </div>

    <div class="py-4">
      <div class="container flex items-center gap-5">
        <div
          class=" bg-white border-2 rounded-xl w-full  px-4 py-2 flex items-center h-[44px] gap-2"
        >
          <i class="fa-solid fa-magnifying-glass mt-1"></i>
          <input
            type="text"
            placeholder="Qidirish"
            class="outline-none bg-white w-full placeholder:text-black text-black"
          />
        </div>
        <button class="btn-burger flex items-center justify-center w-[40px] h-[40px] ml-[8px] rounded-lg border-[#e3e3e3] border ">
          <i class="fa-solid fa-bars"></i>
        </button>
    </div>
    </div>
  </div>
  <!-- <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center h-[80%] top-[178px]">
      <div class="bg-white w-full h-full container p-5 rounded-lg shadow-lg">
       
      </div>
    </div> -->

  </header>
  
</template>

<script>

export default {
 
  data() {
    return {
      isScrolled: false,
      isDropdownOpen: false,
      isModalOpen:false,
      isCatalog: false,

    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleDropdown(status) {
      this.isDropdownOpen = status;
    },
    toggleModal(){
      this.isModalOpen = !this.isModalOpen
    },
    togglePage() {
      // isCatalog qiymatiga qarab router'ga yo'naltirish
      if (this.isCatalog) {
        this.$router.push('/'); // home sahifasiga o'tish
      } else {
        this.$router.push('/catalog'); // catalog sahifasiga o'tish
      }
      // isCatalog holatini teskari qilish
      this.isCatalog = !this.isCatalog;
    },
   
  },
};
</script>

<style scoped>
.scrolled-navbar .categories {
  @apply hidden;
}

.scrolled-navbar {
  @apply fixed top-0 left-0 w-full bg-[#FF6600] shadow-lg z-50;
}
.btn-burger{
  background: linear-gradient(0deg, #fff, #fff), #e7e7e7;
}
</style>