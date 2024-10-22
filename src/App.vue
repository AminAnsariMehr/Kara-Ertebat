<style src="./App.scss" lang="scss" scoped></style>

<template>
  <div class="container"></div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import CategoryBar from "@/components/CategoryBar/CategoryBar.vue";
import Posts from "@/components/Posts/Posts.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  components: {
    "header-component": Header,
    "searchBar-component": SearchBar,
    "categoryBar-component": CategoryBar,
    "posts-component": Posts,
    "navbar-component": NavBar,
  },

  data() {
    return {};
  },
};
</script>
