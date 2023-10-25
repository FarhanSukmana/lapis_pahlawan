<style src="./assets/style.css">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,700&display=swap');
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <div id="tentang" class="overflow-hidden" >
    <div id="Container-Promo" class="flex flex-col font-inter	bg-promo bg-cover">
      
      <!-- Navbar  Start-->
      <div id="navbar" class="flex justify-between px-6 bg-utama/80 fixed top-0 left-0 right-0 shadow-md" style="z-index: 1000;">

        <!-- Gambar -->
        <div class="top-0 left-0 p-0 -m-4 px-6" >
          <a href="#tentang">
            <img src="./assets/lapis_pahlawan.png" alt="" class=" w-32 h-32 m-0" >
          </a>
        </div>

        <!-- Search Bar -->
        <div class="py-8  ">
          <input type="text" placeholder="Cari..." class="rounded-full px-2 focus:outline-none" >
        </div>
        
        <!-- Menu -->
        <div class=" py-8 text-white ml-auto font-bold">
          <a href="#tentang" class="font-inter px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-300" >Tentang</a>
          <a href="#Artikel" class="px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-300" >Artikel</a>
          <a href="#Produk" class="px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-300">Produk</a>
          <a href="#Promo" class="px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-300">Promo</a>
          <a href="" class="px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-300">Toko</a>
          <a href="" class="px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-300">FAQ</a>
          <a href="" class="px-4 hover:text-tulisan hover:underline underline-offset-8  transition duration-00">Testimoni</a>
        </div>
      </div>

      <!-- BG -->
      <div id="tentang" class="mt-24 flex bg-promo bg-cover bg-center bg-no-repeat mt-20 brightness-75">
        <div class="text-white p-24 text-4xl font-extrabold ">
          <h1>Lapis Pahlawan</h1><br>
          <h2>Lapis Kukus Pahlawan <br>adalah kue lapis khas <br>Surabaya yang memiliki <br>cita rasa khas.</h2>
          <button type="button" class="rounded-full py-2 px-8 text-base ml-20 m-10 transition ease-in delay-100 bg-tulisan hover:-translate-y-1 hover:scale-110 duration-300">
            Baca lebih lanjut
          </button>
        </div>
      </div>
    </div>
    <!-- Navbar End -->

    <!-- Promo Start -->
    <div id="Promo" class="flex flex-col w-full h-full m-0 p-6 pt-24">
      <!--Judul  -->
      <div class>
        <h1 class="text-utama text-3xl font-bold">Promo Terbaru</h1>
        <div class="w-60 h-2 bg-abu"><div class="h-2 w-1/4 bg-utama"></div></div>
      </div>

      <!-- Slider Image -->
      <div class="flex flex-col items-center pt-12">
        <!-- Gambar -->
        <div class="flex items-center justify-center gap-x-8">
          <!-- prev btn -->
          <button class="bg-gray-500 text-white text-xl rounded-full w-8 h-8" @click="prev">Prev</button>
          
          <!-- Image Promo -->
          <!-- Carousel -->
          <div class="flex flex-col items-center">
            <div class="relative w-64 h-64">
              <transition name="fade" mode="out-in">
                <img :key="currentSlide" src="./assets/Promo/1.jpg" alt="Promo Image" class="w-full h-full ">
              </transition>
            </div>

          </div>

          <button class="bg-abu text-white text-xl flex rounded-full w-8 h-8" @click="next"></button>
        </div>

        <!-- Dots -->
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
    </div>
    <!-- Promo End -->

    <!-- PRODUK -->
    <div id="Produk" class="pt-20">
      <ProductComponent />
    </div>

    <!-- Artikel -->
    <div id="Artikel" class="pt-20">
      <ArtikelComponent />
    </div>
  </div>
</template>

<script> 
import ProductComponent from "./components/ProdukComponent.vue"
import ArtikelComponent from "./components/ArtikelComponent.vue"


export default {
  name: "App",
  components:{
        ProductComponent,
        ArtikelComponent
    },
  data() {
    return {
      currentSlide: 1,
      slides: [
        "./assets/Promo/1.png",
        "./assets/Promo/2.png",
        "./assets/Promo/3.png",
        "./assets/Promo/4.png",
      ],
    };
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



