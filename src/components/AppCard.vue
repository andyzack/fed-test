<template>
  <div
    class="w-full px-4 py-4"
    :class="[featured == 'true' ? 'lg:w-2/3' : 'sm:w-1/2 lg:w-1/3']"
  >
    <div
      class="h-full overflow-hidden relative min-h-128 border-gray-500 border pt-8 lg:pt-16 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      :class="[
        featured == 'true'
          ? 'bg-primary-gradient text-white border-secondary-color leading-10 hover:bg-complimentary-color'
          : 'bg-white text-gray-700 text-lg border-gray-100 hover:border-secondary-color hover:text-secondary-color leading-12',
        { active: hover }
      ]"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="px-6 pt-4 lg:pt-10 pb-16 md:px-10">
        <p
          class="font-bold"
          :class="[featured == 'true' ? 'text-4xl' : 'text-2xl']"
        >
          {{ title }}
        </p>
        <p class="pt-6 text-xl leading-8">
          {{ description }}
        </p>
        <div
          v-if="documentSize"
          class="flex align-middle absolute left-0 bottom-0 text-secondary-color hover:text-primary-color text-3xl"
        >
          <AppIcon type="document" :featured="featured" />

          <span
            class="text-base text-gray-600 -ml-2 lg:-ml-4 md:-ml-4 py-4 lg:py-6 md:py-6 leading-8"
          >
            PDF ({{ documentSize }})
          </span>
        </div>
        <div v-if="documentSize" class="absolute right-0 bottom-0 text-3xl">
          <AppIcon type="arrowDown" :featured="featured" />
        </div>
        <div v-else class="absolute right-0 bottom-0 text-3xl">
          <AppIcon type="arrowRight" :featured="featured" />
        </div>
      </div>
      <a
        :href="link"
        class="absolute right-0 left-0 top-0 bottom-0"
        target="_blank"
      ></a>
    </div>
  </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";

export default {
  name: "AppCard",
  components: {
    AppIcon
  },
  data() {
    return {
      hover: false
    };
  },
  props: {
    id: Number,
    title: String,
    description: String,
    category: String,
    link: String,
    featured: String,
    documentSize: String,
    type: String
  }
};
</script>
