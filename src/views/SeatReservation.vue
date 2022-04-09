<template>
    <Navbar />
    <div id="seat-reservation" class="font-poppins flex justify-center py-12 bg-base-200">
        <h1 class="text-2xl font-bold">Ini halaman Seat Reservation</h1>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
    name: 'SeatReservation',
    components: {
        Navbar,
    }
}
</script>