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
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon icon="fa-solid fa-qrcode" />
          </li>
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon icon="fa-solid fa-expand" />
          </li>
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon icon="fa-regular fa-circle" />
          </li>
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon
              icon="fa-solid fa-arrow-trend-up" /></li>
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon icon="fa-solid fa-text-width" />
          </li>
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon icon="fa-solid fa-maximize" />
          </li>
          <li class="my-5 lg:my-7 text-2xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500"><font-awesome-icon icon="fa-solid fa-circle-dot" />
          </li>
        </ul>
      </div>
      <div class="px-5 w-full">
        <div class=" flex justify-between items-center py-4">
          <div>
            <h1 class="text-4xl font-semibold text-slate-900 dark:text-slate-100">Jellyfish</h1>
            <p class="text-xs pt-2 text-slate-900 dark:text-slate-100">16 Feb 10PM | 250MB | 00:15:30</p>
          </div>
          <div class="text-5xl text-slate-900 dark:text-slate-100"><font-awesome-icon icon="fa-solid fa-circle-play" />
          </div>
          <div class="flex">
            <div class="mr-2 w-12 h-12 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center">
              <font-awesome-icon class="text-2xl text-slate-900 dark:text-slate-100" icon="fa-solid fa-trash-can" />
            </div>
            <div class="w-12 h-12 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center">
              <font-awesome-icon class="text-2xl text-slate-900 dark:text-slate-100" icon="fa-solid fa-share-nodes" />
            </div>
          </div>
        </div>
        <div class="flex ">
          <div class="w-9/12 mr-5"><img class="shadow-lg rounded-2xl" src="../src/assets/jellyfish.jpg" alt=""> </div>
          <div
            class="w-3/12 border border-slate-400  dark:border-slate-700 shadow-lg rounded-2xl p-3  bg-gray-400 dark:bg-gray-800">
            <ul class="">
              <li class="pb-1 group text-2xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-expand" />
                  <div class="flex justify-between ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Full Width</p>
                    <font-awesome-icon class="invisible group-hover:visible dark:group-hover:text-slate-900" icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-2xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-regular fa-circle" />
                  <div class="flex justify-between ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Circle</p>
                    <font-awesome-icon class="invisible group-hover:visible dark:group-hover:text-slate-900" icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-2xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-arrow-trend-up" />
                  <div class="flex justify-between ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Arrow</p>
                    <font-awesome-icon class="invisible group-hover:visible dark:group-hover:text-slate-900" icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-2xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-text-width" />
                  <div class="flex justify-between ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Text</p>
                    <font-awesome-icon class="invisible group-hover:visible dark:group-hover:text-slate-900" icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="pt-1 group text-2xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-regular fa-square" />
                  <div class="flex justify-between ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Rectangle</p>
                    <font-awesome-icon class="invisible group-hover:visible dark:group-hover:text-slate-900" icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-2xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-circle-dot" />
                  <div class="flex justify-between ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Circle Dot</p>
                    <font-awesome-icon class="invisible group-hover:visible dark:group-hover:text-slate-900" icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
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
