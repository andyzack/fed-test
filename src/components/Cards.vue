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
          : 'bg-white text-gray-700 text-lg border-gray-100 hover:border-complimentary-color hover:text-secondary-color leading-12',
        { active: hover }
      ]"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="px-6 py-4 lg:px-10 md:px-10">
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
          class="carter-icon-arrow absolute left-0 bottom-0 text-secondary-color hover:text-primary-color text-3xl"
        >
          <i class="block text-secondary-color font-normal relative p-8">
            <IconDocument
              fill="#cfcfcf"
              class="fill-secondary-color w-8 h-auto"
            />
          </i>
        </div>
        <div
          v-if="documentSize"
          class="carter-icon-arrow absolute right-0 bottom-0 text-secondary-color hover:text-primary-color text-3xl"
        >
          <i
            class="block text-secondary-color font-normal relative p-8"
            :class="[
              featured == 'true'
                ? 'text-white bg-primary-color'
                : 'text-secondary-color'
            ]"
          >
            <IconArrowDown
              :fill="[featured == 'true' ? '#ffffff' : '#00ad87']"
              class="fill-secondary-color w-8 h-auto"
            />
          </i>
        </div>
        <div
          v-else
          class="carter-icon-arrow absolute right-0 bottom-0 text-secondary-color hover:text-primary-color text-3xl"
        >
          <i
            class="block text-secondary-color font-normal relative p-8"
            :class="[
              featured == 'true'
                ? 'text-white bg-secondary-color'
                : 'text-secondary-color'
            ]"
          >
            <IconArrowRight
              :fill="[featured == 'true' ? '#ffffff' : '#00ad87']"
              class="fill-secondary-color w-8 h-auto"
            />
          </i>
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
import IconDocument from "../assets/icons/document.svg?inline";
import IconArrowDown from "../assets/icons/arrow-down.svg?inline";
import IconArrowRight from "../assets/icons/arrow-right.svg?inline";

export default {
  name: "Cards",
  components: {
    IconDocument,
    IconArrowDown,
    IconArrowRight
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
    documentSize: String
  }
};
</script>
