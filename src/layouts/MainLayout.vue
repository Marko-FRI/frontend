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
        <q-btn-dropdown
          flat
          no-caps
          label="Restavracije"
          class=" q-pr-none bg-transparent text-black text-custom-size border-rad"
        >
          <q-list>
            <q-item
              v-close-popup
              clickable
            >
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              v-close-popup
              clickable
            >
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              v-close-popup
              clickable
            >
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          flat
          no-caps
          color="black"
          label="O nas"
          class=" text-custom-size border-rad"
        />

        <q-btn
          flat
          no-caps
          color="black"
          label="Priljubljeno"
          class=" text-custom-size border-rad"
        />

        <q-btn
          flat
          no-caps
          color="white"
          :label="(isLoggedIn) ? 'Profil' : 'Prijava'"
          :to="(isLoggedIn) ? '/profil/'+userStore.data.id_user : '/login'"
          class="text-custom-size bg-green-8 border-rad"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderComponent from 'src/components/HeaderComponent.vue'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'MainLayout',

  components: {
    HeaderComponent
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
