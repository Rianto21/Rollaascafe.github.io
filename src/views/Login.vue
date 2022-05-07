<template>
    <div id="login" class="font-poppins flex justify-center py-12 bg-base-200">
        <div class="md:w-1/3 px-10">
            <div class="flex flex-col items-center mb-8">
                <img src="../assets/logo-rollaas-cafe.png" alt="Logo Rollaas Cafe" class="
                w-20">
                <h1 class="text-3xl font-bold">Login with email</h1>
            </div>
            <form action="" class="flex flex-col gap-4" @submit.prevent>
                <div v-if="ada" class="bg-red-200 h-12 rounded-md flex items-center justify-center gap-4">
                    <i class="bi bi-x-circle text-red-700"></i>
                    <p class="text-red-700">Email/Password tidak ditemukan</p>
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="email" class="text-xs text-gray-500">Email</label>
                    <input type="email" name="email" placeholder="Masukkan Email ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.email" autocomplete="email">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="password" class="text-xs text-gray-500">Password</label>
                    <input :type="[pass? 'text' : 'password']" name="password" placeholder="Masukkan Password ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.password" autocomplete="current-password">
                    <i class="bi text-gray-700 absolute top-[35%] right-4 text-xl" :class="[pass? 'bi-eye' : 'bi-eye-slash']" @click="pass = !pass"></i>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" name="agree" id="remember" class="w-3 h-3">
                    <label for="agree" class="text-sm">Saya setuju dengan syarat dan ketentuan Rollaas Cafe.</label>
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md" @click="login">Login</button>
                </div>
            </form>
            <div class="text-sm text-center mt-8">
                Belum punya akun ? <span class="font-semibold text-blue-700"><router-link to="/register">Daftar</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            pass: false,
            confpass: false,
            user: {},
            ada: false,
        }
    },
    components: {
        
    },
    methods: {
        check(data) {
            if(data.length > 0) {
                sessionStorage.setItem("login", data[0]._id)
                sessionStorage.setItem("user", data[0].user_role)
                sessionStorage.setItem("nama", data[0].nama_lengkap)
                this.$router.push({ name: 'Home' })
            } else {
                this.ada = true
            }
        },
        login() {
            console.log(this.user),
            axios.post('https://rollaascafeapinodejs.herokuapp.com/users/validation', this.user)
            .then((response) => this.check(response.data))
            .catch((error) => console.log("Error : ", error))
        }
    }
}
</script>