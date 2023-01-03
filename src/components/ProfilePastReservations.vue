<template>
  <div class="row wrap">
    <div
      style="text-align: center"
      class="text-h4 q-mb-xl col-12"
    >
      Pretekle Rezervacije
    </div>
    <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <past-reservation-card
        v-for="pastReservation in pastReservations"
        :key="pastReservation.id_reservation"
        :past-reservation="pastReservation"
        class="col-6"
      />
    </div>
  </div>
</template>

<script>
import PastReservationCard from '../components/PastReservationCard.vue'

export default {
  name: 'ProfilePastReservations',

  components: {
    PastReservationCard
  },

  props: ['pastReservations']

  // data () {
  //   return {
  //     pastReservations: [
  //       {
  //         id_reservation: 0,
  //         image: '../pages/restaurant.jpg',
  //         name: 'Restavracija Pod Lipco',
  //         numPersons: 6,
  //         date: '22.2.2022',
  //         time: '10:30',
  //         price: 23.20,
  //         pickedMenus: [
  //           {
  //             id_menu: 0,
  //             name: 'Sirov burek',
  //             price: 3.60,
  //             quantity: 2
  //           },
  //           {
  //             id_menu: 1,
  //             name: 'Dunajski zrezek',
  //             price: 6.20,
  //             quantity: 4
  //           },
  //           {
  //             id_menu: 2,
  //             name: 'Pica Margarita',
  //             price: 4.00,
  //             quantity: 1
  //           }
  //         ]
  //       },
  //       {
  //         id_reservation: 1,
  //         image: '../pages/restaurant.jpg',
  //         name: 'Restavracija Pod Lipco',
  //         numPersons: 6,
  //         date: '22.2.2022',
  //         time: '10:30',
  //         pickedMenus: [
  //           {
  //             id_menu: 0,
  //             name: 'Sirov burek',
  //             price: 3.60,
  //             quantity: 2
  //           },
  //           {
  //             id_menu: 1,
  //             name: 'Dunajski zrezek',
  //             price: 6.20,
  //             quantity: 4
  //           },
  //           {
  //             id_menu: 2,
  //             name: 'Pica Margarita',
  //             price: 4.00,
  //             quantity: 1
  //           }
  //         ]
  //       },
  //       {
  //         id_reservation: 2,
  //         image: '../pages/restaurant.jpg',
  //         name: 'Restavracija Pod Lipco',
  //         numPersons: 6,
  //         date: '22.2.2022',
  //         time: '10:30',
  //         pickedMenus: [
  //           {
  //             id_menu: 0,
  //             name: 'Sirov burek',
  //             price: 3.60,
  //             quantity: 2
  //           },
  //           {
  //             id_menu: 1,
  //             name: 'Dunajski zrezek',
  //             price: 6.20,
  //             quantity: 4
  //           },
  //           {
  //             id_menu: 2,
  //             name: 'Pica Margarita',
  //             price: 4.00,
  //             quantity: 1
  //           }
  //         ]
  //       },
  //       {
  //         id_reservation: 3,
  //         image: '../pages/restaurant.jpg',
  //         name: 'Restavracija Pod Lipco',
  //         numPersons: 6,
  //         date: '22.2.2022',
  //         time: '10:30',
  //         pickedMenus: [
  //           {
  //             id_menu: 0,
  //             name: 'Sirov burek',
  //             price: 3.60,
  //             quantity: 2
  //           },
  //           {
  //             id_menu: 1,
  //             name: 'Dunajski zrezek',
  //             price: 6.20,
  //             quantity: 4
  //           },
  //           {
  //             id_menu: 2,
  //             name: 'Pica Margarita',
  //             price: 4.00,
  //             quantity: 1
  //           }
  //         ]
  //       },
  //       {
  //         id_reservation: 4,
  //         image: '../pages/restaurant.jpg',
  //         name: 'Restavracija Pod Lipco',
  //         numPersons: 6,
  //         date: '22.2.2022',
  //         time: '10:30',
  //         pickedMenus: [
  //           {
  //             id_menu: 0,
  //             name: 'Sirov burek',
  //             price: 3.60,
  //             quantity: 2
  //           },
  //           {
  //             id_menu: 1,
  //             name: 'Dunajski zrezek',
  //             price: 6.20,
  //             quantity: 4
  //           },
  //           {
  //             id_menu: 2,
  //             name: 'Pica Margarita',
  //             price: 4.00,
  //             quantity: 1
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // }
}
</script>
