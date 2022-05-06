<template>
    <div id="seat-reservation">
        <Navbar />
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
    name: 'SeatReservation',
    components: {
        Navbar,
    },
    data() {
        return {
            pesan: '',
            user: {}
        }
    },
}
</script>