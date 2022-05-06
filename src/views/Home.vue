<template>
  <div id="home">

    <Navbar />
    <Hero />
    <div class="flex bg-green-700">
      <div class="w-1/3 bg-gray-100">
        {{ session }}
        <i class="bi bi-list" @click="remove"></i>
      </div>
    </div>
    <div class="bg-gray-100 w-full py-20 px-24 flex flex-col gap-16 items-center">
      <h1 class=" text-4xl font-bold">Produk Dijual Langsung</h1>
      <div class="flex gap-12">
        <CardProduct :product="product" v-for="product in products" :key="product.id" />
      </div>
      <h1 class="text-4xl font-bold">Produk Dijual Online</h1>
      <div class="flex gap-12">
        <CardProduct :product="product" v-for="product in products" :key="product.id" />
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
    data() {
        return {
            products: [],
            session: ''
        }
    },
    methods: {

        setProduct(data) {
          this.products = data
          this.session = sessionStorage.getItem("login")
          if(this.session != null ) {
            this.checkUser()
          }  
        },
        remove() {
          sessionStorage.removeItem("login")
          this.session = sessionStorage.getItem("login")
        }
    },
    mounted() {
        axios.get('/products')
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("Error : ", error))
    }
};
</script>
