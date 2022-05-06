<template>
    <div id="tambah-karyawan" class="font-poppins flex justify-center py-12 bg-base-200 bg-gray-100">
        <div class="md:w-1/3 px-10 py-10 bg-white shadow-lg rounded-xl">
            <h1 class="text-2xl font-semibold text-green-700 text-center mb-6">Edit Product</h1>
            <form class="flex flex-col gap-4" @submit.prevent>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="nama" class="text-xs text-gray-500">Nama product</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama Product..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" value="Rollaas Teh Bungkus">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="username" class="text-xs text-gray-500">Harga</label>
                    <input type="text" name="username" placeholder="Masukkan Harga ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" value="10.000">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="email" class="text-xs text-gray-500">Stok</label>
                    <input type="email" name="email" placeholder="Masukkan Stok ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" value="30">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="description" class="text-xs text-gray-500">Deskripsi</label>
                    <textarea name="description" rows="5" placeholder="Masukkan Deskripsi ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" value="Dua Shot Espresso Dengan Susu Segar Dan Tambahan Coffee Jelly Tanpa Gula."></textarea>
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md" @click="tambahuser">Edit Product</button>
                </div>
            </form>
            <div v-if="oke" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
            <router-link to="/dashboard" v-if="oke" class="fixed inset-0 flex justify-center items-center w-full h-full" @click="oke = false">
                <div class="w-[420px] h-[420px] bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 justify-center">
                    <i class="bi bi-check-circle text-9xl text-green-700"></i>
                    <h3 class="text-2xl font-semibold text-center">Data Berhasil Ditambahkan</h3>
                </div>
            </router-link>
            <div v-if="loading" class="fixed inset-0 bg-white overflow-y-auto h-full w-full flex justify-center items-center text-2xl font-bold">Loading...</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TambahKaryawan',
    components: {
    },
    data() {
        return {
            pass: false,
            user: {},
            oke: false,
            loading: false,
        }
    },
    methods: {
        tambahuser() {
            this.user.user_role = "useronly",
            this.user.status_aktif = true,
            this.loading = true,
            axios.post('/users', this.user)
            .then(() => this.loading =  false, this.oke = true)
            .catch((error) => console.log("Error : ", error))
        }
    }
}
</script>

<style>

</style>