<template>
  <div class="row wrap">
    <div
      style="text-align: center"
      class="text-h4 q-mb-xl col-12"
    >
      Aktivne Rezervacije
    </div>
    <div class="offset-3 col-6">
      <active-reservation-card
        v-for="activeReservation in activeReservations"
        :key="activeReservation.id_reservation"
        :active-reservation="activeReservation"
      />
    </div>
  </div>
</template>

<script>
import ActiveReservationCard from '../components/ActiveReservationCard.vue'

export default {
  name: 'ProfileActiveReservations',

  components: {
    ActiveReservationCard
  },

  data () {
    return {
      activeReservations: [
        {
          id_reservation: 0,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          price: 23.20,
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 1,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 2,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 3,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        },
        {
          id_reservation: 4,
          image: '../pages/restaurant.jpg',
          name: 'Restavracija Pod Lipco',
          numPersons: 6,
          date: '22.2.2022',
          time: '10:30',
          pickedMenus: [
            {
              id_menu: 0,
              name: 'Sirov burek',
              price: 3.60,
              quantity: 2
            },
            {
              id_menu: 1,
              name: 'Dunajski zrezek',
              price: 6.20,
              quantity: 4
            },
            {
              id_menu: 2,
              name: 'Pica Margarita',
              price: 4.00,
              quantity: 1
            }
          ]
        }
      ]
    }
  }
}
</script>
