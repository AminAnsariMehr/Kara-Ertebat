<style src="./CategoryBar.scss" lang="scss" scoped></style>

<template>
  <div class="postsWrapper">
    <ul class="categoryBar" id="categoryBar" @click="clickCategoryHandler">
      <li
        class="categoryBar__categoryItem"
        :class="{ 'categoryBar__categoryItem--selected': product.isActive }"
        :id="product.id"
        v-for="product in products"
        :key="product"
        @click="clickCategoryHandler"
      >
        <div class="categoryBar__imageWrapper">
          <img class="categoryBar__image" :src="product.img" />
        </div>
        <span class="categoryBar__itemTitle">{{ product.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/loole.jpeg",
          title: "آهن آلات",
          isActive: true,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/cement.jpg",
          title: "گچ و سیمان",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/steel.jpg",
          title: "آلومینیوم",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/rock.jpeg",
          title: "انواع سنگ",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/timber.jpg",
          title: "چوب و تخته",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/loole.jpeg",
          title: "آهن آلات",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/cement.jpg",
          title: "گچ و سیمان",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/steel.jpg",
          title: "آلومینیوم",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/rock.jpeg",
          title: "انواع سنگ",
          isActive: false,
        },
        {
          id: Math.random().toString(36).substring(2, 6),
          img: "src/assets/decorations/timber.jpg",
          title: "چوب و تخته",
          isActive: false,
        },
      ],
    };
  },

  methods: {
    newProductActive(id) {
      console.log(id);
      const getNewProduct = this.products.filter((item) => {
        return item.id === id;
      });

      // console.log((getNewProduct[0].isActive = true));
      getNewProduct[0].isActive = true;
    },

    // ---------------

    clickCategoryHandler(e) {
      e.stopPropagation();

      let productParent = e.target.parentElement;
      let productId;

      if (productParent.className === "categoryBar__imageWrapper") {
        let productId = productParent.parentElement.id;
        // console.log(productId);
        this.newProductActive(productId);
      } else {
        let productId = productParent.id;
        this.newProductActive(productId);
      }

      const productActives = this.products.filter((item) => {
        return item.isActive === true;
      });

      productActives[0].isActive = false;

      // function newProductActive(id) {
      //   console.log(id);
      //   const getNewProduct = this.products.filter((item) => {
      //     return item.id === id;
      //   });

      //   console.log(getNewProduct);
      // }

      // ----------------------------
      // console.log(this.products[0]);
    },
  },
};
</script>
