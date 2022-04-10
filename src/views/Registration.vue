<template>
    <div id="registration" class="font-poppins flex justify-center py-12 bg-base-200">
        <div class="md:w-1/3 px-10">
            <div class="flex flex-col items-center mb-8">
                <img src="../assets/logo.png" alt="Logo Rollaas Cafe" class="
                w-20">
                <h1 class="text-3xl font-bold">Creat Account</h1>
            </div>
            <form action="" class="flex flex-col gap-4">
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="nama" class="text-xs text-gray-500">Nama Lengkap</label>
                    <input type="text" name="nama" placeholder="Masukkan Nama ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500">
                    <label for="email" class="text-xs text-gray-500">Email</label>
                    <input type="email" name="email" placeholder="Masukkan Email ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal">
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="password" class="text-xs text-gray-500">Password</label>
                    <input :type="[pass? 'text' : 'password']" name="password" placeholder="Masukkan Password ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal">
                    <i class="bi text-gray-700 absolute top-[35%] right-4 text-xl" :class="[pass? 'bi-eye' : 'bi-eye-slash']" @click="pass = !pass"></i>
                </div>
                <div class="flex flex-col bg-white w-full px-4 py-2 gap-2 rounded-md border-[1px] border-gray-500 relative">
                    <label for="password" class="text-xs text-gray-500">Konfirmasi Password</label>
                    <input :type="[confpass? 'text' : 'password']" name="password" placeholder="Masukkan Ulang Password ..." class="w-full outline-none text-gray-700 font-medium placeholder-shown:font-normal">
                    <i class="bi text-gray-700 absolute top-[35%] right-4 text-xl" :class="[confpass? 'bi-eye' : 'bi-eye-slash']" @click="confpass = !confpass"></i>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" name="agree" id="remember" class="w-3 h-3">
                    <label for="agree" class="text-sm">Saya setuju dengan <span class="text-blue-700 cursor-pointer" @click="terms = true">syarat dan ketentuan</span> Rollaas Cafe.</label>
                </div>
                <div>
                    <button type="submit" class="bg-green-700 w-full py-3 font-semibold text-white rounded-md">Sign Up</button>
                </div>
            </form>
            <div class="text-sm text-center mt-8">
                Sudah punya akun ? <span class="font-semibold text-blue-700"><router-link to="/login">Login</router-link></span>
            </div>
        </div>
    </div>
    <ModalDialogScroll :modal="terms"/>
</template>

<script>

import ModalDialogScroll from '@/components/ModalDialogScroll.vue';

export default {
    name: 'Registration',
    data() {
        return {
            pass: false,
            confpass: false,
            terms: false,
        }
    },
    components: {
        ModalDialogScroll,
    }
}
</script>