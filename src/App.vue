<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark)

$(function () {
  $("#draggable2").draggable({ axis: "x" });
});

</script>

<template>
  <div class="bg-gray-300 dark:bg-slate-800 p-2 lg:p-5">
    <div class="flex relative">
      <div
        class="w-16 md:w-20 lg:w-24 h-80 lg:h-auto flex justify-center md:overflow-y-scroll lg:overflow-y-hidden sticky top-0">
        <ul class="">
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-qrcode" />
          </li>
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-expand" />
          </li>
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-regular fa-circle" />
          </li>
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-arrow-trend-up" />
          </li>
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-text-width" />
          </li>
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-maximize" />
          </li>
          <li
            class="my-1 cursor-pointer lg:my-7 text-xl text-slate-900 dark:text-slate-100 hover:bg-gray-400 dark:hover:text-slate-900 w-12 h-12 flex justify-center items-center rounded-full transition-all ease-in-out duration-500">
            <font-awesome-icon icon="fa-solid fa-circle-dot" />
          </li>
        </ul>
      </div>
      <div class="px-2 md:px-3 lg:px-5 w-full">
        <div class="md:flex justify-between items-center py-4">
          <div class="md:w-3/4">
            <h1 class="text-2xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">Jellyfish</h1>
            <p class="text-xs pt-2 text-slate-900 dark:text-slate-100">16 Feb 10PM | 250MB | 00:15:30</p>
          </div>
          <div class="flex justify-between items-center mt-3 md:mt-0 w-full">
            <div class="flex justify-start">
              <div class="flex cursor-pointer justify-center items-center text-slate-900 dark:text-slate-100">
                <div
                  class="animate-ping absolute inline-flex h-8 md:h-12 w-8 md:w-12 rounded-full bg-slate-900 opacity-75">
                </div>
                <font-awesome-icon class="text-3xl md:text-5xl" icon="fa-solid fa-circle-play" />
              </div>
            </div>
            <div class="flex">
              <div @click="toggleDark()"
                class="cursor-pointer mr-2 w-8 md:w-12 h-8 md:h-12 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center group hover:bg-slate-900 dark:hover:bg-slate-100 transition-all ease-in-out duration-500">
                <font-awesome-icon v-if='isDark' class="text-lg md:text-xl text-slate-900 dark:text-slate-100 group-hover:text-slate-100 dark:group-hover:text-slate-900"
                  icon="fa-regular fa-sun" />
                <font-awesome-icon v-else class="text-lg md:text-xl text-slate-900 dark:text-slate-100 group-hover:text-slate-100 dark:group-hover:text-slate-900"
                  icon="fa-regular fa-moon" />
              </div>
              <div
                class="cursor-pointer mr-2 w-8 md:w-12 h-8 md:h-12 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center group hover:bg-slate-900 dark:hover:bg-slate-100 transition-all ease-in-out duration-500">
                <font-awesome-icon class="text-lg md:text-xl text-slate-900 dark:text-slate-100 group-hover:text-slate-100 dark:group-hover:text-slate-900"
                  icon="fa-solid fa-trash-can" />
              </div>
              <div
                class="group cursor-pointer w-8 md:w-12 h-8 md:h-12 p-3 bg-gray-400 dark:bg-gray-700 rounded-full flex justify-center items-center hover:bg-slate-900 dark:hover:bg-slate-100 transition-all ease-in-out duration-500">
                <font-awesome-icon class="text-lg md:text-xl text-slate-900 dark:text-slate-100 group-hover:text-slate-100 dark:group-hover:text-slate-900"
                  icon="fa-solid fa-share-nodes" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex ">
          <div class="w-auto md:w-9/12 md:mr-5 mb-4 md:mb-0"><img class="shadow-lg rounded-2xl"
              src="../src/assets/jellyfish.jpg" alt=""> </div>
          <div
            class="w-auto md:w-4/12 lg:w-3/12 md:h-52 lg:h-auto md:overflow-y-scroll lg:overflow-y-hidden border border-slate-400  dark:border-slate-700 shadow-lg rounded-2xl p-1 lg:p-3  bg-gray-400 dark:bg-gray-800">
            <ul class="">
              <li class="pb-1 group text-xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-1 lg:p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-expand" />
                  <div class="flex justify-between ml-2 lg:ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Full Width</p>
                    <font-awesome-icon
                      class="cursor-pointer lg:invisible group-hover:visible dark:group-hover:text-slate-900"
                      icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-1 lg:p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-regular fa-circle" />
                  <div class="flex justify-between ml-2 lg:ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Circle</p>
                    <font-awesome-icon
                      class="cursor-pointer lg:invisible group-hover:visible dark:group-hover:text-slate-900"
                      icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-1 lg:p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-arrow-trend-up" />
                  <div class="flex justify-between ml-2 lg:ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Arrow</p>
                    <font-awesome-icon
                      class="cursor-pointer lg:invisible group-hover:visible dark:group-hover:text-slate-900"
                      icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-1 lg:p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-text-width" />
                  <div class="flex justify-between ml-2 lg:ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Text</p>
                    <font-awesome-icon
                      class="cursor-pointer lg:invisible group-hover:visible dark:group-hover:text-slate-900"
                      icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="pt-1 group text-xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-1 lg:p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-regular fa-square" />
                  <div class="flex justify-between ml-2 lg:ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Rectangle</p>
                    <font-awesome-icon
                      class="cursor-pointer lg:invisible group-hover:visible dark:group-hover:text-slate-900"
                      icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
              <li class="py-1 group text-xl text-slate-900 dark:text-slate-100 ">
                <div
                  class="transition-all ease-in-out duration-500 group-hover:bg-slate-300 flex p-1 lg:p-3 items-center rounded-xl">
                  <font-awesome-icon class="dark:group-hover:text-slate-900" icon="fa-solid fa-circle-dot" />
                  <div class="flex justify-between ml-2 lg:ml-4 w-full">
                    <p class="text-base dark:group-hover:text-slate-900">Circle Dot</p>
                    <font-awesome-icon
                      class="cursor-pointer lg:invisible group-hover:visible dark:group-hover:text-slate-900"
                      icon="fa-solid fa-circle-xmark" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Ruler Scale Start -->
    <div class="mt-5">
      <div class="flex justify-between mb-0">
        <span class="text-slate-900 dark:text-slate-100">1</span>
        <span class="text-slate-900 dark:text-slate-100">1.5</span>
        <span class="text-slate-900 dark:text-slate-100">2</span>
        <span class="text-slate-900 dark:text-slate-100">2.5</span>
        <span class="text-slate-900 dark:text-slate-100">3</span>
        <span class="text-slate-900 dark:text-slate-100">3.5</span>
        <span class="text-slate-900 dark:text-slate-100">4</span>
        <span class="text-slate-900 dark:text-slate-100">4.5</span>
        <span class="text-slate-900 dark:text-slate-100">5</span>
        <span class="text-slate-900 dark:text-slate-100">5.5</span>
        <span class="text-slate-900 dark:text-slate-100">6</span>
      </div>
      <div class="border-t border-slate-900 dark:border-slate-100">
        <div class="flex justify-between mb-2">
          <div class="h-12 border-l border-slate-900 dark:border-slate-100 flez justify-evenly"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-8 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-12 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-8 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-12 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-8 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-12 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-8 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-12 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-8 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-4 border-l border-slate-900 dark:border-slate-100"></div>
          <div class="h-12 border-r border-slate-900 dark:border-slate-100"></div>
        </div>
      </div>
    </div>
    <!-- Scale end -->

    <div class="h-24 relative mb-5">
      <img class="shadow-lg rounded-2xl w-full h-full" src="../src/assets/jellyfish2.jpg" alt="">
      <div id="draggable2" class=" w-48 h-24 border border-slate-100 rounded-2xl absolute mt-[-96px] z-50"></div>
    </div>
  </div>
</template>


<script type="text/javascript">
$(document).ready(function () {
  $('.dragger').mousedown(function (event) {
    $(this)
      .data('down', true)
      .data('x', event.clientX)
      .data('scrollLeft', this.scrollLeft)
      .addClass("dragging");

    return false;
  }).mouseup(function (event) {
    $(this)
      .data('down', false)
      .removeClass("dragging");
  }).mousemove(function (event) {
    if ($(this).data('down') == true) {
      this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
    }
  }).mousewheel(function (event, delta) {
    this.scrollLeft -= (delta * 30);
  }).css({
    'overflow': 'hidden',
    'cursor': '-moz-grab'
  });
  $(window).mouseout(function (event) {
    if ($('.team-form-data').data('down')) {
      try {
        if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
          $('.team-form-data').data('down', false);
        }
      } catch (e) { }
    }
  });
});
</script>

<style scoped>
.draggable {
  /* width: 90px;
  height: 90px; */
  padding: 0.5em;
  float: left;
  margin: 0 10px 10px 0;
}

#draggable2 {
  margin-bottom: 20px;
}

#draggable {
  cursor: n-resize;
}

#draggable2 {
  cursor: e-resize;
}

/* #containment-wrapper {
  width: 95%;
  height: 150px;
  border: 2px solid #ccc;
  padding: 10px;
} */

/* h3 {
  clear: left;
} */
</style>
