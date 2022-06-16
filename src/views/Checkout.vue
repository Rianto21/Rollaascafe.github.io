<template>
    <div id="checkout" class="min-h-screen flex flex-col justify-between gap-24">
        <Navbar />
        <div class="w-full flex justify-center font-poppins gap-[72px]">
            <div class="flex flex-col gap-16">
                <div class="bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] min-h-[360px] w-[640px] rounded-3xl text-white p-10 flex flex-col justify-center gap-4 shadow-xl">
                    <div v-for="cart in carts" :key="cart.id" class="flex flex-col gap-4 w-full">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="text-lg font-semibold">{{cart.nama_barang}}</h4>
                                <p class="text-xs font-medium">Quantity : {{cart.jumlah_barang}}</p>
                            </div>
                            <h3 class="text-[22px] font-semibold">Rp {{cart.total_harga}}</h3>
                        </div>
                        <div class="h-[2px] w-full bg-white rounded-full"></div>
                    </div>
                    <div class="w-full flex justify-between items-center">
                        <h4 class="text-lg font-semibold">Total</h4>
                        <h3 class="text-2xl font-semibold">Rp {{total_harga}}</h3>
                    </div>
                </div>
                <div class="text-green-700 flex flex-col gap-8 w-[640px]">
                    <h2 class="text-[28px] font-semibold">Metode Pembayaran</h2>
                    <div class="w-full flex justify-between text-xl font-medium">
                        <div class="border-2 border-green-700 rounded-lg px-10 py-3 cursor-pointer" :class="[payment == 'alfamart' ? 'bg-green-700 text-white' : 'bg-transparent']" @click="payment = 'alfamart'">Alfamart</div>
                        <div class="border-2 border-green-700 rounded-lg px-10 py-3 cursor-pointer" :class="[payment == 'indomaret' ? 'bg-green-700 text-white' : 'bg-transparent']" @click="payment = 'indomaret'">Indomaret</div>
                        <div class="border-2 border-green-700 rounded-lg px-10 py-3 cursor-pointer" :class="[payment == 'transfer bank' ? 'bg-green-700 text-white' : 'bg-transparent']" @click="payment = 'transfer bank'">Transfer Bank</div>
                    </div>
                </div>
                <div class="text-green-700 flex flex-col gap-8 w-[640px]">
                    <h2 class="text-[28px] font-semibold">Metode Pengiriman</h2>
                    <div class="w-full flex justify-between text-xl font-medium">
                        <div class="border-2 border-green-700 rounded-lg px-10 py-3 cursor-pointer" :class="[delivery == 'gofood' ? 'bg-green-700 text-white' : 'bg-transparent']" @click="delivery = 'gofood'">GoFood</div>
                        <div class="border-2 border-green-700 rounded-lg px-10 py-3 cursor-pointer" :class="[delivery == 'grabfood' ? 'bg-green-700 text-white' : 'bg-transparent']" @click="delivery = 'grabfood'">GrabFood</div>
                        <div class="border-2 border-green-700 rounded-lg px-10 py-3 cursor-pointer" :class="[delivery == 'shopeefood' ? 'bg-green-700 text-white' : 'bg-transparent']" @click="delivery = 'shopeefood'">ShopeeFood</div>
                    </div>
                </div>
            </div>
            <form class="w-[420px] flex flex-col items-center gap-6">
                <h2 class="text-[28px] font-semibold text-green-700 w-full text-left">Masukan Data Diri</h2>
                <div class="font-semibold rounded-md w-full flex h-[54px] justify-center items-center cursor-pointer" :class="[datapribadi ? 'bg-green-700 text-white' : 'text-green-700 border-2 border-green-700']" @click="datapribadi = !datapribadi">Gunakan data pribadi</div>
                <p class="text-sm text-green-700 font-medium">atau masukan data diri</p>
                <div class="w-full border-2 border-green-700 rounded-md flex flex-col gap-[2px] px-6 py-3">
                    <label for="nama" class="text-xs text-green-700">Nama Penerima</label>
                    <input type="text" id="nama" name="nama" class="font-medium outline-none text-green-700" placeholder="Masukan nama lengkap ...">
                </div>
                <div class="w-full flex flex-col gap-2">  
                    <div class="w-full h-[54px] flex items-center justify-between px-6 text-green-700 font-medium rounded-md border-2 border-green-700 cursor-pointer" @click="daftarkota = !daftarkota">
                        <span>{{ !kota ? 'Pilih kota tersedia' : kota  }}</span>
                        <i class="bi bi-caret-left text-green-700 transition-transform" :class="[daftarkota ? '-rotate-90' : 'rotate-0']"></i>
                    </div>
                    <ul class="text-green-700 font-medium w-full bg-green-700 border-2 border-green-700 cursor-pointer transition-all ease-in-out" :class="[daftarkota ? 'block' : 'hidden']">
                        <li class="py-2 px-6 bg-white hover:bg-green-700 hover:text-white" :class="[kota == 'Surabaya' ? 'bg-green-700 text-white' : 'bg-white']" @click="kota = 'Surabaya', daftarkota = false">Surabaya</li>
                        <li class="py-2 px-6 bg-white hover:bg-green-700 hover:text-white" :class="[kota == 'Bandung' ? 'bg-green-700 text-white' : 'bg-white']" @click="kota = 'Bandung', daftarkota = false">Bandung</li>
                        <li class="py-2 px-6 bg-white hover:bg-green-700 hover:text-white" :class="[kota == 'Jember' ? 'bg-green-700 text-white' : 'bg-white']" @click="kota = 'Jember', daftarkota = false">Jember</li>
                    </ul>
                </div>
                <div class="w-full flex flex-col gap-2">  
                    <div class="w-full h-[54px] flex items-center justify-between px-6 text-green-700 font-medium rounded-md border-2 border-green-700 cursor-pointer" @click="daftarkecamatan = !daftarkecamatan">
                        <span>{{ !kecamatan ? 'Pilih kecamatan tersedia' : kecamatan  }}</span>
                        <i class="bi bi-caret-left text-green-700 transition-transform" :class="[daftarkecamatan ? '-rotate-90' : 'rotate-0']"></i>
                    </div>
                    <ul class="text-green-700 font-medium w-full bg-green-700 border-2 border-green-700 cursor-pointer transition-all ease-in-out" :class="[daftarkecamatan ? 'block' : 'hidden']">
                        <li class="py-2 px-6 bg-white hover:bg-green-700 hover:text-white" :class="[kecamatan == 'Surabaya' ? 'bg-green-700 text-white' : 'bg-white']" @click="kecamatan = 'Surabaya', daftarkecamatan = false">Surabaya</li>
                        <li class="py-2 px-6 bg-white hover:bg-green-700 hover:text-white" :class="[kecamatan == 'Bandung' ? 'bg-green-700 text-white' : 'bg-white']" @click="kecamatan = 'Bandung', daftarkecamatan = false">Bandung</li>
                        <li class="py-2 px-6 bg-white hover:bg-green-700 hover:text-white" :class="[kecamatan == 'Jember' ? 'bg-green-700 text-white' : 'bg-white']" @click="kecamatan = 'Jember', daftarkecamatan = false">Jember</li>
                    </ul>
                </div>
                <div class="w-full border-2 border-green-700 rounded-md flex flex-col gap-[2px] px-6 py-3 h-[120px]">
                    <label for="alamat" class="text-xs text-green-700">Alamat Lengkap</label>
                    <textarea name="alamat" id="alamat"  class="font-medium outline-none text-green-700" placeholder="Masukan alamat ..." cols="30" rows="5"></textarea>
                </div>
                <div class="w-full border-2 border-green-700 rounded-md flex flex-col gap-[2px] px-6 py-3">
                    <label for="nohp" class="text-xs text-green-700">Nomor HP</label>
                    <input type="text" id="nohp" name="nohp" class="font-medium outline-none text-green-700" placeholder="Masukan nomor handphone ...">
                </div>
                <button class="h-16 w-full bg-green-700 rounded-md flex justify-center items-center text-xl font-semibold text-white" @click="checkoutProduct">
                    <router-link to="/">Bayar Sekarang</router-link>
                </button>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';

export default {
    name: "Checkout",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            session: sessionStorage.getItem("login"),
            payment: '',
            delivery: '',
            kota: '',
            daftarkota: false,
            kecamatan: '',
            daftarkecamatan: false,
            datapribadi: false,
            carts: [],
            total_harga: 0
        }
    },
    methods: {
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
            // this.load = true
            console.log(this.carts)
        },
        checkoutProduct() {
            axios.get('https://rollaascafeapinodejs.herokuapp.com/users/cart/'+this.session)
            .then((response) => this.getKeranjang(response.data))
            .catch((error) => console.log("Error : ", error))
        }
    },
    mounted() {
        axios.get('https://rollaascafeapinodejs.herokuapp.com/users/cart/'+this.session)
        .then((response) => this.getKeranjang(response.data))
        .catch((error) => console.log("Error : ", error))
        // console.log(this.carts)
    }
}
</script>