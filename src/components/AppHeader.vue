<template>
  <div
    class="hidden text-5xl-2 font-bold text-center text-white bg-gray-800 pt-32 pb-16 py-12 -rotate-45"
  >
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: String
  }
};
</script>
