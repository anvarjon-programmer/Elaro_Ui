<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-96">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          @click="closeModal"
        >
          ✕
        </button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Qo'shimcha styling kerak bo'lsa */
  </style>
  