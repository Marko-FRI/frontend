<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>

@font-face {
  font-family: 'itimregular';
  src: url('css/itim-regular-webfont.woff2') format('woff2'),
       url('css/itim-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
    font-family: 'itimregular';
}

</style>
