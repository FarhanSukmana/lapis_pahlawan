<template>
  <div class="flex flex-col h-screen">
    <div class="p-6">
      <h1 class="text-utama text-3xl font-bold">Produk Kami</h1>
      <div class="w-60 h-2 bg-abu"><div class="h-2 w-2/4 bg-utama"></div></div>
    </div>
    
    <!-- Produk -->
    <div class="flex p-6 h-screen">
      <!-- Lapis Reguler -->
      <div class="w-2/5 h-full rounded-lg bg-lapis_reguler bg-cover flex flex-col">
        <div class="flex items-center justify-center h-full">
          <h1 class="text-center mt-auto font-bold text-white text-2xl pb-2">LAPIS REGULER</h1>
        </div>
      </div>
      <!-- Lapis mini -->
      <div class="w-1/5 h-full mx-6">
        <div class="w-full h-1/2 bg-tart mb-2 rounded-lg bg-cover ">
          <h1 class="font-bold text-white text-2xl p-2">Almond Tart</h1>
        </div>
        <div class="w-full h-1/2 bg-lapis_mini rounded-lg bg-cover">
          <h1 class="font-bold text-white text-2xl p-2">Lapis Mini</h1>
        </div>
      </div>
      <!-- Penjelasan -->
      <div class="w-2/5 h-full bg-kuning rounded-lg flex flex-col">
        <!-- Penjelasan 1 -->
        <div class="text-white font-bold m-4 h-auto">
          <h1 class="text-2xl">Lapis Reguler</h1>
          <p class="text-justify pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab non maxime quos modi dolores fugiat sit iusto laudantium atque iste quidem temporibus eveniet, vitae animi ullam doloremque quia assumenda?</p>
        </div>
        <!-- Penjelasan 2 -->
        <div class="text-white font-bold m-4 h-auto">
          <h1 class="text-2xl">Almond Tart</h1>
          <p class="text-justify pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis esse blanditiis tenetur maiores voluptatum autem.</p>
        </div>
        <!-- Penjelasan 2 -->
        <div class="text-white font-bold m-4 h-auto">
          <h1 class="text-2xl">Lapis Mini</h1>
          <p class="text-justify pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nihil quos, aliquid placeat libero repudiandae saepe ex repellendus voluptate officia?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'ProdukComponent'
}
</script>

<style>

</style>