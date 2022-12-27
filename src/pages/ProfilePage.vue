<template>
  <div>
    <p class="page-title q-mb-xl">
      Domov / Moj Profil
    </p>
    <div style="text-align: center">
      <img
        src="../pages/food.jpg"
        class="profile-picture"
      >
      <div
        class="q-mt-sm text-h5"
      >
        Jan Merhar
      </div>
    </div>
    <div class="q-mt-xl">
      <q-tabs
        v-model="tab"
        class="row no-wrap q-mx-lg"
      >
        <!-- Ko se izbere enega, se spremeni barva v zeleno -->
        <q-tab
          name="edit_profile"
          label="Uredi profil"
          no-caps
          class="col-3"
        />
        <q-tab
          name="favourited"
          label="Priljubljene"
          no-caps
          class="col-3"
        />
        <q-tab
          name="previus_reservations"
          label="Pretekle rezervacije (14)"
          no-caps
          class="col-3"
        />
        <q-tab
          name="active_reservations"
          label="Aktivne rezervacije (1)"
          no-caps
          class="col-3"
        />
      </q-tabs>
      <q-separator
        color="grey"
        inset
        class="q-mx-lg"
      />
    </div>
  </div>
</template>

<script>
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'ProfilePage',

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      tab: 'edit_profile'
    }
  },

  mounted () {
    if (this.userStore.token === null) { this.$router.push('/') }
  }
}
</script>

<style scoped>
    .page-title {
        background-color: #F2F2EF !important;
        padding: 30px 100px 30px !important;
        font-size: 22px !important;
        width: 100% !important;
    }

    .profile-picture {
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }

    :deep .q-tab__label {
        font-size: 1.2rem;
    }
</style>
