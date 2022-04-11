<template>
    <Navbar />
    <div class="bg-gray-100 w-full py-24 px-24 flex flex-col gap-16 items-center">
        <h1 class=" text-4xl font-bold">Produk Dijual Langsung</h1>
        <div class="flex gap-12 flex-wrap justify-center">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import CardProduct from '@/components/CardProduct.vue';

export default {
    name: 'Product',
    components: {
        Navbar,
        CardProduct,
    }
}
</script>