<template>
    <div id="profile">
        <Navbar />
        <div class="flex flex-col items-center py-10 px-[480px] gap-8">
            <div class="bg-white px-8 py-4 shadow-md w-full rounded-lg flex gap-8 items-center">
                <img src="../assets/img/profile/karyawan2.png" alt="Foto Profile" class="rounded-full w-32">
                <div class="flex flex-col gap-2">
                    <p class="text-4xl font-bold">{{user.nama_lengkap}}</p>
                    <p class="text-xl font-semibold">{{user.email}}</p>
                </div>
            </div>
            <div class="bg-white px-8 py-8 shadow-md w-full rounded-lg flex gap-8 items-center text-2xl font-semibold justify-between cursor-pointer">
                Ubah data diri <span class="text-3xl"><i class="bi bi-arrow-right-circle"></i></span>
            </div>
            <div class="bg-white px-8 py-8 shadow-md w-full rounded-lg flex gap-8 items-center text-2xl font-semibold justify-between cursor-pointer">
                Ubah password <span class="text-3xl"><i class="bi bi-arrow-right-circle"></i></span>
            </div>
            <div class="bg-white px-8 py-8 shadow-md w-full rounded-lg flex gap-8 items-center text-2xl font-semibold justify-between cursor-pointer" @click="remove">
                <span class="text-3xl"><i class="bi bi-arrow-left-circle"></i></span> Keluar 
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
    name: 'Profile',
    components: {
        Navbar
    },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        setUser(data) {
            this.user = data
        },
        remove() {
            sessionStorage.removeItem("login")
            sessionStorage.removeItem("user")
            sessionStorage.removeItem("nama")
            this.$router.push({ name: 'Home' })
        }
    },
    mounted() {
        axios.get('https://rollaascafeapinodejs.herokuapp.com/users/'+this.$route.params.id)
        .then((response) => this.setUser(response.data))
        .catch((error) => console.log("Error : ", error))
    }
}
</script>