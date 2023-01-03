<template>
  <q-layout>
    <header-component @toggle-drawer="leftDrawerOpen = !leftDrawerOpen" />

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      full-width
    >
      <!-- drawer content -->
      <div
        v-if="leftDrawerOpen"
        class="column justify-end q-gutter-x-lg"
      >
        <q-btn
          flat
          no-caps
          color="black"
          label="Domov"
          class=" text-custom-size  border-rad"
          to="/"
        />
        <q-btn
          flat
          no-caps
          color="black"
          label="Restavracije"
          class=" text-custom-size  border-rad"
          to="/"
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
          :to="(isLoggedIn) ? '/profil' : '/login'"
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
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-component />
  </q-layout>
</template>

<script>
import HeaderComponent from 'src/components/HeaderComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'MainLayout',

  components: {
    HeaderComponent,
    FooterComponent
  },
  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      // allCategories: [],
      leftDrawerOpen: false
    }
  },
  computed: {
    isLoggedIn () {
      return this.userStore.token !== null
    }
  }
}
</script>
