<style src="./Header.scss" lang="scss" scoped></style>

<template>
  <header class="header">
    <statusBar-component></statusBar-component>
    <div class="headerSeparator">
      <div class="header__titleApp">
        <i class="fi fi-rr-menu-burger header__burgerIcon"></i>
        <h1 class="header__siteTitle">های ساخت</h1>
      </div>

      <div class="header__userPanel">
        <i class="fi fi-rs-bell header__notificationIcon"></i>
        <div class="header__locationData">
          <i class="fi fi-rr-marker header__locationIcon"></i>
          <span class="header__locationName">تهران</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import StatusBar from "@components/StatusBar/StatusBar.vue";
export default {
  components: {
    "statusBar-component": StatusBar,
  },
};
</script>
