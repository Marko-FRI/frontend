<template>
  <div class="custom-class">
    <q-separator
      color="positive"
      width="100%"
      class="q-pt-sm"
    />
    <div class="row no-wrap q-pa-xl custom-class_content q-mx-auto">
      <div class="col-3">
        <div class="text-h5 text-white custom-class_content-title">
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
            to="/restaurants"
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
            Odjava
          </router-link>
        </div>
        <div>
          <router-link
            v-if="userStore.token === null"
            to="/login"
            class="custom-link"
          >
            Prijava
          </router-link>
        </div>
      </div>
      <div class="col-3">
        <div class="text-h5 text-white custom-class_content-title">
          Kategorije
        </div>
        <div>
          <router-link
            to="/restaurants"
            class="custom-link"
          >
            Burgerji
          </router-link>
        </div>
        <div>
          <router-link
            to="/restaurants"
            class="custom-link"
          >
            Solata
          </router-link>
        </div>
      </div>
      <div class="col-3">
        <div class="text-h5 text-white custom-class_content-title">
          Kontakt
        </div>
        <div>
          <p
            class="custom-link"
          >
            Fakulteta za računalništvo in<br> informatiko
          </p>
        </div>
        <div>
          <p
            class="custom-link q-mt-sm"
          >
            Večna pot 113, 1000 Ljubljanas
          </p>
        </div>
        <div>
          <p
            class="custom-link q-mt-sm"
          >
            T: 01/321321123
          </p>
        </div>
        <div>
          <p
            class="custom-link"
          >
            E:bmr@fri.com
          </p>
        </div>
      </div>
      <div class="col-3 text-center">
        <div class="text-h5 text-white custom-class_content-title">
          Družbena omrežja
        </div>
        <div class="row  text-center">
          <div class="col-4">
            <q-icon
              name="mdi-facebook"
              size="md"
            />
          </div>
          <div class="col-4">
            <q-icon
              name="mdi-twitter"
              size="md"
            />
          </div>
          <div class="col-4">
            <q-icon
              name="mdi-instagram"
              size="md"
            />
          </div>
        </div>
        <div>
          <p
            class="custom-link q-mt-lg"
          >
            Sledite nam na družbenih <br> omrežjih
          </p>
        </div>
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
    .custom-class_content {
      width:70%;
    }
    .custom-class_content-title {
      margin-bottom: 30px;
    }
</style>
