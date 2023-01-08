<template>
  <q-page
    padding
    class="column flex-center"
  >
    <h3>Prijava</h3>

    <q-input
      v-model="email"
      label="E-mail"
      dense
      class="loginInput"
      :rules="[val => !!val || 'Polje je obvezno']"
    />

    <q-input
      v-model="password"
      label="Geslo"
      class="loginInput"
      :type="isPwd ? 'password' : 'text'"
      :rules="[val => !!val || 'Polje je obvezno']"
      dense
    >
      <template #append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <q-btn
      class="loginButton"
      :disabled="!isEmptyInput"
      @click="validateLogin"
    >
      Prijava
    </q-btn>

    <p>
      Še nimate računa? <router-link to="/register">
        Registracija
      </router-link>
    </p>
    <p
      v-if="errorMessage.length > 0"
      class="text-red-7 text-h6"
    >
      {{ errorMessage }}
    </p>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/UserStore'

export default {
  name: 'LoginPage',

  setup () {
    const userStore = useUserStore()

    return { userStore }
  },

  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
      errorMessage: ''
    }
  },

  computed: {
    isEmptyInput () {
      if (this.email !== '' && this.password !== '') {
        // alert('V redu')
        return 1
      } else { return 0 }
    }
  },

  mounted () {
    if (this.userStore.token !== null) { this.$router.push('/') }
  },

  methods: {
    async validateLogin () {
      try {
        await api.get('/sanctum/csrf-cookie')
        const reply = await api.post('/login', {
          email: this.email,
          password: this.password
        })

        this.userStore.token = reply.data.token
        this.userStore.data = reply.data.userData
        this.errorMessage = ''
        console.log(reply)
        if (this.userStore.data.id_restaurant !== null) {
          this.$router.push('/restaurant/' + this.userStore.data.id_restaurant + '/admin')
        } else {
          this.$router.push('/')
        }
      } catch (error) {
        this.errorMessage = error.response.data.message
        this.password = ''
        // console.log(error)
      }
    }
  }
}
</script>

<style scoped>

    h3 {
        margin-top: 0px;
        margin-bottom: 30px;
    }

    .loginInput {
        margin-bottom: 20px;
        width: 300px
    }

    .loginButton {
        margin-bottom: 20px;
        width: 150px;
    }
</style>
