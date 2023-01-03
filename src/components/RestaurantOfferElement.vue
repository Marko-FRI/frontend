<template>
  <div class="row wrap q-px-xl q-my-xl q-pb-md">
    <div
      class="col-12 col-sm-3"
      style="text-align: center"
    >
      <q-img
        :src="menu.image_path"
      />
    </div>
    <div class="col-12 col-sm-9 q-pa-md row wrap justify-between">
      <div class="text-h6">
        {{ menu.name }}
        <q-icon
          name="info_outlined"
          class="q-pl-md"
        >
          <q-tooltip
            anchor="center right"
            self="center left"
          >
            <span class="text-h6">Alergeni</span>
            <ol class="q-px-lg info-popup-text">
              <li
                v-for="(alergen, alergenIndex) in menu.alergens"
                :key="alergenIndex"
              >
                {{ alergen }}
              </li>
            </ol>
          </q-tooltip>
        </q-icon>
      </div>
      <div
        class="text-positive text-h6"
        style="text-align: right"
      >
        {{ (Math.round(menu.price * 100) / 100).toFixed(2) }} €
      </div>
      <div class="col-12 light-black-text">
        {{ menu.description }}
      </div>
    </div>
    <q-separator
      color="grey"
      width="100%"
      inset
      class="q-mt-xl"
    />
  </div>
</template>

<script>
export default {
  name: 'RestaurantOfferElement',

  props: ['menu']
}
</script>

<style scoped>
    .food-image {
        width: 189px;
        height: 144px;
    }

    .light-black-text {
        color: #504A3E;
    }

    .info-popup-text {
        font-size: 0.9rem;
    }

    .info-icon-top {
        margin-top: -0.1rem;
    }

    .info-icon-top:hover {
        cursor: pointer;
    }
</style>
