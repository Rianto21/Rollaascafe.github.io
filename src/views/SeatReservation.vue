<template>
    <div id="seat-reservation">
        <Navbar />
        <div class="px-32 py-16 w-full gap-8 flex flex-col items-center font-poppins">
            <div class="text-4xl font-bold text-green-700">Pilih Tempatmu</div>
            <div class="flex gap-16">
                <div class="relative">
                    <h3 class="text-white font-medium text-xl absolute bottom-[152px] left-[260px]">Kasir</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="521" height="539" viewBox="0 0 521 539" fill="none">
                        <path d="M29 428.5V162L193.5 40L389.5 31.5L520 127V428.5H29Z" stroke="black"/>
                        <path d="M1 128L29 162L193 41.5L160 4.5L136 23.5L118 1L7 90L23 110L1 128Z" fill="none" stroke="black"/>
                        <rect x="29" y="286" width="99" height="142" fill="none" stroke="black"/>
                        <rect x="100" y="428" width="181" height="110" stroke="black"/>
                        <rect x="172" y="201" width="230" height="114" stroke="black"/>
                        <rect x="172" y="315" width="230" height="113" fill="#374151" stroke="black"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="88" viewBox="0 0 120 88" :fill="[seat == 'C1' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-2 left-36" @click="seat = 'C1'">
                        <rect x="28" y="28" width="64" height="32"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="68" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect x="68" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="104" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'B1' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[236px] left-[182px]" @click="seat = 'B1'">
                        <rect x="28" y="28" width="32" height="32"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'B2' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[236px] left-[305px]" @click="seat = 'B2'">
                        <rect x="28" y="28" width="32" height="32"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'A1' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[265px] left-10" @click="seat = 'A1'">
                        <rect x="28" y="28" width="32" height="32" rx="16"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'A2' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[360px] left-28" @click="seat = 'A2'">
                        <rect x="28" y="28" width="32" height="32" rx="16"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'A3' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[380px] left-56" @click="seat = 'A3'">
                        <rect x="28" y="28" width="32" height="32" rx="16"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'A4' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[380px] left-[340px]" @click="seat = 'A4'">
                        <rect x="28" y="28" width="32" height="32" rx="16"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'A5' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[260px] left-[420px]" @click="seat = 'A5'">
                        <rect x="28" y="28" width="32" height="32" rx="16"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" :fill="[seat == 'A6' ? '#047857' : '#374151']" class="cursor-pointer absolute bottom-[150px] left-[420px]" @click="seat = 'A6'">
                        <rect x="28" y="28" width="32" height="32" rx="16"/>
                        <rect x="32" width="24" height="16"/>
                        <rect x="32" y="72" width="24" height="16"/>
                        <rect y="32" width="16" height="24"/>
                        <rect x="72" y="32" width="16" height="24"/>
                    </svg>
                </div>
                <div class="flex flex-col gap-4 py-28">
                    <div class="text-2xl font-bold text-green-700">Detail Seat</div>
                    <div class="text-xl font-semibold text-green-700">Nomor Tempat : {{seat}}</div>
                    <div class="text-xl font-semibold text-green-700">Status : Tersedia</div>
                    <div class="text-xl font-semibold text-green-700">Jumlah Kursi : 4</div>
                    <div class="text-lg font-semibold bg-green-700 text-white flex justify-center items-center py-2 rounded-md">Pilih Tempat</div>
                </div>
            </div>
        </div>
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
            user: {},
            seat: 'C4'
        }
    },
    mounted() {
        axios.get('http://localhost:3000/product/234324')
        .then((response) => this.pesan = response.data.kode)
        .catch((error) => console.log("Error : ", error))
    }
}
</script>