<style src="./CategoryBar.scss" lang="scss" scoped></style>

<template>
  <div class="postsWrapper">
    <ul class="categoryBar" id="categoryBar">
      <category-item
        v-for="product in products"
        :product="product"
        :onClick="changeActiveCategory"
        :isActive="activeCategory === product.id"
        :key="product.id"
      ></category-item>
    </ul>
  </div>
</template>

<script>
import CategoryItem from "./../CategoryItem/CategoryItem.vue";

export default {
  components: { "category-item": CategoryItem },
  created() {
    this.activeCategory = this.products[0].id;
  },
  data() {
    return {
      products: [
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/loole.jpeg",
          title: "آهن آلات",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/cement.jpg",
          title: "گچ و سیمان",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/steel.jpg",
          title: "آلومینیوم",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/rock.jpeg",
          title: "انواع سنگ",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/timber.jpg",
          title: "چوب و تخته",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/loole.jpeg",
          title: "آهن آلات",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/cement.jpg",
          title: "گچ و سیمان",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/steel.jpg",
          title: "آلومینیوم",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/rock.jpeg",
          title: "انواع سنگ",
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/timber.jpg",
          title: "چوب و تخته",
        },
      ],
      activeCategory: null,
    };
  },
  methods: {
    newProductActive(id) {
      const getNewProduct = this.products.filter((item) => {
        return item.id === id;
      });
      getNewProduct[0].isActive = true;
    },
    changeActiveCategory(id) {
      this.activeCategory = id;
    },
  },
};
</script>
