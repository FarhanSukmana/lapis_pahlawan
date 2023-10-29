<template>
  <div class="flex flex-col h-screen ">
    <div class="p-6">
      <h1 class="text-utama text-3xl font-bold">Artikel</h1>
      <div class="w-60 h-2 bg-abu"><div class="h-2 w-3/4 bg-utama"></div></div>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-3 gap-4 items-center justify-center">
        <div v-for="(article, index) in articles" :key="index" class="pl-4 h-full">
          <div class="flex flex-col mx-2 w-[400px]">
            <div class="flex justify-center">
              <h1 class="text-2xl">{{ article.title }}</h1>
            </div>
            <div class="bg-Artikel_1 bg-cover m-2 h-[200px] rounded-3xl"></div>
            <div class="px-4 text-tulisan">
              <h2>Kategori : {{ article.category }}</h2>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'ArtikelComponent',
    data() {
        return {
        articles: [
            { title: "Judul-1", category: "A" },
            { title: "Judul-2", category: "A" },
            { title: "Judul-3", category: "A" },
            { title: "Judul-4", category: "A" },
            { title: "Judul-5", category: "A" },
            { title: "Judul-6", category: "A" },
            ],
        };
    },
}
</script>

<style>

</style>