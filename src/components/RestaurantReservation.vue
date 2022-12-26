<template>
  <div class="col-12 row wrap q-mt-md">
    <div
      class="col-12 text-h3"
      style="text-align: center"
    >
      Rezervacija
    </div>
    <div class="back-button text-grey-7 q-ml-xl">
      <span
        @click="$emit('back_to_restaurant')"
      >Nazaj na restavracijo</span>
    </div>
    <q-stepper
      v-model="step"
      animated
      flat
      class="col-8 q-my-xl"
    >
      <q-step
        :name="1"
        title="Povpraševanje"
        color="green-7"
        :done="step > 1"
      >
        <reservation-step-one />

        <q-stepper-navigation
          style="text-align: right"
          class="q-mr-xl"
        >
          <q-btn
            label="Naprej >"
            color="white"
            flat
            no-caps
            style="font-size: 1rem"
            class="bg-green-7 border-rad"
            @click="step = 2"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Izbira"
        :color="(step > 1) ? 'green-7' : 'grey-7'"
        :done="step > 2"
      >
        <reservation-step-two :menus="menus" />
        <q-dialog
          v-model="confirm"
          persistent
        >
          <q-card>
            <q-card-section class="row items-center text-h5 q-pa-xl">
              <span class="q-ml-sm">Ali ste prepričani, da žeilte rezervirati?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                v-close-popup
                flat
                label="Prekliči"
                color="primary"
                no-caps
                style="font-size: 1rem"
                class="border-rad text-grey-7"
                @click="confirm = false"
              />
              <q-btn
                v-close-popup
                flat
                label="Rezerviraj"
                color="white"
                no-caps
                style="font-size: 1rem"
                class="bg-green-7 border-rad q-ma-sm"
                @click="step = 3"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-stepper-navigation class="row no-wrap">
          <div class="col-6">
            <q-btn
              flat
              no-caps
              label="< Nazaj"
              class="border-rad text-grey-7"
              @click="step = 1"
            />
          </div>
          <div
            class="col-6"
            style="text-align: right"
          >
            <q-btn
              label="Rezerviraj"
              color="white"
              flat
              no-caps
              style="font-size: 1rem"
              class="bg-green-7 border-rad"
              @click="confirm = true"
            />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Potrditev"
        :color="(step > 2) ? 'green-7' : 'grey-7'"
        active-icon="done"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation style="text-align: center">
          <q-btn
            label="Domov"
            color="white"
            flat
            no-caps
            style="font-size: 1rem"
            class="bg-green-7 border-rad"
            @click="$router.push('/')"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import ReservationStepOne from '../components/ReservationStepOne.vue'
import ReservationStepTwo from '../components/ReservationStepTwo.vue'

export default {
  name: 'RestaurantReservation',

  components: {
    ReservationStepOne,
    ReservationStepTwo
  },

  props: ['menus'],

  data () {
    return {
      step: 1,
      error: 1,
      confirm: true
    }
  }

  // methods: {
  //   confirmReservation () {
  //     this.confirm = true
  //   }
  // }
}
</script>

<style scoped>
    .back-button {
        text-decoration: underline;
        font-size: 1.25rem;
        margin-top: -2rem;
    }

    .back-button span:hover {
        cursor: pointer;
    }

    .border-rad {
        border-radius: 5px;
    }
</style>
