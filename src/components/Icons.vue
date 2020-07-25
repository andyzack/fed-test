<template>
  <i
    class="block relative p-8"
    :class="[
      featured == 'true'
        ? 'text-white bg-secondary-color'
        : 'text-secondary-color'
    ]"
  >
    <IconArrowDown
      v-if="itype === 'arrowDown'"
      :fill="[featured == 'true' ? '#ffffff' : '#00ad87']"
      class="fill-secondary-color w-8 h-auto"
    />

    <IconArrowRight
      v-if="itype === 'arrowRight'"
      :fill="[featured == 'true' ? '#ffffff' : '#00ad87']"
      class="fill-secondary-color w-8 h-auto"
    />

    <IconDocument
      v-if="itype === 'document'"
      fill="#cfcfcf"
      class="fill-secondary-color w-8 h-auto"
    />
  </i>
</template>

<script>
import IconDocument from "../assets/icons/document.svg?inline";
import IconArrowDown from "../assets/icons/arrow-down.svg?inline";
import IconArrowRight from "../assets/icons/arrow-right.svg?inline";

export default {
  name: "iIcons",
  components: {
    IconDocument,
    IconArrowDown,
    IconArrowRight
  },
  data() {
    return {
      itype: this.type
    };
  },
  props: {
    featured: String,
    type: String
  }
};
</script>
