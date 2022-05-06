<template>
    <Navbar />
    <div id="keranjang" class="px-32 py-16 w-full gap-8 flex flex-col items-center">
        <div class="text-4xl font-bold text-green-700">Isi Keranjang</div>
        <table class="flex flex-col gap-4 w-full">
            <div>
                <tr class="border-2 border-green-700 py-4 px-6 rounded-lg flex justify-between items-center">
                    <!-- v-if="user.user_role == 'useronly'" -->
                    <td class="flex gap-4 items-center">
                        <!-- <div class="justify-center"><img src="../assets/img/profile/karyawan2.png" alt="Foto Profile" class="rounded-full w-12"></div> -->
                        <div class="text-xl font-medium">Rollaas Teh Bungkus : 20.000</div>
                    </td>
                    <td class="flex gap-8 items-center">
                        <div class="flex gap-3 items-center">
                            <div class="bg-green-700 text-white rounded-md py-2 px-4 text-lg">-</div>
                            <div class="text-xl text-green-700 font-semibold">2</div>
                            <div class="bg-green-700 text-white rounded-md py-2 px-4 text-lg">+</div>
                        </div>
                        <div class="text-xl flex gap-3">
                            <i class="bi bi-trash text-red-700 cursor-pointer"></i>
                        </div>
                    </td>
                </tr>
            </div>
        </table>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
    name: 'Keranjang',
    components: {
        Navbar
    },
    methods: {
        hargaProduct() {

        },
        getKeranjang() {
            axios.get('https://rollaascafeapinodejs.herokuapp.com/products')
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log("Error : ", error))
        }
    }
}
</script>