<template>
    <div id="dashboard" class="flex font-poppins">
        <Sidebar />
        <div class="ml-64 px-24 py-16 w-full gap-8 flex flex-col items-center bg">
            <div class="w-full border-2 border-green-700 rounded-md py-4 px-8 flex gap-4">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Cari karyawan..." class="w-full outline-none" v-model="inputuser" @keyup="cariUser">
            </div>
            <div class="flex justify-between items-center w-full">
                <h1 class="text-3xl font-bold">Daftar Karyawan</h1>
                <router-link to="/dashboard/tambahKaryawan" class="bg-green-700 text-white py-3 px-4 rounded-md"><i class="bi bi-plus-circle mr-1"></i> Tambah Karyawan</router-link>
            </div>
            <table class="flex flex-col gap-4 w-full">
                <div v-for="user in users" :key="user.id">
                    <tr class="border-2 border-green-700 py-4 px-6 rounded-lg flex justify-between items-center">
                        <!-- v-if="user.user_role == 'useronly'" -->
                        <td class="flex gap-4 items-center">
                            <div class="justify-center"><img src="../assets/img/profile/karyawan2.png" alt="Foto Profile" class="rounded-full w-12"></div>
                            <div class="text-xl font-medium">{{ user.nama_lengkap }}</div>
                        </td>
                        <td class="flex gap-8 items-center">
                            <div class="bg-green-700 text-white rounded-md py-2 px-4 text-sm">{{ user.status_aktif ? 'Active' : 'Non-Active' }}</div>
                            <div class="text-xl flex gap-3">
                                <router-link :to="'/dashboard/karyawan/edit/'+user._id"><i class="bi bi-pencil-square text-green-700"></i></router-link>
                                <i class="bi bi-trash text-red-700 cursor-pointer" @click="clickDelete(user._id)"></i>
                            </div>
                        </td>
                    </tr>
                </div>
            </table>
            <div v-if="deleted" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
            <div v-if="deleted" class="fixed inset-0 flex justify-center items-center w-full h-full">
                <div class="w-[480px] h-64 bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 justify-center">
                    <h3 class="text-2xl font-semibold text-center">Apakah anda yakin ingin menghapus data?</h3>
                    <div class="flex gap-2">
                        <button class="bg-red-700 text-white px-6 py-3 rounded-md" @click="deleted = false">tidak</button>
                        <button class="bg-green-700 text-white px-6 py-3 rounded-md" @click="deleteUser()">iya</button>
                    </div>
                </div>
            </div>
            <div v-if="oke" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
            <div v-if="oke" class="fixed inset-0 flex justify-center items-center w-full h-full" @click="oke = false">
                <div class="w-[420px] h-[420px] bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 justify-center">
                    <i class="bi bi-check-circle text-9xl text-green-700"></i>
                    <h3 class="text-2xl font-semibold text-center">Data Berhasil Dihapus</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import axios from 'axios';

export default {
    name: 'Karyawan',
    components: {
        Sidebar
    },
    data() {
        return {
            deleted: false,
            oke: false,
            users: [],
            iddelete: '',
            inputuser: '',
        }
    },
    methods: {
        cariUser() {
            if(!/[a-zA-Z]/.test(this.inputuser)) {
                this.tampilUser()
            } else {
                axios.get('https://rollaascafeapinodejs.herokuapp.com/users/name/'+this.inputuser)
                .then((response) => this.setUsers(response.data))
                .catch((error) => console.log("Error : ", error))
            }
        },
        setUsers(data) {
            this.users = data;
        },
        clickDelete(id) {
            this.deleted = true;
            this.iddelete = id;
        },
        deleteUser() {
            this.deleted = false;
            axios.delete('https://rollaascafeapinodejs.herokuapp.com/users/'+this.iddelete)
            .then(() => this.oke = true)
            .catch((error) => console.log("Error : ", error))
        },
        tampilUser() {
            axios.get('https://rollaascafeapinodejs.herokuapp.com/users')
            .then((response) => this.setUsers(response.data))
            .catch((error) => console.log("Error : ", error))
        }
    },
    mounted() {
        this.tampilUser()
    }
}
</script>