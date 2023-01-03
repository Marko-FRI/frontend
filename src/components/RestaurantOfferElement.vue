<template>
  <div class="row wrap q-px-xl q-my-xl q-pb-md">
    <div
      class="col-3"
      style="text-align: center"
    >
      <img
        :src="menu.image_path"
        class="food-image"
      >
    </div>
    <div class="col-9 row wrap">
      <div class="col-6 text-h6">
        Meni {{ menu.name }}
        <q-icon
          name="info_outlined"
          class="q-pl-md info-icon-top"
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
        class="col-6 text-positive text-h6"
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
