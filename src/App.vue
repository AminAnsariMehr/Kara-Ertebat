<style src="./App.scss" lang="scss" scoped></style>

<template>
  <div class="container">
    <statusBar-component></statusBar-component>
    <!-- <header-component></header-component> -->
    <searchBar-component></searchBar-component>
    <categoryBar-component></categoryBar-component>
    <posts-component></posts-component>
    <navbar-component></navbar-component>
  </div>
</template>

<script>
import StatusBar from "@components/StatusBar/StatusBar.vue";
import Header from "@/components/Header/Header.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import CategoryBar from "@/components/CategoryBar/CategoryBar.vue";
import Posts from "@/components/Posts/Posts.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  components: {
    "statusBar-component": StatusBar,
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
