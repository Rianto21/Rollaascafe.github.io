<template>
    <div id="tambah-karyawan" class="font-poppins flex justify-center py-12 bg-base-200 bg-gray-100">
        <div class="md:w-1/3 px-10 py-10 bg-white shadow-lg rounded-xl">
            <h1 class="text-2xl font-semibold text-green-700 text-center mb-6">Edit Karyawan</h1>
            <form class="flex flex-col gap-4" @submit.prevent>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="nama" class="text-xs text-gray-500">Nama Lengkap</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.nama_lengkap">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="username" class="text-xs text-gray-500">Username</label>
                    <input type="text" name="username" placeholder="Masukkan Username ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.username">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="email" class="text-xs text-gray-500">Email</label>
                    <input type="email" name="email" placeholder="Masukkan Email ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.email">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="password" class="text-xs text-gray-500">Password</label>
                    <input :type="[pass? 'text' : 'password']" name="password" placeholder="Masukkan Password ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.password">
                    <i class="bi text-gray-700 absolute top-[35%] right-4 text-xl" :class="[pass? 'bi-eye' : 'bi-eye-slash']" @click="pass = !pass"></i>
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="contact" class="text-xs text-gray-500">Contact</label>
                    <input type="text" name="contact" placeholder="Masukkan Contact ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.contact">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="role" class="text-xs text-gray-500">Role</label>
                    <select name="role" id="role" class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.user_role">
                        <option value="useronly">useronly</option>
                        <option value="employees">employees</option>
                        <option value="owner">owner</option>
                    </select>
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="description" class="text-xs text-gray-500">Deskripsi</label>
                    <textarea name="description" rows="5" placeholder="Masukkan Deskripsi ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.description"></textarea>
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md" @click="updateuser">Simpan</button>
                </div>
            </form>
            <div v-if="oke" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
            <router-link to="/dashboard" v-if="oke" class="fixed inset-0 flex justify-center items-center w-full h-full" @click="oke = false">
                <div class="w-[420px] h-[420px] bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 justify-center">
                    <i class="bi bi-check-circle text-9xl text-green-700"></i>
                    <h3 class="text-2xl font-semibold text-center">Data Berhasil Diupdate</h3>
                </div>
            </router-link>
            <div v-if="loading" class="fixed inset-0 bg-white overflow-y-auto h-full w-full flex justify-center items-center text-2xl font-bold">Loading...</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'EditKaryawan',
    components: {
    },
    data() {
        return {
            pass: false,
            user: {},
            userupdate: {
                
            },
            oke: false,
            loading: false,
        }
    },
    methods: {
        setUser(data) {
            this.user = data
            console.log(this.user)
        },
        updateuser() {
            this.loading = true,
            axios.patch('/users'+this.$route.params.id, this.user)
            .then(() => this.loading =  false, this.oke = true)
            .catch((error) => console.log("Error : ", error))
        }
    },
    mounted() {
        axios.get('/users/'+this.$route.params.id)
        .then((response) => this.setUser(response.data))
        .catch((error) => console.log("Error : ", error))
    }
}
</script>

<style>

</style>