<template>
  <div class="main-title">
    <div class="main-title_title q-mx-auto">
      {{ title }}
    </div>
    <div class="main-title_line" />
  </div>
</template>

<script>
export default {
  name: 'MainTitle',
  props: ['title']
}
</script>

<style scoped>

.main-title_line {
    border: 1px solid black;
    width: 100%;
}
.main-title_title {
    display: inline;
    padding: 0 30px;
    position: absolute;
    align-items: center;
    margin:auto;
    background: white;
}

.main-title {
  font-size: 7vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 40px 0;
  margin-top: 120px;
}

@media (min-width: 576px) {
  .main-title {
    font-size: 3vw;
  }
}

</style>
