<template>
    <div id="card" class="w-44 md:w-[300px] bg-white h-[266px] md:h-[405px] rounded-3xl shadow-md overflow-hidden relative">
        <router-link :to="'/product/'+product._id">
            <div class="w-full overflow-hidden flex items-center">
                <img src="@/assets/foto-product.png" alt="Foto Product">
            </div>
            <div class="w-full h-[200px] bg-green-700 rounded-3xl absolute bottom-0 text-white font-nunitosans px-8 py-4 flex flex-col justify-between drop-shadow-lg">
                <div class="flex justify-between items-center">
                    <div class="flex gap-1">
                        <i class="bi bi-star-fill text-yellow-400 text-sm"></i>
                        <i class="bi bi-star-fill text-yellow-400 text-sm"></i>
                        <i class="bi bi-star-fill text-yellow-400 text-sm"></i>
                        <i class="bi bi-star-fill text-yellow-400 text-sm"></i>
                        <i class="bi bi-star text-gray-300 text-sm"></i>
                        <p class="text-sm ml-1">4.5</p>
                    </div>
                    <p class="font-bold">Rp 12.000</p>
                </div>
                <h4 class="text-[22px] text-center font-bold">Kopi Rollas Enak banget Loh </h4>
                <p class="font-poppins text-xs text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga quidem officia assumenda.</p>
            </div>
        </router-link>
        <router-link :to="'/dashboard/product/edit/'+product._id" class="absolute top-4 right-4 text-xl" v-if="edit">
            <i class="bi bi-pencil-square text-white"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CardProduct',
    components: {

    },
    props: ['product', 'edit']
}
</script>