<template>
  <q-header class="bg-transparent q-pa-md">
    <q-toolbar>
      <q-toolbar-title class="col-4">
        <router-link
          to="/"
          style="text-decoration: none; color: black; font-size:32px;"
        >
          Book My Restaurant
        </router-link>
      </q-toolbar-title>
      <div class="col-8 row no-wrap justify-end q-gutter-x-lg">
        <q-btn
          flat
          no-caps
          color="black"
          label="Domov"
          class=" text-custom-size  border-rad"
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

  computed: {
    isLoggedIn () {
      return this.userStore.token !== null
    }
  }
}
</script>

<style scoped>
  .text-custom-size {
    font-size: 18px !important;
  }

  .border-rad {
    border-radius: 5px !important;
  }
</style>
