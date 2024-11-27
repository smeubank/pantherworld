<template>
  <button 
    @click="triggerError"
    class="bg-red-700 hover:bg-red-500 focus:bg-emerald-700 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300 text-slate-50 py-2 px-4 rounded-lg text-xl transition font-display"
  >
    Error Button
  </button>
</template>

<script setup>
const triggerError = () => {
  throw new Error("Nuxt Button Error");
};
</script>