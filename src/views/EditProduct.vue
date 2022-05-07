<template>
    <div id="edit-produt" class="font-poppins flex justify-center py-12 bg-base-200 bg-gray-100 relative">
        <div class="md:w-1/3 px-10 py-10 bg-white shadow-lg rounded-xl">
            <h1 class="text-2xl font-semibold text-green-700 text-center mb-6">Edit Product</h1>
            <form class="flex flex-col gap-4" @submit.prevent>
                <label for="gambar" class="hidden flex-col items-center bg-white w-full py-10 gap-2 rounded-md border-[1px] border-gray-500 text-green-700 font-medium">
                    <i class="bi bi-upload text-6xl"></i>
                    <p class="text-lg">Upload Photo</p>
                </label>
                <input type="file" hidden name="gambar" id="gambar" placeholder="Masukkan Nama Product..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal">
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="gambar" class=" text-xs text-gray-500">Gambar product</label>
                    <input type="text" name="gambar" placeholder="Masukkan Gambar Product..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="product.gambar">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="nama" class=" text-xs text-gray-500">Nama product</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama Product..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="product.nama_barang">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="harga" class="text-xs text-gray-500">Harga</label>
                    <input type="text" name="harga" placeholder="Masukkan Harga ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model.number="product.harga">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="stok" class="text-xs text-gray-500">Stok</label>
                    <input type="text" name="stok" placeholder="Masukkan Stok ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model.number="product.stok">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="description" class="text-xs text-gray-500">Deskripsi</label>
                    <textarea name="description" rows="5" placeholder="Masukkan Deskripsi ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="product.deskripsi"></textarea>
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md" @click="tambahproduct">Simpan</button>
                </div>
            </form>
            <div v-if="oke" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
            <router-link to="/dashboard/product" v-if="oke" class="fixed inset-0 flex justify-center items-center w-full h-full" @click="oke = false">
                <div class="w-[420px] h-[420px] bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 justify-center">
                    <i class="bi bi-check-circle text-9xl text-green-700"></i>
                    <h3 class="text-2xl font-semibold text-center">Data Berhasil Diupdate</h3>
                </div>
            </router-link>
            <div v-if="loading" class="fixed inset-0 bg-white overflow-y-auto h-full w-full flex justify-center items-center text-2xl font-bold">Loading...</div>
        </div>
        <router-link to="/dashboard/product" class="h-16 w-52 border-2 border-green-700 rounded-md flex items-center px-10 cursor-pointer text-green-700 hover:text-white hover:bg-green-700 absolute top-12 left-10">
            <i class="bi bi-arrow-left-circle font-semibold text-xl"></i>
            <span class="ml-4 font-medium text-lg">Kembali</span>
        </router-link>
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
            product: {},
            oke: false,
            loading: false,
        }
    },
    methods: {
        tambahproduct() {
            this.loading = true,
            axios.post('https://rollaascafeapinodejs.herokuapp.com/products', this.product)
            .then(() => this.loading =  false, this.oke = true)
            .catch((error) => console.log("Error : ", error))
        },
        setProduct(data) {
            this.product = data
        }
    },
    mounted() {
        axios.get('https://rollaascafeapinodejs.herokuapp.com/products/'+this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("Error : ", error))
    }
}
</script>

<style>

</style>