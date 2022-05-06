<template>
    <div id="card" class="w-44 md:w-64 bg-white h-[266px] md:h-80 rounded-xl shadow-md overflow-hidden">
        <router-link :to="'/product/'+product._id">
            <div class="w-full h-52 overflow-hidden flex items-center">
                <img :src="product.gambar" alt="Foto Product">
            </div>
            <div class="p-1 md:p-2 flex flex-col gap-2 items-center">
                <h3 class="text-lg md:text-xl font-semibold">{{ product.nama_barang }}</h3>
                <p class="text-[10px] md:text-xs text-center">{{ product.deskripsi }}</p>
                <h3 class="text:lg md:text-xl font-bold">Rp. {{ product.harga }}</h3>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CardProduct',
    components: {

    },
    props: ['product']
}
</script>