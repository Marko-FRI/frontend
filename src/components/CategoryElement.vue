<template>
  <div class="col-2">
    <div class="category text-center">
      {{ category.category_name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryElement',
  props: ['category']
}
</script>

<style scoped>
    .category {
        width: 100px;
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        background-color: #ffffff;
        color: #759242;
        padding-top: 40px;
    }
</style>
