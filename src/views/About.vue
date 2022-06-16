<template>
  <div id="about">
    <Navbar />
    <div id="about" class="font-poppins flex flex-col items-center py-10 md:py-20 gap-4 bg-base-200 px-6 md:px-24">
      <div class="flex flex-col md:flex-row gap-8 md:gap-4 md:h-96">
        <div class="bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] md:w-2/5 md:absolute right-0 h-48 md:h-96 flex items-center px-8 rounded-xl md:rounded-l-3xl">
          <div class="relative h-40 md:h-[300px] flex justify-center">
            <img src="../assets/daun.png" alt="Gambar Rollaas Cafe" class="mix-blend-difference opacity-50 h-full">
            <img src="../assets/kopi.png" alt="Gambar Rollaas Cafe" class="absolute top-0 h-full m-auto">
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex flex-col items-center md:items-start gap-8 md:w-1/2">
            <h1 class="text-3xl md:text-4xl font-bold">Tentang Rollaas Cafe</h1>
            <p class="text-sm md:text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. In non dignissimos cupiditate similique rem vero sequi deserunt quasi iure assumenda nesciunt, placeat harum eum tempore iusto alias labore eos eaque amet, possimus enim. Ullam blanditiis eius iure, unde dolores itaque odio amet ratione eum voluptatibus ea nobis debitis distinctio quae soluta harum asperiores pariatur quibusdam tempore? Quasi exercitationem dolorem architecto velit natus iure asperiores illo quos! Tenetur totam minima neque quibusdam vero excepturi labore possimus. Nulla qui vitae architecto harum.</p>
          </div>
        </div>
      </div>
    </div>
    <img :src="previewimage" alt="gambar">
    <input type="file" name="fotoproduct" id="fotoproduct" @change="uploadgambar">
  </div>

</template>

<script>

import Navbar from '@/components/Navbar.vue';
import { saveAs } from 'file-saver';

export default {
  name: 'About',
  components: {
    Navbar,
  },
  data() {
    return {
      previewimage: "https://drive.google.com/uc?export=view&id=1xUmdedtXw3YhFgyMQbUsqUjhzcNYI3ww"
    }
  },
  methods: {
    uploadgambar(event) {
      // console.log(event.target.files[0])
      this.previewimage = URL.createObjectURL(event.target.files[0])
      console.log(URL.createObjectURL(event.target.files[0]))
      saveAs(URL.createObjectURL(event.target.files[0]), "image.png");

    }
  }
}
</script>
