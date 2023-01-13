<template>
  <div class="categories_card col-sm-2 col-6">
    <div class="categories_card__content">
      <img src="/src/components/HomePageComponents/category.PNG">
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',

  props: ['category']
}
</script>

  <style scoped>
  .categories_card{
    padding: 1%;

  }
  .categories_card__content {
    text-align: center;
    padding: 30%;
    background: white;
    border-radius: 4px;
  }
  .categories_card__content img {
    width: 100%;
  }  
  
  </style>
