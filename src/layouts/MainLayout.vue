<template>
  <q-layout>
    <header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderComponent from 'src/components/HeaderComponent.vue'

export default {
  name: 'MainLayout',

  components: {
    HeaderComponent
  }
}
</script>
