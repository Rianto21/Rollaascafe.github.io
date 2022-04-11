<template>
  <Navbar class="text-white"/>
  <Hero />
  <div class="bg-gray-100 w-full py-20 px-24 flex flex-col gap-16 items-center">
    <h1 class=" text-4xl font-bold">Produk Dijual Langsung</h1>
    <div class="flex gap-12">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
    <h1 class="text-4xl font-bold">Produk Dijual Online</h1>
    <div class="flex gap-12">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import CardProduct from '@/components/CardProduct.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
};
</script>
    CardProduct>
