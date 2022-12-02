<template>
  <div>
    Ime: {{ restaurant.name }}
  </div>
</template>

<script>
export default {
  name: 'RestaurantElement',

  props: ['restaurant']
}
</script>
