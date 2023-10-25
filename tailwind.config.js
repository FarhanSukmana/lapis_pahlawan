/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'utama': '#675d50',
        'tulisan' :'#a67c00',
        'abu':'#d9d9d9',
        'kuning':'#ffe462'
      },
      fontFamily:{
        'inter':['Inter','sans-serif'],
        'poppins':['Poppins', 'ans-serif'],
      },
      backgroundImage:{
        'promo': "url('/src/assets/Promo.jpg')",
        'lapis_reguler':"url('/src/assets/Produk/Lapis_reguler.jpg')",
        'lapis_mini':"url('/src/assets/Produk/Lapis_mini.jpg')",
        'tart':"url('/src/assets/Produk/Tart.jpg')",
        'Artikel_1':"url('/src/assets/Artikel/A1.jpeg')",
      },
    },
  },
  plugins: [],
}
