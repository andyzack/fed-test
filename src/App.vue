<template>
  <div id="app">
    <!-- HEADER COMPONENT -->
    <AppHeader title="Products" />

    <!-- BODY CONTAINER -->
    <div class="container">
      <div class="px-2 py-2 lg:py-4 mb-10">
        <!-- CARDS OUTPUT RESULTS //START -->
        <div class="flex flex-wrap -mx-2 lg:-mx-4 px-0 lg:px-3">
          <!-- CARDS COMPONENT -->
          <AppCard
            v-for="(product, key) in products"
            :key="key"
            :id="parseInt(product.id)"
            :title="product.title"
            :description="product.description"
            :category="product.category"
            :link="product.link"
            :featured="product.featured"
            :documentSize="product.documentSize"
          />
        </div>
        <!-- CARDS OUTPUT RESULTS //END -->
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppCard
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    fetch("//prototype.carter-dev.net/fed-test/items.json")
      .then(response => response.json())
      .then(json => (this.products = json.items));
  }
};
</script>
