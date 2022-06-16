<template>
  <div id="home font-poppins">
    <Navbar />
    <Hero />
    <div class="flex gap-24 h-[500px] items-center justify-center">
      <div class="flex flex-col gap-6 items-center max-w-[330px]" data-aos="zoom-in" data-aos-duration="1500">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_xtswldbk.json" background="transparent"  speed="1"  style="width: 265.36px; height: 200px;" loop autoplay></lottie-player>
        <div class="flex flex-col gap-3 text-center">
          <h3 class="text-[32px] font-nunito text-green-700 font-extrabold">High Quality Coffee</h3>
          <p class="font-nunito font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga quidem officia assumenda.</p>
        </div>
      </div>
      <div class="flex flex-col gap-6 items-center max-w-[358px]" data-aos="zoom-in" data-aos-duration="1500">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_m69ixmfq.json" background="transparent"  speed="1"  style="width: 354.55px; height: 200px;" loop autoplay></lottie-player>
        <div class="flex flex-col gap-3 text-center">
          <h3 class="text-[32px] font-nunito text-green-700 font-extrabold">Easy to Order</h3>
          <p class="font-nunito font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga quidem officia assumenda.</p>
        </div>
      </div>
      <div class="flex flex-col gap-6 items-center max-w-[330px]" data-aos="zoom-in" data-aos-duration="1500">
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_io0um3os.json" background="transparent"  speed="1"  style="width: 300px; height: 200px;" loop autoplay></lottie-player>
        <div class="flex flex-col gap-3 text-center">
          <h3 class="text-[32px] font-nunito text-green-700 font-extrabold">Fastest Delivery</h3>
          <p class="font-nunito font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga quidem officia assumenda.</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 w-full py-20 px-24 flex flex-col gap-20 items-center">
      <h2 class="text-5xl font-nunitosans font-extrabold text-green-700">Produk Dijual Langsung</h2>
      <div class="flex gap-16 flex-wrap justify-center">
        <CardProduct :product="product" v-for="product in products.slice(0,6)" :key="product.id" data-aos="zoom-in" data-aos-duration="1500"/>
      </div>
      <router-link to="/product" class="font-nunitosans font-extrabold text-green-700 text-2xl flex gap-6 border-2 border-green-700 rounded-lg px-8 py-4 hover:bg-green-700 hover:text-white">
        <span>Selengkapnya</span>
        <i class="bi bi-arrow-right"></i>
      </router-link>
      <h2 class="text-5xl font-nunitosans font-extrabold text-green-700">Produk Dijual Online</h2>
      <div class="flex gap-16 flex-wrap justify-center">
        <CardProduct :product="product" v-for="product in products.slice(0,6)" :key="product.id" data-aos="zoom-in" data-aos-duration="1500"/>
      </div>
      <router-link to="/product" class="font-nunitosans font-extrabold text-green-700 text-2xl flex gap-6 border-2 border-green-700 rounded-lg px-8 py-4 hover:bg-green-700 hover:text-white">
        <span>Selengkapnya</span>
        <i class="bi bi-arrow-right"></i>
      </router-link>
    </div>
    <div class="h-[640px] flex flex-col items-center py-[72px] justify-between">
      <h2 class="text-5xl font-nunitosans font-extrabold text-green-700">What Our Customer Says?</h2>
      <div class="w-[600px] h-[250px] rounded-3xl bg-white shadow-xl flex flex-col justify-center gap-6 pr-16 pl-28 relative">
        <h3 class="font-nunitosans text-3xl font-extrabold text-green-700">Kukuh satrio</h3>
        <p class="font-poppins font-medium text-green-700">Lorem ipsum dolor sit amet consectetur an  adipisicing elit. Hic fuga quidem officia dima assumenda.</p>
        <img src="@/assets/img/profile/karyawan2.png" alt="avatar" class="w-[100px] h-[100px] rounded-full absolute left-[-50px] shadow-md">
      </div>
      <div class="flex gap-9">
        <div class="w-7 h-7 border-2 rounded-full border-gray-500"></div>
        <div class="w-7 h-7 rounded-full bg-green-700"></div>
        <div class="w-7 h-7 border-2 rounded-full border-gray-500"></div>
        <div class="w-7 h-7 border-2 rounded-full border-gray-500"></div>
        <div class="w-7 h-7 border-2 rounded-full border-gray-500"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import CardProduct from '@/components/CardProduct.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
    Footer
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
          sessionStorage.removeItem("user")
          sessionStorage.removeItem("nama")
          this.session = sessionStorage.getItem("login")
        }
    },
    mounted() {
      axios.get('https://rollaascafeapinodejs.herokuapp.com/products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Error : ", error))
      AOS.init()
    }
};
</script>
