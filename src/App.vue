<style src="./assets/style.css">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Poppins:ital,wght@0,100;0,300;0,400;0,700;1,700&display=swap');
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <div id="tentang" class="overflow-hidden" >
    <div id="Container-Promo" class="flex flex-col font-inter	bg-promo bg-cover ">
      
      <!-- Navbar  Start-->
      <div id="navbar" 
      class="flex justify-between px-6 bg-utama/80 fixed top-0 left-0 right-0 shadow-md fixed w-full text-white transition-transform duration-300 transform" 
      :class="{ '-translate-y-full': !isScrolled, 'translate-y-0': isScrolled }"
      style="z-index: 1000;">

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

    <!-- PROMO/Carousel -->
    <!-- <div id="Promo" class="pt-20">
      <CarouselComponent v-slot="{currentSlide}">
        <slideComponent v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index+1" class="shadow-2xl">
            <img :src="require(`./assets/Promo/${slide}.jpg`)" class="h-[400px] w-[300px] bg-cover rounded-xl shadow-2xl" alt="">
          </div>
        </slideComponent>
      </CarouselComponent>
    </div> -->
    <div>
      <transition name="slide">
        <PromoComponent />
      </transition>
    </div>

    <!-- PRODUK -->
    <div id="Produk" class="pt-20">
      <ProductComponent />
    </div>

    <!-- Artikel -->
    <div id="Artikel" class="pt-20">
      <ArtikelComponent />
    </div>

    <!-- Footer -->
    <div>
      <FooterComponent />
    </div>
  </div>
</template>

<script> 
import ProductComponent from "./components/ProdukComponent.vue"
import ArtikelComponent from "./components/ArtikelComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
import PromoComponent from "./components/PromoComponent.vue"


export default {
  name: "App",
  components:{
        ProductComponent,
        ArtikelComponent,
        FooterComponent,
        PromoComponent
    },
  data() {
    return {
      isScrolled : true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
    handleScroll(){
      const currentScrollY = window.scrollY;
         if (currentScrollY > this.prevScrollY) {
      // Scroll ke bawah
           this.isScrolled = false;
         } else {
      // Scroll ke atas
            this.isScrolled =true;
          }
          this.prevScrollY = currentScrollY;
    },
  },
};
</script>



