<style src="./NavBar.scss" lang="scss" scoped></style>

<template>
  <nav class="navigationBar">
    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.title"
        @click="clickHandler(item.title)"
        class="menu__menuItems"
        :class="{
          'menu__menuItems--selected': item.title === activeItem,
        }"
      >
        <i :class="item.icon"></i>
        <span href="#" class="menu__menuTitle">{{ item.title }}</span>
      </li>

      <li class="menu__menuItems menu__menuItems--newPost">
        <i class="fi fi-rs-add menu__menuIcon"
          ><i class="menu__menuIcon--border"></i
        ></i>
        <span href="#" class="menu__menuTitle menu__menuTitle--newPost"
          >آگهی جدید</span
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          icon: "fa-solid fa-house menu__menuIcon",
          title: "خانه",
        },
        {
          icon: "fi fi-rr-apps-add menu__menuIcon",
          title: "تولید کنندگان",
        },
        {
          icon: "fi fi-rr-gallery menu__menuIcon",
          title: "نمایشگاه",
        },
        {
          icon: "fi fi-rr-user menu__menuIcon",
          title: "پروفایل",
        },
      ],
      activeItem: "خانه",
    };
  },
  methods: {
    clickHandler(title) {
      this.activeItem = title;
    },
  },
};
</script>
