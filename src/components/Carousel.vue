<template>
  <div>
    <div class="mb-8 p-6">
      <h1 class="text-utama text-3xl font-bold">Promo Terbaru</h1>
      <div class="w-60 h-2 bg-abu"><div class="h-2 w-1/4 bg-utama"></div></div>
    </div>

    <div class="flex items-center justify-center">
      <!-- BTN PREV -->
      <div class="m-2">
        <button class="p-1 bg-abu active:bg-utama active:text-white text-black items-center justify-center text-xl rounded-full w-8 h-8"
          @click="prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </button>
      </div>
      <slot :currentSlide="currentSlide" />
  
      <!-- Button NEXT-->
      
        <div class="m-2">
          <button class="bg-abu active:bg-utama active:text-white text-black items-center justify-center text-xl flex rounded-full w-8 h-8" 
            @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>
         </button>
        </div>
  
    </div>
    <div class="flex item-center justify-center gap-x-4 py-4">
        <button
        v-for="number in 4" :key="'slider2-dot-' + number"
        class="h-4 rounded-full "
        :class="{
          'bg-abu w-4': currentSlide !== number,
          'bg-utama w-12': currentSlide === number,
        }"
        @click="currentSlide = number">
        
        </button>
      </div>

  </div>
</template>

<script>
import {ref} from "vue";
export default {
  name:'CarouselComponent',
  setup(){
    const currentSlide = ref(2);
    return {currentSlide};
  },
};
</script>

<style>

</style>