<style src="./CategoryItem.scss" lang="scss" scoped></style>
<template>
  <li
    class="categoryBar__categoryItem"
    :class="{ 'categoryBar__categoryItem--selected': isActive }"
    :id="product.id"
    @click="clickHandler"
  >
    <div class="categoryBar__imageWrapper">
      <img class="categoryBar__image" :src="product.img" />
    </div>
    <span class="categoryBar__itemTitle">{{ product.title }}</span>
  </li>
</template>

<script>
export default {
  props: ["product", "onClick", "isActive"],
  methods: {
    clickHandler() {
      this.onClick(this.product.id);
    },
  },
};
</script>
