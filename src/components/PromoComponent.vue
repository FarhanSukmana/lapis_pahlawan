<template>
    <div>
      <!-- Promo Start -->
      <div id="Promo" class="flex flex-col w-full h-full m-0 p-6 pt-24">
        <!-- Judul  -->
        <div class>
          <h1 class="text-utama text-3xl font-bold">Promo Terbaru</h1>
          <div class="w-60 h-2 bg-abu"><div class="h-2 w-1/4 bg-utama"></div></div>
        </div>
  
        <!-- Slider Image -->
        <div class="flex flex-col items-center pt-12">
          <!-- Gambar -->
          <div class="flex items-center justify-center gap-x-8">
            <!-- prev btn -->
            <button class="p-1 bg-abu active:bg-utama active:text-white text-black items-center justify-center text-xl rounded-full w-8 h-8" @click="prev">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </button>
  
            <!-- Image Promo -->
            <!-- Carousel -->
            <div class="overflow-hidden  items-center flex justify-center">
              <div class="flex items-center justify-center">
                  <div v-for="(slide, index) in carouselSlides" :key="index" class="flex items-center justify-center">
                    <div v-show="currentSlide === index + 1" class="shadow-xl flex items-center justify-center">
                      <img :src="require(`../assets/Promo/${slide}.jpg`)" alt="" 
                      class="bg-cover rounded-xl w-[300px] h-[400px] shadow-2xl">
                    </div>
                </div>
              </div>
            </div>
  
            <!-- BTN NEXT -->
            <button class="bg-abu active:bg-utama active:text-white text-black items-center justify-center text-xl flex rounded-full w-8 h-8" @click="next">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
  
          <!-- Dots -->
          <div class="flex item-center justify-center gap-x-4 py-4">
            <button
              v-for="number in 4"
              :key="'slider2-dot-' + number"
              class="h-4 rounded-full transition-all duration-300"
              :class="{
                'bg-abu w-4': currentSlide !== number,
                'bg-utama w-12': currentSlide === number,
              }"
              @click="currentSlide = number"
            ></button>
          </div>
        </div>
      </div>
      <!-- Promo End -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PromoComponent',
    data() {
      return {
        currentSlide: 1,
        slides: [
          '../assets/Promo/1.png',
          '../assets/Promo/2.png',
          '../assets/Promo/3.png',
          '../assets/Promo/4.png',
        ],
      };
    },
    setup() {
      const carouselSlides = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
  
      return { carouselSlides };
    },
    methods: {
      prev() {
        if (this.currentSlide > 1) {
          this.currentSlide--;
        } else {
          this.currentSlide = 4;
        }
      },
      next() {
        if (this.currentSlide === 4) {
          this.currentSlide = 1;
        } else {
          this.currentSlide++;
        }
      },
    },
  };
  </script>  