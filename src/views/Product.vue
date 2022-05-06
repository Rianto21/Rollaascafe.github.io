<template>
    <div id="product">
        <Navbar />
        <div class="bg-gray-100 w-full py-10 md:py-24 px-0 md:px-24 flex flex-col gap-10 md:gap-16 items-center min-h-screen">
            <h1 class="text-3xl md:text-4xl font-bold">Produk Dijual Langsung</h1>
            <div class="flex gap-6 md:gap-12 flex-wrap justify-center">
                <CardProduct :product="product" v-for="product in products" :key="product.id" />
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';

export default {
    name: 'Product',
    components: {
        Navbar,
        CardProduct,
    },
    data() {
        return {
            products: [],
            jobs: []
        }
    },
    methods: {
        setProduct(data) {
            this.products = data
        },
        setJobs(data) {
            this.jobs = data
        }
    },
    mounted() {
        axios.get('/products')
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("Error : ", error))
    }
}

</script>