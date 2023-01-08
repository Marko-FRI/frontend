<template>
  <div>
    <div
      style="text-align: center"
      class="text-h6"
    >
      Za rezervacijo izberite datum, uro in število oseb.
    </div>
    <div
      class="form-container q-my-md"
    >
      <div
        style="text-align: center"
        class="q-pt-xl q-pb-md"
      >
        <q-date
          v-model="date"
          color="positive"
          :locale="{ days: days, daysShort: daysShort, months: months, monthsShort: monthsShort }"
          :disable="loading"
        />
        <!-- mogoce se da locale="days" -->
      </div>
      <div
        class="q-mx-auto text-center"
        style="width: 30%;"
      >
        <label
          class="text-h6"
        >Čas</label>
        <q-input
          v-model="time"
          :rules="[val => !!val || 'Field is required']"
          type="time"
          square
          filled
          bg-color="white"
          :disable="loading"
          style="max-width: 200px;"
          class="q-mx-auto"
        />
      </div>
      <div class="row wrap q-pb-xl justify-center">
        <span
          class="col-12 text-h6 text-center"
        >
          Število oseb
        </span>
        <q-rating
          v-model="numPersons"
          max="10"
          size="md"
          color="positive"
          icon="person_outline"
          icon-selected="person"
          :disable="loading"
        />
        <q-input
          v-model.number="numPersons"
          :rules="[val => !!val]"
          placeholder="0"
          type="number"
          filled
          square
          bg-color="white"
          class=" q-pa-md"
          input-class="text-center"
          style="max-width: 150px;"
          :disable="loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationStepOne',

  props: ['loading'],

  data () {
    return {
      date: '',
      time: '',
      numPersons: 0,
      days: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota'],
      daysShort: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
      months: ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec']
    }
  },

  watch: {
    date (newDate) {
      this.$emit('onChangeDate', newDate)
    },

    time (newTime) {
      this.$emit('onChangeTime', newTime)
    },

    numPersons (newNumPersons) {
      this.$emit('onChangeNumPersons', newNumPersons)
    }
  }
}
</script>

<style scoped>
    .form-container {
        background-color: #F2F2EF;
    }

    .custom-input-width {
        width: 30%;
    }
</style>
