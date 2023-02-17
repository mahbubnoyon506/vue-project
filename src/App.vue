<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="bg-gray-300 dark:bg-slate-800 p-5">
    <div class="flex">
      <div class="w-24 flex justify-center">
        <ul class="">
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-qrcode" />
          </li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-expand" />
          </li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-regular fa-circle" />
          </li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon
              icon="fa-solid fa-arrow-trend-up" /></li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-text-width" />
          </li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-maximize" />
          </li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-circle-dot" />
          </li>
          <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"></li>
        </ul>
      </div>
      <div class="px-5 w-full">
        <div class=" flex justify-between py-4">
          <div>
            <h1 class="text-4xl font-semibold text-slate-900 dark:text-slate-100">Jellyfish</h1>
            <p class="text-xs pt-2 text-slate-900 dark:text-slate-100">16 Feb 10PM | 250MB | 00:15:30</p>
          </div>
          <div class="text-6xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-circle-play" />
          </div>
          <div class="flex">
            <div class="mr-2 w-16 h-16 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center">
              <font-awesome-icon class="text-4xl text-slate-900 dark:text-slate-100" icon="fa-solid fa-trash-can" />
            </div>
            <div class="w-16 h-16 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center">
              <font-awesome-icon class="text-4xl text-slate-900 dark:text-slate-100" icon="fa-solid fa-share-nodes" />
            </div>
          </div>
        </div>
        <div class="flex ">
          <div class="w-9/12 mr-5"><img class="shadow-lg rounded-2xl" src="../src/assets/jellyfish.jpg" alt=""> </div>
          <div
            class="w-3/12 border border-slate-400  dark:border-slate-700 shadow-lg rounded-2xl p-5 bg-gray-400 dark:bg-gray-800">
            <ul class="">
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-qrcode" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-expand" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-regular fa-circle" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-arrow-trend-up" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-text-width" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-maximize" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-circle-dot" /></li>
              <li class="py-5 text-2xl text-slate-900 dark:text-slate-100"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      hello
    </div>
  </div>
  <button @click="toggleDark()" class="">Click here</button>
</template>

<style scoped></style>
