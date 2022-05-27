<template>
    <div id="registration" class="font-poppins flex justify-center py-12 bg-base-200">
        <div class="md:w-1/3 px-10">
            <div class="flex flex-col items-center mb-8">
                <img src="../assets/logo-rollaas-cafe.png" alt="Logo Rollaas Cafe" class="
                w-20">
                <h1 class="text-3xl font-bold">Creat Account</h1>
            </div>
            <form action="" class="flex flex-col gap-4" @submit.prevent>
                <div v-if="alert" class="bg-red-200 h-12 rounded-md flex items-center justify-center gap-4">
                    <i class="bi bi-x-circle text-red-700 cursor-pointer" @click="alert = ''"></i>
                    <p class="text-red-700">{{ alert }}</p>
                </div>
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
                    <input type="email" name="email" placeholder="Masukkan Email ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="user.email" @keyup="checkEmail()">
                </div>
                <div v-if="!emailValid" class="text-right text-red-500 font-semibold text-sm italic">email tidak valid</div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="password" class="text-xs text-gray-500">Password</label>
                    <input :type="[pass? 'text' : 'password']" name="password" placeholder="Masukkan Password ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="password" @keyup="checkPass()">
                    <i class="bi text-gray-700 absolute top-[35%] right-4 text-xl" :class="[pass? 'bi-eye' : 'bi-eye-slash']" @click="pass = !pass"></i>
                </div>
                <div v-if="!passValid" class="text-right text-red-500 font-semibold text-sm italic">password tidak valid</div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="confpassword" class="text-xs text-gray-500">Konfirmasi Password</label>
                    <input :type="[confpass? 'text' : 'password']" name="confpassword" placeholder="Masukkan Ulang Password ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal" v-model="confirm" @keyup="checkConfPass()">
                    <i class="bi text-gray-700 absolute top-[35%] right-4 text-xl" :class="[confpass? 'bi-eye' : 'bi-eye-slash']" @click="confpass = !confpass"></i>
                </div>
                <div v-if="!confpassValid" class="text-right text-red-500 font-semibold text-sm italic">password tidak sama</div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" name="agree" id="remember" class="w-3 h-3">
                    <label for="agree" class="text-sm">Saya setuju dengan <span class="text-blue-700 cursor-pointer" @click="terms = true">syarat dan ketentuan</span> Rollaas Cafe.</label>
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md" @click="registration">Sign Up</button>
                </div>
            </form>
            <div class="text-sm text-center mt-8">
                Sudah punya akun ? <span class="font-semibold text-blue-700"><router-link to="/login">Login</router-link></span>
            </div>
        </div>
        <ModalDialogScroll :modal="terms"/> 
        <div v-if="oke" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
        <router-link to="/login" v-if="oke" class="fixed inset-0 flex justify-center items-center w-full h-full" @click="oke = false">
            <div class="w-[420px] h-[420px] bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 justify-center">
                <i class="bi bi-check-circle text-9xl text-green-700"></i>
                <h3 class="text-2xl font-semibold text-center">Registrasi berhasil</h3>
            </div>
        </router-link>
        <div v-if="loading" class="fixed inset-0 bg-white overflow-y-auto h-full w-full flex justify-center items-center text-2xl font-bold">Loading...</div>
    </div>
</template>

<script>

import ModalDialogScroll from '@/components/ModalDialogScroll.vue';
import axios from 'axios';
import validator from 'validator';

const passwordValidator = require('password-validator');

export default {
    name: 'Registration',
    data() {
        return {
            pass: false,
            confpass: false,
            password: '',
            confirm: '',
            terms: false,
            loading: false,
            oke: false,
            user: {},
            emailValid: true,
            passValid: true,
            confpassValid: true,
            userValid: false,
            alert: false
        }
    },
    components: {
        ModalDialogScroll,
    },
    methods: {
        checkUsername() {

        },
        checkEmail() {
            this.emailValid = validator.isEmail(this.user.email)
        },
        checkPass() {
            const schema = new passwordValidator();

            schema
            .is().min(8)                                    // Minimum length 8
            .is().max(20)                                  // Maximum length 20
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().digits(1)                                // Must have at least 2 digits
            .has().not().spaces()                           // Should not have spaces

            this.passValid = schema.validate(this.password)
        },
        checkConfPass() {
            this.confpassValid = this.password === this.confirm
        },
        registration() {
            if(!this.password || !this.confirm || !this.user.email || !this.user.nama_lengkap || !this.user.username) {
                this.alert = 'Data tidak boleh kosong'
            } else if(!this.passValid || !this.emailValid || !this.confpassValid || !this.userValid) {
                this.alert = 'Isikan data dengan sesuai'
            } else {
                if(this.password && this.confirm) {
                    this.user.password = this.password
                }
                this.user.contact = " ",
                this.user.description = " ",
                this.user.user_role = "useronly",
                this.user.status_aktif = true,
                this.loading = true
                axios.post('https://rollaascafeapinodejs.herokuapp.com/users', this.user)
                .then(() => this.loading =  false, this.oke = true)
                .catch((error) => console.log("Error : ", error))
            }
        }
    },
}
</script>