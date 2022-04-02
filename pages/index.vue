<template lang="pug">
section.max-w-2xl.mx-auto.py-16.px-4(class="sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8")
  .grid.grid-cols-1.gap-y-10.gap-x-6(
    class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
  )
    .group(v-for="activity in activity.list", :key="activity.id") {{ activity.title }}
</template>
<script setup>
const route = useRoute();

const activity = reactive({
  list: [],
});

onMounted(async () => {
  const { data } = await fetch(
    `${import.meta.env.VITE_STAFF_URL}/staff/activity?account_token=${
      route.query.account_token
    }`
  ).then((res) => res.json());
  activity.list = activity.list.concat(data.list);
});
</script>

<style>
</style>
