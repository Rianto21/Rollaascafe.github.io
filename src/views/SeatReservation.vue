<template>
    <div id="seat-reservation">
        <Navbar />
        <div>{{ pesan }}</div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

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
    mounted() {
        axios.get('http://localhost:3000/product/234324')
        .then((response) => this.pesan = response.data.kode)
        .catch((error) => console.log("Error : ", error))
    }
}
</script>