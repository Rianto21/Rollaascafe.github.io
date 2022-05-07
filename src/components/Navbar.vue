<template>
  <div
    class="w-screen md:w-auto z-10 md:px-12 xl:px-16 bg-gradient-to-r from-[#9E7B4B] to-[#CDA976] top-0 left-0 md:flex items-center justify-between md:shadow-md text-white"
    :class="[isOpen ? 'h-full fixed' : 'h-auto static']"
  >
    <div
      class="flex justify-between px-6 py-6 md:shadow-none"
      :class="[isOpen ? 'shadow-none' : 'shadow']"
    >
      <router-link to="/" class="flex gap-2 items-center">
        <img src="../assets/logo-rollaas-cafe.png" alt="Logo Rollaas Cafe" class="w-10 h-10">
        <h2 class="font-semibold text-xl md:text-2xl text-white">Rollaas Cafe</h2>
      </router-link>
      <span class="text-3xl text-white md:hidden" @click="isOpen = !isOpen">
        <i :class="[isOpen ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
    </div>
    <ul
      class="absolute text-white md:static h-full w-full md:w-auto md:text-lg top-20 px-6 pt-6 md:pt-0 text-3xl flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-10 font-bold transition-all duration-700 md:items-center md:font-medium"
      :class="[isOpen ? 'left-0' : 'left-[-100%]']"
    >
      <li class="menu">
        <router-link to="/">Home</router-link>
        <hr class="line mt-2 bg-white h-[2px] hidden" />
      </li>
      <li class="menu">
        <router-link to="/product">Product</router-link>
        <hr class="line mt-2 bg-white h-[2px] hidden" />
      </li>
      <li class="menu">
        <router-link to="/seatReservation">Seat Reservation</router-link>
        <hr class="line mt-2 bg-white h-[2px] hidden" />
      </li>
      <li class="menu">
        <router-link to="/about">About</router-link>
        <hr class="line mt-2 bg-white h-[2px] hidden" />
      </li>
      <li class="menu" v-if="user == 'employees' || user == 'owner'">
        <router-link to="/dashboard">Dashboard</router-link>
        <hr class="line mt-2 bg-white h-[2px] hidden" />
      </li>
      <li class="flex gap-4 mt-4" v-if="session">
        <router-link
          to="/login"
          class="inline md:hidden border-2 border-green-700 py-3 px-5 text-green-700 text-2xl rounded-md transform hover:bg-green-700 hover:text-white active:translate-y-1"
          >login</router-link
        >
        <router-link
          to="/register"
          class="inline md:hidden bg-green-700 py-3 px-5 text-white text-2xl rounded-md transform hover:bg-green-800 active:translate-y-1"
          >Sign Up</router-link
        >
      </li>
    </ul>
    <div class="flex gap-4" v-if="!session">
        <router-link
          to="/login"
          class="hidden md:block border-2 border-green-700 py-2 px-4 text-green-700 text-base font-medium rounded-md transform hover:bg-green-700 hover:text-white active:translate-y-1"
          >Login</router-link
        >
        <router-link
          to="/register"
          class="hidden md:block bg-green-700 py-2 px-4 text-white text-base font-medium rounded-md transform hover:bg-green-800 active:translate-y-1"
          >Sign Up</router-link
        >
    </div>
    <div class="flex gap-4 text-2xl" v-if="session">
        <router-link to="/keranjang"><i class="bi bi-cart"></i></router-link>
        <router-link :to="'/profile/'+session"><i class="bi bi-person-circle"></i></router-link>
    </div>
    <!-- <div class="absolute w-32 h-48 bg-white right-0"></div> -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      session: sessionStorage.getItem("login"),
      user: sessionStorage.getItem("user"),
      nama: sessionStorage.getItem("nama")
    };
  },
};
</script>

<style>
.menu a.router-link-exact-active {
  color: #15803d;
  font-weight: 600;
}

a.router-link-exact-active ~ .line {
  display: block;
}
</style>
