<template>
  <div class="custom-class">
    <q-separator
      color="positive"
      width="100%"
      class="q-pt-sm"
    />
    <div class="row no-wrap q-pa-xl">
      <div class="col-3">
        <div class="text-h5 text-white">
          Povezave
        </div>
        <div>
          <router-link
            to="/"
            class="custom-link"
          >
            Domov
          </router-link>
        </div>
        <div>
          <router-link
            to="/"
            class="custom-link"
          >
            Restavracije
          </router-link>
        </div>
        <div>
          <router-link
            to="/aboutUs"
            class="custom-link"
          >
            O nas
          </router-link>
        </div>
        <div>
          <router-link
            v-if="userStore.token !== null"
            to="/profile"
            class="custom-link"
          >
            Profil
          </router-link>
        </div>
        <div>
          <router-link
            v-if="userStore.token !== null"
            to="/logout"
            class="custom-link"
          >
            Logout
          </router-link>
        </div>
        <div>
          <router-link
            v-if="userStore.token === null"
            to="/login"
            class="custom-link"
          >
            Login
          </router-link>
        </div>
      </div>
      <div class="col-3">
        <div class="text-h5 text-white">
          Kategorije
        </div>
        <div>
          <router-link
            to="/"
            class="custom-link"
          >
            prva
          </router-link>
        </div>
        <div>
          <router-link
            to="/"
            class="custom-link"
          >
            druga
          </router-link>
        </div>
      </div>
      <div class="col-3">
        tretji
      </div>
      <div class="col-3">
        cetrti
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'FooterComponent',

  setup () {
    const userStore = useUserStore()

    return { userStore }
  }
}
</script>

<style scoped>
    .custom-class {
        background-color: #1D1F21;
        color: #DED3A6;
    }

    .custom-link {
        text-decoration: none !important;
        color: #DED3A6 !important;
    }

    .custom-link:hover {
        text-decoration: underline !important;
        color: white !important;
    }
</style>
