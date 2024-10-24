<style src="./CategoryBar.scss" lang="scss" scoped></style>

<template>
  <div class="postsWrapper">
    <ul class="categoryBar" @click="clickCategoryHandler">
      <!-- <li class="categoryBar__categoryItem categoryBar__categoryItem--selected">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/loole.jpeg"
          />
        </div>
        <span class="categoryBar__itemTitle">آهن آلات</span>
      </li> -->

      <li
        class="categoryBar__categoryItem categoryBar__categoryItem"
        v-for="product in products"
        :key="product"
      >
        <div class="categoryBar__imageWrapper">
          <img class="categoryBar__image" :src="product.img" />
        </div>
        <span class="categoryBar__itemTitle">{{ product.title }}</span>
      </li>

      <!-- <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/cement.jpg"
          />
        </div>
        <span class="categoryBar__itemTitle">گچ و سیمان</span>
      </li>
      <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/steel.jpg"
          />
        </div>
        <span class="categoryBar__itemTitle">آلومینیوم</span>
      </li>
      <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/rock.jpeg"
          />
        </div>
        <span class="categoryBar__itemTitle">انواع سنگ</span>
      </li>
      <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/timber.jpg"
          />
        </div>
        <span class="categoryBar__itemTitle">چوب و تخته</span>
      </li>
      <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/timber.jpg"
          />
        </div>
        <span class="categoryBar__itemTitle">چوب و تخته</span>
      </li>
      <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/timber.jpg"
          />
        </div>
        <span class="categoryBar__itemTitle">چوب و تخته</span>
      </li>
      <li class="categoryBar__categoryItem">
        <div class="categoryBar__imageWrapper">
          <img
            class="categoryBar__image"
            src="./../../assets/decorations/timber.jpg"
          />
        </div>
        <span class="categoryBar__itemTitle">چوب و تخته</span>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { img: "src/assets/decorations/loole.jpeg", title: "آهن آلات" },
        { img: "src/assets/decorations/cement.jpg", title: "گچ و سیمان" },
        { img: "src/assets/decorations/steel.jpg", title: "آلومینیوم" },
        { img: "src/assets/decorations/rock.jpeg", title: "انواع سنگ" },
        { img: "src/assets/decorations/timber.jpg", title: "چوب و تخته" },
        { img: "src/assets/decorations/loole.jpeg", title: "آهن آلات" },
        { img: "src/assets/decorations/cement.jpg", title: "گچ و سیمان" },
        { img: "src/assets/decorations/steel.jpg", title: "آلومینیوم" },
        { img: "src/assets/decorations/rock.jpeg", title: "انواع سنگ" },
        { img: "src/assets/decorations/timber.jpg", title: "چوب و تخته" },
      ],
    };
  },

  methods: {
    clickCategoryHandler(e) {
      console.log(e);
    },
  },
};
</script>
