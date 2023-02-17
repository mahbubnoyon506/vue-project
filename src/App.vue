<script setup>
import {useDark, useToggle} from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark)
</script>

<template>
  <h1 class="text-[#000] dark:text-[#fff]">
    Hello world!
  </h1>
  <button 
  @click="toggleDark()"
  class="">Click here</button>
</template>

<style scoped>

</style>
