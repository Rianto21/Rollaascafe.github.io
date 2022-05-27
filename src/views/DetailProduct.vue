<template>
    <div id="detail-product">
        <Navbar />
        <div class="flex flex-col items-center md:items-start md:flex-row px-6 md:p-24 py-10 gap-8 font-poppins bg-gray-300">
            <div class="h-[270px] md:h-[480px] md:w-1/2 overflow-hidden rounded-xl md:rounded-3xl">
                <img src="../assets/foto-product.png" alt="Foto Product" class="w-full">
            </div>
            <div class="flex flex-col gap-2 md:gap-6 w-full md:w-1/2 relative">
                <h1 class="text-3xl md:text-4xl font-bold text-center md:text-left">{{ product.nama_barang }}</h1>
                <h3 class="text-2xl font-semibold mt-4">Deskripsi</h3>
                <p class="text-sm text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni ipsam optio saepe consequuntur recusandae quisquam laudantium, possimus maxime. Quae, ratione distinctio ipsam illum minus dolorem voluptate dolores ipsa. Earum ratione nisi recusandae error sapiente quisquam nesciunt architecto sint libero veritatis. Odit esse qui delectus magni explicabo possimus vero pariatur iusto. Quis, eaque provident! Exercitationem, expedita! Error laudantium, eius enim quisquam quo accusantium similique ipsum rerum minima libero dolores incidunt eveniet molestias maiores fuga culpa saepe mollitia rem eum est? Vero reiciendis consequatur omnis dicta, alias necessitatibus harum quia ducimus, labore fuga inventore impedit in soluta debitis dolorem molestiae cumque sit, vel exercitationem veritatis dolore dolorum dolor tempora incidunt. Quis libero cumque, reprehenderit vel quidem necessitatibus exercitationem explicabo expedita atque! Hic reprehenderit aliquid id. Ullam quidem libero tempore iste qui et quisquam voluptates dolore perspiciatis fuga dolorum, asperiores, ducimus labore nisi consequuntur? Laudantium provident cumque molestiae veniam aperiam maxime iure ex adipisci dignissimos labore dolore dolorem aliquid accusamus vitae, sint corrupti perspiciatis porro rem sapiente aspernatur voluptates nobis quis maiores! Nisi deserunt labore culpa animi tempore, dolorem, voluptatum ullam laborum maiores consequuntur assumenda. Quaerat quo eligendi suscipit sapiente tempora officiis atque non deleniti similique laudantium, provident maiores. Quod iusto dolore cum similique exercitationem sit libero, sapiente cupiditate? Qui unde quos ratione ipsam ducimus distinctio quae nemo et dicta corrupti assumenda, nihil quas doloribus hic voluptates reprehenderit laborum. Corporis perferendis repellendus cupiditate debitis illum labore? Tenetur facere accusamus reiciendis vitae, quia officiis dolores fugiat! Iste, nobis voluptatum officia, molestiae veritatis accusamus maiores iure, sit nostrum cumque quibusdam eligendi commodi quisquam deleniti! Voluptatum architecto possimus repudiandae? Laboriosam, nobis. Possimus alias debitis dignissimos! Sit vel natus earum vitae magnam impedit reiciendis, modi illo error voluptas maxime quas atque consequuntur! Cupiditate possimus dolorem odit eum perspiciatis autem soluta, dolorum praesentium atque itaque repellendus recusandae.</p>
                <div class="flex justify-between">
                    <div class="sticky bottom-0 py-6 md:py-0 md:static">
                        <div class="flex gap-4 items-center">
                            <div class="h-16 rounded-lg bg-green-700 text-white text-4xl font-medium flex items-center justify-center shadow-md md:text-base px-4 cursor-pointer" @click="setJumlah('kurang')">
                                <i class="bi bi-dash"></i>
                            </div>
                            <span class="text-2xl text-green-700 font-semibold">{{ jumlah }}</span>
                            <div class="h-16 rounded-lg bg-green-700 text-white text-4xl font-medium flex items-center justify-center shadow-md md:text-base px-4 cursor-pointer" @click="setJumlah('jumlah')">
                                <i class="bi bi-plus"></i>
                            </div>

                        </div>
                    </div>
                    <div class="sticky bottom-0 w-full py-6 md:py-0 md:static md:w-64">
                        <div class="w-full h-16 rounded-lg bg-green-700 text-white text-xl font-medium flex items-center justify-center shadow-md md:text-base" @click="tambahKeranjang()">
                        <span class="mr-2"><div class="bi bi-cart"></div></span>Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
    name: 'detailProduct',
    components: {
        Navbar,
    },
    data() {
        return {
            session: sessionStorage.getItem("login"),
            product: {},
            cart: {},
            jumlah: 1
        }
    },
    methods: {
        setProduct(data) {
            this.product = data
        },
        setJumlah(data) {
            if(data == 'kurang') {
                if(this.jumlah > 1) {
                    this.jumlah--
                }
            } else {
                this.jumlah++
            }
        },
        tambahKeranjang() {
            this.cart.id_barang = this.product._id
            this.cart.jumlah_barang = this.jumlah
            console.log(this.cart)
            axios.post('https://rollaascafeapinodejs.herokuapp.com/users/cart/'+this.session, this.cart)
            .then(() => this.$router.push({ name: 'Keranjang' }))
            .catch((error) => console.log("Error : ", error))
        }
    },
    mounted() {
        axios.get('https://rollaascafeapinodejs.herokuapp.com/products/'+this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log("Error : ", error))
    }
}
</script>