<template>
  <div id="app">
    <!-- HEADER COMPONENT -->
    <Header title="Products" />

    <!-- BODY CONTAINER -->
    <div class="container">
      <div class="px-2 py-4 mb-10">
        <!-- SEARCHAVAILABILITY //START -->
        <div class="flex flex-wrap -mx-4 px-3 lg:px-0">
          <!-- CARDS COMPONENT -->
          <Cards
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
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  components: {
    Header,
    Cards
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
