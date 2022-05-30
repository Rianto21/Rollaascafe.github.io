<template>
    <div id="hero" class="font-poppins">
        <div>
            <img src="../assets/bg-hero.png" alt="hero background" class="w-full">
        </div>
        <div class="absolute left-16 top-[30%] max-w-lg">
            <h3 class="font-pacifico text-5xl mb-6">It's a</h3>
            <h1 class="font-pacifico text-8xl mb-10">Coffe Break</h1>
            <p class="mb-16 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga quidem officia assumenda cum, culpa nemo blanditiis quibusdam nesciunt at.</p>
            <router-link to="/product" class="text-white bg-green-700 py-4 px-8 rounded-full text-lg font-semibold">Explore Cofee</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    components: {

    },
}
</script>