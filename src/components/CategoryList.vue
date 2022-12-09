<template>
  <div class="col-6 q-mb-lg ">
    <div class="fit row wrap justify-center items-start content-start bg-grey-4 q-pa-lg">
      <category-element
        v-for="category in categories"
        :key="category.category_id"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import CategoryElement from './CategoryElement.vue'

export default {
  name: 'CategoryList',

  components: {
    CategoryElement
  },

  props: ['categories']
}
</script>
