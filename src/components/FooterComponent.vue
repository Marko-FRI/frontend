<template>
  <div class="custom-class">
    <q-separator
      color="positive"
      width="100%"
      class="q-pt-sm"
    />
    <div class="row wrap q-py-xl">
      <div class="col-12 col-sm-3 q-mb-lg">
        <div class="flex flex-center">
          <div>
            <div class="text-h5 text-white q-mb-md">
              Povezave
            </div>
            <div class="q-mb-xs">
              <router-link
                to="/"
                class="custom-link"
              >
                Domov
              </router-link>
            </div>
            <div class="q-mb-xs">
              <router-link
                to="/"
                class="custom-link"
              >
                Restavracije
              </router-link>
            </div>
            <div class="q-mb-xs">
              <router-link
                to="/aboutUs"
                class="custom-link"
              >
                O nas
              </router-link>
            </div>
            <div class="q-mb-xs">
              <router-link
                v-if="userStore.token !== null"
                to="/profile"
                class="custom-link"
              >
                Profil
              </router-link>
            </div>
            <div class="q-mb-xs">
              <router-link
                v-if="userStore.token !== null"
                to="/logout"
                class="custom-link"
              >
                Odjava
              </router-link>
            </div>
            <div class="q-mb-xs">
              <router-link
                v-if="userStore.token === null"
                to="/login"
                class="custom-link"
              >
                Prijava
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-3 q-mb-lg">
        <div class="flex flex-center">
          <div>
            <div class="text-h5 text-white q-mb-md">
              Kategorije
            </div>
            <div
              v-for="category in categories"
              :key="category.id"
              class="q-mb-xs"
            >
              <!-- <router-link
                to="/"
                class="custom-link"
              > -->
              {{ category.name }}
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-3 q-mb-lg">
        <div class="flex flex-center">
          <div>
            <div class="text-h5 text-white q-mb-md">
              Kontakt
            </div>
            <div class="q-mb-xs">
              Fakulteta za računalništvo in informatiko
            </div>
            <div class="q-mb-xs">
              Večna pot 113, 1000 Ljubljana
            </div>
            <div class="q-mb-xs">
              T: 01/321321
            </div>
            <div class="q-mb-xs">
              E: bmr@ffri.si
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-3 q-mb-lg">
        <div class="flex flex-center">
          <div>
            <div class="text-h5 text-white q-mb-md">
              Socialna omrežja
            </div>
            <div class="row no-wrap q-mb-md">
              <div
                class="col-4"
              >
                <a
                  href="https://www.facebook.com/ulfri/"
                  target="_blank"
                  class="custom-link-icon"
                >
                  <q-icon
                    name="facebook"
                    size="lg"
                  />
                </a>
              </div>
              <div
                class="col-4"
              >
                <a
                  href="https://twitter.com/ul_fri"
                  target="_blank"
                  class="custom-link-icon"
                >
                  <q-icon
                    name="mdi-twitter"
                    size="lg"
                  />
                </a>
              </div>
              <div
                class="col-4"
              >
                <a
                  href="https://www.instagram.com/fri.ul/"
                  target="_blank"
                  class="custom-link-icon"
                >
                  <q-icon
                    name="mdi-instagram"
                    size="lg"
                  />
                </a>
              </div>
            </div>
            <div>Sledite nam na socialnih omrežjih</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'
import { api } from 'src/boot/axios'

export default {
  name: 'FooterComponent',

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      categories: []
    }
  },

  mounted () {
    this.getCategories()
  },

  methods: {
    async getCategories () {
      try {
        this.loading = true
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.get('/footerData')

        this.categories = reply.data.categories
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
    .custom-class {
        background-color: #1D1F21;
        color: #DED3A6;
    }

    .custom-link-icon {
      text-decoration: none !important;
      color: #DED3A6 !important;
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
