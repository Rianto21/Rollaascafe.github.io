<template>
    <div id="footer" class="h-[500px] w-full bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] pt-24 pb-12 flex flex-col items-center justify-between text-white">
        <div class="font-poppins flex justify-between w-full px-32 items-start">
            <div class="flex items-center gap-4">
                <img src="@/assets/logo-rollaas-cafe.png" alt="Logo Rollaas Cafe" class="w-20 h-20">
                <h2 class="text-4xl font-semibold">Rollaas Cafe</h2>
            </div>
            <div class="flex gap-14">
                <div class="flex flex-col gap-5">
                    <h3 class="text-3xl font-semibold">Home</h3>
                    <router-link to="/" class="text-lg font-medium">Features</router-link>
                    <router-link to="/" class="text-lg font-medium">Product</router-link>
                    <router-link to="/" class="text-lg font-medium">Testimonials</router-link>
                </div>
                <div class="flex flex-col gap-5">
                    <h3 class="text-3xl font-semibold">Product</h3>
                    <router-link to="/product" class="text-lg font-medium">Buy Online</router-link>
                    <router-link to="/product" class="text-lg font-medium">Cafe Menu</router-link>
                </div>
                <div class="flex flex-col gap-5">
                    <h3 class="text-3xl font-semibold">Seat Reservation</h3>
                    <router-link to="/seatReservation" class="text-lg font-medium">Search Seat</router-link>
                    <router-link to="/seatReservation" class="text-lg font-medium">Pick Seat</router-link>
                </div>
                <div class="flex flex-col gap-5">
                    <h3 class="text-3xl font-semibold">About</h3>
                    <router-link to="/about" class="text-lg font-medium">Description</router-link>
                    <router-link to="/about" class="text-lg font-medium">History</router-link>
                    <router-link to="/about" class="text-lg font-medium">Gallery</router-link>
                </div>
            </div>
        </div>
        <p class="font-nunitosans">© 2022 Rollaas Cafe All Rights Reserved</p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components: {}
}
</script>