<template>
  <div>
    <img
      class="header-img"
      src="./restaurant_header_picture.png"
      alt="default"
    >
    <div class="col-12 row no-wrap change-position-top">
      <div class="q-pl-xl col-8 custom-text">
        Gostilna Pod Lipco
      </div>
      <div class="col-4">
        <q-btn
          label="Dodaj med priljubljene"
          color="white"
          flat
          no-caps
          size="1.15rem"
          class="bg-green-8 border-rad q-px-lg button-float q-mr-xl"
        />
      </div>
    </div>

    <div class="col-12 row">
      <div class="col-8 row q-gutter-x-md">
        <q-tabs
          v-model="tab"
          class="size-font col-9 row justify-start"
        >
          <!-- Ko se izbere enega, se spremeni barva v zeleno -->
          <q-tab
            name="ponudba"
            label="Ponudba"
            color="green-8"
            no-caps
            class="offset-3 col-3 size-font"
          />
          <q-tab
            name="mnenja"
            label="Mnenja"
            no-caps
            class="col-3 size-font"
          />
          <q-tab
            name="informacije"
            label="Informacije"
            no-caps
            class="col-3 size-font"
          />
          <!-- <q-tab
            name="Rezerviraj"
            label="Rezerviraj"
            no-caps
            indicator-color="transparent"
            class="col-2 size-font bg-green-8 text-white border-rad"
          /> -->
        </q-tabs>
        <q-btn
          label="Rezerviraj"
          color="white"
          flat
          no-caps
          style="font-size: 1.2rem"
          class="col-2 bg-green-8 border-rad"
        />
      </div>
      <div class="col-4">
        {{ tab }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantPage',

  data () {
    return {
      tab: 'ponudba'
    }
  }
}
</script>

<style scoped>
  .header-img {
    filter: brightness(35%);
    width: 100%;
    height: auto;
    z-index: -1;
  }

  .border-rad {
    border-radius: 5px;
  }

  .change-position-top {
    margin-top: -65px;
    margin-bottom: 22px;
  }

  .custom-text {
    color: white;
    font-size: 30px;
    z-index: 1;
  }

  .button-float {
    float: right;
    margin-top: -8px;
  }

  .size-font {
    font-size: 40px !important;
    color: black;
  }

  :deep .q-tab__label {
   font-size: 1.5rem;
}
</style>
