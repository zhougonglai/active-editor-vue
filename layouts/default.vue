<template lang="pug">
header.max-w-7xl.mx-auto.px-4.relative(class="sm:px-6")
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
    ul.flex-1.flex.space-x-10.items-center.gap-x-4(
      class="sm:space-x-0",
      ref="nav",
      v-click-outside:[nav]="outClick"
    )
      li.group.bg-white.rounded-md.inline-flex.items-center.text-base.font-medium.cursor-pointer(
        v-for="(menu, i) in menus",
        :key="menu.key",
        :class="[activeIndex[0] === menu.key ? 'text-gray-900' : 'text-gray-500', 'hover:text-gray-900 focus:outline-none']",
        @click.stop="activeMenu(menu)"
      )
        span {{ menu.title }}
        ChevronDownIcon(
          :class="[activeIndex[0] === menu.key ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
        )
    .-mr-2.-my-2(class="md:hidden")
      MenuIcon.w-8.h-8
  transition(
    enter-active-class="transition duration-200 ease-out",
    enter-from-class="translate-y-2 opacity-0",
    enter-to-class="translate-y-0 opacity-100",
    leave-active-class="transition duration-150 ease-in",
    leave-from-class="translate-y-0 opacity-100",
    leave-to-class="translate-y-1 opacity-0"
  )
    .absolute.z-10.w-screen.max-w-sm.px-4.mt-3.transform.top-full.bg-white.left-40(
      v-if="activeIndex.length",
      class="sm:px-0 lg:max-w-3xl"
    )
      .overflow-hidden.rounded-lg.shadow-lg.ring-1.ring-black.ring-opacity-5.grid.grid-cols-2.gap-x-6
        ul.relative.flex.gap-8.bg-white.p-7.flex-col.border-r.border-gray-100
          li.flex.items-center.p-2.-m-3.transition.duration-150.ease-in-out.rounded-lg.cursor-pointer(
            v-for="m in menus.find((menu) => menu.key === activeIndex[0]).children",
            :key="m.key",
            @click.stop="activeMenu(m)",
            class="hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
          ) {{ m.title }}
        transition(
          enter-active-class="transition duration-200 ease-out",
          enter-from-class="translate-y-2 opacity-0",
          enter-to-class="translate-y-0 opacity-100",
          leave-active-class="transition duration-150 ease-in",
          leave-from-class="translate-y-0 opacity-100",
          leave-to-class="translate-y-1 opacity-0"
        )
          ul.relative.flex.gap-8.bg-white.p-7.flex-col(
            v-if="activeIndex.length > 1"
          )
            li.flex.items-center.p-2.-m-3.transition.duration-150.ease-in-out.rounded-lg.cursor-pointer(
              v-for="m in menus.find((menu) => menu.key === activeIndex[0]).children.find((menu) => menu.key === active).children",
              :key="m.key",
              class="hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            ) {{ m.title }}
main
  slot
</template>
<script setup>
import { MenuIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const menus = [
  {
    key: "1",
    title: "应用",
    children: [
      {
        key: "1-1",
        title: "测试与测量",
        children: [
          {
            key: "1-1-1",
            title: "测试",
            path: "/test",
          },
          {
            key: "1-1-2",
            title: "测量",
            path: "/measure",
          },
        ],
      },
      {
        key: "1-2",
        title: "广播电视与媒体",
        children: [
          {
            key: "1-2-1",
            title: "广播电视",
            path: "/broadcast",
          },
          {
            key: "1-2-2",
            title: "媒体",
            path: "/media",
          },
        ],
      },
      {
        key: "1-3",
        title: "航空航天和国防安全",
        children: [
          {
            key: "1-3-1",
            title: "航空航天",
            path: "/aircraft",
          },
          {
            key: "1-3-2",
            title: "国防安全",
            path: "/security",
          },
        ],
      },
      {
        key: "1-4",
        title: "网络安全",
        children: [
          {
            key: "1-4-1",
            title: "网络安全",
            path: "/network",
          },
        ],
      },
    ],
  },
  {
    key: "2",
    title: "产品",
    children: [
      {
        key: "2-1",
        title: "测试与测量",
        children: [
          {
            key: "2-1-1",
            title: "测试",
            path: "/test",
          },
          {
            key: "2-1-2",
            title: "测量",
            path: "/measure",
          },
        ],
      },
      {
        key: "2-2",
        title: "广播电视与媒体",
        children: [
          {
            key: "2-2-1",
            title: "广播电视",
            path: "/broadcast",
          },
          {
            key: "2-2-2",
            title: "媒体",
            path: "/media",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "服务与支持",
    children: [
      {
        key: "3-1",
        title: "售后及校准",
        children: [
          {
            key: "3-1-1",
            title: "售后",
            path: "/after-sales",
          },
          {
            key: "3-1-2",
            title: "校准",
            path: "/measure",
          },
        ],
      },
      {
        key: "3-2",
        title: "本地系统集成与服务",
        children: [
          {
            key: "3-2-1",
            title: "本地系统集成",
            path: "/local-system",
          },
          {
            key: "3-2-2",
            title: "服务",
            path: "/service",
          },
        ],
      },
    ],
  },
  {
    key: "4",
    title: "知识库",
    children: [
      {
        key: "4-1",
        title: "测试与测量",
        children: [
          {
            key: "4-1-1",
            title: "测试",
            path: "/test",
          },
          {
            key: "4-1-2",
            title: "测量",
            path: "/measure",
          },
        ],
      },
      {
        key: "4-2",
        title: "广播电视与媒体",
        children: [
          {
            key: "4-2-1",
            title: "广播电视",
            path: "/broadcast",
          },
          {
            key: "4-2-2",
            title: "媒体",
            path: "/media",
          },
        ],
      },
    ],
  },
  {
    key: "5",
    title: "关于我们",
    children: [
      {
        key: "5-1",
        title: "测试与测量",
        children: [
          {
            key: "5-1-1",
            title: "测试",
            path: "/test",
          },
          {
            key: "5-1-2",
            title: "测量",
            path: "/measure",
          },
        ],
      },
      {
        key: "5-2",
        title: "广播电视与媒体",
        children: [
          {
            key: "5-2-1",
            title: "广播电视",
            path: "/broadcast",
          },
          {
            key: "5-2-2",
            title: "媒体",
            path: "/media",
          },
        ],
      },
    ],
  },
  {
    key: "6",
    title: "招贤纳士",
    children: [
      {
        key: "6-1",
        title: "测试与测量",
        children: [
          {
            key: "6-1-1",
            title: "测试",
            path: "/test",
          },
          {
            key: "6-1-2",
            title: "测量",
            path: "/measure",
          },
        ],
      },
      {
        key: "6-2",
        title: "广播电视与媒体",
        children: [
          {
            key: "6-2-1",
            title: "广播电视",
            path: "/broadcast",
          },
          {
            key: "6-2-2",
            title: "媒体",
            path: "/media",
          },
        ],
      },
    ],
  },
];

const subMenus = reactive({
  list: [],
});
const nav = ref();

const active = ref("");

const activeIndex = computed(() =>
  active.value ? active.value.split("-") : []
);

const activeMenu = (menu) => {
  if (menu.key.split("-").length > 1) {
    return (active.value = menu?.key);
  }
  if (menu.key !== activeIndex[0]) {
    console.log("different", menu);
    active.value = "";
    return setTimeout(() => {
      active.value = menu?.key;
    }, 250);
  }
  return;
};

const outClick = () => {
  active.value = "";
};
</script>

<style lang="scss">
</style>
