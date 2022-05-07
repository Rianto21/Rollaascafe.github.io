<template>
    <div class="bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] w-64 h-screen fixed px-6 py-10 flex flex-col justify-between">
        <div class="h-16 w-full bg-white rounded-md flex items-center px-4 cursor-pointer">
            <div class="justify-center"><img src="../assets/img/profile/karyawan2.png" alt="Foto Profile" class="rounded-full w-10"></div>
            <span class="ml-3 font-medium text-lg">Mike Jordon</span>
        </div>
        <ul class="menu text-lg text-white flex flex-col gap-4">
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/dashboard/karyawan">Karyawan</router-link></li>
            <li><router-link to="/dashboard/product">Product</router-link></li>
            <li><router-link to="/dashboard/transaksi">Transaksi</router-link></li>
        </ul>
        <router-link to="/" class="h-16 w-full border-2 border-white rounded-md flex items-center px-10 cursor-pointer text-white hover:text-black hover:bg-white">
            <i class="bi bi-arrow-left-circle font-semibold text-xl"></i>
            <span class="ml-4 font-medium text-lg">Kembali</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    components: {

    },
}
</script>

<style>
.menu a.router-link-exact-active {
  color: #15803d;
  font-weight: 600;
  font-size: 24px;
}
</style>