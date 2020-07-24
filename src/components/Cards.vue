<template>
  <div
    class="w-full px-4 py-4"
    :class="[featured == 'true' ? 'lg:w-2/3' : 'sm:w-1/2 lg:w-1/3']"
  >
    <div
      class="h-full overflow-hidden relative min-h-128 border-gray-500 border pt-12 leading-12"
      :class="[
        featured == 'true'
          ? 'bg-primary-gradient text-white border-teal-500'
          : 'bg-white text-gray-700 text-lg border-gray-500'
      ]"
    >
      <div class="px-6 py-4">
        <p :class="[featured == 'true' ? 'text-4xl' : 'text-2xl']">
          {{ title }}
        </p>
        <p class="pt-6 text-xl">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    id: Number,
    title: String,
    description: String,
    category: String,
    link: String,
    featured: String,
    documentSize: String
  }
};
</script>
