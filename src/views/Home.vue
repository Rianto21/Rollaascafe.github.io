<template>
  <Navbar class="bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] text-white"/>
  <Hero />
  <div class="bg-white w-full h-60">sasdas</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
  },
};
</script>
