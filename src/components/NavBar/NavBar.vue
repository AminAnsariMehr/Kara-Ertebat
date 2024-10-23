<style src="./NavBar.scss" lang="scss" scoped></style>

<template>
  <nav class="navigationBar">
    <ul class="menu">
      <li class="menu__menuItems activeTab">
        <i class="fa-solid fa-house menu__menuIcon"></i>
        <span href="#" class="menu__menuTitle">خانه</span>
      </li>
      <li class="menu__menuItems">
        <i class="fi fi-rr-apps-add menu__menuIcon"></i>
        <span href="#" class="menu__menuTitle">تولید کنندگان</span>
      </li>
      <li class="menu__menuItems menu__menuItems--newPost">
        <i class="fi fi-rs-add menu__menuIcon"></i>
        <span href="#" class="menu__menuTitle menu__menuTitle--newPost"
          >آگهی جدید</span
        >
      </li>
      <li class="menu__menuItems">
        <i class="fi fi-rr-gallery menu__menuIcon"></i>
        <span href="#" class="menu__menuTitle">نمایشگاه</span>
      </li>
      <li class="menu__menuItems">
        <i class="fi fi-rr-user menu__menuIcon"></i>
        <span href="#" class="menu__menuTitle">پروفایل</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
