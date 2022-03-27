<template>
  <div class="home flex flex-col">
    <img alt="Vue logo" src="../assets/logo.png" class="self-center" />
    <HelloWorld msg="Project PPL with Vue and Tailwindcss" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
