<template>
  <div class="col-8">
    <fieldset>
      <legend>Kategorije</legend>
      <div class="col-12 row justify-center">
        <q-option-group
          v-model="pickedCategories"
          :options="allCategories"
          type="checkbox"
          color="green-8"
          size="xs"
          :disable="loading"
        />
      </div>
    </fieldset>
    <!-- :disabled="(loading === true)" -->
    <!-- <br>{{ pickedCategories }} -->
  </div>
</template>

<script>

export default {
  name: 'CategoryList',

  props: {
    categories: {
      type: Array
    },

    loading: Boolean
  },

  data () {
    return {
      // allCategories: [],
      pickedCategories: []
    }
  },

  computed: {
    allCategories () {
      return this.categories.map(category => {
        return {
          label: category.name,
          value: category.id_category
        }
      })
    }
  },

  watch: {
    pickedCategories (newCategories) {
      this.$emit('onChangeCategory', newCategories)
    }
  }

  // mounted () {
  //   this.categories.forEach(category => {
  //     this.allCategories.push({
  //       label: category.name,
  //       value: category.id_category
  //     })
  //   })
  // }
}
</script>

<style scoped>
fieldset {
  border: 2px solid #759242;
  border-radius: 0px 5px 5px 0px;
  border-left: none;
  width: 100%;
  margin-left: -1px;
}

legend {
  color: black;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
}

.category-checkbox {
  font-size: 14px;
  color: black;
}
</style>
