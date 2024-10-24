<style src="./Posts.scss" lang="scss" scoped></style>

<template>
  <div class="posts">
    <div class="pastWrapper" v-for="post in postImages" :key="post">
      <img class="pastWrapper__image" :src="post" alt="productPost" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postImages: [
        "src/assets/decorations/arch.webp",
        "src/assets/decorations/architecture.jpeg",
        "src/assets/decorations/iron.jpeg",
        "src/assets/decorations/engineer2.jpeg",
        "src/assets/decorations/timber.jpg",
        "src/assets/decorations/wood.jpg",
        "src/assets/decorations/engineer.jpeg",
        "src/assets/decorations/wood2.jpg",
        "src/assets/decorations/loole.jpeg",
        "src/assets/decorations/architecture.jpeg",
        "src/assets/decorations/iron.jpeg",
        "src/assets/decorations/engineer2.jpeg",
        "src/assets/decorations/timber.jpg",
        "src/assets/decorations/wood.jpg",
        "src/assets/decorations/engineer.jpeg",
        "src/assets/decorations/wood2.jpg",
        "src/assets/decorations/loole.jpeg",
        "src/assets/decorations/arch.webp",
      ],
    };
  },
};
</script>
