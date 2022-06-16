<template>
    <div id="keranjang">
        <Navbar />
        <div v-if="load" class="px-32 py-16 w-full gap-8 flex flex-col items-center font-poppins">
            <div class="text-4xl font-bold text-green-700">Isi Keranjang</div>
            <table class="flex flex-col gap-4 w-full">
                <div v-for="cart in carts" :key="cart.id">
                    <tr class="border-2 border-green-700 py-4 px-6 rounded-lg flex justify-between items-center">
                        <!-- v-if="user.user_role == 'useronly'" -->
                        <td class="flex gap-4 items-center">
                            <!-- <div class="justify-center"><img src="../assets/img/profile/karyawan2.png" alt="Foto Profile" class="rounded-full w-12"></div> -->
                            <div class="text-xl font-medium">{{ cart.nama_barang }} : {{ cart.total_harga }}</div>
                        </td>
                        <td class="flex gap-8 items-center">
                            <div class="flex gap-3 items-center">
                                <div class="bg-green-700 text-white rounded-md py-2 px-4 text-lg" :class="[cart.jumlah_barang > 1 ? 'cursor-pointer' : 'cursor-default']" @click="cart.jumlah_barang > 1 ? (cart.jumlah_barang--, updateKeranjang()) : cart.jumlah_barang = cart.jumlah_barang, updateKeranjang()">-</div>
                                <div class="text-xl text-green-700 font-semibold">{{cart.jumlah_barang}}</div>
                                <div class="bg-green-700 text-white rounded-md py-2 px-4 text-lg cursor-pointer" @click="cart.total_harga += cart.total_harga/cart.jumlah_barang, cart.jumlah_barang++, updateKeranjang()">+</div>
                            </div>
                            <div class="text-xl flex gap-3">
                                <i class="bi bi-trash text-red-700 cursor-pointer"></i>
                            </div>
                        </td>
                    </tr>
                </div>
            </table>
            <div class="w-full flex justify-end text-2xl font-semibold gap-4 items-center">Total Harga : <span class="border-2 rounded-md border-green-500 text-green-500 py-2 px-6">{{ total_harga }}</span></div>
            <div class="w-full flex justify-end">
                <router-link to="/checkout" class="bg-green-700 rounded-md px-10 py-4 text-white text-xl font-semibold">Checkout</router-link>
            </div>
        </div>
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
    data() {
        return {
            session: sessionStorage.getItem("login"),
            carts: [],
            total_harga: 0,
            load: false
        }
    },
    methods: {
        updateKeranjang() {
            let mycarts = []
            this.carts.forEach((el) => {
                mycarts.push({
                    "id_barang": el.id_barang,
                    "jumlah_barang": el.jumlah_barang,
                    "total_harga": el.total_harga
                })
            })
            console.log(mycarts)
            console.log(this.carts)
            axios.patch('https://rollaascafeapinodejs.herokuapp.com/users/cart/'+this.session, {"keranjang_belanja":mycarts})
            .then(() => console.log("ok"))
            .catch((error) => console.log("Error : ", error))
        },
        getProducts(data, index) {
            this.carts[index].nama_barang = data
        },
        getKeranjang(data) {
            this.carts = data
            this.carts.forEach((element, i) => {
                axios.get('https://rollaascafeapinodejs.herokuapp.com/products/'+element.id_barang)
                .then((response) => this.getProducts(response.data.nama_barang, i))
                .catch((error) => console.log("Error : ", error))
                this.total_harga += this.carts[i].total_harga
            })
            this.load = true
        },
        setkeranjang() {
            axios.get('https://rollaascafeapinodejs.herokuapp.com/users/cart/'+this.session)
            .then((response) => this.getKeranjang(response.data))
            .catch((error) => console.log("Error : ", error))
            console.log(this.carts)
        }
    },
    mounted() {
        this.setkeranjang()
    }
}
</script>