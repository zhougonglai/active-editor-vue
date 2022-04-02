<template lang="pug">
header.max-w-7xl.mx-auto.px-4(class="sm:px-6")
  nav.flex.justify-between.items-center.border-b-2.border-gray-100.py-6(
    class="md:justify-start md:space-x-10"
  )
    NuxtLink.logo(to="/")
      span.sr-only(aria-hidden="true") Workflow
      img.h-8.w-auto(
        src="https://www.leigod.com/img/logo.png",
        alt="雷神加速器",
        class="sm:h-10"
      )
    .-mr-2.-my-2(class="md:hidden")
      MenuIcon.w-8.h-8
main
  slot
</template>
<script setup>
import { MenuIcon } from "@heroicons/vue/solid";
</script>

<style lang="scss">
</style>
