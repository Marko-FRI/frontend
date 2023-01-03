<template>
  <q-header class="bg-transparent q-pa-md">
    <q-toolbar>
      <q-toolbar-title>
        <router-link
          to="/"
          style="text-decoration: none; color: black; font-size:32px;"
        >
          <span v-if="$q.screen.width > 385">Book My Restaurant</span>
          <span v-else>BMR</span>
        </router-link>
      </q-toolbar-title>
      <div
        v-if="$q.screen.width > 1023"
        class="col-8 row no-wrap justify-end q-gutter-x-lg"
      >
        <q-btn
          flat
          no-caps
          color="black"
          label="Domov"
          to="/"
          class=" text-custom-size border-rad"
        />
        <q-btn
          flat
          no-caps
          color="black"
          label="Restavracije"
          to="/"
          class=" text-custom-size border-rad"
        />

        <q-btn
          flat
          no-caps
          color="black"
          label="O nas"
          to="/aboutUs"
          class=" text-custom-size border-rad"
        />

        <q-btn
          flat
          no-caps
          color="white"
          :label="(isLoggedIn) ? 'Profil' : 'Prijava'"
          :to="(isLoggedIn) ? '/profile' : '/login'"
          class="text-custom-size bg-positive border-rad"
        />

        <q-btn
          v-if="isLoggedIn"
          flat
          no-caps
          color="white"
          label="Odjava"
          to="/logout"
          class="text-custom-size bg-red-7 border-rad"
        />
      </div>
      <q-btn
        v-if="$q.screen.width < 1024"
        dense
        flat
        round
        icon="menu"
        color="black"
        @click="toggleDrawer()"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'HeaderComponent',

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      toggleLeftDrawer: false
    }
  },

  computed: {
    isLoggedIn () {
      return this.userStore.token !== null
    }
  },

  methods: {
    toggleDrawer () {
      this.toggleLeftDrawer = !this.toggleLeftDrawer
      this.$emit('toggleDrawer')
    }
  }
}
</script>

<style>
  .text-custom-size {
    font-size: 18px !important;
  }

  .border-rad {
    border-radius: 5px !important;
  }
</style>
