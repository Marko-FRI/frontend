<template>
  <div class="categories">
    <div class="categories_cards row">
      <category-card
        v-for="(category,index) in categories"
        :key="index"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue'
export default {
  name: 'CategoryList',
  components: {
    CategoryCard
  },

  props: ['categories']

}
</script>
<style scoped>
.categories{
  background: #d4d4d4;
  width: 100%;
  position:relative;
}
.categories_cards {
  margin: 0 15%;
  padding: 50px 0;
}
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
