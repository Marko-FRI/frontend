<template>
  <div>
    <div
      style="text-align: center"
      class="text-h6"
    >
      Za rezervacijo izberite datum, uro in število oseb.
    </div>
    <div
      class="form-container q-mx-xl q-my-md"
    >
      <div
        style="text-align: center"
        class="q-pt-xl q-pb-md"
      >
        <q-date
          v-model="date"
          color="green-7"
          :locale="{ days: days, daysShort: daysShort, months: months, monthsShort: monthsShort }"
        />
        <!-- mogoce se da locale="days" -->
      </div>
      <div
        class="custom-input-width q-mx-auto"
      >
        <label
          class="text-h6"
        >Čas</label>
        <q-input
          v-model="time"
          type="time"
          square
          filled
          bg-color="white"
        />
      </div>
      <div class="row wrap q-py-xl">
        <span
          class="offset-3 col-5 q-pl-lg text-h6"
        >
          Število oseb
        </span>
        <q-rating
          v-model="numPersons"
          max="10"
          size="md"
          color="green-5"
          icon="person_outline"
          icon-selected="person"
          class="offset-3 col-5 q-pl-lg"
        />
        <q-input
          v-model.number="numPersons"
          placeholder="0"
          type="number"
          filled
          square
          bg-color="white"
          class="col-1 q-pl-md"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationStepOne',

  data () {
    return {
      date: '2022/12/21',
      time: '',
      numPersons: 0,
      days: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota'],
      daysShort: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
      months: ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec']
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
