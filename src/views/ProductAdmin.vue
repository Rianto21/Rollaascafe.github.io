<template>
    <div id="product-admin" class="flex font-poppins">
        <Sidebar />
        <div class="ml-64 px-24 py-16 w-full gap-8 flex flex-col items-center bg">
            <div class="w-full border-2 border-green-700 rounded-md py-4 px-8 flex gap-4">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Cari product..." class="w-full outline-none" v-model="inputproduct" @keyup="cariProduct">
            </div>
            <div class="flex justify-between items-center w-full">
                <h1 class="text-3xl font-bold">Daftar Product</h1>
                <router-link to="/dashboard/product/tambah" class="bg-green-700 text-white py-3 px-4 rounded-md"><i class="bi bi-plus-circle mr-1"></i> Tambah Product</router-link>
            </div>
            <div class="flex gap-32 md:justify-center flex-wrap justify-center w-full">
                <CardProduct :product="product" :edit="true" v-for="product in products" :key="product.id" />
            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';

export default {
    name: 'productAdmin',
    components: {
        Sidebar,
        CardProduct
    },
    data() {
        return {
            products: [],
            inputproduct: ''
        }
    },
    methods: {
        cariProduct() {
            if(!/[a-zA-Z]/.test(this.inputproduct)) {
                this.tampilProduct()
            } else {
                axios.get('/products/nama/'+this.inputproduct)
                .then((response) => this.setProducts(response.data))
                .catch((error) => console.log("Error : ", error))
            }
        },
        setProducts(data) {
            this.products = data
        },
        tampilProduct() {
            axios.get('https://rollaascafeapinodejs.herokuapp.com/products')
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log("Error : ", error))
        }
    },
    mounted() {
        this.tampilProduct()
    }
}
</script>