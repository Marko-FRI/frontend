<template>
  <div class="categories">
    <div class="categories_cards row">
      <div class="categories_card col-sm-2 col-6">
        <div class="categories_card__content">
          <img src="../HomePageComponents/category.png">
          indijska hrana
        </div>
      </div>
      <div class="categories_card col-sm-2 col-6">
        <div class="categories_card__content">
          <img src="../HomePageComponents/category.png">
          indijska hrana
        </div>
      </div>
      <div class="categories_card col-sm-2 col-6">
        <div class="categories_card__content">
          <img src="../HomePageComponents/category.png">
          indijska hrana
        </div>
      </div>
      <div class="categories_card col-sm-2 col-6">
        <div class="categories_card__content">
          <img src="../HomePageComponents/category.png">
          indijska hrana
        </div>
      </div>
      <div class="categories_card col-sm-2 col-6">
        <div class="categories_card__content">
          <img src="../HomePageComponents/category.png">
          indijska hrana
        </div>
      </div>
      <div class="categories_card col-sm-2 col-6">
        <div class="categories_card__content">
          <img src="../HomePageComponents/category.png">
          indijska hrana
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList'
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
